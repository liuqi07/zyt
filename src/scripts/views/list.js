var listTpl = require('../tpls/list.string');

// 定义视图
SPA.defineView('list', {
  	// 装载模板
  	html: listTpl,

    plugins: [{
	    name: 'avalon',
	    options: function (vm) {
	    	vm.list = [];
	    }
	},'delegated'],
	bindActions: {
		'goto.search': function(){
			SPA.open('search');
		}
	},
    // 绑定视图事件
	bindEvents: {
		'show': function () {
	  		// 获得vm
			var vm = this.getVM();

			// ajax拉取数据
			$.ajax({
			    url: '/api/list.php',
				type: 'get',
				data: {
			  		type: 'list'
				},
			    success: function (res) {
			    	console.log(res.data);
			    	console.log(res.data.items);
			    	vm.list = res.data.items;
			    }
			})
		}
	}
});
