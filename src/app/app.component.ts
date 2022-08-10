import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counterApp';
  public count=0
  public res=0
   increment(){
    this.count+=1
  }
  decrement(){
    this.count-=1

  }
  // clear(){
  //   this.res+=0
    
  // }
}
