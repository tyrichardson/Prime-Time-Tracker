timeTrackerApp.controller('ReportsController', ['TimeTrackerAppService',
  function (TimeTrackerAppService) {
    console.log('reports Controller Loaded')

    let self = this;

    let timeTrackerAppService = TimeTrackerAppService;

    //Link view to service data
    self.reports = timeTrackerAppService.reports;
    //self.ctx = timeTrackerAppService.ctx;

    //Link view function calls to functions in service
    //self.myChart = timeTrackerAppService.myChart;

  }]);