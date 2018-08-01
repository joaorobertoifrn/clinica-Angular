import { Pessoa } from './pessoa.model';

export interface Credenciais extends Pessoa {
  email: string;
  senha: string;
  accessToken: string;
}
