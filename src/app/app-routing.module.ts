import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReciboComponent } from './components/recibo/recibo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'recibos', component: ReciboComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'produtos', component: ProdutosComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
