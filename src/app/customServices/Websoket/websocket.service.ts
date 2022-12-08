import { Injectable } from '@angular/core';
import {  MqttService } from 'ngx-mqtt';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService  {
    // private subscription: any = Subscription;
    topicname: any = 'test';
    isConnected: boolean = false;
    constructor(private _mqttService: MqttService){

    }

    subscribeNewTopic() {
        // console.log('inside subscribe new topic')
        // console.log(this._mqttService.clientId);
        // console.log(this.topicname);
        // console.log('subscribed to topic: ' + this.topicname)

      return this._mqttService.observe(this.topicname)
        
      }
}
