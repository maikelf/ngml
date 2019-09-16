import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StorageService } from './storage.service';

import { Dataset } from './dataset';
import tenant from '../shared/test-data/tenant';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private http: HttpClient, private storage: StorageService) { }

  async list() {
    if (this.storage.checkInStorage('datasets')) {
      return this.storage.getFromStorage('datasets');
    } else {
      const datasets = await this.http.get(`/ml/${tenant.id}/datasets`)
      .toPromise()
      .then((res: any) => {
        return res._embedded.datasets;
      });
      this.storage.setIntoStorage('datasets', datasets);
      return datasets;
    }
  }
}
