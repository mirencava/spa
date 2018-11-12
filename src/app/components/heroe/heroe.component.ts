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


  constructor( private _activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService)  {
  }

  getHeroe() {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe( params['id'] );
    }, error => {
      console.log('error');
    });


  }

  helloWord(): string {
    return 'hello world!';
  }



}
