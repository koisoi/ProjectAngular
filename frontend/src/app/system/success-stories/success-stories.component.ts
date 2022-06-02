import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

export interface Story {
    title: string,
    info: string,
    img: string,
    id: number,
    author_id: number
}

@Component({
    selector: 'app-success-stories',
    templateUrl: './success-stories.component.html',
    styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent implements OnInit {

    constructor(private service: DatabaseService) { }

    stories: Story[] = []
    page: number = 1;
    maxPage: number = 0;
    storiesByPage: number = 4;

    ngOnInit(): void {
        this.service.get_stories().subscribe(value => {
            let values: any = value;
            if (values.response) {
                this.stories = values.items;
                this.maxPage = Math.ceil(this.stories.length / this.storiesByPage);
            }
        })
    }

}
