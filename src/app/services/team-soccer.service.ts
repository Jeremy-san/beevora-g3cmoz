import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/Operators';;
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Summary } from '../model/summary';

const apiUrl = environment.api;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class TeamSoccerService {

  // eslint-disable-next-line max-len
  url = 'https://api.sportradar.us/soccer/trial/v4/fr/competitors/sr:competitor:44/summaries.json?api_key=wzmb6s6sczmp3k526a7fnys8';
  // eslint-disable-next-line @typescript-eslint/member-ordering


  constructor(public http: HttpClient) { }

  private log(log: string) {
    // eslint-disable-next-line no-console
    console.info(log); // methode qui permet de centraliser tous les log
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  // public getData() {
  // eslint-disable-next-line max-len
  //   return this.http.get(`https://api.sportradar.com/soccer/production/v4/en/schedules/2021-11-11/summaries.json?api_key=${this.apiKey}`);
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  // Retourne tous les pokémons
  // eslint-disable-next-line @typescript-eslint/member-ordering
  getSummary(): Observable<Summary[]> {
    return this.http.get<Summary[]>(this.url).pipe(
      tap(_ => this.log(`fetched summary`)),
      catchError(this.handleError(`getSummary`, []))
    );
  }


}
