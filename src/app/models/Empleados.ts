import { RFC } from "./RFC";

interface EmpleadoAdditionalProps {
  myRfc: RFC;
  calcRFC(): void;
}

export class Empleado implements EmpleadoAdditionalProps{
  No: number = 0;
  Nombre: string = '';
  A_Paterno: string = '';
  A_Materno: string = '';
  Sexo: string = '';
  Salario: number = 0;
  Fecha_nac: string = '';
  myRfc: RFC = new RFC('','','','');
  showRFC: string = '';

  [key: string]: string | number | RFC | (() => void);


  constructor(
    No: number,
    Nombre: string,
    A_Paterno: string,
    A_Materno: string,
    Sexo: string,
    Salario: number,
    Fecha_nac: string,
  ) {
    this.No = No;
    this.Nombre = Nombre;
    this.A_Paterno = A_Paterno;
    this.A_Materno = A_Materno;
    this.Sexo = Sexo;
    this.Salario = Salario;
    this.Fecha_nac = Fecha_nac;
    this.myRfc = new RFC(Nombre,A_Paterno,A_Materno,Fecha_nac);
    this.showRFC = (Fecha_nac === '')? "Falta la fecha nacimiento": this.myRfc.getRfc();
  }

  calcRFC(){
    this.myRfc = new RFC(this.Nombre,this.A_Paterno,this.A_Materno,this.Fecha_nac);
    this.showRFC = this.myRfc.getRfc();
  }
}
