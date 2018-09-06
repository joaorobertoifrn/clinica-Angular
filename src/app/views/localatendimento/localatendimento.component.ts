import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from '../../util/messages/notification.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'cli-localatendimento',
  templateUrl: './localatendimento.component.html'
})
export class LocalatendimentoComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    public auth: LoginService
  ) { }

  ngOnInit() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
      },
      error => {this.router.navigate(['/login']); });
  }

}
