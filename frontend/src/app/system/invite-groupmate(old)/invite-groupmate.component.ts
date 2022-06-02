import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

export interface InvitedStudent {
    name: string;
    familyname: string;
    patronymic: string;
    institute: string;
    department: string;
    speciality: string;
    group: string;
    year: number;
    email: string;
    phone: string;
    address: string;
    id: number;
}

@Component({
    selector: 'app-invite-groupmate',
    templateUrl: './invite-groupmate.component.html',
    styleUrls: ['./invite-groupmate.component.scss']
})
export class InviteGroupmateComponent implements OnInit {

    constructor(private service: DatabaseService) { }

    form: FormGroup = new FormGroup({});
    institutes: any[] = [];
    departments: any[] = [];
    specialities: any[] = [];
    groups: any[] = [];

    ngOnInit(): void {
        this.form = new FormGroup({
            'name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
            'familyname': new FormControl(null, [Validators.required, Validators.minLength(2)]),
            'patronymic': new FormControl(null, [Validators.minLength(2)]),
            'institute': new FormControl(null),
            'department': new FormControl(null),
            'speciality': new FormControl(null),
            'group': new FormControl(null),
            'year': new FormControl(null),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'phone': new FormControl(null),
            'address': new FormControl(null),
        })

        this.service.get_institutes().subscribe(value => {
            let values: any = value;
            if (values.response) {
                this.institutes = values.items
            }
        })

        this.service.get_departaments().subscribe(value => {
            let values: any = value;
            if (values.response) {
                this.departments = values.items;
            }
        })

        this.service.get_specialities().subscribe(value => {
            let values: any = value;
            if (values.response) {
                this.specialities = values.items;
            }
        })

        this.service.get_groups().subscribe(value => {
            let values: any = value;
            if (values.response) {
                this.groups = values.items
            }
        })
    }

    async onSubmit() {
        const formData = this.form.value;

        if (!formData.name) return alert('Поле "Имя" обязательно для заполнения.');
        if (!formData.familyname) return alert('Поле "Фамилия" обязательно для заполнения.');
        if (!formData.email) return alert('Поле "Email" обязательно для заполнения.');
        if (formData.name.length < 2) return alert('Имя должно быть не меньше двух символов.');
        if (formData.familyname.length < 2) return alert('Фамилия должна быть не меньше двух символов.');
        if (formData.patronymic?.length < 2) return alert('Отчество должно быть не меньше двух символов.');
        if (!formData.email.includes('@') || !formData.email.includes('.')) return alert('Поле "Email" обязательно для заполнения.');

        this.service.invite_groupmate(formData).subscribe(value => {
            let values: any = value;
            if (values.response) {
                alert('Приглашение успешно отослано!');
                this.form.reset();
            }
            else alert('Произошла ошибка!');
        });
    }

}
