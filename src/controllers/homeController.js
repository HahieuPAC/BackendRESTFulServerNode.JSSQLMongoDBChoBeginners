
const getHomePage = (req, res) => {
    res.send('this is home page');
}
const getSample = (req, res) => {
    res.render('sample');   
}

module.exports = {
    getHomePage,
    getSample,
}