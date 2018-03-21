import { Component } from '@angular/core';
import {DataService} from './data.service';
import {Customer} from './Customer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //characters = ['one', 'two', 'three', 'four'];
   customers?: Customer[];
  constructor(private myService: DataService) {
    //this.customers = Customer[];
  }

  ngOnInit() {
    this.showData();
  }


  showData() {
     this.myService.getData().subscribe(customers => {
       this.customers = customers;
     } );

  }
}
