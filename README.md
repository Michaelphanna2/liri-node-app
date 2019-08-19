# liri-node-app

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
    
    - Liri is being created to provide a way for a user to type requests into the command line to request information on specific entertainment topics such as music and movies. 

2. Give a high-level overview of how the app is organized
   
   - Liri is organized in such a way that the user can utilize specific commands to request the above-mentioned information. These commands       are as follows:
            - Concert-this (allows user to search for upcoming concerts featuring a specific artist.)
            - Spotify-this-song (allows user to search for a song title and the results will display artist and album information.)
            - movie-this (allows user to search for a movie by name and the results will display basic information about the film.)
            - do-what-it-says (is a catch-all request that will execute the command specified in a linked txt file.)

3. Give start-to-finish instructions on how to run the app
  
  - In order to run this app, a user simply has to input one of the four above-listed commands into the command line using the following        format: node liri <command> <search criteria>
     For example, if I wanted to find out information on my favorite comedy movie, Young Frankenstein, I would type in the following:
          node liri movie-this young frankenstein
     Running this should take my request and go out to the OMDB site, grab the information it has available for Young Frankenstein, and          display it in the terminal for me to read.
    Additionally, special circumstances were set up for two instances. First, if the user tries to run Spotify-this-song but does not put in any search criteria, the API will bring back results for The Sign. Also, if a similar situation occurs on the movie-this command, it will pull back results on Mr. Nobody. 
  

4. Include screenshots, gifs or videos of the app functioning
    There are 4 png files attached to this repository which show each of the four command lines being executed. The 4th one is labeled as "Liri 4 Error" because, while everything else works, I keep getting an error for the "do-what-it-says" command. 

5. Contain a link to a deployed version of the app
    https://github.com/Michaelphanna2/liri-node-app.git

6. Clearly list the technologies used in the app

- The technologies used to run this app are node.js, Axios, Moment, dotenv, fs libraries, Spotify OMDB and bandsintown APIs, javascript
    
7. State your role in the app development
 
 - As this was an individual homework assignment, I was responsible for the entire project from start to finish. 
    
