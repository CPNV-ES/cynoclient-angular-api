import {Request, Response} from "express";
import {Disease} from "../models/disease.model";

// POST
export async function post(req: Request, res: Response) {
    try{
        const disease = await Disease.create(req.body)
        res.status(201).send("DONE");
    } catch (error){
        res.status(500).send("Internal Server Error")
    }
}
// GET BY ID
export async function get(req: Request, res: Response) {
    try{
        const disease = await Disease.findByPk(req.params.id);
        res.status(200).send(disease);
    } catch (error){
        res.status(404).send("Disease not found")
    }
}
// GET
export async function getAll(req: Request, res: Response) {
    try{
        const diseases = await Disease.findAll();
        res.status(200).send(diseases);
    } catch (error){
        res.status(404).send("Diseases not found")
    }
}
// PUT
export async function put(req: Request, res: Response) {
    try{
        const disease = await Disease.update(req.body,{where:{id:req.params.id}})
        res.status(200).send("DONE");
    } catch (error){
        res.status(500).send("Internal Server Error");
    }
}
// REMOVE
export async function remove(req: Request, res: Response) {
    try{
        const disease = await Disease.destroy({where:{id:req.params.id}})
        res.status(200).send("DONE");
    }catch (error){
        res.status(500).send("Internal Server Error");
    }
}