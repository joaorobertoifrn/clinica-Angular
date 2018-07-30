import { Pessoa } from "./pessoa.model";
import { Convenio } from './convenio.model';

export interface Paciente extends Pessoa {

  convenio: Convenio;
  usaAPP: boolean;
  tokenFCM: string;

}
