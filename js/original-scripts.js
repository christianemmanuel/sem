// SEM SCRIPTS
$(document).ready(function() {
  // Accordion
  $('.accordion-toggle').click(function() {
    if ($(this).text().toLowerCase() == "expand all") {
        $(this).text("Collapse All");
        $(this).addClass('collapse').removeClass('expand');
        $(this).each(function() {
        $(this).nextAll('.accordion-item').children('.accordion-btn').addClass('active');
        $(this).nextAll('.accordion-item').children('.accordion-content').slideDown(400);
      });
    } else if ($(this).text().toLowerCase() == "collapse all") {
        $(this).text("Expand All");
        $(this).addClass('expand').removeClass('collapse');
        $(this).each(function() {
        $(this).nextAll('.accordion-item').children('.accordion-btn').removeClass('active');
        $(this).nextAll('.accordion-item').children('.accordion-content').slideUp(400);
      });
    }
  });

  $('.accordion .accordion-btn').click(function() {
    $(this).toggleClass('active');
    $(this).next('.accordion-content').slideToggle(400);
  });

  $(".show_all_hot_issues").click(function () {
      var text = $(this).html()
      if (text == '<i class="fa fa-bars" aria-hidden="true"></i> View All List of Hot Issues, Case Monitoring and Bulletin') {
          $(".list-of-hot-issue").slideDown();
          $(this).html('<i class="fa fa-minus-square" aria-hidden="true"></i> Hide');
      } else {
          $(".list-of-hot-issue").slideUp();
          $(this).html('<i class="fa fa-bars" aria-hidden="true"></i> View All List of Hot Issues, Case Monitoring and Bulletin');
      }
  });

  /*****************************
  Hide Top Header 
  ******************************/
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 271){
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
          "margin-top" : "88px"
        });
      } else {
        $('.menu_content').removeClass('fixed-nav');
        $('#hot_issue_section').css({
          "margin-top" : "30px"
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
  $('.menu_content ul a').bind('click', function(e) {
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
});
