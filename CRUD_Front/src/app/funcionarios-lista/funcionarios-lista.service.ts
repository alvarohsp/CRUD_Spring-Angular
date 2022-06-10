import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../model/api-response';
import { Funcionario } from '../model/Funcionario';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosListaService {
  private URL_API = 'http://localhost:8080/api/v1/funcionarios';
  constructor(protected httpClient: HttpClient) {}

  listarTodosFuncionarios(): Observable<APIResponse<Array<Funcionario>>> {
    return this.httpClient.get<APIResponse<Array<Funcionario>>>(
      `${this.URL_API}/all`
    );
  }

  pegarFuncionarioPorId(id: number): Observable<APIResponse<Funcionario>> {
    return this.httpClient.get<APIResponse<Funcionario>>(
      `${this.URL_API}/${id}`
    );
  }

  excluirFuncionarioPorId(id: number): Observable<APIResponse<string>> {
    return this.httpClient.delete<APIResponse<string>>(
      `${this.URL_API}/del/${id}`
    );
  }

  criarFuncionario(funcionario: Funcionario): Observable<APIResponse<string>> {
    return this.httpClient.post<APIResponse<string>>(
      `${this.URL_API}/add`,
      funcionario
    );
  }

  editarFuncionarioPorId(
    id: number,
    funcionario: Funcionario
  ): Observable<APIResponse<string>> {
    return this.httpClient.put<APIResponse<string>>(
      `${this.URL_API}/updt/${id}`,
      funcionario
    );
  }
}
