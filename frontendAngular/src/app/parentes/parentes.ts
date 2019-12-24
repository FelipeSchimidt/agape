export default interface Parentes {
  id?: number;
  nome: string;
  cpf: number;
  rg: number;
  nascimento: Date;
  tipo: enumParentes;
  responsavel_financeiro: boolean;
  telefone: number;
  endereco: string;
}

enum enumParentes {
  pai,
  mãe,
  avos,
  tios,
  primos
}
