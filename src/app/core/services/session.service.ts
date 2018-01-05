import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'


@Injectable()
export class SessionService {
    public session: Subject<string>
    constructor() {
        this.session = new Subject<string>()
    }

    setVal(key: string, value: string): void {
        this.session.next(value)
        sessionStorage.setItem(key, value)
    }

    getVal(key: string): string {
        return sessionStorage.getItem(key)
    }
}
