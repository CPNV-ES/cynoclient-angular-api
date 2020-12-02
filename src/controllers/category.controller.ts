// import {Request, Response} from "express";
// import { where } from "sequelize/types";
// import {Category} from "../models/category.model";

// // POST
// export async function post(req: Request, res: Response) {
//     try{
//         const category = await Category.create(req.body)
//         res.status(201).send("DONE");
//     } catch (error){
//         res.status(500).send("Internal Server Error")
//     }
// }
// // GET BY ID
// export async function getById(req: Request, res: Response) {
//     try{
//         const category = await Category.findByPk(req.params.id)
//         res.status(200).send(category);
//     } catch (error){
//         res.status(404).send("Client not found")
//     }
// }
// // GET
// export async function get(req: Request, res: Response) {
//     try{
//         const categories = await Category.findAll()
//         res.status(200).send(categories);
//     } catch (error){
//         res.status(404).send("Client not found")
//     }
// }
// // PUT
// export async function put(req: Request, res: Response) {
//     try{
//         const category = await Category.update(req.body,{where:{id:req.params.id}})
//         res.status(200).send("DONE");
//     } catch (error){
//         res.status(500).send("Internal Server Error");
//     }
// }
// // REMOVE
// export async function remove(req: Request, res: Response) {
//     try{
//         const category = await Category.destroy({where:{id:req.params.id}})
//         res.status(200).send("DONE");
//     }catch (error){
//         res.status(500).send("Internal Server Error");
//     }
// }