import { Component, Input, OnInit } from '@angular/core';
import { CastPerson } from 'src/app/models/movie.detail.model';

@Component({
  selector: 'app-actor-list-card',
  templateUrl: './actor-list-card.component.html',
  styleUrls: ['./actor-list-card.component.scss'],
})
export class ActorListCardComponent implements OnInit {
  @Input() actorList: CastPerson[];
  @Input() title: string;
  loading: boolean;
  constructor() { }

  ngOnInit() {}

}
