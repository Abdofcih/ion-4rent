import { Component } from '@angular/core';
import { ApartmentService } from '../services/apartment.service';
import { Apartment } from '../model/apartment';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
apartments:Apartment[];
  constructor(private aptServices:ApartmentService) {
   
    //this.apartments = this.aptServices.apartment;
    
  
  }
  ionViewDidEnter() {
    this.aptServices.getApartmentsList.subscribe(list =>{
      this.apartments = list.map(item => {
        return <Apartment><unknown>{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      })
    })
   // this.apartments = this.aptServices.apartment;
  }

}
