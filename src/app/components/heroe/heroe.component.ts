import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { SGAService } from '../../servicios/sga.services';

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
  empleado: any = {};


  constructor( private _activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService, private _sgaService : SGAService)  {
    this.getHeroe();
    this.getEmpleados();
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
      console.log(data);
    }, (errorServicio) => {
      console.log(errorServicio);
      this.error = true;
      this.mesanjeError = errorServicio.error.error.message;

    } );

    console.log(this.colegiado);
  }


  getEmpleados (){

    console.log('componente heroe getColegiados ');

    this._sgaService.getUsuarios()
    .subscribe( (data: any) => {
      this.empleado  = data;
      console.log(data);
    }, (errorServicio) => {
      console.log(errorServicio);
      this.error = true;
      this.mesanjeError = errorServicio.error.error.message;

    } );

    console.log(this.empleado);

  
  }

}
