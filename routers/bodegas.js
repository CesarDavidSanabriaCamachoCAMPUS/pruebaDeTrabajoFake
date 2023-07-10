import {Router} from 'express';
import mysql from 'mysql2';
const appBodegas = Router();

let con = undefined;

appBodegas.use((req,res,next)=>{
    con = mysql.createPool({
        
    })
})
