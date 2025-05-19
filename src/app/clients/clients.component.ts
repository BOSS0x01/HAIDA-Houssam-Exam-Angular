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
    this.clientService.getClients().subscribe(
      {
        next:(data)=>{
          this.clients = data;
        },error:(err)=>{
          console.log(err);
        }
      }
    )
  }
  handleDelete(client: any): void {
    if (confirm("Are you sure?")) {
      this.clientService.deleteClient(client.id).subscribe({
        next: () => {
          this.clients = this.clients.filter((c: any) => c.id !== client.id);
        },
        error: (err) => {
          console.error("Failed to delete client", err);
          alert("Une erreur est survenue lors de la suppression.");
        }
      });
    }
  }
}
