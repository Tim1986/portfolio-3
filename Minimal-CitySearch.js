const wiki = require('wikijs').default;
const Spotify = require('node-spotify-api');
const spotify = new Spotify({
    id: "",
    secret: "",
});

const arrayOfArtists = []
let arrayOfCategories = []
let arrayOfTotalCategories = []            

const getArrayOfArtists = (searchType, originalLocation) => {
    console.log("Finding array of artists for " + searchType + "...")

    return wiki().pagesInCategory(`Category:${searchType}`)
        .then((response) => {
            pushThisPageArtists(response, arrayOfArtists)
            // *****************************************************************
            // This used to be the getAdditionalCategories function call.
            // Can't do it anymore because I need both category arrays in scope.
            if (response.length > 0) {
                for (let i = 1; i < 15; i++) {
                    if (response[response.length - i] && response[response.length - i].includes(":") && response[response.length - i].split(":")[0] === "Category") {
                        if (arrayOfTotalCategories.includes(response[response.length - i].split(":")[1]) || response[response.length - i].split(":")[1].includes("albums") || response[response.length - i].split(":")[1].includes("songs")) {
                        } else {
                            arrayOfCategories.push(response[response.length - i].split(":")[1])
                            arrayOfTotalCategories.push(response[response.length - i].split(":")[1])
                        }
                    }
                }
            }
            // *****************************************************************
            if (arrayOfCategories[0]) {
                let newSearchType = arrayOfCategories[0]
                arrayOfCategories.shift();
                return getArrayOfArtists(newSearchType, originalLocation)
            } else {
                let noDupeArray = Array.from(new Set(arrayOfArtists))
                let obj = {
                    name: originalLocation,
                    array: []
                }
                obj.array = noDupeArray

                let slicedArray1 = obj.array.slice(0, 99)
                let slicedArray2 = obj.array.slice(100, 199)
                let slicedArray3 = obj.array.slice(200, 299)
                let slicedArray4 = obj.array.slice(300, 399)
                let slicedArray5 = obj.array.slice(400, 499)
                let slicedArray6 = obj.array.slice(500, 599)
                let slicedArray7 = obj.array.slice(600, 699)
                let slicedArray8 = obj.array.slice(700, 799)
                let slicedArray9 = obj.array.slice(800, 899)
                let slicedArray10 = obj.array.slice(900, 999)
                let slicedArray11 = obj.array.slice(1000, 1099)
                let slicedArray12 = obj.array.slice(1100, 1199)
                let slicedArray13 = obj.array.slice(1200, 1299)
                let slicedArray14 = obj.array.slice(1300, 1399)
                let slicedArray15 = obj.array.slice(1400, 1499)
                let slicedArray16 = obj.array.slice(1500, 1599)
                let slicedArray17 = obj.array.slice(1600, 1699)
                let slicedArray18 = obj.array.slice(1700, 1799)
                let slicedArray19 = obj.array.slice(1800, 1899)
                let slicedArray20 = obj.array.slice(1900, 1999)
                let slicedArray21 = obj.array.slice(2000, 2099)
                let slicedArray22 = obj.array.slice(2100, 2199)
                let slicedArray23 = obj.array.slice(2200, 2299)
                let slicedArray24 = obj.array.slice(2300, 2399)
                let slicedArray25 = obj.array.slice(2400, 2499)
                let slicedArray26 = obj.array.slice(2500, 2599)
                let slicedArray27 = obj.array.slice(2600, 2699)
                let slicedArray28 = obj.array.slice(2700, 2799)
                let slicedArray29 = obj.array.slice(2800, 2899)
                let slicedArray30 = obj.array.slice(2900, 2999)
                let slicedArray31 = obj.array.slice(3000, 3099)
                let slicedArray32 = obj.array.slice(3100, 3199)
                let slicedArray33 = obj.array.slice(3200, 3299)
                let slicedArray34 = obj.array.slice(3300, 3399)
                let slicedArray35 = obj.array.slice(3400, 3499)
                let slicedArray36 = obj.array.slice(3500, 3599)
                let slicedArray37 = obj.array.slice(3600, 3699)
                let slicedArray38 = obj.array.slice(3700, 3799)
                let slicedArray39 = obj.array.slice(3800, 3899)
                let slicedArray40 = obj.array.slice(3900, 3999)
                let slicedArray41 = obj.array.slice(4000, 4099)
                let slicedArray42 = obj.array.slice(4100, 4199)
                let slicedArray43 = obj.array.slice(4200, 4299)
                let slicedArray44 = obj.array.slice(4300, 4399)
                let slicedArray45 = obj.array.slice(4400, 4499)
                let slicedArray46 = obj.array.slice(4500, 4599)
                let slicedArray47 = obj.array.slice(4600, 4699)

                console.log(slicedArray1)
                console.log(slicedArray2)
                console.log(slicedArray3)
                // console.log(slicedArray4)
                // console.log(slicedArray5)
                // console.log(slicedArray6)
                // console.log(slicedArray7)
                // console.log(slicedArray8)
                // console.log(slicedArray9)
                // console.log(slicedArray10)
                // console.log(slicedArray11)
                // console.log(slicedArray12)
                // console.log(slicedArray13)
                // console.log(slicedArray14)
                // console.log(slicedArray15)
                // console.log(slicedArray16)
                // console.log(slicedArray17)
                // console.log(slicedArray18)
                // console.log(slicedArray19)
                // console.log(slicedArray20)
                // console.log(slicedArray21)
                // console.log(slicedArray22)
                // console.log(slicedArray23)
                // console.log(slicedArray24)
                // console.log(slicedArray25)
                // console.log(slicedArray26)
                // console.log(slicedArray27)
                // console.log(slicedArray28)
                // console.log(slicedArray29)
                // console.log(slicedArray30)
                // console.log(slicedArray31)
                // console.log(slicedArray32)
                // console.log(slicedArray33)
                // console.log(slicedArray34)
                // console.log(slicedArray35)
                // console.log(slicedArray36)
                // console.log(slicedArray37)
                // console.log(slicedArray38)
                // console.log(slicedArray39)
                // console.log(slicedArray40)
                // console.log(slicedArray41)
                // console.log(slicedArray42)
                // console.log(slicedArray43)
                // console.log(slicedArray44)
                // console.log(slicedArray45)
                // console.log(slicedArray46)
                // console.log(slicedArray47)

                console.log(obj.array.length)
                return obj
            }
        })
        .catch((error) => { console.log("wiki:" + error) })
}

const pushThisPageArtists = (response, arrayOfArtists) => {
    for (let i = 0; i < response.length; i++) {
        if (response[i].split(":")[0] === "Category") {
        } else {
            if (response[i].split("(")) {
                arrayOfArtists.push(response[i].split("(")[0].trim())
            } else {
                arrayOfArtists.push(response[i])
            }
        }
    }
    return arrayOfArtists
}


getArrayOfArtists("Musicians from Natchez, Mississippi", "Natchez, Mississippi")
