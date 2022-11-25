import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  jobDescriptor: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.companyName = faker.name.firstName();
    this.jobDescriptor = faker.name.jobDescriptor();
    this.location = {
      lat: parseFloat(faker.address.latitude()), //  parseFloat() js-функция кот. переводит стр знач в числовое
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
    <div style='color: ${this.color}'>
      <h1>companyName name: ${this.companyName}</h1>
      <span>jobDescriptor name: ${this.jobDescriptor}</span>
    </div>
    `
  }
}