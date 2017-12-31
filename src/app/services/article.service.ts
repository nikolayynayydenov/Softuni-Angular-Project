import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from './../../environments/environment'

const host = environment.kinvey.baseUrl
const appKey = environment.kinvey.appKey
const appSecret = environment.kinvey.appSecret
const auth = btoa(`${appKey}:${appSecret}`)
const url = `${host}/appdata/${appKey}/articles`

@Injectable()
export class ArticleService {
    constructor(private http: HttpClient) { }

    addNew(payload: Object): Observable<any> {
        return this.http.post(url, payload, {
            headers: new HttpHeaders({
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
            })
        })
    }

    getAll(): Observable<any> {
        return this.http.get(url, {
            headers: new HttpHeaders({
                'Authorization': 'Basic ' + btoa('dummy:dummy')
            })
        })
    }

    delete(id: string): Observable<any> {
        return this.http.delete(url + '/' + id, {
            headers: new HttpHeaders({
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
            })
        })
    }

    edit(id: string, payload: Object): Observable<any> {
        return this.http.put(url + '/' + id, payload, {
            headers: new HttpHeaders({
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken'),
                'Content-Type': 'application/json' 
            })
        })
    }

    getById(id: string): Observable<any> {
        return this.http.get(url + '/' + id, {
            headers: new HttpHeaders({
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
            })
        })
    }
}
