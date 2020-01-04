const { user } = require('../db')
const crud = require('./crud')
const auth = require('../auth')

module.exports = function (app) {
    crud(app)

    app.post('/signin', async ({ body, session }, res) => {
        try {
            const user = await auth.verify(body.username, body.password)
            session.user = user
            res.json({ user })
        } catch (err) {
            res.statusCode = 401
            res.json({ error: err })
        }
    })

    app.post('signout', async (req, res) => {
        delete session.user
        res.send('logged out')
    })

    app.post('signup', async () => { })

    app.get('/whoami', ({ session }, res) => {
        res.json(session.user || {})
    })
}