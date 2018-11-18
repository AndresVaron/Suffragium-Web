import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaMunicipiosComponent } from './mapa-municipios/mapa-municipios.component';
import { MapaDepartamentosComponent } from './mapa-departamentos/mapa-departamentos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MapaMunicipiosComponent, MapaDepartamentosComponent]
})
export class MapaModule { }
