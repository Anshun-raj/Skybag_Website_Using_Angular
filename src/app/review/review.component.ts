import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
   title1="Connect Now";
   title2="Connect Now";
   title3="Connect Now";

   editTxt1()
   {
     this.title1="Connecting...";
     alert("Calling..")
   }

   editTxt2()
   {
     this.title2="Connecting...";
     alert("Calling..")
   }

   editTxt3()
   {
     this.title3="Connecting...";
     alert("Calling..")
   }
}
