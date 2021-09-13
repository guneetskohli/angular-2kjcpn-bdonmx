import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

import { MapsAllModule } from '@syncfusion/ej2-angular-maps';

import {
  ChartAllModule,
  AccumulationChartAllModule,
  RangeNavigatorAllModule
} from '@syncfusion/ej2-angular-charts';

import {
  TextBoxModule,
  NumericTextBoxModule
} from '@syncfusion/ej2-angular-inputs';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

import {
  CheckBoxModule,
  ButtonAllModule
} from '@syncfusion/ej2-angular-buttons';

import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

import { AppComponent } from '../app.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NumericTextBoxModule,
    MapsAllModule,
    AutoCompleteModule,
    DashboardLayoutModule,
    CheckBoxModule,
    SidebarModule,
    ButtonAllModule,
    TextBoxModule,
    ChartAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule,
    BrowserModule,
    GridModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService],
  bootstrap: [AppComponent]
})
export class AppModule {}
