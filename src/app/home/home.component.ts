import { Component, OnInit } from '@angular/core';
import { BasicDataService } from '../customServices/basic-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public percentageOf_CPU_Traffic:any
  public numberOfLikes:any
  public numberOfSales:any
  public newMembers:any
  constructor(
    private homeData:BasicDataService
  ){

  }
 ngOnInit(): void {
   this.numberOfLikes= this.homeData.getHomeData().Likes
   this.numberOfSales = this.homeData.getHomeData().Sales
   this.newMembers = this.homeData.getHomeData().NewMembers
   this.percentageOf_CPU_Traffic = this.homeData.getHomeData().CPU_Traffic
 }
}
