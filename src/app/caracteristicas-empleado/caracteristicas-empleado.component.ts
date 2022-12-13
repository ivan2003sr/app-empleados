import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent  implements OnInit{

  @Output() caracteristicasEmpleado = new EventEmitter<string>;

  constructor(){};
  ngOnInit(): void {
    
  }
  
  agregaCaracteristicas(value:string){
    this.caracteristicasEmpleado.emit(value);
  }
}
