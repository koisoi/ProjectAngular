import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

export interface Event {
    title: string,
    info?: string,
    date: string,
    img: string,
    id: number
}

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

    constructor(private service: DatabaseService) { }

    events: Event[] = [];
    page: number = 1;
    maxPage: number = 0;
    eventsByPage: number = 5;

    ngOnInit(): void {
        this.service.get_events().subscribe(value => {
            let values: any = value;
            if (values.response) {
                this.events = values.items;
                this.maxPage = Math.ceil(this.events.length / this.eventsByPage)
            }
        })
    }

}
