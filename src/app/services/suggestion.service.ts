import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuggestionModel } from '../models/suggestion.model';
import { map } from 'rxjs/operators';
import { ResponseModel } from '../models/response.model';
import { Observable, of } from 'rxjs';
import { mocksearch, moviedetail, topmovies } from '../mocks/mocks';
import { MovieDatail } from '../models/movie.detail.model';
@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  key = 'k_50hjtewj';
  url = 'https://imdb-api.com/es/API';
  // https://imdb-api.com/en/API/Top250TVs/k_50hjtewj
  constructor(private _http: HttpClient) { }
  getSuggestion(title: string): Observable<SuggestionModel[]> {
    // return this._http.get<ResponseModel<SuggestionModel>>(`${this.url}/Search/${this.key}/${title}`)
    return of(mocksearch)
      .pipe(
        map(data => data.results)
      );
  }
  getTop250Movies() {
    return this._http.get<any>(`${this.url}/Top250TVs/${this.key}`)
    // return of(topmovies)
    .pipe(
      map(data => data.items)
    );
  }
  getDetailMovie(id: string): Observable<MovieDatail> {
    return this._http.get<any>(`${this.url}/Title/${this.key}/${id}`)
    // return of(moviedetail);
  }
}
