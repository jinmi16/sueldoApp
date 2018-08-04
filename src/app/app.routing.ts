import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importamops nuestros componentes
import { HomeComponent } from './components/home/home.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'animales', component: AnimalsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'cuidadores', component: KeeperComponent },
   // { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent } // ** es pagina 404 cuando no existe lapagina

];
export const appRoutingProviders: any[] = []; // porque lo vamos a utilizar en app.modules.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // routing principal












