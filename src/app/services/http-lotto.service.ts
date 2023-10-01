import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {NextDrawDate} from "../models/nextdrawdate";

@Injectable({
  providedIn: 'root'
})
export class HttpLottoService {

  private url = 'http://localhost:8080/api/v1'
  constructor(private http: HttpClient) {
  }
  getNextDrawDate(): Observable<NextDrawDate>{
    return this.http.get<NextDrawDate>(this.url + '/nextdrawdate')
      .pipe(tap(console.log));
  }


}
