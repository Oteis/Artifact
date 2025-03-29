"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateFinalArtifact_1 = __importDefault(require("../core/application/calculateFinalArtifact"));
const artifact_1 = __importDefault(require("../core/domain/artifact/artifact"));
const mainStat_1 = __importDefault(require("../core/domain/stat/mainStat"));
const subStat_1 = __importDefault(require("../core/domain/stat/subStat"));
const instancia = new calculateFinalArtifact_1.default(), artefactor = calculateFinalArtifact_1.default.StatNivel4(new artifact_1.default({ level: 0, mainStat: new mainStat_1.default("HP"), substat1: new subStat_1.default("Atq", 14.0), substat2: new subStat_1.default("Def", 16.0), substat3: new subStat_1.default("ME", 16.0) }));
console.log('el mainStat del artefacto es ' + artefactor.Substat1.value);
