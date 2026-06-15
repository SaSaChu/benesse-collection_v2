(function () {
  $('[data-sidebar-target]').on('shown.bs.tab', function () {
    var target = $(this).data('sidebar-target');

    $('[data-sidebar-panel]').removeClass('is-active');
    $('[data-sidebar-panel="' + target + '"]').addClass('is-active');
  });
})();