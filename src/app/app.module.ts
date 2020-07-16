import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {} from '';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Sample2Component,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
