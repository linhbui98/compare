module.exports = {
    getImages: (req, res) => {
        res.render('index', {
            title: 'Http/1.x vs Http/2',
        })
    }
};