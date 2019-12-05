export default interface Alunos {
  matricula: number;
  nome: string;
  cpf?: number;
  rg?: number;
  certicao_nascimento?: number;
  nascimento: Date;
  observacao?: Text;
}
