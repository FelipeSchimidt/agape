export default interface Alunos {
  nome: string;
  cpf?: number;
  rg?: number;
  certicao_nascimento?: number;
  nascimento: Date;
  observacao?: Text;
}
