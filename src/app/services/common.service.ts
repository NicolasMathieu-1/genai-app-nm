/**
 * Author: Arindam Banerjee
 * Company: Atos Infogerance
 * License: SNCF Reseau
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  // Get data from GET Request from the url
  public getData(url: string): Observable<any[]>{
    let header = new HttpHeaders({ "Access-Control-Allow-Origin": "*"});
    const requestOptions = {  headers: header};    
    return this.httpClient.get<any[]>(url, requestOptions);
  }

  // Receive plain object from the url
  public getServiceResponse(getServiceUrl: string) {
    let header = new HttpHeaders({ "Access-Control-Allow-Origin": "*"});
    const requestOptions = {  headers: header};
    return this.httpClient.get(getServiceUrl, requestOptions);
  }
  
}
