// IPO Input = -> Process ->  Output
console.log('it is alive!')
// Constants and State Variables (Data)
function handleGetData(event){
    event.preventDefault();
// https://api.musixmatch.com/ws/1.1/track.search?q_artist=kidz%20bop?&q_track=slide&apikey=ce3e50c2c0465b4676c0a648833e173e
const baseUrl = "https://api.musixmatch.com/ws/1.1/track.search?q_artist=kidz%20bop?&q_track=slide="
const searchBop = $("#search").val()
const apiKey = "ce3e50c2c0465b4676c0a648833e173e"


$.ajax({
    url: `${baseUrl} + ${searchBop} + ${apiKey}`
  }).then(
    (data) => {
     console.log(data);
     $("#track_name").text(data.TrackName)
    },
    (error) => {
     console.log('bad request', error);
    }
  );
}
$('form').on("submit", handleGetData)
// Attached Event Listeners

// Functions

// have with images
// $( ".header-right" ).click(function() {
//     alert( "Wow, you must really like Kidz Bop" );
// });


// api to search for the track then the artist
// "http://api.musixmatch.com/ws/1.1/track.search?q_artist=kidz20%bop&apikey=ce3e50c2c0465b4676c0a648833e173e"

// api to search the artist then there id
// https://api.musixmatch.com/ws/1.1/artist.search?&artist_id=q_artist=kidz20%bop&apikey=ce3e50c2c0465b4676c0a648833e173e
