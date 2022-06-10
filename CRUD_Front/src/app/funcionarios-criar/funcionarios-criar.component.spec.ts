import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosCriarComponent } from './funcionarios-criar.component';

describe('FuncionariosCriarComponent', () => {
  let component: FuncionariosCriarComponent;
  let fixture: ComponentFixture<FuncionariosCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosCriarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionariosCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
