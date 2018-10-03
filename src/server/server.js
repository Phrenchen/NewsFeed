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
    shortDescription: 'short description',    // HTML
    longDescription: 'long description'       // HTML
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
    title: 'news title',                      // HTML
    shortDescription: 'short description',    // HTML
    longDescription: 'long description'       // HTML
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
    title: 'news title',                      // HTML
    shortDescription: 'short description',    // HTML
    longDescription: 'long description'       // HTML
  }
];