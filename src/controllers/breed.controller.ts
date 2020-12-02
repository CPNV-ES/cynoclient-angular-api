import {Request, Response} from "express";
import {Breed} from "../models/breed.model";

// POST
export async function post(req: Request, res: Response) {
    res.status(200).send("DONE");
}
// GET BY ID
export async function getById(req: Request, res: Response) {
    const breed = await Breed.findByPk(req.params.id);
    res.status(200).send(breed);
}
// GET
export async function get(req: Request, res: Response) {
    const breeds = await Breed.findAll();
    res.status(200).send(breeds);
}
// PUT
export async function put(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}
// REMOVE
export async function remove(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}