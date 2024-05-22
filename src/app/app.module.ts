import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonsComponent } from './buttons/buttons.component';
import { ImagerComponent } from './imager/imager.component';
import { SliderComponent } from './slider/slider.component';
import { AnimationComponent } from './animation/animation.component';
import { Animation2Component } from './animation2/animation2.component';
import { Animation3Component } from './animation3/animation3.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ImagerComponent,
    SliderComponent,
    AnimationComponent,
    Animation2Component,
    Animation3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
