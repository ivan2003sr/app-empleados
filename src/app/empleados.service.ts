import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService, private dataServices:DataServices){}

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados;
  }

  empleados:Empleado[]=[];
   /* empleados:Empleado[]=[
        new Empleado("Iván", "Aguilar", "Desarrollador", 3500000),
        new Empleado("Evelyn", "Raynal", "Secretaria", 500000),
        new Empleado("Valentín", "Aguilar", "Estudiante", -20000),
        new Empleado("Ailén", "Aguilar", "Nada", -10000)
        
        
      ];*/

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Se agrega: "+"\n"+ empleado.nombre + "\n" + "Sueldo: $" + empleado.sueldo);
        this.empleados.push(empleado);
        this.dataServices.guardarEmpleados(this.empleados);
      }

      obtenerEmpleados(){
        return this.dataServices.cargarEmpleados();
      }
      
      encontrarEmpleado(indice:number){
        let empleado:Empleado=this.empleados[indice];
        return empleado;
      }

      actualizarEmpleadoServicio(indice:number, empleado:Empleado){
        let empladoModificado = this.empleados[indice];
        empladoModificado.nombre=empleado.nombre;
        empladoModificado.apellido=empleado.apellido;
        empladoModificado.cargo=empleado.cargo;
        empladoModificado.sueldo=empleado.sueldo; 
        this.dataServices.actualizarEmpleados(indice,empleado);

      }

      eliminarEmpleadoServicio(indice:number){
        this.empleados.splice(indice,1);
        this.dataServices.eliminarEmpleados(indice);

        if(this.empleados!=null) this.dataServices.guardarEmpleados(this.empleados);
      }
    }