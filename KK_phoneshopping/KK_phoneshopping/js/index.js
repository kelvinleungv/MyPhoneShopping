//获取元素
var getClass = function (className) {
  return document.getElementsByClassName(className);
}
//添加样式
var addCls = function(Element,_className){
	//等于trim()  Element.className 获取并设置指定元素的class属性的值。
	var className = Element.className.split(' ');
	var classNameMap = []
	for(var i=0;i<className.length;i++){
		classNameMap[className[i]] = 1;   //
	}
	 classNameMap[_className] = 1;
	 var classNewName =[];
	 for(i in classNameMap){
	 	 classNewName.push(i);
	 }
	 Element.className = classNewName.join(' ');
}

//删除样式
var delCls = function(Element,_className){
	var className= Element.className.split(' ');
	var classNameMap = []
	for(var i=0;i<className.length;i++){
		classNameMap[className[i]] = 1;
	}
	delete classNameMap[_className];
	
	var classNewName=[];
	for(i in classNameMap){
		classNewName.push(i);
	}
	Element.className = classNewName.join(' ');
}



//获取元素
	//头部
	var header = getClass('header')[0];
	var outline = getClass('outline')[0];
	
	//第一屏元素
	var s1_heading = getClass('screen-1__heading')[0];
	var s1_phone = getClass('screen-1__phone')[0];
	var s1_shadow = getClass('screen-1__shadow')[0];
	
	//第二屏元素
	var s2_heading = getClass('screen-2__heading')[0];
	var s2_subheading = getClass('screen-2__subheading')[0];
	var s2_phone = getClass('screen-2__phone')[0];
	var s2_i1 = getClass('screen-2__point_i_1')[0];
	var s2_i2 = getClass('screen-2__point_i_2')[0];
	var s2_i3 = getClass('screen-2__point_i_3')[0];
	
	//第三屏元素
	var s3_heading = getClass('screen-3__heading')[0];
	var s3_subheading = getClass('screen-3__subheading')[0];
	var s3_phone = getClass('screen-3__phone')[0];
	var s3_features = getClass('screen-3__features')[0];
	
	//第四屏元素
	var s4_heading = getClass('screen-4__heading')[0];
	var s4_subheading = getClass('screen-4__subheading')[0];
	var s4_type = getClass('screen-4__type')[0];
	
	//第五屏幕
	var s5_heading = getClass('screen-5__heading')[0];
	var s5_subheading = getClass('screen-5__subheading')[0];
	var s5_back = getClass('screen-5__back')[0];

//页面载入完成之后，全部动画变成init
window.onload = function(argument){
	
//设置元素(init)
//	addCls(header,'header_active_1');
	
	addCls(s1_heading,'screen-1__heading_animate_init');
	addCls(s1_phone,'screen-1__phone_animate_init');
	addCls(s1_shadow,'screen-1__shadow_animate_init');
	
	addCls(s2_heading,'screen-2__heading_animate_init');
	addCls(s2_subheading,'screen-2__subheading_animate_init');
	addCls(s2_phone,'screen-2__phone_animate_init');
	addCls(s2_i1,'screen-2__point_i_1_animate_init');
	addCls(s2_i2,'screen-2__point_i_2_animate_init')
	addCls(s2_i3,'screen-2__point_i_3_animate_init')
	
	addCls(s3_heading,'screen-3__heading_animate_init');
	addCls(s3_subheading, 'screen-3__subheading_animate_init');
	addCls(s3_phone,'screen-3__phone_animate_init' );
	addCls(s3_features,'screen-3__features_animate_init' );
	
	addCls(s4_heading,'screen-4__heading_animate_init');
	addCls(s4_subheading,'screen-4__subheading_animate_init');
	addCls(s4_type,'screen-4__type_animate_init');
	
	addCls(s5_heading,'screen-5__heading_animate_init');
	addCls(s5_subheading,'screen-5__subheading_animate_init');
	addCls(s5_back,'screen-5__back_animate_init');
	
	//先设置第一屏开始就显示
	setTimeout(function () {

	    getClass('screen-1__heading')[0].style.visibility='visible';
	    getClass('screen-1__phone')[0].style.visibility='visible';
	    getClass('screen-1__shadow')[0].style.visibility='visible';

    addCls( getClass('screen-1__heading')[0] , 'screen-1__heading_animate_done' );
    addCls( getClass('screen-1__phone')[0] , 'screen-1__phone_animate_done' );
    addCls( getClass('screen-1__shadow')[0] , 'screen-1__shadow_animate_done' );
  },500)
	
	
	//点击事件
	var navItems =document.getElementById('header__nav').children;
	var setNavJump = function(i,lib){
		var item = lib[i];
		item.onclick = function(){
//			alert(i);
			document.body.scrollTop = i*800;
		}
	}
	for(var i=0;i<navItems.length;i++){
		setNavJump(i,navItems);
	}	
}


function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

function show(obj){
	obj.style.display='block';
}

function hide(obj){
	obj.style.display='none';
}


window.onscroll = function(){
	if(scroll().top>0){
		addCls(header,'header_status_black');
		show(outline);
		outline.setAttribute('class','outline outline_active_1');
	}else{
		header.setAttribute('class','header header_active_1')
		hide(outline);
	}
	if(scroll().top >800-61){
		 getClass('header')[0].setAttribute('class','header header_status_black header_active_2');
		//先删除
		delCls(getClass('screen-2__heading')[0],'screen-2__heading_animate_init');
		delCls(getClass('screen-2__subheading')[0],'screen-2__subheading_animate_init');
		delCls(getClass('screen-2__phone')[0],'screen-2__phone_animate_init');
		delCls(s2_i1,'screen-2__point_i_1_animate_init')
		delCls(s2_i2,'screen-2__point_i_2_animate_init')
		delCls(s2_i3,'screen-2__point_i_3_animate_init')	
		//后添加
		addCls(getClass('screen-2__heading')[0],'screen-2__heading_animate_done')
		addCls(getClass('screen-2__subheading')[0],'screen-2__subheading_animate_done');
		addCls(getClass('screen-2__phone')[0],'screen-2__phone_animate_done')
		addCls(s2_i1,'screen-2__point_i_1_animate_done')
		addCls(s2_i2,'screen-2__point_i_2_animate_done')
		addCls(s2_i3,'screen-2__point_i_3_animate_done')	
		
		outline.setAttribute('class','outline outline_active_2');
	}
	
	if(scroll().top > 800*2-61){
		getClass('header')[0].setAttribute('class','header header_status_black header_active_3');
		
		delCls(s3_heading,'screen-3__heading_animate_init');
		delCls(s3_subheading,'screen-3__subheading_animate_init')
		delCls(s3_phone,'screen-3__phone_animate_init')
		delCls(s3_features,'screen-3__features_animate_init')
		
		addCls(s3_heading,'screen-3__heading_animate_done')
		addCls(s3_subheading,'screen-3__subheading_animate_done')
		addCls(s3_phone,'screen-3__phone_animate_done')
		addCls(s3_features,'screen-3__features_animate_done')
		
		outline.setAttribute('class','outline outline_active_3');
	}
	
	if(scroll().top > 800*3 -61){
		getClass('header')[0].setAttribute('class','header header_status_black header_active_4');
		
		delCls( getClass('screen-4__heading')[0] , 'screen-4__heading_animate_init' );
    delCls( getClass('screen-4__subheading')[0] , 'screen-4__subheading_animate_init' );
    delCls( getClass('screen-4__type')[0] , 'screen-4__type_animate_init' );
    
    addCls( getClass('screen-4__heading')[0] , 'screen-4__heading_animate_done' );
    addCls( getClass('screen-4__subheading')[0] , 'screen-4__subheading_animate_done' );
    addCls( getClass('screen-4__type')[0] , 'screen-4__type_animate_done' );
    
    outline.setAttribute('class','outline outline_active_4');
	}
	
	if(scroll().top > 800*4 - 61){
		getClass('header')[0].setAttribute('class','header header_status_black header_active_5');
		
		delCls( getClass('screen-5__heading')[0] , 'screen-5__heading_animate_init' );
    delCls( getClass('screen-5__subheading')[0] , 'screen-5__subheading_animate_init' );
    delCls( getClass('screen-5__back')[0] , 'screen-5__back_animate_init' );


    addCls( getClass('screen-5__heading')[0] , 'screen-5__heading_animate_done' );
    addCls( getClass('screen-5__subheading')[0] , 'screen-5__subheading_animate_done' );
    addCls( getClass('screen-5__back')[0] , 'screen-5__back_animate_done' );
    
    outline.setAttribute('class','outline outline_active_5');
	}
}
