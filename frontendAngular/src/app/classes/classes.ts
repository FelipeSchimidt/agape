import Teachers from '../teachers/teachers';

export default interface Classes {
  id?: number;
  serie: string;
  turma: string;
  turno: string;
  professor_id?: number;
  professor: Teachers;
}
