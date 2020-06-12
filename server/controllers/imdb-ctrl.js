const api_key = process.env.OMDB_API_KEY;
const omdb = new (require('omdbapi'))(api_key);

getImdbTitles = async (req, res) => {
    const body = req.body;

    if (body.title) {
        let payload = {
            search: body.title.trim(),
            type: body.type
        };

        if(body.year) {
            payload.year = ("" + body.year).trim();
        }

        omdb.search(payload)
        .then(resOmdb => {
            return res.status(200).json({
                success: true,
                message: 'Titles found!',
                data: resOmdb
            });
        })
        .catch(error => {
            return res.status(404).json({
                success: false,
                message: 'No titles found!'
            });
        });
    } else {
        return res.status(400).json({
            succes: false,
            message: 'You must provide a title!'
        })
    }
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
