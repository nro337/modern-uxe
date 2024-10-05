import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  
  // Implement your search logic here
  // This is just a placeholder response
  const results = [
    { id: '1', title: `Result 1 for ${query}` },
    { id: '2', title: `Result 2 for ${query}` },
  ]

  return NextResponse.json(results)
}