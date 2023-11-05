import express from "express";
import registerController from "../controllers/registerController";
import loginController from "../controllers/loginController";
import userPageController from "../controllers/userPageController";
import adminPageController from "../controllers/adminPageController";
import initPassportLocal from "../controllers/passportLocalController";
/*
init passport routes
 */
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/account", loginController.checkLoggedIn, loginController.checkRole("admin"), adminPageController.getAdminPage);
    router.get("/admin", loginController.checkLoggedIn, loginController.checkRole("admin"), adminPageController.getUserPageLogin);
    router.get("/user", loginController.checkLoggedIn, userPageController.getUserPageNoLogin);
    router.get("/", userPageController.getUserPageNoLogin);

    router.post("/logout", loginController.postLogOut);

    router.get("/register", registerController.getRegisterPage);
    router.post("/register-new-user", registerController.createNewUser);

    router.get("/login", loginController.checkLoggedOut, loginController.getLoginPage);
    router.post("/login", loginController.handleLogin);
    return app.use("/", router);
};

module.exports = initWebRoutes;
