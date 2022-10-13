$(function(){

    $('.axis').animate({ width: '73.5%' }, 200);


// this piece of code is from stackoverflow    
// Animate the element's value from 0% to value you will set:
$({someValue: 0}).animate({someValue: 185}, {
	duration: 3000,
	easing:'swing', // can be anything
	step: function() { // called on every step
		// Update the element's text with rounded-up value:
		$('#value').text(Math.ceil(this.someValue));
	}
});



})
