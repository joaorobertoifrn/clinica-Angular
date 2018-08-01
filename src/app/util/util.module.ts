import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { LoginService } from '../../services/login.service';
import { NotificationService } from './messages/notification.service';
import { BarranotificacaoComponent } from './barranotificacao/barranotificacao.component';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    BarranotificacaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BarranotificacaoComponent
  ]
})
export class UtilModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilModule,
      providers: [LoginService, NotificationService]
    };
  }
}
