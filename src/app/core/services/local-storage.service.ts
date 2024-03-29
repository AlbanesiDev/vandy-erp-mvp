import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageSerivce {
  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): any {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
