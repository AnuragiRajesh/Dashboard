import { Component, OnInit } from '@angular/core';
import {BasicDataService} from "../customServices/basic-data.service"
@Component({
  selector: 'app-side-war',
  templateUrl: './side-war.component.html',
  styleUrls: ['./side-war.component.scss']
})
export class SideWarComponent implements OnInit {
  public userName:string = ""
  public userImage:string=""
  constructor(
    private userData: BasicDataService,
    ) { }

  ngOnInit() {
   this.userName = this.userData.getUsers().userName 
   this.userImage = this.userData.getUsers().ImageUrl
   
  }

}
