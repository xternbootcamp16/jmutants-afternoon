var url = 'https://mutant-school.herokuapp.com/api/v1/mutants';

function loadMutants(mutants) {
  $.each(mutants, addMutant);
}

function addMutant(i, mutant) {
  $('#mutantList').append('<li>' + mutant.mutant_name + '</li>');
}

$.get({
  url: url,
  success: loadMutants
});
