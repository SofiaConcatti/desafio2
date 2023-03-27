import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css'],
})
//DEFINO UN ARRAY CON LA INFORMACIÓN DE LOS ALUMNOS
export class AlumnoListaComponent {
  alumnos = [
    { nombre: 'Sofia', nota: 7 },
    { nombre: 'Lucrecia', nota: 5 },
    { nombre: 'Luis', nota: 10 },
    { nombre: 'Josue', nota: 10 },
    { nombre: 'Josefina', nota: 6 },
    { nombre: 'Oscar', nota: 3 },
  ];
}
