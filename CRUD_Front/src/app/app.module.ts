import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FuncionariosCriarComponent } from './funcionarios-criar/funcionarios-criar.component';
import { FuncionariosListaModule } from './funcionarios-lista/funcionarios-lista.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionariosCriarModule } from './funcionarios-criar/funcionarios-criar.module';

@NgModule({
  declarations: [AppComponent, PageHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FuncionariosListaModule,
    BrowserAnimationsModule,
    FuncionariosCriarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
