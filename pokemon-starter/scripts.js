$(document).ready(function(){
	$("#btn1").click(getPokemon);

	function getPokemon() {
		let id = Math.floor(Math.random()*800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response){
			console.log(response);
			console.log(response.name);
			$('#first').empty();
			$('#first').append(`<h1>${response.name}</h1>`);
			$("#first").append(`<img src="${response.sprites.front_default}"</img>`);
			$('#first').append(`<h1> Type:${response.types[0].type.name}</h1>`);
			$('#first').append(`<h1> Attack Stats:${response.stats[4].base_stat}</h1>`);
		});
	}
})


$("#btn2").click(getPokemon);
	function getPokemon() {
		let id = Math.floor(Math.random()*800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response){
			console.log(response);
			console.log(response.name);
			$('#second').empty();
			$('#second').append(`<h1>${response.name}</h1>`);
			$("#second").append(`<img src="${response.sprites.front_default}"</img>`);
			$('#second').append(`<h1> Type:${response.types[0].type.name}</h1>`);
			$('#second').append(`<h1> Attack Stats:${response.stats[4].base_stat}</h1>`);
		});
	}


$("#bnt").click(beginBattle);
	function beginBattle() {

	}


