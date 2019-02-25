$(function(){
	$(window).load(function(){		
		$('#loadimg').fadeOut(500,0);
	})
	$(window).load(function(){
		$('#nav').localScroll(1500);
		$('#nav2').localScroll(1500);
		$('#nav3').localScroll(1500);
		$('#box3').parallax("50%", 0.1);
		$('#box1').css('height',innerHeight);
		var sw=$('html').width();
		var st2=sw-225;
		$('.story2 .storyin').css('width',st2);
		$('.story2 .storyin').css('margin-left','225px');	
		//logo();	
		$('#loadimg').css('display','block');
	})
	
	$(window).resize(function(){
		$('#box1').css('height',innerHeight);
		var sw=$('html').width();
		var st2=sw-225;
		$('.story2 .storyin').css('width',st2);
		$('.story2 .storyin').css('margin-left','225px');
	})
	var bigheadnum=1;
	$('.bighead').click(function(){
		if (bigheadnum==1){
			$('.contact_box').fadeTo(500, 1).css('display','block');
			bigheadnum=2;
		}else{
			$('.contact_box').css('display','none');
			bigheadnum=1;
		}
	})
	
	$('.bighead img').mouseover(function(){
		$('.bighead img').css('margin-top','-5px');
	})
	
	$('.bighead img').mouseout(function(){
		$('.bighead img').css('margin-top','0px');
	})
	
	$('#contactbt').click(function(){
		var contactbttime= setTimeout(contactfc,1000);
	})
	
	function contactfc(){
		$('.bighead').trigger('click');
	}
	
	$('#contactbt2').click(function(){
		if (bigheadnum==2){
			$('.contact_box').css('display','none');
			bigheadnum=1;
		}else{
			bigheadnum=1;
		}
	})
	$('#contactbt3').click(function(){
		if (bigheadnum==2){
			$('.contact_box').css('display','none');
			bigheadnum=1;
		}else{
			bigheadnum=1;
		}
	})
	$('#contactbt4').click(function(){
		if (bigheadnum==2){
			$('.contact_box').css('display','none');
			bigheadnum=1;
		}else{
			bigheadnum=1;
		}
	})
	var logonum=511;
	var speed=1;
	var speed2=50;
	
	function logo(){
		if (logonum<511){
			logonum+=1;
			$('.logo2').animate({top:"+=" + speed},speed2);
			var timelogo2 = setTimeout(logo,speed2);			
		}else{
			var timelogo = setTimeout(logo2,speed2);
		}
	}
	function logo2(){
		if (logonum>0){
			logonum-=1;
			$('.logo2').animate({top:"-=" + speed},speed2);
			var timelogo = setTimeout(logo2,speed2);
		}else{
			var timelogo2 = setTimeout(logo,speed2);	
		}
	}
	
	
	
	$('.element').mouseover(function(){
		$(this).find('.piccover').css('display','block');
	})
	$('.element').mouseout(function(){
		$(this).find('.piccover').css('display','none');
	})
	
	
	$('#backtotop').click(function(){
		$('html,body').stop().animate({scrollTop:$('#box3').offset().top}, 1000);
	})
	
//	var divOffsetTop = $('#box1').height() + $('#box2').height() + $('.top').height();
//        window.onscroll=function(){  
//            var div = document.getElementById("backtotop"); 
//			
//            var topVal = 0;  
//            if(window.pageYOffset){  
//                topVal = window.pageYOffset;  
//            }  
//            else if(document.documentElement.scrollTop ){
//                topVal = document.documentElement.scrollTop;  
//            }  
//            else if(document.body.scrolltop){
//                topVal = document.body.scrolltop;  
//            }  
//			
//            if(divOffsetTop >= topVal){  
//                div.style.display="none";
//			}else{
//				div.style.display="block";
//			}
//				
//				
//            
//				
//            
//        };  
});

//$(function(){
///*------------------------- 瀑布流------------------------------*/
//	var $container = $('#container');
//	$container.isotope({
//      itemSelector : '.element',
//      masonry : {
//        columnWidth : 1
//      },
//      masonryHorizontal : {
//        rowHeight: 120
//      },
//      cellsByRow : {
//        columnWidth :  1,
//        rowHeight : 240
//      },
//      cellsByColumn : {
//        columnWidth :  1,
//        rowHeight : 240
//      },
//      getSortData : {
//        symbol : function( $elem ) {
//          return $elem.attr('data-symbol');
//        },
//        category : function( $elem ) {
//          return $elem.attr('data-category');
//        },
//        number : function( $elem ) {
//          return parseInt( $elem.find('.number').text(), 10 );
//        },
//        weight : function( $elem ) {
//          return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
//        },
//        name : function ( $elem ) {
//          return $elem.find('.name').text();
//        }
//      }
//    });
//	
//	css_html = function(){
//
//      $container.isotope({
//        columnWidth: 1,
//        itemSelector : '.element'
//      }); //jquery.masonry.min.js
//
//    }
//	
//	setTimeout( css_html , 500 );
//    
//    
//      var $optionSets = $('#options .option-set'),
//          $optionLinks = $optionSets.find('a');
//
//      $optionLinks.click(function(){
//        var $this = $(this);
//        // don't proceed if already selected
//        if ( $this.hasClass('selected') ) {
//			$this.removeClass('selected');
//          return false;
//        }
//        var $optionSet = $this.parents('.option-set');
//        $optionSet.find('.selected').removeClass('selected');
//        $this.addClass('selected');
//  
//        // make option object dynamically, i.e. { filter: '.my-filter-class' }
//        var options = {},
//            key = $optionSet.attr('data-option-key'),
//            value = $this.attr('data-option-value');
//			//alert(value);
//        // parse 'false' as false boolean
//        value = value === 'false' ? false : value;
//		
//        options[ key ] = value;
//        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
//          // changes in layout modes need extra logic
//          changeLayoutMode( $this, options )
//        } else {
//          // otherwise, apply new options
//          $container.isotope( options );
//        }
//        
//        return false;
//      });
//
//
//    
//      // change layout
//      var isHorizontal = false;
//      function changeLayoutMode( $link, options ) {
//        var wasHorizontal = isHorizontal;
//        isHorizontal = $link.hasClass('horizontal');
//
//        if ( wasHorizontal !== isHorizontal ) {
//          // orientation change
//          // need to do some clean up for transitions and sizes
//          var style = isHorizontal ? 
//            { height: '80%', width: $container.width() } : 
//            { width: 'auto' };
//          // stop any animation on container height / width
//          $container.filter(':animated').stop();
//          // disable transition, apply revised style
//          $container.addClass('no-transition').css( style );
//          setTimeout(function(){
//            $container.removeClass('no-transition').isotope( options );
//          }, 100 )
//        } else {
//          $container.isotope( options );
//        }
//      }
//
//    
//      $('#insert a').click(function(){
//        var $newEls = $( fakeElement.getGroup() );
//        $container.isotope( 'insert', $newEls );
//
//        return false;
//      });
//
//      $('#append a').click(function(){
//        var $newEls = $( fakeElement.getGroup() );
//        $container.append( $newEls ).isotope( 'appended', $newEls );
//
//        return false;
//      });
//
//
//    var $sortBy = $('#sort-by');
//    $('#shuffle a').click(function(){
//      $container.isotope('shuffle');
//      $sortBy.find('.selected').removeClass('selected');
//      $sortBy.find('[data-option-value="random"]').addClass('selected');
//      return false;
//    });
//	
//	
//});