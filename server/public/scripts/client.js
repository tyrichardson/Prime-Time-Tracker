const timeTrackerApp = angular.module('TimeTrackerApp', ['ngRoute']);

timeTrackerApp.config(['$routeProvider', function ($routeProvider) {
  console.log('route config in client.js loaded');

  //using nav.html, determines which content to display on DOM  
  $routeProvider
    .when('/', {
      redirectTo: '/addEntry'
    })
    .when('/addEntry', {
      templateUrl: 'views/addEntry.html',
      controller: 'AddEntryController as vm'
    })
    .when('/manageProjects', {
      templateUrl: 'views/manageProjects.html',
      controller: 'ManageProjectsController as vm'
    })
    .when('/reports', {
      templateUrl: 'views/reports.html',
      controller: 'ReportsController as vm'
    })
    .otherwise({ template: '<h1>404</h1>' });
}]);