const { users, posts } = require('../db')
const crud = require('./crud')
const auth = require('../auth')

module.exports = function (app) {
    crud(app)

    app.post('/signin', async ({ body, session }, res) => {
        try {            
            const {_id} = await auth.verify(body.username, body.password)
            const user = await users.get(_id)
            session.user = user
            res.json({ user })
        } catch (err) {
            res.statusCode = 401
            res.json({ error: err })
        }
    })

    app.get('/signout', async (req, res) => {
        delete req.session.user
        res.send('logged out')
    })

    
    app.get('/whoami', ({ session }, res) => {
        res.json(session.user || {})
    })

    app.post('/user', async ({ body, session }, res) => { 
        const {_id} = await users.insert(body)
        const user = await users.get(_id)
        session.user = user
    })

    app.post('/users/:id', async ({ body, session, params }, res) => {
        const userId = params.id
        if (userId !== session.user._id) throw Error('can only update self')
        if (body.pass) body.pass = auth.encrypt(body.pass)
        const result = users.update({ _id: userId }, { $set: body })
        if (result) {
            const user = await users.get(_id)
            delete user.pass
            session.user = user
            res.json(user)
        } else {
            res.statusCode = 500
            res.json({ error: result })
        }
    })

    app.get('/feed', async(req, res) => {
        const result = await posts.find()
        res.json(result)
    })

    app.get('/feed/:slug', async(req, res) => {
        const result = await posts.findOne({slug: res.params.slug})
        res.json(result)
    })
}