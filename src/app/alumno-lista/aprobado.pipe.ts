import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aprobado',
})
export class AprobadoPipe implements PipeTransform {
  transform(nota: number): string {
    if (nota >= 7) {
      return 'Aprobado';
    } else {
      return 'Desaprobado';
    }
  }
}
