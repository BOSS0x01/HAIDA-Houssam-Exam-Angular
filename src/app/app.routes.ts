import { Routes } from '@angular/router';
import {ClientsComponent} from './clients/clients.component';
import {CreditsComponent} from './credits/credits.component';
import {RemboursementsComponent} from './remboursements/remboursements.component';
import {CreateClientComponent} from './create-client/create-client.component';

export const routes: Routes = [
  { path:"clients", component: ClientsComponent },
  { path:"credits", component: CreditsComponent },
  { path:"remboursements", component: RemboursementsComponent },
  { path:"createClient", component: CreateClientComponent },
];
