timeTrackerApp.controller('ReportsController', ['TimeTrackerAppService',
  function (TimeTrackerAppService) {
    console.log('reports Controller Loaded')

    let self = this;

    let timeTrackerAppService = TimeTrackerAppService;

    //Link view to service data
    self.reports = timeTrackerAppService.reports;

    //Link view function calls to functions in service
  }]);