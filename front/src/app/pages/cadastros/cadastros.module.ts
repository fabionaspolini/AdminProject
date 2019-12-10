import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { CadastrosRoutingModule, routedComponents } from './cadastros-routing.module';

@NgModule({
  imports: [
    CadastrosRoutingModule,
    NbCardModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CadastrosModule {
}
