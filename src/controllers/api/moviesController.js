const db = require('../../database/models');

const getUrl = (req) => {
    return `${req.protocol}://${req.get('host')}${req.originalUrl}` 
}

module.exports = {
    create: (req, res) => {
        console.log(req.body)
        db.Movie.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
        })
        .then(movie => {
            res.json({
                meta: {
                    endpoint: `${getUrl(req)}/${movie.id}`,
                    msg: 'Movie added succesfully',
                    status: 201
                },
                data: movie
            })
        })
        .catch(error => res.send(error));
    },
    destroy: (req, res) => {
        db.Movie.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(movie => {
            res.json({
                meta: {
                    endpoint: `${getUrl(req)}/${movie.id}`,
                    msg: 'Movie deleted succesfully',
                    status: 201
                },
                data: movie
            })
        })
        .catch(error => res.send(error));
    }
}