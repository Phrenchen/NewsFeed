var express = require('express');
const path = require('path');
const uuid = require('uuid');
const { Pool } = require('pg');
var pgp = require('pg-promise')(/* options */);


var app = express();
// var db = pgp('postgres://username:password@host:port/database');
// var dbUsername = process.env.DB_USER_NAME;  // defaultuser
// var dbPassword = process.env.DB_PASSWORD;   // 1u2MtKAZBHouW5H2FWg1
// var db = pgp("postgres://defaultuser:1u2MtKAZBHouW5H2FWg1@localhost:5432/NewsFeed");


app.use(express.static(__dirname + "/dist/news-feed"));


var dbUrl = process.env.DATABASE_URL ? process.env.DATABASE_URL : "postgres://defaultuser:1u2MtKAZBHouW5H2FWg1@localhost:5432/NewsFeed";
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
    const newsResults = result.rows;
    console.log(newsResults);
    res.send(newsResults);
    client.release();
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
    
app.get('/api/dbtest', (req, res) => {
    console.log("requested db test");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(process.env);
});




// helper
// POSTGRESQL
async function deleteOldNews() {
    // return await db.any(`DROP TABLE news CREATE TABLE news`)
    const client = await pool.connect();
    const result = await client.query(`DROP TABLE IF EXISTS news; CREATE TABLE news
        (
        id uuid NOT NULL,
        title text,
        shortdescription text,
        longdescription text,
        images text[],
        thumbnail text,
        CONSTRAINT news_id PRIMARY KEY (id)
        );
        ALTER TABLE news
        OWNER TO defaultuser;
        `)
    .then(() => {
        console.log("deleted all news");
        return true;
    }).catch(e => {
        console.log("error deleting news");
        console.log(e);
        return false;
    });
    console.log("aha");
    /*
    return await db.any(`DROP TABLE IF EXISTS news; CREATE TABLE news
    (
      id uuid NOT NULL,
      title text,
      shortdescription text,
      longdescription text,
      images text[],
      thumbnail text,
      CONSTRAINT news_id PRIMARY KEY (id)
    );
    ALTER TABLE news
      OWNER TO defaultuser;
    `)
        .then(() => {
            console.log("deleted all news");
            return true;
        }).catch(e => {
            console.log("error deleting news");
            console.log(e);
            return false;
        });
    */
}

async function getNews() {
    try{
        const client = await pool.connect();
        const result = await client.query(`SELECT * FROM news`)
            .then(data => {
                // success
                console.log("got news from postgres!");
                console.log(data.length);
                return data;
            }).catch(e => {
                console.log("error catch ");
            });
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
    console.log(images);
    const result = await client.query("INSERT INTO news(id, title, shortDescription, longDescription, thumbnail, images) VALUES('" + id + "','" + title + "','" + shortDescription + "','" + longDescription + "','" + thumbnail + "','{" + images + "}')")
    .then(() => {
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
    await deleteOldNews();
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
}

// run on start
initializeNews();
