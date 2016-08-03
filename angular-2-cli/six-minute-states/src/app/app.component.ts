import { Component } from '@angular/core';
import { TimerComponentComponent} from './timer-component/timer-component.component';
import { TimerState} from './timer-state';
import { State } from './state';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TimerComponentComponent]
})
export class AppComponent {
  title = '6 Minute States';
  public states = STATES;
  values = '';
  counter = 0;
  timerObj = new TimerState();
  message = "";

  correctStates = [];
  finishedStates = [];
  onKey(event: any){
    if(!this.timerObj.start){
      console.log("started");
      this.timerObj.start = true;
    }
    if(event.keyCode == '13'){
      console.log(this.timerObj);
      console.log(this.message);
      var i = 0;
      var notFound = true;
      while (i < this.states.length && notFound){
        var state = this.states[i];

        if(this.finishedStates.indexOf(event.target.value.toLowerCase() ) > -1){
            this.message = "You answered that already";
            i++;
        }else{
          if(event.target.value.toLowerCase() == state.name.toLowerCase()){
            this.counter += 1;
            this.correctStates.push(state.name);
            this.finishedStates.push(event.target.value.toLowerCase());
            this.message = "";
            notFound = false;

          }else{

            this.message = "That's not a state";
            i++;
          }
        }

      }
      /**
      // for (let i = 0; i < this.states.length; i++) {
      //     var state = this.states[i];
      //     if(this.finishedStates.indexOf(event.target.value.toLowerCase() ) > -1){
      //         this.message = "You answered that already";
      //     }else{
      //       if(event.target.value.toLowerCase() == state.name.toLowerCase()){
      //         this.counter += 1;
      //         this.correctStates.push(state.name);
      //         this.finishedStates.push(event.target.value.toLowerCase());
      //         this.message = "";
      //       }else{
      //         this.message = "";
      //       }
      //     }
      // }
      **/
      event.target.value = "";
    }
  }
}

const STATES: State[] = [
  {id: 1, name: "Alabama"},
  {id: 2, name: "Alaska" },
  {id: 3, name: "Arizona"},
  {id: 4, name: "Arkansas"},
  {id: 5, name: "California"},
  {id: 6, name: "Colorado"},
  {id: 7, name: "Connecticut"},
  {id: 8, name: "Delaware"},
  {id: 9, name: "Florida"},
  {id: 10, name: "Georgia"},
  {id: 11, name: "Hawaii"},
  {id: 12, name: "Idaho"},
  {id: 13, name: "Illinois"},
  {id: 14, name: "Indiana"},
  {id: 15, name: "Iowa"},
  {id: 16, name: "Kansas"},
  {id: 17, name: "Kentucky"},
  {id: 18, name: "Louisiana"},
  {id: 19, name: "Maine"},
  {id: 20, name: "Maryland"},
  {id: 21, name: "Massachusetts"},
  {id: 22, name: "Michigan"},
  {id: 23, name: "Minnesota"},
  {id: 24, name: "MIssissippi"},
  {id: 25, name: "Missouri"},
  {id: 26, name: "Montana"},
  {id: 27, name: "Nebraska"},
  {id: 28, name: "Nevada"},
  {id: 29, name: "New Hampshire"},
  {id: 30, name: "New Jersey"},
  {id: 31, name: "New Mexico"},
  {id: 32, name: "New York"},
  {id: 33, name: "North Carolina"},
  {id: 34, name: "North Dakota"},
  {id: 35, name: "Ohio"},
  {id: 36, name: "Oklahoma"},
  {id: 37, name: "Oregon"},
  {id: 38, name: "Pennsylvania"},
  {id: 39, name: "Rhode Island"},
  {id: 40, name: "South Carolina"},
  {id: 41, name: "South Dakota"},
  {id: 42, name: "Tennessee"},
  {id: 43, name: "Texas"},
  {id: 44, name: "Utah"},
  {id: 45, name: "Vermont"},
  {id: 46, name: "Virginia"},
  {id: 47, name: "Washington"},
  {id: 48, name: "West Virginia"},
  {id: 49, name: "Wisconsin"},
  {id: 50, name: "Wyoming"},
];
