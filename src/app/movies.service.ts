import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
    api_key:string = "5209b0a33fdf897ec8471029242b6423";
    api_word:string = "?api_key=";
    lang_word:string = "&language=";
    search_word:string = "&query="

    popularMoviesUrl:string = "https://api.themoviedb.org/3/movie/popular";
    movieDetailsUrl:string = "https://api.themoviedb.org/3/movie/";
    searchMoviesUrl:string = "https://api.themoviedb.org/3/search/movie";

    constructor(private http: HttpClient) {}

    getAllMovies(pageNumber: number = 1 ,language: string = "en-US"):Observable<any> {
        return this.http.get(this.popularMoviesUrl + this.api_word + this.api_key +
            this.lang_word + language + "&page=" + pageNumber);
    }

    getMovieById(id:number):Observable<any> {
        return this.http.get(this.movieDetailsUrl + id + this.api_word + this.api_key);
    }
    searchAllMovies(movieTitle:string):Observable<any> {
        if (movieTitle == "") {
            return this.getAllMovies();
        }
        else {
            return this.http.get(this.searchMoviesUrl + this.api_word + this.api_key +
                this.search_word + movieTitle);
        }
        // this.allMovies = this.allData.filter(function(item: any){
        //     if (item.original_title.toLocaleLowerCase().includes(movieTitle.toLocaleLowerCase()))
        //         return item;
        // })
    }
}
