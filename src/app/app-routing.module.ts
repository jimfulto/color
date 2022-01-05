import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { RequirementsComponent } from './requirements/requirements.component';

const routes: Routes = [
  { path: '', redirectTo: '/colors', pathMatch: 'full' },
  { path: 'colors', component: ColorsComponent},
  { path: 'requirements', component: RequirementsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
