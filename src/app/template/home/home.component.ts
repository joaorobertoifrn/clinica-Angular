import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cli-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  content = 'Conteúdo da Pagina Home';

  constructor() { }

  ngOnInit() {
  }

}
