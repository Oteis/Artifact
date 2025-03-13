import ValueObject from "./valueObject";

export default abstract class StringValueObject extends ValueObject<string> {
  constructor(value: string){
    const trimed = value.trim();

    StringValueObject.ensureStringIsNotEmpty(trimed);

    super(trimed);
  }

  private static ensureStringIsNotEmpty(value: string) {
    if(!value){
      throw new Error(`<${this.name} doesen't allow empty strings>`);
    }
  }
  }
  