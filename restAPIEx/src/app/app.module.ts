import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { countriesComponent } from './components/countries.component';
import { countriesService } from './service/countries.service';

@NgModule({
  declarations: [
    AppComponent,
    countriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [countriesComponent]
})
export class AppModule { }
