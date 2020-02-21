// var weekdayEl = document.querySelector('.weekdays');
// const parentDiv = document.getElementById('parentDiv');
// const newHabitInput = document.querySelector('.new-habit__input-box');

//GET INPUT VALUE
$('input:text').keypress(function(e) {
  let newHabit = $(this).val();
  if (e.which == 13 && newHabit != '') {
    // $(this).blur();
    e.currentTarget.value = '';
    e.preventDefault();
    //ADD THIS NEW HABIT ROW BASED ON INPUT
    var newHabitRow = `<div class="habit-row"><div class="habit-title"><h2 class="habit-title__title">${newHabit}</h2><span class="btn-delete">&times;</span></div><div class="habits"><div class="habits__container"><div class="habits__box glow ">&#9673;</div><div class="habits__box glow ">&#9673;</div><div class="habits__box glow ">&#9673;</div><div class="habits__box glow ">&#9673;</div><div class="habits__box glow ">&#9673;</div><div class="habits__box glow ">&#9673;</div><div class="habits__box glow ">&#9673;</div></div></div></div>`;
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
      var classes = ['yes', 'no', 'skip', 'blank'];
      var i = classes.length;
      while (i--) {
        $('.habits-box').toggleClass(classes[i]);
      }
    });
  }
});

//sort of works, http://jsfiddle.net/KdfEV/, but would need to seriously alter css
// $('.yes, .no, .skip').click(function() {
//   this.className = {
//     three: 'yes',
//     one: 'no',
//     two: 'skip'
//   }[this.className];
// });
