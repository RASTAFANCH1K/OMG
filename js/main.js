$(document).ready(function() {
  $('.burger').click(function() {
    $('.burger').toggleClass('active');
    $('.header__popup').toggleClass('active');
  });

  $('.accordion').on('click', function () {
    $('.categories').toggle('slow');
    $('.categories').toggleClass('show');
    $('.accordion__icon').toggleClass('rotate');
  });

  var mixer = mixitup('.social-mix', {
    load: {
        filter: '.video-details'
    }
  });

  // $('.icon-search').click(function(){
  //   // $('.logo--hidden').toggleClass('hide');
  //   $('.wrap, .input').toggleClass('active');
  //   $('input[type='text']').focus();
  // });

  $('.search-form__btn--expanding').click(function() {
    $('.logo--hidden').toggleClass('hide');
    $('.search-form__input--expanding').toggleClass('active');
    $('.search-form__input--expanding').focus();
  });
});