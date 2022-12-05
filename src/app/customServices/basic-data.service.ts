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
}
