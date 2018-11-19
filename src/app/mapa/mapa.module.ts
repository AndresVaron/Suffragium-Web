import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapaMunicipiosComponent} from './mapa-municipios/mapa-municipios.component';
import {MapaDepartamentosComponent} from './mapa-departamentos/mapa-departamentos.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAbKGGFId6vb-FfOnHLEoxSGx68m3c06-Q'
        })
    ],
    declarations: [MapaMunicipiosComponent, MapaDepartamentosComponent]
})
export class MapaModule {}
