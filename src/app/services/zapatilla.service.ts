import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;
  constructor() {
    this.zapatillas = [
      new Zapatilla('Nike Airmax', 'Nike', 'Verdes', 40, true),
      new Zapatilla('Reboock Clasic', 'Reboock', 'Blanco', 80, true),
      new Zapatilla('Reboock Spartan', 'Reboock', 'Blanco', 180, false),
      new Zapatilla('Nike Runner', 'Nike', 'Negras', 160, true),
      new Zapatilla('Adidas Stan Smith', 'Adidas', 'Gris', 180, false),
    ];
  }
  getTexto() {
    return 'Hola Mundo desde un servicio';
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
