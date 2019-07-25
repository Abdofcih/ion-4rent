import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.logedUser;
  }

}
