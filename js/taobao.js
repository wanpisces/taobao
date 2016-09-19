//头部
$(function(){
	function navMover(obj,name){
		$(obj).mouseover(function(){
			var offset=$(obj).offset();
			var scrollTop=$(window).scrollTop();
			$(obj).find('.down img').css('transform','rotate(180deg)');
			if(obj=='.websiteNav'){
				$(name).css({
					'display':'block',
					'top':(offset.top+$(obj).height()-scrollTop)+'px'
				});
			}else{
				$(name).css({
					'display':'block',
					'top':(offset.top+$(obj).height()-scrollTop)+'px',
					'left':(offset.left)+'px' 
				});
			}
		}).mouseout(function(){
			$(obj).find('.down img').css('transform','rotate(0deg)');
			$(obj).css('background','');
			var offset=$(obj).offset();
			var scrollTop=$(window).scrollTop();
			$(name).css('display','none');
			$(name).mouseover(function(){
				$(obj).find('.down img').css('transform','rotate(180deg)');
				$(obj).css('background','white');
				if(obj=='.websiteNav'){
					$(name).css({
					'display':'block',
					'top':(offset.top+$(obj).height()-scrollTop)+'px'
					})
				}else{
					$(name).css({
					'display':'block',
					'top':(offset.top+$(obj).height()-scrollTop)+'px',
					'left':offset.left+'px'
					})
				}
			}).mouseout(function(){
					$(obj).find('.down img').css('transform','rotate(0deg)');
					$(obj).css('background','');
					$(name).css('display','none');
			})
		})
	}
	navMover('.master-material','#master');//站长素材
	navMover('.msg-info','#msgInfo');
	navMover('.myTaobao','#myTaobao');
	navMover('.shopCar','#shopCar');
	navMover('.favorite','#favorite');
	navMover('.sellerCentral','#sellerCentral');
	navMover('.websiteNav','#websiteNav');
	
	function madel(obj){
		var oLi=$(".medal-list ul li");
		var left=0;
		var mIndex=1;
		$(".medal-list ul").width(oLi.width()*oLi.length);
		var liW=$(".medal-list ul li").width();
		$(obj).click(function(){
			if(obj=="#madel-prev"){
				mIndex--;
				if(mIndex<0){
					mIndex=0;
					$(".medal-list ul").animate({
						marginLeft:'0px'
					},500);	
				}else{
					$(".medal-list ul").animate({
						marginLeft:-(mIndex*liW)+'px'
					},500);	
				}
			}else{
				mIndex++;
				if(mIndex>1){
					mIndex=1;
					$(".medal-list ul").animate({
						marginLeft:-(mIndex*liW)+'px'
					},500);	
				}else{
					$(".medal-list ul").animate({
						marginLeft:-(mIndex*liW)+'px'
					},500);	
				}
			}
					
		});
	}
	madel("#madel-prev");//站长素材box
	madel("#madel-next");
	
	//删除二维码
	$('.codeRemove').click(function(){
		$('.search3').hide();
	})
//	$('.goodsContent').width(($('.goods-wrap').width()-80)+'px');
//	alert(($('.goods-wrap').width());
})

$(function(){
	//头部布局
	function headerDiv(){
		var headerH=$('.header').height();
		$('.headerMain').height(headerH);
		$(window).resize(function(){
			var headerH=$('.header').height();
			$('.headerMain').height(headerH);
		})
	}
	headerDiv();
	//goodsContent布局
	function contentDiv(){
		var gdsWrpW=$('.goods-wrap').width();
		var gdsContW=$('.goods-wrap').width()-80;
//		$('.goodsContent').width(gdsContW);
//		var ContW=$('.goodsContent').width();
//		alert(ContW);
	}
	contentDiv();
	
	function navHover(){
		function navM(){$('.goodsNav').mouseout(function(){return true;});}
		var nav=navM();
		function boxM(){$('.goodsNavBox').mouseout(function(){return true;});}
		var box=boxM();
			var oLi=$('.seviceList ul li');
			oLi.hover(function(){
				$(this).find('div').css('border-bottom','0px').siblings().find('div').css('border-bottom','1px solid #dfdddb');
				$(this).css({'border':'1px solid #ff5500','border-right':'0px'}).siblings().css({
					'border':'0px',
					'border-right':'1px solid #ff5500'
				});
				$('.goodsNavBox').css({
					'width':'0px',
					'border': '1px solid #FF0000'
					});
				$('.goodsNavBox').animate({width:'730px'},200);
			},function(){
				$('.goodsNavBox').hover(function(){return},function(){
					$('.goodsNavBox').css({'width':'0px'});
					oLi.css({
						'border':'',
						'border-right':'1px solid grey'
					})
				});
				oLi.find('div').css('border-bottom','1px solid #dfdddb');
			});
	}
	navHover();	
})
$(function(){
	function imgMarqueen($iBox,$iNum,totalImg,imgSize,imgList){
//		$iBox.width($imgLi.eq(0).width()*totalImg);
	    var indexImg=1,        //初始下标        
	        moveTime = 1100,        //切换动画时间
	        setTime = 2500,        //中间暂停时间
	        clc = null;
	   imgList.find('span').hide();
	        
	    function moveImg(){
	        if(indexImg != totalImg){
	            $iBox.animate({
	                marginLeft: -(indexImg*imgSize) + 'px'
	            }, moveTime);
	            $iNum.eq(indexImg).css('background','#ff5500').siblings().css('background','#ceced6');
	            indexImg++;
	        }
	        else{
	            indexImg = 1;
	             $iNum.eq(indexImg-1).css('background','#ff5500').siblings().css('background','#ceced6');
	            $iBox.animate({
	                marginLeft: 0
	            }, moveTime);
	        }
	    }
	    $iNum.hover(function(){
	        $iBox.stop();                    //结束当前动画
	        clearInterval(clc);              //暂停循环
	        $(this).css('background','#ff5500').siblings().css('background','#ceced6');
	        indexImg = $(this).index();
	        $iBox.animate({
	            marginLeft: -(indexImg*imgSize) + 'px'
	        }, 500);
	    },function(){
	        clc = setInterval(moveImg, setTime);
	    });
	
	    //鼠标放上停止动画
	    $iBox.hover(function(){
	        imgList.find('span').show(200);
	        clearInterval(clc);              //暂停循环
	    },function(){
	       imgList.find('span').hide();
	        clc = setInterval(moveImg, setTime);
	    });
	    //显示左右
	    imgList.find('span').hover(function(){
	        clearInterval(clc);
	        imgList.find('span').show();
	        imgList.find('span').css('opacity',0.5);
	        $(this).css('opacity',1);
	    },function(){ imgList.find('span').css('opacity',0.5);});
	    //向右边前进
	    $('.to-right').click(function(){
	        if(indexImg != totalImg){
	            $iBox.animate({
	                marginLeft: -(indexImg*imgSize) + 'px'
	            }, moveTime);
	            $iNum.eq(indexImg).css('background','#ff5500').siblings().css('background','#ceced6');
	            indexImg++;
	        }
	        else{
	            indexImg = 1;
	            $iNum.eq(indexImg-1).css('background','#ff5500').siblings().css('background','#ceced6');
	            $iBox.animate({
	                left: 0
	            }, moveTime);
	        }
	    });
	    //向左边前进
	    $('.to-left').click(function(){
	        indexImg--;
	        if(indexImg != 0){
	            $iBox.animate({
	                marginLeft: -((indexImg - 1)*imgSize) + 'px'
	            }, moveTime);
	            $iNum.eq(indexImg).css('background','#ff5500').siblings().css('background','#ceced6');
	        }
	        else{
	            indexImg = totalImg;
	           $iNum.eq(indexImg).css('background','#ff5500').siblings().css('background','#ceced6');
	            $iBox.animate({
	                marginLeft: -((indexImg - 1)*imgSize) + 'px'
	            }, moveTime);
	        }
	    });
	    clc = setInterval(moveImg, setTime);
	}
	
	//图一
	function img1(){
		var leftW=$('.imgLeft').width();
		$('.ulImg1 li img').width(leftW);
		var imgW=$('.ulImg1 li img').width(),
			$iBox = $('.ulImg1'),
			$iNum = $('.liList1 li'),
			$imgLi=$('.ulImg1 li'),
			totalImg = $imgLi.length,//图片总数量
			imgSize = imgW,//图片尺寸 宽度
			imgOne=$('.imgMarqueen1');
		$iBox.width($imgLi.eq(0).width()*totalImg);
		imgMarqueen($iBox,$iNum,totalImg,imgSize,imgOne);
	}
	img1();
	//图二
	function img2(){
		var leftW=$('.imgLeft').width();
		$('.ulImg2 li img').width(leftW);
		var imgW=$('.ulImg2 li img').width(),
			$iBox = $('.ulImg2'),
			$iNum = $('.liList2 li'),
			$imgLi=$('.ulImg2 li'),
			totalImg = $imgLi.length,//图片总数量
			imgSize = imgW,//图片尺寸 宽度
			imgTwo=$('.imgMarqueen2');
		$iBox.width($imgLi.eq(0).width()*totalImg);
		imgMarqueen($iBox,$iNum,totalImg,imgSize,imgTwo);
	}
	setTimeout(img2,500);
	
	
	function announce(){
//		$('.imgCont1 div').hide();
		$('.imgH1 ul li').hover(function(){
			var index=$(this).index();
			$(this).css('background','white').siblings().css('background','');
			$('.imgCont1 div').eq(index).fadeIn() .siblings().hide();
		})
	}
	announce()//公告
	
	//弹出框
	function popBox(){
		var oBtn=$('.loginBox button');
		oBtn.click(function(){
			$(this).attr('data-target','#popBox');
		});
	}
	popBox();
	
	//服务的淡入框
	function phoneFare(){
		$('.service li').hover(function(){
			$(this).find('div:first-child').animate({top:'-10px'},100).animate({top:'0px'},100);
		},function(){
			$('.service li').find('div:first-child').stop();
		});
		$('.liArrow').hover(function(){
			var index=$(this).index();
			$(this).css({
				'z-index':1,
				'border-bottom':'0px'
			});
			$('.imgRight3 .slideUp').hide();
			$('.imgRight3').children().eq(index+1).slideDown(200);
			$(this).siblings().css({'border-bottom':'1px solid grey'});
		},function(){});
		
		//删除弹出框
		$('.delPop').click(function(){
			$('.slideUp').hide();
			$('.liArrow').css('border-bottom','1px solid grey');
		})
	}
	phoneFare();
})
























