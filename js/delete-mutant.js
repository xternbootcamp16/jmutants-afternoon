$(document).on('click', 'a.delete', handleDeleteClick);

function handleDeleteClick(ev) {
  ev.preventDefault();
  var li = $(ev.currentTarget).closest('li');
  var id = li.attr('data-id');
  deleteMutant(id);
}

function deleteMutant(id) {
  $.ajax({
    method: 'delete',
    url: url + '/' + id,
    success: function() {
      $('li[data-id=' + id + ']').remove();
    },
  });
}
