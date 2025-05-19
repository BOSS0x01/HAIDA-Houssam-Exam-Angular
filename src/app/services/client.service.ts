import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private domain: string = "http://localhost:8086/api";
  constructor(private http: HttpClient) {

  }

  public getCustomers():Observable<any[]> {
    return this.http.get<any[]>(this.domain+'/clients');
  }
}
