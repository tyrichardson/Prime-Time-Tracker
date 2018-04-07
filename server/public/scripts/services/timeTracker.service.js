timeTrackerApp.service('TimeTrackerAppService', ['$http', function ($http) {
  console.log('TimeTrackerAppService is loaded');

  let self = this;

  self.addEntry = { list: [] };

  self.addProject = { list: [] };

  //GET getEntry populates entry history
  self.getEntry = function () {
    console.log('called getEntry function in service');
    $http({
      method: 'GET',
      url:'/addEntry'
    }).then((response) => {
      console.log('getEntry response from service', response);
      self.addEntry.list = response.data;
    })
    .catch((error) => {
      console.log('getEntry error in service', error);
    });
  }

  //POST addEntry adds task to list
  self.addEntry = function (entry) {
    console.log('called addEntry POST in service', entry);
    $http({
      method: 'POST',
      url: '/addEntry',
      data: entry
    }).then((response) => {
      console.log('Success addEntry POST from service', response);
      self.getEntry();
    })
      .catch((error) => {
        console.log('post addEntry error in service', error)
      });
  }

  //GET getProject populates project history
  self.getProject = function () {
    console.log('called getProject function in service');
    $http({
      method: 'GET',
      url:'/manageProjects'
      }).then((response) => {
      console.log('getProject response service', response);
      self.addProject.list = response.data;
    })
    .catch((error) => {
      console.log('getProject error in service', error);
    });
  }

  //POST addProject adds new project to db
  self.addProject = function (entry) {
    console.log('called addProject POST in service', entry);
    $http({
      method: 'POST',
      url:'/manageProjects', 
      data: entry
    }).then((response) => {
      console.log('Success addProject POST from service', response);
      self.getProject();
    })
    .catch((error) => {
      console.log('Post ERROR from addProject in service ', error)
    });
  }

  //DELETE deleteEntry from task list
  self.deleteEntry = function (entryId) {
    console.log('called deleteEntry in service', entryId);
    $http({
      method: 'DELETE',
      url:`/addEntry/${entryId.e_id}`,
    }).then((response) => {
      console.log('Success deleteEntry in service', response);
      alert('Entries cannot be deleted');
      self.getEntry();
    }).catch((error) => {
      console.log('error deleteEntry in service', error);
    });
  }

//DELETE deleteProject from project list
self.deleteProject = function (projectId) {
  console.log('called deleteProject in service', projectId);
  $http({
    method: 'DELETE',
    url:`/manageProjects/${projectId.id}`,
  }).then((response) => {
    console.log('Success deleteProject in service', response);
    self.getProject();
  }).catch((error) => {
    console.log('ERROR deleteProject in service', error);
  });
}

self.getEntry();
self.getProject();

}]);