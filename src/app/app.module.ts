import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';
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
import { RouterModule } from '../../node_modules/@angular/router';
import { LoginComponent } from './security/login/login.component';

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
    UsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
