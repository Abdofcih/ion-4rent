import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from 'src/app/model/apartment';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss'],
})
export class ApartmentListComponent implements OnInit {
@Input() apartments:Apartment[];
  constructor() { }

  ngOnInit() {}

}
