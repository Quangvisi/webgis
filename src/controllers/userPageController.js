let getHomePageNoLogin = (req, res) => {
    return res.render("homepage.ejs", {
        title: 'Trang chủ',
        user: req.user
    })
};
let getUserPageNoLogin = (req, res) => {
    return res.render("userpage_user.ejs", {
        title: 'Bản đồ',
        user: req.user
    })
};
module.exports = {
    getUserPageNoLogin: getUserPageNoLogin,
    getHomePageNoLogin: getHomePageNoLogin
};
