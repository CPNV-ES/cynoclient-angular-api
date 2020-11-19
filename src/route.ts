import {Application} from "express"
import * as userController from "./routes/user";

export function route(app: Application) {
    app.route("/user")
        .get(userController.get);
}