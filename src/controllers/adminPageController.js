let getAdminPage = (req, res) => {
    return res.render("adminpage.ejs", {
        title: 'Văn bản',
        user: req.user
    })
};

module.exports = {
    getAdminPage: getAdminPage
};
