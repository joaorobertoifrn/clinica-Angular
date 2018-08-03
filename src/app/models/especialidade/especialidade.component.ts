import { LoginService } from '../../../services/login.service';
import { NotificationService } from '../../util/messages/notification.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cli-especialidade',
  templateUrl: './especialidade.component.html'
})
export class EspecialidadeComponent implements OnInit {

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
