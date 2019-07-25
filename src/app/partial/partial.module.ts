import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ApartmentListComponent } from '../partial/apartment-list/apartment-list.component';
import { ApartmentComponent } from '../partial/apartment/apartment.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ApartmentListComponent,ApartmentComponent],
  exports:[ApartmentListComponent,ApartmentComponent]
})
export class PartialModule {}
