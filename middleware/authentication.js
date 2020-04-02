const {decodeToken} = require('../helpers/jwt.js')
const models = require('../models')

const authentication = (req, res, next) => {
    let decode = decodeToken(req.headers.token)
    return models.User.findOne({where: {id: decode.id}})
    .then(result => {
        if(result) {
            req.loggedUserId = result.id
            next()
        } else {
            return next({
                name: `NotFound`,
                errors: [{message: `User not found`}]
            })
        }
    })
    .catch(err => {
        return next(err)
    })
}

module.exports = {authentication}