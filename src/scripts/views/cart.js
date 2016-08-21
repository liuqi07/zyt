var cartTpl = require('../tpls/cart.string');

// 定义视图
SPA.defineView('cart', {
  	// 装载模板
  	html: cartTpl,
bindEvents: {
	'show': function () {
		var n=0;
		var num=$("#wkf_add span:nth-child(2)").html();
		var prie=$("#wkf_right p:last-child i:last-child").html();
		var tol=$("#zj").html();
		var tol2=$("#zj2").html();
		var cj=$("#cj").html();
		var chajia=parseFloat(cj-tol);
//		console.log(chajia);
		console.log(cj)
		console.log(tol)
		$("#wkf_add span:first-child").on("tap",function(){
//			console.log(prie)
//			var chajia=parseFloat(cj-tol);
			if(chajia<=0){
				$("#myf").show();
				$("#yf").hide();
			}
			console.log(chajia);
			if(n>=1){
				
				n--;
				prie=parseFloat(prie)
				num=parseFloat(num)-1;
				tol=prie*num;
				tol2=tol;
				if(tol2>=299){
					tol2=tol2-10
				}
				$("#wkf_add span:nth-child(2)").html(num);
				$("#zj").html(tol);
				$("#zj2").html(tol2);
				
			}
			
		})
		$("#wkf_add span:last-child").on("tap",function(){
			if(chajia<=0){
				$("#myf").show();
				$("#yf").hide();
			}
			n++;
			console.log(chajia);
				prie=parseFloat(prie)
				num=parseFloat(num)+1;
				tol=prie*num;
				tol2=tol;
				if(tol2>=299){
					tol2=tol2-10
				}
				
				$("#wkf_add span:nth-child(2)").html(num);
				$("#zj").html(tol);
				$("#zj2").html(tol2);
				
		})
				
	}
}
 
 
});
