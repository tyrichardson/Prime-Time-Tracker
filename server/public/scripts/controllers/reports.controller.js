timeTrackerApp.controller('ReportsController', ['TimeTrackerAppService',
  function (TimeTrackerAppService) {
    console.log('reports Controller Loaded');

  const self = this;

  let timeTrackerAppService = TimeTrackerAppService;

  //Link view to service data

 self.getProject = timeTrackerAppService.getProject;

 self.getProject();

  //self.resProject = timeTrackerAppService.resProject;

  //self.reportData = timeTrackerAppService.reportData;

  self.reportNames = timeTrackerAppService.reportNames;

  self.reportSum = timeTrackerAppService.reportSum;

  self.ctx = timeTrackerAppService.ctx;

  self.myChart = timeTrackerAppService.myChart;
  
}]);

