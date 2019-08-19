// //steps:
//         -created files for gitignore, env, keys, random txt, liri main js file, and initialized the package json file. 
//         - npm installed axios 
//         - went on spotify API page, created an account using my email address, generated an application and
//                         got a Client ID and Client Secret. I copied/pasted both into the env file 
//         - npm installed the save node-spotify-api library
//         - Using trilogy key for bandsintown but should consider one for my personal future use. 
//         - npm installed moment and dotenv and fs 
//         - created dependencies links. Looked up how to properly do switch case.
//         - Added my own OMDB key

  require("dotenv").config();

  //create dependencies 
  var keys = require("./keys.js");
  var Spotify = require('node-spotify-api');
  var spotify = new Spotify(keys.spotify);
  var moment = require('moment'); 
  moment().format();
  var axios = require('axios');
  var fs = require('fs'); //this is for the random.txt file
  
  //process.argv2 for the switch statement per explanation given and 3 is for the data to go to thier functions
  var command = process.argv[2]; 
  var value = process.argv[3];
  
  switch (command) {
      case "concert-this":
          concertThis(value);
          break;
      case "spotify-this-song":
          spotifyThisSong(value);
          break;
      case "movie-this":
          movieThis(value);
          break;
      case "do-what-it-says":
          doWhat(value);
          break;
  };
  
  // concert-this function
  function concertThis(value) {
      axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
      .then(function(response) {    
    
    for (var i = 0; i < response.data.length; i++) {
        var datetime = response.data[i].datetime; 
        var dateArr = datetime.split(' '); 
  
        var concertData = 
        "\n Venue: " + response.data[i].venue.name + 
        "\n Location: " + response.data[i].venue.city +
        "\n Date: " + moment(dateArr[1], "MM-DD-YYYY"); 
        console.log(concertData);
        }
      })
      .catch(function (error) {
          console.log(error);
      });
           }
  
    // spotify-this-song function
  function spotifyThisSong(value) {
      if(!value){
          value = "The Sign";
      }
      spotify
      .search({ type: 'track', query: value })
      .then(function(response) {
          for (var i = 0; i < 5; i++) {
              var spotifyData = 
                      "\n Artist(s): " + response.tracks.items[i].artists[0].name + 
                      "\n Song Name: " + response.tracks.items[i].name +
                      "\n Album Name: " + response.tracks.items[i].album.name +
                      "\n Preview Link: " + response.tracks.items[i].preview_url;
                      
              console.log(spotifyData);
          }
      })
      .catch(function(err) {
          console.log(err);
      });
  }
  
  // Movie-this function
  function movieThis(value) {
      if(!value){
          value = "mr nobody";
      }
      axios.get("https://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=a6d55e46") //use bootcamp key or replace with my own key 
      .then(function(response) {
              var movieData = 
                      "\n Movie Title: " + response.data.Title + 
                      "\n Year of Release: " + response.data.Year +
                      "\n IMDB Rating: " + response.data.imdbRating +
                      "\n Rotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                      "\n Country Produced: " + response.data.Country +
                      "\n Language: " + response.data.Language +
                      "\n Plot: " + response.data.Plot +
                      "\n Actors/Actresses: " + response.data.Actors;
              console.log(movieData);
      })
      .catch(function (error) {
          console.log(error);
      });
  }
  

//   // do-what-it-says function STILL CANT GET IT TO WORK. Tried many iterations, tried looking it up. Can't figure it out. 
   function doWhat(value) {
  
       fs.readFile("random.txt", "utf8", function(error, data) {
           if (error) {
               return console.log(error);
           }
           var dataArr = data.split(",");
          spotifyThisSong(dataArr[0], dataArr[1]);
       })
   };





