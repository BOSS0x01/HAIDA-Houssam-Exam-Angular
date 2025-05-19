import { Component } from '@angular/core';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-clients',
  imports: [],
  templateUrl: './clients.component.html',
  standalone: true,
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  clients: any;

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.clientService.getCustomers().subscribe(
      {
        next:(data)=>{
          this.clients = data;
        },error:(err)=>{
          console.log(err);
        }
      }
    )
  }
}
