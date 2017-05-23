 //自适应
			window.onload = function(){
			var wid =document.documentElement.clientWidth;
			var scale = wid/640;
			document.body.style.zoom = scale;
			
			window.onresize = function(){
			var wid =document.documentElement.clientWidth;
			var scale = wid/640;
			document.body.style.zoom = scale;
		}
		  //定义保存坐标的变量,同事初始化
		  var starY=endY=0;
		  //确认当前页面的序列号
		  var curIndex=1;
		  //添加页面元素滑动事件
		  document.addEventListener("touchstart",touchstart,false);
	      document.addEventListener("touchmove",touchmove,false);
	      document.addEventListener("touchend",touchend,false);
		  //编写对应的执行函数
		   function touchstart(e){
		   	   //避免函数卡死
		      try{
		         //判断是否存在touch事件
		         if(e.touches[0]){
		         	//获取开始触摸时的y轴坐标
		         	startY=e.touches[0].clientY;
		         }
		      }catch(e){
		      	  console.log("请检查错误")
		      }
		   }
		   
		   function touchmove(e){
			   try{
			      if(e.touches[0]){
			          endY=e.touches[0].clientY;
			         }
			      }catch(e){
			      	  console.log("请检查错误")
			  }   
		   }
		   
		   function touchend(){
			   //根据坐标值对比，判断滑动方向
			   if(startY>endY){//向上
				   console.log("向上");
				   var _name="#page"+curIndex;
				   if(curIndex==9){return;}
				   $(_name).slideUp(500,function(){
					  curIndex++;  
					  animate(curIndex);
				   });
			   }else{
				   if(curIndex==1){return;}
				   curIndex--;
				   console.log("向下");
				   var _name="#page"+curIndex;
				  $(_name).slideDown(500,function(){
				     animate(curIndex);
				    })
			   }
		   }
		   //初始化动画
		  animate(curIndex);
		   //动画
		   function animate(index){
			   var _n="#img"+index;
			   var _n1="#num"+index;
			   $(".tp").css({
				   opacity:"0"
			   })
			   $(".num1").css({
			      marginLeft:"-252px",
			      left:"-60%"
			   })  
			   switch(index){
			      case 1:
                  $(_n).animate({opacity:1},300);
                  $(_n1).delay(250).animate({left:"50%"},800);			   
                  break;
                  
			      case 2:
	              $(_n).animate({opacity:1},300);
	              $(_n1).delay(250).animate({left:"50%"},800)			   
	              break;
			    
			      case 3:
		          $(_n).animate({opacity:1},300);
		          $(_n1).delay(250).animate({left:"50%"},800)			   
		          break;
		          
			      case 4:
		          $(_n).animate({opacity:1},300);
		          $(_n1).delay(250).animate({left:"50%"},800)			   
		          break;
		              
			      case 5:
		          $(_n).animate({opacity:1},300);
		          $(_n1).delay(250).animate({left:"50%"},800)			   
		          break;
		          case 6:
		          $(_n).animate({opacity:1},300);
		          $(_n1).delay(250).animate({left:"50%"},800)			   
		          break;
		              
			      case 7:
		          $(_n).animate({opacity:1},300);
		          $(_n1).delay(250).animate({left:"50%"},800)			   
		          break;
		          case 8:
		          $(_n).animate({opacity:1},300);
		          $(_n1).delay(250).animate({left:"50%"},800)			   
		           break;
		          case 9:
			      var ua = window.navigator.userAgent.toLowerCase(); 
		    	  if(ua.match(/MicroMessenger/i)){
		    	   $("#page9b").css({opacity:0.5})
		    	   $("#page9bp").css({opcity:0.5});
		    	  }else{
		    	   $("#page9b").css({opacity:0});
		    	   $("#page9bp").css({opacity:0});
		    	   $(_n).animate({opacity:1},300);
	               $(_n1).delay(250).animate({left:"45%"},800)  
		    	 }
			      break;
		              
			   }
			  }
		}