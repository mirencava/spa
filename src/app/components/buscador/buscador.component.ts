import { Component, OnInit, } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute , Router} from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',

})
export class BuscadorComponent implements OnInit {

  heroes: Heroe [];
  termino: string;

  constructor( private _heroesService: HeroesService,
               private _activatedRoute: ActivatedRoute,
               private _router: Router) {
   }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      this.termino = params['termino'];
    });
  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
 }
}
