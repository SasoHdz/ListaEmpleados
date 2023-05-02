import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleados';
import { DatosBusqueda } from 'src/app/models/DatosBusqueda';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss'],
})
export class EmpleadoListComponent {
  indexSelect = -1;
  fechaSelect = '';
  fechaRegex = /^[\d]{4}\-[\d]{2}\-[\d]{2}$/; //dia-mes-año

  listEmpleados: Empleado[] = [];

  baselistEmpleados: Empleado[] = [
    new Empleado(
      19141154,
      'Isaac',
      'Hernández',
      'Reséndiz',
      'Masculino',
      1000000,
      ''
    ),
    new Empleado(
      19141141,
      'Vanessa',
      'Fernandez',
      'Fernandez',
      'Femenino',
      10000000,
      '2001-04-01'
    ),
    new Empleado(
      19141141,
      'Itzel Guadalupe',
      'Andrade',
      'Guitierrez',
      'Femenino',
      120000,
      ''
    ),
    new Empleado(
      19141120,
      'Kevin Daniel',
      'Avellaneda',
      'Trejo',
      'Masculino',
      8000,
      ''
    ),
    new Empleado(
      19141127,
      'Sergio Leonardo',
      'Campos',
      'Rangel',
      'Masculino',
      15100,
      ''
    ),
    new Empleado(
      19141129,
      'Yazmin Alejandra',
      'Castillo',
      'Martinez',
      'Femenino',
      95500,
      '2001-04-01'
    ),
    new Empleado(
      19140340,
      'Monica Valeria',
      'Nieves',
      'Trejo',
      'Femenino',
      3001,
      ''
    ),
    new Empleado(
      19141129,
      'Yazmin Alejandra',
      'Castillo',
      'Martinez',
      'Femenino',
      12323,
      '20001-02-10'
    ),
    new Empleado(
      19141144,
      'Luz Zayetzy',
      'Garay',
      'Quintero',
      'Femenino',
      10000,
      '2001-12-31'
    ),
    new Empleado(
      19141143,
      'Paola Valeria',
      'Fuertes',
      'Gómez',
      'Femenino',
      60000,
      '2001-03-09'
    ),
    new Empleado(
      19141187,
      'Christian Josue',
      'Ramirez',
      'Martinez',
      'Masculino',
      52000,
      '2001-07-21'
    ),
    new Empleado(
      19141169,
      'Jessica Mariana',
      'Martínez',
      'Coronilla',
      'Femenino',
      25000,
      '2000-10-25'
    ),
    new Empleado(
      19140325,
      'Froylan',
      'Galvan',
      'Tellez',
      'Masculino',
      80000,
      '2000-06-23'
    ),
    new Empleado(
      19141136,
      'César Adán',
      'Cuevas',
      'Téllez',
      'Masculino',
      30000,
      '2001-01-15'
    ),
    new Empleado(
      19141161,
      'Daniel',
      'Jiménez',
      'Galván',
      'Masculino',
      10000,
      '2000-11-02'
    ),
    new Empleado(
      19141170,
      'Emmanuel Abif',
      'Mejia',
      'Ochoa',
      'Masculino',
      1210221,
      '1995-06-02'
    ),
    new Empleado(
      19140340,
      'Monica Valeria',
      'Nieves',
      'Trejo',
      'Femenino',
      120003,
      ''
    ),
    new Empleado(
      19141129,
      'Yazmin Alejandra',
      'Castillo',
      'Martinez',
      'Femenino',
      1212222,
      '20001-10-02'
    ),
    new Empleado(
      19141144,
      'Luz Zayetzy',
      'Garay',
      'Quintero',
      'Femenino',
      1111222,
      '2001-12-31'
    ),
    new Empleado(
      19141143,
      'Paola Valeria',
      'Fuertes',
      'Gómez',
      'Femenino',
      60000,
      '2001-09-03'
    ),
    new Empleado(
      19141187,
      'Christian Josue',
      'Ramirez',
      'Martinez',
      'Masculino',
      1230000,
      '2001-06-01'
    ),
    new Empleado(
      19141169,
      'Jessica Mariana',
      'Martínez',
      'Coronilla',
      'Femenino',
      12400034,
      '2000-10-25'
    ),
    new Empleado(
      19140325,
      'Froylan',
      'Galvan',
      'Tellez',
      'Masculino',
      43000,
      '2000-06-23'
    ),
    new Empleado(
      19141136,
      'César Adán',
      'Cuevas',
      'Téllez',
      'Masculino',
      35000,
      '2001-01-15'
    ),
    new Empleado(
      19141161,
      'Daniel',
      'Jiménez',
      'Galván',
      'Masculino',
      21000,
      '2000-02-11'
    ),
    new Empleado(
      18141044,
      'Paola Guadalupe',
      'Sánchez',
      'Medina',
      'Femenino',
      55000,
      '1998-11-12'
    ),
    new Empleado(
      19140319,
      'Maria Guadalupe',
      'Silva',
      'Resendiz',
      'Femenino',
      30000,
      '1999-12-15'
    ),
    new Empleado(
      19140297,
      'Veronica',
      'Resendiz',
      'Castro',
      'Femenino',
      50000,
      '2000-02-25'
    ),
  ];

  filter: string = 'Empleados';

  constructor() {
    this.listEmpleados = [...this.baselistEmpleados];
  }

  ngOnInit(): void {}

  /*  getAllEmp(): number{
    return this.listEmpleados.length
  }

  getFeEmp(): number{
    return this.listEmpleados.filter(e=> e.Sexo === 'Femenino').length;
  }

  getMaEmp(): number{
    return this.listEmpleados.filter(e=> e.Sexo === 'Masculino').length;
  } */

  getAllEmployees(sex: string): number {
    if (sex == 'M') {
      return this.listEmpleados.filter((emp) => emp.Sexo === 'Masculino')
        .length;
    }

    if (sex == 'F') {
      return this.listEmpleados.filter((emp) => emp.Sexo === 'Femenino').length;
    }

    return this.listEmpleados.length;
  }

  onChangeFilter(filtro: string) {
    this.listEmpleados = [...this.baselistEmpleados];
    this.filter = filtro;
    console.log('filtro', this.filter);
  }

  searchAdvanced(obj: DatosBusqueda) {
    this.listEmpleados = this.baselistEmpleados.filter((emp) => {
      obj.valor = obj.valor.toLowerCase();
      const empleadoV = emp[obj.tipo].toString().toLowerCase();
      return empleadoV.includes(obj.valor);
    });

    this.filter = 'Empleados';
  }

  currentIndex(i: number) {
    this.indexSelect = i;
  }

  addNacimiento(fecha: string) {
    this.baselistEmpleados[this.indexSelect].Fecha_nac = fecha;
    this.baselistEmpleados[this.indexSelect].calcRFC();
    this.indexSelect = -1;
    this.fechaSelect = '';
    this.listEmpleados = [...this.baselistEmpleados];
  }
}
