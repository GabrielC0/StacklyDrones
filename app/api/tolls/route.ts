import { NextResponse } from "next/server"

// Serverless route that checks if a driving route contains tollways using OpenRouteService
// Requires ORS_API_KEY set in environment variables (Vercel/Local)

type Coords = { lat: number; lon: number }

export async function POST(request: Request) {
  try {
    const { origin, destination } = (await request.json()) as {
      origin: Coords
      destination: Coords
    }

    if (!origin || !destination) {
      return NextResponse.json({ error: "Missing origin/destination" }, { status: 400 })
    }

    const apiKey = process.env.ORS_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "ORS_API_KEY is not configured" }, { status: 500 })
    }

    const body = {
      coordinates: [
        [origin.lon, origin.lat],
        [destination.lon, destination.lat],
      ],
      profile: "driving-car",
      format: "json",
      extra_info: ["tollways"],
    }

    const res = await fetch("https://api.openrouteservice.org/v2/directions/driving-car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: `ORS error: ${text}` }, { status: 502 })
    }

    const data = (await res.json()) as any
    // ORS returns extra_info.tollways with values along the route
    const tolls = data?.routes?.[0]?.extras?.tollways
    const hasTolls = Array.isArray(tolls?.values) && tolls.values.some((v: any) => Array.isArray(v) && v[2] === 1)

    // Try to estimate distance on tollways in km using summary if provided
    let tollKm: number | null = null
    try {
      const summary = Array.isArray(tolls?.summary) ? tolls.summary : []
      const tolldist = summary
        .filter((s: any) => s && s.value === 1 && typeof s.distance === "number")
        .reduce((acc: number, s: any) => acc + s.distance, 0)
      if (typeof tolldist === "number" && tolldist > 0) tollKm = Math.round((tolldist / 1000) * 10) / 10
    } catch {}

    // Estimate price with configurable rate (€/km), default 0.09 € / km
    const rateStr = process.env.TOLL_EUR_PER_KM
    const rate = rateStr ? Number(rateStr) : 0.09
    const estimatedEuro = tollKm != null ? Math.round(tollKm * rate * 100) / 100 : null

    return NextResponse.json({ hasTolls: !!hasTolls, tollKm, estimatedEuro, euroPerKm: rate })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Unknown error" }, { status: 500 })
  }
}


