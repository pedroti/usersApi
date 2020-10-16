"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var ensureAuthenticated_1 = __importDefault(require("@modules/users/infra/http/middlewares/ensureAuthenticated"));
var TransactionsController_1 = __importDefault(require("../controllers/TransactionsController"));
var appointmentsRouter = express_1.Router();
var transactionsController = new TransactionsController_1.default();
appointmentsRouter.use(ensureAuthenticated_1.default);
appointmentsRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        date: celebrate_1.Joi.date().required(),
        value: celebrate_1.Joi.number().required(),
    },
    _a)), transactionsController.create);
exports.default = appointmentsRouter;
