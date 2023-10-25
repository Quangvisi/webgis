let getVanbanPage = (req, res) => {
    return res.render("vanbanpage.ejs", {
        title: 'Văn bản',
        user: req.user
    })
};

module.exports = {
    getVanbanPage: getVanbanPage
};
