import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidatosGraficaComponent} from './candidatos-grafica/candidatos-grafica.component';

import {jqxChartComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import {SuffragiumService} from '../suffragium.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [CandidatosGraficaComponent, jqxChartComponent],
    providers: [
        SuffragiumService
    ]
})
export class CandidatosModule {}
