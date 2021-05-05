const errorHandler = (err, req, res, next) => {
    console.error(err.stack.red)
    res.status(500).send('Something broke!')
}

module.exports = errorHandler;