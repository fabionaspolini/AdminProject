import { NgModule } from '@angular/core';
import { CadastrosRoutingModule, routedComponents } from './cadastros-routing.module';

@NgModule({
  imports: [
    CadastrosRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CadastrosModule {
}
