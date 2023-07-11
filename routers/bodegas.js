import {Router} from 'express'; // inporta el router de express
import mysql from 'mysql2'; // impoorta la libreria de mysql2
import dotenv from "dotenv"; // importa la configuracion del dotenv para usarlo 
const appBodegas = Router(); // ingrea la configuracion del router en una varible
dotenv.config("../"); // pone en uso el dotenv

let con = undefined; // es donde se guardara la db

appBodegas.use((req, res, next)=>{ // pide que se conecte a la base de datos antes de hacer la peticion 
    con = mysql.createPool({ //  conecta a la base de datos por medio del pool y lo guarga en la variable con 
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE,
        port:process.env.DB_PORT,
    });
    next(); // para que llegue a la peticion 
});

// punto 4
appBodegas.get("/", (req,res)=>{
    con.query( // 
        `SELECT * FROM bodegas ORDER BY nombre ASC`, // select * from (seleccionar la tabla bodegas) order by nombre (ordenar por la columna) asc (alfabeticamente)
        (err,data,files)=>{
            res.send(data)
        }
    )
})

// punto 5
appBodegas.post("/", (req,res)=>{
    const {id, nombre, id_responsable, estado, created_by} = req.body // se declara como variable  y resivo los datos del body por medio del req
    con.query(
        `INSERT INTO bodegas (id, nombre, id_responsable, estado, created_by) VALUE (?,?,?,?,?)`, // ingreso los datos,  primero declaro las llaves y despues declaro los values 
        [id, nombre, id_responsable, estado, created_by], // son los datos que voy a llamar para insertarlos 
        (err, data, files)=>{
            res.send(data)
        } 
    )
})

export default appBodegas