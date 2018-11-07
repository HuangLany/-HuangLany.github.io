 $(function(){
	 	var num=0;
	 	var timer =null;
	 	function move(){
	 		//定时器
	 		timer =setInterval(function(){
	 			num++;
	 			if(num>4){
	 				num=0;
	 				$('.banner ul').css('left','0');
	 				num=1;
	 			}
	 			$('.banner ul').stop().animate({left:-(num*747)+'px'});
	 		},2000)
	 	};
	 	move();
	 	//鼠标移到轮播图时，定时器停止。
	 	   $('.banner').hover(function() {
              clearInterval(timer);
            }, function() {
              clearInterval(timer);
                move();
            });

	 	//左切换
	 	$('.banner .left').click(function(e) {
	 		/* Act on the event */
	 		num--;
	 		if(num<0){
	 			num=0;
	 		}
	 		$('.banner ul').stop().animate({left:-(num*747)+'px'});
	 	});
	 	//右切换
	 	$('.banner .right').click(function(event) {
	 		/* Act on the event */
	 		num++;
	 		if(num>4){
	 			num=4;
	 		}
	 		$('.banner ul').stop().animate({left:-(num*747)+'px'})
	 	});
	 })