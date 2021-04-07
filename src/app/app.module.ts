import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForFontSizeComponent } from './for-font-size/for-font-size.component';
import { ForPetInfoComponent } from './for-pet-info/for-pet-info.component';
import { ForCalculateComponent } from './for-calculate/for-calculate.component';
import {FormsModule} from '@angular/forms';
import { ForColorComponent } from './for-color/for-color.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ForFontSizeComponent,
    ForPetInfoComponent,
    ForCalculateComponent,
    ForColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
