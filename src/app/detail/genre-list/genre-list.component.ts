import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss'],
})
export class GenreListComponent implements OnInit {
  @Input() genders = [];
  @Input() color = 'primary';
  constructor() { }

  ngOnInit() {}

}
