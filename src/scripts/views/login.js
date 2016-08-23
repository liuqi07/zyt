var loginTpl = require('../tpls/login.string');

// 定义视图
SPA.defineView('login', {
  	// 装载模板
  	html: loginTpl,

    plugins: ['delegated'],
    bindActions: {
        'goto.register': function () {
            SPA.open('register');
        },
        'back': function () {
            this.hide();
        }
    }

});
