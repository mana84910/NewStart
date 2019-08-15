import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NavService {

  constructor(private http: HttpClient) {}

  url = 'assets/data/dashboard-link.json';

  public getJSON(): Observable<any> {
    return this.http.get(this.url);
  }

}
