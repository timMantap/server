const errorHandler = (err, req, res, next) => {
    if (err.name == 'SequelizeValidationError') {
        console.log(`masuk ke error Handler validation`)
        const errors = err.errors.map(error => {
            return {message: error.message}
        })
        return res.status(400).json({
            errors
        })
    } else if (err.name == 'BadRequest' || err.name == 'NotFound') {
        console.log(`masuk ke error handler notFound/badRequest`)
        return res.status(404).json({errors: err.errors})
    } else if (err.name == 'Unauthenticated') {
        console.log(`masuk ke error handler Unauthenticated`)
        return res.status(401).json({errors: err.errors})
    } else if (err.name == 'Unauthorized') {
        console.log(`masuk ke error handler Unauthorized`)
        return res.status(403).json({errors: err.errors})
    } else if (err.name == 'InternalServerError') {
        console.log(`masuk ke error handler InternalServerError`)
        return res.status(500).json({errors: err.errors})
    } else if (err.name == 'SequelizeDatabaseError') {
        console.log(`masuk ke error handler SequelizeDatabaseError`)
        return res.status(500).json({errors: [{message: `Database Error`}]})
    }else if (err.name == 'JsonWebTokenError') {
        return res.status(500).json({errors: [{message: err.message}]})
    } else {
        console.log(`masuk ke error handler else`)
        console.log(err)
        return res.status(401).json({errors: err.errors})
    }
}

module.exports = errorHandler
