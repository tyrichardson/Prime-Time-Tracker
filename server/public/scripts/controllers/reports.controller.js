timeTrackerApp.controller('ReportsController', [
  'TimeTrackerAppService',
  function (TimeTrackerAppService) {
    console.log('reports Controller Loaded');

    const self = this;

    let timeTrackerAppService = TimeTrackerAppService;

    //Link view to service data

    self.getProject = timeTrackerAppService.getProject;

    self.getProject();

  /*
    self.reportData = timeTrackerAppService.reportData;

    self.reportNames = timeTrackerAppService.reportNames;

    self.reportSum = timeTrackerAppService.reportSum;

    self.ctx = timeTrackerAppService.ctx;

    self.myChart = timeTrackerAppService.myChart;
    */

    //angular-chart.js
    self.reportData = TimeTrackerAppService.project.list;
    console.log('reportData', self.reportData);
    self.reportNames = self.reportData.map((names) => names.project_name);
    console.log('reportNames array', self.reportNames);
    self.reportHours = self.reportData.map((hours) => hours.sum);
    console.log('reportHours array', self.reportHours);
    self.reportSum = self.reportHours.map((sum) => parseInt(sum, 10));
   // console.log('reportSum array', self.entry.list);
    self.ctx = angular.element(document.querySelector('#myChart'));
    self.myChart = new Chart(self.ctx, {
      type: 'bar',
      data: {
        labels: self.reportNames,
        datasets: [
          {
            label: 'Total Hours Burned per Project',
            data: self.reportSum,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
]);
