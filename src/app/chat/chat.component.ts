import { Component, OnInit } from '@angular/core';
import { SignalrService } from '../customServices/signalr.service';
import { HttpClient } from '@angular/common/http';
// import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  
  public Data:any
  constructor(public signalRService: SignalrService, private http: HttpClient) { }

  ngOnInit():void {
    this.signalRService.startConnection();
   this.signalRService.addTransferChartDataListener()
    
    this.signalRService.addBroadcastChartDataListener();   
    this.startHttpRequest();
    this.signalRService.onSignalRMessage.subscribe((data: any) => {
      this.Data=data
      console.log(this.Data[2],"sjhf");
    });

  }

  private startHttpRequest = () => {
    this.http.get('https://localhost:5001/api/chart')
      .subscribe(res => {
        console.log(res);
      })
  }

  
  
}
