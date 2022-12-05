import { Component, OnInit } from '@angular/core';
import { BasicDataService } from '../customServices/basic-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
public notifications:any
 constructor(private servises:BasicDataService){

 }
 ngOnInit(): void {
   this.notifications = this.servises.notificationData()
   console.log(this.notifications)
 }
}
