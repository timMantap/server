const models = require('../models')

const authorization = (req, res, next) => {
    return models.Todo.findOne({where: {id: req.params.id}})
    .then(result => {
        if (result) {
            if (result.id == req.loggedUserId) {
                next()
            } else {
                return next({
                    name: `Unauthorized`,
                    errors: [{message: `User is unauthorized`}]
                })
            }
        } else {
            return next({
                name: `NotFound`,
                errors: [{message: `Data Not Found`}]
            })
        }
    })
    .catch(err => {
        return next({
            name: `InternalServerError`,
            errors: [{message: `Internal Server Error`}]
        })
    })
}

module.exports = authorization