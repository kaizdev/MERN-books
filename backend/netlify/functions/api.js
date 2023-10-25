import express, { Router } from "express";
import serverless from "serverless-http";
import booksRoute from "../../routes/booksRoute.js";
import cors from "cors";
import mongoose from "mongoose";
import router from "../../routes/booksRoute.js";

const api = express();

api.use(express.json());

app.use(
    cors({
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"],
    })
);

const booksRouter = router;
// router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/books", booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

export const handler = serverless(api);
