
// IPO Input = -> Process ->  Output
console.log('it is alive!')
// Constants and State Variables (Data)

// Constant Data
const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=kidz20%bop?&q_track=slide&apikey=ce3e50c2c0465b4676c0a648833e173e";
const searchUrl = "track.search?q_artist=kidz%20bop?&q_track=";
const searchBop = $("#search").val();
const apiKey = "ce3e50c2c0465b4676c0a648833e173e";

// State Data
let kidzData;

// https://api.musixmatch.com/ws/1.1/track.search?q_artist=kidz%20bop?&q_track=slide&apikey=ce3e50c2c0465b4676c0a648833e173e
// album_name
// artist_name
// Album_release_date
// Cached Element References
const $searchButton = $('#search-button');

// Attached Event Listeners
$searchButton.on('click', 'article.album', handleClick);

// Functions

function getData() {
  // getch data using AJAX
  $.ajax(baseUrl).then(function(data) {
    // take the returned data and assign it to a global state variable
    // call render to visualize it to the DOM 
    console.log('Data: ', data);
  }, function(error) {
        console.log('Error: ', error);
  });
}

function handleClick(e) {
  e.preventDefault()
  alert('click')
  getData();
}







// function handleGetData(event){
//     event.preventDefault();

// $.ajax({
//     url: `${baseUrl} + ${searchUrl} + ${searchBop} + ${apiKey}`
//   }).then(
//     (data) => {
//      console.log(data);
//      $("#track_name").text(data.TrackName)
//     },
//     (error) => {
//      console.log('bad request', error);
//     }
//   );
// }
// $('form').on("submit", handleGetData)

// have with images
// $( ".header-right" ).click(function() {
//     alert( "Wow, you must really like Kidz Bop" );
// });


// api to search for the track then the artist
// "http://api.musixmatch.com/ws/1.1/track.search?q_artist=kidz20%bop&apikey=ce3e50c2c0465b4676c0a648833e173e"

// api to search the artist then there id
// https://api.musixmatch.com/ws/1.1/artist.search?&artist_id=q_artist=kidz20%bop&apikey=ce3e50c2c0465b4676c0a648833e173e
