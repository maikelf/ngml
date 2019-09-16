import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  checkInStorage(key) {
    return sessionStorage.getItem(key) ? true : false;
  }

  getFromStorage(key) {
    return JSON.parse(sessionStorage.getItem(key)).value;
  }

  setIntoStorage(key, Obj) {
    const value = {
      lastUpate: new Date().getTime(),
      value: Obj
    };
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}
