import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((response: InfoPagina) => {
        console.log(response);
        this.info = response;
        this.cargada = true;
      });
  }

  private cargarEquipo() {
    this.http.get('https://fir-html-e087b.firebaseio.com/equipo.json')
      .subscribe((response: any[]) => {
        this.equipo = response;
        console.log(this.equipo);
      });
  }
}
