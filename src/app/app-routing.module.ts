import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizacionComponent } from './screens/visualizacion/visualizacion.component';

const routes: Routes = [
  { path: 'visualizacion', component: VisualizacionComponent },
  { path: '', redirectTo: '/visualizacion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
