import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SuffragiumService {

    /**
      * Constructor of the service
      * @param http The HttpClient - This is necessary in order to perform requests
      */
    constructor(private http: HttpClient) {}

    getResultados(todos: Boolean): Observable<Object[]> {
        return this.http.get<Object[]>("http://157.253.238.75:8080/Suffragium/api/resultados/candidatos?todos=" + todos);
    }

    getMunicipios(): Observable<Object[]> {
        return this.http.get<Object[]>("http://157.253.238.75:8080/Suffragium/api/resultados/mapa/municipios");
    }

    getDepartamentos(): Observable<Object[]> {
        return this.http.get<Object[]>("http://157.253.238.75:8080/Suffragium/api/resultados/mapa/departamentos");
    }
}
