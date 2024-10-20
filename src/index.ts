// import dependencies
import express from 'express';
import { Request, Response, NextFunction, Router } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { logger } from './util/logger';
import { publicFolder, folderRoot } from './util/consts';

// Routers
import { router as resumeRouter } from "./routes/resume";
import { router as blogRouter } from "./routes/blog";

// setup app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(logger);

// Routes
app.use("/resume", resumeRouter);
app.use("/blog", blogRouter);

// cascade for other posts
app.get("/*", [express.static(publicFolder, { fallthrough: true }), (req: Request, res: Response) => { res.sendFile(folderRoot + `/${publicFolder}/404.html`) }]);

// start server
app.listen(3690, "localhost", () => {
    console.log("Listening on port 3690");
});