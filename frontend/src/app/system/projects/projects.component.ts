import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

export interface Project {
    title: string,
    info: string,
    img: string,
    id: number,
    author_id: number
}

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    scrolled: boolean = false;
    selectedYear: number = 2022;


    @HostListener('window:scroll', ['$event']) onScroll(e: Event) {
        if (window.pageYOffset >= 400) {
            this.scrolled = true;
        }
        else {
            this.scrolled = false;
        };
    }

    constructor(private scroll: ViewportScroller,
        private service: DatabaseService) { }

    projects: Project[] = [];

    ngOnInit(): void {
        this.service.get_projects().subscribe(value => {
            let values: any = value;
            if (values.response) {
                this.projects = values.items;
            }
        })
    }

    scrollToTop(): void {
        this.scroll.scrollToPosition([0, 0]);
    }

    yearSelect(year: number) {
        this.selectedYear = year;
    }
}
