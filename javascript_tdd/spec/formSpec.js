describe('Testing Routes', function () {

beforeEach(module('BookingApp'));

it('Should test routes',
inject(function ($route) {

  expect($route.routes['/'].controller).toBe('');
  expect($route.routes['/'].templateUrl).toEqual('templates/Home.html');

  expect($route.routes['/templates/Booking'].controller).toBe('BookingController');
  expect($route.routes['/templates/Booking'].templateUrl).toEqual('templates/Booking.html');

  expect($route.routes['/templates/Photos'].controller).toBe('');
  expect($route.routes['/templates/Photos'].templateUrl).toEqual('templates/Photos.html');

  expect($route.routes['/templates/Performances'].controller).toBe('');
  expect($route.routes['/templates/Performances'].templateUrl).toEqual('templates/Performances.html');

}));

});