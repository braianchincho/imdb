import { Component, Input, OnInit } from '@angular/core';
import { CastPerson } from 'src/app/models/movie.detail.model';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
})
export class ActorListComponent implements OnInit {
  @Input() actorList: CastPerson[];
  @Input() title: string;
  constructor() { }

  ngOnInit() {}

}
