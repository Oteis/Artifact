import ValueObject from "./valueObject";

export default abstract class NumberValueObject extends ValueObject<number>{
    isBiggerThan(other: NumberValueObject): Boolean{
        return this.value > other.value;
    }

    isPositive(): boolean{
        return this.value > 0;
    }
}