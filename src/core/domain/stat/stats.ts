import StatsOrder from "./statsOrder";
import StatsValue from "./statsValue";

export default class Stats {
    private readonly statsValue: StatsValue[][];
    private readonly substatsOrder: StatsOrder[];

    constructor(order: StatsOrder[], valorStats: StatsValue[][]) {
        this.statsValue = valorStats;
        this.substatsOrder = order;
    }
}
