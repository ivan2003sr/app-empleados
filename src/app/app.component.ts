import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Empleados';

  constructor(/*private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService*/){
   // this.empleados=this.empleadosService.empleados;
  }
  ngOnInit(): void {
    //this.empleados=this.empleadosService.empleados;
  }
  /*
  empleados!:Empleado[];

  

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo);
    //this.miServicio.muestraMensaje("Nombre del empleado: "  + miEmpleado.apellido);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSueldo:number=0;*/
}
