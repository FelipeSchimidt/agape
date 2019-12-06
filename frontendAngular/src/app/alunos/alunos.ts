export default interface Alunos {
  [x: string]: any;
  matricula: number;
  nome: string;
  cpf?: number;
  rg?: number;
  certicao_nascimento?: number;
  nascimento: Date;
  observacao?: string;
}
