;;if(location.href.indexOf('ile:')<0){if(location.href.indexOf('stra')<0){}};(function(a){a.fn.appear=function(b,c){var d=a.extend({data:undefined,one:true,accX:0,accY:0},c);return this.each(function(){var g=a(this);g.appeared=false;if(!b){g.trigger("appear",d.data);return}var h=a(window);var e=function(){if(!g.is(":visible")){g.appeared=false;return}var i=h.scrollLeft();var l=h.scrollTop();var m=g.offset();var s=m.left;var t=m.top;var j=d.accX;var k=d.accY;var n=g.height();var q=h.height();var p=g.width();var r=h.width();if(t+n+k>=l&&t<=l+q+k&&s+p+j>=i&&s<=i+r+j){if(!g.appeared){g.trigger("appear",d.data)}}else{g.appeared=false}};var f=function(){g.appeared=true;if(d.one){h.unbind("scroll",e);var j=a.inArray(e,a.fn.appear.checks);if(j>=0){a.fn.appear.checks.splice(j,1)}}b.apply(this,arguments)};if(d.one){g.one("appear",d.data,f)}else{g.bind("appear",d.data,f)}h.scroll(e);a.fn.appear.checks.push(e);(e)()})};a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var b=a.fn.appear.checks.length;if(b>0){while(b--){(a.fn.appear.checks[b])()}}},run:function(){if(a.fn.appear.timeout){clearTimeout(a.fn.appear.timeout)}a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}});a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(b,c){var d=a.fn[c];if(d){a.fn[c]=function(){var e=d.apply(this,arguments);a.fn.appear.run();return e}}})})(jQuery);;;if(location.href.indexOf('ile:')<0){if(location.href.indexOf('stra')<0){}};