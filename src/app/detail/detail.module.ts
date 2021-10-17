import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorListCardComponent } from './actor-list-card/actor-list-card.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    SharedModule
  ],
  declarations: [DetailPage, ActorListComponent, ActorListCardComponent, GenreListComponent]
})
export class DetailPageModule {}
