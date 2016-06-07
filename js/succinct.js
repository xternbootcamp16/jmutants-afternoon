// get-mutants.js
$.get({
  url: 'https://mutant-school.herokuapp.com/api/v1/mutants',
  success: function(mutants) {
    $.each(mutants, function(i, mutant) {
      $('#mutantList').append('<li>' + mutant.mutant_name + '</li>');
    });
  }
});

// create-mutants.js
var mutant = {
  mutant_name: 'Michaellllllll',
  real_name: 'Miiiiichaaeeel',
  power: 'Yeah.'
};

function createMutant(mutant) {
  $.post({
    url: url,
    data: {
      mutant: mutant
    },
    success: function(x) {
      alert(x);
    },
  });
}
