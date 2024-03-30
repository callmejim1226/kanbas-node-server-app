// const express = require("express");
import express from "express";
import Hello from "./Hello.js";
import Courses from "./Courses/routes.js";
import Modules from "./Modules/routes.js";
import cors from "cors";
import session from "express-session";
import SessionExercises from "./SessionExercises.js";
import Users from "./Users/routes.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

CourseRoutes(app);
ModuleRoutes(app);

Hello(app);
Lab5(app);
Courses(app);
Modules(app);
SessionExercises(app);
Users(app);

app.listen(process.env.PORT || 4000);
