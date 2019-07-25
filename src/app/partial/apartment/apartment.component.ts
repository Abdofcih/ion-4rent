import { Component, OnInit,Input } from '@angular/core';
import { Apartment } from 'src/app/model/apartment';
import { UserService } from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss'],
})
export class ApartmentComponent implements OnInit {
  @Input() apartment:Apartment;
  isFavourite = false;
  isMine = false;
  users:User[];
  Publisher:User;
  constructor(private userService:UserService,private toastController: ToastController) {}
  
  ngOnInit() {
      // check if post is in my favourite
      if(this.userService.logedUser.favourites.includes(this.apartment.aptId))
        this.isFavourite = true;
     // check if post is mine
      if(this.userService.logedUser.uId == this.apartment.publisherId)
        this.isMine = true;
      //get publisher phone
      this.userService.getUserssList.subscribe(list => {
        this.users = list.map(item => {
          return <User><unknown>{
            ...item.payload.doc.data(),
            id: item.payload.doc.id
          } ;
        });
        this.users.forEach(user =>{
          if(this.apartment.publisherId ==user.uId ){
            this.Publisher = user;
          }
        });
      })
  }
  toggleFavourite(){
    let userDocId = this.userService.logedUser.id;
    if (this.isFavourite){
      let index = this.userService.logedUser.favourites.indexOf(this.apartment.aptId);
      this.userService.logedUser.favourites.splice(index,1);
      this.userService.updateUser(userDocId);
      this.presentToast('Removed from favourite');
    } 
    else{
      this.userService.logedUser.favourites.push(this.apartment.aptId);
      this.userService.updateUser(userDocId);
      this.presentToast('Added to favourite');

    } 
    this.isFavourite = !this.isFavourite;
    
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
