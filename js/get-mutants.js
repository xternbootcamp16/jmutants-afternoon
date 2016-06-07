var url = 'https://mutant-school.herokuapp.com/api/v1/mutants';

function loadMutants(mutants) {
  $.each(mutants, function(i, mutant) {
    addMutant(mutant);
  });
}

function addMutant(mutant) {
  $('#mutantList').append('<li>' + mutant.mutant_name + '</li>');
}

$.get({
  url: url,
  success: loadMutants
});
