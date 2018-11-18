import {Component, OnInit, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import {jqxChartComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';



import {SuffragiumService} from '../../suffragium.service';

@Component({
    selector: 'app-candidatos-grafica',
    templateUrl: './candidatos-grafica.component.html',
    styleUrls: ['./candidatos-grafica.component.css']
})
export class CandidatosGraficaComponent implements OnInit, AfterViewInit {

    @ViewChild('myChart') myChart: jqxChartComponent;

    getHeight(): any {
        if (document.body.offsetWidth > 1080) {
            return '700px';
        }
        return '500px';
    }
    getCols():any{
        if (document.body.offsetWidth > 1080) {
            return 'col-sm-2';
        }
        return 'col-sm-1';
    }
    getCol(): any{
        if (document.body.offsetWidth > 1080) {
            return 'col-sm-8';
        }
        return 'col-sm-10';
    }

    ngAfterViewInit(): void {
        this.timer = setInterval(() => {
            let todos = false;
            if (document.body.offsetWidth > 1080) {
                todos = true;
            }
            this.sufragiumService.getResultados(todos).subscribe(datos => {
                this.data = datos;
            });
            this.myChart.update();
        }, 5000);
    }
    data: any[];
    timer: any;

    padding: any = {left: 5, top: 5, right: 5, bottom: 10};

    titlePadding: any = {left: 0, top: 0, right: 0, bottom: 10};

    xAxis: any =
        {
            dataField: 'nombreCandidato',
            gridLines: {visible: false},
            valuesOnTicks: false
        };

    valueAxis: any =
        {
            minValue: 0,
            maxValue: 100,
            unitInterval: 10,
            title: {text: 'Porcentaje de Votos'},
            gridLines: {visible: true},
            labels: {horizontalAlignment: 'right'}
        };

    seriesGroups: any[] =
        [
            {
                type: 'column',
                columnsGapPercent: 50,
                alignEndPointsWithIntervals: true,
                series: [
                    {dataField: 'porcentaje', displayText: 'porcentaje', opacity: 1, lineWidth: 1, symbolType: 'circle', fillColorSymbolSelected: 'white', radius: 15}
                ]
            }
        ];

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        let todos = false;
            if (document.body.offsetWidth > 1080) {
                todos = true;
            }
        this.sufragiumService.getResultados(todos).subscribe(datos => {
            this.data = datos;
        });
    }
    ngOnDestroy(): void {
        clearInterval(this.timer);
    }

    constructor(private sufragiumService: SuffragiumService) {}


}
