"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const valueObject_1 = __importDefault(require("./valueObject"));
class NumberValueObject extends valueObject_1.default {
    isBiggerThan(other) {
        return this.value > other.value;
    }
    isPositive() {
        return this.value > 0;
    }
}
exports.default = NumberValueObject;
//# sourceMappingURL=numberValueObject.js.map