import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders } from '@angular/common/http'


const host = environment.kinvey.baseUrl
const appKey = environment.kinvey.appKey
const appSecret = environment.kinvey.appSecret
const auth = btoa(`${appKey}:${appSecret}`)
const url = `${host}/user/${appKey}`

// TODO: use interceptors

@Injectable()
export class AuthService {
    public currentAuthToken: string
    public currentUser: Object
    constructor(private http: HttpClient) {}

    register(payload: Object): Observable<any> {
        return this.http.post(url, JSON.stringify(payload), {
            headers: new HttpHeaders()
                .set('Authorization', 'Basic ' + auth)
                .set('Content-Type', 'application/json'),
        })
    }

    login(payload: Object): Observable<any> {
        return this.http.post(url + '/login', JSON.stringify(payload), {
            headers: new HttpHeaders()
                .set('Authorization', 'Basic ' + auth)
                .set('Content-Type', 'application/json')
        })
    }

    isUserLogged(): boolean {
        let isLogged = this.currentAuthToken === sessionStorage.getItem('authToken')
        return isLogged
    }

    isUserAdmin(): boolean {
        return this.isUserLogged() && this.currentUser['isAdmin']
    }

    logout(): void {
        // This should be a promise
        sessionStorage.clear()
    }
}
