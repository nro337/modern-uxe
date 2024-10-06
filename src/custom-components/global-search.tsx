"use client";

import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CircleX, Search } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import getLogo from "@/utils/school-logo-mapping";
import { BlinkBlur } from "react-loading-indicators";
import dynamic from "next/dynamic";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { Tooltip } from "@/components/ui/tooltip";

interface School {
  objectid: string;
  ipsedsid: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  zip4: string;
  telephone: string;
  type: string;
  status: string;
  population: string;
  county: string;
  contyfips: string;
  country: string;
  latitude: string;
  longitude: string;
  naics_code: string;
  naics_desc: string;
  source: string;
  sourcedate: string;
  val_method: string;
  val_date: string;
  website: string;
  stfips: string;
  cofips: string;
  sector: string;
  level: string;
  hi_offer: string;
  deg_grant: string;
  locale: string;
  close_date: string;
  merge_id: string;
  alias: string;
  set_size: string;
  inst_size: string;
  pt_enroll: string;
  ft_enroll: string;
  tot_enroll: string;
  housing: string;
  dorm_cap: string;
  tot_emp: string;
  shelter_id: string;
  obj: {
    geo_point_2d: {
      lon: number;
      lat: number;
    };
    geo_shape: {
      type: string;
      geometry: {
        coordinates: [number, number];
        type: string;
      };
      properties: {
        name: string;
      };
    };
  };
}

interface SearchResult {
  // Define the structure of your search results here
  total_count: number;
  results: School[];
  // Add other relevant fields
}

const GlobalSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchSearchResults = async (): Promise<SearchResult> => {
    const response = await fetch(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-colleges-and-universities/records?where=name%20like%20%22${encodeURIComponent(
        searchTerm.toLowerCase()
      )}%22&limit=20`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data, refetch, isLoading, isError } = useQuery<SearchResult, Error>({
    queryKey: ["school-search", searchTerm],
    queryFn: fetchSearchResults,
    enabled: false,
  });

  const handleSearch = () => {
    if (searchTerm.trim()) {
      refetch();
    }
  };

  const Map = useMemo(
    () =>
      dynamic(() => import("@/custom-components/leaflet-map"), {
        loading: () => (
          <BlinkBlur color="#6789BF" size="medium" text="" textColor="" />
        ),
        ssr: false,
      }),
    []
  );

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex gap-2 backdrop-blur-md backdrop-filter">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="w-full pr-10"
          />
          {searchTerm && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <CircleX className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8}>
                  <p>Clear</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <Button onClick={handleSearch} disabled={isLoading}>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
      {isLoading && (
        <BlinkBlur color="#6789BF" size="medium" text="" textColor="" />
      )}
      {isError && <p>Error fetching results</p>}
      {data && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {data.results.map((school) => (
              <div key={school.objectid}>
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <Image
                    src={
                      getLogo(school.objectid) ??
                      "https://via.placeholder.com/400"
                    }
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                  />
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {school.name}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {school.address}, {school.city}, {school.state} {school.zip}
                  </p>
                  <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>
                      Pop:{" "}
                      {parseInt(school.population) < 0
                        ? "N/A"
                        : school.population}
                    </span>
                    {/* <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    $100
                  </span> */}
                  </button>
                  <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>{school.objectid}</span>
                    {/* <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    $100
                  </span> */}
                  </button>
                  <Map
                    posix={[
                      parseFloat(school.latitude),
                      parseFloat(school.longitude),
                    ]}
                    url={school.website}
                  />
                </BackgroundGradient>
              </div>
              // <li key={school.objectid}>
              //   <h3>{school.name}</h3>
              //   <p>{school.address}, {school.city}, {school.state} {school.zip}</p>
              // </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
