timeTrackerApp.controller('MangageProjectsController', ['TimeTrackerAppService',
  function (TimeTrackerAppService) {
    console.log('manageProjects Controller Loaded')

    let self = this;

    let timeTrackerAppService = TimeTrackerAppService;

    //Link view to service data
    self.project = timeTrackerAppService.project;

    //Link view function calls to functions in service
    self.addProject = timeTrackerAppService.addProject;
    self.getProject = timeTrackerAppService.getProject;
    self.deleteProject = timeTrackerAppService.deleteProject;
  }]);