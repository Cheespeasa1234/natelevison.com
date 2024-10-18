"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import dependencies
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = require("./util/logger");
const consts_1 = require("./util/consts");
// Routers
const resume_1 = require("./routes/resume");
const blog_1 = require("./routes/blog");
// setup app
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use(logger_1.logger);
// Routes
app.use("/resume", resume_1.router);
app.use("/blog", blog_1.router);
// cascade for other posts
app.get("/*", [express_1.default.static(consts_1.publicFolder, { fallthrough: true }), (req, res) => { res.sendFile(consts_1.folderRoot + `/${consts_1.publicFolder}/404.html`); }]);
// start server
app.listen(3690, "localhost", () => {
    console.log("Listening on port 3690");
});
