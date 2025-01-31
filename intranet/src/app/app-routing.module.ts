import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemasComponent } from './pages/sistemas/sistemas.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path:'home',component: CardComponent},
  {path:'radiologia',component: SistemasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
