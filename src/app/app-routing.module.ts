import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatailsComponent } from './components/datails/datails.component';
import { FinelOrderComponent } from './components/finel-order/finel-order.component';
import { HomeComponent , } from './components/home/home.component';
import { LensesComponent } from './components/lenses/lenses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lenses', component: LensesComponent },
  { path: 'details', component: DatailsComponent },
  { path: 'finlorder', component: FinelOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
