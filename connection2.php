<?php
// Conecta a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "moviedata";

$conn = new mysqli($servername, $username, $password, $database);

// Verifica la conexión
if ($conn->connect_error) {
    die("La conexión a la base de datos falló: " . $conn->connect_error);
}

// Consulta SQL para contar programas de televisión y películas por país y tipo
//$sql = "SELECT country, COUNT(*) AS contador FROM netflix_titles WHERE type = 'Movie' GROUP BY country ORDER BY contador DESC LIMIT 15";
$sql= "SELECT SUM(CASE WHEN type = 'Movie' THEN 1 ELSE 0 END) AS numeroPeliculas, SUM(CASE WHEN type = 'TV Show' THEN 1 ELSE 0 END) AS numeroSeries FROM netflix_titles";
$result = $conn->query($sql);


// Prepara los datos en un formato adecuado (JSON)
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);

// Cierra la conexión a la base de datos
$conn->close();
?>

