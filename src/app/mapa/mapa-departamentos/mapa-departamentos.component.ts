import {Component, OnInit} from '@angular/core';
import {SuffragiumService} from '../../suffragium.service';


@Component({
    selector: 'app-mapa-departamentos',
    templateUrl: './mapa-departamentos.component.html',
    styleUrls: ['./mapa-departamentos.component.css']
})
export class MapaDepartamentosComponent implements OnInit {

    constructor(private suffragiumService: SuffragiumService) {}
    lat: string;
    lng: string;
    markers: marker[];
    mapStyles = [
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ];

    getCols(): any {
        if (document.body.offsetWidth > 1080) {
            return 'col-sm-2';
        }
        return 'col-sm-1';
    }
    getCol(): any {
        if (document.body.offsetWidth > 1080) {
            return 'col-sm-8';
        }
        return 'col-sm-10';
    }

    ngOnInit() {
        this.suffragiumService.getDepartamentos().subscribe(departamentos => {
            this.markers = [];
            for (let i = 0; i < departamentos.length; i++) {
                let departamento = (<{busqueda: any, numVotos: number, nombreLugar: string}[]> departamentos)[i];
                let location: {lat: string, lng: string} = JSON.parse(departamento.busqueda).results[0].geometry.location;
                this.lat = location.lat;
                this.lng = location.lng;
                let marker: marker = {lat: Number(location.lat), lng: Number(+location.lng), label: ("" + departamento.numVotos), lugar: departamento.nombreLugar};
                this.markers.push(marker);
            }
        });
    }

}
interface marker {
    lat: number;
    lng: number;
    label?: string;
    lugar: string;
}
