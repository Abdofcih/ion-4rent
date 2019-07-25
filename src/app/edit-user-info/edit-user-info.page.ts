import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.page.html',
  styleUrls: ['./edit-user-info.page.scss'],
})
export class EditUserInfoPage implements OnInit {
 user:User;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.user = this.userService.logedUser;
  }

  saveInfo(){
    let userDocId = this.userService.logedUser.id;
    this.userService.updateUser(userDocId);
    this.router.navigate(['tabs','profile'])
  }

}
