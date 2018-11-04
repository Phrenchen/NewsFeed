var express = require('express');
const path = require('path');
const uuid = require('uuid');
const { Pool } = require('pg');
var pgp = require('pg-promise')(/* options */);


var app = express();
// var db = pgp('postgres://username:password@host:port/database');
// var dbUsername = process.env.DB_USER_NAME;  // defaultuser
// var dbPassword = process.env.DB_PASSWORD;   // 1u2MtKAZBHouW5
// var db = pgp("postgres://defaultuser:1u2MtKAZBHouW5@localhost:5432/NewsFeed");


app.use(express.static(__dirname + "/dist/news-feed"));

// postgres://yfsawoxbctupqs:1a30c5b81059ff3833c58c18b998a6e2535c0d20063e5b9e7b395529ab616a6a@ec2-79-125-8-105.eu-west-1.compute.amazonaws.com:5432/d1l94i9ms624ph
var dbUrl = process.env.DATABASE_URL ? process.env.DATABASE_URL : "postgres://defaultuser:1u2MtKAZBHouW5@localhost:5432/NewsFeed";
console.log("db url:  " + dbUrl);
// var db = pgp(dbUrl);

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
    // console.log("get root"); 
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
    console.log(newsResults);
    res.send(newsResults);
    console.log("sent and released. done!");
});
    // getNews()
    //     .then(result =>{
    //         console.log("received result: " + result);
    //         console.log(result.length);
    //         res.setHeader('Access-Control-Allow-Origin', '*');
    //         res.send(result);
    //     });
    // });
    




// helper
// POSTGRESQL
async function initDB() {
    // return await db.any(`DROP TABLE news CREATE TABLE news`)
    try{

        console.log("initializing db");
        const client = await pool.connect();
        console.log("connected");
        await client.query(`DROP TABLE IF EXISTS news;`);
        console.log("dropped table news");
        // try{
        //     await client.query(`CREATE USER defaultuser WITH CREATEDB`);
        // }
        // catch(e){
        //     console.log("error creating user.");
        //     console.log(e);
        // }
        // console.log("created user");

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
        console.log("created table news");
        
        await client.release();
        console.log("released client");
    }
    catch(e){
        console.log("error initializing db.");
        console.log(e);
    }

}

async function getNews() {
    try{
        const client = await pool.connect();
        const result = await client.query(`SELECT * FROM news`)
        // console.log(result);
        // console.log(result.fields);
        console.log(result.rows.length);
        // return await db.any('SELECT * FROM news', [true])
            // .then(data => {
            //     // success
            //     console.log("got news from postgres!");
            //     console.log(data.length);
            //     return data;
            // }).catch(e => {
            //     console.log("error catch ");
            // });
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
    const client = await pool.connect();
    // console.log(images);
    const result = await client.query("INSERT INTO news(id, title, shortDescription, longDescription, thumbnail, images) VALUES('" + id + "','" + title + "','" + shortDescription + "','" + longDescription + "','" + thumbnail + "','{" + images + "}')")
    .then(() => {
        // success;
        console.log("success adding newsitem!");
        client.release();
        return true;
    })
    .catch(error => {
        // error;
        console.log("error adding newsitem!");
        console.log(error);
        client.release();
        return false;
    });
    /*
    return db.none('INSERT INTO news(id, title, shortDescription, longDescription, thumbnail, images) VALUES($1, $2, $3, $4, $5, $6)', 
        [id, title, shortDescription, longDescription, thumbnail, images]
        ).then(() => {
            // success;
            console.log("success adding newsitem!");
            return true;
        })
        .catch(error => {
            // error;
            console.log("error adding newsitem!");
            console.log(error);
            return false;
        });
    */
}
// POSTGRESQL end


async function initializeNews() {
    await initDB();
    console.log("deleted old news");
    await getNews();
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
    await getNews();
}

// run on start
initializeNews();
