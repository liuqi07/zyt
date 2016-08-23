var registerTpl = require('../tpls/register.string');

// 定义视图
SPA.defineView('register', {
  	// 装载模板
  	html: registerTpl,

    plugins: ['delegated'],
    bindActions: {
        'back': function () {
            this.hide();
        }
    }

});
