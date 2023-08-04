//import connection from config/database
const connection = require('../config/database');
const {getAllUsers} = require('../service/CRUDService');

const getHomePage = async  (req, res) => {
    
    
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results}); //x <- y
}
const getSample = (req, res) => {
    res.render('sample');   
}

const getCreatePage = (req, res) => {
    res.render('create');   
}

const postCreateUser = async (req, res) => {
    
    let email = req.body.email;
    let name = req.body.myName;
    let city = req.body.city;


    let [results, fields] = await connection.query(
        `INSERT INTO Users  (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
        );

    res.send('create user succeed!')
}

module.exports = {
    getHomePage,
    getSample,
    postCreateUser,
    getCreatePage,
}