import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SuggestionModel } from '../models/suggestion.model';
import { SuggestionService } from '../services/suggestion.service';
import { finalize, map } from 'rxjs/operators';
import { IonSearchbar } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  textSearch: string;
  suggestion$: Observable<SuggestionModel[]>;
  loading: boolean;
  @ViewChild('inputSearch', { static: false }) inputSearch: IonSearchbar;
  constructor(private suggestionService: SuggestionService) {}
  search(searchTitle): void {
    console.log(searchTitle)
    if(!searchTitle) {
      return;
    }
    this.loading = true;
    this.inputSearch.getInputElement().then(el => el.blur());
    this.suggestion$ = this.suggestionService.getSuggestion(searchTitle)
    .pipe(finalize(() => this.loading = false));
  }
  ngOnInit(): void {
    this.suggestion$ = this.suggestionService.getTop250Movies().pipe(
      map(res => res.map(item => ({
        id: item.id,
        title: item.fullTitle,
        image: item.image
      }))),
      finalize(() => this.loading = false)
    );
  }
}
