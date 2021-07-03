import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/client';
import { CLIENTS } from '../components/clients/clients.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
