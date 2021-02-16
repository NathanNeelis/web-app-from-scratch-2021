<!-- Add a link to your live demo in Github Pages 🌐-->
### View the app
:earth_americas:  [live website](https://nathanneelis.github.io/web-app-from-scratch-2021/)

<!-- ☝️ replace this description with a description of your own work -->
### Description
Do you also spend too much time looking for a decent movie to watch?  
With this application you can see right away what the top movies are at this very moment! 
Find a movie to your liking, and make some popcorn instead of spending minutes to find a good title.  

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

-- image / poster app --  


<!-- Maybe a table of contents here? 📚 -->
### Table of Contents
[Description]()  
[Getting started]()  
[Features]()  
[API]()  
[Project status]()  
[License]()  
[Resources]()   


<!-- How about a section that describes how to install this project? 🤓 -->
### Getting started

#### Cloning the repo
1. Create your git repo  
    ```bash
    mkdir foldername  
    cd "/foldername"  
    git init  
    ```  

2. Clone this repo  
    ```bash
    git clone https://github.com/NathanNeelis/web-app-from-scratch-2021.git
    ```   

3. install packages  
    ```bash
    npm install
    ```  


#### Download as zip
1. Go to the URL below and it will download the zip automatically  
    ```https://github.com/NathanNeelis/web-app-from-scratch-2021/archive/master.zip```



<!-- ...but how does one use this project? What are its features 🤔 -->
### Features
To be updated
Probably something about searching for keywords  
and showing popular lists of movies and tv-shows.  

<!-- What external data source is featured in your project and what are its properties 🌠 -->
### The API
This API contains information about movies and tv-shows.   
You can search for movies or shows or filter on genre / collections and so on. For example, you can show the top movies at this moment.  

According to the documentation there is no rate limite for this API since decembe 2019.  

To find out more what this API can do, please read more on [ThemovieDB API documentation](https://developers.themoviedb.org/3/getting-started/introduction)  

#### API data
<details>
  <summary>Single data file</summary>
  
 ```javascript
   {
    "adult": false,
    "backdrop_path": "/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg",
    "belongs_to_collection": {
        "id": 8945,
        "name": "Mad Max Collection",
        "poster_path": "/uuvSvLb3ntGA9B0wx2JskVDSuWi.jpg",
        "backdrop_path": "/h4MNLYzr6Cr02iHv3Hpqb9lmTPv.jpg"
    },
    "budget": 150000000,
    "genres": [{
        "id": 28,
        "name": "Action"
    }, {
        "id": 12,
        "name": "Adventure"
    }, {
        "id": 878,
        "name": "Science Fiction"
    }],
    "homepage": "https://www.warnerbros.com/movies/mad-max-fury-road",
    "id": 76341,
    "imdb_id": "tt1392190",
    "original_language": "en",
    "original_title": "Mad Max: Fury Road",
    "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
    "popularity": 54.29,
    "poster_path": "/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    "production_companies": [{
        "id": 2537,
        "logo_path": null,
        "name": "Kennedy Miller Productions",
        "origin_country": "AU"
    }, {
        "id": 174,
        "logo_path": "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png",
        "name": "Warner Bros. Pictures",
        "origin_country": "US"
    }, {
        "id": 41624,
        "logo_path": "/wzKxIeQKlMP0y5CaAw25MD6EQmf.png",
        "name": "RatPac-Dune Entertainment",
        "origin_country": "US"
    }, {
        "id": 79,
        "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
        "name": "Village Roadshow Pictures",
        "origin_country": "US"
    }],
    "production_countries": [{
        "iso_3166_1": "AU",
        "name": "Australia"
    }, {
        "iso_3166_1": "US",
        "name": "United States of America"
    }, {
        "iso_3166_1": "ZA",
        "name": "South Africa"
    }],
    "release_date": "2015-05-13",
    "revenue": 378858340,
    "runtime": 121,
    "spoken_languages": [{
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
    }],
    "status": "Released",
    "tagline": "What a Lovely Day.",
    "title": "Mad Max: Fury Road",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 17619
}
 ```
</details>


<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->
### Project status 
* ✅  Concept idea  
* ✅  Finding API  
* ✅  Learning API from documentation  
* ✅  Fetcing data from API  
* ✅  Render HTML elements from API data  
* ✅  Quick page styling so the data is readable  
* ✅  Searchbar for movie  
* ✅  Detail page  
* ✅  Modulair coding  

* ❌  templating  


<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
### License
[MIT](https://github.com/NathanNeelis/web-app-from-scratch-2021/blob/master/LICENSE)  

### Resources
* [Resource filter recap:](https://www.youtube.com/watch?v=BMUiFMZr7vk) FUN FUN FUNCTION   
* [Resource unique array:](https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript ) 
* [Local Storage storing & retieving](https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5)  
* [Modules / routing / fetching example](https://github.com/cmda-minor-web/web-app-from-scratch-2021/tree/master/examples/modules)  
* [Actor & Interaction diagrams](https://docs.google.com/document/d/1445IOuXNTlCki89WkGSZxwJoxbHkdzuFgp53KCC9WOc/edit)  