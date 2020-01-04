const crypto = require('crypto');
const { users } = require('../db')

module.exports.encrypt = function (str) {
    return crypto.pbkdf2Sync(str, 'maldon', 1000, 64, 'sha512').toString(`hex`)
}

module.exports.verify = async function (username, password) {
    const { pass, ...user } = await users.findOne({ username })
    const hash = this.encrypt(password)
    if (hash !== pass) throw { message: 'Login details incorrect', statusCode: 401 }
    return user
}