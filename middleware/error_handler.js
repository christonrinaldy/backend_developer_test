function errorHandler(error, req, res, next) {
    // console.log("error: ", error)
    switch (error.name) {
        case 'SequelizeUniqueConstraintError':
            res.send({ code: 409, msg: 'ALREADY_EXISTS', error: `[${error.errors.map(val => val.path)}] is already in use` });
            break;
        case 'SequelizeValidationError':
            res.send({ code: 400, msg: "Bad Request!", error: error.errors[0].message });
        case 'SequelizeForeignKeyConstraintError':
            res.send({ code: 409, msg: "Bad Request!" });
            break
        case 'SequelizeDatabaseError':
            res.send({code: 422, msg: "Unprocessable Entity"});
        case 'not found':
            res.send({code: 404, msg: 'not found'})
        default:
            res.send({ code: 500, msg: "Internal Server Error" })
            break;
    }
}
module.exports = errorHandler