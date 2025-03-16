export class Student {
  private _name: string;
  private _age: number;
  private _address: string;

  constructor(name: string, age: number, address: string) {
    this._name = name;
    this._age = age;
    this._address = address;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }

  public get address(): string {
    return this._address;
  }

  public set address(value: string) {
    this._address = value;
  }
}
