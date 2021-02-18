import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GlasesTypeComponent } from './components/glases-type/glases-type.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LensesComponent } from './components/lenses/lenses.component';
import { LensesTypeComponent } from './components/lenses-type/lenses-type.component';
import { DatailsComponent } from './components/datails/datails.component';
import { FinelOrderComponent } from './components/finel-order/finel-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlasesTypeComponent,
    LensesComponent,
    LensesTypeComponent,
    DatailsComponent,
    FinelOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
