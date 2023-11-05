let getHomePageNoLogin = (req, res) => {
    return res.render("homepage.ejs", {
        user: req.user
    })
};
let getUserPageNoLogin = (req, res) => {
    return res.render("userpage_nologin.ejs", {
        user: req.user
    })
};
module.exports = {
    getUserPageNoLogin: getUserPageNoLogin,
    getHomePageNoLogin: getHomePageNoLogin
};
