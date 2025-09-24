import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { q } = (await request.json()) as { q?: string }
    if (!q || q.trim().length < 3) {
      return NextResponse.json({ error: "Missing or too short query" }, { status: 400 })
    }

    const apiKey = process.env.ORS_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "ORS_API_KEY is not configured" }, { status: 500 })
    }

    const params = new URLSearchParams({
      api_key: apiKey,
      text: q,
      size: "1",
      "boundary.country": "FRA",
    })

    const url = `https://api.openrouteservice.org/geocode/search?${params.toString()}`
    const res = await fetch(url, { headers: { Accept: "application/json" } })
    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: `ORS geocode error: ${text}` }, { status: 502 })
    }
    const data = (await res.json()) as any
    const feature = data?.features?.[0]
    if (!feature?.geometry?.coordinates) {
      return NextResponse.json({ error: "No result" }, { status: 404 })
    }
    const [lon, lat] = feature.geometry.coordinates as [number, number]
    return NextResponse.json({ lat, lon })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Unknown error" }, { status: 500 })
  }
}


