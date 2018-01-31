import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReciboComponent } from './components/recibo/recibo.component';
import { ClientesSemCompraComponent } from './components/clientes-sem-compra/clientes-sem-compra.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProdutosReciboComponent } from './components/recibo/produtos-recibo/produtos-recibo.component';
import { ModalProdutoComponent } from './components/produtos/modal-produto/modal-produto.component';
import { ModalReciboComponent } from './components/recibo/modal-recibo/modal-recibo.component';
import { ModalClienteComponent } from './components/clientes/modal-cliente/modal-cliente.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ReciboService } from './services/recibo.service';
import { ProdutoService } from './services/produto.service';
import { ClienteService } from './services/cliente.service';
import { AppRoutingModule } from './/app-routing.module';

import { FilterProdutoPipe } from './pipes/filter-produto.pipe';
import { FilterClientePipe } from './pipes/filter-cliente.pipe';
import { FilterReciboPipe } from './pipes/filter-recibo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ReciboComponent,
    ClientesSemCompraComponent,
    ProdutosComponent,
    ClientesComponent,
    ProdutosReciboComponent,
    ModalProdutoComponent,
    ModalReciboComponent,
    ModalClienteComponent,
    DashboardComponent,
    FilterProdutoPipe,
    FilterClientePipe,
    FilterReciboPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ReciboService,
    ProdutoService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
