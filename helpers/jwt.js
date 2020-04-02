const jwt = require('jsonwebtoken')

function generateToken(payload) {
    return jwt.sign(payload, process.env.SECRET)
}

function decodeToken(payload) {
    return jwt.verify(payload, process.env.SECRET)
}

module.exports = {
    generateToken,
    decodeToken
}