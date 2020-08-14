"use strict";
// Para criar um usuário: name, email, password
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password;
    // Como o nome está opcional, se não for informado, não cria o elemento
    var user = {
        name: name,
        email: email,
        password: password,
    };
    return user;
}
exports.default = createUser;
