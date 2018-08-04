import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-parque',
  templateUrl: './parque.component.html',
  styleUrls: ['./parque.component.css']
})
export class ParqueComponent implements OnInit, OnChanges {
  @Input() public nombre: string;
  public metros: number;
  @Input('ferestal') vegetacion: string;
  public abierto: boolean;
  @Output() pasarDatos = new EventEmitter();
  constructor() {
    this.nombre = 'parque de caballos';
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = true;
  }
  emitirEvento() {
    this.pasarDatos.emit({
      'nombre': this.nombre,
      'metros': this.metros,
      'vegetacion': this.vegetacion,
      'abierto': this.abierto

    });
  }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(' ejecutando onChange :=)');
    console.log(changes);
    }
}
