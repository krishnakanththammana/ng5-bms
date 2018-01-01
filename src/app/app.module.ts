import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    MovieDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
