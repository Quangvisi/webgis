let getAdminPage = (req, res) => {
    return res.render("accountpage.ejs", {
        title: 'Trang quản lý account',
        user: req.user
    })
};
let getUserPageLogin = (req, res) => {
    return res.render("userpage_admin.ejs", {
        title: 'Bản đồ',
        user: req.user
    })
};

module.exports = {
    getAdminPage: getAdminPage,
    getUserPageLogin: getUserPageLogin
};
