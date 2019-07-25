import { Injectable } from '@angular/core';
import { Apartment } from '../model/apartment';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private _apartments:Apartment[];
  private _apartment:Apartment[]=[
  {
    aptId:1,
    publisherId:1,
    title:"Card title any string here",
    desc:"lorem bb nnn bbtdt 1 40 street giza haram",
    place:"Giza",
    price:1200,
    date: new Date(2016-2-4),
    floor:5,
    room:3,
    bathroom:1,
    furniture:false
  },
  {
    aptId:2,
    publisherId:1,
    title:"Card title any string here",
    desc:"lorem bb nnn bbtdt el-horia street",
    place:"Maadi",
    price:2500,
    date: new Date(2016-2-4),
    floor:1,
    room:5,
    bathroom:2,
    furniture:true
  },
  {
    aptId:3,
    publisherId:2,
    title:"Card title any string here",
    desc:"lorem bb nnn bbtdt el-horia street",
    place:"Maadi",
    price:1500,
    date: new Date(2016-2-4),
    floor:8,
    room:4,
    bathroom:2,
    furniture:false
  }
];
  constructor(private firestore: AngularFirestore) { }
  
  get apartment(){
    return this._apartment;
  }

   // Create apartment
   addApartment(apartment: Apartment) {
    this.firestore.collection('apartments-list').add(apartment);
  }
    // Fetch Single apartment Object
    getApartment(id: string) {
      return this.firestore.collection('apartments-list').doc(id).ref.get();
      /*Return a promise so you use
        .then(res=>{this.res = res})
      */
    }
    // Fetch apartments List
   get getApartmentsList() {
       return this.firestore.collection('apartments-list').snapshotChanges();
    }
      // Update apartment Object
  updateApartment(id,apartment: Apartment) {
    this.firestore.doc<Apartment>(`apartments-list/${id}`).update(apartment);
  } 
 
    // Delete apartment Object
    deleteApartment(id: string) { 
      if (confirm("Are you sure to delete this record?")) {
        this.firestore.doc('apartments-list/' + id).delete();
      }
    }
     

}
