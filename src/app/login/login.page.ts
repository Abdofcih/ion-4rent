import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

import { User } from '../model/user';
import { UserService } from '../services/user.service';


import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loading:boolean = false;
 newUser:User;
 users:User[];
 user:User;
 page =  'login';
  constructor(private nav:Router,private userService:UserService,private firestore: AngularFirestore,private toastController: ToastController) { 
    if(!localStorage.getItem('isNotFirstTime'))
     this.nav.navigate(['welcome'])
     
  }

  ngOnInit() {
    
  }
changeContent(page:string){
  if(this.page != page)
   this.page=page;
}
loging(loginData){
  this.loading = true;
  this.userService.getUserssList.subscribe(list => {
    this.users = list.map(item => {
      return <User><unknown>{
        ...item.payload.doc.data(),
        id: item.payload.doc.id
      }  ;
    });
    this.users.forEach(user =>{
      if(user.email == loginData.email && user.password == loginData.password){
        this.user = user;
        
      }
    });
    if(this.user){
      //toast
     this.userService.logedUser = this.user;
     this.nav.navigate(["tabs"]);
    }
    else{
      this.loading = false;
      this.presentToast('Email or Password invalide');
    }
  })
}
  signup(form){
    let id = Math.floor(Math.random()* 100)
    let data ={uId:id ,fbLink:'',twLink:'',favourites:[],...form}
    this.userService.addUser(data);
    this.presentToast('Sign up successfuly')
    console.log(data);
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
