import {Component} from '@angular/core';
import {HttpLottoService} from "../../services/http-lotto.service";
import {TicketIdRequest} from "../../models/ticketidrequest";
import {ResultResponseDto} from "../../models/resultresponsedto";
import {Observable} from "rxjs";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent{

  model: Partial<TicketIdRequest> = {};
  resultByTicketId: Partial<ResultResponseDto> = {};
  errorMessage: string;
  constructor(private http: HttpLottoService) {
  }

  getResultById(){
    this.errorMessage = '';
    this.resultByTicketId = {};
    this.http.getResultByTicketId(this.model.ticketId as string).subscribe(
      value => this.resultByTicketId = value,
      error => this.errorMessage = error,
   );
  }

}
