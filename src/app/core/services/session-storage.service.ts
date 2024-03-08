import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SessionStorageSerivce {
  public setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): any {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }

  public removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
