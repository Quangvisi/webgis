let getHomePage = (req, res) => {
    return res.render("homepage.ejs", {
        title: 'Trang chủ',
        user: req.user
    })
};


let getHomePageNoLogin = (req, res) => {
    return res.render("homepage_nologin.ejs", {
        title: 'Trang chủ',
        user: req.user
    })
};
module.exports = {
    getHomePage: getHomePage,
    getHomePageNoLogin: getHomePageNoLogin
};
