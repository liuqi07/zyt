var cartTpl = require('../tpls/cart.string');

// 定义视图
SPA.defineView('cart', {
  	// 装载模板
  	html: cartTpl,
  	plugins: [{
    name: 'avalon',
    options: function (vm) {
      vm.cart = [];
    }
  }],
bindEvents: {
	'show': function () {
		 // 获得vm
	    var vm = this.getVM();
	      // ajax拉取数据
	      $.ajax({
	        url: '/zyt/mock/cart.json',
	        type: 'get',
	        success: function (res) {
	        vm.cart = res.data.items;
	        caoz();
	        }
	      });
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
          url: '/api/cart.php',
          type: 'get',
          success: function (res) {
             myScroll.scrollTo(0, -topSize);
            head.removeClass('up');
            head.attr('src', '/zyt/img/arrow.png');
          vm.cart=res.data.items;
          caoz();
          }
        });
        }

    var maxY = this.maxScrollY - this.y;
    var self = this;
    if (maxY > -topSize && maxY < 0) {
      myScroll.scrollTo(0, self.maxScrollY + topSize);
      foot.removeClass('down')
    } else if (maxY >= 0) {
      foot.attr('src', '/zyt/img/ajax-loader.gif');

      $.ajax({
        url: '/api/cart.php',
        type: 'get',
        success: function (res) {
        vm.cart.pushArray(res.data.items);
        caoz();
        }
      });
    }
    });
    function caoz(){
                    var $tol1=$(".zj");
        var $tol2=$(".zj2");
        var $cj=$(".cj");
        var bymony=299;
        var yfmony=10;
        var myfj;
        var chajia;
        //计算总价
        function jisuantol(){
            var $prie=$(".wkf_right p:last-child i:last-child");
            var $num=$(".wkf_add span:nth-child(2)");
            var allmony=0;
            $prie.each(function(i){
                var price=parseFloat($(this).html());
                var num=parseFloat($num.eq(i).html());
                if($(this).parents().find(".wkf_swp_left").find(".wkfdx")[0].judge){
                    allmony+=price*num;
                }
            });
            allmony=allmony.toFixed(1);
            myfj=(allmony-yfmony).toFixed(1);
            chajia=(bymony-allmony).toFixed(1);
            $tol1.html(allmony);
            if(allmony<bymony){
                $cj.html(chajia);
                $tol2.html(allmony);
                $(".yf").show();
                $(".myf").hide();
            }else{
                $tol2.html(myfj);
                $(".yf").hide();
                $(".myf").show();
                $(".myfl").html("0.0");
            }
        }
        //是不是全选
        function isAllselect(){
            var onoff=true;
            $(".wkfdx").each(function(){
                if(!this.judge)onoff=false;
            });
            if(!onoff){
                $(".wkfi").addClass("wkfbg-no");
                $(".wkfi")[0].judge=false;
            }else{
                $(".wkfi").removeClass("wkfbg-no");
                $(".wkfi")[0].judge=true;
            }
        }
        //减事件
        $(".wkf_add span:first-child").on("tap",function(){
            if(!$(this).parent().parent().find(".wkfdx")[0].judge)return;
            var $goolnum=$(this).parent().find("span").eq(1);
            var goolnum=parseInt($goolnum.html());
            if(goolnum>1){
                goolnum--;
                $goolnum.html(goolnum);
                jisuantol();
            }else{
                return alert("最少购买1件");
            }
        });
        //加事件
        $(".wkf_add span:last-child").on("tap",function(){
            if(!$(this).parent().parent().find(".wkfdx")[0].judge)return;
            var $goolnum=$(this).parent().find("span").eq(1);
            var goolnum=parseInt($goolnum.html());
            if(goolnum<=98){
                goolnum++;
                $goolnum.html(goolnum);
                jisuantol();
            }else{
                return alert("最多购买99件");
            }
        });
        //按钮点击事件
        $(".wkfdx").each(function(i){
            this.judge=true;
            $(this).on("tap",function(){
                this.judge=!this.judge;
                if(this.judge){
                    $(this).removeClass("wkfbg-no")
                    isAllselect();
                }else{
                    $(this).addClass("wkfbg-no");
                    isAllselect();
                }
                jisuantol();
            })
        })

        quanxuan();
        jisuantol();
        //禁止滚动条反弹
//		this.widgets.myScroll.options.bounce=false;





//=============================================================================================
        var $editor=$("#editor");
        var $wanc=$("#wanc");
        var $schu=$("#schu");
        var $jies=$("#jies")
        $editor.on("tap",function(){
//			console.log(1)
            $(this).addClass("hid").siblings().removeClass("hid");
            $schu.removeClass("hid").siblings().addClass("hid")
        })
        $wanc.on("tap",function(){
//			console.log(1)
            $(this).addClass("hid").siblings().removeClass("hid");
            $schu.addClass("hid").siblings().removeClass("hid")
        })
        $schu.on("tap",function(){
//			quanxuan();
//			console.log(1)
        })

        //全选函数
        function quanxuan(){
            this.judge=true;
            $(".wkfi").on("tap",function(){
                this.judge=!this.judge;
                if(this.judge){
                    $(".wkfi,.wkfdx").removeClass("wkfbg-no");
                    $(".wkfdx").each(function(){
                        this.judge=true;
                    })

                }else{
                    $(".wkfi,.wkfdx").addClass("wkfbg-no");
                    $(".wkfdx").each(function(){
                        this.judge=false;
                    })
                }
                jisuantol();
            })
        }
}
}
}
});
