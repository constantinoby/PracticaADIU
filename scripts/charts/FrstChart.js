
fetch('connection.php')
.then(response => response.json())
.then(data => {
    // Transforma los datos para que Highcharts pueda usarlos
    const chartData = data.map(item => ({
        name: item.country,
        y: parseInt(item.contador)
    }));

    chartData[2].name = "Otros";


    console.log(chartData);

    // Configuración del gráfico de pastel
    Highcharts.chart('container3', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Top 10 Países con Más Películas en Netflix'
        },
        series: [{
            name: 'Películas',
            data: chartData
        }]
    });
})
.catch(error => console.error('Error al obtener los datos:', error));