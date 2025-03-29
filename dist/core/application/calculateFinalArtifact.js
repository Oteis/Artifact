"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const artifact_1 = __importDefault(require("../domain/artifact/artifact"));
const stats_1 = __importDefault(require("../domain/stat/stats"));
const statsOrder_1 = __importDefault(require("../domain/stat/statsOrder"));
const statsValue_1 = __importDefault(require("../domain/stat/statsValue"));
const subStat_1 = __importDefault(require("../domain/stat/subStat"));
class calculateFinalArtifact {
    static Def = [16.0, 19.0, 21.0, 23.0];
    static DefPorciento = [5.1, 5.8, 6.6, 7.3];
    static HP = [209.0, 239.0, 269.0, 299.0];
    static HPPorciento = [4.1, 4.7, 5.3, 5.8];
    static Atq = [14.0, 16.0, 18.0, 19.0];
    static AtqPorciento = [4.1, 4.7, 5.3, 5.8];
    static Recarga = [4.5, 5.2, 5.8, 6.5];
    static ME = [16.0, 19.0, 21.0, 23.0];
    static Prob = [2.7, 3.1, 3.5, 3.9];
    static Dmg = [5.4, 6.2, 7.0, 7.8];
    static statsValue = [
        calculateFinalArtifact.Def,
        calculateFinalArtifact.DefPorciento,
        calculateFinalArtifact.HP,
        calculateFinalArtifact.HPPorciento,
        calculateFinalArtifact.Atq,
        calculateFinalArtifact.AtqPorciento,
        calculateFinalArtifact.Recarga,
        calculateFinalArtifact.ME,
        calculateFinalArtifact.Prob,
        calculateFinalArtifact.Dmg
    ];
    static substatsOrder = [
        new statsOrder_1.default("Def"),
        new statsOrder_1.default("DefPorciento"),
        new statsOrder_1.default("HP"),
        new statsOrder_1.default("HPPorciento"),
        new statsOrder_1.default("Atq"),
        new statsOrder_1.default("AtqPorciento"),
        new statsOrder_1.default("Recarga"),
        new statsOrder_1.default("ME"),
        new statsOrder_1.default("Prob"),
        new statsOrder_1.default("Dmg")
    ];
    static maxRango = false;
    static SegmaxRango = false;
    static ultimaSubida = 0;
    static deleteStats(artefacto, ordenSubstast, valorStats) {
        new stats_1.default(ordenSubstast, valorStats);
        let nuevaMatriz = new Array(7).fill(undefined).map(() => new Array(4).fill(0)), ordenSubstastProv = new Array(7).fill(""), j = 0;
        for (let i = 0; i < this.substatsOrder.length; i++) {
            if (this.substatsOrder[i].toString().toString() !== artefacto.Substat1.type &&
                this.substatsOrder[i].toString().toString() !== artefacto.Substat2.type &&
                this.substatsOrder[i].toString().toString() !== artefacto.mainStat.toString()) {
                nuevaMatriz[j] = valorStats[i];
                ordenSubstastProv[j] = this.substatsOrder[i];
                j++;
            }
        }
        const stats = new stats_1.default(ordenSubstastProv, nuevaMatriz);
        return stats;
    }
    static CuartoSubstat(artefacto) {
        const ordenSubstastProv = this.deleteStats(artefacto, this.substatsOrder, this.statsValue), numeroAleatorio = Math.floor(Math.random() * 4), probabilidad = Math.random();
        let probabilidadfija = 0.55, res = new subStat_1.default('', 0), i;
        if (artefacto.Substat4 != null) {
            console.log("El artefacto ya tiene 4 substats");
            throw new Error();
        }
        for (i = 0; i < ordenSubstastProv.substatsOrder.length; ++i) {
            if (ordenSubstastProv.substatsOrder[i].toString() == artefacto.Substat3.type
                && ordenSubstastProv.statsValue[i][3] == artefacto.Substat3.value) {
                probabilidadfija = 0.7;
            }
        }
        for (i = 0; i < ordenSubstastProv.substatsOrder.length; ++i) {
            if (ordenSubstastProv.substatsOrder[i].toString() == artefacto.Substat3.type) {
                if (probabilidad < probabilidadfija) {
                    if (i == ordenSubstastProv.substatsOrder.length - 1) {
                        res = new subStat_1.default(ordenSubstastProv.substatsOrder[0].toString(), ordenSubstastProv.statsValue[0][numeroAleatorio]);
                    }
                    else {
                        res = new subStat_1.default(ordenSubstastProv.substatsOrder[i + 1].toString(), ordenSubstastProv.statsValue[i + 1][numeroAleatorio]);
                    }
                }
                if (probabilidad > probabilidadfija) {
                    if (i == ordenSubstastProv.substatsOrder.length - 1) {
                        res = new subStat_1.default(ordenSubstastProv.substatsOrder[1].toString(), ordenSubstastProv.statsValue[1][numeroAleatorio]);
                    }
                    else if (i == ordenSubstastProv.substatsOrder.length - 2) {
                        res = new subStat_1.default(ordenSubstastProv.substatsOrder[0].toString(), ordenSubstastProv.statsValue[0][numeroAleatorio]);
                    }
                    else {
                        res = new subStat_1.default(ordenSubstastProv.substatsOrder[i + 2].toString(), ordenSubstastProv.statsValue[i + 2][numeroAleatorio]);
                    }
                }
            }
        }
        if (numeroAleatorio > 2) {
            this.maxRango = true;
        }
        else {
            this.maxRango = false;
            if (numeroAleatorio <= 2 && numeroAleatorio > 1) {
                this.SegmaxRango = true;
            }
            else {
                this.SegmaxRango = false;
            }
        }
        this.ultimaSubida = 4;
        return res;
    }
    static StatsFinales(artefacto, ordenSubstast, valorStats) {
        new stats_1.default(ordenSubstast, valorStats);
        let nuevaMatriz = new Array(4).fill(null).map(() => new Array(4).fill(new statsValue_1.default())), ordenSubstastProv = new Array(4);
        let j = 0;
        for (let i = 0; i < ordenSubstast.length; ++i) {
            if (this.substatsOrder[i].toString().toString() == artefacto.Substat1.type || this.substatsOrder[i].toString().toString() == artefacto.Substat2.type
                || this.substatsOrder[i].toString().toString() == artefacto.Substat3.type || this.substatsOrder[i].toString().toString() == artefacto.Substat4.type) {
                nuevaMatriz[j] = valorStats[i];
                ordenSubstastProv[j] = this.substatsOrder[i];
                ++j;
            }
        }
        const stats = new stats_1.default(ordenSubstastProv, nuevaMatriz);
        return stats;
    }
    static StatNivel4(artefacto) {
        const probabilidad = Math.random();
        let probabilidadfija1 = 0.2, probabilidadfija2 = 0.4, probabilidadfija3 = 0.2, probabilidadfija4 = 0.2, valorAdded = 0.0, numeroAleatorio = Math.floor(Math.random() * 4);
        if (artefacto.Substat4 == null && artefacto.level >= 4) {
            console.log("El artefacto no tiene 4 substats");
            throw new Error();
        }
        else if (artefacto.Substat4 == null && artefacto.level < 4) {
            artefacto = new artifact_1.default({
                level: 4,
                mainStat: artefacto.mainStat,
                substat1: artefacto.Substat1,
                substat2: artefacto.Substat2,
                substat3: artefacto.Substat3,
                substat4: this.CuartoSubstat(artefacto)
            });
            artefacto.level = 4;
            return artefacto;
        }
        else {
            if (this.maxRango && !this.SegmaxRango) {
                switch (this.ultimaSubida) {
                    case 0:
                        probabilidadfija1 = 0.2;
                        probabilidadfija2 = 0.4;
                        probabilidadfija3 = 0.2;
                        probabilidadfija4 = 0.2;
                        break;
                    case 1:
                        probabilidadfija1 = 0.5;
                        probabilidadfija2 = 0.4;
                        probabilidadfija3 = 0.2;
                        probabilidadfija4 = 0.2;
                        break;
                    case 2:
                        probabilidadfija1 = 0.2;
                        probabilidadfija2 = 0.7;
                        probabilidadfija3 = 0.2;
                        probabilidadfija4 = 0.2;
                        break;
                    case 3:
                        probabilidadfija1 = 0.2;
                        probabilidadfija2 = 0.4;
                        probabilidadfija3 = 0.5;
                        probabilidadfija4 = 0.2;
                        break;
                    case 4:
                        probabilidadfija1 = 0.2;
                        probabilidadfija2 = 0.4;
                        probabilidadfija3 = 0.2;
                        probabilidadfija4 = 0.5;
                }
            }
            if (!this.maxRango && this.SegmaxRango) {
                switch (this.ultimaSubida) {
                    case 0:
                        probabilidadfija1 = 0.2;
                        probabilidadfija2 = 0.4;
                        probabilidadfija3 = 0.2;
                        probabilidadfija4 = 0.2;
                        break;
                    case 1:
                        probabilidadfija1 = 0.35;
                        probabilidadfija2 = 0.4;
                        probabilidadfija3 = 0.2;
                        probabilidadfija4 = 0.2;
                        break;
                    case 2:
                        probabilidadfija1 = 0.2;
                        probabilidadfija2 = 0.55;
                        probabilidadfija3 = 0.2;
                        probabilidadfija4 = 0.2;
                        break;
                    case 3:
                        probabilidadfija1 = 0.2;
                        probabilidadfija2 = 0.4;
                        probabilidadfija3 = 0.35;
                        probabilidadfija4 = 0.2;
                        break;
                    case 4:
                        probabilidadfija1 = 0.2;
                        probabilidadfija2 = 0.4;
                        probabilidadfija3 = 0.2;
                        probabilidadfija4 = 0.35;
                }
            }
            let i;
            if (probabilidad < probabilidadfija1) {
                for (i = 0; i < this.substatsOrder.length; ++i) {
                    if (this.substatsOrder[i].toString() == artefacto.Substat1.type) {
                        for (i = 0; i < this.substatsOrder.length; ++i) {
                            if (this.substatsOrder[i].toString() === artefacto.Substat1.type) {
                                valorAdded = this.statsValue[i][numeroAleatorio]; // Access the correct value from valorStats[i] using numeroAleatorio
                            }
                        }
                    }
                }
                if (numeroAleatorio == 3) {
                    this.maxRango = true;
                    this.SegmaxRango = false;
                }
                if (numeroAleatorio == 2) {
                    this.maxRango = false;
                    this.SegmaxRango = true;
                }
                else {
                    this.maxRango = false;
                    this.SegmaxRango = false;
                }
                artefacto.Substat1.value += valorAdded;
                this.ultimaSubida = 1;
            }
            if (probabilidad > probabilidadfija1 && probabilidad < probabilidadfija1 + probabilidadfija2) {
                for (i = 0; i < this.substatsOrder.length; ++i) {
                    if (this.substatsOrder[i].toString() == artefacto.Substat2.type) {
                        valorAdded = this.statsValue[i][numeroAleatorio];
                    }
                }
                if (numeroAleatorio == 3) {
                    this.maxRango = true;
                    this.SegmaxRango = false;
                }
                if (numeroAleatorio == 2) {
                    this.maxRango = false;
                    this.SegmaxRango = true;
                }
                else {
                    this.maxRango = false;
                    this.SegmaxRango = false;
                }
                artefacto.Substat2.value += valorAdded;
                this.ultimaSubida = 2;
            }
            if (probabilidad > probabilidadfija1 + probabilidadfija2
                && probabilidad < probabilidadfija1 + probabilidadfija2 + probabilidadfija3) {
                for (i = 0; i < this.substatsOrder.length; ++i) {
                    if (this.substatsOrder[i].toString() == artefacto.Substat3.type) {
                        valorAdded = this.statsValue[i][numeroAleatorio];
                    }
                }
                if (numeroAleatorio == 3) {
                    this.maxRango = true;
                    this.SegmaxRango = false;
                }
                if (numeroAleatorio == 2) {
                    this.maxRango = false;
                    this.SegmaxRango = true;
                }
                else {
                    this.maxRango = false;
                    this.SegmaxRango = false;
                }
                artefacto.Substat3.value += valorAdded;
                this.ultimaSubida = 3;
            }
            if (probabilidad > probabilidadfija1 + probabilidadfija2 + probabilidadfija3
                && probabilidad < probabilidadfija1 + probabilidadfija2 + probabilidadfija3 + probabilidadfija4) {
                for (i = 0; i < this.substatsOrder.length; ++i) {
                    if (this.substatsOrder[i].toString() == artefacto.Substat4.type) {
                        valorAdded = this.statsValue[i][numeroAleatorio];
                    }
                }
                if (numeroAleatorio == 3) {
                    this.maxRango = true;
                    this.SegmaxRango = false;
                }
                if (numeroAleatorio == 2) {
                    this.maxRango = false;
                    this.SegmaxRango = true;
                }
                else {
                    this.maxRango = false;
                    this.SegmaxRango = false;
                }
                artefacto.Substat4.value += valorAdded;
                this.ultimaSubida = 4;
            }
            artefacto.level = 4;
            console.log(artefacto);
            return artefacto;
        }
    }
}
exports.default = calculateFinalArtifact;
