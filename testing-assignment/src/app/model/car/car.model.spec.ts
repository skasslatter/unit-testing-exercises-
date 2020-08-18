import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Car} from './car.model';

describe('Car', () => {
  let newCar: Car;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Car
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    newCar = new Car(
      'Audi',
      'A3',
      2015,
      4,
    );
  });

  it('should return the correct description', () => {
    expect(newCar.description()).toEqual(`This is a Audi A3 from 2015 and it has 4 wheels`);
  });

  it('should return the correct age', () => {
    expect(newCar.getAge(newCar.year)).toEqual(5);
  });

  afterEach(() => {
    newCar = null;
  });
});


// getWheels
// it does not make too much sense to test it
// it only returns one simple value and will probably never run require more complicated logic

