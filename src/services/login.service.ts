import { API_CONFIG } from './../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Credenciais } from '../models/credenciais.model';
import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

  user: Credenciais;

  constructor(private http: HttpClient) {}

  isLogado(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<Credenciais> {
    return this.http.post<Credenciais>(`${API_CONFIG.baseUrl}/login`,
                          {email: email, senha: password})
                    .do(user => this.user = user);
  }

}
