import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Competition} from "../model/competition.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private host = "http://localhost:8080/api/v1";

  constructor(private http : HttpClient) {
  }

  getCompetitions() : Observable<any>{
    return this.http.get(this.host + '/competitions');
  }

  creatCompetition(competitions : Competition) : Observable<any> {
    return this.http.post(this.host, competitions);
  }

  deleteCompetition(id : string) : Observable<any> {
    return this.http.delete(this.host + `/${id}`);
  }


}
