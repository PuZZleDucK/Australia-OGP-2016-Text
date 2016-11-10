// Takes the focused menu item and shows its child item
jQuery('.page_item').focusin(function() {
  jQuery(this).children().css('left', 'auto');
});

//Removes the above when not focused
jQuery('.page_item').focusout(function() {
  jQuery(this).children().css('left', '');
});

// The jetlev plugin has some global styles which we're using here.
jQuery('.menu-item a').focusin(function addFocus() {
  jQuery(this).parents('li').addClass('sfhover');
});

jQuery('.menu-item a').focusout(function removeFocus() {
  jQuery(this).parents('li').removeClass('sfhover');
});