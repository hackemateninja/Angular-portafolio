import { Component } from '@angular/core';
import { InfoPagina } from './interfaces/info-pagina.interfaces';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public infoPaginaService: InfoPaginaService) {
  }
}
