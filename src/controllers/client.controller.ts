import {Request, Response} from "express";
import { ClientRequest } from "http";
import { Model, where} from "sequelize/types";
import {Client} from "../models/client.model";
import { Locality } from "../models/locality.model";
import { Dog } from "../models/dog.model";
import {ClientService} from "../models/clientservice.model";
import {Service} from "../models/service.model";
// POST
export async function post(req: Request, res: Response) {
    try{
        const client = await Client.create(req.body)
        res.status(201).send(client);
    } catch (error){
        res.status(500).send("Internal Server Error")
    }
}
// GET BY ID
export async function get(req: Request, res: Response) {
    try{
        const client = await Client.findByPk(req.params.id,{include:Locality});
        res.status(200).send(client);
    } catch (error){
        res.status(404).send("Client not found")
    }
}
// GET
export async function getAll(req: Request, res: Response) {
    try{
        const clients = await Client.findAll({include:Locality});
        res.status(200).send(clients);
    } catch (error){
        res.status(500).send("Clients not found")
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
    try{
        const clientDogs = await Dog.findAll({where:{id_client:req.params.id}});
        res.status(200).send(clientDogs);
    } catch (error){
        res.status(404).send("Dogs not found")
    }
}
// GET SERVICES
export async function getServices(req: Request, res: Response) {
    try{
        const client = await Client.findByPk(req.params.id,{include:[Service]});
        const clientServices = client.services;
        res.status(200).send(clientServices);
    } catch (error){
        res.status(404).send("Services not found")
    }
}