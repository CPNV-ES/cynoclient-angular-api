import {Request, Response} from "express";
import {Locality} from "../models/locality.model";

// POST
export async function post(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}
// GET BY ID
export async function getById(req: Request, res: Response) {
    const locality = await Locality.findByPk(req.params.id);
    res.status(200).send(locality);
}
// GET
export async function get(req: Request, res: Response) {
    const localities = await Locality.findAll();
    res.status(200).send(localities);
}
// PUT
export async function put(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}
// REMOVE
export async function remove(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}