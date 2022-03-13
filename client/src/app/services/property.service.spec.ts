import { TestBed } from '@angular/core/testing';
import { PropertyModel } from '../models/property.model';
import { PropertyComponent } from '../modules/registry/property/property.component';

import { PropertyService } from './property.service';

fdescribe('PropertyService', () => {
  
  beforeEach(() => 
  TestBed.configureTestingModule({}));
  

  it('should be created', () => {
    const service: PropertyService = TestBed.get(PropertyService);
    expect(service).toBeTruthy();
  });
  it('should be changed', () => {
    const service: PropertyService = TestBed.get(PropertyService);
    expect(service.updateProperty('a','a','a','a','a','a','a','a','a','a')).toBeTruthy();
  });
  
  
});

