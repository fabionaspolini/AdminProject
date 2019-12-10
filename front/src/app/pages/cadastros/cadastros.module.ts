import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { CadastrosRoutingModule} from './cadastros-routing.module';
import { ParceiroComponent } from './parceiro/parceiro.component';
import { CidadeComponent } from './cidade/cidade.component';
import { CadastrosComponent } from './cadastros.component';

@NgModule({
  imports: [
    CadastrosRoutingModule,
    NbCardModule,
  ],
  declarations: [
    CadastrosComponent,
    CidadeComponent,
    ParceiroComponent,
  ],
})
export class CadastrosModule {
}
