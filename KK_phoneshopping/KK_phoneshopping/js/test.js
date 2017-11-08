//测试动画的脚本
(()=>{
  var test = 
  [
    {
    //getElementsByClassName() 方法返回文档中所有指定类名的元素集合，【作为 NodeList 对象】。
      elem:document.getElementsByClassName('screen-1__heading')[0],
      init:'screen-1__heading screen-1__heading_animate_init',
      done:'screen-1__heading screen-1__heading_animate_done'
    },
    {
      elem:document.getElementsByClassName('screen-1__phone')[0],
      init:'screen-1__phone screen-1__phone_animate_init',
      done:'screen-1__phone screen-1__phone_animate_done'
    },
    {
      elem:document.getElementsByClassName('screen-1__shadow')[0],
      init:'screen-1__shadow screen-1__shadow_animate_init',
      done:'screen-1__shadow screen-1__shadow_animate_done'
    }
  ];

  var init = true;

  document.getElementsByClassName('screen-1')[0].onclick =function() {
    for(var i=0;i<test.length;i++){
      test[i]['elem'].setAttribute('class', init ? test[i]['init'] : test[i]['done'] );
    }
    init = !init;
  }
})(); // 屏幕1测试动画


(()=>{
  var test=[
	{
	  elem:document.getElementsByClassName('screen-2__heading')[0],	
	  init:'screen-2__heading screen-2__heading_animate_init',
	  done:'screen-2__heading screen-2__heading_animate_done'
	},
	{
	  elem:document.getElementsByClassName('screen-2__subheading')[0],
	  init:'screen-2__subheading screen-2__subheading_animate_init',
	  done:'screen-2__subheading screen-2__subheading_animate_done'
	},
	{
	  elem:document.getElementsByClassName('screen-2__phone')[0],
	  init:'screen-2__phone screen-2__phone_animate_init',
	  done:'screen-2__phone screen-2__phone_animate_done'
	},
	{
	  elem:document.getElementsByClassName('screen-2__point_i_1')[0],
	   init:'screen-2__point screen-2__point_i_1 screen-2__point_i_1_animate_init',
       done:'screen-2__point screen-2__point_i_1 screen-2__point_i_1_animate_done'
	},
	{
	  elem:document.getElementsByClassName('screen-2__point_i_2')[0],
	  init:'screen-2__point screen-2__point_i_2 screen-2__point_i_2_animate_init',
      done:'screen-2__point screen-2__point_i_2 screen-2__point_i_2_animate_done'
	},
	{
	  elem:document.getElementsByClassName('screen-2__point_i_3')[0],
	  init:'screen-2__point screen-2__point_i_3 screen-2__point_i_3_animate_init',
	  done:'screen-2__point screen-2__point_i_3 screen-2__point_i_3_animate_done'
	}
  ]
  var init = true;
  document.getElementsByClassName('screen-2')[0].onclick = function(){
  	for(var i=0;i<test.length;i++){
  		test[i]['elem'].setAttribute('class', init ? test[i]['init'] : test[i]['done']);
  	}
  	init = !init;
  }
})();// 屏幕2测试动画


(()=>{
  var test=[
	{
		elem:document.getElementsByClassName('screen-3__heading')[0],
		init:'screen-3__heading screen-3__heading_animate_init',
		done:'screen-3__heading screen-3__heading_animate_done'
	},
	{
        elem:document.getElementsByClassName('screen-3__subheading')[0],
        init:'screen-3__subheading screen-3__subheading_animate_init',
        done:'screen-3__subheading screen-3__subheading_animate_done'
    },
    {
        elem:document.getElementsByClassName('screen-3__phone')[0],
        init:'screen-3__phone screen-3__phone_animate_init',
        done:'screen-3__phone screen-3__phone_animate_done'
    },
    {
        elem:document.getElementsByClassName('screen-3__features')[0],
        init:'screen-3__features screen-3__features_animate_init',
        done:'screen-3__features screen-3__features_animate_done'
    }
  ]
  var init = true;
  document.getElementsByClassName('screen-3')[0].onclick=function(){
  	for(var i=0;i<test.length;i++){
  	  test[i]['elem'].setAttribute('class',init ? test[i]['init'] : test[i]['done']);
    }
  	init = !init;
  }
  
})();//屏幕3测试动画


(()=>{
  var test=[
   {
  	elem:document.getElementsByClassName('screen-4__heading')[0],
  	init:'screen-4__heading screen-4__heading_animate_init',
  	done:'screen-4__heading screen-4__heading_animate_done'
   },
   {
    elem:document.getElementsByClassName('screen-4__subheading')[0],
    init:'screen-4__subheading screen-4__subheading_animate_init',
    done:'screen-4__subheading screen-4__subheading_animate_done'
   },
   {
   	elem:document.getElementsByClassName('screen-4__type')[0],
    init:'screen-4__type screen-4__type_animate_init',
    done:'screen-4__type screen-4__type_animate_done'
   }
  ];
  var init = true;
  var screen4 = document.getElementsByClassName('screen-4')[0];
  screen4.onclick = function(){
  	for(var i=0;i<test.length;i++){
  		test[i]['elem'].setAttribute('class',init ? test[i]['init'] : test[i]['done']);
  	}
  	init = !init;
  }
  
})();//屏幕4测试动画


(()=>{
	var test=[
		{
			elem:document.getElementsByClassName('screen-5__heading')[0],
			init:'screen-5__heading screen-5__heading_animate_init',
			done:'screen-5__heading screen-5__heading_animate_done'
		},
		 {
            elem:document.getElementsByClassName('screen-5__subheading')[0],
            init:'screen-5__subheading screen-5__subheading_animate_init',
            done:'screen-5__subheading screen-5__subheading_animate_done'
          }
          ,
          {
            elem:document.getElementsByClassName('screen-5__back')[0],
            init:'screen-5__back screen-5__back_animate_init',
            done:'screen-5__back screen-5__back_animate_done'
          }
	];
	var init = true;
	var screen5 = document.getElementsByClassName('screen-5')[0]
	screen5.onclick = function(){
		for(var i=0;i<test.length;i++){
			test[i]['elem'].setAttribute('class',init ? test[i]['init'] : test[i]['done']);
		}
		init = !init;
	}
})();  //屏幕5测试动画



