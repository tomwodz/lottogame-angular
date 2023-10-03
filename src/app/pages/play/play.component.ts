import {Component, OnInit} from '@angular/core';
import {HttpLottoService} from "../../services/http-lotto.service";
import {Observable} from "rxjs";
import {NextDrawDate} from "../../models/nextdrawdate";
import {TicketRequest} from "../../models/ticketrequest";
import {NumberReceiverResponseDto} from "../../models/numberreceiverresponsedto";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  drawDate: Observable<NextDrawDate>
  numbers: Set<Number> = new Set<Number>([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  ]);
  numbersToSend: Set<Number> = new Set<Number>();
  message: string;
  ticketResponse: Partial<NumberReceiverResponseDto> = {};

  constructor(private http: HttpLottoService) {
  }

  add(number: Number) {
    if (!this.numbersToSend.has(number) && this.numbersToSend.size < 6) {
      this.numbersToSend.add(number);
      this.numbers.delete(number);
    }
    this.message = this.numbersToSend.size.toString() + ' z 6.';
  }

  delete(number: Number) {
    this.numbersToSend.delete(number);
    this.numbers.add(number)
    this.message = this.numbersToSend.size.toString() + ' z 6.';
  }

  send() {
    if (this.numbersToSend.size === 6) {
      const ticketRequest: TicketRequest = {
        inputNumbers: []
      }
      this.numbersToSend.forEach(
        ticket => {
          ticketRequest.inputNumbers.push(ticket)
        }
      );
      console.log(ticketRequest);
      this.http.postTicket(ticketRequest).subscribe(
        ticket => {
          this.ticketResponse = ticket
        }
      );
      this.clear();
    } else {
      this.message = 'za mało liczb.';
    }
  }

  clear() {
    this.numbersToSend.forEach(
      value => this.numbers.add(value)
    );
    this.numbersToSend.clear();
    this.message = '';
  }

  ngOnInit(): void {
    this.drawDate = this.http.getNextDrawDate();
    this.message = '0 z 6.'
  }

}
