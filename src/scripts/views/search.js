var searchTpl = require('../tpls/search.string');

// 定义视图
SPA.defineView('search', {
  	// 装载模板
  	html: searchTpl,

    plugins: ['delegated'],
    bindActions: {
        'goto.cart': function () {
            SPA.open("cart");
        },
        'back': function () {
            this.hide();
        }
    }

});