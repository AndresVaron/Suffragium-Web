import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {CandidatosGraficaComponent} from '../candidatos/candidatos-grafica/candidatos-grafica.component';
import {MapaMunicipiosComponent} from '../mapa/mapa-municipios/mapa-municipios.component';
import {MapaDepartamentosComponent} from '../mapa/mapa-departamentos/mapa-departamentos.component';

const routes: Routes = [

    {
        path: 'candidatos',
        children: [
            {
                path: 'grafica',
                component: CandidatosGraficaComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    }, {
        path: 'mapas',
        children: [
            {
                path: 'municipios',
                component: MapaMunicipiosComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'departamentos',
                component: MapaDepartamentosComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'home',
        component: CandidatosGraficaComponent,
        runGuardsAndResolvers: 'always'
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
