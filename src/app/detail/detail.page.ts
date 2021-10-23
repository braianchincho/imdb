import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { MovieDatail } from '../models/movie.detail.model';
import { SuggestionService } from '../services/suggestion.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  // movieData: MovieDatail;
  title: string = '...Buscando';
  movieData$: Observable<MovieDatail>
  constructor(private route: ActivatedRoute, private suggestionService: SuggestionService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    console.log(this.route.snapshot.params.id);
    this.movieData$ = this.suggestionService.getDetailMovie(id).pipe(
      delay(4000),
      tap((movie: MovieDatail) => this.title = movie.fullTitle)
    );
  }

}
