import { Boxes } from "@/components/ui/background-boxes"
import GlobalSearch from "@/custom-components/global-search"
import { cn } from "@/lib/utils"

export default function Page() {

  return (
    <div className="w-full flex flex-col justify-start items-center overflow-y-auto">
      <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-5xl text-xl pt-36 text-white relative z-20")}>
        Find your next school
      </h1>
      <div className={cn("flex flex-row justify-center z-20 m-8 w-full")}>
        <GlobalSearch />
      </div>
    </div>
  )
}