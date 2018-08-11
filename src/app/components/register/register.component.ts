import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// importamos modelo de usuario
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public title: String;
  public usuario: Usuario;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router


  ) {
    this.title = 'Registro';
    this.usuario = new Usuario('', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
    console.log('register.componet cargado !!');
  }
  onSubmit() {
    console.log(this.usuario);
  }

}
