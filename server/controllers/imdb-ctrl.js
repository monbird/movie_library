const api_key = process.env.OMDB_API_KEY;
const omdb = new (require('omdbapi'))(api_key);

getImdbTitles = async (req, res) => {
    const body = req.body;

    omdb.search({
        search: body.title,
        type: body.type,
        year: body.year
    }).then(resOmdb => {
        return res.status(200).json({
            success: true,
            message: 'Titles found!',
            data: resOmdb
        });
    }).catch(error => {
        return res.status(404).json({
            success: false,
            message: 'No titles found!'
        });
    });
}

getImdbTitleDetails = async (req, res) => {
    const id = req.params.id;

    omdb.get({
        id: id
    }).then(resOmdb => {
        return res.status(200).json({
            success: true,
            message: 'Title found!',
            data: resOmdb
        });
    }).catch(error => {
        return res.status(404).json({
            success: false,
            message: 'Title not found!'
        });
    });
}

module.exports = {
    getImdbTitles,
    getImdbTitleDetails
};
