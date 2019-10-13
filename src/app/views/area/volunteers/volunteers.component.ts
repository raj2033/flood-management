import { Component, OnInit } from '@angular/core';
import { IAreaAction } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {
  dataSource: IAreaAction[] = [];
  displayedColumns: string[] = ['Name', 'Location', 'Contact'];
  constructor(private areaService: AreaService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.parent.params.subscribe(param => {
      this.areaService
        .getVolunteers(param.areaId)
        .subscribe((data: IAreaAction[]) => (this.dataSource = data));
    });
  }
}
