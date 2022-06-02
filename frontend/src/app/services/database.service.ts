import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    constructor(private http: HttpClient) { }

    get_news() {
        const response = this.http.get('http://127.0.0.1:5000/get-news');
        return response
    }

    get_success() {
        const response = this.http.get('http://127.0.0.1:5000/get-success');
        return response
    }

    get_aboutprojectslider() {
        const response = this.http.get('http://127.0.0.1:5000/get-aboutprojectslider');
        return response
    }

    get_branches() {
        const response = this.http.get('http://127.0.0.1:5000/get-branches');
        return response
    }

    get_creativity() {
        const response = this.http.get('http://127.0.0.1:5000/get-creativity');
        return response
    }

    get_departaments() {
        const response = this.http.get('http://127.0.0.1:5000/get-departaments');
        return response
    }

    get_documents() {
        const response = this.http.get('http://127.0.0.1:5000/get-documents');
        return response
    }

    get_events() {
        const response = this.http.get('http://127.0.0.1:5000/get-events');
        return response
    }

    get_groups() {
        const response = this.http.get('http://127.0.0.1:5000/get-groups');
        return response
    }

    get_history() {
        const response = this.http.get('http://127.0.0.1:5000/get-history');
        return response
    }

    get_institutes() {
        const response = this.http.get('http://127.0.0.1:5000/get-institutes');
        return response
    }

    get_invitedstudents() {
        const response = this.http.get('http://127.0.0.1:5000/get-invitedstudents');
        return response
    }

    get_mainevent() {
        const response = this.http.get('http://127.0.0.1:5000/get-mainevent');
        return response
    }

    get_mainhistory() {
        const response = this.http.get('http://127.0.0.1:5000/get-mainhistory');
        return response
    }

    get_mainslider() {
        const response = this.http.get('http://127.0.0.1:5000/get-mainslider');
        return response
    }

    get_mainstatistic() {
        const response = this.http.get('http://127.0.0.1:5000/get-mainstatistic');
        return response
    }

    get_managments() {
        const response = this.http.get('http://127.0.0.1:5000/get-managment');
        return response
    }

    get_managmentwithphoto() {
        const response = this.http.get('http://127.0.0.1:5000/get-managmentwithphoto');
        return response
    }

    get_meetingeventsslider() {
        const response = this.http.get('http://127.0.0.1:5000/get-meetingeventsslider');
        return response
    }

    get_meetingevents() {
        const response = this.http.get('http://127.0.0.1:5000/get-meetingevents');
        return response
    }

    get_outstandingstudents() {
        const response = this.http.get('http://127.0.0.1:5000/get-outstandingstudents');
        return response
    }

    get_projects() {
        const response = this.http.get('http://127.0.0.1:5000/get-projects');
        return response
    }

    get_specialities() {
        const response = this.http.get('http://127.0.0.1:5000/get-specialities');
        return response
    }

    get_stories() {
        const response = this.http.get('http://127.0.0.1:5000/get-stories');
        return response
    }

    get_users() {
        const response = this.http.get('http://127.0.0.1:5000/get-users');
        return response
    }

    invite_groupmate(formData: any): Observable<Object> {
        const response: any = this.http.get(`http://127.0.0.1:5000/invite-groupmate?name=${formData.name}&familyname=${formData.familyname}&patronymic=${formData.patronymic}&institute=${formData.institute}&department=${formData.department}&speciality=${formData.speciality}&groups=${formData.group}&year=${formData.year}&email=${formData.email}&phone=${formData.phone}&address=${formData.address}`);
        return response;
    }
}
