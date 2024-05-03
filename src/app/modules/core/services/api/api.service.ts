import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

    public post(path: string, params?: any): Observable<any> {
        let baseUrl = this.baseUrl;
        if (path === 'login') {
            baseUrl = baseUrl.replace('/api', '');
        }

        return this.http.post(`${baseUrl}/${path}`, params);
    }

    public put(path: string, params?: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/${path}`, params);
    }

    public delete(path: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${path}`);
    }

    public patch(path: string, params?: any): Observable<any> {
        return this.http.patch(`${this.baseUrl}/${path}`, params);
    }
}