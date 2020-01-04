const Datastore = require('nedb-promises')
const db = {}

db.users = Datastore.create({ filename: 'data/users.db', });
db.posts = Datastore.create({ filename: 'data/posts.db' });
db.roles = Datastore.create({ filename: 'data/roles.db' });
db.sessions = Datastore.create({ filename: 'data/sessions.db' });

db.users.ensureIndex({ fieldName: 'username', unique: true })

db.users.loadDatabase()
db.posts.loadDatabase()
db.roles.loadDatabase()
db.sessions.loadDatabase()

module.exports = db
