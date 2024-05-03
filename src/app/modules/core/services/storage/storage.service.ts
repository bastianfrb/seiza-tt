import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    public saveLocal(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value)); 
    }

    public deleteLocal(key: string): void {
        localStorage.removeItem(key);
    }

    public getLocal(key: string): any {
        const value: any = localStorage.getItem(key);
        return JSON.parse(value);
    }

    public saveSession(key: string, value: any): void {
        sessionStorage.setItem(key, JSON.stringify(value)); 
    }

    public deleteSession(key: string): void {
        sessionStorage.removeItem(key);
    }

    public getSession(key: string): any {
        const value: any = sessionStorage.getItem(key);
        return JSON.parse(value);
    }
}