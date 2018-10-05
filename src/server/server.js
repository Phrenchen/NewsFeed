var express = require('express');
var app = express();
 
app.get('/', (req, res) => {
    console.log("get root");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('Hello World');
});

app.get('/news', (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(responseData);
});

app.post('/news', (req, res) =>{
    console.log("post news");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send("response post /news");
});

const port = 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
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
    longDescription: 'long description',       // HTML
    thumbnail: "dist/images/happy_cat.jpg"
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