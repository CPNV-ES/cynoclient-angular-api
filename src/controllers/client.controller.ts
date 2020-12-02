import {Request, Response} from "express";
import { ClientRequest } from "http";
import { where } from "sequelize/types";
import {Client} from "../models/client.model";

// POST
export async function post(req: Request, res: Response) {
    try{
        const client = await Client.create(req.body)
        res.status(201).send("DONE");
    } catch (error){
        res.status(500).send("Internal Server Error")
    }
}
// GET BY ID
export async function getById(req: Request, res: Response) {
    try{
        const client = await Client.findByPk(req.params.id);
        res.status(200).send(client);
    } catch (error){
        res.status(404).send("Client not found")
    }
}
// GET
export async function get(req: Request, res: Response) {
    try{
        const clients = await Client.findAll();
        res.status(200).send(clients);
    } catch (error){
        res.status(500).send("Internal Server Error")
    }
}
// PUT
export async function put(req: Request, res: Response) {
    try{
        const client = await Client.update(req.body,{where:{id:req.params.id}})
        res.status(200).send("DONE");
    } catch (error){
        res.status(500).send("Internal Server Error");
    }
}
// REMOVE
export async function remove(req: Request, res: Response) {
    try{
        const client = await Client.destroy({where:{id:req.params.id}})
        res.status(200).send("DONE");
    }catch (error){
        res.status(500).send("Internal Server Error");
    }

}
// GET DOGS
export async function getDogs(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id);
}
// GET DOG
export async function getDog(req: Request, res: Response) {
    res.status(200).send("DONE " + req.params.id + req.params.id1);
}