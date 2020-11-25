import {Application} from "express"
import * as clientController from "./controllers/clientController"

export function route(app: Application) {
    // Clients
    app.route("/clients")
        .post(clientController.post);

    app.route("/clients/:id")
        .get(clientController.get)
        .put(clientController.put)
        .delete(clientController.remove);
}