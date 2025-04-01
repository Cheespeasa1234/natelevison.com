import express, { Request, Response } from "npm:express";
import { getTodaysKey } from "../auth.ts";
import { publicFolder, folderRoot } from "../util/consts.ts";

const router = express.Router();

router.get("/auth.html", (req: Request, res: Response) => {
    res.sendFile(folderRoot + `/${publicFolder}/resume/auth.html`);
});

// redirect /resume to /resume/index.html
router.get("/", (req: Request, res: Response) => {
    res.redirect("/resume/index.html");
});

router.get("/*", (req: Request, res: Response) => {
    const passkey = req.cookies['resume-key'];
    const correctKey = getTodaysKey("nateisawesome");

    console.log(`\tUser entered ${passkey}, correct key is ${correctKey}`);

    if (passkey == correctKey) {
        // SEND IT HERE
        const filePath = `${folderRoot}/${publicFolder}/resume/${req.params[0]}`;
        res.sendFile(filePath);
        console.log("\tSuccessfully sent resume.");
    } else {
        res.status(403).send("You are not authorized to view this content. Authenticate yourself <a href='/resume/auth.html'>here</a>.");
        console.log("\tFailed to send resume.");
    }
});

export { router };