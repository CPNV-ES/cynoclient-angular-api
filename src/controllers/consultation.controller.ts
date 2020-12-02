// import {Request, Response} from "express";
// import {Consultation} from "../models/consultation.model";

// // POST
// export async function post(req: Request, res: Response) {
//     try{
//         const consultation = await Consultation.create(req.body)
//         res.status(201).send("DONE");
//     } catch (error){
//         res.status(500).send("Internal Server Error")
//     }
// }
// // GET BY ID
// export async function getById(req: Request, res: Response) {
//     try{
//         const consultation = await Consultation.findByPk(req.params.id);
//         res.status(200).send(consultation);
//     } catch (error){
//         res.status(404).send("Client not found")
//     }
// }
// // GET
// export async function get(req: Request, res: Response) {
//     try{
//         const consultations = await Consultation.findAll();
//         res.status(200).send(consultations);
//     } catch (error){
//         res.status(404).send("Client not found")
//     }
// }
// // PUT
// export async function put(req: Request, res: Response) {
//     try{
//         const consultation = await Consultation.update(req.body,{where:{id:req.params.id}})
//         res.status(200).send("DONE");
//     } catch (error){
//         res.status(500).send("Internal Server Error");
//     }
// }
// // REMOVE
// export async function remove(req: Request, res: Response) {
//     try{
//         const consultation = await Consultation.destroy({where:{id:req.params.id}})
//         res.status(200).send("DONE");
//     }catch (error){
//         res.status(500).send("Internal Server Error");
//     }
// }