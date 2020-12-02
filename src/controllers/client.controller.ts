import {Request, Response} from "express";
import {Client} from "../models/client.model";

// POST
export async function post(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}
// GET BY ID
export async function getById(req: Request, res: Response) {
    const client = await Client.findByPk(req.params.id);
    res.status(200).send(client);
}
// GET
export async function get(req: Request, res: Response) {
    const clients = await Client.findAll();
    res.status(200).send(clients);
}
// PUT
export async function put(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}
// REMOVE
export async function remove(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}
// GET DOGS
export async function getDogs(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}
// GET DOG
export async function getDog(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id + req.params.id1);
}