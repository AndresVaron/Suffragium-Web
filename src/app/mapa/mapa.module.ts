import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapaMunicipiosComponent} from './mapa-municipios/mapa-municipios.component';
import {MapaDepartamentosComponent} from './mapa-departamentos/mapa-departamentos.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: ''
        })
    ],
    declarations: [MapaMunicipiosComponent, MapaDepartamentosComponent]
})
export class MapaModule {}
