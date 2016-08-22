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
  	},
  	// 获得vm
	/*var vm = this.getVM();
	
	// ajax拉取数据
	$.ajax({
	    url: '/api/livelist.php',
		type: 'get',
		data: {
	  		type: 'home'
		},
	    success: function (res) {
	    	vm.livelist = res.data.category.items;
	    }
	});*/
  
});
