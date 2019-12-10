import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrosComponent } from './cadastros.component';
import { CidadeComponent } from './cidade/cidade.component';

const routes: Routes = [{
  path: '',
  component: CadastrosComponent,
  children: [{
    path: 'cidade', component: CidadeComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrosRoutingModule {
}

export const routedComponents = [
  CadastrosComponent,
  CidadeComponent,
];
