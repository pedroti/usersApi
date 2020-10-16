"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var AppError_1 = __importDefault(require("@shared/errors/AppError"));
function ensureAuthenticated(request, response, next) {
    var authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.default('Token JWT não está presente.', 401);
    }
    var _a = authHeader.split(' '), token = _a[1];
    var decoded = jsonwebtoken_1.verify(token, '9cea1ae8a42590e8fdb328669f534dfb');
    var sub = decoded.sub;
    request.user = { id: sub };
    return next();
}
exports.default = ensureAuthenticated;
