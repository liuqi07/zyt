var cartTpl = require('../tpls/cart.string');

// 定义视图
SPA.defineView('cart', {
  	// 装载模板
  	html: cartTpl,
bindEvents: {
	'show': function () {
		var n=0;
		var by = 240;
		var num=$("#wkf_add span:nth-child(2)").html();
		var prie=$("#wkf_right p:last-child i:last-child").html();
		var tol=$("#zj").html();
		var tol2=$("#zj2").html();
		var cj=$("#cj").html();
		var chajia=parseFloat(cj-tol);
		$("#cj").html(chajia)
		console.log(cj)
		console.log(tol)
			if(cj<=tol){
				
				$("#yf").hide();
				$("#myf").show();
			}else{
				$("#yf").show();
				$("#myf").hide();
			}
		$("#wkf_add span:first-child").on("tap",function(){
			num--;
			if(num<1){
				num=1;
				return;
			}
			$("#wkf_add span:nth-child(2)").html(num);
			tol = num * prie;
			$("#zj").html(tol);
			chajia = tol - by;
			if(chajia<=0){
				$("#cj").html(Math.abs(chajia));
				$("#myfl").html("10.0");
				$("#yf").show();
				$("#myf").hide();
			}else{
				$("#myfl").html(0);
				$("#yf").hide();
				$("#myf").show();
			}
			tol2=tol;
			if(tol2>=299){
				tol2=tol2-10
			}	
			$("#zj2").html(tol2);
		})
		$("#wkf_add span:last-child").on("tap",function(){
			
			num++;
			$("#wkf_add span:nth-child(2)").html(num);
			tol = num*prie;
			$("#zj").html(tol);
			chajia = cj - tol;
			$("#cj").html(chajia);
			if(chajia<=0){
				$("#yf").hide();
				$("#myf").show();
				$("#myfl").html(0);
			}
			tol2=tol;
			if(tol2>=299){
				tol2=tol2-10
			}	
			$("#zj2").html(tol2);
		})
				
	}
}
 
 
});
