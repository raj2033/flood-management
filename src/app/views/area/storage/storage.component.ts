import { Component, OnInit } from '@angular/core';
import { IStorage, IStorageList } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  storages: IStorageList[] = [];
  items: IStorage[] = [];

  displayedColumns = ['Item Name', 'Item Quantity'];
  constructor(private areaService: AreaService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.parent.params.subscribe(param => {
      this.areaService.getAllStorages(param.areaId).subscribe(data => (this.storages = data));
    });
  }

  planelOpened(storageId: number) {
    this.areaService.getStorageData(storageId).subscribe(data => (this.items = data));
  }
}
