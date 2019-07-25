import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//  users:User[]=[
//    {
//     id:1,
//     uId:1,
//     name:"Abdelrahman",
//     email:"abdo@gmail.com",
//     phone:"01157206304",
//     password:"12345",
//     place:"Helwan",
//     fbLink:"https://facebook.com",
//     twLink:"https://twiter.com",
//     favourites:[0]
//    },
//    {
//     uId:2,
//     name:"Hossam",
//     email:"hossam@gmail.com",
//     phone:"01157211111",
//     password:"12345",
//     place:"Giza",
//     fbLink:"https://facebook.com",
//     twLink:"https://twiter.com",
//     favourites:[3]
//    }
//  ];
 logedUser:User;
 //-----------------------------------------------
 
 // Inject AngularFireDatabase Dependency in Constructor
 constructor(private firestore: AngularFirestore) { }
    // Create user
    addUser(user: User) {
      this.firestore.collection('users').add(user);
    }
    // Fetch Single user Object
    getUser(id: string) {
      return this.firestore.collection('users').snapshotChanges();
    }
    // Update User Object
    updateUser(id:string ) {
      this.firestore.doc<User>(`users/${id}`).update(this.logedUser);
    }
      // Fetch users List
   get getUserssList() {
    return this.firestore.collection('users').snapshotChanges();
 }
  
}
