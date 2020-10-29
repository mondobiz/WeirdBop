
//  Any word in the song title or artist name or lyrics

// constants
const baseUrl = "http://api.musixmatch.com/ws/1.1/"
const apiKey = "ce3e50c2c0465b4676c0a648833e173e"
// walkin on sunshine example
// https://api.musixmatch.com/ws/1.1/track.search?&q_track=walking%20on%20sunshine&q_artist=kidz%20bop&page_size=100&apikey=ce3e50c2c0465b4676c0a648833e173e
// "http://api.musixmatch.com/ws/1.1/track.search?q_artist=weird al&apikey=ce3e50c2c0465b4676c0a648833e173e"
















const searchBar = document.getElementById('search-bar');
const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', (e) => {
    console.log(searchBar.value)
    // let url = "http://api.musixmatch.com/ws/1.1/track.search?q_track="
    // url = url + searchBar.value + "&q_artist=kidz bop" + "&apikey=" + apiKey
    let cors_anywhere = "https://cors-anywhere.herokuapp.com/"
    let url = `${baseUrl}track.search?q_track=${searchBar.value}+&q_artist=kidz_bop&apikey=${apiKey}`
    url = cors_anywhere + url
    console.log(url)
    fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
})



// // header-left 
// // header-right
// // weirdAl song description
// alert('')
// // kidzBop song description
// alert('')

// // Your song is safe! original song description
// // Mortal Kombat image with description of original song description
// alert('')

// app's state (variables)s
// cached element references
// event listeners
// functions

