import { inject } from "@angular/core"
import { UsuarioService } from './../services/usuario/usuario.service';
import { Router } from "@angular/router";

export const authGuarde = () =>{
    const userService = inject(UsuarioService)
    const routas = inject(Router)

    if(userService.estaLogado()){
        return true
    } else {
        routas.navigate(['/login']);
        return false
    }
}