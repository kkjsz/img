（函数（$）{
  '使用严格';
  //在紧凑侧边栏模式和水平菜单模式下悬停打开子菜单
  $(document).on('mouseenter mouseleave', '.sidebar .nav-item', function(ev) {
    var body = $('body');
    var sidebarIconOnly = body.hasClass("sidebar-icon-only");
    var sidebarFixed = body.hasClass("sidebar-fixed");
    if (!('ontouchstart' in document.documentElement)) {
      如果（sidebarIconOnly）{
        如果（侧边栏固定）{
          if (ev.type === 'mouseenter') {
            body.removeClass('sidebar-icon-only');
          }
        } 别的 {
          var $menuItem = $(this);
          if (ev.type === 'mouseenter') {
            $menuItem.addClass('悬停打开')
          } 别的 {
            $menuItem.removeClass('悬停打开')
          }
        }
      }
    }
  });
  $('.aside-toggler').click(function(){
    $('.chat-list-wrapper').toggleClass('slide')
  });
})(jQuery);
