let timeTrackerApp = angular.module('TimeTrackerApp', []);
//ListingApp is ng-app in index.html, 'ngRoute' goes back in brackets

//Angular client-side routing; makes nav and views work with controllers
// listingApp.config(function ($routeProvider) {
//   console.log('listingApp config in client.js loaded');

//Angular client-side routing
timeTrackerApp.service('TimeTrackerAppService', ['$http', function ($http) {
  console.log('TimeTrackerAppService is loaded');

  let self = this;

  self.addEntry = { list: [] };

  //self.sale = { list: [] };
  
  //GET entry history
  self.getEntry = function () {
    console.log('called getEntry function in client.js');
    $http.get('/addEntry').then(function (response) {
      console.log('getEntry response client.js', response);
      self.addEntry.list = response.data;
    })
  }

  //POST addEntry
  self.addEntry = function (entry) {
    console.log('called addEntry post', entry)

    $http.post('/addEntry', entry).then(function (response) {
      console.log('Entry Successfully Posted reported from client.js!');
      self.getEntry();
    }).catch(function (error) {
      console.log('ERROR IN getEntry POST says client.js', error)
    });
  };

  //GET project history
  self.getEntry = function () {
    console.log('called getEntry function in client.js');
    $http.get('/addEntry').then(function (response) {
      console.log('getEntry response client.js', response);
      self.addEntry.list = response.data;
    })
  }

  //POST addProject
  self.addEntry = function (entry) {
    console.log('called addEntry post', entry)

    $http.post('/addEntry', entry).then(function (response) {
      console.log('Entry Successfully Posted reported from client.js!');
      self.getEntry();
    }).catch(function (error) {
      console.log('ERROR IN getEntry POST says client.js', error)
    });
  };



}])


timeTrackerApp.controller('TimeTrackerAppController', ['TimeTrackerAppService',
  function (TimeTrackerAppService) {
    console.log('timeTrackerApp Controller Loaded')

    let self = this;

    let timeTrackerAppService = TimeTrackerAppService;

    //Link view to service data
    self.entry = timeTrackerAppService.entry;

    //Link view function calls to functions in service
    self.addEntry = timeTrackerAppService.addEntry;
    self.getEntry = timeTrackerAppService.getEntry;

    self.getEntry();
  }]);


  //using nav.html, determines which content to display on DOM  
//   $routeProvider
//     .when('/rent', {
//       templateUrl: '/views/rent.html',
//       controller: 'RentController as vm'
//     })
//     .when('/sale', {
//       templateUrl: '/views/sale.html',
//       controller: 'SaleController as vm'
//     })
//     .otherwise(
//       { redirectTo: '/sale' }
//     )

// });