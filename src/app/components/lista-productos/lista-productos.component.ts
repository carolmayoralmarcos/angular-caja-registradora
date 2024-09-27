import { Component, EventEmitter, Input, Output } from '@angular/core';
import Producto from '../../interfaces/producto.interface';

@Component({
  selector: 'lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  @Input() titulo: string = '';
  @Input() productos: Producto[] = [];

  @Output() productoSeleccionado: EventEmitter<Producto> = new EventEmitter();

  onClick(prod: Producto) {
    this.productoSeleccionado.emit(prod);
  }

}
