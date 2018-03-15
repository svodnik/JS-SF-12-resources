function addToList($list, thing) {
  const $thingLi = $('<li>').html(thing).addClass('fav-thing');
  addCrossOffLink($thingLi);
  $list.append($thingLi);
}

function addCrossOffLink($li) {
  const $crossOffLink = $('<span>').html(' cross off').addClass('cross-off');
  $li.append($crossOffLink);
}

$(document).ready(function() {
  const $thingList = $('#fav-list');
  const $things = $('.fav-thing');
  const $button = $('#new-thing-button');
  const $newThingInput = $('#new-thing');

  $things.toArray().forEach(function(li) {
    addCrossOffLink($(li));
  });

  $button.on('click', function(event) {
    event.preventDefault();
    const newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });

  $thingList.on('click', '.fav-thing .cross-off', function() {
    const $thingItem = $(this).parent();
    $thingItem.addClass('crossed-off');
    $(this).html('');
  });

// Refactor the following two event listeners into a single event listener for multiple events.
  $thingList.on('mouseenter', 'li', function(event) {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  });

  $thingList.on('mouseleave', 'li', function(event) {
    $(this).siblings().removeClass('inactive');
  });
});
