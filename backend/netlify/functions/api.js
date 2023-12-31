import express, { Router } from "express";
import serverless from "serverless-http";
import booksRoute from "../../routes/booksRoute.js";
import cors from "cors";
import mongoose from "mongoose";
import router from "../../routes/booksRoute.js";
import { mongoDBURL } from "../../config.js";

export async function handler(event, context) {
    const api = express();

    api.use(express.json());

    api.use(
        cors({
            origin: [
                "http://localhost:3000",
                "http://localhost:5173",
                "https://mern-books.netlify.app",
            ],
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
            api.listen(PORT, () => {
                console.log(`App is listening to port: ${PORT}`);
            });
        })
        .catch((error) => {
            console.log(error);
        });

    return serverless(api)(event, context);
}
