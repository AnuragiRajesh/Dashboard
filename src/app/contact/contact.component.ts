import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
constructor(private elementRef: ElementRef){

}
ngOndestroy() {
  this.elementRef.nativeElement.remove();
}
}
