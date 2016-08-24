var searchTpl = require('../tpls/search.string');

// 定义视图
SPA.defineView('search', {
  	// 装载模板
  	html: searchTpl,

    plugins: [{
	    name: 'avalon',
	    options: function (vm) {
	    	vm.search = [];
	    }
	},'delegated'],

    bindActions: {
        'goto.cart': function () {
            SPA.open("cart");
        },
        'back': function () {
            this.hide();
        },
        'goto.good': function(el, data){
            console.log(el+' '+data);
            SPA.open('good', {
                param: {
                    id: data.id
                }
            })
        }
    },
    bindEvents: {
    	'show': function(){
    		var vm = this.getVM();
    		var $search = $("#search-container>header>.search>input");

    		$search.on('blur',function(){
    			var txt = $search.val();
    			$.ajax({
    				url: '/api/allGoods.php',
    				type: 'get',
    				success: function(res){
    					//console.log(res.data.items);
    					var json = res.data.items;
    					var arr = [];
    					$(json).each(function(i){
    						//console.log($(json).eq(i)[0].name);
    						if($(json).eq(i)[0].name.indexOf(txt)!=-1){
    							arr.push($(json).eq(i)[0]);
    						}
    					});
    					//console.log(arr);
    					if(arr.length==0){
    						alert("没有搜索到任何商品！");
    					}else{
	    					vm.search = arr;
    					}
    				}
    			})
    		});
    	}
    }

});
