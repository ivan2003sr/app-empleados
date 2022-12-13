import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  constructor(private router:Router, private empleadosService:EmpleadosService){}
  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }
  
  volverHome(){
    this.router.navigate(['']);


  }

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo);
    //this.miServicio.muestraMensaje("Nombre del empleado: "  + miEmpleado.apellido);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.volverHome();
    
  }
  empleados!:Empleado[];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSueldo:number=0;

}
