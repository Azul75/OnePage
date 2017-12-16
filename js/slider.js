
var slider=$('.slider');
var siguiente =$('.btn-next');
var anterior =$('.btn-prev');

$('.slider section:last').insertBefore('.slider section:first');

slider.css('margin-left','-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	}, 700, function() {
		$('.slider section:first').insertAfter('.slider section:last');
		slider.css('margin-left','-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	}, 700, function() {
		$('.slider section:last').insertBefore('.slider section:first');
		slider.css('margin-left','-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function() {
		moverD();
	}, 4000);
}

siguiente.on('click', function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click', function() {
	moverI();
	clearInterval(interval);
	autoplay();
});

autoplay();