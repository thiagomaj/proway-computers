import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(
    public carrinhoService: CarrinhoService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
