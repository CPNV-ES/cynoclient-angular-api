import {Application} from "express"
import * as localityController from "./controllers/localityController";
import * as clientController from "./controllers/clientController"

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
}