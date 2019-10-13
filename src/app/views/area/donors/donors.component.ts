import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IAreaAction } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.scss']
})
export class DonorsComponent implements OnInit {
  dataSource: IAreaAction[] = [];
  displayedColumns: string[] = ['Name', 'Qty', 'Item(s)', 'Location', 'Contact'];
  constructor(private areaService: AreaService) {}

  ngOnInit() {
    this.areaService.getDonations().subscribe((data: IAreaAction[]) => (this.dataSource = data));
  }
}
