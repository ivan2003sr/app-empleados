import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService){}

    empleados:Empleado[]=[
        new Empleado("Iván", "Aguilar", "Desarrollador", 3500000),
        new Empleado("Evelyn", "Raynal", "Secretaria", 500000),
        new Empleado("Valentín", "Aguilar", "Estudiante", -20000),
        new Empleado("Ailén", "Aguilar", "Nada", -10000)
        
        
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Se agrega: "+"\n"+ empleado.nombre + "\n" + "Sueldo: $" + empleado.sueldo);
        this.empleados.push(empleado);
      }
}