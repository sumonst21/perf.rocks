function _gaLt(a){for(var b=a.srcElement||a.target;b&&(void 0===b.tagName||"a"!=b.tagName.toLowerCase()||!b.href);)b=b.parentNode;if(b&&b.href){var c=b.href;if(-1==c.indexOf(location.host)&&!c.match(/^javascript\:/i)){var d=function(b,c){a.metaKey||a.ctrlKey?window.open(b,"_blank"):c?window.open(b,c):window.location.href=b},e=!(!b.target||b.target.match(/^_(self|parent|top)$/i))&&b.target;ga("send","event","Outgoing Links",c,document.location.pathname+document.location.search,{hitCallback:d(c,e)}),a.preventDefault?a.preventDefault():a.returnValue=!1}}}var w=window;w.addEventListener?w.addEventListener("load",function(){document.body.addEventListener("click",_gaLt,!1)},!1):w.attachEvent&&w.attachEvent("onload",function(){document.body.attachEvent("onclick",_gaLt)});