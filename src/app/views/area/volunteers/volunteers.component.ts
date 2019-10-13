import { Component, OnInit } from '@angular/core';
import { IAreaAction } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {
  dataSource: IAreaAction[] = [];
  displayedColumns: string[] = ['Name', 'Qty', 'Item(s)', 'Location', 'Contact'];
  constructor(private areaService: AreaService) {}

  ngOnInit() {
    this.areaService.getRequests().subscribe((data: IAreaAction[]) => (this.dataSource = data));
  }
}
