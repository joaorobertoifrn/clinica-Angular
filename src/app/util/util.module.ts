import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent
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
    ReactiveFormsModule
  ]
})
export class UtilModule {}
