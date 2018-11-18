import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosGraficaComponent } from './candidatos-grafica.component';

describe('CandidatosGraficaComponent', () => {
  let component: CandidatosGraficaComponent;
  let fixture: ComponentFixture<CandidatosGraficaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatosGraficaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
