import Artifact from "../domain/artifact/artifact";
import Stats from "../domain/stat/stats";
import StatsOrder from "../domain/stat/statsOrder";
import StatsValue from "../domain/stat/statsValue";

export default class calculateFinalArtifact {

    private static readonly Def: number[] = [16.0, 19.0, 21.0, 23.0];

    private static readonly DefPorciento: number[] = [5.1, 5.8, 6.6, 7.3];

    private static readonly HP: number[] = [209.0, 239.0, 269.0, 299.0];

    private static readonly HPPorciento: number[] = [4.1, 4.7, 5.3, 5.8];

    private static readonly Atq: number[] = [14.0, 16.0, 18.0, 19.0];

    private static readonly AtqPorciento: number[] = [4.1, 4.7, 5.3, 5.8];

    private static readonly Recarga: number[] = [4.5, 5.2, 5.8, 6.5];

    private static readonly ME: number[] = [16.0, 19.0, 21.0, 23.0];

    private static readonly Prob: number[] = [2.7, 3.1, 3.5, 3.9];

    private static readonly Dmg: number[] = [5.4, 6.2, 7.0, 7.8];
 
    private readonly statsValue: StatsValue[][];
     
    private readonly substatsOrder: StatsOrder[];
     
    private readonly maxRango: boolean;

    private readonly SegmaxRango: boolean;

    private readonly ultimaSubida: number;

    deleteStats(artefacto: Artifact, ordenSubstast: StatsOrder[], valorStats: StatsValue[][]): Stats {
        new Stats(ordenSubstast, valorStats);
        let nuevaMatriz: StatsValue[][] = new Array(7).fill(undefined).map(() => new Array(4).fill(0)),
        ordenSubstastProv: StatsOrder[] = new Array(7).fill(""),
        j: number = 0;

        for (let i = 0; i <ordenSubstast.length; i++) {
            if (
                ordenSubstast[i].toString() !== artefacto.Substat1.type &&
                ordenSubstast[i].toString() !== artefacto.Substat2.type &&
                ordenSubstast[i].toString() !== artefacto.mainStat.toString()
            ) {
                nuevaMatriz[j] = valorStats[i];
                ordenSubstastProv[j] = ordenSubstast[i];
                j++;
            }
        }

        const stats = new Stats(ordenSubstastProv, nuevaMatriz);
        return stats;
    }
}