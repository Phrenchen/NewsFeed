/* Widowtamer */
wt.fix({
	elements: '.article-detail > p',
	chars: 15,
	method: 'nbsp',
	event: 'resize'
});

wt.fix({
	elements: 'blockquote p',
	chars: 8,
	method: 'nbsp',
	event: 'resize'
});

wt.fix({
	elements: 'h1',
	chars: 6,
	method: 'nbsp',
	event: 'resize'
});

window.onload = function(){
  // console.log('test onload');
  var style = getComputedStyle(document.body);
  var style_value = style.getPropertyValue('--p-vf-wdth-temp');
  // console.log(style_value);  
}

window.onresize = function(){
  // console.log("test onresize");
  var style = getComputedStyle(document.body);
  var style_value = style.getPropertyValue('--p-vf-wdth-temp');
  // console.log(style_value);  
}
