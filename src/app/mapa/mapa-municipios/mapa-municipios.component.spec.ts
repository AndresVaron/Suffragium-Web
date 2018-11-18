import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaMunicipiosComponent } from './mapa-municipios.component';

describe('MapaMunicipiosComponent', () => {
  let component: MapaMunicipiosComponent;
  let fixture: ComponentFixture<MapaMunicipiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaMunicipiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaMunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
