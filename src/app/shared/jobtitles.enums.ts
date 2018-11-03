export enum Jobtitles {
  Bewerber,
  Praktikant,
  Auszubildender,
  Mitarbeiter,
  'SCRUM-Master',
  Teamleiter,
  Projektleiter,
  Manager,
  CEO
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
