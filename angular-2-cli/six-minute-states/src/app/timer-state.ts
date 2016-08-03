export class TimerState {
  time: number;
  disable: boolean;
  start : boolean;


  constructor(){
    this.time = 360;
    this.disable = false;
    this.start = false;
  }

}
