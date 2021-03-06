import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { API_CONFIG } from '../config/api.config';
import { Convenio } from '../models/convenio.model';
import { StorageService } from './storage.service';

@Injectable()
export class ConvenioService {
  constructor(public http: HttpClient, public storage: StorageService) {}

  findAll(): Observable<Convenio[]> {
    return this.http.get<Convenio[]>(`${API_CONFIG.baseUrl}/convenio`);
  }

  findById(id: string) {
    return this.http.get<Convenio>(`${API_CONFIG.baseUrl}/convenio/${id}`);
  }

  insert(obj: Convenio) {
    return this.http.post(`${API_CONFIG.baseUrl}/convenio`, obj, {
      observe: 'response',
      responseType: 'text'
    });
  }

  delete(id: string) {
    return this.http.delete(`${API_CONFIG.baseUrl}/convenio/${id}`, {
      observe: 'response',
      responseType: 'text'
    });
  }

}
