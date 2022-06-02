import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

export interface News {
    title: string,
    img: string,
    category: string,
    type: string,
    date: string,
    id: number,
    info?: string
}

@Component({
    selector: 'app-university-success',
    templateUrl: './university-success.component.html',
    styleUrls: ['./university-success.component.scss']
})
export class UniversitySuccessComponent implements OnInit {
    news: News[] = [];
    page: number = 1;
    maxPage: number = 0;
    newsByPage: number = 9;

    constructor(private service: DatabaseService) { }

    ngOnInit(): void {
        this.service.get_success().subscribe(value => {
            let values: any = value;
            if (values.response) {
                this.news = values.items
                this.maxPage = Math.ceil(this.news.length / this.newsByPage);
            }
        })
    }

}
