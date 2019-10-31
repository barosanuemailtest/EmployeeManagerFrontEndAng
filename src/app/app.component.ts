import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './Model/Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeManagerFrontEndAng';

  employees: Employee[];

  constructor(private dataService: DataService) { }

  getEmployees(Url: string) {
    this.dataService.getEmployees(Url).subscribe(
      employeesResponse => {
        this.employees = employeesResponse;
      }
    );
  }
}
