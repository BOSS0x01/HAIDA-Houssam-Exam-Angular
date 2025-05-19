import { Component } from '@angular/core';
import { ClientService, Client } from '../services/client.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-client.component.html'
})
export class CreateClientComponent {
  client: Client = {
    nom: '',
    email: ''
  };

  constructor(private clientService: ClientService, private router: Router) {}

  onSubmit(): void {
    this.clientService.createClient(this.client).subscribe({
      next: () => {
        alert('Client créé avec succès !');
        this.router.navigate(['/clients']); // or your client list route
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de la création du client.');
      }
    });
  }
}
