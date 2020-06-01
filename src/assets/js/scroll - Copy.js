Highcharts.chart('container', {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45
    }
  },
  title: {
    text: 'Contents of Highsoft\'s weekly fruit delivery'
  },
  subtitle: {
    text: '3D donut in Highcharts'
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45
    }
  },
  series: [{
    name: 'Delivered amount',
    data: [
      ['effectif', 3],
      ['effectif avec recommandation', 1],
      ['non testé', 1],
      ['innefictif', 2]
     
    ]
  }]
});