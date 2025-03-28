import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html',
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;

  constructor() {
    this.titulo = 'Componente de Videojuegos';
    this.listado = 'Listado de los juegos mas populares';
    // console.log('Se ha cargado el componente: videojuego.component.ts');
  }

  ngOnDestroy() {
    // console.log('OnDestroy ejecutado¡¡¡');
  }

  ngDoCheck() {
    // console.log('DoCheck ejecutado¡¡¡');
  }

  ngOnInit() {
    // console.log('OnInit ejecutado¡¡¡');
  }

  cambiarTitulo() {
    this.titulo = 'nuevo Titulo del componente';
  }
}
