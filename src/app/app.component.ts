import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from "./components/lista-productos/lista-productos.component";
import Producto from './interfaces/producto.interface';
import { ComandaComponent } from "./components/comanda/comanda.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaProductosComponent, ComandaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];

  arrSeleccionados: Producto[] = [];

  constructor() {
    this.arrComida = [
      { nombre: 'Paella', imagen: 'https://nomen.es/wp-content/uploads/2020/09/trucos-paella-perfecta.jpg', precio: 12.90, oferta: false },
      { nombre: 'Cocido', imagen: 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg', precio: 11, oferta: true },
      { nombre: 'Macarrones con tomate', imagen: 'https://www.rebanando.com/uploads/media/maxresdefault-jpg-19.jpeg', precio: 6.50, oferta: true },
      { nombre: 'Cazón', imagen: 'https://lacocinademasito.com/wp-content/uploads/2019/12/Cazon-en-adobo-2.jpg', precio: 7.90, oferta: false },
    ];

    this.arrBebida = [
      { nombre: 'Coca-cola', imagen: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', precio: 2.50, oferta: true },
      { nombre: 'Fanta Naranja', imagen: 'https://www.supereko.net/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/l/a/lata_330ml_fanta_go_naranja.jpg', precio: 2.23, oferta: false },
      { nombre: 'Cerveza', imagen: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/08/11/6113832151c5c.jpeg', precio: 1.80, oferta: true },
      { nombre: 'Agua', imagen: 'https://folder.es/41611-large_default/caja-de-35-botellas-de-agua-nestle-aquarel-033l.jpg', precio: 1.20, oferta: true },
    ];
  }

  onProductoSeleccionado($event: Producto) {
    // Busco si el producto está incluido por nombre
    const prod = this.arrSeleccionados.find(p => p.nombre === $event.nombre);

    if (prod) {
      if (prod.unidades)
        prod.unidades++;
    } else {
      $event.unidades = 1;
      this.arrSeleccionados.push($event);
    }
  }

}