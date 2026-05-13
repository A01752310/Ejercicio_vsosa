import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        collection: 'estudiantes',
        timestamps: false
    }
})

export class Estudiante {
    @prop({ required: true, trim: true, unique: true })
    public matricula_alumno!: string;

    @prop({ required: true, trim: true })
    public carrera!: string;

    @prop({ required: true })
    public promedio_general!: number;
}

export const EstudianteModel = getModelForClass(Estudiante);
