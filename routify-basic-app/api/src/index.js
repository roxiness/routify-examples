const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const session = require('express-session')
var FileStore = require('session-file-store')(session);
require('./db/seed')


app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
}))
app.use(session({
    store: new FileStore({path: 'data/sessions'}),
    secret: 'got milk?',
    resave: true,
    saveUninitialized: false
}))
app.use(express.json());
routes(app)

app.get('/', (req, res) => {
    res.send('welcome')
})

app.listen(3000)