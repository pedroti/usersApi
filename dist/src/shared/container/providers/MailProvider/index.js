"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var EtherealMailProvider_1 = __importDefault(require("./implementations/EtherealMailProvider"));
tsyringe_1.container.registerInstance('MailProvider', tsyringe_1.container.resolve(EtherealMailProvider_1.default));
