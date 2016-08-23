var homeTpl= require('../tpls/home.string');

// 定义视图
SPA.defineView('home', {
  	// 装载模板
  	html: homeTpl,

  	plugins: [{
  		name: 'avalon',
  		options: function(vm){
  			vm.banner = [];
  			vm.category = [];
  			vm.hotProd = [];
  			vm.onSale = [];
  		}
  	}],

  	//绑定视图事件
  	bindEvents: {
  		"show": function(){
  			//获得vm
  			var vm = this.getVM();
  			//ajax拉取数据
  			//轮播图
            var mySwiper = new Swiper('#home-swiper',{
  				loop:true,
  				pagination : '.swiper-pagination',
				paginationClickable :true
  			});
  			$.ajax({
  				url: '/api/banner.php',
  				type: 'get',
  				success: function(res){
  					console.log(res.data.items);
  					vm.banner = res.data.items;
  				}
  			});

  			//list1  list2  list3
  			$.ajax({
  				url: '/api/home.php',
  				type: 'get',
  				success: function(res){
  					console.log(res);
  					console.log(res.data.onSale.items);
  					vm.category = res.data.category.items;
  					vm.onSale = res.data.onSale.items;
  					vm.hotProd = res.data.hotProd.items;
  				}
  			});


  		}
  	},


});
