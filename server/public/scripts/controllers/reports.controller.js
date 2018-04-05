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
    self.deleteEntry = timeTrackerAppService.deleteEntry;
    self.addProject = timeTrackerAppService.addProject;
    self.getProject = timeTrackerAppService.getProject;
    self.deleteProject = timeTrackerAppService.deleteProject;