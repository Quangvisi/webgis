let getTestPageNoLogin = (req, res) => {
    return res.render("test.ejs", {
        title: 'Trang test',
        user: req.user
    })
};

module.exports = {
    getTestPageNoLogin: getTestPageNoLogin,
};
