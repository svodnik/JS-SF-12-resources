const images = {
  dog: 'https://a-z-animals.com/media/animals/images/470x370/dingo1.jpg',
  cat: 'http://www.pets4homes.co.uk/images/articles/2355/large/burmese-cat-health-and-genetics-547d89dd3bffd.jpg',
  fish: 'https://cdn.petbarn.com.au/petspot/wp-content/uploads/2015/10/new-fish-to-tank-blog.jpg',
  elephant: 'https://d31j74p4lpxrfp.cloudfront.net/sites/default/files/styles/landscape_driver_block/public/us_files/adult_and_infant_elephant_hub_page_3_0.jpg?itok=UG47LpoM',
  squirrel: 'https://a-z-animals.com/images/blog/britishwinter3.jpg',
  bird: 'http://ingridkuhn.com/themes/petz/img/service1.jpg',
  gorilla: 'https://www.zoo.org.au/sites/default/files/styles/zv_aggregate_featured/public/gorilla2-MZ-animal-web460.jpg?itok=8NctJnfW',
  giraffe: 'https://www.australiazoo.com.au/our-animals/amazing-animals/images/profile_305_600.jpg',
  bear: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png/1200px-Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.png'
};

$(function() {
  const $gallery = $('.gallery');
  const $buttons = $('#animalsList li');
  const $images = $('.image');

// implicit iteration
//  $buttons.each(function() {
//    $(this).on('click', function(event) {
    $buttons.on('click', function(event) {
      const animal = event.target.id;
      event.target.className = 'showing';
// chaining
//      const $newTile = $('<div>');
//      $newTile.addClass('image');
      const $newTile = $('<div>').addClass('image');
//      const $newImage = $('<img>');
//      $newImage.attr('src', images[animal]);
//      $newImage.addClass('animal');
      const $newImage = $('<img>').attr('src', images[animal]).addClass('animal');
//      const $caption = $('<p>');
//      const $captionText = $caption.text(animal);
//      $caption.append($captionText);
      const $caption = $('<p>').text(animal);
      $newTile.append($caption);
      $newTile.append($newImage);
      $gallery.append($newTile);
    });
//  });

// implicit iteration
/* 
//  $images.each(function() {
//    $(this).on('mouseenter', function(event) {
    $images.on('mouseenter', function(event) {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });
//    $(this).on('mouseleave', function(event) {
    $images.on('mouseleave', function(event) {
      $(this).removeClass('active');
    });
//  }); 
*/

// event delegation
/*
//    $images.on('mouseenter', function(event) {
  $gallery.on('mouseenter', '.image', function(event) {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

//    $images.on('mouseleave', function(event) {
  $gallery.on('mouseleave', '.image', function(event) {
    $(this).removeClass('active');
  });
//  }); 
*/

// combining selectors
  $gallery.on('mouseenter mouseleave', '.image', function(event) {
    if (event.type === 'mouseenter') {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    } else if (event.type === 'mouseleave') {
      $(this).removeClass('active');
    }
  });
});