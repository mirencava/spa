import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeComponent } from './heroe.component';
import { Heroe } from '../../servicios/heroes.service';

fdescribe('Test HeroeComponent', () => {
  let component: HeroeComponent;
  let fixture: ComponentFixture<HeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeComponent ]
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
});
