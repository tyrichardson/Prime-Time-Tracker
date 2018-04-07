timeTrackerApp.controller('ManageProjectsController', ['TimeTrackerAppService',
  function (TimeTrackerAppService) {
    console.log('manageProjects Controller Loaded')

    const self = this;

    let timeTrackerAppService = TimeTrackerAppService;

    //Link view to service data
    self.project = timeTrackerAppService.project;
    self.entry = timeTrackerAppService.entry;

    //Link view function calls to functions in service
    self.addProject = timeTrackerAppService.addProject;
    self.getProject = timeTrackerAppService.getProject;
    self.deleteProject = timeTrackerAppService.deleteProject;

  }]);