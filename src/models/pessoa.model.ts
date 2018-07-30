import { Cidade } from "./cidade.model";

export interface Pessoa {

  id: number;
  nome: string;
  email: string;
  sexo: string;
  dataNascimento: string;
  cpf: string;
  rg: string;
  orgaoEmissor: string;
  nomeSocial: string;
  cns: string;
  cep: string;
  endereco: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: Cidade;
  nomePai: string;
  nomeMae: string;
  telefone: string;

}
