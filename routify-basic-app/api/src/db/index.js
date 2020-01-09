const Datastore = require('nedb-promises')
const db = {}

db.users = Datastore.create({ filename: 'data/users.db', });
db.posts = Datastore.create({ filename: 'data/posts.db' });
db.roles = Datastore.create({ filename: 'data/roles.db' });

db.users.ensureIndex({ fieldName: 'username', unique: true })
db.users.ensureIndex({ fieldName: '_id', unique: true })
db.posts.ensureIndex({ fieldName: '_id', unique: true })
db.roles.ensureIndex({ fieldName: '_id', unique: true })

db.users.loadDatabase()
db.posts.loadDatabase()
db.roles.loadDatabase()

db.users.get = async function (_id) {
    const user = await this.findOne({ _id })
    const roles = await db.roles.find({ userId: user._id })
    user.roles = roles.map(({ role }) => role)
    delete user.pass
    return user
}

module.exports = db
