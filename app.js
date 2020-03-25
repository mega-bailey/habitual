//GET NEW HABIT INPUT VALUE
$('input:text').keypress(function(e) {
  let newHabit = $(this).val();
  if (e.which == 13 && newHabit != '') {
    e.currentTarget.value = '';
    e.preventDefault();

    //ADD THIS NEW HABIT ROW BASED ON INPUT
    var $newHabitRow = $(
      `<div class="habit-row"><div class="habit-title"><h2 class="habit-title__title">${newHabit}</h2><span class="btn-delete">&times;</span></div><div class="habits"><div class="habits__container"><div class="habits__box glow blank">&#9673;</div><div class="habits__box glow blank ">&#9673;</div><div class="habits__box glow blank ">&#9673;</div><div class="habits__box glow blank ">&#9673;</div><div class="habits__box glow blank ">&#9673;</div><div class="habits__box glow blank ">&#9673;</div><div class="habits__box glow blank ">&#9673;</div></div></div></div>`
    );
    $newHabitRow.insertAfter('.weekdays');

    //DELETE THE HABIT WHEN X IS CLICKED
    $('span').click(function(e) {
      $(this)
        .parent()
        .parent()
        .fadeOut(400, function() {
          $(this).remove();
        });
    });
  }
});

//TOGGLE BETWEEN COLORS
$('.container').click(function(e) {
  if ($(e.target).hasClass('blank')) {
    $(e.target)
      .removeClass('blank')
      .addClass('yes');
  } else if ($(e.target).hasClass('yes')) {
    $(e.target)
      .removeClass('yes')
      .addClass('no');
  } else if ($(e.target).hasClass('no')) {
    $(e.target)
      .removeClass('no')
      .addClass('skip');
  } else if ($(e.target).hasClass('skip')) {
    $(e.target)
      .removeClass('skip')
      .addClass('blank');
  }
});
