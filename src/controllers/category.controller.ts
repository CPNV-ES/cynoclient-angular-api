import {Request, Response} from "express";
import {Category} from "../models/category.model";

// POST
export async function post(req: Request, res: Response) {
    res.status(200).send("DONE");
}
// GET BY ID
export async function getById(req: Request, res: Response) {
    const category = await Category.findByPk(req.params.id)
    res.status(200).send(category);
}
// GET
export async function get(req: Request, res: Response) {
    const categories = await Category.findAll()
    res.status(200).send(categories);
}
// PUT
export async function put(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}
// REMOVE
export async function remove(req: Request, res: Response) {
    res.status(200).send("DONE" + req.params.id);
}