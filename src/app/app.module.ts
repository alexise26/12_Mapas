import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyBLMv60CVMXKlLDJVuyVaXvTNOaql8G7eE '
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
