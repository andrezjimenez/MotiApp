"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM user');
            res.json({ users });
        });
    }
    obteneruno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oneUser = yield database_1.default.query('SELECT * FROM user WHERE userid = ? ', [id]);
            if (oneUser.length > 0) {
                return res.json(oneUser[0]);
            }
            res.status(404).json({ text: "User dont exists" });
            console.log(oneUser);
            res.json({ text: 'User okay' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            const existsuser = yield database_1.default.query('SELECT * FROM user WHERE email = ?', [email]);
            if (existsuser) {
                console.log('usuario existente');
                return 0;
            }
            else {
                yield database_1.default.query('INSERT INTO user set ?', [req.body]);
                res.json({ message: 'User create successfull' });
                return 1;
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM user WHERE userid = ? ', [id]);
            res.json({ message: 'User delete successfull' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE user SET ? WHERE userid = ?', [req.body, id]);
            res.json({ text: 'update a user' });
        });
    }
}
const userController = new UserController();
exports.default = userController;
