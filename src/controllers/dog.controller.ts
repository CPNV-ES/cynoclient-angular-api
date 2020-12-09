import {Request, Response} from "express";
import { Breed } from "../models/breed.model";
import { Client } from "../models/client.model";
import {Dog} from "../models/dog.model";

// POST
export async function post(req: Request, res: Response) {
    try{
        const dog = await Dog.create(req.body)
        res.status(201).send("DONE");
    } catch (error){
        res.status(500).send("Internal Server Error")
    }
}
// GET BY ID
export async function get(req: Request, res: Response) {
    try{
        const dog = await Dog.findByPk(req.params.id,{include:[Client]})
        res.status(200).send(dog);
    } catch (error){
        res.status(404).send("Dog not found")
    }
}
// GET
export async function getAll(req: Request, res: Response) {
    try{
        const dogs = await Dog.findAll({include:[Client,Breed]})
        res.status(200).send(dogs);
    } catch (error){
        res.status(404).send("Dogs not found")
    }
}
// PUT
export async function put(req: Request, res: Response) {
    try{
        const dog = await Dog.update(req.body,{where:{id:req.params.id}})
        res.status(200).send("DONE");
    } catch (error){
        res.status(500).send("Internal Server Error");
    }
}
// REMOVE
export async function remove(req: Request, res: Response) {
    try{
        const dog = await Dog.destroy({where:{id:req.params.id}})
        res.status(200).send("DONE");
    }catch (error){
        res.status(500).send("Internal Server Error");
    }
}