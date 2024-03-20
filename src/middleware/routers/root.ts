import { Router as router } from "express";
import {Status} from "../../util/consts";

export const homeRouter: router = router();

homeRouter.get(`/`, async (req, res) => {
    res.status(Status.ok).send("Coming Soon?");
});


homeRouter.get(`/profile`, async (req, res) => {
    res.status(Status.ok).sendFile("profile.ttl", {
        root: __dirname + "/static/",
        headers: {
            "Content-Type": "text/turtle"
        },
        maxAge: 10_000
    });
});

homeRouter.get(`/images`, async (req, res) => {
    res.status(Status.ok).sendFile("images.ttl", {
        root: __dirname + "/static/",
        headers: {
            "Content-Type": "text/turtle"
        },
        maxAge: 10_000
    });
});

homeRouter.get(`/vocabulary`, async (req, res) => {
    res.status(Status.ok).sendFile("vocabulary.ttl", {
        root: __dirname + "/static/",
        headers: {
            "Content-Type": "text/turtle"
        },
        maxAge: 10_000
    });
});
