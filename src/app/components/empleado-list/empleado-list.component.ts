import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  // 1. se crea un array del tipo empleado
  // 2.-
  listEmpleados: Empleado[] = [
    {legajo:1, nombre: 'Juan', apellido: 'Pérez', sexo: 'Masculino', salario: 250000},
    {legajo:2, nombre: 'Marcos', apellido: 'Gonzalez', sexo: 'Masculino', salario: 65000},
    {legajo:3, nombre: 'Marta', apellido: 'Garcia', sexo: 'Femenino', salario: 75000},
  ];


  constructor() { }

  ngOnInit(): void {
  }

  countEmpleados():number{
    return this.listEmpleados.length;
  }

  countEmpleadosFem():number{
    return this.listEmpleados.filter(list =>list.sexo === 'Femenino').length;
  }

  countEmpleadosMasc():number{
    return this.listEmpleados.filter(list =>list.sexo === 'Masculino').length;
  }

}
