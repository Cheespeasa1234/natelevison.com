// import dependencies
import express from 'npm:express';
import { Request, Response } from 'npm:express';
import bodyParser from 'npm:body-parser';
import cookieParser from 'npm:cookie-parser';
import cors from 'npm:cors';
import { logger } from './util/logger.ts';
import { publicFolder, folderRoot } from './util/consts.ts';

// Import the blog router
import { router as blogRouter } from "./routes/blog.ts";

// Setup the app object and add middlware
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(logger);

// Set the blog router
app.use("/blog", blogRouter);

// Use a static middleware for any other post, and set 404 page
app.get("/*", [express.static(publicFolder, { fallthrough: true }), (req: Request, res: Response) => {
    res.sendFile(folderRoot + `/${publicFolder}/404.html`) 
}]);

// start server
app.listen(3690, "0.0.0.0", () => {
    console.log("Listening on port 3690");
});