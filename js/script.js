
// IPO Input = -> Process ->  Output
console.log('it is alive!')
// Constants and State Variables (Data)

// Constant Data
const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/";
const searchUrl = "track.search?q_artist=kidz%20bop?&q_track=";
const apiKey = "&apikey=ce3e50c2c0465b4676c0a648833e173e";

// State Data
let kidzData;


const $searchButton = $('#search-button');

// Attached Event Listeners
$searchButton.on('click', 'article.album', handleClick);

// Functions

function findSongMatch(data, searchBop) {
  const trackList = data.message.body.track_list;

  const searchResult = trackList.filter((track) => track.track.track_name.toLowerCase() === searchBop.toLowerCase());
  console.log(searchResult)
  if (searchResult.length > 0) {
    // alert(`Kidz Bop covered ${searchBop.toUpperCase()} 
    //   on ${searchResult[0].track.album_name}!`)
      $("#result").html(`<div class="yes">Kidz Bop covered ${searchBop.toUpperCase()} 
      on ${searchResult[0].track.album_name}!</div>`)
  } else {
    // alert(`Kidz Bop has not covered ${searchBop}. :(`)
    $("#result").html(`<div class="no">Kidz Bop has not covered ${searchBop}. :(</div>`)
  }
}

function getData() {
  // getch data using AJAX
  const searchBop = $("#search").val();
  const kidzUrl = baseUrl + searchUrl + searchBop + apiKey
  console.log(kidzUrl)
  $.ajax({
    url: kidzUrl,
    dataType: "json"
  }).then(function (data) {
    findSongMatch(data, searchBop);

  }, function (error) {
    console.log('Error: ', error);
  });
}

function handleClick(e) {
  e.preventDefault()

  getData();
}

$('form').on("submit", handleClick)







