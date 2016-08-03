import { Component, OnInit, Input } from '@angular/core';
import { TimerState} from '../timer-state';

@Component({
  selector: 'app-timer-component',
  template: `

  <div *ngIf = "timerState">
  <div class="block h1">
    {{minute}}
    <span > Minutes</span>
    {{second}}
    <span > Left</span>
  </div>
<h1>
  {{endmessage}}
</h1>
</div>
  <button (click)="onClick()" *ngIf = "timerState.start">
  Click Me!
</button>
  `,
  styles: [`
      .block {
        display: inline-block;
      }
    `]
})
export class TimerComponentComponent{

  @Input()
  timerState: TimerState;

  endmessage = "";

  minute = 6;
  second = 0;
  started = false;
  // if(this.timerState.start){
  //   console.log("visible in timer");
  // }

  ngDoCheck(){
    if(this.timerState.start && !this.started){
      this.changeTime();
      this.started = true;
      console.log("Start counter");
    }
  }


  onClick(){
      setTimeout(() => {this.changeTime();},1000);
  }
  changeTime(){
    this.timerState.time -= 1;
    this.second = this.timerState.time % 60;
    this.minute = this.timerState.time / 60 | 0;
    if(this.timerState.time > 0){
      setTimeout(() => {this.changeTime();},1000);
    }else{
      this.timerState.time = null;
      this.timerState.disable = true;
      this.endmessage = "Time Over";
    }

  }

}
