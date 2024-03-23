"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./routes");
class ServerInit {
    constructor() {
        dotenv_1.default;
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        this.host = process.env.HOST || 'localhost';
        this.middleware();
        this.routes();
    }
    start() {
        this.app.listen(this.app.get("port"), this.app.get('host'), () => {
            console.log(`server up!!! Host: ${this.app.get('host')} Port: ${this.app.get("port")}`);
        });
    }
    middleware() {
        this.app.set("port", this.port);
        this.app.set("host", this.host);
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
    }
    routes() {
        this.app.route("/").get((req, res) => {
            //console.log(req);
            //res.send("sucio");
            res.json({ "key": "value" });
            //res.status(200).json({"key":"value"});
        });
        this.app.use("/auth", routes_1.AuthRoutesInst); // use post / get 
        /*
        this.app.use("/users",            pathRoutes.UserRoutes);
        this.app.use("/buildings",        pathRoutes.BuildingRoutes);
        this.app.use("/lists",            pathRoutes.ListRoutes);
        this.app.use("/floors",           pathRoutes.FloorRoutes);
        */
    }
}
exports.default = ServerInit;
