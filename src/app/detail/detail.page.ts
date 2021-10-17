import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDatail } from '../models/movie.detail.model';
import { SuggestionService } from '../services/suggestion.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  movieData: MovieDatail;
  constructor(private route: ActivatedRoute, private suggestionService: SuggestionService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    console.log(this.route.snapshot.params.id);
    this.suggestionService.getDetailMovie(id).subscribe(res => {
      this.movieData = res;
    });
  }

}
