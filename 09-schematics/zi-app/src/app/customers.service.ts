import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class CustomersService {
 apiUrl = '/api';

 constructor(private http: HttpClient) { }

    create(obj) {
    return this.http.post(this.apiUrl, obj);
    }
    read() {
    return this.http.get(this.apiUrl);
    }
    update(obj) {
    return this.http.put(this.apiUrl, obj);
    }
    delete(id) {
    return this.http.delete(this.apiUrl + id);
    }
}