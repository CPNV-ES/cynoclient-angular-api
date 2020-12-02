import {Request, Response} from "express";
import {Client} from "../models/client.model";


export async function post(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}

export async function get(req: Request, res: Response) {
    const client = await Client.findByPk(req.params.id);
    res.status(200).send(client);
}

export async function put(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}

export async function remove(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}

export async function getDogs(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}

export async function getDog(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id + req.params.id1);
}