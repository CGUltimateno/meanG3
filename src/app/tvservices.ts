import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvServices {
  api: string = 'e3e3db12d95cc1b0e6fb9fd51a7cca77'
  // https://api.themoviedb.org/3/movie/top_rated
  allMovies: any[] = [];
  constructor(private http: HttpClient) {}

  getAllSeries(pageNumber:number=1,language: string = 'en-US'): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.api}&language=${language}&page=${pageNumber}`
    );
  }
  getSerieseById(movieId: number): Observable<any> {
    return this.http
      .get(`https://api.themoviedb.org/3/tv/${movieId}?api_key=${this.api}
    `);
  }

  searchAllSeries(movieName: string): Observable<any> {
    if (movieName == '') {
      return this.getAllSeries();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${this.api}&query=${movieName}`
      );
    }
  }
}
