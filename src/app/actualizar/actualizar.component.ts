import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit{
  
  constructor(private router:Router, private empleadosService:EmpleadosService, private route:ActivatedRoute ){}
  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id']-1;
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSueldo=empleado.sueldo;
  }
  
  volverHome(){
    this.router.navigate(['']);


  }

  actualizaEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo);
    
    this.empleadosService.actualizarEmpleadoServicio(this.indice,miEmpleado);
    this.volverHome();
    
    
  }
  empleados!:Empleado[];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSueldo:number=0;
  indice!:number;

}
