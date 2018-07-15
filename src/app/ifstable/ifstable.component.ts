import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { IFSTableDataSource } from './ifstable-datasource';

@Component({
  selector: 'ifstable',
  templateUrl: './ifstable.component.html',
  styleUrls: ['./ifstable.component.css']
})
export class IFSTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: IFSTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new IFSTableDataSource(this.paginator, this.sort);
  }
}
