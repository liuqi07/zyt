var goodTpl = require('../tpls/good.string');

// 定义视图
SPA.defineView('good', {
  	// 装载模板
  	html: goodTpl,
    bindEvents: {
    'show': function () {
        var mySwiper = new Swiper('.swiper-container', {
                //autoplay: 2000,//可选选项，自动滑动
    			//loop : true,
    			//autoplayDisableOnInteraction : false,
    			pagination : '.swiper-pagination',
    			paginationType : 'bullets'
            })
      }
    }

});
