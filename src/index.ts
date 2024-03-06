import express from "express";
import helmet from "helmet";
import cors from "cors";
import {homeRouter} from "./middleware/routers/root";
import {Status} from "./util/consts";

export const app = express();
app.use(helmet());
app.use(cors())

app.use(express.static("public"));

app.use(homeRouter);

app.get("*", (req, res, next) => {
    res.status(Status.notFound).send("Not found");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});