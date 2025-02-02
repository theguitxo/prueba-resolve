import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { timer } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({ providedIn: 'root' })
export class RouteResolveService implements Resolve<string> {
  private readonly commonService!: CommonService;

  constructor() {
    this.commonService = inject(CommonService);
  }

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<string> {
    return await new Promise((resolve) =>
      timer(this.commonService.delay).subscribe(() =>
        resolve(this.commonService.value)
      )
    );
  }
}
