import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Client {
  id?: number;
  nom: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private domain: string = "http://localhost:8086/api";
  constructor(private http: HttpClient) {

  }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.domain}/clients`);
  }

  public getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.domain}/clients/${id}`);
  }

  public createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.domain}/clients`, client);
  }

  public updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.domain}/clients/${id}`, client);
  }

  public deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.domain}/clients/${id}`);
  }
}
