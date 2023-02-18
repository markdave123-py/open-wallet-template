import dotenv from "dotenv";

dotenv.config();

export const config = Object.freeze({
    // PORT
    port: process.env.PORT || 3500,

    // DATABASE
    db: {
        name: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET
    },
});

