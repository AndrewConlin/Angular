import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDataService } from './hero-data.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HeroesRoutingModule,
  ],
  declarations: [HeroesComponent],
  providers: [HeroDataService]
})
export class HeroesModule { }
