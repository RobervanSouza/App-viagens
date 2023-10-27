import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { PessoaUsuaria } from 'src/app/core/types/type';
import { BehaviorSubject } from 'rxjs';
import  jwt_decode from "jwt-decode"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<PessoaUsuaria | null>(null);

  constructor(
    private tokenService: TokenService
  ) { 
    if (this.tokenService.logadoToken()){
      this.decodificarJWT();
    }
  }

  decodificarJWT(){
    const token = this.tokenService.retornarToken();
    const user = jwt_decode(token) as PessoaUsuaria;
    this.usuarioSubject.next(user);
  }

  retornarUsuario(){
    return this.usuarioSubject.asObservable();
  }

  salvarToken(token: string){
    this.tokenService.salvarToken(token);
    this.decodificarJWT()
  }

  logout(){
    this.tokenService.excluirToken();
    this.usuarioSubject.next(null)
  }

  estaLogado(){
    return this.tokenService.logadoToken();
  }

}
