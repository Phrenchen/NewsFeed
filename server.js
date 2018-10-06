var express = require('express');
const path = require('path');
var app = express();
 
app.use(express.static(__dirname + "/dist/news-feed"));


app.get('/', (req, res) => {
    console.log("get roo  t"); 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(path.join(__dirname, '/dist/news-feed/index.html'));
});

app.get('/news', (req, res) =>{
    console.log("providing news");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(responseData);
});

/*app.post('/news', (req, res) =>{
    console.log("post news");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send("response post /news");
});
*/

const port = 4202;

app.listen(process.env.PORT || port, () => {
    console.log(`-> listening on port ${port}`);
});

// static news feed 
const responseData = [{
    'id': '1',
    'isRead': false,
    'isFavourite': true,

    // content meta
    dateCreated: new Date(),
    dateUpdated: new Date(),
    dateRead: new Date(),
    seoDescritpion: 'seo tags',
    sortOrder: 1,

    // content
    title: 'news title',                      // HTML
    shortDescription: '<strong> short description 1</strong>',    // HTML
    longDescription: '<h2>Happy Cat</h2> <img class="teaser-thumbnail" onload="console.log(`script executed! alert!`)" src="assets/images/happy_cat.jpg" alt="cat!" style="width:100%"> <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p> <a href="https://giphy.com/explore/happy-cat" target="_blank">happy cats</a> are <ul><li>cute</li><li>happy</li><li>hungry</li></ul>eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>',
    thumbnail: "/assets/images/happy_cat.jpg"
  },
  {
    'id': '2',
    'isRead': false,
    'isFavourite': false,

    // content meta
    dateCreated: new Date(),
    dateUpdated: new Date(),
    dateRead: new Date(),
    seoDescritpion: 'seo tags',
    sortOrder: 2,

    // content
    title: 'news title 2',                      // HTML
    shortDescription: 'short description 2',    // HTML
    longDescription: '<div>hi. <a href="https://www.google.de" target="_blank">goog le</a> </div>',       // HTML
    thumbnail: null
  },
  {
    'id': '3',
    'isRead': true,
    'isFavourite': false,

    // content meta
    dateCreated: new Date(),
    dateUpdated: new Date(),
    dateRead: new Date(),
    seoDescritpion: 'seo tags',
    sortOrder: 3,

    // content
    title: 'news title 3',                      // HTML
    shortDescription: 'short description 3',    // HTML
    longDescription: '<div class="long-description-container"> <h3>Lorem ipsum dolor sit amet</h3> <p>Lorem ipsum dolor sit amet, <a href="https://www.google.de" target="_blank">goog le</a>consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p> </div>',
    thumbnail: null
  }
];