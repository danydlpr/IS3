import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOTPipe } from 'src/app/select-ot.pipe';
import { SelectPipe } from 'src/app/select.pipe';
import { FilterPipe } from 'src/app/filter.pipe';
import { SelectRequestOTPipe } from 'src/app/select-request-ot.pipe';
import { SelectRequestPipe } from 'src/app/select-request.pipe';
import { SelectRequestDepPipe } from 'src/app/select-request-dep.pipe';
import { SelectRequestCityPipe } from 'src/app/select-request-city.pipe';



@NgModule({
  declarations: [SelectOTPipe, SelectPipe, FilterPipe, SelectRequestOTPipe, 
    SelectRequestPipe, SelectRequestDepPipe, SelectRequestCityPipe ],
  imports: [
    CommonModule
  ],
  exports:      [ SelectOTPipe, SelectPipe, FilterPipe, SelectRequestOTPipe,
     SelectRequestPipe, SelectRequestDepPipe, SelectRequestCityPipe ]
})
export class SharedModuleModule { }
