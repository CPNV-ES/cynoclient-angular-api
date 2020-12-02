import {Request, Response} from "express";
import {Service} from "../models/service.model";

// POST
export async function post(req: Request, res: Response) {
    res.status(200).send("DONE");
}
// GET BY ID
export async function getById(req: Request, res: Response) {
    const service = await Service.findByPk(req.params.id);
    res.status(200).send(service);
}
// GET
export async function get(req: Request, res: Response) {
    const services = await Service.findAll();
    res.status(200).send(services);
}
// PUT
export async function put(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}
// REMOVE
export async function remove(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}