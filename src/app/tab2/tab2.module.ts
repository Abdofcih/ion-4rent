import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PartialModule } from '../partial/partial.module';

import { Tab2Page } from './tab2.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PartialModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
