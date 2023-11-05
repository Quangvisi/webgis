let getAdminPage = (req, res) => {
    return res.render("adminpage.ejs", {
        title: 'Trang của Admin',
        user: req.user
    })
};
let getUserPageLogin = (req, res) => {
    return res.render("userpage_login.ejs", {
        title: 'Trang của User',
        user: req.user
    })
};

module.exports = {
    getAdminPage: getAdminPage,
    getUserPageLogin: getUserPageLogin
};
