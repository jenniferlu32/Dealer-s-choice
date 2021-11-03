const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

const { albumData, songsData } = require('./data');

app.get('/', (req, res) => {
  res.send(`
  <h1>Kanye West Albums</h1>
    <ul>
      ${
        albumData.map(album => `
        <li><a href='/albums/${album.id}'>${album.title}</a></li>
        `).join('')
      }
    <ul>
  `);
});

app.get('/albums/:id', (req, res) => {
  const albumId = req.params.id;
  const songs = songsData.filter(function(song) {
    return song.albumId === albumId*1;
    }
  );
  res.send(`
  <a href='/'>Back </a>
  ${
    songs.map(song => `
    <p>${song.id}. ${song.title}<p>
    `).join('')
  }
  `)
})
