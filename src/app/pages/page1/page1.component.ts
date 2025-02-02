import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'page1-home',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss',
  imports: [RouterLink],
})
export class Page1Component implements OnInit {
  private readonly activatedRoute!: ActivatedRoute;

  valueFromResolve!: string;

  constructor() {
    this.activatedRoute = inject(ActivatedRoute);
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (data) => (this.valueFromResolve = data['value'])
    );
  }
}
