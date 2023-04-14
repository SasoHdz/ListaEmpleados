import { Component, Output, EventEmitter } from '@angular/core';
import { Empleado } from 'src/app/models/Empleados';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss'],
})
export class EmpleadoListComponent {
  listEmpleados: Empleado[] = [
    new Empleado(
      19141154,
      'test',
      'Isaac',
      'Hernández',
      'Reséndiz',
      'Masculino',
      1000000
    ),
    new Empleado(
      19141141,
      'test',
      'Vanessa',
      'Fernandez',
      '',
      'Femenino',
      10000000
    ),
    new Empleado(
      19141141,
      'test',
      'Itzel Guadalupe',
      'Andrade',
      'Guitierrez',
      'Femenino',
      120000
    ),
    new Empleado(
      19141120,
      'test',
      'Kevin Daniel',
      'Avellaneda',
      'Trejo',
      'Masculino',
      8000
    ),
    new Empleado(
      19141127,
      'test',
      'Sergio Leonardo',
      'Campos',
      'Rangel',
      'Masculino',
      15100
    ),
   new Empleado(
    19141129,
    'test',
    'Yazmin Alejandra',
    'Castillo',
    'Martinez',
    'Femenino',
    95500
   )
  ];

  filter: string = 'Empleados';


  constructor() {

  }

  ngOnInit(): void {

  }

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
    if(sex=='M'){
      return this.listEmpleados.filter(emp => emp.Sexo === 'Masculino').length;
    }

    if(sex=='F'){
      return this.listEmpleados.filter(emp => emp.Sexo === 'Femenino').length;
    }

    return this.listEmpleados.length;
  }

  onChangeFilter(filtro:string){
    this.filter=filtro;
  }


}
