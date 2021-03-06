"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
class GamesRouters {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.default.index);
        this.router.get('/:id', userController_1.default.obteneruno);
        this.router.post('/', userController_1.default.create);
        this.router.delete('/:id', userController_1.default.delete);
        this.router.put('/:id', userController_1.default.update);
    }
}
const gamesRoutes = new GamesRouters();
exports.default = gamesRoutes.router;
