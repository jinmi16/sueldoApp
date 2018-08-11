import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'Listar Usuarios';
  // numbers = [0, 1, 2, 3, 4, 5];
  numbers = new Array(25);
  constructor() { }

  ngOnInit() {
  }

}
