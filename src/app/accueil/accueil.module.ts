import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './accueil-routing.module';

import { AcceuilPage } from './accueil.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [AcceuilPage]
})
export class DashboardPageModule {}
