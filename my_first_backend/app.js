const basicAuth = require('express-basic-auth')
const express = require('express')
const app = express()
const port = 8080

var Auth = basicAuth({
    users: { 'admin': 'admin'},
    challenge: true,
    unauthorizedResponse: "Not authorized"
})


function getRandomValueWithinRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomSong() {
    sinatra_songs = ['Accidents Will Happen', "After You've Gone", 'All of You',
    'Blame It on My Youth', 'Blue Hawaii','Bonita','The Boys Night Out',
    'Call Me','The Call of the Canyon', 'Can I Steal a Little Love?', "C'est Magifique",
    'The Days of Wine and Roses','Dick Haymes, Dick Todd and Como','Embraceable You',
    'Exodus', 'Gunga Din', 'Here Comes the Night', 'Hey Look, No Crying', 'I Had the Craziest Dream',
    'If I Ever Love Again'];

    random_index = getRandomValueWithinRange(0, sinatra_songs.length);

console.log(random_index);
return (sinatra_songs[random_index]);
}

app.get('/birth_date', (req, res) => {
    res.send('December 12, 1915')
})

app.get('/birth_city', (req, res) => {
    res.send('Hoboken, New Jersey')
})

app.get('/wives', (req, res) => {
    res.send('Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx')
})

app.get('/picture', (req, res) => {
    res.send("(https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg)")
})

app.get('/', (req, res) => {
    console.log("From the /");
    res.send(getRandomSong());
})



app.get('/public', (req, res) => {
    res.send("Everybody can see this page")
})

app.get('/protected', Auth, (req, res) => {
    res.send("Welcome, authenticated client")
}
)

app.listen(port, () => {
  console.log("Server Started" + port);
})
