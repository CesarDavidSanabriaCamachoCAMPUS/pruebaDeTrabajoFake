import express from 'express';
import dotenv from "dotenv";
import appBodegas from "./routers/bodegas.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/bodegas", appBodegas);

let config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});