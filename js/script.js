// IPO Input = -> Process ->  Output

// Constants and State Variables (Data)
const baseUrl = "https://api.musixmatch.com/ws/1.1/"
const apiKey = "ce3e50c2c0465b4676c0a648833e173e"

// Cached Element References
const response = $.ajax({
    url: "baseUrl + artist.search?&artist_id=q_artist=kid20%bop& + apiKey"
})

response.then(
    (data) => {
        console.log(data);
    },
    (error) => {
        console.log("bad request: ", error)
    }
)
// Attached Event Listeners

// Functions

// have with images
// $( ".header-right" ).click(function() {
//     alert( "Wow, you must really like Kidz Bop" );
// });


// api to search for the track then the artist
// "http://api.musixmatch.com/ws/1.1/track.search?q_artist=weird al&apikey=ce3e50c2c0465b4676c0a648833e173e"

// api to search the artist then there id
// https://api.musixmatch.com/ws/1.1/artist.search?&artist_id=q_artist=kid20%bop&apikey=ce3e50c2c0465b4676c0a648833e173e
