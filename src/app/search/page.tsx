import { Boxes } from "@/components/ui/background-boxes"
import GlobalSearch from "@/custom-components/global-search"
import { cn } from "@/lib/utils"
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
    <div className="w-full flex flex-col justify-start items-center">
      <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl pt-36 text-white relative z-20")}>
        Find your next school
      </h1>
      <div className={cn("z-20 m-8")}>
        <GlobalSearch />
      </div>
    </div>
  )
}