import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { API_CONFIG } from '../config/api.config';
import { Paciente } from '../models/paciente.model';
import { StorageService } from './storage.service';

@Injectable()
export class PacienteService {
  constructor(public http: HttpClient, public storage: StorageService) {}

  findAll(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${API_CONFIG.baseUrl}/paciente`);
  }

  findById(id: string) {
    return this.http.get<Paciente>(`${API_CONFIG.baseUrl}/paciente/${id}`);
  }

  insert(obj: Paciente) {
    return this.http.post(`${API_CONFIG.baseUrl}/paciente`, obj, {
      observe: 'response',
      responseType: 'text'
    });
  }

  delete(id: string) {
    return this.http.delete(`${API_CONFIG.baseUrl}/paciente/${id}`, {
      observe: 'response',
      responseType: 'text'
    });
  }

}
