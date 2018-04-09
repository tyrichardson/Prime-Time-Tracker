timeTrackerApp.service('TimeTrackerAppService', ['$http', function ($http) {
  console.log('TimeTrackerAppService is loaded');

  let self = this;

  self.addEntry = { list: [] };

  self.addProject = { list: [] };

  // let ctx = "myChart";

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
      self.getProject();
    })
      .catch((error) => {
        console.log('post addEntry error in service', error)
      });
  }

  //GET getProject populates project name
  self.getProject = function () {
    console.log('called getProject function in service');
    $http({
      method: 'GET',
      url:'/manageProjects'
      }).then((response) => {
      console.log('getProject response service', response);
      self.addProject.list = response.data;
      console.log('getProject in service vm.addProject.list =  response.data', response.data);
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
      self.getEntry();
      self.getProject();
    }).catch((error) => {
      console.log('error deleteEntry in service', error);
      alert('At this time, entries against existing projects cannot be deleted');
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
    alert('At this time, projects with hours burned against them cannot be deleted');
  });
}

  // let myChart = new Chart(ctx, {
  //   type: 'bar',
  //   data: {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: true
  //         }
  //       }]
  //     }
  //   }
  // });

self.getEntry();
self.getProject();

}]);