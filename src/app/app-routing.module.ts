import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'movieDesc/:movID', component: MovieDescriptionComponent },
  { path: 'movieDesc', component: MovieDescriptionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
