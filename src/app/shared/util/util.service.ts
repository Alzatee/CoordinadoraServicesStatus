//Funcionalidades reutilizables
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public getPercentagesByDays(sevicesStatus: any[], days: number): string {
    let getLastWeekOfAllServices: any[] = [];

    let sumPercentageByDays = 0;
    let sumExpectedPercentage = 0;

    let generalPercentage = '';

    //Obtener últimos 7 días (de todos del arrays general)
    sevicesStatus.forEach(element => {
      getLastWeekOfAllServices.push(element.slice(Math.max(element.length - days, 0)));
    }); 

    //Sumando los últimos 7 días de todos los servicios en general
    getLastWeekOfAllServices.forEach((element, index) => {
      // Suma de los días de interés de todos los servicios
      sumPercentageByDays += element.reduce((a: any, b: any) => a + b, 0)
      // Suma del total esperado.
      sumExpectedPercentage += 100 * element.length;
    });

    //Obtener porcentaje
    const percentage = (sumPercentageByDays * 100) / sumExpectedPercentage;

    return generalPercentage = percentage.toString().split('.')[0];
  }

}
