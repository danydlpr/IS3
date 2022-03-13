import { UserModel } from './user.model';

export class PropertyModel{
    _id?: String;
    department: String;
    city: String;
    address: String;
    price: String;
    type: string;
    offerType: string;
    sellerName: String;
    contactSeller: String;
    photography: String;
    description: String;
    status?: String;
    property?: PropertyModel;
}