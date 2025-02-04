import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { RadiologiaComponent } from './pages/radiologia/radiologia.component';
import { LaboratorioComponent } from './pages/laboratorio/laboratorio.component';
import { EnfermagemComponent } from './pages/enfermagem/enfermagem.component';

const routes: Routes = [
  {path:'',component: CardComponent},
  {path:'radiologia',component: RadiologiaComponent},
  {path:'laboratorio',component: LaboratorioComponent},
  {path:'enfermagem', component: EnfermagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
