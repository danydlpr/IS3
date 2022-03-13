document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {});

  var elems2 = document.querySelectorAll('.modal');
  M.Modal.init(elems2, {});
});


function initMaterializeSelect() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
}
