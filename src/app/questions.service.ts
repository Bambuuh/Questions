import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionsService {

    private entryPointLoaded = false;
    private apiUrl = 'https://polls.apiblueprint.org';
    public entryPoint: string;

    constructor(private httpClient: HttpClient) {
        this.setEntryPoint();
    }

    public isEntryPointLoaded() {
        return !!this.entryPoint;
    }

    private setEntryPoint() {
        this.httpClient
            .get(this.apiUrl)
            .subscribe( (data: { questions_url: string, url: string } ) => this.entryPoint = data.questions_url);
    }

    public getGuestions() {
        return this.httpClient.get(`${this.apiUrl}${this.entryPoint}?page=1`, {observe: 'response'});
    }

    public get(url: string) {
        return this.httpClient.get(`${this.apiUrl}${url}`);
    }

    public post(url: string, params: Object) {
        return this.httpClient.post(`${this.apiUrl}${url}`, params);
    }
}
