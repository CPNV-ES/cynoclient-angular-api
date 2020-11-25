import {Application} from "express"
import * as localityController from "./controllers/localityController";
import * as clientController from "./controllers/clientController"
import * as dogController from "./controllers/dogController"
import * as categoryController from "./controllers/categoryController"
import * as consultationController from "./controllers/consultationController"

export function route(app: Application) {
    // Clients
    app.route("/clients")
        .post(clientController.post);
    app.route("/clients/:id")
        .get(clientController.get)
        .put(clientController.put)
        .delete(clientController.remove);
    //Localites
    app.route("/localities")
        .post(localityController.post);
    app.route("/localities/:id")
        .get(localityController.get)
        .put(localityController.put)
        .delete(localityController.remove)
    //Services
    app.route("/services")
        .post(localityController.post);
    app.route("/services/:id")
        .get(localityController.get)
        .put(localityController.put)
        .delete(localityController.remove)
    //Dogs
    app.route("/dogs")
        .post(dogController.post);
    app.route("/dogs/:id")
        .get(dogController.get)
        .put(dogController.put)
        .delete(dogController.remove)
    //Categories
    app.route("/categories")
        .post(categoryController.post);
    app.route("/categories/:id")
        .get(categoryController.get)
        .put(categoryController.put)
        .delete(categoryController.remove)
    //Consultation
    app.route("/consultations")
        .post(consultationController.post);
    app.route("/consultations/:id")
        .get(consultationController.get)
        .put(consultationController.put)
        .delete(consultationController.remove)
}