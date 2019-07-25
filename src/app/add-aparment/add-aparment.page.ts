import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../services/apartment.service';
import { Apartment } from '../model/apartment';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-aparment',
  templateUrl: './add-aparment.page.html',
  styleUrls: ['./add-aparment.page.scss'],
})
export class AddAparmentPage implements OnInit {
 newApartment : Apartment={
  aptId:Math.floor(Math.random()* 100),
  publisherId:this.userService.logedUser.uId,
  title:'',
  desc:'',
  place:'',
  price:0,
  date: new Date(22-7-2019),
  floor:0,
  room:0,
  bathroom:0,
  furniture:false
 };
  constructor(private aptServices:ApartmentService,private userService:UserService,private toastController: ToastController) { 
    this.aptServices.getApartment('3f70ZW210IIRF1w04XQP').then(doc =>{
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }

  ngOnInit() {
  }
  addApartment(){
   this.aptServices.addApartment(this.newApartment);
   console.log(this.newApartment);
   this.presentToast('Added')
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
  }
}
