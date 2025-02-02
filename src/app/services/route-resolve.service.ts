import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { CommonService } from './common.service';

@Injectable({ providedIn: 'root' })
export class RouteResolveService implements Resolve<string> {
  private readonly commonService!: CommonService;

  constructor() {
    this.commonService = inject(CommonService);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
    return this.commonService.value;
  }
}
