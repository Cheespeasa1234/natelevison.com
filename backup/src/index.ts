// import dependencies
import express from 'npm:express';
import { Request, Response } from 'npm:express';
import bodyParser from 'npm:body-parser';
import cookieParser from 'npm:cookie-parser';
import cors from 'npm:cors';
import { logger } from './util/logger.ts';
import { publicFolder, folderRoot } from './util/consts.ts';

// Routers
// import { router as resumeRouter } from "./routes/resume.ts";
import { router as blogRouter } from "./routes/blog.ts";

// setup app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(logger);

// Routes
// app.use("/resume", resumeRouter);
app.use("/blog", blogRouter);

// cascade for other posts
app.get("/*", [express.static(publicFolder, { fallthrough: true }), (req: Request, res: Response) => {
    res.sendFile(folderRoot + `/${publicFolder}/404.html`) 
}]);

// start server
app.listen(3690, "0.0.0.0", () => {
    console.log("Listening on port 3690");
});