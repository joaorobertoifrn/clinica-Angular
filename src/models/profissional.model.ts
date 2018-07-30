import { Pessoa } from './pessoa.model';
import { TipoProfissional } from './tipoprofissional.model';
import { Convenio } from './convenio.model';
import { LocalAtendimento } from './localatendimento.model';
import { Especialidade } from './especialidade.model';

export interface Profissional extends Pessoa {

  conselhoProfissional: string;
  estadoConselho: string;
  numeroConselho: string;
  descricaoAPP: string;
  ehAPP: boolean;
  tipoProfissional: TipoProfissional;
  convenios: Convenio[];
  locaisAtendimento: LocalAtendimento[];
  especialidades: Especialidade[];

}
