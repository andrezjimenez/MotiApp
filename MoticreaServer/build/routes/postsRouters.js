"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postsController_1 = __importDefault(require("../controller/postsController"));
class PostsRouters {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',userController.index);
        // this.router.get('/:id',userController.obteneruno);
        this.router.post('/', postsController_1.default.create);
        // this.router.delete('/:id',userController.delete);
        // this.router.put('/:id',userController.update);
    }
}
const postsRouters = new PostsRouters();
exports.default = postsRouters.router;
