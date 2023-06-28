
  var colors = ['#46A4FF','#016A9E','#00CE20'];

/* 3 donut charts */
var donutOptions = {
  cutoutPercentage: 53, 
  legend: {position:'bottom', padding:0, labels: {pointStyle:'circle', usePointStyle:true}}
};

// donut 1
// document.addEventListener("DOMContentLoaded", function() {
  var chDonutData1 = {
      // labels: ['In progress', 'waiting', 'Completed'],
      datasets: [
        {
          backgroundColor: colors.slice(0,3),
          borderWidth: 1,
          borderColor: '#ffffff',
          data: [30, 18, 5]

        }
      ],
      
  };

  var chDonut1 = document.getElementById("chDonut1");
  if (chDonut1) {
    
    new Chart(chDonut1, {
        type: 'pie',
        data: chDonutData1,
        options: donutOptions
    });
  }

// donut 2
var chDonutData2 = {
  // labels: ['Wips', 'Pops', 'Dags'],
  datasets: [
    {
      backgroundColor: colors.slice(0,3),
      borderWidth: 1,
      borderColor: '#ffffff',
      data: [30, 18, 5]
    }
  ]
};
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
    
  new Chart(chDonut2, {
      type: 'pie',
      data: chDonutData2,
      options: donutOptions
  });
}
// donut 3

var colors = ['#46A4FF','#00CE20'];
var chDonutData3 = {
  // labels: ['Wips', 'Pops', 'Dags'],
  datasets: [
    {
      backgroundColor: colors.slice(0,3),
      borderWidth: 1,
      borderColor: '#ffffff',
      data: [18, 5]
    }
  ]
};
var chDonut3 = document.getElementById("chDonut3");
if (chDonut2) {
    
  new Chart(chDonut3, {
      type: 'pie',
      data: chDonutData3,
      options: donutOptions
  });
}
