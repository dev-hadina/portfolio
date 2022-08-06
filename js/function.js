$(function(){
	
	//메인 비행기 
	const $airplane = $('.bg-ani');
	
	$airplane.on('click', function(evt){
		evt.preventDefault();
		
		if($(window).width()>480){

			$('.bg-ani').css({'animation': 'none'}).delay(0).animate({left:'100%'},1500);
			$('html, body').delay(1500).animate({scrollTop:800});

		} else {

			$('html, body').delay(0).animate({scrollTop: 650});

		}
	});
	
	
	//모바일 nav 
	const $intro = $('.intro');

	$(window).on('scroll', function(){
		
		let scrollTop = $(this).scrollTop();

		if(scrollTop > $('#main').height() +100) {
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


	//압축메뉴 버튼
	const $btngnb = $('header .btn-gnb');

	$btngnb.on('click', function(){
		$('nav').slideToggle(150);
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

	$prss.on('click', function(evt){
		evt.preventDefault();

		$bkscreen.show();
	});

	$bkscreen.on('click', function(){

		$bkscreen.hide();
	});


//QnA 버튼
	const $answer = $('#foot dl> dt> a');
	
	$answer.on('click', function(evt){
		evt.preventDefault();

		const asIdx = $answer.index(this);

		$answer.eq(asIdx).find('.arrow').toggleClass('on');
		$('#foot dl> dd').eq(asIdx).slideToggle(200).css({ backgroundColor : '#eee' });

	});

	
	//원페이지- nav 클릭으로 section 이동
	const $nav = $('header nav > .gnb > li > a');
	const arrTop = [];

	let gnbIdx = null;

	for(let i=0; i<$nav.length; i++){
		arrTop[i] = $('section').eq(i).offset().top;
	}

	$nav.on('click', function(evt){
		evt.preventDefault();

		gnbIdx = $nav.index(this);

		$('html, body').stop().animate({
			scrollTop : arrTop[gnbIdx]-100
		},300)
	});

	//scroll 이동에 따라 nav 활성화
	$(window).on('scroll', function(){
		const scrollTop = $(this).scrollTop();

		for(let i=0; i<arrTop.length; i++){

			if(scrollTop >= arrTop[i]-180){
				$nav.eq(i).parent().addClass('on').siblings().removeClass('on');

			} else if (scrollTop < arrTop[0]-180){
				
				$nav.parent().removeClass('on');
			}
		}
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
	

		//처음 접속시 load 이벤트 구문
		$(window).on('load', function(){
			$('html,body').stop().animate({
				scrollTop:0
			});
		});
	});
