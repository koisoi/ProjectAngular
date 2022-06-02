import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

export interface Student {
    name: string,
    img: string,
    id: number
}

@Component({
    selector: 'app-outstanding-students',
    templateUrl: './outstanding-students.component.html',
    styleUrls: ['./outstanding-students.component.scss']
})
export class OutstandingStudentsComponent implements OnInit {

    constructor(private service: DatabaseService) { }

    students1: Student[] = [];
    students2: Student[] = [];

    ngOnInit(): void {
        this.service.get_outstandingstudents().subscribe(value => {
            let values: any = value;
            if (values.response) {
                this.students1 = values.items;
                this.students2 = values.items;
            }
        })
    }
}
