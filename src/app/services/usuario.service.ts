import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable'; // si sale algun error instalar la libreia: npm install --save rxjs-compat
import { GLOBAL } from './global';

@Injectable()
export class UsuarioService {
  public url: String = '';
  constructor(
    private _http: Http
  ) {
    this.url = GLOBAL.url;

  }

  register() {

    return 'Texto desde el servicio';
  }
}
