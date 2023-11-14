import tabledocService from "../services/tabledocService";

let getHomePageNoLogin = async (req, res) => {
    let linkDocument = await tabledocService.getLinkDocuments();
    // console.log(111111, linkDocument);
    return res.render("homepage.ejs", {
        linkDocument: linkDocument,
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
