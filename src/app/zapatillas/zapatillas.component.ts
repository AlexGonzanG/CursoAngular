import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public mi_marca: string;

  constructor() {
    this.color = 'yellow';
    this.marcas = new Array();
    this.mi_marca = 'Lacoste';
    this.zapatillas = [
      new Zapatilla('Nike Airmax', 'Nike', 'Verdes', 40, true),
      new Zapatilla('Reboock Clasic', 'Reboock', 'Blanco', 80, true),
      new Zapatilla('Reboock Spartan', 'Reboock', 'Blanco', 180, false),
      new Zapatilla('Nike Runner', 'Nike', 'Negras', 160, true),
      new Zapatilla('Adidas Stan Smith', 'Adidas', 'Gris', 180, false),
    ];
  }

  ngOnInit(): void {
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }

  getMiMarca() {
    alert(this.mi_marca);
  }
  addMarca() {
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(index: any) {
    //delete this.marcas[index];
    this.marcas.splice(index, 1);
  }

  onBlur() {
    console.log('Has salido del imput');
  }
  mostrarPalabra() {
    alert(this.mi_marca);
  }
}
