import {Request, Response} from "express";


export async function post(req: Request, res: Response) {
    res.status(200).send("DONE");
}

export async function get(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}

export async function put(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}

export async function remove(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}
