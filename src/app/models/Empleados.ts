export class Empleado {
  No: number = 0;
  RFC: string = '';
  Nombre: string = '';
  A_Paterno: string = '';
  A_Materno: string = '';
  Sexo: string = '';
  Salario: number = 0;
  [key: string]: string | number;


  constructor(
    No: number,
    RFC: string,
    Nombre: string,
    A_Paterno: string,
    A_Materno: string,
    Sexo: string,
    Salario: number
  ) {
    this.No = No;
    this.RFC = RFC;
    this.Nombre = Nombre;
    this.A_Paterno = A_Paterno;
    this.A_Materno = A_Materno;
    this.Sexo = Sexo;
    this.Salario = Salario;
  }
}
