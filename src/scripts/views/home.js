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
  	},'delegated'],
	bindActions: {
        'goto.search': function () {
            SPA.open('search');
        }
   },
  	//绑定视图事件
  	bindEvents: {
  		"show": function(){
  			//获得vm
  			var vm = this.getVM();
  			//ajax拉取数据
  			//轮播图

  			$.ajax({
  				url: '/api/banner.php',
  				type: 'get',
  				success: function(res){
  					//console.log(res.data.items);
  					vm.banner = res.data.items;
  					var mySwiper = new Swiper('#home-swiper',{
	  				loop:true,
	  				pagination : '.swiper-pagination',
					paginationClickable :true
	  			});
  				}
  			});

  			//list1  list2  list3
  			$.ajax({
  				url: '/api/home.php',
  				type: 'get',
  				success: function(res){
  					vm.category = res.data.category.items;
  					vm.onSale = res.data.onSale.items;
  					vm.hotProd = res.data.hotProd.items;
  				}
  			});
            // ================================================
            var myScroll = this.widgets.myScroll;
            var topSize = 35;
            var head = $('.head img'),
                 topImgHasClass = head.hasClass('up');
            var foot = $('.foot img'),
                 bottomImgHasClass = head.hasClass('down');
            myScroll.on('scroll', function () {
                var y = this.y,
                maxY = this.maxScrollY - y;
                if (y >= 0) {
                    $('.head').show();
                    !topImgHasClass && head.addClass('up');
                    return '';
                }
                if (maxY >= 0) {
                    $('.foot').show();
                    !bottomImgHasClass && foot.addClass('down');
                    return '';
                }
            });
            myScroll.on('scrollEnd', function () {
                if (this.y >= -topSize && this.y < 0) {
                    myScroll.scrollTo(0, -topSize);
                    head.removeClass('up');
                } else if (this.y >= 0) {
                    head.attr('src', '/zyt/img/ajax-loader.gif');
                    // ajax下拉刷新数据
                    $.ajax({
         				url: '/api/home.php',
         				type: 'get',
         				success: function(res){
         					vm.onSale = res.data.onSale.items;
         				}
         			});
                }

                var maxY = this.maxScrollY - this.y;
                var self = this;
                if (maxY > -topSize && maxY < 0) {
                    myScroll.scrollTo(0, self.maxScrollY + topSize);
                    foot.removeClass('down');
                } else if (maxY >= 0) {
                    foot.attr('src', '/zyt/img/ajax-loader.gif');
                    $.ajax({
                        url: '/api/home.php',
                        type: 'get',
                        success: function(res){
                            vm.onSale.pushArray(res.data.onSale.items);
                        }
                    });
                }
            });


  		}
  	},


});
