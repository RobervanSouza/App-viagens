import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponentComponent } from './shared/card-component/card-component.component';
import { BannerComponent } from './shared/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { MatCardModule } from '@angular/material/card';
import { CardDepoimentosComponent } from './shared/card-depoimentos/card-depoimentos.component';
import { FormularioBuscaComponent } from './shared/formulario-busca/formulario-busca.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalComponent } from './shared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BotaoControleComponent } from './shared/botao-controle/botao-controle.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PromocaoComponentComponent } from './pages/home/promocao-component/promocao-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutoCompleteComponent } from './shared/auto-complete/auto-complete.component';
import { SelecionaPassageirosComponent } from './shared/seleciona-passageiros/seleciona-passageiros.component';
import { DepoimentoComponent } from './pages/home/depoimento/depoimento.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { FormCadastrarComponent } from './shared/form-cadastrar/form-cadastrar.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AuthInterceptorInterceptor } from './core/interceptors/auth-interceptor.interceptor';
import { BuscaComponent } from './pages/busca/busca.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponentComponent,
    ContainerComponent,
    HomeComponent,
    CardBuscaComponent,
    CardDepoimentosComponent,
    FormularioBuscaComponent,
    ModalComponent,
    BotaoControleComponent,
    PromocaoComponentComponent,
    AutoCompleteComponent,
    SelecionaPassageirosComponent,
    DepoimentoComponent,
    LoginComponent,
    CadastrarComponent,
    FormCadastrarComponent,
    PerfilComponent,
    BuscaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
