import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicDataService {

  constructor() {
  }
  getUsers() { return {ImageUrl:"https://rajeshanuragi.netlify.app/assets//rajeshAnuragi.jpeg", userName:"Rajesh Anuragi"}  }
  getHomeData(){
    return {CPU_Traffic:67, Likes:"56,788", Sales:"760", NewMembers: "2,000" }
  }
  notificationData(){
    return [{ImageUrl:"http://localhost:4200/assets/dist/img/user1-128x128.jpg",name:"Brad Diesel"  ,message:"Call me whenever you can...", time: "4 hours ago" },{ImageUrl:"http://localhost:4200/assets/dist/img/user8-128x128.jpg", name:"John Pierce", message:"I got your message bro", time: "3 hours ago" },{ImageUrl:"http://localhost:4200/assets/dist/img/user3-128x128.jpg", name:"Nora Silvester", message:"The subject goes here", time: "2 hours ago" }]
  } 
}
