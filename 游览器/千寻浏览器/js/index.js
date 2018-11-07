/*
* @Author: Administrator
* @Date:   2018-10-13 17:13:27
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-14 16:22:09
*/
setTimeout(function(){
	$('.screen1').removeClass('ani')
},10)

var num=0;
// 绑定点击事件
// 选择标签 $('标签')
$('.music').click(function(event) {
	/* Act on the event */
	// 切换类。控制是否旋转;
	$('.music').toggleClass('play');

	// 判断标签是否有该类。如果有改类，返回true 否则FALSE
	// alert($('.music').hasClass('play'))

	/*
		if(条件){
			条件为真的时候，执行的代码
		}else{
			条件为假的时候，执行的代码
		}
	*/
	if($('.music').hasClass('play')){
		// 条件为真的时候，执行的代码

		// play()音乐播放原生的方法
		// $('audio')jq对象 没有办法直接使用原生的方法，转化为原生的对象。jq对象[index]
		$('audio')[0].currentTime=100
		// 设置音乐播放时间
		$('audio')[0].play();
	}else{
		// 条件为假的时候，执行的代码
		$('audio')[0].pause()
	}

});

// 点击导航
$('li').click(function(event) {
	// $(原生的对象)  原生对象转化为jq对象
	// this代表用户当前操作的标签
	$(this).addClass('current')
	// a.siblings()选择除了a之外的同级标签
	$(this).siblings().removeClass('current');

	num=$(this).index()
	// 把点击和滚动联系起来
	// alert($(this).index());
	// 获取当前用户操作标签的索引值

	// section移动 常量和变量用+拼接
	// .animate({k:v},时间ms)
	$('section').animate({top:-$(this).index()*100+'%'},1000)
	$('section>div').eq(num).removeClass('ani')
	$('section>div').eq(num).siblings().addClass('ani')
});
var timer;
// 鼠标滚动 .mousewheel(function(e,d){滚动之后执行的代码})
$(document).mousewheel(function(e,d){
	clearTimeout(timer)
	timer=setTimeout(function(){
		// 向下滚动 d-1  向上滚动 d 1
		console.log(d)
		num=num-d;
		// 把num的值-d重新赋值num
		if(num<0){
			num=0;
		}
		if(num>6){
			num=6
		}
		// section移动 动画执行之前加 stop 清除动画排队，只执行最后一次
	 	$('section').stop().animate({top:-num*100+'%'},1000)
	 	// 导航类的控制
	 	$('li').eq(num).addClass('current');
	 	$('li').eq(num).siblings().removeClass('current');
	 	$('section>div').eq(num).removeClass('ani')
		$('section>div').eq(num).siblings().addClass('ani')
	},300)

})

// setTimeout(function(){
// 	alert()
// 	// 每隔一段时间执行
// },时间)
 // 1  1 1 1  2
 // 函数节流 

 // var timer=setTimeout(function(){
 // 	alert()
 // },1000)
 // // 停止定时器
 // clearTimeout(timer)
