var classList = [
	'photoDiv01',
	'photoDiv02',
	'photoDiv03',
	'photoDiv04',
	'photoDiv05'
];

function loopThroughImages(animateHomeItem) {
	classList.forEach(function(className, i) {
		setTimeout(function() {
			$('#photoDiv').removeClass();
			$('#photoDiv').addClass(className);
			if (i === classList.length - 1 && animateHomeItem) {
				$('.homeItem').addClass('homeItemAnimation');
			}
		}, 1000 * i);
	});
}

$( document ).ready(function() {
	loopThroughImages(true);
	$('#repeatSlides').click(function() {
		loopThroughImages(false);
	});
});