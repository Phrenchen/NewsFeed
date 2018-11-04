var express = require('express');
const path = require('path');
const uuid = require('uuid');
const { Pool } = require('pg');
var pgp = require('pg-promise')(/* options */);
var app = express();


app.use(express.static(__dirname + "/dist/news-feed"));

var dbUrl = process.env.DATABASE_URL ? process.env.DATABASE_URL : "postgres://defaultuser:1u2MtKAZBHouW5@localhost:5432/NewsFeed";

const pool = new Pool({
    connectionString: dbUrl,
    ssl: false
});


// listen
const port = 8080;

app.listen(process.env.PORT || port, () => {
    console.log(`-> listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(path.join(__dirname, '/dist/news-feed/index.html'));
});

app.get('/api/news', async (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.send("no nus");
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM news');
    client.release();
    const newsResults = result.rows;
    // console.log(newsResults);
    res.send(newsResults);
    console.log("sent and released. done!");
});



// helper
// POSTGRESQL
async function initDB() {
    try{
        // console.log("initializing db");
        const client = await pool.connect();
        // console.log("connected");
        await client.query(`DROP TABLE IF EXISTS news;`);
        // console.log("dropped table news");
        await client.query(`CREATE TABLE news
        (
            id uuid NOT NULL,
            title text,
            shortdescription text,
            longdescription text,
            images text[],
            thumbnail text,
            CONSTRAINT news_id PRIMARY KEY (id)
            );
            `);
        // console.log("created table news");
        
        await client.release();
        // console.log("released client");
    }
    catch(e){
        console.log("error initializing db.");
        console.log(e);
    }

}

async function addNews(title, shortDescription, longDescription, thumbnail, images) {
    const id = uuid();
    const client = await pool.connect();
    await client.query("INSERT INTO news(id, title, shortDescription, longDescription, thumbnail, images) VALUES('" + id + "','" + title + "','" + shortDescription + "','" + longDescription + "','" + thumbnail + "','{" + images + "}')")
    .then(() => {
        client.release();
        return true;
    })
    .catch(error => {
        console.log("error adding newsitem!");
        console.log(error);
        client.release();
        return false;
    });
}
// POSTGRESQL end


async function initializeNews() {
    await initDB();
    await addNews(
        "cat content", 
        "interested in cat content?", 
        '<h2>Cats!</h2> <img draggable="false" onload="console.log(`script executed! alert!`)" src="assets/images/happy_cat.jpg" alt="cat!" style="width:100%;">', 
        "/assets/images/happy_cat.jpg", 
        ["explosionkitty.jpeg", "lazycat.png", "mr_mustache.jpg", "ohnoes.jpg", "surprisedcat3.jpg", "tshirt.jpeg"]
        );
        await addNews(
            "AI plays Snake", 
            "youtube", 
            '<div><a href="https://www.youtube.com/watch?v=3bhP7zulFfY" target="_blank">AI plays Snake</a> </div>', 
            "/assets/images/ai_snake_game.png", 
            []
            
        );
    await addNews("news numma 3!", "aaaaaldaaaaa short description adla!", "long description", "thumbnail", []);
}

// run on start
initializeNews();
