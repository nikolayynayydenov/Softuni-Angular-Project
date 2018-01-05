import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from './../../../environments/environment'

const appKey = environment.kinvey.appKey
const url = `${environment.kinvey.baseUrl}/user/${appKey}`

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    update(id: string, payload: Object): Observable<Object> {
        return this.http.put(url + '/' + id, JSON.stringify(payload), {
            headers: new HttpHeaders({
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken'),
                'Content-Type': 'application/json'
            })
        })
    }
}
