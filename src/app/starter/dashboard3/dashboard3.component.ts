import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.scss']
})
export class Dashboard3Component implements OnInit {
  datas ;
  title = 'angulardatatables';
  contactName = '';
  contactAddress = '';
  contactSource = 'direct';
  contactGender = 'male';
  isDeleted = false;
  date = new FormControl(new Date());

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
    this.httpClient.get('assets/test.json').subscribe(datas => {
      this.datas = datas;
      this.dataSource = new MatTableDataSource(this.datas);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


  public  saveContact() {
    /* Typically this method will be used to send the contact form to a server to save it*/
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


export class PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
