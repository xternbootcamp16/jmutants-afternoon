var url = 'https://mutant-school.herokuapp.com/api/v1/mutants';

function loadMutants(mutants) {
  $.each(mutants, function(i, mutant) {
    addMutant(mutant);
  });
}

function addMutant(mutant) {
  var li = $('.template')
    .clone()
    .removeClass('template');

  li.find('.mutant-name').text(mutant.mutant_name);
  $('#mutantList').append(li);
}

$.get({
  url: url,
  success: loadMutants
});
