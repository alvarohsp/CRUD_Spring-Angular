import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from '../model/Funcionario';
import { FuncionariosListaService } from './funcionarios-lista.service';

@Component({
  selector: 'app-funcionarios-lista',
  templateUrl: './funcionarios-lista.component.html',
  styleUrls: ['./funcionarios-lista.component.css'],
})
export class FuncionariosListaComponent implements OnInit {
  public funcionarios: Array<Funcionario> = [];
  constructor(
    private service: FuncionariosListaService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.listarTodosFuncionarios().subscribe((res) => {
      this.funcionarios = res.data;
    });
  }

  public editarFuncionario(id: number): void {
    this.router.navigate(['criar-funcionario/', id]);
    console.log('Editar funcionario');
  }

  public excluirFuncionario(id: number, nome: string): void {
    console.log('Editar funcionario');
    const result = confirm(`Deseja excluir o funcionario ${nome}?`);
    if (result) {
      this.service.excluirFuncionarioPorId(id).subscribe({
        next: (res) => {
          this.toastr.success(res.message);
          this.funcionarios = this.funcionarios.filter(
            (funcionario) => funcionario.id !== id
          );
        },
        error: (err) => {
          this.toastr.error(err.message);
        },
      });
    }
  }
}
