import {Request, Response} from "express";
import {Disease} from "../models/disease.model";

// POST
export async function post(req: Request, res: Response) {
    res.status(200).send("DONE");
}
// GET BY ID
export async function getById(req: Request, res: Response) {
    const disease = await Disease.findByPk(req.params.id);
    res.status(200).send(disease);
}
// GET
export async function get(req: Request, res: Response) {
    const diseases = await Disease.findAll();
    res.status(200).send(diseases);
}
// PUT
export async function put(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}
// REMOVE
export async function remove(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}