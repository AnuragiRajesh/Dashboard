import { EventEmitter, Injectable, Output } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { Subject } from 'rxjs/internal/Subject';

// import { ChartModel } from '../_interfaces/chartmodel.model';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  public data:any
  public bradcastedData:any
  // public SignalViewModel = new Subject<Response>
  private hubConnection!: signalR.HubConnection;
  @Output() onSignalRMessage: EventEmitter<any> = new EventEmitter();


    public startConnection = () => {
      this.hubConnection = new signalR.HubConnectionBuilder()
                              .withUrl('https://localhost:5001/chart')
                              .build();
      this.hubConnection
        .start()
        .then(() => console.log('Connection started'))
        .catch(err => console.log('Error while starting connection: ' + err))
    }
    
    public addTransferChartDataListener = () => {
      this.hubConnection.on('transferchartdata', (data) => {
        this.newMessage(data)
        this.data = data;
        console.log(data);
      });
    }
    private newMessage(data:any) {
      this.onSignalRMessage.emit(data);
    }

    public broadcastChartData = () => {
      const data = this.data.map((m:any) => {
        const temp = {
          data: m.data,
          label: m.label
        }
        console.log(temp,"sdfj")
        return temp;  
      });

      this.hubConnection.invoke('broadcastchartdata', data)
      .catch(err => console.error(err));
    }

    public addBroadcastChartDataListener = () => {
      this.hubConnection.on('broadcastchartdata', (data) => {
        this.bradcastedData = data;
      })
    }
}
