import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvServices } from '../tvservices';

@Component({
  selector: 'app-movie-details',
  templateUrl: './tvseries-details.component.html',
  styleUrls: ['./tvseries-details.component.css'],
})
export class TvseriesDetailsComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  selectedTV: any;
  //Dependency Injection
  constructor(
    private route: ActivatedRoute,
    private TVseries: TvServices
  ) {}
  //lifecycle function
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.TVseries.getSerieseById(id).subscribe({
      next: (response) => {
        console.log(response);
        this.selectedTV = response;
      },
    });
  }
}
