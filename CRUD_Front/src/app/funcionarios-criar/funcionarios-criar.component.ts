import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FuncionariosListaService } from '../funcionarios-lista/funcionarios-lista.service';
import { Funcionario } from '../model/Funcionario';

@Component({
  selector: 'app-funcionarios-criar',
  templateUrl: './funcionarios-criar.component.html',
  styleUrls: ['./funcionarios-criar.component.css'],
})
export class FuncionariosCriarComponent implements OnInit {
  private TOASTR_WARNING_MSG = 'Preencha os campos corretamente';
  funcionario = new Funcionario();
  estadoEdicao = false;

  constructor(
    private service: FuncionariosListaService,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.verificarRota();
  }

  public salvarFuncionario(): void {
    if (!this.validarFuncionario()) {
      this.toastr.warning(this.TOASTR_WARNING_MSG);
      return;
    }

    if (this.estadoEdicao) {
      this.editarFuncionario();
      return;
    }
    this.criarFuncionario();
  }

  private criarFuncionario(): void {
    this.service.criarFuncionario(this.funcionario).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
        this.router.navigate(['listar-funcionarios']);
      },
      error: (err) => {
        this.toastr.warning(err.error.message);
      },
    });
  }

  private editarFuncionario(): void {
    this.service
      .editarFuncionarioPorId(this.funcionario.id, this.funcionario)
      .subscribe({
        next: (res) => {
          this.toastr.success(res.message);
          this.router.navigate(['listar-funcionarios']);
        },
        error: (err) => {
          this.toastr.warning(err.error.message);
        },
      });
  }

  public limpar(): void {
    this.funcionario = new Funcionario();
  }

  public validarFuncionario(): boolean {
    let retorno = false;
    if (
      this.funcionario.nome &&
      this.funcionario.email &&
      this.funcionario.sobrenome
    ) {
      retorno = true;
    }

    return retorno;
  }

  public verificarRota(): void {
    this.activateRoute.params.subscribe((param) => {
      if (param['id']) {
        const id = param['id'];
        this.service.pegarFuncionarioPorId(id).subscribe({
          next: (res) => {
            this.funcionario = res.data;
            this.estadoEdicao = true;
            console.log(res);
          },
          error: () => {
            this.router.navigate(['listar-funcionarios']);
          },
        });
      }
    });
  }
}
