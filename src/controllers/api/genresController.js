const db = require('../../database/models');

const getUrl = (req) => {
    return `${req.protocol}://${req.get('host')}${req.originalUrl}` 
}

module.exports = {
    list: (req, res) => {
        db.Genre.findAll()
        .then(genres => {
            return res.json({
                meta: {
                    status: 200,
                    total: genres.length,
                    url: 'api/genres'
                },
                data: genres
            })
        })
    },
    detail: (req, res) => {
        db.Genre.findByPk(+req.params.id)
        .then(genre => {
            return res.json({
                meta: {
                    status: 200,
                },
                data: genre
            })
        })
    }
}