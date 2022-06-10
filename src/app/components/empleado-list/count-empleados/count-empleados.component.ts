import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  @Input() todos:number;

  constructor() {
    this.todos = 0;
   }

  ngOnInit(): void {
    console.log(this.todos)
  }
  radioButtonSeleccionado = 'todos';

}
