import {Component} from '@angular/core';
import {HttpLottoService} from "../../services/http-lotto.service";
import {TicketIdRequest} from "../../models/ticketidrequest";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent{

  model: Partial<TicketIdRequest> = {};
  errorMessage: string;
  constructor(private http: HttpLottoService) {
  }

  getResultById(){
    this.errorMessage = '';
    this.http.getResultByTicketId(this.model.ticketId as string).subscribe(
     {error: err => this.errorMessage = err}
   );
  }

}
