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
    return keyArray.slice(keyArray.length / 2, keyArray.length - 1);
  }

  export function length(): number {
    console.log(Object.keys(Jobtitles).length / 2 - 1);
    return Object.keys(Jobtitles).length / 2 - 1;
  }
}
