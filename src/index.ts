import serverless from "serverless-http";
import express from "express";

import apiRouter from "./api";
import appRouter from "./app";

const app = express();
app.use(express.json());

// * Apply api endpoints
app.use("/api", apiRouter);

// * Apply appRouter for static contents
app.use(appRouter);

const binary = ["application/*", "image/*"];
module.exports.handler = serverless(app, { binary });
