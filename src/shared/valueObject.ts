export type Primitives = string | String | boolean | Boolean | number;
 
export default abstract class ValueObject<T extends Primitives>{
    protected readonly value: T;
  
    constructor(value: T) {
      this.value = value;

      this.ensureIsValid(value);
    }
  
    protected ensureIsValid(value: T): void {
      if (value === null|| value === undefined) {
        throw new Error("Value must be defined");
      }
    }
  
    public toString(): string {
      return this.value.toString();
    }
  
    public equals(other: ValueObject<T>): boolean {
      return other.constructor.name ===this.constructor.name && this.value === other.value;
    }
}