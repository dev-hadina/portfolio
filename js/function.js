$(function(){
	
	//메인 비행기 
	const $airplane = $('.bg-ani').children('a');
	
	$airplane.on('click', function(evt){
		evt.preventDefault();
		
		if($(window).width()>640){
			$('.bg-ani').css({'animation': 'none'}).delay(0).animate({left:'100%'},2100);
			$('html, body').delay(2100).animate({scrollTop:800});
		} else {
			$('html, body').delay(0).animate({scrollTop:800});
		}
	})
	
	
	//모바일 nav 
	const $intro = $('.intro');

	$(window).on('scroll', function(){
		
		let scrollTop = $(this).scrollTop();

		if(scrollTop > $(this).height()){
			$('header').addClass('fixed');
			$('.intro').css({
				marginTop: $('header').height()
			});
		} else {
			$('header').removeClass('fixed');
			$('.intro').css({
				marginTop: 0
			});
		}
	});


	//포트폴리오 fade 효과
	const $figure = $('#hand .pfshow > figure');
	const $pfname = $('#hand .portfolio > .label > li> a');

	let nowIdx = 0;
	let oldIdx = nowIdx;

	function fadeFn(){
		$figure.eq(oldIdx).stop().fadeOut();
		$figure.eq(nowIdx).stop().fadeIn().css({ display:'flex'});

		$pfname.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
	}

	$pfname.on('click', function(evt){
		evt.preventDefault();

		oldIdx = nowIdx;
		nowIdx = $pfname.index(this);

		fadeFn();
	});

	//작업과정 노출
	const $prss = $('#hand .btn > .prss');
	const $bkscreen = $('#hand .bkscreen');
	const $box = $bkscreen.children('imgbox');
	const $btnclse = $bkscreen.find('.clse');

	$prss.on('click', function(evt){
		evt.preventDefault();

		$bkscreen.show();
	});

	$btnclse.on('click', function(){

		$bkscreen.hide();
	});






	
	
  //aside 버튼
	const $aside = $('aside');

	$(window).on('scroll', function() {

		let scrollTop = $(this).scrollTop();

		if (scrollTop > 200) {
			$aside.stop().fadeIn();
		} else {
			$aside.stop().fadeOut();
		}

		if (scrollTop > $('#main').height()){
			$('.topbar').addClass('fixed');
			$('.contents').css({
				marginTop: $('.topbar').height()
			});
		} else {
			$('.topbar').removeClass('fixed');
			$('.contents').css({
				marginTop: 0
			});	
	}

		const view = scrollTop + $(this).height() - $('footer').offset().top;

		if (view > 0) {
			$aside.css({ marginBottom: view });
		} else {
			$aside.css({ marginBottom: 0 });
		}
	});

	
		//.logo>a, aside>a 클릭시 맨위로 이동
		$('.logo>a, aside>a').on('click', function(evt){
			evt.preventDefault();
	
			$('html,body').stop().animate({
				scrollTop:0
			})
		});
	
		// //처음 접속시 load 이벤트 구문
		// $(window).on('load', function(){
		// 	$('html,body').stop().animate({
		// 		scrollTop:0
		// 	});
		// });
	});
