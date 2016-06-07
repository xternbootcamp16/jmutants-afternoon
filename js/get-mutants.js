var url = 'https://mutant-school.herokuapp.com/api/v1/mutants';

function loadMutants(mutants) {
  $.each(mutants, addMutant);
}

function addMutant(i, mutant) {
  console.log(mutant.mutant_name);
}

$.get({
  url: url,
  success: loadMutants
});
