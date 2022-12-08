  import { BasicDataService } from '../customServices/basic-data.service';
  import {Component, AfterViewInit, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
  import { Subscription } from 'rxjs';
  import {IMqttMessage} from "ngx-mqtt";
  import { WebsocketService } from '../customServices/Websoket/websocket.service';


  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
  export class HomeComponent implements AfterViewInit, OnInit, OnDestroy{
    private subscription: any = Subscription;
    public temprerature:number = 0
    public humidity:number = 0

    public percentageOf_CPU_Traffic:any
    public newMembers:any
    constructor(
      private homeData:BasicDataService,
      private tempraturteData: WebsocketService
    ){

    }
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
      
    }
    ngAfterViewInit(): void {
      this.subscription = this.tempraturteData.subscribeNewTopic().subscribe((message: IMqttMessage) => {
        this.temprerature= JSON.parse(message.payload.toString()).temp
        this.humidity= JSON.parse(message.payload.toString()).humi
        // console.log('Message: ' + message.payload.toString() + '<br> for topic: ' + message.topic);
      });
    }

    // @ViewChild('msglog', { static: true }) msglog: ElementRef | undefined;
    
  ngOnInit(): void {

 
    this.newMembers = this.homeData.getHomeData().NewMembers
    this.percentageOf_CPU_Traffic = this.homeData.getHomeData().CPU_Traffic
  }

  
  }
    