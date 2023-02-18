import express from "express";
import {config} from "./config/env.js";
import { myDatabase } from "./config/database.js";
import { router } from "./routes/route.js";

const app = express();

app.use(express.json());
app.use('/', router);

app.use('*', (req, res) =>{
    res.status(404).json({
        message: 'route not found'
    });
});

myDatabase.sync()
.then(() => {
    console.log("connection to database successful");
})
.catch((err) => {
    console.log(`Couldnt connect to database`, err);
})

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});