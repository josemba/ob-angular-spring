import { Component, OnInit } from '@angular/core';
import { HelloService } from '../_services/hello.service';
import { CarsService } from '../_services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hello?: string;
  cars?: any[];
  message?: any;

  constructor(private helloService: HelloService, private carsService: CarsService) { }

  ngOnInit(): void {
    // test hello world controller
    this.helloService.helloWorld().subscribe(
      data => {
        this.hello = data;
      },
      err => {
        this.message = err;
      }
    );

    // test car controller
    this.carsService.findAll().subscribe(
      data => {
        this.cars = data;
      },
      err => {
        this.cars = [];
        this.message = err.message;
      }
    );


  }
}
