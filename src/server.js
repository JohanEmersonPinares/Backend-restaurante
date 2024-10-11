"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const foodRoute_1 = __importDefault(require("./routes/foodRoute"));
const app = (0, express_1.default)();
const port = 4100;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// DB connection
(0, db_1.default)();
// API endpoints
app.use("/api/food", foodRoute_1.default);
app.use("/images", express_1.default.static('uploads'));
app.get("/", (req, res) => {
    res.send("API WORKING");
});
app.listen(port, () => {
    console.log(`Server inicializado en http://localhost:${port}`);
});
