import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((response: InfoPagina) => {
        console.log(response);
        this.info = response;
        this.cargada = true;
      });
  }
}
