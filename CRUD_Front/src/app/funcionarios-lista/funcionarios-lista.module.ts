import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosListaComponent } from './funcionarios-lista.component';
import { BotaoModule } from '../shared/botao/botao.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [FuncionariosListaComponent],
  imports: [CommonModule, BotaoModule],
  exports: [FuncionariosListaComponent],
})
export class FuncionariosListaModule {}
