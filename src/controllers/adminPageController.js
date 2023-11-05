let getAdminPage = (req, res) => {
    return res.render("adminpage.ejs", {
        title: 'Trang của Admin',
        user: req.user
    })
};

module.exports = {
    getAdminPage: getAdminPage
};
