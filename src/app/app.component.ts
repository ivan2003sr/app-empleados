import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[]=[
    new Empleado("Iván", "Aguilar", "Desarrollador", 3500000),
    new Empleado("Evelyn", "Raynal", "Secretaria", 500000),
    new Empleado("Valentín", "Aguilar", "Estudiante", -20000),
    new Empleado("Ailén", "Aguilar", "Nada", -10000)
    
    
  ];

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSueldo:number=0;
}
