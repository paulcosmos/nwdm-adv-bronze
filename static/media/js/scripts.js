$(function() {
  $("blockquote").each(function(i,v){
    var charCount = 0;
    $(this).find(".quotetext p").each(function(index, val){
      var string = $(this).text();
      console.log(string);
      var chars = string.length;
      charCount = charCount + chars;
    });
    if(charCount < 120){
      $(this).find('.quotetext p').addClass('bigquote');
    }
    if(charCount < 500){
      $(this).find('.quotetext p').addClass('midquote');
    }
    if(charCount >= 500){
      $(this).find('.quotetext p').addClass('smallquote');
    }
  });
  $('a.cred').each(function(){
    if($(this).find('img').length > 0){
      var imgSrc = $(this).find('img').prop('src');
      $(this).css('background-image','url(' + imgSrc + ')');
    }
  });

  $('.header-slider').flickity({
    cellAlign: 'left',
    contain: false,
    wrapAround: false,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: 5000,
    draggable: true,
    pauseAutoPlayOnHover: false,
    cellSelector: '.slide'
  });
  if ($(window).width() < 1024) {
    $( "nav" ).insertAfter( $( ".nav-title" ) );
  }
    // Menu toggle
  $(".nav-toggler").click(function(){        
      $('.mobile-menu').toggleClass('open-nav');
  }); 
  $(".close-nav").click(function(){        
      $('.mobile-menu').toggleClass('open-nav');
  }); 
    // Footer return to top button
  $(".totop").click(function() {
      $('html, body').animate({
          scrollTop: $("header").offset().top
      }, 500);
  });
// Show Sub Menu When Parent Is Clicked
  $('nav ul li:has(ul) > a').click(function(e){
    e.preventDefault();
    var nextSub = $(this).next('ul');
    if(!nextSub.is(':visible')){
      $(this).next('ul').slideUp();
    }
    $( this ).next('ul').slideToggle('slow');
  });
    // Manage VH
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
    // Gallery   
  $('.gallery a').each(function(){
    $(this).attr('data-fancybox', 'gallery')
  });
    // Auto columns on lists
  $( "nav ul li > ul" ).each(function() {
    if($(this).children().length > 5){
      $(this).addClass("threecols")
    } else if($(this).children().length > 2){
      $(this).addClass("twocols")
    }
  });
  $( "main ul, main ol" ).each(function() {
    if($(this).children().length > 8){
      $(this).addClass("threecols")
    } else if($(this).children().length > 3){
      $(this).addClass("twocols")
    }
  });
    // Services page auto layout
  $(".service-list ul").each(function() {
    if($(this).children().length > 9){
      $(".service-section .service-title").removeClass("large-4")
      $(".service-section .service-title").removeClass("left-text")
      $(".service-section .service-list").removeClass("large-7")
      $(".service-section .service-list").removeClass("text")
      $(".service-section .service-title").addClass("large-12")
      $(".service-section .service-list").addClass("large-12")
    }
  });

  var buttons = document.querySelectorAll('.button');
  Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
    b.addEventListener('click', function(e){ e.preventdefault();});
  });
  function createRipple (e) {
    // alert('x');
    var circle = document.createElement('div');
    this.appendChild(circle);
    var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';
    var rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left -d/2 + 'px';
    circle.style.top = e.clientY - rect.top - d/2 + 'px';
    circle.classList.add('ripple');

    setTimeout(function () {
      circle.remove();
    }, 500);   
  }
  $('.button').click(function() {
    var linkUrl = $(this).attr('href');
    setTimeout(function(url) { window.location = url; }, 500, linkUrl);
    return false;
  });

    // Footer navigation
  UIkit.slideshow();
  $('nav > ul').clone().insertAfter('.menutitle');
});

$(document).ready(function(){
    // make img background image
  $('.bigbg, .thumbs').each(function(){
    if($(this).find('img').length > 0){
      var imgSrc = $(this).find('img').prop('src');
      $(this).css('background-image','url(' + imgSrc + ')');
    }
    $('.bigbg img, .thumbs img').hide();
  });
    // Form captcha
  var n1 = Math.round(Math.random() * 10 + 1);
    var n2 = Math.round(Math.random() * 10 + 1);
    $("#sum").html(n1 + " + " + n2);
    $("#answer").on('input', function() {
      if (eval($("#sum").html()) == $("#answer").val()) {
        $(".sendForm").removeClass('disabled').val('Submit Enquiry').removeAttr('disabled');
      } else {
        $(".sendForm").val('Prove you are not a robot').addClass('disabled');
      } 
    });
});

$(window).on('load', function () {
    if ($(window).width() > 768) {
      $('.social').clone().insertAfter('.main-foot a:last-of-type');
    }
});
$(window).on('load', function () {
    if ($(window).width() < 1024) {
      $( ".call-me" ).insertAfter( $( "nav ul" ) );
      $('.top-quote').insertAfter('.home-banner-text p:last-of-type');
      $('.contact-bar').insertAfter('.intro');
      $('.social').insertAfter('.mobile-menu .mobile-nav-contact');
      $('.bottom-card-holder').insertAfter('.after-this');
    }
});