import GlobalSearch from "@/custom-components/global-search"
import dynamic from "next/dynamic"
import { useMemo } from "react"

export default function Page() {
  const Map = useMemo(() => dynamic(
    () => import('@/custom-components/leaflet-map'),
    {
        loading: () => <p>A map is loading</p>,
        ssr: false
    }
), [])

  return (
    <div>
      <h1>Search Page</h1>
      <GlobalSearch />
      <Map posix={[0, 0]} />
    </div>
  )
}