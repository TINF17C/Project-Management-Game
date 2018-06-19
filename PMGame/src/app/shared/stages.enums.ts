export enum Stages {
  Start,
  Initiierung,
  Zielsetzung,
  Einrichtung,
  Planung,
  Beschaffung,
  Realisierung,
  Einführung,
  Abnahme,
  Ende
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
