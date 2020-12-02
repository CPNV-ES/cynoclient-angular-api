import {Request, Response} from "express";
import {Locality} from "../models/locality.model";

// POST
export async function post(req: Request, res: Response) {
    try{
        const locality = await Locality.create(req.body)
        res.status(201).send("DONE");
    } catch (error){
        res.status(500).send("Internal Server Error")
    }
}
// GET BY ID
export async function getById(req: Request, res: Response) {
    try{
        const locality = await Locality.findByPk(req.params.id);
        res.status(200).send(locality);
    } catch (error){
        res.status(404).send("Client not found")
    }
}
// GET
export async function get(req: Request, res: Response) {
    try{
        const localities = await Locality.findAll();
        res.status(200).send(localities);
    } catch (error){
        res.status(404).send("Client not found")
    }
}
// PUT
export async function put(req: Request, res: Response) {
    try{
        const locality = await Locality.update(req.body,{where:{id:req.params.id}})
        res.status(200).send("DONE");
    } catch (error){
        res.status(500).send("Internal Server Error");
    }
}
// REMOVE
export async function remove(req: Request, res: Response) {
    try{
        const locality = await Locality.destroy({where:{id:req.params.id}})
        res.status(200).send("DONE");
    }catch (error){
        res.status(500).send("Internal Server Error");
    }
}