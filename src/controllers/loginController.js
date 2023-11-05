import passport from "passport";

let getLoginPage = (req, res) => {
    return res.render("login.ejs");
};

let handleLogin = (req, res, next) => {
    passport.authenticate("localLogin", function (error, user, info) {
        if (error) {
            return res.status(500).json(error);
        }
        if (!user) {
            return res.status(401).json(info.message);
        }
        req.login(user, function (err) {
            if (err) {
                return res.status(500).json(error);
            } else {
                return res.status(200).json(user);
            }
        });
    })(req, res, next);
};

let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
};

let checkRole = (requiredRole) => {
    return (req, res, next) => {
        if (!req.isAuthenticated()) {
            return res.redirect("/login");
        }

        // Kiểm tra vai trò của người dùng (ví dụ: lấy từ req.user hoặc dựa trên cơ sở dữ liệu)
        const userRole = req.user.role; // Giả sử bạn có một thuộc tính role trong đối tượng user

        if (userRole === requiredRole) {
            // Người dùng có vai trò phù hợp, tiếp tục xử lý
            next();
        } else {
            // Người dùng không có vai trò phù hợp, chuyển hướng hoặc trả về lỗi
            res.status(403).send("Bạn không có quyền truy cập trang này!");
        }
    };
};


let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

let postLogOut = (req, res) => {
    req.session.destroy(function (err) {
        return res.redirect("/login");
    });
};

module.exports = {
    getLoginPage: getLoginPage,
    handleLogin: handleLogin,
    checkLoggedIn: checkLoggedIn,
    checkLoggedOut: checkLoggedOut,
    postLogOut: postLogOut,
    checkRole: checkRole
};