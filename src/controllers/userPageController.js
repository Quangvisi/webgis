let getUserPageNoLogin = (req, res) => {
    return res.render("userpage_nologin.ejs", {
        user: req.user
    })
};
module.exports = {
    getUserPageNoLogin: getUserPageNoLogin
};
