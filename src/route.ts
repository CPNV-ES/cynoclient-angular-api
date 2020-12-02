import {Application} from "express"
import * as localityController from "./controllers/locality.controller";
import * as clientController from "./controllers/client.controller"
import * as dogController from "./controllers/dog.controller"
import * as categoryController from "./controllers/category.controller"
import * as consultationController from "./controllers/consultation.controller"
import * as diseaseController from "./controllers/disease.controller"
import * as breedController from "./controllers/breed.controller"

export function route(app: Application) {
    // Clients
    app.route("/clients")
        .post(clientController.post)
        .get(clientController.get);
    app.route("/clients/:id")
        .get(clientController.getById)
        .put(clientController.put)
        .delete(clientController.remove);
    // Localites
    app.route("/localities")
        .post(localityController.post)
        .get(localityController.get);
    app.route("/localities/:id")
        .get(localityController.getById)
        .put(localityController.put)
        .delete(localityController.remove)
    // Services
    app.route("/services")
        .post(localityController.post)
        .get(localityController.get);
    app.route("/services/:id")
        .get(localityController.getById)
        .put(localityController.put)
        .delete(localityController.remove)
    // Dogs
    app.route("/dogs")
        .post(dogController.post)
        .get(dogController.get);
    app.route("/dogs/:id")
        .get(dogController.getById)
        .put(dogController.put)
        .delete(dogController.remove)
    // Categories
    app.route("/categories")
        .post(categoryController.post)
        .get(categoryController.get);
    app.route("/categories/:id")
        .get(categoryController.getById)
        .put(categoryController.put)
        .delete(categoryController.remove)
    // Consultations
    app.route("/consultations")
        .post(consultationController.post)
        .get(categoryController.get);
    app.route("/consultations/:id")
        .get(consultationController.getById)
        .put(consultationController.put)
        .delete(consultationController.remove)
    // Diseases
    app.route("/diseases")
        .post(consultationController.post)
        .get(localityController.get);
    app.route("/diseases/:id")
        .get(diseaseController.getById)
        .put(diseaseController.put)
        .delete(diseaseController.remove)
    // Breeds
    app.route("/breeds")
        .post(breedController.post)
        .get(categoryController.get);
    app.route("/breeds/:id")
        .get(breedController.getById)
        .put(breedController.put)
        .delete(breedController.remove)
    // Clients-Dogs
    app.route("/clients/:id/dogs")
        .get(clientController.getDogs)
    app.route("/clients/:id/dogs/:id1")
        .get(clientController.getDog)
}