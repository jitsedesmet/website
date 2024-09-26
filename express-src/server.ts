import { handler } from '../build/handler.js';
import type { Request, Response } from "express";
import express from 'express';
import cors from "cors";
import helmet from "helmet";
import {Status} from "./consts";

const app = express();
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            frameSrc: ["'self'", "*.jitsedesmet.be"],
            imgSrc: ["'self'", "*.jitsedesmet.be"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: []
        }
    }
}));
app.use(cors());


app.get(`/profile`, async (req: Request, res: Response) => {
    res.status(Status.ok).sendFile("profile.ttl", {
        root: __dirname + "/static/",
        headers: {
            "Content-Type": "text/turtle"
        },
        maxAge: 10_000
    });
});

app.get(`/images`, async (req: Request, res: Response) => {
    res.status(Status.ok).sendFile("images.ttl", {
        root: __dirname + "/static/",
        headers: {
            "Content-Type": "text/turtle"
        },
        maxAge: 10_000
    });
});

app.get(`/vocabulary`, async (req: Request, res: Response) => {
    res.status(Status.ok).sendFile("vocabulary.ttl", {
        root: __dirname + "/static/",
        headers: {
            "Content-Type": "text/turtle"
        },
        maxAge: 10_000
    });
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(8080, () => {
    console.log('listening on port 8080');
});
