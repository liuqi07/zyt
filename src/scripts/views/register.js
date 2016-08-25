var registerTpl = require('../tpls/register.string');

// 定义视图
SPA.defineView('register', {
  	// 装载模板
  	html: registerTpl,

    plugins: ['delegated'],
    bindActions: {
      'back': function () {
          this.hide();
      },
      // 改变验证码
      'yanzheng': function () {
        function jrxclick(){
          var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
          var str = '';
          while (str.length < 4) {
              var iNum = parseInt(Math.random() * 100)
              while (iNum > 36) {
                  iNum = parseInt(Math.random() * 100)
              }
              str += arr[iNum];
          }
          $(".yan").html(str);
        }
        jrxclick();
        $("#reg_verify").blur(function(){
          if($(this).val()!=$(".yan").html()){
            $(".fot").html("验证码错误！");
            $(this).focus();
          }
        })
      },
      // 请输入手机号
      'register_': function(){
          $("#reg_tel").blur(function(){
            // var tel=$("#reg_tel").val();
            // var reg_in=$("#reg_in").val();
            // var $result=$(".fot");
           var re=/^[a-zA-z]\w{3,15}$/;
           var re1=/^1\d{10}$/;
           if(re.test($("#reg_tel").val())||re1.test($("#reg_tel").val())){
               var user=$("#reg_tel").val();
               //发送一次ajax请求用获取用户信息端口看要注册的账号是否被注册过
               $.ajax({
                   url:"http://datainfo.duapp.com/shopdata/getuser.php",
                   dataType:"jsonp",
                   data:{
                       userID:user
                   },
                   success:function(data){
                       if(data==0){
                           $(".fot").html("恭喜您，账号未注册！")  //账号栏下面的<span>标签显示
                           $(".fot").css("color","green")       //账号栏下面的<span>标签文字变绿
                       }else{
                           $(".fot").html("抱歉，用户名已被注册！")  //返回值为0
                           $("#reg_tel").val("");
                       }
                   },

               })
           }else{
               $("reg_tel").val("");
               $(".fot").html("账号格式应为手机格式！")
           }

         })
       },
        // 密码验证
      "reg_rep":function(){
          $("#reg_repeat").blur(function(){
          if($("#reg_repeat").val()==$("#reg_in").val()){
              $(".fot").html("")
          }else{
              $(".fot").html("密码输入不一致！")
              $("#reg_repeat").val("");
              $("#reg_in").val("");
          }
        })
      },
      // 同意
      "degr":function(){
        $(".ko").toggleClass("tong")
      },
      // 提交
      "sub":function(){
        // touch.on(".btn_","tap",function(){
        if($('.ko').hasClass('tong')){
          if($("#reg_tel").val()==""){
              $(".fot").html("账号不能为空！");
          }else if($("#reg_in").val()==""){
              $(".fot").html("请输入密码！");
          }else if($("#reg_repeat").val()==""){
              $(".fot").html("请再次输入密码！");
          }else if($("#jrx-text4").val()==""){
              $("#jrx-text4+span+span").html("请输入验证码！");
          }else if($("#jrx-text4").val()!=$(".yzm").html()){
              $("#jrx-text4+span+span").html("验证码输入不正确！");
              jrxclick();
         
        }else{
              var user=$("#reg_tel").val();
              var pass=$("#reg_in").val();
              $.ajax({
                  url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                  data:{
                      status:"register",
                      userID:user,
                      password:pass
                  },
                  success:function(data){
                      if(data==1){
                          $(".fot").html("注册成功！");
                          SPA.open("home");
                         //  window.location.href="jrx-index2.html";
                      }else if(data==2){
                         $(".fot").html("不好意思，出错了！")
                      }
                  },
              })
          }

        }else{
          $(".fot").html("您是否同意正源通用户协议！")
        }


      }

    }

});
