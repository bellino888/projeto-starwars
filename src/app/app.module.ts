import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Importa o HttpClientModule para fazer requisições HTTP

import { AppComponent } from './app.component';
import { CharacterSelectionComponent } from './character-selection/character-selection.component';  // Verifique o caminho correto

@NgModule({
  declarations: [
    AppComponent,
    CharacterSelectionComponent  // Declarando o componente CharacterSelection
  ],
  imports: [
    BrowserModule,         // Para rodar a aplicação no navegador
    HttpClientModule       // Necessário para fazer chamadas HTTP à API
  ],
  providers: [],
  bootstrap: [AppComponent]  // Este é o componente inicial da aplicação
})
export class AppModule { }
