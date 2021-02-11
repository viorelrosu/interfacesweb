$(document).ready(function(){
	var slides = $(".slide");
	var dots = $(".dot");
	var myInterval = '';
	var slideIndex = 0;

	slides.hide();
	showSlides(slideIndex);
	activeDot();
	iniciarAuto();

	function activeDot(){
		dots.attr("class","dot");
		dots.eq(slideIndex).addClass("active");
	}

	function avanzar(){
		var index = slideIndex+1;
		if (index > slides.length-1) {
			index = 0;
		}
		showSlides(index);
		activeDot();
	}

	function iniciarAuto(){
		myInterval = setInterval(function(){
			avanzar();
		},2000);
	}

	function showSlides(n) {
		slideIndex = n;
		slides.hide();
		slides.eq(slideIndex).fadeIn();
	}

	dots.on("click",function(){
		dots.attr("class","dot");
		$(this).addClass("active");
		showSlides($(this).data("index"));
	})

	$(".prev").on("click",function(){
		var index = slideIndex-1;
		if (index < 0) {
			index = slides.length-1;
		}
		showSlides(index);
		activeDot();
	})

	$(".next").on("click",function(){
		avanzar();
	})

	$(".startAuto").on("click",function(){
		iniciarAuto();
	})

	$(".stopAuto").on("click",function(){
		clearInterval(myInterval);
	})

	// $('#slider div:gt(0)').hide();

 //    setInterval(function(){
 //      $('#slider div:first-child').fadeOut(0)
 //         .next('div').fadeIn(1000)
 //         .end().appendTo('#slider');}, 4000);

});
