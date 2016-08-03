/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TimerComponentComponent } from './timer-component.component';

describe('Component: TimerComponent', () => {
  it('should create an instance', () => {
    let component = new TimerComponentComponent();
    expect(component).toBeTruthy();
  });
});
