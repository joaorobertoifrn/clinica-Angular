import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { API_CONFIG } from '../config/api.config';
import { Profissional } from '../models/profissional.model';
import { StorageService } from './storage.service';

@Injectable()
export class ProfissionalService {
  constructor(public http: HttpClient, public storage: StorageService) {}

  findAll(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(`${API_CONFIG.baseUrl}/profissional`);
  }

  findById(id: string) {
    return this.http.get<Profissional>(`${API_CONFIG.baseUrl}/profissional/${id}`);
  }

  insert(obj: Profissional) {
    return this.http.post(`${API_CONFIG.baseUrl}/profissional`, obj, {
      observe: 'response',
      responseType: 'text'
    });
  }

  delete(id: string) {
    return this.http.delete(`${API_CONFIG.baseUrl}/especialidade/${id}`, {
      observe: 'response',
      responseType: 'text'
    });
  }

}
