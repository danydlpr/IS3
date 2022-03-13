import { PropertyModel } from './property.model';

export class RequestModel {
    _id?: String;
    requestDate: Date;
    status?: String;
    property: PropertyModel;
    customerId: String;
    request?: RequestModel;

}