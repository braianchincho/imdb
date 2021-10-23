import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() classTitle: string;
  constructor(private _location: Location) { }

  ngOnInit() {}
  goToBack() {
    this._location.back();
  }

}
