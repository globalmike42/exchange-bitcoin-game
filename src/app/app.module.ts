import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HuckstersComponent } from './hucksters/hucksters.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { MinersComponent } from './miners/miners.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RrstdComponent } from './rrstd/rrstd.component';
import { PayerService } from './payer.service';
import { AllNewsService } from './all-news.service';
import { ChangesService } from './changes.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hucksters', component: HuckstersComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'miners', component: MinersComponent },
  { path: 'rrstd', component: RrstdComponent },
  { path: '**', component: NotFoundComponent },


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HuckstersComponent,
    ExchangeComponent,
    MinersComponent,
    NotFoundComponent,
    RrstdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
  ],
  providers: [PayerService, AllNewsService, ChangesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
