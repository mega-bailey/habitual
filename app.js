//GET NEW HABIT INPUT VALUE
$('input:text').keypress(function(e) {
  let newHabit = $(this).val();
  if (e.which == 13 && newHabit != '') {
    e.currentTarget.value = '';
    e.preventDefault();
    //ADD THIS NEW HABIT ROW BASED ON INPUT
    var newHabitRow = `<div class="habit-row"><div class="habit-title"><h2 class="habit-title__title">${newHabit}</h2><span class="btn-delete">&times;</span></div><div class="habits"><div class="habits__container"><div class="habits__box glow blank">&#9673;</div><div class="habits__box glow blank ">&#9673;</div><div class="habits__box glow blank ">&#9673;</div><div class="habits__box glow blank ">&#9673;</div><div class="habits__box glow blank ">&#9673;</div><div class="habits__box glow blank ">&#9673;</div><div class="habits__box glow blank ">&#9673;</div></div></div></div>`;
    $(newHabitRow).insertAfter('.weekdays');
    //DELETE THE HABIT WHEN X IS CLICKED
    $('span').click(function(e) {
      $(this)
        .parent()
        .parent()
        .fadeOut(400, function() {
          $(this).remove();
        });
      // e.stopPropagation();
    });
    //TOGGLE BETWEEN COLORS
    $('.habits__box').click(function(e) {
      if ($(this).hasClass('blank')) {
        $(this)
          .removeClass('blank')
          .addClass('yes');
      } else if ($(this).hasClass('yes')) {
        $(this)
          .removeClass('yes')
          .addClass('no');
      } else if ($(this).hasClass('no')) {
        $(this)
          .removeClass('no')
          .addClass('skip');
      } else if ($(this).hasClass('skip')) {
        $(this)
          .removeClass('skip')
          .addClass('blank');
      }
    });
  }
});
