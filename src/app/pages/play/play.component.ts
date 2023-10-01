import {Component, OnInit} from '@angular/core';
import {HttpLottoService} from "../../services/http-lotto.service";
import {Observable} from "rxjs";
import {NextDrawDate} from "../../models/nextdrawdate";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  drawDate: Observable<NextDrawDate>
  constructor(private http: HttpLottoService) {
  }

  ngOnInit(): void {
    this.drawDate = this.http.getNextDrawDate();
  }


}
