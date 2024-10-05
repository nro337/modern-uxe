export default function getLogo(objId: string): string | null {
  const logoMap = {
    "322": '/logos/2000.png', //Abilene Christian
    "5566": '/logos/2005.png', //Air Force
    "3619": '/logos/2006.png', //Akron
    "2452": '/logos/333.png', //Alabama
    "5132": "/logos/2010.png", //Alabama A&M
    "2528": '/logos/2011.png', //Alabama State
    "3552": '/logos/399.png', //Albany
    "4615": '/logos/2016.png', //Alcorn State
    "20": '/logos/44.png', //American
    "1158": '/logos/2026.png', //Appalachian State
    "359": '/logos/12.png', //Arizona
    "6524": '/logos/9.png', //Arizona State
    "3833": '/logos/8.png', //Arkansas
    "2293": '/logos/2032.png', //Arkansas State
    "2292": '/logos/2029.png', //Arkansas-Pine Bluff
    "4750": '/logos/349.png', //Army
    "1899": '/logos/2.png', // Auburn
    "692": '/logos/2046.png', //Austin Peay
    "2215": '/logos/252.png', //BYU
    "700": '/logos/2050.png', //Ball State
    "3943": '/logos/239.png', //Baylor
    "2987": '/logos/91.png', //Bellarime
    "5752": '/logos/2057.png', //Belmont
    "1739": '/logos/2065.png', //Bethune-Cookman
    "5090": '/logos/2066.png', //Binghamton
    "1080": '/logos/68.png', //Boise State
    "475": '/logos/103.png', //Boston College
    "1251": '/logos/104.png', //Boston University
    "3622": '/logos/189.png', //Bowling Green
    "5777": '/logos/71.png', //Bradley
    "802": '/logos/225.png', //Brown
    "3923": '/logos/2803.png', //Bryant
    "300": '/logos/2083.png', //Bucknell
    "3553": '/logos/2084.png', //Buffalo
    "4387": '/logos/2086.png', //Butler
    "2322": '/logos/2934.png', //CSU Bakersfield
    "2135": '/logos/2239.png', //CSU Fullerton
    "5688": '/logos/2463.png', //CSU Northridge
    "1065": '/logos/13.png', //Cal Poly
    "2328": '/logos/25.png', //CalTech
    "2363": '/logos/2856.png', //California Baptist
    "5803": '/logos/2097.png', //Campbell
    "4978": '/logos/2099.png', //Canisius
    "2453": '/logos/2110.png', //Central Arkansas
    "5967": '/logos/2115.png', //Central Connecticut
    "1258": '/logos/2117.png', //Central Michigan
    "3750": '/logos/232.png', //Charleston
    "5794": '/logos/2127.png', //Charleston Southern
    "4636": '/logos/2429.png', //Charlotte
    "3773": '/logos/236.png', //Chattanooga
    "2350": '/logos/2130.png', //Chicago State
    "3576": '/logos/2132.png', //Cincinnati
    "3751": '/logos/228.png', //Clemson
    "4183": '/logos/325.png', //Cleveland State
    "536": '/logos/324.png', //Coastal Carolina
    "4895": '/logos/2142.png', //Colgate
    "5561": '/logos/38.png', //Colorado
    "4368": '/logos/36.png', //Colorado State
    "5635": '/logos/171.png', //Columbia
    "3272": '/logos/2154.png', //Coppin State
    "4537": '/logos/172.png', //Cornell
    "5186": '/logos/156.png', //Creighton
    "4520": '/logos/159.png', //Dartmouth
    "2867": '/logos/2166.png', //Davidson
    "1851": '/logos/2168.png', //Dayton
    "939": '/logos/48.png', //Delaware
    "2759": '/logos/2169.png', //Delaware State
    "5771": '/logos/2172.png', //Denver
    "4214": '/logos/2174.png', //Detroit Mercy
    "1857": '/logos/3101.png', //Dixie State
    "2140": '/logos/2181.png', //Drake
    "3998": '/logos/2182.png', //Drexel
    "1765": '/logos/150.png', //Duke
    "3646": '/logos/2184.png', //Duquesne
    "5805": '/logos/151.png', //East Carolina
    "5588": '/logos/2193.png', //East Tennessee State
    "2345": '/logos/2197.png', //Eastern Illinois
    "6017": '/logos/2198.png', //Eastern Kentucky
    "3692": '/logos/2199.png', //Eastern Michigan
    "571": '/logos/331.png', //Eastern Washington
    "2576": '/logos/2210.png', //Elon
    "4453": '/logos/339.png', //Evansville
    "2734": '/logos/2217.png', //Fairfield
    "1298": '/logos/161.png', //Fairleigh Dickinson
    "149": '/logos/57.png', //Florida
    "146": '/logos/50.png', //Florida A&M
    "1736": '/logos/2226.png', //Florida Atlantic
    "4773": '/logos/526.png', //Florida Gulf Coast
    "148": '/logos/2229.png', //Florida International
    "4412": '/logos/52.png', //Florida State
    "4301": '/logos/2230.png', //Fordham
    "2297": '/logos/278.png', //Fresno State
    "753": '/logos/231.png', //Furman
    "3559": '/logos/2241.png', //Gardner-Webb
    "3259": '/logos/2244.png', //George Mason
    "3328": '/logos/45.png', //George Washington
    "1202": '/logos/46.png', //Georgetown
    "164": '/logos/61.png', //Georgia
    "5430": '/logos/290.png', //Georgia Southern
    "1074": '/logos/2247.png', //Georgia State
    "3417": '/logos/59.png', //Georgia Tech
    "4347": '/logos/2250.png', //Gonzaga
    "2379": '/logos/2755.png', //Grambling
    "5756": '/logos/2253.png', //Grand Canyon
    "2519": '/logos/2739.png', //Green Bay
    "2221": '/logos/2261.png', //Hampton
    "1086": '/logos/42.png', //Hartford
    "3708": '/logos/108.png', //Harvard
    "1730": '/logos/62.png', //Hawaii
    "3009": '/logos/2272.png', //High Point
    "4539": '/logos/2275.png', //Hofstra
    "5182": '/logos/107.png', //Holy Cross
    "821": '/logos/248.png', //Houston
    "749": '/logos/2277.png', //Houston Baptist
    "3279": '/logos/47.png', //Howard
    "1230": '/logos/85.png', //IUPUI
    "168": '/logos/70.png', //Idaho
    "166": '/logos/304.png', //Idaho State
    "5582": '/logos/356.png', //Illinois
    "2355": '/logos/2287.png', //Illinois State
    "2165": '/logos/2916.png', //Incarante Word
    "1535": '/logos/84.png', //Indiana
    "1534": '/logos/282.png', //Indiana State
    "6233": '/logos/314.png', //Iona
    "4296": '/logos/2294.png', //Iowa
    "1584": '/logos/66.png', //Iowa State
    "5001": '/logos/2296.png', //Jackson State
    "4972": '/logos/294.png', //Jacksonville
    "622": '/logos/55.png', //Jacksonville State
    "833": '/logos/256.png', //James Madison
    "181": '/logos/2305.png', //Kansas
    "6096": '/logos/140.png', //Kansas City
    "3706": '/logos/2306.png', //Kansas State
    "120": '/logos/338.png', //Kennesaw State
    "1854": '/logos/2309.png', //Kent State
    "3616": '/logos/96.png', //Kentucky
    "6023": '/logos/99.png', //LSU
    "3915": '/logos/2325.png', //La Salle
    "406": '/logos/322.png', //Lafayette
    "250": '/logos/2320.png', //Lamar
    "2181": '/logos/2329.png', //Lehigh
    "5172": '/logos/2335.png', //Liberty
    "2522": '/logos/288.png', //Lipscomb
    "5529": '/logos/2031.png', //Little Rock
    "5567": '/logos/299.png', //Long Beach State
    "1662": '/logos/112358.png', //Long Island 
    "65": '/logos/2344.png', //Longwood
    "1222": '/logos/309.png', //Louisiana
    "5613": '/logos/2348.png', //Louisiana Tech
    "966": '/logos/97.png', //Louisville
    "40": '/logos/2352.png', //Loyola Maryland
    "3423": '/logos/2350.png', //Loyola Chicago
    "1090": '/logos/2351.png', //Loyola Marymount
    "4176": '/logos/311.png', //Maine
    "5079": '/logos/2363.png', //Manhattan
    "1770": '/logos/2368.png', //Marist
    "320": '/logos/269.png', //Marquette
    "5267": '/logos/276.png', //Marshall
    "4471": '/logos/120.png', //Maryland
    "22": '/logos/2379.png', //Maryland-Eastern Shore
    "6021": '/logos/2377.png', //McNeese State
    "3593": '/logos/235.png', //Memphis
    "2544": '/logos/2382.png', //Mercer
    "2991": '/logos/2771.png', //Merrimack
    "152": '/logos/2390.png', //Miami
    "781": '/logos/193.png', //Miami (OH)
    "1003": '/logos/130.png', //Michigan
    "468": '/logos/127.png', //Michigan State
    "5783": '/logos/2393.png', //Middle Tennessee
    "751": '/logos/270.png', //Milwaukee
    "3467": '/logos/135.png', //Minnesota
    "4358": '/logos/344.png', //Mississippi State
    "6073": '/logos/2400.png', //Mississippi Valley State
    "5046": '/logos/142.png', //Missouri
    "4514": '/logos/2623.png', //Missouri State
    "6224": '/logos/2405.png', //Monmouth
    "4227": '/logos/149.png', //Montana
    "5052": '/logos/344.png', //Montana State
    "4421": '/logos/2413.png', //Morehead State
    "1603": '/logos/2415.png', //Morgan State
    "2726": '/logos/116.png', //Mount St. Mary's
    "4422": '/logos/93.png', //Murray State
    "1760": '/logos/152.png', //NC State
    "4559": '/logos/2885.png', //NJIT
    "396": '/logos/2426.png', //Navy
    "1812": '/logos/158.png', //Nebraska
    "1813": '/logos/2440.png', //Nevada
    "1451": '/logos/160.png', //New Hampshire
    "1818": '/logos/167.png', //New Mexico
    "4530": '/logos/166.png', //New Mexico State
    "5615": '/logos/2443.png', //New Orleans
    "1831": '/logos/315.png', //Niagara
    "2382": '/logos/2447.png', //Nicholls State
    "5790": '/logos/2450.png', //Norfolk State
    "5138": '/logos/2453.png', //North Alabama
    "3364": '/logos/153.png', //North Carolina
    "5092": '/logos/2448.png', //North Carolina A&T
    "6200": '/logos/2428.png', //North Carolina Central
    "1061": '/logos/155.png', //North Dakota
    "3365": '/logos/2449.png', //North Dakota State
    "1093": '/logos/2454.png', //North Florida
    "3782": '/logos/249.png', //North Texas
    "3463": '/logos/111.png', //Northeastern
    "3792": '/logos/2464.png', //Northern Arizona
    "5681": '/logos/2458.png', //Northern Colorado
    "3626": '/logos/2459.png', //Northern Illinois
    "5706": '/logos/2460.png', //Northern Iowa
    "451": '/logos/94.png', //Northern Kentucky
    "2348": '/logos/77.png', //Northwestern
    "2383": '/logos/2466.png', //Northwestern State
    "2197": '/logos/87.png', //Notre Dame
    "1267": '/logos/2473.png', //Oakland
    "2203": '/logos/195.png', //Ohio
    "3877": '/logos/194.png', //Ohio State
    "3521": '/logos/201.png', //Oklahoma
    "5338": '/logos/197.png', //Oklahoma State
    "3597": '/logos/295.png', //Old Dominion
    "1007": '/logos/145.png', //Ole Miss
    "2868": '/logos/2437.png', //Omaha
    "3520": '/logos/198.png', //Oral Roberts
    "284": '/logos/2483.png', //Oregon
    "283": '/logos/204.png', //Oregon State
    "5665": '/logos/279.png', //Pacific
    "6424": '/logos/213.png', // Penn State
    "4031": '/logos/219.png', //Pennsylvania
    "2330": '/logos/2492.png', //Pepperdine
    "493": '/logos/221.png', //Pitt
    "2154": '/logos/2501.png', //Portland
    "3634": '/logos/2502.png', //Portland State
    "5451": '/logos/2504.png', //Prairie View A&M
    "1721": '/logos/2506.png', //Presbyterian
    "3533": '/logos/163.png', //Princeton
    "683": '/logos/2507.png', //Providence
    "5115": '/logos/2509.png', //Purdue
    "3946": '/logos/2870.png', //Purdue Fort Wayne
    "2188": '/logos/2514.png', //Quinnipiac
    "3689": '/logos/2515.png', //Radford
    "3636": '/logos/227.png', //Rhode Island
    "2169": '/logos/242.png', //Rice
    "754": '/logos/257.png', //Richmond
    "3032": '/logos/2520.png', //Rider
    "5781": '/logos/2523.png', //Robert Morris
    "290": '/logos/164.png', //Rutgers
    "5620": '/logos/2545.png', //SE Louisiana
    "629": '/logos/2565.png', //SIU Edwardsville
    "297": '/logos/2567.png', //SMU
    "5370": '/logos/16.png', //Sacramento State
    "2189": '/logos/2529.png', //Sacred Heart
    "517": '/logos/2603.png', //Saint Joseph's
    "5049": '/logos/139.png', //Saint Louis
    "1103": '/logos/2608.png', //Saint Mary's
    "4560": '/logos/2612.png', //Saint Peter's
    "324": '/logos/2534.png', //Sam Houston
    "2449": '/logos/2535.png', //Samford
    "5670": '/logos/301.png', //San Diego
    "5669": '/logos/21.png', //San Diego State
    "616": '/logos/2539.png', //San Francisco
    "5769": '/logos/23.png', //San Jose State
    "5673": '/logos/2541.png', //Santa Clara
    "5470": '/logos/2547.png', //Seattle
    "5064": '/logos/2550.png', //Seton Hall
    "5188": '/logos/2561.png', //Siena
    "378": '/logos/6.png', //South Alabama
    "534": '/logos/2579.png', //South Carolina
    "4086": '/logos/2569.png', //South Carolina State
    "537": '/logos/2908.png', //South Carolina Upstate
    "746": '/logos/233.png', //South Dakota
    "4037": '/logos/2571.png', //South Dakota State
    "1532": '/logos/58.png', //South Florida
    "3524": '/logos/2546.png', //Southeast Missouri State
    "6022": '/logos/2582.png', //Southern
    "177": '/logos/79.png', //Southern Illinois
    "5043": '/logos/2572.png', //Southern Miss
    "3410": '/logos/253.png', //Southern Utah
    "4544": '/logos/179.png', //St. Bonaventure
    "1652": '/logos/2597.png', //St. Francis Brooklyn
    "1703": '/logos/2598.png', //St. Francis PA
    "773": '/logos/2599.png', //St. John's
    "5041": '/logos/2900.png', //St. Thomas - Minnesota
    "448": '/logos/24.png', //Stanford
    "3944": '/logos/2617.png', //Stephen F. Austin
    "5178": '/logos/56.png', //Stetson
    "310": '/logos/2619.png', //Stony Brook
    "3556": '/logos/183.png', //Syracuse
    "3503": '/logos/2628.png', //TCU
    "4116": '/logos/2627.png', //Tarleton State
    "866": '/logos/218.png', //Temple
    "1100": '/logos/2633.png', //Tennessee
    "2523": '/logos/2634.png', //Tennessee State
    "3933": '/logos/2635.png', //Tennessee Tech
    "3786": '/logos/251.png', //Texas
    "3785": '/logos/245.png', //Texas A&M
    "551": '/logos/357.png', //Texas A&M-Corpus Christi
    "3505": '/logos/2640.png', //Texas Southern
    "5404": '/logos/326.png', //Texas State
    "698": '/logos/2641.png', //Texas Tech
    "2149": '/logos/2649.png', //Toledo
    "2504": '/logos/119.png', //Towson
    "603": '/logos/2653.png', //Troy
    "2860": '/logos/2655.png', //Tulane
    "3529": '/logos/202.png', //Tulsa
    "5133": '/logos/5.png', //UAB
    "4259": '/logos/302.png', //UC Davis
    "1067": '/logos/300.png', //UC Irvine
    "4260": '/logos/27.png', //UC Riverside
    "1069": '/logos/28.png', //UC San Diego
    "1070": '/logos/2540.png', //UC Santa Barbara
    "2859": '/logos/2116.png', //UCF
    "1068": '/logos/26.png', //UCLA
    "5969": '/logos/41.png', //UCONN
    "3421": '/logos/82.png', //UIC
    "4445": '/logos/2433.png', //UL Monroe
    "976": '/logos/2378.png', //UMBC
    "23": '/logos/113.png', //UMass
    "2503": '/logos/2349.png', //UMass Lowell
    "6078": '/logos/2427.png', //UNC Asheville
    "26": '/logos/2430.png', //UNC Greensboro
    "1064": '/logos/350.png', //UNC Wilmington
    "279": '/logos/2439.png', //UNLV
    "2441": '/logos/30.png', //USC
    "2012": '/logos/250.png', //UT Arlington
    "1139": '/logos/2630.png', //UT Martin
    "696": '/logos/292.png', //UT Rio Grande Valley
    "5787": '/logos/2638.png', //UTEP
    "2164": '/logos/2636.png', //UTSA
    "2512": '/logos/254.png', //Utah
    "5461": '/logos/328.png', //Utah State
    "5462": '/logos/3084.png', //Utah Valley
    "375": '/logos/2670.png', //VCU
    "835": '/logos/2678.png', //VMI
    "5778": '/logos/2674.png', //Valparaiso
    "5753": '/logos/238.png', //Vanderbilt
    "5253": '/logos/261.png', //Vermont
    "1161": '/logos/222.png', //Villanova
    "2223": '/logos/258.png', //Virginia
    "834": '/logos/259.png', //Virginia Tech
    "1514": '/logos/2681.png', //Wagner
    "4553": '/logos/154.png', //Wake Forest
    "2021": '/logos/264.png', //Washington
    "3800": '/logos/265.png', //Washington State
    "570": '/logos/2692.png', //Weber State
    "2230": '/logos/277.png', //West Virginia
    "5094": '/logos/2717.png', //Western Carolina
    "5236": '/logos/2710.png', //Western Illinois
    "15": '/logos/98.png', //Western Kentucky
    "740": '/logos/2711.png', //Western Michigan
    "3707": '/logos/2724.png', //Wichita State
    "2015": '/logos/2729.png', //William & Mary
    "3766": '/logos/2737.png', //Winthrop
    "5478": '/logos/275.png', //Wisconsin
    "4321": '/logos/2747.png', //Wofford
    "5439": '/logos/2750.png', //Wright State
    "449": '/logos/2751.png', //Wyoming
    "5440": '/logos/2752.png', //Xavier
    "338": '/logos/43.png', //Yale
    "662": '/logos/2754.png', //Youngstown State
  }
  // @ts-expect-error - this is a valid key
  return logoMap[objId] || null;
}