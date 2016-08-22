var listTpl = require('../tpls/list.string');

// 定义视图
SPA.defineView('list', {
  	// 装载模板
  	html: listTpl,
  	
  	
  	
  	plugins: [{
    name: 'avalon',
    options: function (vm) {
      vm.list = [];
      vm.listCont = [];
    }
  }],
  
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
	    	vm.list = res.data.detail;
	    	vm.listCont = res.data.detail.cont;
	    	console.log(res.data.detail)
	    }
	})
  }
   }
});
