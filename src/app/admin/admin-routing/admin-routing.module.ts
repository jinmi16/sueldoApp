
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importamos componentes

import { MainComponent } from '../components/main/main.component';
import { AddComponent } from '../components/usuario/add/add.component';
import { EditComponent } from '../components/usuario/edit/edit.component';
import { ListComponent } from '../components/usuario/list/list.component';


const adminRoutes: Routes = [
  {
    path: 'admin-panel', // localhost:4200/admin-lanel/listado
    component: MainComponent,
    children: [
      { path: 'listado', component: ListComponent },
      { path: 'crear', component: AddComponent },
      { path: 'editar', component: EditComponent },
    ]
  }
];

@NgModule({
  imports: [
  RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
