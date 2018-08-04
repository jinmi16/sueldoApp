import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importamos el routing
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ParqueComponent } from './components/parque/parque.component';
import { TiendaComponent } from './components/tienda/tienda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeeperComponent,
    NotFoundComponent,
    ParqueComponent,
    TiendaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
