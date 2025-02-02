import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommonService {
  private _delay = 1000;
  private _value!: string;

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  set delay(value: number) {
    this._delay = value;
  }

  get delay() {
    return this._delay;
  }
}
