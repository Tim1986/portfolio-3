let cityArray = 
[ 'King Ernest Baker',   
  'Glen Ballard',        
  'Olu Dara',
  'Mickey Gilley',       
  'Elizabeth Greenfield',
  'Papa Lightfoot',      
  'Marion Montgomery',
  'Alexander O\'Neal',
  'Marie Selika Williams',
  'Arthur "Big Boy" Spires',
  'Big Tray Deee',
  'Geeshie Wiley' ]


const Spotify = require('node-spotify-api');
const spotify = new Spotify({
    id: "",
    secret: "",
});

const getSpotifyGenres = artist => {
    return spotify.search({ type: 'artist', query: artist })
    .then(data =>{
        if (data && data.artists.items.length > 0) {
            newObj = {
                    artist: artist,
                    spotifyID: data.artists.items[0].id,
                    popularity: data.artists.items[0].popularity
                }
                console.log(newObj)
        }}
    )
    .catch(err => {
        return undefined
    })
}

const getGenreForArray = (array) => {
    const vows = []
    console.log("1")
    for (let i = 0; i < array.length; i++){
        vows.push(getSpotifyGenres(array[i]))
    }
    console.log("2")
    return Promise.all(vows)
    console.log("3")
    .then(res => res.filter(resolved => 
        resolved !== undefined))
    .then(filtered => {
        filtered.sort((a,b) => parseFloat(b.popularity) - parseFloat(a.popularity))
        console.log(filtered)
    })
}

getGenreForArray(cityArray)
