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
        },
        "login_":function(){
          var user1=$("#tel").val();
          var pass1=$("#pass").val();
          $.ajax({
              url:"http://datainfo.duapp.com/shopdata/userinfo.php",
              data:{
                  status:"login",
                  userID:user1,
                  password:pass1

              },
              success:function(data){
                  if(data==0){
                      $(".bm1").html("用户名不存在！")
                  }else if(data==2){
                      $(".bm1").html("密码输入有误！")
                  }else{
                    $(".bm1").html("登录成功！");
                    SPA.open('home');
                  }
              }
          })
        }
    }

});
