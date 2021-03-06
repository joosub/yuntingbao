// JavaScript Document
$(function(){
	$('.fy-nc-list ul li').hover(
		function(){
			$(this).addClass('fy-ncl-hover');
		},function(){
			$(this).removeClass('fy-ncl-hover');
		}
	);
	$('.fy-nc-logo').hover(
		function(){
			$(this).addClass('fy-ncl-hover');
		},function(){
			$(this).removeClass('fy-ncl-hover');
		}
	);
	$('.js-fy-cc-brand ul li').hover(
		function(){
			$(this).addClass('fy-cc-brand-hover');
		},function(){
			$(this).removeClass('fy-cc-brand-hover');
		}
	);
	
	$(window).scroll(function(){
		var
		$bgA=$('.fy-cc-intru-bg'),
		$bgB=$('.js-fy-cc-add'),
		scroll_top=$(window).scrollTop(),
		$banner=$('.fy-bann-cont'),
		banner_height=$banner.height(),
		banner_opcity=0,
		scroll_min_top=1800;
		
		if(scroll_top<=banner_height/2){
			banner_opcity=1-scroll_top/banner_height*1;
		}else{
			banner_opcity=0;
		}
		
		if(banner_opcity!=0){
			$('.fy-bann-cont').css({
				opacity:banner_opcity,
			});
		}
		
		
		
		
		
		
		
		//console.log(scroll_top);
		//if(scroll_top>scroll_min_top){
			$bgA.css({
				'transform':'translateY('+scroll_top/scroll_min_top*-100+'px)',
				'-webkit-transform':'translateY('+scroll_top/scroll_min_top*-100+'px)'
			});
			$bgB.css({
				'transform':'translateY('+scroll_top/scroll_min_top*-100+'px)',
				'-webkit-transform':'translateY('+scroll_top/scroll_min_top*-100+'px)'
			});
		//}
		if(scroll_top>=100){
			if(!$('.js-fy-nav-cont').hasClass('fy-nav-cont-scorll')){
				$('.js-fy-nav-cont').addClass('fy-nav-cont-scorll');
			}else{
				return;
			}
		}else{
			if($('.js-fy-nav-cont').hasClass('fy-nav-cont-scorll')){
				$('.js-fy-nav-cont').removeClass('fy-nav-cont-scorll');
			}else{
				return;
			}
		}
	});
	
	$('.fy-ccn-wrap ul li').hover(
		function(){
			$(this).addClass('fy-ccnw-list-hover');
		},function(){
			$(this).removeClass('fy-ccnw-list-hover');
		}
	);
	$('.fy-ccr-list').hover(
		function(){
			$(this).addClass('fy-ccr-list-hover');
			$('.fy-ccr-list').css({'width':'27.34375%'});
			$(this).css({'width':'45.3125%'});
			$('.fy-ccr-list').find('.fy-ccfl-bg').css('opacity',0.6);
			$(this).find('.fy-ccfl-bg').css('opacity',0);
		},function(){
			$(this).removeClass('fy-ccr-list-hover');
			$(this).css({'width':'33.333%'});
			$('.fy-ccr-list').css({'width':'33.333%'});
			$('.fy-ccr-list').find('.fy-ccfl-bg').css('opacity',0);
		}
	);
	$('.js-fy-ccc-list-box ul li').hover(
		function(){
			var
			curr_width=$(this).width(),
			
			tran_length=0;
			curr_index=$('.js-fy-ccc-list-box ul li').index($(this));
			
			if(curr_index==0){
				tran_length=-curr_width/2*3;
			}else if(curr_index==1){
				tran_length=-curr_width/2*1;
			}else if(curr_index==2){
				tran_length=curr_width/2*1;
			}
			else if(curr_index==3){
				tran_length=curr_width/2*3;
			}
			$('.js-fy-cccb-icon').css({
				'transform':'translateX('+tran_length+'px)',
				'-webkit-transform':'translateX('+tran_length+'px)'
			});
		},function(){
			$('.js-fy-cccb-icon').css({
				'transform':'translateX(0px)',
				'-webkit-transform':'translateX(0px)'
			});
		}
	);
	
	//banner切换效果
	var
	$banner=$('.fy-bc-list'),
	banner_show_index=0,
	banner_length=$banner.length;
	timeout_m=null,
	changable=true,
	$slide_btn=$('.js-fy-bclb-slide'),
	$baner_icon_list=$('.js-fy-bcl-icon-list');
	
	$slide_btn.bind('click',function(e){
		var
		$this=$(this),
		btn_index=$slide_btn.index($this);
		if(!changable){
			return;
		}
		if(btn_index==0){
			$banner.each(function(index, element) {
				$banner.eq(index).css({'z-index':666});
                if(index!=banner_show_index){
					$banner.eq(index).css({'left':'100%'});
				}
            });
			if(banner_show_index<banner_length-1){
				banner_show_index++;
			}else{
				banner_show_index=0;
			}
			bannerSlide(banner_show_index);
		}else{
			$banner.each(function(index, element) {
				$banner.eq(index).css({'z-index':666});
                if(index!=banner_show_index){
					$banner.eq(index).css({'left':'-100%'});
				}
            });
			if(banner_show_index>0){
				banner_show_index--;
			}else{
				banner_show_index=banner_length-1;
			}
			bannerSlide(banner_show_index,true);
		}
	});
	
	$baner_icon_list.bind('click',function(e){
		var
		$this=$(this),
		curr_index=$baner_icon_list.index($this);
		if(curr_index==banner_show_index||!changable){
			return;
		}else{
			$banner.each(function(index, element) {
                if(index!=banner_show_index){
					$banner.eq(index).css({'left':'100%'});
				}
				$banner.eq(index).css({'z-index':666});
            });
			bannerSlide(curr_index);
		}
		
	});
	
	function bannerSlide(curr_index,slide_class){
		changable=false;
			
			banner_show_index=curr_index;
			
			$banner.eq(banner_show_index).css({'z-index':888});
			
			if(slide_class){
				$banner.eq(banner_show_index).addClass('fy-bc-list-anj');
			}else{
				$banner.eq(banner_show_index).addClass('fy-bc-list-ani');
			}
			$baner_icon_list.removeClass('fy-bcl-icon-list-action');
			$baner_icon_list.eq(banner_show_index).addClass('fy-bcl-icon-list-action');
			
			
			
			timeout_m=setTimeout(function(){
				changable=true;
				$banner.each(function(index, element) {
                    if(index!=banner_show_index){
						$banner.eq(index).removeClass('fy-bc-list-ani fy-bc-list-anj');
					}
                });
				clearTimeout(timeout_m);
				timeout_m=null;
			},600);
	}
	
	//新闻切换效果
	var
	$news_wrap=$('.js-fy-ccn-wrap'),
	$news_box=$news_wrap.find('ul'),
	$news_list=$news_box.find('li'),
	$news_btn=$('.js-fy-ccnb-btn'),
	news_curr_index=0;
	news_list_length=$news_list.length
	list_width=$news_list.width();
	$news_box.width(news_list_length*list_width);
	
	$news_btn.bind('click',function(e){
		var
		$this=$(this),
		btn_inde=$news_btn.index($this);
		
		if(news_list_length<=4){
			return ;
		}else{
			if(btn_inde==0){
				if(news_curr_index<0){
					news_curr_index++
				}else{
					news_curr_index=0;
				}
			}else{
				if(news_list_length-Math.abs(news_curr_index)<=4){
					news_curr_index=-(news_list_length-4);
				}else{
					news_curr_index--
				}
			}
			$news_box.animate({'margin-left':news_curr_index*list_width},300)
		}
	});
	
	//合作伙伴logo切换效果
	var
	$partner_box=$('.js-fy-ccp-container'),
	$partner_list=$partner_box.find('ul li'),
	list_length=$partner_list.length,
	partner_curr_index=0,
	$partner_btn=$('.fy-ccp-btn'),
	partner_list_width=$partner_list.width(),
	box_width=$partner_box.width();
	$partner_btn.bind('click',function(e){
		var
		$this=$(this),
		box_width=list_length*partner_list_width,
		partner_box_left=parseInt($partner_box.css('left')),
		purpose_left=0,
		btn_index=$partner_btn.index($this);
		if(list_length<=9){
			return false;
		}else{
			if(btn_index==0){
				if(partner_curr_index<0){
					partner_curr_index++
				}else{
					partner_curr_index=0;
				}
			}else{
				if(list_length-Math.abs(partner_curr_index)<=9){
					partner_curr_index=-(list_length-9);
				}else{
					partner_curr_index--
				}
			}
		}
		$partner_box.animate({'left':partner_list_width*partner_curr_index+partner_curr_index*12},300);
	});
});