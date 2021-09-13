import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';
import {ChartComponent, AccumulationChartComponent} from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { dataGrid } from './data-source';

/**

 * Default  component
 */
@Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public dataGrid: object[];

    @ViewChild('default_dashboard')
    public dashboard: DashboardLayoutComponent;
    @ViewChild('chart')
    public chart: ChartComponent;
     @ViewChild('pieChart')
    public pieChart: AccumulationChartComponent;
        @ViewChild('donut_chart')
    public donut_chart: AccumulationChartComponent;
            @ViewChild('bar_Chart')
    public bar_Chart: ChartComponent;
    constructor() {
        
    }
     public piechart: any[] = [{ x: 'TypeScript', y: 13, text: 'TS 13%' }, { x: 'React', y: 12.5, text: 'Reat 12.5%' },{ x: 'MVC', y: 12, text: 'MVC 12%' },{ x: 'Core', y: 12.5, text: 'Core 12.5%' },{ x: 'Vue', y: 10, text: 'Vue 10%' },{ x: 'Angular', y: 40, text: 'Angular 40%' }];
    public count: number = 8;
    public cellSpacing: number[] = [10, 10];
    public primaryXAxis: Object;
    public chartData: Object[];
    ngOnInit(): void {
        // Data for chart series
        this.dataGrid = dataGrid;
        this.chartData = [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ];
        this.primaryXAxis = {
            valueType: 'Category'
        };
    }
     public donut_data: Object[] = [{ x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
    { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
    { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
    { x: 'Insurance', y: 16, text: '16%' }];
    //Initializing Legend
    public legendSettings1: Object = {
        visible: true,
        position: 'Top'
    };
      public data: Object[] = [
        { x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }
    ];
    public data1: Object[] = [
        { x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }
    ];
    public data2: Object[] = [
        { x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }
    ];
    //Initializing Primary X Axis

    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
    };
    public marker: Object = { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
    public title: string = 'Olympic Medal Counts - RIO';
    public tooltip: Object = {
        enable: true
    };
    //Initializing DataLabel
    public dataLabel: Object = {
        visible: true,
        name: 'text',
        position: 'Inside',
        font: {
            fontWeight: '600',
            color: '#ffffff'
        }
    };
    create() {
      this.chart.refresh();
      this.pieChart.refresh();
      this.donut_chart.refresh();
      this.bar_Chart.refresh();

    }
   
}