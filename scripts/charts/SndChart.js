
fetch('connection2.php') // Reemplaza con la URL de tu archivo PHP
.then(response => response.json())
.then(data => {
    console.log(data);
    const numeroPeliculas = parseInt(data[0].numeroPeliculas, 10); // Convierte a número
    const numeroSeries = parseInt(data[0].numeroSeries, 10);

    Highcharts.chart('container2', {
        chart: {
            type: 'column' // Cambia el tipo a 'column'
        },
        title: {
            text: 'Número de Películas y Series en Netflix'
        },
        xAxis: {
            categories: ['Películas', 'Series'] // Nombres en el eje X
        },
        yAxis: {
            title: {
                text: 'Cantidad' // Título del eje Y
            }
        },
        series: [
            {
                name: 'Peliculas',
                data: [{
                    name: 'Películas',
                    y: numeroPeliculas,
                    //color: '#FF5733' // Color para la columna de Películas (rojo pastel)
                }],
                dataLabels: {
                    enabled: true,
                    format: '{y}', // Formato de etiqueta de datos
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            {
                name: 'Series',
                data: [{
                    name: 'Series',
                    y: numeroSeries,
                    //color: '#FFA500' // Color para la columna de Series (naranja pastel)
                }],
                dataLabels: {
                    enabled: true,
                    format: '{y}', // Formato de etiqueta de datos
                    style: {
                        fontSize: '12px'
                    }
                }
            }
        ]
    });
})
.catch(error => console.error('Error al obtener los datos:', error));
