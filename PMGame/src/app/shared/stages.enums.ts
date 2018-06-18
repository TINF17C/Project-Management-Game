export enum Stages {
  Start,
  Eins,
  Zwei,
  Drei,
  vier,
  Fünf,
  Sechs,
  Sieben,
  Acht,
  End
}

export namespace Stages {
  export function keys(): Array<string> {
    const keyArray = Object.keys(Stages);
    return keyArray.slice(keyArray.length / 2 - 1, keyArray.length - 2);
  }

  export function length(): number {
    console.log(Object.keys(Stages).length / 2 - 1);
    return Object.keys(Stages).length / 2 - 2;
  }
}
