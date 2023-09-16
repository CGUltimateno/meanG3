import { Component, OnInit } from '@angular/core';
import {TvServices} from "../tvservices";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allTvs: any[] = [];
  lang: string = 'en-US';
  allData: any[] = [];
  currentpage: number = 1;
  totaltvs!: number;
  tvsPerPage: number = 20;

  private searchval: string = '';
  showtvDetails: boolean = true;



  constructor(private tvsservices: TvServices) {}

  set searchValue(value: string) {
    this.searchval = value;
    this.searchallseries(value);
  }
  ngOnInit(): void {
    this.tvsservices.getAllSeries().subscribe({
      next: (response) => {
        this.allTvs = response.results;
        this.totaltvs = response.total_results;
      }
    });
  }

  toggleDetails(TVid: number) {
    console.log(TVid);

    for (const item of this.allTvs) {
      if (item.id == TVid) {
        item.toggleDiscription = !item.toggleDiscription;
      }
    }
  }

  changeLanguage() {
    this.lang = this.lang == "en-US"? "ar-SA": "en-US";
    this.tvsservices.getAllSeries(this.currentpage, this.lang).subscribe({
      next: (response) => {
        this.allTvs = response.results;
        this.allData = this.allTvs;
      },
    });
  }
  changePage(pageData: PageEvent) {
    this.currentpage = pageData.pageIndex + 1;
    this.tvsservices.getAllSeries(this.currentpage, this.lang).subscribe({
      next: (response) => {
        this.allTvs = response.results;
        this.allData = this.allTvs;
      },
    });

  }
  searchallseries(TVtitle: string) {{
    if (TVtitle == '') {
      this.allTvs = this.allData;
    } else {
      this.allTvs = this.allTvs.filter((series) => {
        if (
          series.original_name
            .toLocaleLowerCase()
            .includes(TVtitle.toLocaleLowerCase())
        ) {
          return series;
        }
      });
    }
  }
  }


}
