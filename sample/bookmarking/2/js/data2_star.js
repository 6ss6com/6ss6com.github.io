window.G||(window.G={});window.conf||(window.conf={});window.source||(window.source={});window.source.qq||(window.source.qq={});window.source.uqude||(window.source.uqude={});conf.qq={url:"https://article.data.rms.qq.com/out_hao123.php?appkey=7ea719e5622741b0bf6fcf789ef42392&group=2",tpl1:'<li><a target="_blank" href="#{linkUrl}" title="#{title}">#{title}</a></li>',tpl2:'<a target="_blank" href="#{linkUrl}" title="#{title}"><img src="#{imgUrl}"><span>#{title}</span></a>'};conf.uqude={url1:"https://baidu.uqude.com/baidu_mobile_war/hao123/hot.action",url2:"https://baidu.uqude.com/baidu_mobile_war/hao123/latest.action",tpl:'<li><a href="#{linkUrl}" class="pic" title="#{title}" target="_blank"><img src="#{imgUrl}" alt="#{title}"></a><a href="#{linkUrl}" title="#{title}" class="title-pic">#{title}</a><span class="intro">#{intro}</span></li>'};G.data={init:function(){var a=G.data;a.initQQ();a.initUqude();loadJs("/common/js/monitor.js")},initQQ:function(){var a=this,e=byId("list-magic"),g=byId("list-love"),b=byId("list-character"),h=byId("list-work"),d=byId("list-wealth"),j=byId("list-all"),i={rootName:"testmagic",flag:2,num:8,url:conf.qq.url,tpl:conf.qq.tpl2},k={rootName:"testlove",flag:1,num:12,url:conf.qq.url,tpl:conf.qq.tpl1},c={rootName:"testcharacter",flag:1,num:12,url:conf.qq.url,tpl:conf.qq.tpl1},l={rootName:"testwork",flag:1,num:12,url:conf.qq.url,tpl:conf.qq.tpl1},f={rootName:"testwealth",flag:1,num:12,url:conf.qq.url,tpl:conf.qq.tpl1},m={rootName:"testall",flag:1,num:12,url:conf.qq.url,tpl:conf.qq.tpl1};a.requestData(e,i);a.requestData(g,k);a.requestData(b,c);a.requestData(h,l);a.requestData(d,f);a.requestData(j,m)},initUqude:function(){var a=this,c=byId("list-uqude-new"),b=byId("list-uqude-hot"),e={rootName:"new",flag:3,num:5,url:conf.uqude.url2,tpl:conf.uqude.tpl},d={rootName:"hot",flag:3,num:5,url:conf.uqude.url1,tpl:conf.uqude.tpl};a.requestData(c,e);a.requestData(b,d)},requestData:function(b,a){var c=this;b.innerHTML="";loadJs(a.url,function(){var d,e={};if(a.flag===1||a.flag===2)d=source.qq[a.rootName].content.info;if(a.flag===3)d=source.uqude[a.rootName].content.info;c.render(d,b,a)},function(){})},formatData:function(a,b){if(b>=0)return {data:a[b]};else return {data:a}},render:function(d,c,b){var e=this,a="",f="";each(d,function(f){var c=e.formatData(f),d=c["data"];a+=replaceTpl(b.tpl,d)},b.num);c.innerHTML+=a}}