import express from "express";
import {route} from "./route";

const port = 3000;
const ip = "0.0.0.0";
const app = express();

route(app);

app.listen(port, ip, () => {
  // console.log(`Server is up and running on ${ip}:${port}`)
});
