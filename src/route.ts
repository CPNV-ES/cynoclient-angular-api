import {Application} from "express"
import * as localityController from "./controllers/localityController";

export function route(app: Application) {
    app.route("/localities")
        .post(localityController.post);
    app.route("/localities/:id")
        .get(localityController.get)
        .put(localityController.put)
        .delete(localityController.remove);
}