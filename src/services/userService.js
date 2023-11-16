require("dotenv").config();
import mysql from "mysql2/promise";
import bluebird from "bluebird";

let getUserList = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        Promise: bluebird
    });

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM `users`');
        // console.log(111111, rows);
        return rows;
    } catch (error) {
        console.log(">>>>>>>>>>> error:", error);
    }
};


let deleteUser = async (id) => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        Promise: bluebird
    });

    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?', [id]);
        // console.log(111111, rows);
        return rows;
    } catch (error) {
        console.log(">>>>>>>>>>> error:", error);
    }
};

let getUserById = async (id) => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        Promise: bluebird
    });

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users WHERE id=?', [id]);
        return rows;
    } catch (error) {
        console.log(">>>>>>>>>>> error:", error);
    }
};

const updateUserInfo = async (email, fullname, id) => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        Promise: bluebird
    });

    try {
        const [rows, fields] = await connection.execute('UPDATE users SET email = ?, fullname = ?  WHERE id = ?', [email, fullname, id]);
        console.log(222222222, rows);
        return rows;
    } catch (error) {
        console.log(">>>>>>>>>>> error:", error);
    }
};
module.exports = {
    getUserList: getUserList,
    deleteUser: deleteUser,
    getUserById: getUserById,
    updateUserInfo: updateUserInfo,
};