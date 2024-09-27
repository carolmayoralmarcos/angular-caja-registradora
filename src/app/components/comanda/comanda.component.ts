import { Component, Input } from '@angular/core';
import Producto from '../../interfaces/producto.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'comanda',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './comanda.component.html',
  styleUrl: './comanda.component.css'
})
export class ComandaComponent {

  @Input() productos: Producto[] = [];

  onClickBorrar(index: number) {
    if (this.productos[index].unidades === 1) {
      this.productos.splice(index, 1)
    } else {
      this.productos[index].unidades!--;
    }
  }

  calcularTotal() {
    let total = 0;
    for (let prod of this.productos) {
      total += prod.precio * prod.unidades!;
    }
    return total;
  }

  calcularTotalV2() {
    return this.productos.reduce((total, prod) => total + (prod.precio * prod.unidades!), 0);
  }

}
