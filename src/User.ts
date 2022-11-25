import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.color = faker.color.human();
    this.location = {
      lat: parseFloat(faker.address.latitude()), //  parseFloat() js-функция кот. переводит стр знач в числовое
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
    <div class='test' style='color: ${this.color}'>
      User name: ${this.name}
    </div>
    `
  }
}