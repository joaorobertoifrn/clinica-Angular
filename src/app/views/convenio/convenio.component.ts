import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './../../../services/login.service';
import { NotificationService } from './../../../util/messages/notification.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Convenio } from '../../../models/convenio.model';
import { ConvenioService } from '../../../services/convenio.service';

@Component({
  selector: 'cli-convenio',
  templateUrl: './convenio.component.html'
})
export class ConvenioComponent implements OnInit {
  // lista de Convenios
  public convenios: Convenio[] = [];
  public QtdConvenios: number;
  convenio: Convenio;
  convenioForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    public auth: LoginService,
    public convenioService: ConvenioService
  ) {
    this.convenioForm = this.formBuilder.group({
      id: ['', []],
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(120)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      registroANS: ['', [Validators.required]],
      cnpj: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14)
        ]
      ],
      razaoSocial: ['', [Validators.required]],
      codigoCNS: ['', [Validators.required]],
      periodoRetorno: ['', []],
      telefone: ['', [Validators.required]]
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
    this.convenioService.findAll().subscribe(
      response => {
        this.convenios = response;
        this.QtdConvenios = this.convenios.length;
      },
      error => {}
    );
  }

  cadastrarConvenio() {
    this.convenioService.insert(this.convenioForm.value).subscribe(
      response => {
        this.notificationService.notify('Convênio Cadastrado com Sucesso');
        this.loadData();
      },
      error => {
        this.notificationService.notify('Falha ao Cadastrar Convênio : ' + error);
      }
    );
  }

  deletarConvenio(convenio_id) {
    this.convenioService.delete(convenio_id).subscribe(
      response => {
        this.notificationService.notify('Convênio Deletado com Sucesso');
        this.loadData();
      },
      error => {
        this.notificationService.notify('Falha ao Deletar Convênio : ' + error);
      }
    );
  }

  carregarConvenio(convenio_id) {
    if (convenio_id) {
      this.convenioService.findById(convenio_id).subscribe(
        response => {
          this.convenio = response;
          if (this.convenio) {
            this.convenioForm.controls.id.setValue(this.convenio.id);
            this.convenioForm.controls.nome.setValue(this.convenio.nome);
            this.convenioForm.controls.email.setValue(this.convenio.email);
            this.convenioForm.controls.registroANS.setValue(this.convenio.registroANS);
            this.convenioForm.controls.cnpj.setValue(this.convenio.cnpj);
            this.convenioForm.controls.razaoSocial.setValue(this.convenio.razaoSocial);
            this.convenioForm.controls.codigoCNS.setValue(this.convenio.codigoCNS);
            this.convenioForm.controls.periodoRetorno.setValue(this.convenio.periodoRetorno);
            this.convenioForm.controls.telefone.setValue(this.convenio.telefone);
          }
        },
        error => {}
      );
    }
  }
}
