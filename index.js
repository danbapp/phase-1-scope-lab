var customerName = 'bob';

function upperCaseCustomerName(){
  return customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 1;

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 2;
}