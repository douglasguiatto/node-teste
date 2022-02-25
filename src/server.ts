//prettier-ignore
import express from 'express';
//prettier-ignore
import cors from 'cors';
//prettier-ignore
import path from 'path';
//prettier-ignore
import 'express-async-errors';

import errorHandler from "./errors/handler";
import routes from "./routes";

import "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use(errorHandler);

app.listen(3333);
