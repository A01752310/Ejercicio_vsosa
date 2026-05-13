import Server from "./provider/Server";
import { PORT, NODE_ENV } from './config';
import express from 'express';
import cors from 'cors';

//Importar controllers
import ProyectoController from "./controllers/ProyectoController";
import ClienteController from "./controllers/ClienteController";
import EstudianteController from "./controllers/EstudianteController";
//Integrar el proyecto 

const server: Server = new Server({
    port: PORT,
    env: NODE_ENV,
    middlewares: [
        express.json(),
        express.urlencoded({ extended: true }),
        cors()
    ],
    controllers: [
        ProyectoController.instance,
        ClienteController.instance,
        EstudianteController.instance
    ]
});
server.init();