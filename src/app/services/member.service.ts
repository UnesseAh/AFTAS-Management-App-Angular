import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private host : string = "http://localhost:8080/api/v1";

  constructor(private http : HttpClient) {}

  getMembers() : Observable<any> {
    return this.http.get(this.host+"/members");
  }

}
