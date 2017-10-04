$('.page-scroll').on('click', function(e){
  console.log('ok');

  var tujuan = $(this).attr('href');
  var eltuju = $(tujuan);
   console.log(eltuju.offset().top);
  $('body').animate({
    scrollTop: eltuju.offset().top - 50
  }, 1300, 'easeOutBounce');
  e.preventDefault();
});

//parallax
$(window).on('load',function(){
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  // console.log(wScroll);
  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/3 +'%)'
  });
  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });

  if(wScroll > $('.toko').offset().top - 250){
    $('.toko .thumbnail').each(function(i){
      setTimeout(function(){
        // console.log('ok');
        $('.toko .thumbnail').eq(i).addClass('muncul');
      }, 500 * (i + 1));
    });
    // $('.toko .thumbnail').addClass('muncul');
  }
});

//dropdown
$(function(){

    $(".dropdown-menu").on('click', 'li a', function(){
      $(".btn:first-child").html($(this).text() + ' <span class="caret"></span>');
      $(".btn:first-child").val($(this).text());
   });

});

$(document).ready(function(){
	var date_input = $('input[name="date"]');
	var container = $('.dateclass form').length>0 ? $('.dateclass form').parent() : ".dateclass";
	date_input.datepicker({
		format: 'dd/mm/yyyy',
		container: container,
		todayHighlight: true,
		autoclose: true,
	});
  date_input.datepicker(options);
});

$("#SendRequest").click(function() {

    var platform = $("#category").html();
    var isValid = (platform != 'Category')

    if (!isValid) {
        alert('Please fill in missing details');
    } else {
        alert('Thank you for submitting');
    }
});
