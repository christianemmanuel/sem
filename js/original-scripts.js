// SEM SCRIPTS
$(document).ready(function() {
  // Accordion
  $('.accordion-toggle').click(function() {
    if ($(this).text().toLowerCase() == "expand all") {
        $(this).text("Collapse All");
        $(this).addClass('expand_all').removeClass('expand');
        
        $(this).each(function() {
          $(this).next('.accordion').children('.accordion-item').children('.accordion-btn').addClass('active');
          $(this).next('.accordion').children('.accordion-item').children('.accordion-content').slideDown(400);
        });
    } else if ($(this).text().toLowerCase() == "collapse all") {
        $(this).text("Expand All");
        $(this).addClass('expand').removeClass('expand_all');
        
        $(this).each(function() {
          $(this).next('.accordion').children('.accordion-item').children('.accordion-btn').removeClass('active');
          $(this).next('.accordion').children('.accordion-item').children('.accordion-content').slideUp(400);
        });
    }
  });

  $('.accordion .accordion-btn').click(function() {
    $(this).toggleClass('active');
    $(this).next('.accordion-content').slideToggle(400);
  });

  /*****************************
  Hide Top Header 
  ******************************/
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 262){
      $('.navbar').addClass('scroll-up');
    } else {
      $('.navbar').removeClass('scroll-up');
    }
  });


  $('.scroll_hot_issue a').bind('click', function(e) {
    var target = $(this).attr("data-href");
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 83
    }, 600);

    e.preventDefault();
  });

  /*****************************
  Sticky Header
  ******************************/
  var nav = $('.menu_content');
  if (nav.length) {
    var contentNav = nav.offset().top - 0

    var stickyNav = function(){
      var scrollTop = $(window).scrollTop();

      if (scrollTop > contentNav) {
        $('.menu_content').addClass('fixed-nav');
        $('#hot_issue_section').css({
          "margin-top" : "58px"
        });
      } else {
        $('.menu_content').removeClass('fixed-nav');
        $('#hot_issue_section').css({
          "margin-top" : "0"
        });
      }
    };
    stickyNav();
    $(window).scroll(function() {
      stickyNav();
    });
  }

  /*****************************
  Animate scroll menu
  ******************************/
  $('.menu_content ul a, .go_top_section').bind('click', function(e) {
    var target = $(this).attr("data-href");
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 57
    }, 600);

    e.preventDefault();
  });
  $('[data-placement="top"]').tooltip();


  /*****************************
  Filtering country
  ******************************/
  var $btns1 = $('.btn-show-1').click(function() {
    if (this.id == 'all') {
      $('.parent-filter-1 > div.country-card').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('.parent-filter-1 > div.country-card').not($el).hide();
    }
    $btns1.removeClass('active');
    $(this).addClass('active');

    var text = $(this).text();
    $('#choose-country-1').text( text );
  });

  var $btns2 = $('.btn-show-2').click(function() {
    if (this.id == 'all') {
      $('.parent-filter-2 > div.country-card').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('.parent-filter-2 > div.country-card').not($el).hide();
    }
    $btns2.removeClass('active');
    $(this).addClass('active');

    var text = $(this).text();
    $('#choose-country-2').text( text );
  });

  var $btns3 = $('.btn-show-3').click(function() {
    if (this.id == 'all') {
      $('.parent-filter-3 > div.country-card').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('.parent-filter-3 > div.country-card').not($el).hide();
    }
    $btns3.removeClass('active');
    $(this).addClass('active');

    var text = $(this).text();
    $('#choose-country-3').text( text );
  });

  $('a.copy_clipboard').click(function() {
    $(this).children('.icon-clipboard').hide().next('.fa-copied-clipboard').show();

    setTimeout(function() {
       $('a.copy_clipboard').children('.icon-clipboard').show().next('.fa-copied-clipboard').hide();
    }, 1500);
  });

  $('button.copy_clipboard').click(function() {
    $(this).prev('.email_template_tooltip').fadeIn();

    setTimeout(function() {
       $('button.copy_clipboard').prev('.email_template_tooltip').fadeOut();
    }, 1500);
  });

  // var limit_of_div = 5;
  // $('.accordion-parent > div.accordion-item:gt('+(limit_of_div-1)+')').hide();
  // if ($('.accordion-parent > div.accordion-item').length <= limit_of_div) {
  //     $('.toggle_show_more').hide();

  // }

  // $('.toggle_show_more').click(function() {
  //   if ($(this).text().toLowerCase() == "view all") {
  //       $(this).text("Hide");
  //       $(this).addClass('view_all');
        
  //       $(this).each(function() {
  //         $(this).prev('.accordion-parent > div.accordion-item:gt('+(5-1)+')').show();
  //       });
  //   } else if ($(this).text().toLowerCase() == "hide") {
  //       $(this).text("View all");
  //       $(this).addClass('expand');
        
  //       $(this).each(function() {
  //         $(this).prev('.accordion-parent > div.accordion-item:gt('+(5-1)+')').hide();
  //       });
  //   }
  // });

});


$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  $('.section_landing_page').each(function(i) {
    if ($(this).position().top - 58 <= scrollDistance) {
      $('.menu_content ul a.active').removeClass('active');
      $('.menu_content ul a').eq(i).addClass('active');
    } else {
      $('.menu_content ul a').eq(i).removeClass('active');
    }
  });
}).scroll();
