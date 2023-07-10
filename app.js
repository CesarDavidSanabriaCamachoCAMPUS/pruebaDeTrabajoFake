import express from 'express';
import appBodegas from "./routers/bodegas";

const app = express();

app.use(express.json());
app.use("/bodegas", appBodegas);

app.listen(config, ()=>{
    conmsole.log("funciona")
})