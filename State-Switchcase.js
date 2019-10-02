var state

function citySearch() {
    switch (state) {
        // 1
        case "AL":
            searchThisState(AL)
            searchThisState(MS)
            searchThisState(TN)
            searchThisState(GA)
            searchThisState(FL)
            break;

        case "AK":
            searchThisState(AK)
            break;

        case "AZ":
            searchThisState(AZ)
            searchThisState(CA)
            searchThisState(NV)
            searchThisState(UT)
            searchThisState(CO)
            searchThisState(NM)
            break;

        case "AR":
            searchThisState(AR)
            searchThisState(LA)
            searchThisState(TX)
            searchThisState(OK)
            searchThisState(KS)
            searchThisState(MO)
            searchThisState(TN)
            searchThisState(MS)
            break;

        // 5
        case "CA":
            searchThisState(CA)
            searchThisState(OR)
            searchThisState(NV)
            searchThisState(AZ)
            break;

        case "CO":
            searchThisState(CO)
            searchThisState(UT)
            searchThisState(WY)
            searchThisState(NE)
            searchThisState(KS)
            searchThisState(OK)
            searchThisState(TX)
            searchThisState(NM)
            searchThisState(AZ)
            break;

        case "CT":
            searchThisState(CT)
            searchThisState(RI)
            searchThisState(MA)
            searchThisState(NY)
            searchThisState(NJ)
            break;

        case "DE":
            searchThisState(DE)
            searchThisState(MD)
            searchThisState(VA)
            searchThisState(PA)
            searchThisState(DC)
            searchThisState(NJ)
            break;

        case "FL":
            searchThisState(FL)
            searchThisState(GA)
            searchThisState(AL)
            break;

        // 10
        case "GA":
            searchThisState(GA)
            searchThisState(FL)
            searchThisState(AL)
            searchThisState(TN)
            searchThisState(NC)
            searchThisState(SC)
            break;

        case "HI":
            searchThisState(HI)
            break;

        case "ID":
            searchThisState(ID)
            searchThisState(WA)
            searchThisState(OR)
            searchThisState(NV)
            searchThisState(UT)
            searchThisState(WY)
            searchThisState(MT)
            break;

        case "IL":
            searchThisState(IL)
            searchThisState(WI)
            searchThisState(IA)
            searchThisState(MO)
            searchThisState(KY)
            searchThisState(IN)
            break;

        case "IN":
            searchThisState(IN)
            searchThisState(MI)
            searchThisState(OH)
            searchThisState(KY)
            searchThisState(IL)
            break;

        // 15
        case "IA":
            searchThisState(IA)
            searchThisState(MN)
            searchThisState(WI)
            searchThisState(IL)
            searchThisState(MO)
            searchThisState(NE)
            searchThisState(SD)
            break;

        case "KS":
            searchThisState(KS)
            searchThisState(NE)
            searchThisState(MO)
            searchThisState(AR)
            searchThisState(OK)
            searchThisState(TX)
            searchThisState(CO)
            break;

        case "KY":
            searchThisState(KY)
            searchThisState(IN)
            searchThisState(OH)
            searchThisState(WV)
            searchThisState(VA)
            searchThisState(TN)
            searchThisState(MO)
            searchThisState(IL)
            break;

        case "LA":
            searchThisState(LA)
            searchThisState(TX)
            searchThisState(AR)
            searchThisState(MS)
            break;

        case "ME":
            searchThisState(ME)
            searchThisState(NH)
            searchThisState(VT)
            searchThisState(MA)
            searchThisState(NY)
            break;

        // 20
        case "MD":
            searchThisState(MD)
            searchThisState(DC)
            searchThisState(DE)
            searchThisState(PA)
            searchThisState(VA)
            break;

        case "MA":
            searchThisState(MA)
            searchThisState(NH)
            searchThisState(VT)
            searchThisState(NY)
            searchThisState(CT)
            searchThisState(RI)
            break;

        case "MI":
            searchThisState(MI)
            searchThisState(IN)
            searchThisState(OH)
            break;

        case "MN":
            searchThisState(MN)
            searchThisState(ND)
            searchThisState(SD)
            searchThisState(IA)
            searchThisState(WI)
            break;

        case "MS":
            searchThisState(MS)
            searchThisState(LA)
            searchThisState(AR)
            searchThisState(TN)
            searchThisState(AL)
            break;

        // 25
        case "MO":
            searchThisState(MO)
            searchThisState(KS)
            searchThisState(NE)
            searchThisState(IA)
            searchThisState(IL)
            searchThisState(KY)
            searchThisState(TN)
            searchThisState(AR)
            searchThisState(OK)
            break;

        case "MT":
            searchThisState(MT)
            searchThisState(ID)
            searchThisState(WY)
            searchThisState(SD)
            searchThisState(ND)
            break;

        case "NE":
            searchThisState(NE)
            searchThisState(SD)
            searchThisState(IA)
            searchThisState(MO)
            searchThisState(KS)
            searchThisState(CO)
            searchThisState(WY)
            break;

        case "NV":
            searchThisState(NV)
            searchThisState(CA)
            searchThisState(OR)
            searchThisState(ID)
            searchThisState(UT)
            searchThisState(AZ)
            break;

        case "NH":
            searchThisState(NH)
            searchThisState(ME)
            searchThisState(VT)
            searchThisState(MA)
            break;

        // 30
        case "NJ":
            searchThisState(NJ)
            searchThisState(DE)
            searchThisState(PA)
            searchThisState(NY)
            break;

        case "NM":
            searchThisState(NM)
            searchThisState(TX)
            searchThisState(OK)
            searchThisState(CO)
            searchThisState(AZ)
            searchThisState(UT)
            break;

        case "NY":
            searchThisState(NY)
            searchThisState(PA)
            searchThisState(NJ)
            searchThisState(CT)
            searchThisState(MA)
            searchThisState(VT)
            break;

        case "NC":
            searchThisState(NC)
            searchThisState(SC)
            searchThisState(GA)
            searchThisState(TN)
            searchThisState(VA)
            break;

        case "ND":
            searchThisState(ND)
            searchThisState(MT)
            searchThisState(WY)
            searchThisState(SD)
            searchThisState(MN)
            break;

        // 35
        case "OH":
            searchThisState(OH)
            searchThisState(MI)
            searchThisState(IN)
            searchThisState(KY)
            searchThisState(WV)
            searchThisState(PA)
            break;

        case "OK":
            searchThisState(OK)
            searchThisState(TX)
            searchThisState(KS)
            searchThisState(NM)
            searchThisState(CO)
            searchThisState(MO)
            searchThisState(AR)
            searchThisState(LA)
            break;

        case "OR":
            searchThisState(OR)
            searchThisState(WA)
            searchThisState(ID)
            searchThisState(NV)
            searchThisState(CA)
            break;

        case "PA":
            searchThisState(PA)
            searchThisState(NY)
            searchThisState(NJ)
            searchThisState(DE)
            searchThisState(MD)
            searchThisState(DC)
            searchThisState(WV)
            searchThisState(OH)
            break;

        case "RI":
            searchThisState(RI)
            searchThisState(CT)
            searchThisState(MA)
            break;

        // 40
        case "SC":
            searchThisState(SC)
            searchThisState(NC)
            searchThisState(GA)
            break;

        case "SD":
            searchThisState(SD)
            searchThisState(ND)
            searchThisState(MT)
            searchThisState(WY)
            searchThisState(NE)
            searchThisState(IA)
            searchThisState(MN)
            break;

        case "TN":
            searchThisState(TN)
            searchThisState(KY)
            searchThisState(VA)
            searchThisState(NC)
            searchThisState(GA)
            searchThisState(AL)
            searchThisState(MS)
            searchThisState(AR)
            searchThisState(MO)
            break;

        case "TX":
            searchThisState(TX)
            searchThisState(NM)
            searchThisState(OK)
            searchThisState(AR)
            searchThisState(LA)
            break;

        case "UT":
            searchThisState(UT)
            searchThisState(ID)
            searchThisState(WY)
            searchThisState(CO)
            searchThisState(NM)
            searchThisState(AZ)
            searchThisState(NV)
            break;

        // 45
        case "VT":
            searchThisState(VT)
            searchThisState(NH)
            searchThisState(MA)
            searchThisState(NY)
            break;

        case "VA":
            searchThisState(VA)
            searchThisState(DC)
            searchThisState(KY)
            searchThisState(TN)
            searchThisState(NC)
            break;

        case "WA":
            searchThisState(WA)
            searchThisState(OR)
            searchThisState(ID)
            break;

        case "WV":
            searchThisState(WV)
            searchThisState(DC)
            searchThisState(VA)
            searchThisState(KY)
            searchThisState(OH)
            searchThisState(PA)
            break;

        case "WI":
            searchThisState(WI)
            searchThisState(MN)
            searchThisState(IA)
            searchThisState(IL)
            break;

        // 50
        case "WY":
            searchThisState(WY)
            searchThisState(MT)
            searchThisState(ID)
            searchThisState(UT)
            searchThisState(CO)
            searchThisState(NE)
            searchThisState(SD)
            break;

        default:
            console.log("No state to search")
    }
}
// citySearch()

const searchThisState = array => {
    // search everything in the array
}

const AL = ["Birmingham, Alabama", "Florence, Alabama", "Gadsden, Alabama", "Huntsville, Alabama", "Mobile, Alabama",
        "Montgomery, Alabama"]

const AK = ["Anchorage, Alaska"]

const AZ = ["Glendale, Arizona", "Mesa, Arizona", "Phoenix, Arizona", "Scottsdale, Arizona", "Tucson, Arizona"]

const AR = ["Hot Springs, Arkansas", "Little Rock, Arkansas"]

const CA = ["Anaheim, California", "Bakersfield, California", "Berkeley, California", "Beverly Hills, California",
        "Burbank, California", "Compton, California", "Downey, California", "Fresno, California", "Fullerton, California",
        "Glendale, California", "Hawthorne, California", "Inglewood, California", "Long Beach, California", "Los Angeles",
        "Manhattan Beach, California", "Modesto, California", "Newport Beach, California", "Oakland, California",
        "Oxnard, California", "Palm Springs, California", "Palo Alto, California", "Pasadena, California",
        "Redondo Beach, California", "Richmond, California", "Riverside, California", "Sacramento, California",
        "San Bernardino, California", "San Diego", "San Francisco", "San Jose, California", "San Rafael, California",
        "Santa Barbara, California", "Santa Cruz, California", "Santa Monica, California", "Santa Rosa, California",
        "Stockton, California", "Torrance, California", "Vallejo, California", "Vista, California", "Whittier,  California"]

const CO = ["Boulder, Colorado", "Colorado Springs, Colorado", "Denver"]

const CT = ["Bridgeport, Connecticut", "Greenwich, Connecticut", "Hartford, Connecticut", "New Haven, Connecticut",
        "New London, Connecticut", "Norwalk, Connecticut", "Stamford, Connecticut"]

const DE = ["Wilmington,  Delaware"]

const FL = ["Coral Springs, Florida", "Daytona Beach, Florida", "Fort Lauderdale, Florida", "Gainesville, Florida",
        "Jacksonville, Florida", "Lakeland, Florida", "Miami", "Ocala, Florida", "Orlando, Florida", "Pensacola, Florida",
        "St. Petersburg, Florida", "Tallahassee, Florida", "Tampa, Florida"]

const GA = ["Albany, Georgia", "Athens, Georgia", "Atlanta", "Augusta, Georgia", "Columbus, Georgia", "Macon, Georgia",
        "Marietta, Georgia", "Savannah, Georgia"]

const HI = ["Honolulu"]

const ID = ["Boise, Idaho"]

const IL = ["Champaign, Illinois", "Chicago", "Decatur, Illinois", "Evanston, Illinois", "Joliet, Illinois", "Oak Park, Illinois",
        "Peoria, Illinois", "Rockford, Illinois"]

const IN = ["Anderson, Indiana", "Bloomington, Indiana", "Evansville, Indiana", "Fort Wayne, Indiana", "Gary, Indiana",
        "Indianapolis", "Richmond, Indiana", "South Bend, Indiana"]

const IA = ["Cedar Rapids, Iowa", "Des Moines, Iowa", "Iowa City, Iowa"]

const KS = ["Kansas City, Kansas", "Lawrence, Kansas", "Wichita,  Kansas", "Topeka, Kansas"]

const KY = ["Ashland, Kentucky", "Bowling Green, Kentucky", "Lexington, Kentucky", "Louisville, Kentucky", "Paducah, Kentucky"]

const LA = ["Baton Rouge, Louisiana", "Lafayette, Louisiana", "Lake Charles, Louisiana", "Monroe, Louisiana",
        "New Orleans", "Shreveport, Louisiana"]

const ME = ["Bangor, Maine", "Portland, Maine"]

const MD = ["Baltimore", "Rockville, Maryland"]

const MA = ["Boston", "Brockton, Massachusetts", "Cambridge, Massachusetts", "Lowell, Massachusetts", "Newton, Massachusetts",
        "Somerville, Massachusetts", "Springfield, Massachusetts", "Worcester, Massachusetts"]

const MI = ["Ann Arbor, Michigan", "Detroit", "Flint, Michigan", "Lansing, Michigan", "Pontiac, Michigan", "Saginaw, Michigan"]

const MN = ["Duluth, Minnesota", "Minneapolis", "Saint Paul, Minnesota"]

const MS = ["Clarksdale, Mississippi", "Greenville, Mississippi", "Hattiesburg, Mississippi", "Jackson, Mississippi",
        "Meridian, Mississippi", "Natchez, Mississippi", "Vicksburg, Mississippi"]

const MO = ["Columbia, Missouri", "Kansas City, Missouri", "Springfield, Missouri", "St. Louis"]

const MT = ["Missoula, Montana"]

const NE = ["Lincoln, Nebraska", "Omaha, Nebraska"]

const NV = ["Las Vegas", "Reno, Nevada"]

const NH = []

const NJ = ["Atlantic City, New Jersey", "Bayonne, New Jersey", "Camden, New Jersey", "East Orange, New Jersey", "Hoboken, New Jersey",
        "Jersey City, New Jersey", "New Brunswick, New Jersey", "Newark, New Jersey", "Passaic, New Jersey", "Paterson, New Jersey",
        "Plainfield, New Jersey", "Summit, New Jersey", "Trenton, New Jersey"]

const NM = ["Albuquerque, New Mexico", "Santa Fe, New Mexico"]

const NY = ["Albany, New York", "Buffalo, New York", "Ithaca, New York", "Kingston, New York", "Mount Vernon, New York",
        "New Rochelle, New York", "New York City", "the New York metropolitan area", "Niagara Falls, New York",
        "Poughkeepsie, New York", "Rochester, New York", "Syracuse, New York", "Troy, New York", "Utica, New York"]

const NC = ["Asheville, North Carolina", "Charlotte, North Carolina", "Durham, North Carolina", "Fayetteville, North Carolina",
        "Greensboro, North Carolina", "Raleigh, North Carolina", "Winston-Salem, North Carolina"]

const ND = []

const OH = ["Akron, Ohio", "Canton, Ohio", "Cincinnati", "Cleveland", "Dayton, Ohio", "Columbus, Ohio", "Shaker Heights, Ohio",
        "Springfield, Ohio", "Toledo, Ohio", "Youngstown, Ohio"]

const OK = ["Enid, Oklahoma", "Norman, Oklahoma", "Oklahoma City", "Tulsa, Oklahoma"]

const OR = ["Corvallis, Oregon", "Eugene, Oregon", "Hillsboro, Oregon", "Portland, Oregon", "Salem, Oregon"]

const PA = ["Allentown, Pennsylvania", "Easton, Pennsylvania", "Erie, Pennsylvania", "Harrisburg, Pennsylvania",
        "Lancaster, Pennsylvania", "Philadelphia", "Pittsburgh", "Reading, Pennsylvania", "Scranton, Pennsylvania",
        "York, Pennsylvania"]

const RI = ["Newport, Rhode Island", "Providence, Rhode Island"]

const SC = ["Charleston, South Carolina", "Columbia, South Carolina", "Greenville, South Carolina", "Spartanburg, South Carolina"]

const SD = []

const TN = ["Knoxville, Tennessee", "Memphis, Tennessee", "Nashville, Tennessee"]

const TX = ["Amarillo, Texas", "Austin, Texas", "Dallas", "Houston", "San Antonio"]

const UT = ["Ogden, Utah", "Provo, Utah", "Salt Lake City"]

const VT = ["Burlington, Vermont"]

const VA = ["Alexandria, Virginia", "Charlottesville, Virginia", "Hampton, Virginia", "Lynchburg, Virginia", "Newport News, Virginia",
        "Norfolk, Virginia", "Portsmouth, Virginia", "Richmond, Virginia", "Virginia Beach, Virginia"]

const WA = ["Bainbridge Island, Washington", "Kirkland, Washington", "Olympia, Washington", "Seattle", "Spokane, Washington"]

const WV = ["Charleston, West Virginia", "Huntington, West Virginia", "Wheeling, West Virginia"]

const WI = ["Green Bay, Wisconsin", "Kenosha, Wisconsin", "Madison, Wisconsin", "Milwaukee", "Racine, Wisconsin"]

const WY = []

const DC = ["Washington, D.C."]























console.log(AL.length)
console.log(AK.length)
console.log(AZ.length)
console.log(AR.length)
console.log(CA.length)
console.log(CO.length)
console.log(CT.length)
console.log(DE.length)
console.log(FL.length)
console.log(GA.length)
console.log(HI.length)
console.log(ID.length)
console.log(IL.length)
console.log(IN.length)
console.log(IA.length)
console.log(KS.length)
console.log(KY.length)
console.log(LA.length)
console.log(ME.length)
console.log(MD.length)
console.log(MA.length)
console.log(MI.length)
console.log(MN.length)
console.log(MS.length)
console.log(MO.length)
console.log(MT.length)
console.log(NE.length)
console.log(NV.length)
console.log(NH.length)
console.log(NJ.length)
console.log(NM.length)
console.log(NY.length)
console.log(NC.length)
console.log(ND.length)
console.log(OH.length)
console.log(OK.length)
console.log(OR.length)
console.log(PA.length)
console.log(RI.length)
console.log(SC.length)
console.log(SD.length)
console.log(TN.length)
console.log(TX.length)
console.log(UT.length)
console.log(VT.length)
console.log(VA.length)
console.log(WA.length)
console.log(WV.length)
console.log(WI.length)
console.log(WY.length)
console.log(DC.length)
console.log("===========")
console.log(
    6+
1+
5+
2+
40+
3+
7+
1+
13+
8+
1+
1+
8+
8+
3+
4+
5+
6+
2+
2+
8+
6+
3+
7+
4+
1+
2+
2+
0+
13+
2+
14+
7+
0+
10+
4+
5+
10+
2+
4+
0+
3+
5+
3+
1+
9+
5+
3+
5+
0+
1
)