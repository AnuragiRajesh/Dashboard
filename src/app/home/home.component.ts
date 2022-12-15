  import { BasicDataService } from '../customServices/basic-data.service';
  import {Component, OnInit, OnDestroy } from '@angular/core';
  import { Subscription } from 'rxjs';
  
  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
  export class HomeComponent implements  OnInit, OnDestroy{
    private subscription: any = Subscription;
    public temprerature:number = 0
    public humidity:number = 0

    public percentageOf_CPU_Traffic:any
    public newMembers:any
    constructor(
      private homeData:BasicDataService,
      
    ){

    }
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
      
    }
 
    
  ngOnInit(): void {

 
    this.newMembers = this.homeData.getHomeData().NewMembers
    this.percentageOf_CPU_Traffic = this.homeData.getHomeData().CPU_Traffic
  }

  
  }
    