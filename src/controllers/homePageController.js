let getHomePage = (req, res) => {
    return res.render("homepage.ejs", {
        title: 'Trang chủ',
        user: req.user
    })
};

module.exports = {
    getHomePage: getHomePage
};
