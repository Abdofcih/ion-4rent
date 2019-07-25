import { Component } from '@angular/core';
import { ApartmentService } from '../services/apartment.service';
import { Apartment } from '../model/apartment';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
      } ;
    }).filter(apt => apt.publisherId == this.userService.logedUser.uId);
  })
}

}
