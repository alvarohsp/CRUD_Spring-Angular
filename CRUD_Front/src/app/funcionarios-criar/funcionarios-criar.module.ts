import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosCriarComponent } from './funcionarios-criar.component';
import { BotaoModule } from '../shared/botao/botao.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FuncionariosCriarComponent],
  imports: [CommonModule, BotaoModule, FormsModule, ReactiveFormsModule],
  exports: [FuncionariosCriarComponent],
})
export class FuncionariosCriarModule {}
