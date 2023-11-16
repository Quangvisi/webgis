import userService from "../services/userService";

let getAdminPage = async (req, res) => {
    let userList = await userService.getUserList();
    // console.log(111111, userList);

    return res.render("accountpage.ejs", {
        userList: userList,
        title: 'Trang quản lý account',
        user: req.user,
    })
};

let getUserPageLogin = (req, res) => {
    return res.render("userpage_admin.ejs", {
        title: 'Bản đồ',
        user: req.user
    })
};

const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect("/account");
};

const getUpdateUserPage = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserById(id);
    let userData = {};
    if (user && user.length > 0) {
        userData = user[0];
    }

    return res.render("update-user.ejs", { userData });
};

const handleUpdateUser = async (req, res) => {
    let email = req.body.email;
    let fullname = req.body.fullname;
    let id = req.body.id;
    await userService.updateUserInfo(email, fullname, id);
    console.log(11111111, id);

    return res.redirect("/account");
};

module.exports = {
    getAdminPage: getAdminPage,
    getUserPageLogin: getUserPageLogin,
    handleDeleteUser: handleDeleteUser,
    getUpdateUserPage: getUpdateUserPage,
    handleUpdateUser: handleUpdateUser,
};
