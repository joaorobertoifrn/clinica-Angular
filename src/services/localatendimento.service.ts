import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { API_CONFIG } from '../config/api.config';
import { LocalAtendimento } from '../models/localatendimento.model';
import { StorageService } from './storage.service';

@Injectable()
export class LocalAtendimentoService {
  constructor(public http: HttpClient, public storage: StorageService) {}

  findAll(): Observable<LocalAtendimento[]> {
    return this.http.get<LocalAtendimento[]>(`${API_CONFIG.baseUrl}/localatendimento`);
  }

  findById(id: string) {
    return this.http.get<LocalAtendimento>(`${API_CONFIG.baseUrl}/localatendimento/${id}`);
  }

  insert(obj: LocalAtendimento) {
    return this.http.post(`${API_CONFIG.baseUrl}/localatendimento`, obj, {
      observe: 'response',
      responseType: 'text'
    });
  }

  delete(id: string) {
    return this.http.delete(`${API_CONFIG.baseUrl}/localatendimento/${id}`, {
      observe: 'response',
      responseType: 'text'
    });
  }

}
