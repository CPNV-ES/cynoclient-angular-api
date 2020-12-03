import {Request, Response} from "express";
import { where } from "sequelize/types";
import {Breed} from "../models/breed.model";

// POST
export async function post(req: Request, res: Response) {
    try{
        const breed = await Breed.create(req.body)
        res.status(201).send("DONE");
    } catch (error){
        res.status(500).send("Internal Server Error")
    }
}
// GET BY ID
export async function getById(req: Request, res: Response) {
    try{
        const breed = await Breed.findByPk(req.params.id);
        res.status(200).send(breed);
    } catch (error){
        res.status(404).send("Client not found")
    }
}
// GET
export async function get(req: Request, res: Response) {
    try{
        const breeds = await Breed.findAll();
        res.status(200).send(breeds);
    } catch (error){
        res.status(404).send("Client not found")
    }
}
// PUT
export async function put(req: Request, res: Response) {
    try{
        const breed = await Breed.update(req.body,{where:{id:req.params.id}})
        res.status(200).send("DONE");
    } catch (error){
        res.status(500).send("Internal Server Error");
    }
}
// REMOVE
export async function remove(req: Request, res: Response) {
    try{
        const breed = await Breed.destroy({where:{id:req.params.id}})
        res.status(200).send("DONE");
    }catch (error){
        res.status(500).send("Internal Server Error");
    }
}