import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeComponent } from './heroe.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesService } from '../../servicios/heroes.service';
import { HttpClient, HttpHandler } from '@angular/common/http';




fdescribe('Test HeroeComponent', () => {
  let component: HeroeComponent;
  let fixture: ComponentFixture<HeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HeroeComponent ],
      providers: [HeroesService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('testing helloworld function', () => {
    expect(component.helloWord()).toEqual('hello world!');
  });

  it('testing getcolegiados function',() => {
    expect(component.getColegiados).length>0;

  } );

  

});
