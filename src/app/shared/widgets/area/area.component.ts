import { Component, OnInit,Input,HostListener } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  //@Input() data: any = [];

  

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'All Branches'
      },
      xAxis: {
          categories: ['2018', '2019', '2020', '2021', '2022']
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Banglore Office',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Mumbai Office',
          data: [2, -2, -3, 2, 1]
      }, {
          name: 'Chennai Office',
          data: [3, 4, 4, -2, 5]
      }]
  }
  HC_exporting(Highcharts);
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
}



}

