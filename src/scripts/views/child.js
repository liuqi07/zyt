var childTpl = require('../tpls/child.string');

// 定义视图
SPA.defineView('child', {
  	// 装载模板
  	html: childTpl
//  bindEvents: {
//  'show': function () {
////      var mySwiper = new Swiper('.swiper-container', {
////              //autoplay: 2000,//可选选项，自动滑动
////  			//loop : true,
////  			//autoplayDisableOnInteraction : false,
////  			pagination : '.swiper-pagination',
////  			paginationType : 'bullets'
////          })
//    }
//  }

});
