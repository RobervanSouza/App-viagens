import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './../usuario/usuario.service';

interface authResponse {
  access_token: string;
}
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,

    private userService: UsuarioService
    
    ) {}

  autenticar(email: string, senha: string): Observable<HttpResponse<authResponse>> {
    return this.http.post<authResponse>(`${this.apiUrl}/auth/login`, { email, senha },
    { observe:'response'}).pipe(
      tap((respose) =>{
        const authToken = respose.body?.access_token ||'';
        this.userService.salvarToken(authToken)
      })
    )
  }
}
