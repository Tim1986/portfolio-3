var state

function citySearch() {
    switch (state) {
        // 1
        case "AL":
            AL();
            MS();
            TN();
            GA();
            FL();
            break;

        case "AK":
            AK();
            break;

        case "AZ":
            AZ();
            CA();
            NV();
            UT();
            CO();
            NM();
            break;

        case "AR":
            AR();
            LA();
            TX();
            OK();
            KS();
            MO();
            TN();
            MS();
            break;

        // 5
        case "CA":
            CA();
            OR();
            NV();
            AZ();
            break;

        case "CO":
            CO();
            UT();
            WY();
            NE();
            KS();
            OK();
            TX();
            NM();
            AZ();
            break;

        case "CT":
            CT();
            RI();
            MA();
            NY();
            NJ();
            break;

        case "DE":
            DE();
            MD();
            VA();
            PA();
            DC();
            NJ();
            break;

        case "FL":
            FL();
            GA();
            AL();
            break;

        // 10
        case "GA":
            GA();
            FL();
            AL();
            TN();
            NC();
            SC();
            break;

        case "HI":
            HI();
            break;

        case "ID":
            ID();
            WA();
            OR();
            NV();
            UT();
            WY();
            MT();
            break;

        case "IL":
            IL();
            WI();
            IA();
            MO();
            KY();
            IN();
            break;

        case "IN":
            IN();
            MI();
            OH();
            KY();
            IL();
            break;

        // 15
        case "IA":
            IA();
            MN();
            WI();
            IL();
            MO();
            NE();
            SD();
            break;

        case "KS":
            KS();
            NE();
            MO();
            AR();
            OK();
            TX();
            CO();
            break;

        case "KY":
            KY();
            IN();
            OH();
            WV();
            VA();
            TN();
            MO();
            IL();
            break;

        case "LA":
            LA();
            TX();
            AR();
            MS();
            break;

        case "ME":
            ME();
            NH();
            break;

        // 20
        case "MD":
            MD();
            DC();
            DE();
            PA();
            VA();
            break;

        case "MA":
            MA();
            NH();
            VT();
            NY();
            CT();
            RI();
            break;

        case "MI":
            MI();
            IN();
            OH();
            break;

        case "MN":
            MN();
            ND();
            SD();
            IA();
            WI();
            break;

        case "MS":
            MS();
            LA();
            AR();
            TN();
            AL();
            break;

        // 25
        case "MO":
            MO();
            KS();
            NE();
            IA();
            IL();
            KY();
            TN();
            AR();
            OK();
            break;

        case "MT":
            MT();
            ID();
            WY();
            SD();
            ND();
            break;

        case "NE":
            NE();
            SD();
            IA();
            MO();
            KS();
            CO();
            WY();
            break;

        case "NV":
            NV();
            CA();
            OR();
            ID();
            UT();
            AZ();
            break;

        case "NH":
            NH();
            ME();
            VT();
            MA();
            break;

        // 30
        case "NJ":
            NJ();
            DE();
            PA();
            NY();
            break;

        case "NM":
            NM();
            TX();
            OK();
            CO();
            AZ();
            UT();
            break;

        case "NY":
            NY();
            PA();
            NJ();
            CT();
            MA();
            VT();
            break;

        case "NC":
            NC();
            SC();
            GA();
            TN();
            VA();
            break;

        case "ND":
            ND();
            MT();
            WY();
            SD();
            MN();
            break;

        // 35
        case "OH":
            OH();
            MI();
            IN();
            KY();
            WV();
            PA();
            break;

        case "OK":
            OK();
            TX();
            KS();
            NM();
            CO();
            MO();
            AR();
            LA();

            break;

        case "OR":
            OR();
            WA();
            ID();
            NV();
            CA();
            break;

        case "PA":
            PA();
            NY();
            NJ();
            DE();
            MD();
            DC();
            WV();
            OH();
            break;

        case "RI":
            RI();
            CT();
            MA();
            break;

        // 40
        case "SC":
            SC();
            NC();
            GA();
            break;

        case "SD":
            SD();
            ND();
            MT();
            WY();
            NE();
            IA();
            MN();
            break;

        case "TN":
            TN();
            KY();
            VA();
            NC();
            GA();
            AL();
            MS();
            AR();
            MO();
            break;

        case "TX":
            TX();
            NM();
            OK();
            AR();
            LA();
            break;

        case "UT":
            UT();
            ID();
            WY();
            CO();
            NM();
            AZ();
            NV();
            break;

        // 45
        case "VT":
            VT();
            NH();
            MA();
            NY();
            break;

        case "VA":
            VA();
            DC();
            KY();
            TN();
            NC();
            break;

        case "WA":
            WA();
            OR();
            ID();
            break;

        case "WV":
            WV();
            DC();
            VA();
            KY();
            OH();
            PA();
            break;

        case "WI":
            WI();
            MN();
            IA();
            IL();
            break;

        // 50
        case "WY":
            WY();
            MT();
            ID();
            UT();
            CO();
            NE();
            SD();
            break;

        default:
            console.log("No state to search")
    }
}
citySearch()

const AL = () => {
    ["Birmingham, Alabama", "Florence, Alabama", "Gadsden, Alabama", "Huntsville, Alabama", "Mobile, Alabama", 
    "Montgomery, Alabama", ]
}

const AK = () => {
    ["Anchorage, Alaska"]
}

const AZ = () => {
    ["Glendale, Arizona", "Mesa, Arizona", "Phoenix, Arizona", "Scottsdale, Arizona", "Tucson, Arizona", ]
}

const AR = () => {
    ["Hot Springs, Arkansas", "Little Rock, Arkansas", ]
}

const CA = () => {
    ["Anaheim, California", "Bakersfield, California", "Berkeley, California", "Beverly Hills, California", 
    "Burbank, California", "Compton, California", "Downey, California", "Fresno, California", "Fullerton, California",
    "Glendale, California", "Hawthorne, California", "Inglewood, California", "Long Beach, California", "Los Angeles", 
    "Manhattan Beach, California", "Modesto, California", "Newport Beach, California", "Oakland, California", 
    "Oxnard, California", "Palm Springs, California", "Palo Alto, California", "Pasadena, California", 
    "Redondo Beach, California", "Richmond, California", "Riverside, California", "Sacramento, California", 
    "San Bernardino, California", "San Diego", "San Francisco", "San Jose, California", "San Rafael, California", 
    "Santa Barbara, California", "Santa Cruz, California", "Santa Monica, California", "Santa Rosa, California", 
    "Stockton, California", "Torrance, California", "Vallejo, California", "Vista, California", "Whittier,  California"]
}

const CO = () => {
    ["Boulder, Colorado", "Colorado Springs, Colorado", "Denver"]
}

const CT = () => {
    ["Bridgeport, Connecticut", "Greenwich, Connecticut", "Hartford, Connecticut", "New Haven, Connecticut", 
    "New London, Connecticut", "Norwalk, Connecticut", "Stamford, Connecticut"]
}

const DE = () => {
    ["Wilmington,  Delaware"]
}

const FL = () => {
    ["Coral Springs, Florida", "Daytona Beach, Florida", "Fort Lauderdale, Florida", "Gainesville, Florida", 
    "Jacksonville, Florida", "Lakeland, Florida", "Miami", "Ocala, Florida", "Orlando, Florida", "Pensacola, Florida", 
    "St. Petersburg, Florida", "Tallahassee, Florida", "Tampa, Florida"]
}

const GA = () => {
    ["Albany, Georgia", "Athens, Georgia", "Atlanta", "Augusta, Georgia", "Columbus, Georgia", "Macon, Georgia", 
    "Marietta, Georgia", "Savannah, Georgia"]
}

const HI = () => {
    ["Honolulu"]
}

const ID = () => {
    ["Boise, Idaho"]
}

const IL = () => {
    ["Champaign, Illinois", "Chicago", "Decatur, Illinois", "Evanston, Illinois", "Joliet, Illinois", "Oak Park, Illinois", 
    "Peoria, Illinois", "Rockford, Illinois"]
}

const IN = () => {
    ["Anderson, Indiana", "Bloomington, Indiana", "Evansville, Indiana", "Fort Wayne, Indiana", "Gary, Indiana", 
    "Indianapolis", "Richmond, Indiana", "South Bend, Indiana"]
}

const IA = () => {
    ["Cedar Rapids, Iowa", "Des Moines, Iowa", "Iowa City, Iowa"]
}

const KS = () => {
    ["Kansas City, Kansas", "Lawrence, Kansas", "Wichita,  Kansas", "Topeka, Kansas"]
}

const KY = () => {
    ["Ashland, Kentucky", "Bowling Green, Kentucky", "Lexington, Kentucky", "Louisville, Kentucky", "Paducah, Kentucky"]
}

const LA = () => {
    ["Baton Rouge, Louisiana", "Lafayette, Louisiana", "Lake Charles, Louisiana", "Monroe, Louisiana", 
    "New Orleans", "Shreveport, Louisiana"]
}

const ME = () => {
    ["Bangor, Maine", "Portland, Maine"]
}

const MD = () => {
    ["Baltimore", "Rockville, Maryland"]
}

const MA = () => {
    ["Boston", "Brockton, Massachusetts", "Cambridge, Massachusetts", "Lowell, Massachusetts", "Newton, Massachusetts", 
    "Somerville, Massachusetts", "Springfield, Massachusetts", "Worcester, Massachusetts"]
}

const MI = () => {
    ["Ann Arbor, Michigan", "Detroit", "Flint, Michigan", "Lansing, Michigan", "Pontiac, Michigan", "Saginaw, Michigan"]
}

const MN = () => {
    ["Duluth, Minnesota", "Minneapolis", "Saint Paul, Minnesota"]
}

const MS = () => {
    ["Clarksdale, Mississippi", "Greenville, Mississippi", "Hattiesburg, Mississippi", "Jackson, Mississippi", 
    "Meridian, Mississippi", "Natchez, Mississippi", "Vicksburg, Mississippi"]
}

const MO = () => {
    ["Columbia, Missouri", "Kansas City, Missouri", "Springfield, Missouri", "St. Louis"]
}

const MT = () => {
    ["Missoula, Montana"]
}

const NE = () => {
    ["Lincoln, Nebraska", "Omaha, Nebraska"]
}

const NV = () => {
    ["Las Vegas", "Reno, Nevada"]
}

const NH = () => {
    console.log("empty state")
}

const NJ = () => {
    ["Atlantic City, New Jersey", "Bayonne, New Jersey", "Camden, New Jersey", "East Orange, New Jersey", "Hoboken, New Jersey", 
    "Jersey City, New Jersey", "New Brunswick, New Jersey", "Newark, New Jersey", "Passaic, New Jersey", "Paterson, New Jersey", 
    "Plainfield, New Jersey", "Summit, New Jersey", "Trenton, New Jersey"]
}

const NM = () => {
    ["Albuquerque, New Mexico", "Santa Fe, New Mexico"]
}

const NY = () => {
    ["Albany, New York", "Buffalo, New York", "Ithaca, New York", "Kingston, New York", "Mount Vernon, New York", 
    "New Rochelle, New York", "New York City", "the New York metropolitan area", "Niagara Falls, New York", 
    "Poughkeepsie, New York", "Rochester, New York", "Syracuse, New York", "Troy, New York", "Utica, New York"]
}

const NC = () => {
    ["Asheville, North Carolina", "Charlotte, North Carolina", "Durham, North Carolina", "Fayetteville, North Carolina", 
    "Greensboro, North Carolina", "Raleigh, North Carolina", "Winston-Salem, North Carolina"]
}

const ND = () => {
    console.log("empty state")
}

const OH = () => {
    ["Akron, Ohio", "Canton, Ohio", "Cincinnati", "Cleveland", "Dayton, Ohio", "Columbus, Ohio", "Shaker Heights, Ohio", 
    "Springfield, Ohio", "Toledo, Ohio", "Youngstown, Ohio"]
}

const OK = () => {
    ["Enid, Oklahoma", "Norman, Oklahoma", "Oklahoma City", "Tulsa, Oklahoma"]
}

const OR = () => {
    ["Corvallis, Oregon", "Eugene, Oregon", "Hillsboro, Oregon", "Portland, Oregon", "Salem, Oregon"]
}

const PA = () => {
    ["Allentown, Pennsylvania", "Easton, Pennsylvania", "Erie, Pennsylvania", "Harrisburg, Pennsylvania", 
    "Lancaster, Pennsylvania", "Philadelphia", "Pittsburgh", "Reading, Pennsylvania", "Scranton, Pennsylvania", 
    "York, Pennsylvania"]
}

const RI = () => {
    ["Newport, Rhode Island", "Providence, Rhode Island"]
}

const SC = () => {
    ["Charleston, South Carolina", "Columbia, South Carolina", "Greenville, South Carolina", "Spartanburg, South Carolina"]
}

const SD = () => {
    console.log("empty state")
}

const TN = () => {
    ["Knoxville, Tennessee", "Memphis, Tennessee", "Nashville, Tennessee"]
}

const TX = () => {
    ["Amarillo, Texas", "Austin, Texas", "Dallas", "Houston", "San Antonio"]
}

const UT = () => {
    ["Ogden, Utah", "Provo, Utah", "Salt Lake City"]
}

const VT = () => {
    ["Burlington, Vermont"]
}

const VA = () => {
    ["Alexandria, Virginia", "Charlottesville, Virginia", "Hampton, Virginia", "Lynchburg, Virginia", "Newport News, Virginia", 
    "Norfolk, Virginia", "Portsmouth, Virginia", "Richmond, Virginia", "Virginia Beach, Virginia"]
}

const WA = () => {
    ["Bainbridge Island, Washington", "Kirkland, Washington", "Olympia, Washington", "Seattle", "Spokane, Washington"]
}

const WV = () => {
    ["Charleston, West Virginia", "Huntington, West Virginia", "Wheeling, West Virginia"]
}

const WI = () => {
    ["Green Bay, Wisconsin", "Kenosha, Wisconsin", "Madison, Wisconsin", "Milwaukee", "Racine, Wisconsin"]
}

const WY = () => {
    console.log("empty state")
}

const DC = () => {
    ["Washington, D.C."]
}
