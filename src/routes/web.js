import express from "express";
import registerController from "../controllers/registerController";
import loginController from "../controllers/loginController";
import homePageController from "../controllers/homePageController";
import userController from "../controllers/userController";
import vanbanPageController from "../controllers/vanbanPageController";
import initPassportLocal from "../controllers/passportLocalController";
/*
init passport routes
 */
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {

    router.get("/user", loginController.checkLoggedIn, userController.getUser);
    router.get("/admin", loginController.checkLoggedIn, vanbanPageController.getVanbanPage);
    router.get("/", homePageController.getHomePageNoLogin);
    router.get("/home", homePageController.getHomePage);

    router.post("/logout", loginController.postLogOut);

    router.get("/register", registerController.getRegisterPage);
    router.post("/register-new-user", registerController.createNewUser);

    router.get("/login", loginController.checkLoggedOut, loginController.getLoginPage);
    router.post("/login", loginController.handleLogin);
    return app.use("/", router);
};

module.exports = initWebRoutes;
