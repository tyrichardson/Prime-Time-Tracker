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

  //GET project history
  self.getProject = function () {
    console.log('called getProject function in client.js');
    $http.get('/manageProjects').then(function (response) {
      console.log('getProject response client.js', response);
      self.addProject.list = response.data;
    })
  }

  //POST addEntry
  self.addEntry = function (entry) {
    console.log('called addEntry post in client.js', entry);
    $http.post('/addEntry', entry).then(function (response) {
      console.log('Entry Successfully Posted reported from client.js!');
      self.getEntry();
    }).catch(function (error) {
      console.log('ERROR returned to client.js', error)
    });
  };

  //POST addProject
  self.addProject = function (entry) {
    console.log('called addProject post', entry)
    $http.post('/manageProjects', entry).then(function (response) {
      console.log('Project Successfully Posted reported from client.js!');
      self.getProject();
    }).catch(function (error) {
      console.log('ERROR returned to client.js', error)
    });
  };

  //DELETE entry
  self.deleteEntry = function (entryId) {
    console.log('called deleteEntry in client.js', entryId);
    $http.delete('/addEntry', entryId).then(function (response) {
      console.log('Entry deletion successful reported from client.js');
      self.getEntry();
    }).catch(function (error) {
      console.log('error returned to client.js', error);
    });
  }
}])

//DELETE project
self.deleteProject = function (projectId) {
  console.log('called deleteProject in client.js', projectId);
  $http.delete('/manageProjects', projectId).then(function (response) {
    console.log('Project deletion successful reported from client.js');
    self.getProject();
  }).catch(function (error) {
    console.log('ERROR returned to client.js', error);
  });
}

self.getEntry();
self.getProject();

}]);