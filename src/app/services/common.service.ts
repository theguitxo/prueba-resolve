import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommonService {
  _value!: string;
  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
