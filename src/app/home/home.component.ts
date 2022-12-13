import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  titulo = 'Listado de Empleados';

  constructor(private empleadosService:EmpleadosService){
  }
  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }
  empleados!:Empleado[];

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo);
    //this.miServicio.muestraMensaje("Nombre del empleado: "  + miEmpleado.apellido);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSueldo:number=0;
}
