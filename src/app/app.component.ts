import { Component, OnInit , DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck  {
  title = 'app';
  emailContacto: string;

  ngOnInit() {
    console.log(' desde app componente');
    console.log(localStorage.getItem('emailContato'));
    this.emailContacto = localStorage.getItem('emailContato');
    console.log('cargo email del localstorage: ' + this.emailContacto);
  }
  ngDoCheck() {
    console.log(' desde app componente');
    // para que actualise automaticamete sin recargar la pagina el email que se guarla en localstorage cuando se le ha cambiado
    this.emailContacto = localStorage.getItem('emailContato');
    console.log(localStorage.getItem('emailContato'));

  }

  borrarEmail() {
    // remover solo un elemento del LS
    localStorage.removeItem('emailContato');
    // remover todo el LS
    localStorage.clear();
    // limpío la variable emailcontacto
    this.emailContacto = null;
  }


}
