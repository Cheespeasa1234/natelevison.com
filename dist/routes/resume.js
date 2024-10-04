"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../auth");
const consts_1 = require("../util/consts");
const router = express_1.default.Router();
exports.router = router;
router.get("/auth.html", (req, res) => {
    res.sendFile(consts_1.folderRoot + `/${consts_1.publicFolder}/resume/auth.html`);
});
// redirect /resume to /resume/index.html
router.get("/", (req, res) => {
    res.redirect("/resume/index.html");
});
router.get("/*", (req, res) => {
    const passkey = req.cookies['resume-key'];
    const correctKey = (0, auth_1.getTodaysKey)("nateisawesome");
    console.log(`\tUser entered ${passkey}, correct key is ${correctKey}`);
    if (passkey == correctKey) {
        // SEND IT HERE
        const filePath = `${consts_1.folderRoot}/${consts_1.publicFolder}/resume/${req.params[0]}`;
        res.sendFile(filePath);
        console.log("\tSuccessfully sent resume.");
    }
    else {
        res.status(403).send("You are not authorized to view this content. Authenticate yourself <a href='/resume/auth.html'>here</a>.");
        console.log("\tFailed to send resume.");
    }
});
