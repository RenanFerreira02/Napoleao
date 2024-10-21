var options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Quantidade de vendas por mês',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
  }
  };

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options2 = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Empresa A', 'Empresa B', 'Empresa C', 'Empresa D', 'Empresa E'],
  title: {
    text: 'Nosso Market share',
    align: 'left'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  chart2.render();

  var options3 = {
    series: [
    {
      name: "Funnel Series",
      data: [1380, 1100, 990, 880],
    },
  ],
    chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
    },
    dropShadow: {
      enabled: true,
    },
  },
  title: {
    text: 'Idades X compras',
    align: 'middle',
  },
  xaxis: {
    categories: [
      '7 a 13 anos',
      '13 a 16 anos',
      '16 a 18 anos',
      '18 a 20 anos',
    ],
  },
  legend: {
    show: false,
  },
  };

  var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
  chart3.render();