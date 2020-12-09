// import {Request, Response} from "express";
// import { where } from "sequelize/types";
// import {Service} from "../models/service.model";

// // POST
// export async function post(req: Request, res: Response) {
//     try{
//         const service = await Service.create(req.body)
//         res.status(201).send("DONE");
//     } catch (error){
//         res.status(500).send("Internal Server Error")
//     }
// }
// // GET BY ID
// export async function get(req: Request, res: Response) {
//     try{
//         const service = await Service.findByPk(req.params.id);
//         res.status(200).send(service);
//     } catch (error){
//         res.status(404).send("Service not found")
//     }
// }
// // GET
// export async function getAll(req: Request, res: Response) {
//     try{
//         const services = await Service.findAll();
//         res.status(200).send(services);
//     } catch (error){
//         res.status(500).send("Service Server Error")
//     }
// }
// // PUT
// export async function put(req: Request, res: Response) {
//     try{
//         const service = await Service.destroy({where:{id:req.params.id}})
//         res.status(200).send("DONE");
//     }catch (error){
//         res.status(500).send("Internal Server Error");
//     }
// }
// // REMOVE
// export async function remove(req: Request, res: Response) {
//     res.status(200).send("DONE" + req.params.id);
// }