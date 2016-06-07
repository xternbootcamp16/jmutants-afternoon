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
