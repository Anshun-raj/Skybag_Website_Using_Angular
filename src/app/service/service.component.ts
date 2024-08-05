import { Component } from '@angular/core';


@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  count1:number=0;
  count2:number=0;
  count3:number=0;

  

  increment1(){
     this.count1=this.count1+1;
  }

  increment2(){
    this.count2=this.count2+1;
  }

  increment3(){
    this.count3=this.count3+1;
  }

  decrement1(){
    this.count1=this.count1-1;
  }

  decrement2(){
    this.count2=this.count2-1;
  }

  decrement3(){
    this.count3=this.count3-1;
  }
}
