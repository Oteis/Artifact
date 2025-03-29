"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const valueObject_1 = __importDefault(require("./valueObject"));
class StringValueObject extends valueObject_1.default {
    constructor(value) {
        const trimed = value.trim();
        StringValueObject.ensureStringIsNotEmpty(trimed);
        super(trimed);
    }
    static ensureStringIsNotEmpty(value) {
        if (!value) {
            throw new Error(`<${this.name} doesen't allow empty strings>`);
        }
    }
}
exports.default = StringValueObject;
