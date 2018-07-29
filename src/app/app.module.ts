import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ControlsidebarComponent } from './controlsidebar/controlsidebar.component';
import { HomeComponent } from './home/home.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { LocalatendimentoComponent } from './localatendimento/localatendimento.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    ControlsidebarComponent,
    HomeComponent,
    PacienteComponent,
    ProfissionalComponent,
    LocalatendimentoComponent,
    EspecialidadeComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
