import {Application} from "express"
import * as clientController from "./controllers/client.controller";
import * as localityController from "./controllers/locality.controller";
import * as dogController from "./controllers/dog.controller"
import * as categoryController from "./controllers/category.controller"
import * as consultationController from "./controllers/consultation.controller"
import * as diseaseController from "./controllers/disease.controller"
import * as breedController from "./controllers/breed.controller"
import * as serviceController from "./controllers/service.controller"

export function route(app: Application) {
    // Clients
    app.route("/clients")
        .post(clientController.post)
        .get(clientController.getAll);
    app.route("/clients/:id")
        .get(clientController.get)
        .put(clientController.put)
        .delete(clientController.remove);
    // Localites
    app.route("/localities")
        .post(localityController.post)
        .get(localityController.getAll);
    app.route("/localities/:id")
        .get(localityController.get)
        .put(localityController.put)
        .delete(localityController.remove)
    // Services
    app.route("/services")
        .post(serviceController.post)
        .get(serviceController.getAll);
    app.route("/services/:id")
        .get(serviceController.get)
        .put(serviceController.put)
        .delete(serviceController.remove)
    // Dogs
    app.route("/dogs")
        .post(dogController.post)
        .get(dogController.getAll)
     app.route("/dogs/:id")
        .get(dogController.get)
        .put(dogController.put)
        .delete(dogController.remove)
    // Categories
    app.route("/categories")
        .post(categoryController.post)
        .get(categoryController.getAll);
    app.route("/categories/:id")
        .get(categoryController.get)
        .put(categoryController.put)
        .delete(categoryController.remove)
    // // Consultations
    app.route("/consultations")
        .post(consultationController.post)
        .get(consultationController.getAll);
    app.route("/consultations/:id")
        .get(consultationController.get)
        .put(consultationController.put)
        .delete(consultationController.remove)
    // Diseases
    app.route("/diseases")
        .post(diseaseController.post)
        .get(diseaseController.getAll);
    app.route("/diseases/:id")
        .get(diseaseController.get)
        .put(diseaseController.put)
        .delete(diseaseController.remove)
    // Breeds
    app.route("/breeds")
        .post(breedController.post)
        .get(breedController.getAll);
    app.route("/breeds/:id")
        .get(breedController.get)
        .put(breedController.put)
        .delete(breedController.remove);
    // Clients-Dogs
    app.route("/clients/:id/dogs")
        .get(clientController.getDogs);
    // Clients-Services
    app.route("/clients/:id/services")
        .get(clientController.getServices);
    app.route("/dogs/:id/services")
        .get(dogController.getServices);
    // Dogs-Diseases
    app.route("/dogs/:id/diseases/")
        .get(dogController.getDiseases);
}