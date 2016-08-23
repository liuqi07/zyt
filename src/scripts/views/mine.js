var mineTpl = require('../tpls/mine.string');

// 定义视图
SPA.defineView('mine', {
  	// 装载模板
  	html: mineTpl,
    //定义插件
    plugins: ['delegated'],
    bindActions: {
        'goto.login': function (el) {
            SPA.open('login');
        }
    }

});
