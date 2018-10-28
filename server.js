var express = require('express');
const path = require('path');
var app = express();
var pgp = require('pg-promise')(/* options */);
// var db = pgp('postgres://username:password@host:port/database');
var db = pgp("postgres://defaultuser:1u2MtKAZBHouW5H2FWg1@localhost:5432/NewsFeed");
const uuid = require('uuid');
app.use(express.static(__dirname + "/dist/news-feed"));



// POSTGRESQL
async function getNews() {
    try{
        return await db.any('SELECT * FROM news', [true])
            .then(data => {
                // success
                console.log("got news from postgres!");
                console.log(data.length);
                return data;
            });
    }
    catch(e){
        console.log("error calling postgresq");
        console.log(e);
        return [];
    }
    
}
// addNews("news numma 1!", "aaaaaldaaaaa short description adla!", "long description", "thumbnail", []);
async function addNews(title, shortDescription, longDescription, thumbnail, images) {
    const id = uuid();
    
    return db.none('INSERT INTO news(id, title, shortDescription, longDescription, thumbnail, images) VALUES($1, $2, $3, $4, $5, $6)', [id, title, shortDescription, longDescription, thumbnail, images])
        .then(() => {
            // success;
            console.log("success adding newsitem!");
            return true;
        })
        .catch(error => {
            // error;
            console.log("error adding newsitem!");
            console.log(error   );
            return false;
        });
}
// POSTGRESQL end

// listen
const port = 8080;

app.listen(process.env.PORT || port, () => {
    console.log(`-> listening on port ${port}`);
});

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
            // res.send(responseData);
            res.send(result);
        });
});


async function initializeNews() {
    await addNews("news numma 1!", "aaaaaldaaaaa short description adla!", "long description", "thumbnail", []);
    console.log("1 complete");
    await addNews("news numma 2!", "aaaaaldaaaaa short description adla!", "long description", "thumbnail", []);
    console.log("2 complete");
    await addNews("news numma 3!", "aaaaaldaaaaa short description adla!", "long description", "thumbnail", []);
    console.log("3 complete");
    const newNews = await getNews();
    console.log("total news: " + newNews.length);
    
}

initializeNews();
console.log("setting it up");

// .then(()=>{
//     getNews();
// })
// .then(news =>{
//     console.log("got new news: " + news); 

// });

// addNews("news numma 2!", "und noch eine wie geiiiil");

// ------------------------------------------------------------------------
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

