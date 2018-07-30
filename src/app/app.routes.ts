import { LoginComponent } from './security/login/login.component';
import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { LocalatendimentoComponent } from './localatendimento/localatendimento.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'paciente', component: PacienteComponent },
    { path: 'profissional', component: ProfissionalComponent },
    { path: 'localatendimento', component: LocalatendimentoComponent },
    { path: 'especialidade', component: EspecialidadeComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'login', component: LoginComponent}

]
