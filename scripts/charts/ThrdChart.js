// Realiza una petición para obtener los datos desde PHP
fetch('connection3.php') // Reemplaza 'tuphp.php' con la URL correcta de tu archivo PHP
.then(response => response.json())
.then(data => {
    // Transforma los datos para que Highcharts pueda usarlos
    const chartData = data.map(item => ({
        name: item.release_year,
        y: parseInt(item.total_peliculas_y_series)
    }));

    console.log(chartData)

    // Configuración del gráfico de columnas
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Número Total de Películas y Series por Año'
        },
        xAxis: {
            title: {
                text: 'Año'
            }
        },
        yAxis: {
            title: {
                text: 'Número Total'
            }
        },
        series: [{
            name: 'Total Películas y Series',
            data: chartData
        }]
    });
})
.catch(error => console.error('Error al obtener los datos:', error));