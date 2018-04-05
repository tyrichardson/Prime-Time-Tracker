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

  self.addProject = { list: [] };
  
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
      console.log('ERROR IN postEntry says client.js', error)
    });
  };

  //GET project history
  self.getProject = function () {
    console.log('called getProject function in client.js');
    $http.get('/manageProjects').then(function (response) {
      console.log('getProject response client.js', response);
      self.addProject.list = response.data;
    })
  }

  //POST addProject
  self.addProject = function (entry) {
    console.log('called addProject post', entry)

    $http.post('/manageProjects', entry).then(function (response) {
      console.log('Project Successfully Posted reported from client.js!');
      self.getProject();
    }).catch(function (error) {
      console.log('ERROR IN addProject says client.js', error)
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
    self.addProject = timeTrackerAppService.addProject;
    self.getProject = timeTrackerAppService.getProject;

    self.getEntry();
    self.getProject();
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