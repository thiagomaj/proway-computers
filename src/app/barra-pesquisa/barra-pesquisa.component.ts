import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.scss']
})
export class BarraPesquisaComponent {
  descricao = "";

  constructor(
    private router: Router
  ) {}

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(["produtos"], {queryParams: {
        descricao: this.descricao
      }})
      return;
    }
    this.router.navigate(["produtos"]);
  }

}
