import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.scss']
})
export class CountEmpleadosComponent {

  @Output() genderSelect = new EventEmitter<string>();
  @Input() masculino: number = 0;
  @Input() femenino: number = 0;
  @Input() employees: number = 0;

  filterAdvanced = 'Todos';

  radioBottonSeleccionado:string = 'Empleados'

  genero: any [] = [
    'Masculino', 'Femenino', 'Empleados', 'Avanzada'
  ]

  radioChangeHandler (event: any){
    this.radioBottonSeleccionado=event.target.value;
    this.genderSelect.emit(this.radioBottonSeleccionado);
  }
}
