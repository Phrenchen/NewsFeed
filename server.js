var express = require('express');
const path = require('path');
var app = express();
var pgp = require('pg-promise')(/* options */);
// var db = pgp('postgres://username:password@host:port/database');
var db = pgp("postgres://defaultuser:1u2MtKAZBHouW5H2FWg1@localhost:5432/NewsFeed");

app.use(express.static(__dirname + "/dist/news-feed"));



// POSTGRESQL
// db.one("SELECT $1 AS value", 123)
// .then(function (data) {
//     console.log("DATA:", data.value);
// })
// .catch(function (error) {
//     console.log("ERROR:", error);
// });

async function getNews() {
    try{
        return await db.any('SELECT * FROM NewsItems', [true])
            .then(data => {
                // success
                console.log("got news from postgres! " + data);
                console.log(data.length);
                return data;
            });
    }
    catch(e){
        console.log("error calling postgresq");
        return [];
    }
    
}
// POSTGRESQL end




app.get('/', (req, res) => {
    // console.log("get root"); 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(path.join(__dirname, '/dist/news-feed/index.html'));
});

app.get('/api/news', (req, res) =>{
    getNews()
        .then(result =>{
            console.log("received result: " + result);
            console.log(result.length);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(responseData);
        });
});

// add news
const maxNewsCount = 1000;
const exampleMatch = {
    id: '-1',
    isRead: false,
    isFavourite: true,

    // content meta
    dateCreated: null,
    dateUpdated: null,
    dateRead: null,
    seoDescritpion: '',
    sortOrder: -1,

    // content
    title: '',                      // HTML
    shortDescription: '',    // HTML
    longDescription: '',
    thumbnail: '',
    images: []
    };

// app.post('api/news', (req, res) =>{
//     console.log("post news: " + req.body);
//     addNews(req.body);
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.send(responseData);
// });

const addNews = (newsRequest) => {
    console.log("adding news: " + newsRequest);
    if(responseData.length >= maxNewsCount){
        // remove oldest news
        console.log('remove oldest news');
        responseData.shift();
        console.log(responseData.length);
    }

    if(isValid(newsRequest)){
        responseData.push(newsRequest);
    }
}

const isValid = (candidate) =>{
    for (let property in exampleMatch) {
        if (!candidate.hasOwnProperty(property)) {
            console.log("invalid news item. missing property: " + property); 
        }
    }


}


// listen
const port = 8080;

app.listen(process.env.PORT || port, () => {
    console.log(`-> listening on port ${port}`);
});

// static news feed 
const responseData = [{
    id: '1',
    isRead: false,
    isFavourite: true,

    // content meta
    dateCreated: new Date(),
    dateUpdated: new Date(),
    dateRead: new Date(),
    seoDescritpion: 'seo tags',
    sortOrder: 1,

    // content
    title: 'cat content',                      // HTML
    shortDescription: 'interested in cat content?',    // HTML
    longDescription: '<h2>Cats!</h2> <img draggable="false" onload="console.log(`script executed! alert!`)" src="assets/images/happy_cat.jpg" alt="cat!" style="width:100%;">',
    thumbnail: "/assets/images/happy_cat.jpg",
    images: ["explosionkitty.jpeg", "lazycat.png", "mr_mustache.jpg", "ohnoes.jpg", "surprisedcat3.jpg", "tshirt.jpeg" ]
  },
  {
    id: '2',
    isRead: false,
    isFavourite: false,

    // content meta
    dateCreated: new Date(),
    dateUpdated: new Date(),
    dateRead: new Date(),
    seoDescritpion: 'seo tags',
    sortOrder: 2,

    // content
    title: 'AI plays Snake',                      // HTML
    shortDescription: 'video links',    // HTML
    longDescription: '<div><a href="https://www.youtube.com/watch?v=3bhP7zulFfY" target="_blank">AI plays Snake</a> </div>',       // HTML
    thumbnail: "assets/images/ai_snake_game.png",
    images: []
  }
];

