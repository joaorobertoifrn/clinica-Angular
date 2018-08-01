import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { SidemenuComponent } from './template/sidemenu/sidemenu.component';
import { HomeComponent } from './template/home/home.component';
import { PacienteComponent } from './models/paciente/paciente.component';
import { ProfissionalComponent } from './models/profissional/profissional.component';
import { LocalatendimentoComponent } from './models/localatendimento/localatendimento.component';
import { EspecialidadeComponent } from './models/especialidade/especialidade.component';
import { UsuarioComponent } from './models/usuario/usuario.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { LoginComponent } from './security/login/login.component';
import { UtilModule } from './util/util.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
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
    UtilModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
