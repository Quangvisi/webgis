require("dotenv").config();
import mysql from "mysql2/promise";
import bluebird from "bluebird";


const getLinkDocuments = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        Promise: bluebird
    });

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM `doc`');
        return rows;
    } catch (error) {
        console.log(">>>>>>>>>>> error:", error);
    }
};


module.exports = {
    getLinkDocuments: getLinkDocuments,
};