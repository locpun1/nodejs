import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message)
    return res.send('post crud from sever');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId)
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);

        return res.render('editCRUD.ejs', { userData: userData })
    }
    else {
        return res.send('User Id not found!')
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    await CRUDService.updateUserData(data);
    return res.redirect('/get-crud');
}
let deleteCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId)
    if (userId) {
        let userData = await CRUDService.deleteUserById(userId);
        return res.redirect('/get-crud');
    }
    else {
        return res.send('User Id not found!')
    }
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}