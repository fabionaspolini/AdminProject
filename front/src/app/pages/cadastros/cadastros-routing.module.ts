import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrosComponent } from './cadastros.component';
import { CidadeComponent } from './cidade/cidade.component';
import { ParceiroComponent } from './parceiro/parceiro.component';

const routes: Routes = [{
  path: '',
  component: CadastrosComponent,
  children: [
    {path: 'cidades', component: CidadeComponent},
    {path: 'parceiros', component: ParceiroComponent},
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrosRoutingModule {
}
