import {Injectable} from '@angular/core';
import { Http , Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable()
export class SGAService {


  private sgaUrl = 'http://localhost:49953/api/Empleado';

constructor(private _http: HttpClient) {
  console.log('servicio para usarse');
}




getUsuarios () {
  console.log('servicio heroe getGesCol ');
  const headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'withCredentials': 'true'

  });

  const url = this.sgaUrl;
  //this._http.get(url, {headers: headers } )
  return this._http.get(url);
}



}

