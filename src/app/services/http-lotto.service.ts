import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {NextDrawDate} from "../models/nextdrawdate";
import {ResultResponseDto} from "../models/resultresponsedto";
import {TicketRequest} from "../models/ticketrequest";
import {NumberReceiverResponseDto} from "../models/numberreceiverresponsedto";

@Injectable({
  providedIn: 'root'
})
export class HttpLottoService {

  private url = 'http://localhost:8080/api/v1'
  constructor(private http: HttpClient) {
  }
  getNextDrawDate(): Observable<NextDrawDate>{
    return this.http.get<NextDrawDate>(this.url + '/nextdrawdate')
      .pipe(tap(console.log), catchError(this.handlerErrorNotFound));
  }

  getResultByTicketId (id: string): Observable<ResultResponseDto> {
    return this.http.get<ResultResponseDto>(this.url + '/results/' + id)
      .pipe(tap(console.log), catchError(this.handlerErrorNotFound));
  }

  postTicket(ticket: TicketRequest): Observable<NumberReceiverResponseDto> {
    return this.http.post<NumberReceiverResponseDto>(this.url + '/inputNumbers', ticket)
      .pipe(tap(console.log), catchError(this.handlerErrorNotFound));
  }

  private handlerErrorNotFound(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Message: ${error.message} \n` +
      `Returned code: ${error.status} \n`
    );
    return throwError(() => 'Nie znaleziono.');
  }

}
