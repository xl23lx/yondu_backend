import * as dotenv from 'dotenv';

dotenv.config();

const config = {
    TOKEN_SECRET: process.env.JWT_TOKEN_SECRET,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_PASS: process.env.DB_PASS,
    DB_USER_NAME: process.env.DB_USER_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_SOCKET: process.env.DB_SOCKET,
};

export default config;