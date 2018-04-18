var classList = [
	'photoDiv01',
	'photoDiv02',
	'photoDiv03',
	'photoDiv04',
	'photoDiv05'
];

function loopThroughImages() {
	classList.forEach(function(className, i) {
		setTimeout(function() {
			$('#photoDiv').removeClass();
			$('#photoDiv').addClass(className);
			if (i === classList.length - 1) {
				$('.homeItem').addClass('homeItemAnimation');
			}
		}, 1000 * i);
	});
}

$( document ).ready(function() {
	loopThroughImages();
});