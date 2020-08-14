"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: 'lucaswantz@hotmail.com',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJs',
            'React Native',
            { title: 'JavaScript', experience: 100 },
        ],
    });
    return response.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;
