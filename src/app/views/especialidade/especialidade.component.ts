import { EspecialidadeService } from './../../../services/especialidade.service';
import { Especialidade } from './../../../models/especialidade.model';
import { LoginService } from '../../../services/login.service';
import { NotificationService } from './../../../util/messages/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cli-especialidade',
  templateUrl: './especialidade.component.html'
})
export class EspecialidadeComponent implements OnInit {
  // lista de Especialidades
  public especialidades: Especialidade[] = [];
  public QtdEspecialidades: number;
  especialidade: Especialidade;
  especialidadeForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    public auth: LoginService,
    public especialidadeService: EspecialidadeService
  ) {
    this.especialidadeForm = this.formBuilder.group({
      id: ['', []],
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(120)
        ]
      ]
    });
  }

  ngOnInit() {
    this.auth.refreshToken().subscribe(
      response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.loadData();
      },
      error => {
        this.router.navigate(['/login']);
      }
    );
  }

  loadData() {
    this.especialidadeForm = this.formBuilder.group({id: ['', []], nome: ['']});
    this.especialidadeService.findAll().subscribe(
      response => {
        this.especialidades = response;
        this.QtdEspecialidades = this.especialidades.length;
      },
      error => {}
    );

  }

  cadastrarEspecialidade() {
    this.especialidadeService.insert(this.especialidadeForm.value).subscribe(
      response => {
        this.notificationService.notify('Especialidade Cadastrada com Sucesso');
        this.loadData();
      },
      error => {
        this.notificationService.notify('Falha ao Cadastrar Especialidade : ' + error);
      }
    );
  }

  deletarEspecialidade(especialidade_id) {
    this.especialidadeService.delete(especialidade_id).subscribe(
      response => {
        this.notificationService.notify('Especialidade Deletado com Sucesso');
        this.loadData();
        this.router.navigate(['/especialidade']);
      },
      error => {
        this.notificationService.notify('Falha ao Deletar Especialidade : ' + error);
      }
    );
  }

  carregarEspecialidade(convenio_id) {
    if (convenio_id) {
      this.especialidadeService.findById(convenio_id).subscribe(
        response => {
          this.especialidade = response;
          if (this.especialidade) {
            this.especialidadeForm.controls.id.setValue(this.especialidade.id);
            this.especialidadeForm.controls.nome.setValue(this.especialidade.nome);
          }
        },
        error => {}
      );
    }
  }
}
