import mysql from "mysql2/promise";

export default async function handler(req, res) {

    const connection = await mysql.createConnection({
        host: "localhost",
        user: "admin",
        password: "password",
        database: "things-back",
        port: 3306
    });
    try {

        const query = "SELECT * FROM organizations";
        const values = [];
        const [results] = await connection.execute(query, values);
        res.status(200).json({ name: results});

    } catch (error) {
        res.status(500).json({ name: error.message});
    }
}