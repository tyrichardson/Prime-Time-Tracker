timeTrackerApp.controller('ReportsController', ['TimeTrackerAppService',
  function (TimeTrackerAppService) {
    console.log('reports Controller Loaded');
  }]);

    // const self = this;

    // let timeTrackerAppService = TimeTrackerAppService;

    // //Link view to service data
    // self.project = timeTrackerAppService.project;
    // self.entry = timeTrackerAppService.entry;
    // self.report = timeTrackerAppService.report;

    // self.addProject = TimeTrackerAppService.addProject.list;

    // self.addEntry = TimeTrackerAppService.addEntry.list;

  //   // loop over project name
  //   let projectArray = addProject.map((p, i) => {
  //     return p.project_name;
  //   })

  //   // loop over total time
  //   let totalTimeArray = addEntry.map((e, i) => {
  //     return e.e_hours;
  //   })

  //   let ctx = angular.element(document.querySelector('#myChart'));
  //   let myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: projectArray,
  //       datasets: [{
  //         label: 'Total Hours Burned per Project',
  //         data: totalTimeArray,
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255,99,132,1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }]);