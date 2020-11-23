import express from "express";
import "./database/connection";
import cors from "cors";
import "express-async-errors";
import routes from "./routes";
import path from "path";
import errorhandler from "./errors/handlers";
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/tmp", express.static(path.join(__dirname, "..", "tmp")));
app.use(errorhandler);
app.listen(3333);
