import {Request, Response} from "express";
import {Consultation} from "../models/consultation.model";

// POST
export async function post(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}
// GET BY ID
export async function getById(req: Request, res: Response) {
    const consultation = await Consultation.findByPk(req.params.id);
    res.status(200).send(consultation);
}
// GET
export async function get(req: Request, res: Response) {
    const consultations = await Consultation.findAll();
    res.status(200).send(consultations);
}
// PUT
export async function put(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}
// REMOVE
export async function remove(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}