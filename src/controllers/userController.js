let getUser = (req, res) => {
    return res.render("user.ejs", {
        title: 'user',
    })
};

module.exports = {
    getUser: getUser
};
