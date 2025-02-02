import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'selector-name',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public readonly commonService!: CommonService;

  constructor() {
    this.commonService = inject(CommonService);
  }

  public updateValue(value: string): void {
    this.commonService.value = value;
  }
}
