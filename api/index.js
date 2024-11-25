import express, { json } from 'express';
import FilmeRouter from './Routers/FilmeRouter.js';
import db from './Data/DbConnection.js';

const server = express();

server.use(json());
server.use(FilmeRouter);

db.sync().then(()=>{
    server.listen(5000, ()=>{
        console.log(`Server listening on port 5000`);
    });
});