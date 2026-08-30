// lib/db.js — MySQL connection pool shared across all API routes
import mysql from 'mysql2/promise';

const useSSL = process.env.DB_SSL === 'true';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    ...(useSSL && {
        ssl: {
            ca: process.env.DB_CA_CERT?.replace(/\\n/g, '\n'),
            rejectUnauthorized: true,
        },
    }),

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default pool;