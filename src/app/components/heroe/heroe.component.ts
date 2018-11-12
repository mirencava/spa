import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  {


  heroe: any = {};
  colegiado: any = {};
  error: boolean;
  mesanjeError: string;


  constructor( private _activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService)  {
    this.getHeroe();
    this.getColegiados();
  }

  getHeroe() {
    console.log('componente heroe getHeroe ');
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe( params['id'] );
    }, error => {
      console.log('error');
    });


  }

  helloWord(): string {
    return 'hello world!';
  }

  getColegiados () {
    console.log('componente heroe getColegiados ');
    this.colegiado = this._heroesService.getGesCol();

    this._heroesService.getGesCol()
    .subscribe( (data: any) => {
      this.colegiado  = data;
    }, (errorServicio) => {
      console.log(errorServicio);
      this.error = true;
      this.mesanjeError = errorServicio.error.error.message;

    } );

    console.log(this.colegiado);
  }



}
