"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Artifact {
    level;
    mainStat;
    Substat1;
    Substat2;
    Substat3;
    Substat4;
    constructor(params) {
        this.level = params.level;
        this.mainStat = params.mainStat;
        this.Substat1 = params.substat1;
        this.Substat2 = params.substat2;
        this.Substat3 = params.substat3;
        this.Substat4 = params.substat4 ?? undefined;
    }
}
exports.default = Artifact;
//# sourceMappingURL=artifact.js.map