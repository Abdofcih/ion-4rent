import { Component } from '@angular/core';
import { ApartmentService } from '../services/apartment.service';
import { Apartment } from '../model/apartment';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  apartments:Apartment[];
  constructor(private aptServices:ApartmentService,private userService:UserService) {
   // this.apartments = this.aptServices.apartment.filter(apt => userService.logedUser.favourites.includes({aptId:apt.aptId}));
  }
    
ionViewDidEnter(){
  this.aptServices.getApartmentsList.subscribe(list =>{
    this.apartments = list.map(item => {
      return <Apartment><unknown>{
        id: item.payload.doc.id,
        ...item.payload.doc.data()
      };
    }).filter(apt => this.userService.logedUser.favourites.includes(apt.aptId));
  })
  //this.apartments = this.aptServices.apartment.filter(apt => this.userService.logedUser.favourites.includes(apt.aptId));
}
}
