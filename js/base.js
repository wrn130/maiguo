window.onload=function(){
	var ochange=document.getElementById("change");
	ochange.onclick=function(){
		var oimg=ochange.getElementsByTagName("img");
		oimg.setAttribute("src","images/adress_dj_03.png")
	}

}

//购物车的数量加减
function modified(current){
	for(var i=0;i<current.length;i++){
		current[i].onclick= function () {
			if(this.innerHTML=="+"){
				this.previousElementSibling.value++;
			}
			else if(this.innerHTML=="-"){
				this.nextElementSibling.value--;
				if(this.nextElementSibling.value<=1){
					this.nextElementSibling.value=1;
				}
			}
		}
	}
}

/*手机正则验证*/

function checkPhone(str){
	if(!(/^1[3|4|5|7|8]\d{9}$/.test(str))){
		return false;
	}
	return true;
}
function fanhui(returns){
	returns.onclick=function(){
		history.back();
	}
}


