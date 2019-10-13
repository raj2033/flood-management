import { Component, OnInit } from '@angular/core';
import { IAreaAction } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-help',
  templateUrl: './request-help.component.html',
  styleUrls: ['./request-help.component.scss']
})
export class RequestHelpComponent implements OnInit {
  dataSource: IAreaAction[] = [];
  displayedColumns: string[] = ['Name', 'Contact', 'Help'];
  constructor(private areaService: AreaService, private route: ActivatedRoute) {}

  ngOnInit() {
    const areaId = parseInt(window.location.href.split('/')[4], 10);
    this.areaService
      .getRequests(areaId)
      .subscribe((data: IAreaAction[]) => (this.dataSource = data));
  }
}
