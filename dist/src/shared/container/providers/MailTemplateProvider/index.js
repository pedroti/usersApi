"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var HandleBarsMailTemplateProvider_1 = __importDefault(require("./implementations/HandleBarsMailTemplateProvider"));
var providers = {
    handlebars: HandleBarsMailTemplateProvider_1.default,
};
tsyringe_1.container.registerSingleton('MailTemplateProvider', providers.handlebars);
