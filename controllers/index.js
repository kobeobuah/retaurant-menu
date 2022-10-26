const schemas = require('../models/schemas.js')

module.exports = {
    getHome:    async (req,res) => {
        let menu = schemas.menu
        //sesh is short for session and we are requiring the session data
        let sesh = req.session

        let menuResult = await menu.find({})
        .then( (menuData) => {
            res.render('index', {title: 'Menu Tracker', data: menuData, search: '', loggedIn: sesh.loggedIn})
        })
    },
    getSearch:   async(req,res) => {
        let menu = schemas.menu
        //sesh is short for session and we are requiring the session data
        let sesh = req.session
        let q = req.body.searchInput
        let menuData = null
        let qry = {name:{$regex: '^' + q, $options: 'i'}}

        if (q != null) {
            let menuResult = await menu.find(qry)
            .then((data) => {
                menuData = data
            })
        } else {
            q = 'Search'
            let menuResult = await menu.find({})
            .then((data) => {
                menuData = data
            })
        }
        res.render('index', {title: 'Menu Tracker', data: menuData, search: q, loggedIn: sesh.loggedIn})
    }
}