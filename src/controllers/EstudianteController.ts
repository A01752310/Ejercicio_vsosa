import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import { EstudianteModel } from "../modelsNOSQL/Estudiante";

export default class EstudianteController extends AbstractController {
    //Singleton
    //Atributos de clase
    private static _instance: EstudianteController;

    //Métodos de clase
    public static get instance(): EstudianteController {
        return this._instance ||
            (this._instance = new this("Estudiante"));
    }

    //Metodo de instancia
    protected initRoutes(): void {
        this.router.get('/listarEstudiantes', this.getListarEstudiantes.bind(this));
        this.router.post('/crearEstudiante', this.postCrearEstudiante.bind(this));
    }

    private async getListarEstudiantes(req: Request, res: Response): Promise<void> {
        //SELECT
        try {
            const estudiantes = await EstudianteModel.find();
            res.status(200).json(estudiantes);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    private async postCrearEstudiante(req: Request, res: Response): Promise<void> {
        //CREATE
        try {
            console.log(req.body);
            await EstudianteModel.create(req.body);
            res.status(200).json({ message: "Registro de estudiante exitoso" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}
