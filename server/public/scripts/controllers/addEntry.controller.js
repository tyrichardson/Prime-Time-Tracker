timeTrackerApp.controller('AddEntryController', ['TimeTrackerAppService',
  function (TimeTrackerAppService) {
    console.log('timeTrackerApp Controller Loaded');

    const self = this;

    let timeTrackerAppService = TimeTrackerAppService;

    //Link view to service data
    self.entry = timeTrackerAppService.entry;
    self.addProject = timeTrackerAppService.addProject;

    //Link view function calls to functions in service
    self.addEntry = timeTrackerAppService.addEntry;
    self.getEntry = timeTrackerAppService.getEntry;
    self.deleteEntry = timeTrackerAppService.deleteEntry;
  }]);