import { AreaService } from './../../services/area.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface Location {
  latitude: number;
  locationId: number;
  locationName: string;
  longitude: number;
}

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  areaForm: FormGroup;
  options: any;
  filteredOptions: Observable<Location[]>;
  constructor(private areaService: AreaService) {
    this.areaService.getAllArea().subscribe(data => {
      this.options = data;
      this.filteredOptions = this.areaForm.get('area').valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : value.locationName)),
        map(locationName => (locationName ? this._filter(locationName) : this.options.slice()))
      );
    });
  }

  ngOnInit() {
    this.areaForm = new FormGroup({
      area: new FormControl('')
    });
  }

  displayFn(location?: Location): string | undefined {
    return location ? location.locationName : undefined;
  }

  private _filter(name: string): Location[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      option => option.locationName.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
