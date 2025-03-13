import MainStat from "../stat/mainStat"
import SubStat from "../stat/subStat"

export type ArtifactParams = {
    level: number,
    mainStat: MainStat,
    Substat1: SubStat,
    Substat2: SubStat,
    Substat3: SubStat,
    Substat4: SubStat
}

export default class Artifact {
    
    readonly level

    readonly mainStat: MainStat

    readonly Substat1: SubStat

    readonly Substat2: SubStat

    readonly Substat3: SubStat

    readonly Substat4: SubStat

    constructor(params : ArtifactParams){
        this.level = params.level;
        this.mainStat = params.mainStat;
        this.Substat1 = params.Substat1;
        this.Substat2 = params.Substat2;
        this.Substat3 = params.Substat3;
        this.Substat4 = params.Substat4;

    }
}