import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleRunscript1Component } from './example-runscript1/example-runscript1.component';

@NgModule({
  declarations: [AppComponent, ExampleRunscript1Component],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
