import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosCriarComponent } from './funcionarios-criar/funcionarios-criar.component';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'listar-funcionarios',
  },
  {
    path: 'listar-funcionarios',
    component: FuncionariosListaComponent,
  },
  {
    path: 'criar-funcionario',
    component: FuncionariosCriarComponent,
  },
  {
    path: 'criar-funcionario/:id',
    component: FuncionariosCriarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
