let getUserPageLogin = (req, res) => {
    return res.render("userpage_login.ejs", {
        title: 'Trang của User',
        user: req.user
    })
};


let getUserPageNoLogin = (req, res) => {
    return res.render("userpage_nologin.ejs", {
        title: 'Trang chưa đăng nhập',
        user: req.user
    })
};
module.exports = {
    getUserPageLogin: getUserPageLogin,
    getUserPageNoLogin: getUserPageNoLogin
};
