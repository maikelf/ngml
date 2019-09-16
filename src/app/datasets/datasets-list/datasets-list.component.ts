import { Component, OnInit } from '@angular/core';
import { DatasetService } from '../../services/datasets.service';

@Component({
  selector: 'app-datasets-list',
  templateUrl: './datasets-list.component.html',
  styleUrls: ['./datasets-list.component.css']
})
export class DatasetsListComponent implements OnInit {

  public datasets: Array<any>;

  constructor(private dataService: DatasetService) {
    this.datasets = [];
  }

  ngOnInit() {
    this.getDatasetsList();
  }

  async getDatasetsList() {
    this.datasets = await this.dataService.list();
    console.log(this.datasets);
  }

}
