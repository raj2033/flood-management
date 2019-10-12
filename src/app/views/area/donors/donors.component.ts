import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.scss']
})
export class DonorsComponent implements OnInit {
  dataSource = [
    { qty: 1, name: 'Hydrogen', item: 1.0079, location: 'H', contact: 9999999999 },
    { qty: 2, name: 'Helium', item: 4.0026, location: 'He', contact: 9999999999 },
    { qty: 3, name: 'Lithium', item: 6.941, location: 'Li', contact: 9999999999 },
    { qty: 4, name: 'Beryllium', item: 9.0122, location: 'Be', contact: 9999999999 },
    { qty: 5, name: 'Boron', item: 10.811, location: 'B', contact: 9999999999 },
    { qty: 6, name: 'Carbon', item: 12.0107, location: 'C', contact: 9999999999 },
    { qty: 7, name: 'Nitrogen', item: 14.0067, location: 'N', contact: 9999999999 },
    { qty: 8, name: 'Oxygen', item: 15.9994, location: 'O', contact: 9999999999 },
    { qty: 9, name: 'Fluorine', item: 18.9984, location: 'F', contact: 9999999999 },
    { qty: 10, name: 'Neon', item: 20.1797, location: 'Ne', contact: 9999999999 }
  ];
  displayedColumns: string[] = ['Name', 'Qty', 'Item(s)', 'Location', 'Contact'];
  constructor() {}

  ngOnInit() {}
}
