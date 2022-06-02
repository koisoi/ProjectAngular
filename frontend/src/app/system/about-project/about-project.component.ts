import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
    selector: 'app-about-project',
    templateUrl: './about-project.component.html',
    styleUrls: ['./about-project.component.scss']
})
export class AboutProjectComponent implements OnInit {

    constructor(private service: DatabaseService) { }

    slider_imgs: any[] = [];

    ngOnInit(): void {
        this.service.get_aboutprojectslider().subscribe(value => {
            let values: any = value;
            if (values.response) {
                this.slider_imgs = values.items;
            }
        })
    }

}
