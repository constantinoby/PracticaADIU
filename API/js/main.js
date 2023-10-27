import {API_KEY} from './config.js'

function getRandomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;} 
const randomNumber = getRandomInt(1, 2024);

const url = 'https://numbersapi.p.rapidapi.com/'+randomNumber+'/year?json=true&fragment=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

    document.getElementById('number').innerHTML="Year : "+result.number;
    document.getElementById('text').innerHTML=" - "+result.text+" - ";
} catch (error) {
	console.error(error);
}