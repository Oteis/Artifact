"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValueObject {
    value;
    constructor(value) {
        this.value = value;
        this.ensureIsValid(value);
    }
    ensureIsValid(value) {
        if (value === null || value === undefined) {
            throw new Error("Value must be defined");
        }
    }
    toString() {
        return this.value.toString();
    }
    equals(other) {
        return other.constructor.name === this.constructor.name && this.value === other.value;
    }
}
exports.default = ValueObject;
