import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//service 
import {AlertServiceService} from '../app/services/alert-service.service';
import { AuthinticationServiceService } from '../app/services/authintication-service.service';
import { CalculationServiceService } from '../app/services/calculation-service.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AlertServiceService,AuthinticationServiceService,CalculationServiceService
],
  bootstrap: [AppComponent],
})
export class AppModule {}
