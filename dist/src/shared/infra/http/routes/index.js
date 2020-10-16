"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_routes_1 = __importDefault(require("@modules/users/infra/http/routes/users.routes"));
var sessions_routes_1 = __importDefault(require("@modules/users/infra/http/routes/sessions.routes"));
var password_routes_1 = __importDefault(require("@modules/users/infra/http/routes/password.routes"));
var profile_routes_1 = __importDefault(require("@modules/users/infra/http/routes/profile.routes"));
var transactions_routes_1 = __importDefault(require("@modules/transactions/infra/http/routes/transactions.routes"));
var routes = express_1.Router();
routes.use('/users', users_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
routes.use('/password', password_routes_1.default);
routes.use('/profile', profile_routes_1.default);
routes.use('/transactions', transactions_routes_1.default);
exports.default = routes;
