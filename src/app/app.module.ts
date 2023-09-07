import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardMediaComponent } from './card-media/card-media.component';
import { CardsListComponent } from './cards-list/cards-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardMediaComponent,
    CardsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
