import {
    Component,
    OnInit,
    Injectable,
    EventEmitter,
    Output
  } from "@angular/core";
  import {
    HttpClientModule,
    HttpClient,
    HttpErrorResponse,
    HttpHeaders
  } from "@angular/common/http";
  import { Observable } from "rxjs";
  import { catchError, map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { register } from "./register";
  
  
  @Injectable()
  export class Register {
    private API_URL = environment.BaseUrl + "api/";
    storeRef: object;
    constructor(private http: HttpClient) { }
 
    saveRegisterData(reg: register): Observable<any> {
      console.log(reg);
      return this.http.post<register>(
        this.API_URL + "Employee", reg
      );
    }
  
  
  }
  