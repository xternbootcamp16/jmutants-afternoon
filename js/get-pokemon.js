var url = 'https://pokeapi.co/api/v2/pokemon/?limit=6&offset=20'

var template = $('.template')
  .detach()
  .removeClass('template')

function loadPokemon(pokemon) {
  $.each(pokemon.results, function(i, mutant) {
    addMutant(mutant);
  });
}

function addMutant(mutant) {
  var li = template.clone();
  li.find('.mutant-name a')
    .text(mutant.name)
    .attr('href', mutant.url)

  li.attr('data-id', mutant.id);
  $('#mutantList').append(li);
}

$.get({
  url: url,
  success: loadPokemon
});
