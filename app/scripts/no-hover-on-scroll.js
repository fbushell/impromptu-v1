(function () {
	var css = '.disable-hover #siteWrapper, .disable-hover #siteWrapper * { pointer-events: none !important; }',
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style'),
		body = document.body,
		timer;
 
	style.type = 'text/css';
	if (style.styleSheet){
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
 
	head.appendChild(style);
 
	window.addEventListener('scroll', function() {
		clearTimeout(timer);
		if(!body.classList.contains('disable-hover')) {
			body.classList.add('disable-hover');
		}
 
		timer = setTimeout(function(){
			body.classList.remove('disable-hover');
		},200);
	}, false);
})();