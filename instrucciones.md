# Caja Registradora

## Previo

- Instalación de Bootstrap
- Creación interfaz Producto (nombre(string), precio(number), imagen(string), oferta(boolean))
- Creación de componentes
    - ListaProductos
    - Comanda
- Incluimos los componentes en AppComponent

## ListaProductos

**app.component.html**
```html
<lista-productos titulo="Comida" [productos]="arrComida"></lista-productos>
<lista-productos titulo="Bebida" [productos]="arrBebida"></lista-productos>
```

1. Crear el componente
2. Revisar el selector
3. Crear los @Input (titulo: string, productos: Producto[])
4. Maquetar el componente

# ComandaComponent

```html
<comanda [productos]="arrSeleccionados"></comanda>
```

1. Modificar el selector
2. Crear @Input productos
3. Maquetar

# TAREAS

- [ListaProductos] Marcar con un `badge` aquellos productos que están en oferta
- [Comanda] Mostrar todos los productos dentro de la comanda
- [Comanda] Mostrar el total de la suma de los precios de todos los productos en la comanda
    - ¿Cómo lo hago a partir de una función en el TS? ¿Cómo la ejecuto en el HTML?
- [Comanda] Borrar los productos de la comanda
BONUS
- [Producto, AppComponent] Controlar que se acumulen los elementos
- [Comanda] Mostrar el total y los productos en función del acumulado