import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = 'http://localhost';
const PORT = '8080';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private baseUrl = `${URL}:${PORT}`;

    constructor(private http: HttpClient) {}

    public get(path: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${path}`);
    }
}