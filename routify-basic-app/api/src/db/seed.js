const { users, posts, roles } = require('./')
const { encrypt } = require('../auth')

seedIfEmpty()
async function seedIfEmpty(){
    const user = await users.findOne()
    if(!user) seed()
}


async function seed() {
    console.log('seeding db')

    const admin = await users.insert({ username: 'admin', pass: encrypt('pass') })
    const user = await users.insert({ username: 'user', pass: encrypt('pass') })
    const author = users.insert({ username: 'author', pass: encrypt('pass') })

    // make admin
    roles.insert({ role: 'admin', userId: admin._id })

    // create posts
    posts.insert({title: 'My first post', slug:"my-first-post", body: 'Lorem Ipsum', authorId: author._id})
    posts.insert({title: 'My second post', slug:"my-second-post", body: 'Lorem Ipsum', authorId: author._id})
    posts.insert({title: 'My third post', slug:"my-third-post", body: 'Lorem Ipsum', authorId: author._id})
    posts.insert({title: 'My fourth post', slug:"my-fourth-post", body: 'Lorem Ipsum', authorId: author._id})
}
