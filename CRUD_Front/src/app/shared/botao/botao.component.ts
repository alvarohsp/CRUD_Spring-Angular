import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css'],
})
export class BotaoComponent implements OnInit {
  public botaoLabel = '';
  constructor() {}

  @Input()
  botaoEstilo!: 'delete' | 'edit' | 'save' | 'clear';

  @Output()
  botaoClick: EventEmitter<null> = new EventEmitter();

  ngOnInit(): void {
    this.verificarTipo();
  }

  private verificarTipo(): void {
    this.botaoLabel =
      this.botaoEstilo === 'delete'
        ? 'Excluir'
        : this.botaoEstilo === 'save'
        ? 'Salvar'
        : this.botaoEstilo === 'edit'
        ? 'Editar'
        : this.botaoEstilo === 'clear'
        ? 'Limpar'
        : '';
  }

  public onClick(): void {
    this.botaoClick.emit();
  }
}
