window.onload = chgSlide;

//vars
	var no_slide = 0;
	var logoSrc = '<div class="logobrachole"><img src="img/dj-wodzirej-wesele-logo.svg" alt="dj na wesele logo"></div>';
	var logos = ['<div class=watchword_banner><p>Uroczystości weselne</p></div>',
							logoSrc,
							'<div class=watchword_banner><p>Imprezy okolicznościowe</p></div>',
							logoSrc,
							'<div class=watchword_banner><p>Imprezy firmowe</p></div>',
							logoSrc,
							'<div class=watchword_banner><p>Studniówki</p></div>',
							logoSrc];
var $logo_positioning = $("#logo_positioning");
//logo slider
	function chgSlide(){
	var slide = logos[no_slide];
	document.getElementById("logo_positioning").innerHTML = slide;
	no_slide++;
	if(no_slide > logos.length - 1){
		no_slide = 0;
	}
	show();
	setTimeout("chgSlide()", 5000);
	setTimeout("hide()", 4500);

	showSlides();
}
function show(){
	$logo_positioning.fadeIn(500);
}
function hide(){
	$logo_positioning.fadeOut(500);
}
//logo slider-end
//nav
function dropmenu() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
function iconchg(x) {
    x.classList.toggle("change");
}
//map
	function initMap() {
	  var myLatLng = {lat: 52.341019, lng: 16.812409};

	  var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: myLatLng
	  });

	  var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'DJ Brachole'
	  });
	}
//back to top
jQuery(document).ready(function($){
	var offset = 300,
	offset_opacity = 1200,
	scroll_top_duration = 700,
	$back_to_top = $('.cd-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	$(".fancybox").fancybox();
});
//foto slider
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";

}
