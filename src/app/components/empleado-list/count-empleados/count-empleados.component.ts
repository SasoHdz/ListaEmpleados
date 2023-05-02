import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatosBusqueda } from 'src/app/models/DatosBusqueda';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.scss']
})
export class CountEmpleadosComponent {

  @Output() genderSelect = new EventEmitter<string>();
  @Output() setValuesSearch = new EventEmitter<DatosBusqueda>();
  @Input() masculino: number = 0;
  @Input() femenino: number = 0;
  @Input() employees: number = 0;


  filterAdvanced = 'Todos';
  valorSearch = '';

  radioBottonSeleccionado:string = 'Empleados'

 /*  genero: any [] = [
    'Masculino', 'Femenino', 'Empleados', 'Avanzada'
  ] */

  radioChangeHandler (event: any){
    this.radioBottonSeleccionado=event.target.value;
    this.genderSelect.emit(this.radioBottonSeleccionado);
  }

  onSearch(){
    this.setValuesSearch.emit({tipo:this.filterAdvanced,valor: this.valorSearch});
  }


}
