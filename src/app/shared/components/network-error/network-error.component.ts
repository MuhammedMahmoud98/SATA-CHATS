import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-error',
  templateUrl: './network-error.component.html',
  styleUrls: ['./network-error.component.scss'],
})
export class NetworkErrorComponent implements OnInit {
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit(): void {
  }
}
