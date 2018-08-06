import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { API_CONFIG } from '../config/api.config';
import { Especialidade } from '../models/especialidade.model';
import { StorageService } from './storage.service';

@Injectable()
export class EspecialidadeService {
  constructor(public http: HttpClient, public storage: StorageService) {}

  findAll(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(`${API_CONFIG.baseUrl}/especialidade`);
  }

  findById(id: string) {
    return this.http.get<Especialidade>(`${API_CONFIG.baseUrl}/especialidade/${id}`);
  }

  insert(obj: Especialidade) {
    return this.http.post(`${API_CONFIG.baseUrl}/especialidade`, obj, {
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
