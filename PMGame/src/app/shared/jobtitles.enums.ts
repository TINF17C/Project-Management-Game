export enum Jobtitles {
  Eins,
  Zwei,
  Drei,
  vier,
  Fünf,
  Sechs,
  Sieben,
  Acht
}

export namespace Jobtitles {
  export function keys(): Array<string> {
    const keyArray = Object.keys(Jobtitles);
    return keyArray.slice(keyArray.length / 2, keyArray.length - 2);
  }

  export function length(): number {
    return Object.keys(Jobtitles).length / 2 - 2;
  }
}
