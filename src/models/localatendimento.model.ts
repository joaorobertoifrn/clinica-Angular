import { Cidade } from "./cidade.model";

export interface LocalAtendimento {

  id: number;
  nomeFantasia: string;
  razaoSocial: string;
  cnpj: string;
  cnes: string;
  email: string;
  numeroTelefone: string;
  numeroCelular: string;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: Cidade;
  longitude: string;
  latitude: string;

}
