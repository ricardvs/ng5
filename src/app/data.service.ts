import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The intial goal', 'Another silly life goal', 'My first life goal', 'is to have another child', 'and have a better job']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal)
  {
    this.goals.next(goal);
  }
}
