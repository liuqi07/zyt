var cartTpl = require('../tpls/cart.string');

// 定义视图
SPA.defineView('cart', {
  	// 装载模板
  	html: cartTpl,
	bindEvents: {
	'show': function () {
		
		/*touch.on('#target', 'touchstart', function(ev){
			ev.preventDefault();
		});
		
		var target = document.getElementById("target");
		target.style.webkitTransition = 'all ease 0.2s';
		
		touch.on(target, 'swiperight', function(ev){
			this.style.webkitTransform = "translate3d(" + rt + "px,0,0)";
			log("向右滑动.");
		});
		
		touch.on(target, 'swipeleft', function(ev){
			log("向左滑动.");
			this.style.webkitTransform = "translate3d(-" + this.offsetLeft + "px,0,0)";
		});*/
	}
}
});
