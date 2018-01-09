import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from './../../../environments/environment'
import { AuthService } from './auth.service'

const host = environment.kinvey.baseUrl
const appKey = environment.kinvey.appKey
const appSecret = environment.kinvey.appSecret
const auth = btoa(`${appKey}:${appSecret}`)
const url = `${host}/appdata/${appKey}/articles`

@Injectable()
export class ArticleService {
    constructor(
        private http: HttpClient
    ) { }

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

    getAllFromUser(id: string): Observable<any> {
        let u = `${url}/?query={"_acl.creator":"${id}"}`
        return this.http.get(u, {
            headers: new HttpHeaders({
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
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

    articleBelongsToCurrentUser(article: object): boolean {
        return article['_acl']['creator'] === sessionStorage.getItem('userId')
    }

    getById(id: string): Observable<any> {
        return this.http.get(url + '/' + id, {
            headers: new HttpHeaders({
                'Authorization': 'Basic ' + btoa(`dummy:dummy`)
            })
        })
    }
}
