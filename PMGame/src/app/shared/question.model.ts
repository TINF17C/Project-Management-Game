export interface IQuestion {
  id: number;
  Frage: string;
  Ersetzungssatz: string;
  Antwort1: string;
  Antwort2: string;
  Antwort3: string;
  Antwort4: string;
  richtig: number;
  schwierigkeitsgrad: number;
}
