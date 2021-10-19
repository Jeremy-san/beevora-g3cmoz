/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Summary } from 'src/app/model/summary';
import { TeamSoccerService } from 'src/app/services/team-soccer.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  summary: Summary[] = null;


  constructor( private teamSoccer: TeamSoccerService, public http: HttpClient) {
    // this.readApi('https://api.sportradar.us/soccer/trial/v4/fr/competitors/sr:competitor:44/summaries.json?api_key=wzmb6s6sczmp3k526a7fnys8')
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }


  ngOnInit() {
    console.log(this.summary, []);
    this.teamSoccer.getSummary()
    .subscribe(summary => this.summary = summary);
    console.log('passe ici');
  }

  // readApi(url: string) {
  //   console.log('hello');
  //   return this.http.get(url);
  // }

}
