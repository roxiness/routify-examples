const { users, posts, roles } = require('./')
const { encrypt } = require('../auth')

users.findOne({}, (err, docs) => {
    if (!docs) seed()
})

function seed() {
    users.insert({ username: 'admin', pass: encrypt('pass') }, makeAdmin)
    users.insert({ username: 'user', pass: encrypt('pass') })
    users.insert({ username: 'author', pass: encrypt('pass') }, createPosts)
}

function createPosts(err, doc){

}

function makeAdmin(err, { _id }) {
    console.log(err, 'admin', _id)
    roles.insert({ role: 'admin', userId: _id })
}