var homeTpl= require('../tpls/home.string');

// 定义视图
SPA.defineView('home', {
  	// 装载模板
  	html: homeTpl,
  	
  	//绑定视图事件
  	bindEvents: {
  		"show": function(){
  			var mySwiper = new Swiper('#home-swiper',{
  				loop:true,
  				pagination : '.swiper-pagination',
				paginationClickable :true
  			});
  		}
  	}
  
});
