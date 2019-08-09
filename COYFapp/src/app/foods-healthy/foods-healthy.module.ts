import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodsHealthyPage } from './foods-healthy.page';

const routes: Routes = [
  {
    path: '',
    component: FoodsHealthyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodsHealthyPage]
})
export class FoodsHealthyPageModule {}
