import {Request, Response} from "express";
import {Dog} from "../models/dog.model";

// POST
export async function post(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}
// GET BY ID
export async function getById(req: Request, res: Response) {
    const dog = await Dog.findByPk(req.params.id)
    res.status(200).send(dog);
}
// GET
export async function get(req: Request, res: Response) {
    const dogs = await Dog.findAll()
    res.status(200).send(dogs);
}
// PUT
export async function put(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}
// REMOVE
export async function remove(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}