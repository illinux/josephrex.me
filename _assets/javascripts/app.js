// http://dustindiaz.com/smallest-domready-ever
function ready(cb) {
	/in/.test(document.readyState) // in = loadINg
		? setTimeout(ready.bind(null, cb), 9)
		: cb();
}
ready(function(){
	// Sticky logo on home page
	var wrap = document.getElementById("js-wrap");
	if(wrap && window.innerWidth >= 1024){
		document.addEventListener("scroll", function(e) {
			fixPoint = parseInt( getComputedStyle(wrap).getPropertyValue('top') );
			wrap.classList.toggle( "fixed", document.body.scrollTop > fixPoint );
		});
	}
	
	// Handling Navigation
	menuIcon = document.querySelectorAll('nav > svg');
	Array.prototype.forEach.call( menuIcon, function(el) {
	   el.addEventListener('click', function() {

	     el.parentNode.classList.toggle('active');

	  }, false);

	});
});