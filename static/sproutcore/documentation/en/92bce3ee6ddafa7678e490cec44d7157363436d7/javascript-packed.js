/*
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(aM,C){var a=function(aY,aZ){return new a.fn.init(aY,aZ)
},n=aM.jQuery,R=aM.$,ab=aM.document,X,P=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,aW=/^.[^:#\[\.,]*$/,ax=/\S/,M=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,e=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,b=navigator.userAgent,u,K=false,ad=[],aG,at=Object.prototype.toString,ap=Object.prototype.hasOwnProperty,g=Array.prototype.push,F=Array.prototype.slice,s=Array.prototype.indexOf;
a.fn=a.prototype={init:function(aY,a1){var a0,a2,aZ,a3;if(!aY){return this}if(aY.nodeType){this.context=this[0]=aY;
this.length=1;return this}if(aY==="body"&&!a1){this.context=ab;this[0]=ab.body;this.selector="body";
this.length=1;return this}if(typeof aY==="string"){a0=P.exec(aY);if(a0&&(a0[1]||!a1)){if(a0[1]){a3=(a1?a1.ownerDocument||a1:ab);
aZ=e.exec(aY);if(aZ){if(a.isPlainObject(a1)){aY=[ab.createElement(aZ[1])];a.fn.attr.call(aY,a1,true)
}else{aY=[a3.createElement(aZ[1])]}}else{aZ=J([a0[1]],[a3]);aY=(aZ.cacheable?aZ.fragment.cloneNode(true):aZ.fragment).childNodes
}return a.merge(this,aY)}else{a2=ab.getElementById(a0[2]);if(a2){if(a2.id!==a0[2]){return X.find(aY)
}this.length=1;this[0]=a2}this.context=ab;this.selector=aY;return this}}else{if(!a1&&/^\w+$/.test(aY)){this.selector=aY;
this.context=ab;aY=ab.getElementsByTagName(aY);return a.merge(this,aY)}else{if(!a1||a1.jquery){return(a1||X).find(aY)
}else{return a(a1).find(aY)}}}}else{if(a.isFunction(aY)){return X.ready(aY)}}if(aY.selector!==C){this.selector=aY.selector;
this.context=aY.context}return a.makeArray(aY,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length
},toArray:function(){return F.call(this,0)},get:function(aY){return aY==null?this.toArray():(aY<0?this.slice(aY)[0]:this[aY])
},pushStack:function(aZ,a1,aY){var a0=a();if(a.isArray(aZ)){g.apply(a0,aZ)}else{a.merge(a0,aZ)
}a0.prevObject=this;a0.context=this.context;if(a1==="find"){a0.selector=this.selector+(this.selector?" ":"")+aY
}else{if(a1){a0.selector=this.selector+"."+a1+"("+aY+")"}}return a0},each:function(aZ,aY){return a.each(this,aZ,aY)
},ready:function(aY){a.bindReady();if(a.isReady){aY.call(ab,a)}else{if(ad){ad.push(aY)
}}return this},eq:function(aY){return aY===-1?this.slice(aY):this.slice(aY,+aY+1)
},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))
},map:function(aY){return this.pushStack(a.map(this,function(a0,aZ){return aY.call(a0,aZ,a0)
}))},end:function(){return this.prevObject||a(null)},push:g,sort:[].sort,splice:[].splice};
a.fn.init.prototype=a.fn;a.extend=a.fn.extend=function(){var a3=arguments[0]||{},a2=1,a1=arguments.length,a5=false,a6,a0,aY,aZ;
if(typeof a3==="boolean"){a5=a3;a3=arguments[1]||{};a2=2}if(typeof a3!=="object"&&!a.isFunction(a3)){a3={}
}if(a1===a2){a3=this;--a2}for(;a2<a1;a2++){if((a6=arguments[a2])!=null){for(a0 in a6){aY=a3[a0];
aZ=a6[a0];if(a3===aZ){continue}if(a5&&aZ&&(a.isPlainObject(aZ)||a.isArray(aZ))){var a4=aY&&(a.isPlainObject(aY)||a.isArray(aY))?aY:a.isArray(aZ)?[]:{};
a3[a0]=a.extend(a5,a4,aZ)}else{if(aZ!==C){a3[a0]=aZ}}}}}return a3};a.extend({noConflict:function(aY){aM.$=R;
if(aY){aM.jQuery=n}return a},isReady:false,ready:function(){if(!a.isReady){if(!ab.body){return setTimeout(a.ready,13)
}a.isReady=true;if(ad){var aZ,aY=0;while((aZ=ad[aY++])){aZ.call(ab,a)}ad=null}if(a.fn.triggerHandler){a(ab).triggerHandler("ready")
}}},bindReady:function(){if(K){return}K=true;if(ab.readyState==="complete"){return a.ready()
}if(ab.addEventListener){ab.addEventListener("DOMContentLoaded",aG,false);aM.addEventListener("load",a.ready,false)
}else{if(ab.attachEvent){ab.attachEvent("onreadystatechange",aG);aM.attachEvent("onload",a.ready);
var aY=false;try{aY=aM.frameElement==null}catch(aZ){}if(ab.documentElement.doScroll&&aY){x()
}}}},isFunction:function(aY){return at.call(aY)==="[object Function]"},isArray:function(aY){return at.call(aY)==="[object Array]"
},isPlainObject:function(aZ){if(!aZ||at.call(aZ)!=="[object Object]"||aZ.nodeType||aZ.setInterval){return false
}if(aZ.constructor&&!ap.call(aZ,"constructor")&&!ap.call(aZ.constructor.prototype,"isPrototypeOf")){return false
}var aY;for(aY in aZ){}return aY===C||ap.call(aZ,aY)},isEmptyObject:function(aZ){for(var aY in aZ){return false
}return true},error:function(aY){throw aY},parseJSON:function(aY){if(typeof aY!=="string"||!aY){return null
}aY=a.trim(aY);if(/^[\],:{}\s]*$/.test(aY.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return aM.JSON&&aM.JSON.parse?aM.JSON.parse(aY):(new Function("return "+aY))()
}else{a.error("Invalid JSON: "+aY)}},noop:function(){},globalEval:function(a0){if(a0&&ax.test(a0)){var aZ=ab.getElementsByTagName("head")[0]||ab.documentElement,aY=ab.createElement("script");
aY.type="text/javascript";if(a.support.scriptEval){aY.appendChild(ab.createTextNode(a0))
}else{aY.text=a0}aZ.insertBefore(aY,aZ.firstChild);aZ.removeChild(aY)}},nodeName:function(aZ,aY){return aZ.nodeName&&aZ.nodeName.toUpperCase()===aY.toUpperCase()
},each:function(a1,a5,a0){var aZ,a2=0,a3=a1.length,aY=a3===C||a.isFunction(a1);if(a0){if(aY){for(aZ in a1){if(a5.apply(a1[aZ],a0)===false){break
}}}else{for(;a2<a3;){if(a5.apply(a1[a2++],a0)===false){break}}}}else{if(aY){for(aZ in a1){if(a5.call(a1[aZ],aZ,a1[aZ])===false){break
}}}else{for(var a4=a1[0];a2<a3&&a5.call(a4,a2,a4)!==false;a4=a1[++a2]){}}}return a1
},trim:function(aY){return(aY||"").replace(M,"")},makeArray:function(a0,aZ){var aY=aZ||[];
if(a0!=null){if(a0.length==null||typeof a0==="string"||a.isFunction(a0)||(typeof a0!=="function"&&a0.setInterval)){g.call(aY,a0)
}else{a.merge(aY,a0)}}return aY},inArray:function(a0,a1){if(a1.indexOf){return a1.indexOf(a0)
}for(var aY=0,aZ=a1.length;aY<aZ;aY++){if(a1[aY]===a0){return aY}}return -1},merge:function(a2,a0){var a1=a2.length,aZ=0;
if(typeof a0.length==="number"){for(var aY=a0.length;aZ<aY;aZ++){a2[a1++]=a0[aZ]}}else{while(a0[aZ]!==C){a2[a1++]=a0[aZ++]
}}a2.length=a1;return a2},grep:function(aZ,a3,aY){var a0=[];for(var a1=0,a2=aZ.length;
a1<a2;a1++){if(!aY!==!a3(aZ[a1],a1)){a0.push(aZ[a1])}}return a0},map:function(aZ,a4,aY){var a0=[],a3;
for(var a1=0,a2=aZ.length;a1<a2;a1++){a3=a4(aZ[a1],a1,aY);if(a3!=null){a0[a0.length]=a3
}}return a0.concat.apply([],a0)},guid:1,proxy:function(a0,aZ,aY){if(arguments.length===2){if(typeof aZ==="string"){aY=a0;
a0=aY[aZ];aZ=C}else{if(aZ&&!a.isFunction(aZ)){aY=aZ;aZ=C}}}if(!aZ&&a0){aZ=function(){return a0.apply(aY||this,arguments)
}}if(a0){aZ.guid=a0.guid=a0.guid||aZ.guid||a.guid++}return aZ},uaMatch:function(aZ){aZ=aZ.toLowerCase();
var aY=/(webkit)[ \/]([\w.]+)/.exec(aZ)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(aZ)||/(msie) ([\w.]+)/.exec(aZ)||!/compatible/.test(aZ)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(aZ)||[];
return{browser:aY[1]||"",version:aY[2]||"0"}},browser:{}});u=a.uaMatch(b);if(u.browser){a.browser[u.browser]=true;
a.browser.version=u.version}if(a.browser.webkit){a.browser.safari=true}if(s){a.inArray=function(aY,aZ){return s.call(aZ,aY)
}}X=a(ab);if(ab.addEventListener){aG=function(){ab.removeEventListener("DOMContentLoaded",aG,false);
a.ready()}}else{if(ab.attachEvent){aG=function(){if(ab.readyState==="complete"){ab.detachEvent("onreadystatechange",aG);
a.ready()}}}}function x(){if(a.isReady){return}try{ab.documentElement.doScroll("left")
}catch(aY){setTimeout(x,1);return}a.ready()}function aV(aY,aZ){if(aZ.src){a.ajax({url:aZ.src,async:false,dataType:"script"})
}else{a.globalEval(aZ.text||aZ.textContent||aZ.innerHTML||"")}if(aZ.parentNode){aZ.parentNode.removeChild(aZ)
}}function an(aY,a6,a4,a0,a3,a5){var aZ=aY.length;if(typeof a6==="object"){for(var a1 in a6){an(aY,a1,a6[a1],a0,a3,a4)
}return aY}if(a4!==C){a0=!a5&&a0&&a.isFunction(a4);for(var a2=0;a2<aZ;a2++){a3(aY[a2],a6,a0?a4.call(aY[a2],a2,a3(aY[a2],a6)):a4,a5)
}return aY}return aZ?a3(aY[0],a6):C}function aP(){return(new Date).getTime()}(function(){a.support={};
var a4=ab.documentElement,a3=ab.createElement("script"),aY=ab.createElement("div"),aZ="script"+aP();
aY.style.display="none";aY.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var a6=aY.getElementsByTagName("*"),a5=aY.getElementsByTagName("a")[0];if(!a6||!a6.length||!a5){return
}a.support={leadingWhitespace:aY.firstChild.nodeType===3,tbody:!aY.getElementsByTagName("tbody").length,htmlSerialize:!!aY.getElementsByTagName("link").length,style:/red/.test(a5.getAttribute("style")),hrefNormalized:a5.getAttribute("href")==="/a",opacity:/^0.55$/.test(a5.style.opacity),cssFloat:!!a5.style.cssFloat,checkOn:aY.getElementsByTagName("input")[0].value==="on",optSelected:ab.createElement("select").appendChild(ab.createElement("option")).selected,parentNode:aY.removeChild(aY.appendChild(ab.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};
a3.type="text/javascript";try{a3.appendChild(ab.createTextNode("window."+aZ+"=1;"))
}catch(a1){}a4.insertBefore(a3,a4.firstChild);if(aM[aZ]){a.support.scriptEval=true;
delete aM[aZ]}try{delete a3.test}catch(a1){a.support.deleteExpando=false}a4.removeChild(a3);
if(aY.attachEvent&&aY.fireEvent){aY.attachEvent("onclick",function a7(){a.support.noCloneEvent=false;
aY.detachEvent("onclick",a7)});aY.cloneNode(true).fireEvent("onclick")}aY=ab.createElement("div");
aY.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var a0=ab.createDocumentFragment();
a0.appendChild(aY.firstChild);a.support.checkClone=a0.cloneNode(true).cloneNode(true).lastChild.checked;
a(function(){var a8=ab.createElement("div");a8.style.width=a8.style.paddingLeft="1px";
ab.body.appendChild(a8);a.boxModel=a.support.boxModel=a8.offsetWidth===2;ab.body.removeChild(a8).style.display="none";
a8=null});var a2=function(a8){var ba=ab.createElement("div");a8="on"+a8;var a9=(a8 in ba);
if(!a9){ba.setAttribute(a8,"return;");a9=typeof ba[a8]==="function"}ba=null;return a9
};a.support.submitBubbles=a2("submit");a.support.changeBubbles=a2("change");a4=a3=aY=a6=a5=null
})();a.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};
var aI="jQuery"+aP(),aH=0,aT={};a.extend({cache:{},expando:aI,noData:{embed:true,object:true,applet:true},data:function(a0,aZ,a2){if(a0.nodeName&&a.noData[a0.nodeName.toLowerCase()]){return
}a0=a0==aM?aT:a0;var a3=a0[aI],aY=a.cache,a1;if(!a3&&typeof aZ==="string"&&a2===C){return null
}if(!a3){a3=++aH}if(typeof aZ==="object"){a0[aI]=a3;a1=aY[a3]=a.extend(true,{},aZ)
}else{if(!aY[a3]){a0[aI]=a3;aY[a3]={}}}a1=aY[a3];if(a2!==C){a1[aZ]=a2}return typeof aZ==="string"?a1[aZ]:a1
},removeData:function(a0,aZ){if(a0.nodeName&&a.noData[a0.nodeName.toLowerCase()]){return
}a0=a0==aM?aT:a0;var a2=a0[aI],aY=a.cache,a1=aY[a2];if(aZ){if(a1){delete a1[aZ];if(a.isEmptyObject(a1)){a.removeData(a0)
}}}else{if(a.support.deleteExpando){delete a0[a.expando]}else{if(a0.removeAttribute){a0.removeAttribute(a.expando)
}}delete aY[a2]}}});a.fn.extend({data:function(aY,a0){if(typeof aY==="undefined"&&this.length){return a.data(this[0])
}else{if(typeof aY==="object"){return this.each(function(){a.data(this,aY)})}}var a1=aY.split(".");
a1[1]=a1[1]?"."+a1[1]:"";if(a0===C){var aZ=this.triggerHandler("getData"+a1[1]+"!",[a1[0]]);
if(aZ===C&&this.length){aZ=a.data(this[0],aY)}return aZ===C&&a1[1]?this.data(a1[0]):aZ
}else{return this.trigger("setData"+a1[1]+"!",[a1[0],a0]).each(function(){a.data(this,aY,a0)
})}},removeData:function(aY){return this.each(function(){a.removeData(this,aY)})}});
a.extend({queue:function(aZ,aY,a1){if(!aZ){return}aY=(aY||"fx")+"queue";var a0=a.data(aZ,aY);
if(!a1){return a0||[]}if(!a0||a.isArray(a1)){a0=a.data(aZ,aY,a.makeArray(a1))}else{a0.push(a1)
}return a0},dequeue:function(a1,a0){a0=a0||"fx";var aY=a.queue(a1,a0),aZ=aY.shift();
if(aZ==="inprogress"){aZ=aY.shift()}if(aZ){if(a0==="fx"){aY.unshift("inprogress")
}aZ.call(a1,function(){a.dequeue(a1,a0)})}}});a.fn.extend({queue:function(aY,aZ){if(typeof aY!=="string"){aZ=aY;
aY="fx"}if(aZ===C){return a.queue(this[0],aY)}return this.each(function(a1,a2){var a0=a.queue(this,aY,aZ);
if(aY==="fx"&&a0[0]!=="inprogress"){a.dequeue(this,aY)}})},dequeue:function(aY){return this.each(function(){a.dequeue(this,aY)
})},delay:function(aZ,aY){aZ=a.fx?a.fx.speeds[aZ]||aZ:aZ;aY=aY||"fx";return this.queue(aY,function(){var a0=this;
setTimeout(function(){a.dequeue(a0,aY)},aZ)})},clearQueue:function(aY){return this.queue(aY||"fx",[])
}});var ao=/[\n\t]/g,S=/\s+/,av=/\r/g,aQ=/href|src|style/,d=/(button|input)/i,z=/(button|input|object|select|textarea)/i,j=/^(a|area)$/i,I=/radio|checkbox/;
a.fn.extend({attr:function(aY,aZ){return an(this,aY,aZ,true,a.attr)},removeAttr:function(aY,aZ){return this.each(function(){a.attr(this,aY,"");
if(this.nodeType===1){this.removeAttribute(aY)}})},addClass:function(a5){if(a.isFunction(a5)){return this.each(function(a8){var a7=a(this);
a7.addClass(a5.call(this,a8,a7.attr("class")))})}if(a5&&typeof a5==="string"){var aY=(a5||"").split(S);
for(var a1=0,a0=this.length;a1<a0;a1++){var aZ=this[a1];if(aZ.nodeType===1){if(!aZ.className){aZ.className=a5
}else{var a2=" "+aZ.className+" ",a4=aZ.className;for(var a3=0,a6=aY.length;a3<a6;
a3++){if(a2.indexOf(" "+aY[a3]+" ")<0){a4+=" "+aY[a3]}}aZ.className=a.trim(a4)}}}}return this
},removeClass:function(a3){if(a.isFunction(a3)){return this.each(function(a7){var a6=a(this);
a6.removeClass(a3.call(this,a7,a6.attr("class")))})}if((a3&&typeof a3==="string")||a3===C){var a4=(a3||"").split(S);
for(var a0=0,aZ=this.length;a0<aZ;a0++){var a2=this[a0];if(a2.nodeType===1&&a2.className){if(a3){var a1=(" "+a2.className+" ").replace(ao," ");
for(var a5=0,aY=a4.length;a5<aY;a5++){a1=a1.replace(" "+a4[a5]+" "," ")}a2.className=a.trim(a1)
}else{a2.className=""}}}}return this},toggleClass:function(a1,aZ){var a0=typeof a1,aY=typeof aZ==="boolean";
if(a.isFunction(a1)){return this.each(function(a3){var a2=a(this);a2.toggleClass(a1.call(this,a3,a2.attr("class"),aZ),aZ)
})}return this.each(function(){if(a0==="string"){var a4,a3=0,a2=a(this),a5=aZ,a6=a1.split(S);
while((a4=a6[a3++])){a5=aY?a5:!a2.hasClass(a4);a2[a5?"addClass":"removeClass"](a4)
}}else{if(a0==="undefined"||a0==="boolean"){if(this.className){a.data(this,"__className__",this.className)
}this.className=this.className||a1===false?"":a.data(this,"__className__")||""}}})
},hasClass:function(aY){var a1=" "+aY+" ";for(var a0=0,aZ=this.length;a0<aZ;a0++){if((" "+this[a0].className+" ").replace(ao," ").indexOf(a1)>-1){return true
}}return false},val:function(a5){if(a5===C){var aZ=this[0];if(aZ){if(a.nodeName(aZ,"option")){return(aZ.attributes.value||{}).specified?aZ.value:aZ.text
}if(a.nodeName(aZ,"select")){var a3=aZ.selectedIndex,a6=[],a7=aZ.options,a2=aZ.type==="select-one";
if(a3<0){return null}for(var a0=a2?a3:0,a4=a2?a3+1:a7.length;a0<a4;a0++){var a1=a7[a0];
if(a1.selected){a5=a(a1).val();if(a2){return a5}a6.push(a5)}}return a6}if(I.test(aZ.type)&&!a.support.checkOn){return aZ.getAttribute("value")===null?"on":aZ.value
}return(aZ.value||"").replace(av,"")}return C}var aY=a.isFunction(a5);return this.each(function(ba){var a9=a(this),bb=a5;
if(this.nodeType!==1){return}if(aY){bb=a5.call(this,ba,a9.val())}if(typeof bb==="number"){bb+=""
}if(a.isArray(bb)&&I.test(this.type)){this.checked=a.inArray(a9.val(),bb)>=0}else{if(a.nodeName(this,"select")){var a8=a.makeArray(bb);
a("option",this).each(function(){this.selected=a.inArray(a(this).val(),a8)>=0});if(!a8.length){this.selectedIndex=-1
}}else{this.value=bb}}})}});a.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(aZ,aY,a4,a7){if(!aZ||aZ.nodeType===3||aZ.nodeType===8){return C
}if(a7&&aY in a.attrFn){return a(aZ)[aY](a4)}var a0=aZ.nodeType!==1||!a.isXMLDoc(aZ),a3=a4!==C;
aY=a0&&a.props[aY]||aY;if(aZ.nodeType===1){var a2=aQ.test(aY);if(aY==="selected"&&!a.support.optSelected){var a5=aZ.parentNode;
if(a5){a5.selectedIndex;if(a5.parentNode){a5.parentNode.selectedIndex}}}if(aY in aZ&&a0&&!a2){if(a3){if(aY==="type"&&d.test(aZ.nodeName)&&aZ.parentNode){a.error("type property can't be changed")
}aZ[aY]=a4}if(a.nodeName(aZ,"form")&&aZ.getAttributeNode(aY)){return aZ.getAttributeNode(aY).nodeValue
}if(aY==="tabIndex"){var a6=aZ.getAttributeNode("tabIndex");return a6&&a6.specified?a6.value:z.test(aZ.nodeName)||j.test(aZ.nodeName)&&aZ.href?0:C
}return aZ[aY]}if(!a.support.style&&a0&&aY==="style"){if(a3){aZ.style.cssText=""+a4
}return aZ.style.cssText}if(a3){aZ.setAttribute(aY,""+a4)}var a1=!a.support.hrefNormalized&&a0&&a2?aZ.getAttribute(aY,2):aZ.getAttribute(aY);
return a1===null?C:a1}return a.style(aZ,aY,a4)}});var aC=/\.(.*)$/,A=function(aY){return aY.replace(/[^\w\s\.\|`]/g,function(aZ){return"\\"+aZ
})};a.event={add:function(a1,a5,ba,a3){if(a1.nodeType===3||a1.nodeType===8){return
}if(a1.setInterval&&(a1!==aM&&!a1.frameElement)){a1=aM}var aZ,a9;if(ba.handler){aZ=ba;
ba=aZ.handler}if(!ba.guid){ba.guid=a.guid++}var a6=a.data(a1);if(!a6){return}var bb=a6.events=a6.events||{},a4=a6.handle,a4;
if(!a4){a6.handle=a4=function(){return typeof a!=="undefined"&&!a.event.triggered?a.event.handle.apply(a4.elem,arguments):C
}}a4.elem=a1;a5=a5.split(" ");var a8,a2=0,aY;while((a8=a5[a2++])){a9=aZ?a.extend({},aZ):{handler:ba,data:a3};
if(a8.indexOf(".")>-1){aY=a8.split(".");a8=aY.shift();a9.namespace=aY.slice(0).sort().join(".")
}else{aY=[];a9.namespace=""}a9.type=a8;a9.guid=ba.guid;var a0=bb[a8],a7=a.event.special[a8]||{};
if(!a0){a0=bb[a8]=[];if(!a7.setup||a7.setup.call(a1,a3,aY,a4)===false){if(a1.addEventListener){a1.addEventListener(a8,a4,false)
}else{if(a1.attachEvent){a1.attachEvent("on"+a8,a4)}}}}if(a7.add){a7.add.call(a1,a9);
if(!a9.handler.guid){a9.handler.guid=ba.guid}}a0.push(a9);a.event.global[a8]=true
}a1=null},global:{},remove:function(bd,a8,aZ,a4){if(bd.nodeType===3||bd.nodeType===8){return
}var bg,a3,a5,bb=0,a1,a6,a9,a2,a7,aY,bf,bc=a.data(bd),a0=bc&&bc.events;if(!bc||!a0){return
}if(a8&&a8.type){aZ=a8.handler;a8=a8.type}if(!a8||typeof a8==="string"&&a8.charAt(0)==="."){a8=a8||"";
for(a3 in a0){a.event.remove(bd,a3+a8)}return}a8=a8.split(" ");while((a3=a8[bb++])){bf=a3;
aY=null;a1=a3.indexOf(".")<0;a6=[];if(!a1){a6=a3.split(".");a3=a6.shift();a9=new RegExp("(^|\\.)"+a.map(a6.slice(0).sort(),A).join("\\.(?:.*\\.)?")+"(\\.|$)")
}a7=a0[a3];if(!a7){continue}if(!aZ){for(var ba=0;ba<a7.length;ba++){aY=a7[ba];if(a1||a9.test(aY.namespace)){a.event.remove(bd,bf,aY.handler,ba);
a7.splice(ba--,1)}}continue}a2=a.event.special[a3]||{};for(var ba=a4||0;ba<a7.length;
ba++){aY=a7[ba];if(aZ.guid===aY.guid){if(a1||a9.test(aY.namespace)){if(a4==null){a7.splice(ba--,1)
}if(a2.remove){a2.remove.call(bd,aY)}}if(a4!=null){break}}}if(a7.length===0||a4!=null&&a7.length===1){if(!a2.teardown||a2.teardown.call(bd,a6)===false){ag(bd,a3,bc.handle)
}bg=null;delete a0[a3]}}if(a.isEmptyObject(a0)){var be=bc.handle;if(be){be.elem=null
}delete bc.events;delete bc.handle;if(a.isEmptyObject(bc)){a.removeData(bd)}}},trigger:function(aY,a2,a0){var a7=aY.type||aY,a1=arguments[3];
if(!a1){aY=typeof aY==="object"?aY[aI]?aY:a.extend(a.Event(a7),aY):a.Event(a7);if(a7.indexOf("!")>=0){aY.type=a7=a7.slice(0,-1);
aY.exclusive=true}if(!a0){aY.stopPropagation();if(a.event.global[a7]){a.each(a.cache,function(){if(this.events&&this.events[a7]){a.event.trigger(aY,a2,this.handle.elem)
}})}}if(!a0||a0.nodeType===3||a0.nodeType===8){return C}aY.result=C;aY.target=a0;
a2=a.makeArray(a2);a2.unshift(aY)}aY.currentTarget=a0;var a3=a.data(a0,"handle");
if(a3){a3.apply(a0,a2)}var a8=a0.parentNode||a0.ownerDocument;try{if(!(a0&&a0.nodeName&&a.noData[a0.nodeName.toLowerCase()])){if(a0["on"+a7]&&a0["on"+a7].apply(a0,a2)===false){aY.result=false
}}}catch(a5){}if(!aY.isPropagationStopped()&&a8){a.event.trigger(aY,a2,a8,true)}else{if(!aY.isDefaultPrevented()){var a4=aY.target,aZ,a9=a.nodeName(a4,"a")&&a7==="click",a6=a.event.special[a7]||{};
if((!a6._default||a6._default.call(a0,aY)===false)&&!a9&&!(a4&&a4.nodeName&&a.noData[a4.nodeName.toLowerCase()])){try{if(a4[a7]){aZ=a4["on"+a7];
if(aZ){a4["on"+a7]=null}a.event.triggered=true;a4[a7]()}}catch(a5){}if(aZ){a4["on"+a7]=aZ
}a.event.triggered=false}}}},handle:function(aY){var a6,a0,aZ,a1,a7;aY=arguments[0]=a.event.fix(aY||aM.event);
aY.currentTarget=this;a6=aY.type.indexOf(".")<0&&!aY.exclusive;if(!a6){aZ=aY.type.split(".");
aY.type=aZ.shift();a1=new RegExp("(^|\\.)"+aZ.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")
}var a7=a.data(this,"events"),a0=a7[aY.type];if(a7&&a0){a0=a0.slice(0);for(var a3=0,a2=a0.length;
a3<a2;a3++){var a5=a0[a3];if(a6||a1.test(a5.namespace)){aY.handler=a5.handler;aY.data=a5.data;
aY.handleObj=a5;var a4=a5.handler.apply(this,arguments);if(a4!==C){aY.result=a4;if(a4===false){aY.preventDefault();
aY.stopPropagation()}}if(aY.isImmediatePropagationStopped()){break}}}}return aY.result
},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a1){if(a1[aI]){return a1
}var aZ=a1;a1=a.Event(aZ);for(var a0=this.props.length,a3;a0;){a3=this.props[--a0];
a1[a3]=aZ[a3]}if(!a1.target){a1.target=a1.srcElement||ab}if(a1.target.nodeType===3){a1.target=a1.target.parentNode
}if(!a1.relatedTarget&&a1.fromElement){a1.relatedTarget=a1.fromElement===a1.target?a1.toElement:a1.fromElement
}if(a1.pageX==null&&a1.clientX!=null){var a2=ab.documentElement,aY=ab.body;a1.pageX=a1.clientX+(a2&&a2.scrollLeft||aY&&aY.scrollLeft||0)-(a2&&a2.clientLeft||aY&&aY.clientLeft||0);
a1.pageY=a1.clientY+(a2&&a2.scrollTop||aY&&aY.scrollTop||0)-(a2&&a2.clientTop||aY&&aY.clientTop||0)
}if(!a1.which&&((a1.charCode||a1.charCode===0)?a1.charCode:a1.keyCode)){a1.which=a1.charCode||a1.keyCode
}if(!a1.metaKey&&a1.ctrlKey){a1.metaKey=a1.ctrlKey}if(!a1.which&&a1.button!==C){a1.which=(a1.button&1?1:(a1.button&2?3:(a1.button&4?2:0)))
}return a1},guid:100000000,proxy:a.proxy,special:{ready:{setup:a.bindReady,teardown:a.noop},live:{add:function(aY){a.event.add(this,aY.origType,a.extend({},aY,{handler:V}))
},remove:function(aZ){var aY=true,a0=aZ.origType.replace(aC,"");a.each(a.data(this,"events").live||[],function(){if(a0===this.origType.replace(aC,"")){aY=false;
return false}});if(aY){a.event.remove(this,aZ.origType,V)}}},beforeunload:{setup:function(a0,aZ,aY){if(this.setInterval){this.onbeforeunload=aY
}return false},teardown:function(aZ,aY){if(this.onbeforeunload===aY){this.onbeforeunload=null
}}}}};var ag=ab.removeEventListener?function(aZ,aY,a0){aZ.removeEventListener(aY,a0,false)
}:function(aZ,aY,a0){aZ.detachEvent("on"+aY,a0)};a.Event=function(aY){if(!this.preventDefault){return new a.Event(aY)
}if(aY&&aY.type){this.originalEvent=aY;this.type=aY.type}else{this.type=aY}this.timeStamp=aP();
this[aI]=true};function aR(){return false}function f(){return true}a.Event.prototype={preventDefault:function(){this.isDefaultPrevented=f;
var aY=this.originalEvent;if(!aY){return}if(aY.preventDefault){aY.preventDefault()
}aY.returnValue=false},stopPropagation:function(){this.isPropagationStopped=f;var aY=this.originalEvent;
if(!aY){return}if(aY.stopPropagation){aY.stopPropagation()}aY.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=f;
this.stopPropagation()},isDefaultPrevented:aR,isPropagationStopped:aR,isImmediatePropagationStopped:aR};
var Q=function(aZ){var aY=aZ.relatedTarget;try{while(aY&&aY!==this){aY=aY.parentNode
}if(aY!==this){aZ.type=aZ.data;a.event.handle.apply(this,arguments)}}catch(a0){}},ay=function(aY){aY.type=aY.data;
a.event.handle.apply(this,arguments)};a.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(aZ,aY){a.event.special[aZ]={setup:function(a0){a.event.add(this,aY,a0&&a0.selector?ay:Q,aZ)
},teardown:function(a0){a.event.remove(this,aY,a0&&a0.selector?ay:Q)}}});if(!a.support.submitBubbles){a.event.special.submit={setup:function(aZ,aY){if(this.nodeName.toLowerCase()!=="form"){a.event.add(this,"click.specialSubmit",function(a2){var a1=a2.target,a0=a1.type;
if((a0==="submit"||a0==="image")&&a(a1).closest("form").length){return aA("submit",this,arguments)
}});a.event.add(this,"keypress.specialSubmit",function(a2){var a1=a2.target,a0=a1.type;
if((a0==="text"||a0==="password")&&a(a1).closest("form").length&&a2.keyCode===13){return aA("submit",this,arguments)
}})}else{return false}},teardown:function(aY){a.event.remove(this,".specialSubmit")
}}}if(!a.support.changeBubbles){var aq=/textarea|input|select/i,aS,i=function(aZ){var aY=aZ.type,a0=aZ.value;
if(aY==="radio"||aY==="checkbox"){a0=aZ.checked}else{if(aY==="select-multiple"){a0=aZ.selectedIndex>-1?a.map(aZ.options,function(a1){return a1.selected
}).join("-"):""}else{if(aZ.nodeName.toLowerCase()==="select"){a0=aZ.selectedIndex
}}}return a0},O=function O(a0){var aY=a0.target,aZ,a1;if(!aq.test(aY.nodeName)||aY.readOnly){return
}aZ=a.data(aY,"_change_data");a1=i(aY);if(a0.type!=="focusout"||aY.type!=="radio"){a.data(aY,"_change_data",a1)
}if(aZ===C||a1===aZ){return}if(aZ!=null||a1){a0.type="change";return a.event.trigger(a0,arguments[1],aY)
}};a.event.special.change={filters:{focusout:O,click:function(a0){var aZ=a0.target,aY=aZ.type;
if(aY==="radio"||aY==="checkbox"||aZ.nodeName.toLowerCase()==="select"){return O.call(this,a0)
}},keydown:function(a0){var aZ=a0.target,aY=aZ.type;if((a0.keyCode===13&&aZ.nodeName.toLowerCase()!=="textarea")||(a0.keyCode===32&&(aY==="checkbox"||aY==="radio"))||aY==="select-multiple"){return O.call(this,a0)
}},beforeactivate:function(aZ){var aY=aZ.target;a.data(aY,"_change_data",i(aY))}},setup:function(a0,aZ){if(this.type==="file"){return false
}for(var aY in aS){a.event.add(this,aY+".specialChange",aS[aY])}return aq.test(this.nodeName)
},teardown:function(aY){a.event.remove(this,".specialChange");return aq.test(this.nodeName)
}};aS=a.event.special.change.filters}function aA(aZ,a0,aY){aY[0].type=aZ;return a.event.handle.apply(a0,aY)
}if(ab.addEventListener){a.each({focus:"focusin",blur:"focusout"},function(a0,aY){a.event.special[aY]={setup:function(){this.addEventListener(a0,aZ,true)
},teardown:function(){this.removeEventListener(a0,aZ,true)}};function aZ(a1){a1=a.event.fix(a1);
a1.type=aY;return a.event.handle.call(this,a1)}})}a.each(["bind","one"],function(aZ,aY){a.fn[aY]=function(a5,a6,a4){if(typeof a5==="object"){for(var a2 in a5){this[aY](a2,a6,a5[a2],a4)
}return this}if(a.isFunction(a6)){a4=a6;a6=C}var a3=aY==="one"?a.proxy(a4,function(a7){a(this).unbind(a7,a3);
return a4.apply(this,arguments)}):a4;if(a5==="unload"&&aY!=="one"){this.one(a5,a6,a4)
}else{for(var a1=0,a0=this.length;a1<a0;a1++){a.event.add(this[a1],a5,a3,a6)}}return this
}});a.fn.extend({unbind:function(a2,a1){if(typeof a2==="object"&&!a2.preventDefault){for(var a0 in a2){this.unbind(a0,a2[a0])
}}else{for(var aZ=0,aY=this.length;aZ<aY;aZ++){a.event.remove(this[aZ],a2,a1)}}return this
},delegate:function(aY,aZ,a1,a0){return this.live(aZ,a1,a0,aY)},undelegate:function(aY,aZ,a0){if(arguments.length===0){return this.unbind("live")
}else{return this.die(aZ,null,a0,aY)}},trigger:function(aY,aZ){return this.each(function(){a.event.trigger(aY,aZ,this)
})},triggerHandler:function(aY,a0){if(this[0]){var aZ=a.Event(aY);aZ.preventDefault();
aZ.stopPropagation();a.event.trigger(aZ,a0,this[0]);return aZ.result}},toggle:function(a0){var aY=arguments,aZ=1;
while(aZ<aY.length){a.proxy(a0,aY[aZ++])}return this.click(a.proxy(a0,function(a1){var a2=(a.data(this,"lastToggle"+a0.guid)||0)%aZ;
a.data(this,"lastToggle"+a0.guid,a2+1);a1.preventDefault();return aY[a2].apply(this,arguments)||false
}))},hover:function(aY,aZ){return this.mouseenter(aY).mouseleave(aZ||aY)}});var aw={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};
a.each(["live","die"],function(aZ,aY){a.fn[aY]=function(a7,a4,a9,a2){var a8,a5=0,a6,a1,ba,a3=a2||this.selector,a0=a2?this:a(this.context);
if(a.isFunction(a4)){a9=a4;a4=C}a7=(a7||"").split(" ");while((a8=a7[a5++])!=null){a6=aC.exec(a8);
a1="";if(a6){a1=a6[0];a8=a8.replace(aC,"")}if(a8==="hover"){a7.push("mouseenter"+a1,"mouseleave"+a1);
continue}ba=a8;if(a8==="focus"||a8==="blur"){a7.push(aw[a8]+a1);a8=a8+a1}else{a8=(aw[a8]||a8)+a1
}if(aY==="live"){a0.each(function(){a.event.add(this,m(a8,a3),{data:a4,selector:a3,handler:a9,origType:a8,origHandler:a9,preType:ba})
})}else{a0.unbind(m(a8,a3),a9)}}return this}});function V(aY){var a8,aZ=[],bb=[],a7=arguments,ba,a6,a9,a1,a3,a5,a2,a4,bc=a.data(this,"events");
if(aY.liveFired===this||!bc||!bc.live||aY.button&&aY.type==="click"){return}aY.liveFired=this;
var a0=bc.live.slice(0);for(a3=0;a3<a0.length;a3++){a9=a0[a3];if(a9.origType.replace(aC,"")===aY.type){bb.push(a9.selector)
}else{a0.splice(a3--,1)}}a6=a(aY.target).closest(bb,aY.currentTarget);for(a5=0,a2=a6.length;
a5<a2;a5++){for(a3=0;a3<a0.length;a3++){a9=a0[a3];if(a6[a5].selector===a9.selector){a1=a6[a5].elem;
ba=null;if(a9.preType==="mouseenter"||a9.preType==="mouseleave"){ba=a(aY.relatedTarget).closest(a9.selector)[0]
}if(!ba||ba!==a1){aZ.push({elem:a1,handleObj:a9})}}}}for(a5=0,a2=aZ.length;a5<a2;
a5++){a6=aZ[a5];aY.currentTarget=a6.elem;aY.data=a6.handleObj.data;aY.handleObj=a6.handleObj;
if(a6.handleObj.origHandler.apply(a6.elem,a7)===false){a8=false;break}}return a8}function m(aZ,aY){return"live."+(aZ&&aZ!=="*"?aZ+".":"")+aY.replace(/\./g,"`").replace(/ /g,"&")
}a.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "),function(aZ,aY){a.fn[aY]=function(a0){return a0?this.bind(aY,a0):this.trigger(aY)
};if(a.attrFn){a.attrFn[aY]=true}});if(aM.attachEvent&&!aM.addEventListener){aM.attachEvent("onunload",function(){for(var aZ in a.cache){if(a.cache[aZ].handle){try{a.event.remove(a.cache[aZ].handle.elem)
}catch(aY){}}}});
/*
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
}(function(){var a9=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,ba=0,bc=Object.prototype.toString,a4=false,a3=true;
[0,0].sort(function(){a3=false;return 0});var a0=function(bl,bg,bo,bp){bo=bo||[];
var br=bg=bg||ab;if(bg.nodeType!==1&&bg.nodeType!==9){return[]}if(!bl||typeof bl!=="string"){return bo
}var bm=[],bi,bt,bw,bh,bk=true,bj=a1(bg),bq=bl;while((a9.exec(""),bi=a9.exec(bq))!==null){bq=bi[3];
bm.push(bi[1]);if(bi[2]){bh=bi[3];break}}if(bm.length>1&&a5.exec(bl)){if(bm.length===2&&a6.relative[bm[0]]){bt=bd(bm[0]+bm[1],bg)
}else{bt=a6.relative[bm[0]]?[bg]:a0(bm.shift(),bg);while(bm.length){bl=bm.shift();
if(a6.relative[bl]){bl+=bm.shift()}bt=bd(bl,bt)}}}else{if(!bp&&bm.length>1&&bg.nodeType===9&&!bj&&a6.match.ID.test(bm[0])&&!a6.match.ID.test(bm[bm.length-1])){var bs=a0.find(bm.shift(),bg,bj);
bg=bs.expr?a0.filter(bs.expr,bs.set)[0]:bs.set[0]}if(bg){var bs=bp?{expr:bm.pop(),set:a8(bp)}:a0.find(bm.pop(),bm.length===1&&(bm[0]==="~"||bm[0]==="+")&&bg.parentNode?bg.parentNode:bg,bj);
bt=bs.expr?a0.filter(bs.expr,bs.set):bs.set;if(bm.length>0){bw=a8(bt)}else{bk=false
}while(bm.length){var bv=bm.pop(),bu=bv;if(!a6.relative[bv]){bv=""}else{bu=bm.pop()
}if(bu==null){bu=bg}a6.relative[bv](bw,bu,bj)}}else{bw=bm=[]}}if(!bw){bw=bt}if(!bw){a0.error(bv||bl)
}if(bc.call(bw)==="[object Array]"){if(!bk){bo.push.apply(bo,bw)}else{if(bg&&bg.nodeType===1){for(var bn=0;
bw[bn]!=null;bn++){if(bw[bn]&&(bw[bn]===true||bw[bn].nodeType===1&&a7(bg,bw[bn]))){bo.push(bt[bn])
}}}else{for(var bn=0;bw[bn]!=null;bn++){if(bw[bn]&&bw[bn].nodeType===1){bo.push(bt[bn])
}}}}}else{a8(bw,bo)}if(bh){a0(bh,br,bo,bp);a0.uniqueSort(bo)}return bo};a0.uniqueSort=function(bh){if(bb){a4=a3;
bh.sort(bb);if(a4){for(var bg=1;bg<bh.length;bg++){if(bh[bg]===bh[bg-1]){bh.splice(bg--,1)
}}}}return bh};a0.matches=function(bg,bh){return a0(bg,null,null,bh)};a0.find=function(bn,bg,bo){var bm,bk;
if(!bn){return[]}for(var bj=0,bi=a6.order.length;bj<bi;bj++){var bl=a6.order[bj],bk;
if((bk=a6.leftMatch[bl].exec(bn))){var bh=bk[1];bk.splice(1,1);if(bh.substr(bh.length-1)!=="\\"){bk[1]=(bk[1]||"").replace(/\\/g,"");
bm=a6.find[bl](bk,bg,bo);if(bm!=null){bn=bn.replace(a6.match[bl],"");break}}}}if(!bm){bm=bg.getElementsByTagName("*")
}return{set:bm,expr:bn}};a0.filter=function(br,bq,bu,bk){var bi=br,bw=[],bo=bq,bm,bg,bn=bq&&bq[0]&&a1(bq[0]);
while(br&&bq.length){for(var bp in a6.filter){if((bm=a6.leftMatch[bp].exec(br))!=null&&bm[2]){var bh=a6.filter[bp],bv,bt,bj=bm[1];
bg=false;bm.splice(1,1);if(bj.substr(bj.length-1)==="\\"){continue}if(bo===bw){bw=[]
}if(a6.preFilter[bp]){bm=a6.preFilter[bp](bm,bo,bu,bw,bk,bn);if(!bm){bg=bv=true}else{if(bm===true){continue
}}}if(bm){for(var bl=0;(bt=bo[bl])!=null;bl++){if(bt){bv=bh(bt,bm,bl,bo);var bs=bk^!!bv;
if(bu&&bv!=null){if(bs){bg=true}else{bo[bl]=false}}else{if(bs){bw.push(bt);bg=true
}}}}}if(bv!==C){if(!bu){bo=bw}br=br.replace(a6.match[bp],"");if(!bg){return[]}break
}}}if(br===bi){if(bg==null){a0.error(br)}else{break}}bi=br}return bo};a0.error=function(bg){throw"Syntax error, unrecognized expression: "+bg
};var a6=a0.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bg){return bg.getAttribute("href")
}},relative:{"+":function(bm,bh){var bj=typeof bh==="string",bl=bj&&!/\W/.test(bh),bn=bj&&!bl;
if(bl){bh=bh.toLowerCase()}for(var bi=0,bg=bm.length,bk;bi<bg;bi++){if((bk=bm[bi])){while((bk=bk.previousSibling)&&bk.nodeType!==1){}bm[bi]=bn||bk&&bk.nodeName.toLowerCase()===bh?bk||false:bk===bh
}}if(bn){a0.filter(bh,bm,true)}},">":function(bm,bh){var bk=typeof bh==="string";
if(bk&&!/\W/.test(bh)){bh=bh.toLowerCase();for(var bi=0,bg=bm.length;bi<bg;bi++){var bl=bm[bi];
if(bl){var bj=bl.parentNode;bm[bi]=bj.nodeName.toLowerCase()===bh?bj:false}}}else{for(var bi=0,bg=bm.length;
bi<bg;bi++){var bl=bm[bi];if(bl){bm[bi]=bk?bl.parentNode:bl.parentNode===bh}}if(bk){a0.filter(bh,bm,true)
}}},"":function(bj,bh,bl){var bi=ba++,bg=be;if(typeof bh==="string"&&!/\W/.test(bh)){var bk=bh=bh.toLowerCase();
bg=aY}bg("parentNode",bh,bi,bj,bk,bl)},"~":function(bj,bh,bl){var bi=ba++,bg=be;if(typeof bh==="string"&&!/\W/.test(bh)){var bk=bh=bh.toLowerCase();
bg=aY}bg("previousSibling",bh,bi,bj,bk,bl)}},find:{ID:function(bh,bi,bj){if(typeof bi.getElementById!=="undefined"&&!bj){var bg=bi.getElementById(bh[1]);
return bg?[bg]:[]}},NAME:function(bi,bl){if(typeof bl.getElementsByName!=="undefined"){var bh=[],bk=bl.getElementsByName(bi[1]);
for(var bj=0,bg=bk.length;bj<bg;bj++){if(bk[bj].getAttribute("name")===bi[1]){bh.push(bk[bj])
}}return bh.length===0?null:bh}},TAG:function(bg,bh){return bh.getElementsByTagName(bg[1])
}},preFilter:{CLASS:function(bj,bh,bi,bg,bm,bn){bj=" "+bj[1].replace(/\\/g,"")+" ";
if(bn){return bj}for(var bk=0,bl;(bl=bh[bk])!=null;bk++){if(bl){if(bm^(bl.className&&(" "+bl.className+" ").replace(/[\t\n]/g," ").indexOf(bj)>=0)){if(!bi){bg.push(bl)
}}else{if(bi){bh[bk]=false}}}}return false},ID:function(bg){return bg[1].replace(/\\/g,"")
},TAG:function(bh,bg){return bh[1].toLowerCase()},CHILD:function(bg){if(bg[1]==="nth"){var bh=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(bg[2]==="even"&&"2n"||bg[2]==="odd"&&"2n+1"||!/\D/.test(bg[2])&&"0n+"+bg[2]||bg[2]);
bg[2]=(bh[1]+(bh[2]||1))-0;bg[3]=bh[3]-0}bg[0]=ba++;return bg},ATTR:function(bk,bh,bi,bg,bl,bm){var bj=bk[1].replace(/\\/g,"");
if(!bm&&a6.attrMap[bj]){bk[1]=a6.attrMap[bj]}if(bk[2]==="~="){bk[4]=" "+bk[4]+" "
}return bk},PSEUDO:function(bk,bh,bi,bg,bl){if(bk[1]==="not"){if((a9.exec(bk[3])||"").length>1||/^\w/.test(bk[3])){bk[3]=a0(bk[3],null,null,bh)
}else{var bj=a0.filter(bk[3],bh,bi,true^bl);if(!bi){bg.push.apply(bg,bj)}return false
}}else{if(a6.match.POS.test(bk[0])||a6.match.CHILD.test(bk[0])){return true}}return bk
},POS:function(bg){bg.unshift(true);return bg}},filters:{enabled:function(bg){return bg.disabled===false&&bg.type!=="hidden"
},disabled:function(bg){return bg.disabled===true},checked:function(bg){return bg.checked===true
},selected:function(bg){bg.parentNode.selectedIndex;return bg.selected===true},parent:function(bg){return !!bg.firstChild
},empty:function(bg){return !bg.firstChild},has:function(bi,bh,bg){return !!a0(bg[3],bi).length
},header:function(bg){return/h\d/i.test(bg.nodeName)},text:function(bg){return"text"===bg.type
},radio:function(bg){return"radio"===bg.type},checkbox:function(bg){return"checkbox"===bg.type
},file:function(bg){return"file"===bg.type},password:function(bg){return"password"===bg.type
},submit:function(bg){return"submit"===bg.type},image:function(bg){return"image"===bg.type
},reset:function(bg){return"reset"===bg.type},button:function(bg){return"button"===bg.type||bg.nodeName.toLowerCase()==="button"
},input:function(bg){return/input|select|textarea|button/i.test(bg.nodeName)}},setFilters:{first:function(bh,bg){return bg===0
},last:function(bi,bh,bg,bj){return bh===bj.length-1},even:function(bh,bg){return bg%2===0
},odd:function(bh,bg){return bg%2===1},lt:function(bi,bh,bg){return bh<bg[3]-0},gt:function(bi,bh,bg){return bh>bg[3]-0
},nth:function(bi,bh,bg){return bg[3]-0===bh},eq:function(bi,bh,bg){return bg[3]-0===bh
}},filter:{PSEUDO:function(bm,bi,bj,bn){var bh=bi[1],bk=a6.filters[bh];if(bk){return bk(bm,bj,bi,bn)
}else{if(bh==="contains"){return(bm.textContent||bm.innerText||aZ([bm])||"").indexOf(bi[3])>=0
}else{if(bh==="not"){var bl=bi[3];for(var bj=0,bg=bl.length;bj<bg;bj++){if(bl[bj]===bm){return false
}}return true}else{a0.error("Syntax error, unrecognized expression: "+bh)}}}},CHILD:function(bg,bj){var bm=bj[1],bh=bg;
switch(bm){case"only":case"first":while((bh=bh.previousSibling)){if(bh.nodeType===1){return false
}}if(bm==="first"){return true}bh=bg;case"last":while((bh=bh.nextSibling)){if(bh.nodeType===1){return false
}}return true;case"nth":var bi=bj[2],bp=bj[3];if(bi===1&&bp===0){return true}var bl=bj[0],bo=bg.parentNode;
if(bo&&(bo.sizcache!==bl||!bg.nodeIndex)){var bk=0;for(bh=bo.firstChild;bh;bh=bh.nextSibling){if(bh.nodeType===1){bh.nodeIndex=++bk
}}bo.sizcache=bl}var bn=bg.nodeIndex-bp;if(bi===0){return bn===0}else{return(bn%bi===0&&bn/bi>=0)
}}},ID:function(bh,bg){return bh.nodeType===1&&bh.getAttribute("id")===bg},TAG:function(bh,bg){return(bg==="*"&&bh.nodeType===1)||bh.nodeName.toLowerCase()===bg
},CLASS:function(bh,bg){return(" "+(bh.className||bh.getAttribute("class"))+" ").indexOf(bg)>-1
},ATTR:function(bl,bj){var bi=bj[1],bg=a6.attrHandle[bi]?a6.attrHandle[bi](bl):bl[bi]!=null?bl[bi]:bl.getAttribute(bi),bm=bg+"",bk=bj[2],bh=bj[4];
return bg==null?bk==="!=":bk==="="?bm===bh:bk==="*="?bm.indexOf(bh)>=0:bk==="~="?(" "+bm+" ").indexOf(bh)>=0:!bh?bm&&bg!==false:bk==="!="?bm!==bh:bk==="^="?bm.indexOf(bh)===0:bk==="$="?bm.substr(bm.length-bh.length)===bh:bk==="|="?bm===bh||bm.substr(0,bh.length+1)===bh+"-":false
},POS:function(bk,bh,bi,bl){var bg=bh[2],bj=a6.setFilters[bg];if(bj){return bj(bk,bi,bh,bl)
}}}};var a5=a6.match.POS;for(var a2 in a6.match){a6.match[a2]=new RegExp(a6.match[a2].source+/(?![^\[]*\])(?![^\(]*\))/.source);
a6.leftMatch[a2]=new RegExp(/(^(?:.|\r|\n)*?)/.source+a6.match[a2].source.replace(/\\(\d+)/g,function(bh,bg){return"\\"+(bg-0+1)
}))}var a8=function(bh,bg){bh=Array.prototype.slice.call(bh,0);if(bg){bg.push.apply(bg,bh);
return bg}return bh};try{Array.prototype.slice.call(ab.documentElement.childNodes,0)[0].nodeType
}catch(bf){a8=function(bk,bj){var bh=bj||[];if(bc.call(bk)==="[object Array]"){Array.prototype.push.apply(bh,bk)
}else{if(typeof bk.length==="number"){for(var bi=0,bg=bk.length;bi<bg;bi++){bh.push(bk[bi])
}}else{for(var bi=0;bk[bi];bi++){bh.push(bk[bi])}}}return bh}}var bb;if(ab.documentElement.compareDocumentPosition){bb=function(bh,bg){if(!bh.compareDocumentPosition||!bg.compareDocumentPosition){if(bh==bg){a4=true
}return bh.compareDocumentPosition?-1:1}var bi=bh.compareDocumentPosition(bg)&4?-1:bh===bg?0:1;
if(bi===0){a4=true}return bi}}else{if("sourceIndex" in ab.documentElement){bb=function(bh,bg){if(!bh.sourceIndex||!bg.sourceIndex){if(bh==bg){a4=true
}return bh.sourceIndex?-1:1}var bi=bh.sourceIndex-bg.sourceIndex;if(bi===0){a4=true
}return bi}}else{if(ab.createRange){bb=function(bj,bh){if(!bj.ownerDocument||!bh.ownerDocument){if(bj==bh){a4=true
}return bj.ownerDocument?-1:1}var bi=bj.ownerDocument.createRange(),bg=bh.ownerDocument.createRange();
bi.setStart(bj,0);bi.setEnd(bj,0);bg.setStart(bh,0);bg.setEnd(bh,0);var bk=bi.compareBoundaryPoints(Range.START_TO_END,bg);
if(bk===0){a4=true}return bk}}}}function aZ(bg){var bh="",bj;for(var bi=0;bg[bi];
bi++){bj=bg[bi];if(bj.nodeType===3||bj.nodeType===4){bh+=bj.nodeValue}else{if(bj.nodeType!==8){bh+=aZ(bj.childNodes)
}}}return bh}(function(){var bh=ab.createElement("div"),bi="script"+(new Date).getTime();
bh.innerHTML="<a name='"+bi+"'/>";var bg=ab.documentElement;bg.insertBefore(bh,bg.firstChild);
if(ab.getElementById(bi)){a6.find.ID=function(bk,bl,bm){if(typeof bl.getElementById!=="undefined"&&!bm){var bj=bl.getElementById(bk[1]);
return bj?bj.id===bk[1]||typeof bj.getAttributeNode!=="undefined"&&bj.getAttributeNode("id").nodeValue===bk[1]?[bj]:C:[]
}};a6.filter.ID=function(bl,bj){var bk=typeof bl.getAttributeNode!=="undefined"&&bl.getAttributeNode("id");
return bl.nodeType===1&&bk&&bk.nodeValue===bj}}bg.removeChild(bh);bg=bh=null})();
(function(){var bg=ab.createElement("div");bg.appendChild(ab.createComment(""));if(bg.getElementsByTagName("*").length>0){a6.find.TAG=function(bh,bl){var bk=bl.getElementsByTagName(bh[1]);
if(bh[1]==="*"){var bj=[];for(var bi=0;bk[bi];bi++){if(bk[bi].nodeType===1){bj.push(bk[bi])
}}bk=bj}return bk}}bg.innerHTML="<a href='#'></a>";if(bg.firstChild&&typeof bg.firstChild.getAttribute!=="undefined"&&bg.firstChild.getAttribute("href")!=="#"){a6.attrHandle.href=function(bh){return bh.getAttribute("href",2)
}}bg=null})();if(ab.querySelectorAll){(function(){var bg=a0,bi=ab.createElement("div");
bi.innerHTML="<p class='TEST'></p>";if(bi.querySelectorAll&&bi.querySelectorAll(".TEST").length===0){return
}a0=function(bm,bl,bj,bk){bl=bl||ab;if(!bk&&bl.nodeType===9&&!a1(bl)){try{return a8(bl.querySelectorAll(bm),bj)
}catch(bn){}}return bg(bm,bl,bj,bk)};for(var bh in bg){a0[bh]=bg[bh]}bi=null})()}(function(){var bg=ab.createElement("div");
bg.innerHTML="<div class='test e'></div><div class='test'></div>";if(!bg.getElementsByClassName||bg.getElementsByClassName("e").length===0){return
}bg.lastChild.className="e";if(bg.getElementsByClassName("e").length===1){return}a6.order.splice(1,0,"CLASS");
a6.find.CLASS=function(bh,bi,bj){if(typeof bi.getElementsByClassName!=="undefined"&&!bj){return bi.getElementsByClassName(bh[1])
}};bg=null})();function aY(bh,bm,bl,bp,bn,bo){for(var bj=0,bi=bp.length;bj<bi;bj++){var bg=bp[bj];
if(bg){bg=bg[bh];var bk=false;while(bg){if(bg.sizcache===bl){bk=bp[bg.sizset];break
}if(bg.nodeType===1&&!bo){bg.sizcache=bl;bg.sizset=bj}if(bg.nodeName.toLowerCase()===bm){bk=bg;
break}bg=bg[bh]}bp[bj]=bk}}}function be(bh,bm,bl,bp,bn,bo){for(var bj=0,bi=bp.length;
bj<bi;bj++){var bg=bp[bj];if(bg){bg=bg[bh];var bk=false;while(bg){if(bg.sizcache===bl){bk=bp[bg.sizset];
break}if(bg.nodeType===1){if(!bo){bg.sizcache=bl;bg.sizset=bj}if(typeof bm!=="string"){if(bg===bm){bk=true;
break}}else{if(a0.filter(bm,[bg]).length>0){bk=bg;break}}}bg=bg[bh]}bp[bj]=bk}}}var a7=ab.compareDocumentPosition?function(bh,bg){return !!(bh.compareDocumentPosition(bg)&16)
}:function(bh,bg){return bh!==bg&&(bh.contains?bh.contains(bg):true)};var a1=function(bg){var bh=(bg?bg.ownerDocument||bg:0).documentElement;
return bh?bh.nodeName!=="HTML":false};var bd=function(bg,bn){var bj=[],bk="",bl,bi=bn.nodeType?[bn]:bn;
while((bl=a6.match.PSEUDO.exec(bg))){bk+=bl[0];bg=bg.replace(a6.match.PSEUDO,"")}bg=a6.relative[bg]?bg+"*":bg;
for(var bm=0,bh=bi.length;bm<bh;bm++){a0(bg,bi[bm],bj)}return a0.filter(bk,bj)};a.find=a0;
a.expr=a0.selectors;a.expr[":"]=a.expr.filters;a.unique=a0.uniqueSort;a.text=aZ;a.isXMLDoc=a1;
a.contains=a7;return;aM.Sizzle=a0})();var N=/Until$/,Y=/^(?:parents|prevUntil|prevAll)/,aL=/,/,F=Array.prototype.slice;
var ai=function(a1,a0,aY){if(a.isFunction(a0)){return a.grep(a1,function(a3,a2){return !!a0.call(a3,a2,a3)===aY
})}else{if(a0.nodeType){return a.grep(a1,function(a3,a2){return(a3===a0)===aY})}else{if(typeof a0==="string"){var aZ=a.grep(a1,function(a2){return a2.nodeType===1
});if(aW.test(a0)){return a.filter(a0,aZ,!aY)}else{a0=a.filter(a0,aZ)}}}}return a.grep(a1,function(a3,a2){return(a.inArray(a3,a0)>=0)===aY
})};a.fn.extend({find:function(aY){var a0=this.pushStack("","find",aY),a3=0;for(var a1=0,aZ=this.length;
a1<aZ;a1++){a3=a0.length;a.find(aY,this[a1],a0);if(a1>0){for(var a4=a3;a4<a0.length;
a4++){for(var a2=0;a2<a3;a2++){if(a0[a2]===a0[a4]){a0.splice(a4--,1);break}}}}}return a0
},has:function(aZ){var aY=a(aZ);return this.filter(function(){for(var a1=0,a0=aY.length;
a1<a0;a1++){if(a.contains(this,aY[a1])){return true}}})},not:function(aY){return this.pushStack(ai(this,aY,false),"not",aY)
},filter:function(aY){return this.pushStack(ai(this,aY,true),"filter",aY)},is:function(aY){return !!aY&&a.filter(aY,this).length>0
},closest:function(a7,aY){if(a.isArray(a7)){var a4=[],a6=this[0],a3,a2={},a0;if(a6&&a7.length){for(var a1=0,aZ=a7.length;
a1<aZ;a1++){a0=a7[a1];if(!a2[a0]){a2[a0]=a.expr.match.POS.test(a0)?a(a0,aY||this.context):a0
}}while(a6&&a6.ownerDocument&&a6!==aY){for(a0 in a2){a3=a2[a0];if(a3.jquery?a3.index(a6)>-1:a(a6).is(a3)){a4.push({selector:a0,elem:a6});
delete a2[a0]}}a6=a6.parentNode}}return a4}var a5=a.expr.match.POS.test(a7)?a(a7,aY||this.context):null;
return this.map(function(a8,a9){while(a9&&a9.ownerDocument&&a9!==aY){if(a5?a5.index(a9)>-1:a(a9).is(a7)){return a9
}a9=a9.parentNode}return null})},index:function(aY){if(!aY||typeof aY==="string"){return a.inArray(this[0],aY?a(aY):this.parent().children())
}return a.inArray(aY.jquery?aY[0]:aY,this)},add:function(aY,aZ){var a1=typeof aY==="string"?a(aY,aZ||this.context):a.makeArray(aY),a0=a.merge(this.get(),a1);
return this.pushStack(y(a1[0])||y(a0[0])?a0:a.unique(a0))},andSelf:function(){return this.add(this.prevObject)
}});function y(aY){return !aY||!aY.parentNode||aY.parentNode.nodeType===11}a.each({parent:function(aZ){var aY=aZ.parentNode;
return aY&&aY.nodeType!==11?aY:null},parents:function(aY){return a.dir(aY,"parentNode")
},parentsUntil:function(aZ,aY,a0){return a.dir(aZ,"parentNode",a0)},next:function(aY){return a.nth(aY,2,"nextSibling")
},prev:function(aY){return a.nth(aY,2,"previousSibling")},nextAll:function(aY){return a.dir(aY,"nextSibling")
},prevAll:function(aY){return a.dir(aY,"previousSibling")},nextUntil:function(aZ,aY,a0){return a.dir(aZ,"nextSibling",a0)
},prevUntil:function(aZ,aY,a0){return a.dir(aZ,"previousSibling",a0)},siblings:function(aY){return a.sibling(aY.parentNode.firstChild,aY)
},children:function(aY){return a.sibling(aY.firstChild)},contents:function(aY){return a.nodeName(aY,"iframe")?aY.contentDocument||aY.contentWindow.document:a.makeArray(aY.childNodes)
}},function(aY,aZ){a.fn[aY]=function(a2,a0){var a1=a.map(this,aZ,a2);if(!N.test(aY)){a0=a2
}if(a0&&typeof a0==="string"){a1=a.filter(a0,a1)}a1=this.length>1?a.unique(a1):a1;
if((this.length>1||aL.test(a0))&&Y.test(aY)){a1=a1.reverse()}return this.pushStack(a1,aY,F.call(arguments).join(","))
}});a.extend({filter:function(a0,aY,aZ){if(aZ){a0=":not("+a0+")"}return a.find.matches(a0,aY)
},dir:function(a0,aZ,a2){var aY=[],a1=a0[aZ];while(a1&&a1.nodeType!==9&&(a2===C||a1.nodeType!==1||!a(a1).is(a2))){if(a1.nodeType===1){aY.push(a1)
}a1=a1[aZ]}return aY},nth:function(a2,aY,a0,a1){aY=aY||1;var aZ=0;for(;a2;a2=a2[a0]){if(a2.nodeType===1&&++aZ===aY){break
}}return a2},sibling:function(a0,aZ){var aY=[];for(;a0;a0=a0.nextSibling){if(a0.nodeType===1&&a0!==aZ){aY.push(a0)
}}return aY}});var T=/ jQuery\d+="(?:\d+|null)"/g,Z=/^\s+/,H=/(<([\w:]+)[^>]*?)\/>/g,al=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,c=/<([\w:]+)/,t=/<tbody/i,L=/<|&#?\w+;/,E=/<script|<object|<embed|<option|<style/i,l=/checked\s*(?:[^=]|=\s*.checked.)/i,p=function(aZ,a0,aY){return al.test(aY)?aZ:a0+"></"+aY+">"
},ac={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};
ac.optgroup=ac.option;ac.tbody=ac.tfoot=ac.colgroup=ac.caption=ac.thead;ac.th=ac.td;
if(!a.support.htmlSerialize){ac._default=[1,"div<div>","</div>"]}a.fn.extend({text:function(aY){if(a.isFunction(aY)){return this.each(function(a0){var aZ=a(this);
aZ.text(aY.call(this,a0,aZ.text()))})}if(typeof aY!=="object"&&aY!==C){return this.empty().append((this[0]&&this[0].ownerDocument||ab).createTextNode(aY))
}return a.text(this)},wrapAll:function(aY){if(a.isFunction(aY)){return this.each(function(a0){a(this).wrapAll(aY.call(this,a0))
})}if(this[0]){var aZ=a(aY,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){aZ.insertBefore(this[0])
}aZ.map(function(){var a0=this;while(a0.firstChild&&a0.firstChild.nodeType===1){a0=a0.firstChild
}return a0}).append(this)}return this},wrapInner:function(aY){if(a.isFunction(aY)){return this.each(function(aZ){a(this).wrapInner(aY.call(this,aZ))
})}return this.each(function(){var aZ=a(this),a0=aZ.contents();if(a0.length){a0.wrapAll(aY)
}else{aZ.append(aY)}})},wrap:function(aY){return this.each(function(){a(this).wrapAll(aY)
})},unwrap:function(){return this.parent().each(function(){if(!a.nodeName(this,"body")){a(this).replaceWith(this.childNodes)
}}).end()},append:function(){return this.domManip(arguments,true,function(aY){if(this.nodeType===1){this.appendChild(aY)
}})},prepend:function(){return this.domManip(arguments,true,function(aY){if(this.nodeType===1){this.insertBefore(aY,this.firstChild)
}})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(aZ){this.parentNode.insertBefore(aZ,this)
})}else{if(arguments.length){var aY=a(arguments[0]);aY.push.apply(aY,this.toArray());
return this.pushStack(aY,"before",arguments)}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(aZ){this.parentNode.insertBefore(aZ,this.nextSibling)
})}else{if(arguments.length){var aY=this.pushStack(this,"after",arguments);aY.push.apply(aY,a(arguments[0]).toArray());
return aY}}},remove:function(aY,a1){for(var aZ=0,a0;(a0=this[aZ])!=null;aZ++){if(!aY||a.filter(aY,[a0]).length){if(!a1&&a0.nodeType===1){a.cleanData(a0.getElementsByTagName("*"));
a.cleanData([a0])}if(a0.parentNode){a0.parentNode.removeChild(a0)}}}return this},empty:function(){for(var aY=0,aZ;
(aZ=this[aY])!=null;aY++){if(aZ.nodeType===1){a.cleanData(aZ.getElementsByTagName("*"))
}while(aZ.firstChild){aZ.removeChild(aZ.firstChild)}}return this},clone:function(aZ){var aY=this.map(function(){if(!a.support.noCloneEvent&&!a.isXMLDoc(this)){var a1=this.outerHTML,a0=this.ownerDocument;
if(!a1){var a2=a0.createElement("div");a2.appendChild(this.cloneNode(true));a1=a2.innerHTML
}return a.clean([a1.replace(T,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(Z,"")],a0)[0]
}else{return this.cloneNode(true)}});if(aZ===true){q(this,aY);q(this.find("*"),aY.find("*"))
}return aY},html:function(a0){if(a0===C){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(T,""):null
}else{if(typeof a0==="string"&&!E.test(a0)&&(a.support.leadingWhitespace||!Z.test(a0))&&!ac[(c.exec(a0)||["",""])[1].toLowerCase()]){a0=a0.replace(H,p);
try{for(var aZ=0,aY=this.length;aZ<aY;aZ++){if(this[aZ].nodeType===1){a.cleanData(this[aZ].getElementsByTagName("*"));
this[aZ].innerHTML=a0}}}catch(a1){this.empty().append(a0)}}else{if(a.isFunction(a0)){this.each(function(a4){var a3=a(this),a2=a3.html();
a3.empty().append(function(){return a0.call(this,a4,a2)})})}else{this.empty().append(a0)
}}}return this},replaceWith:function(aY){if(this[0]&&this[0].parentNode){if(a.isFunction(aY)){return this.each(function(a1){var a0=a(this),aZ=a0.html();
a0.replaceWith(aY.call(this,a1,aZ))})}if(typeof aY!=="string"){aY=a(aY).detach()}return this.each(function(){var a0=this.nextSibling,aZ=this.parentNode;
a(this).remove();if(a0){a(a0).before(aY)}else{a(aZ).append(aY)}})}else{return this.pushStack(a(a.isFunction(aY)?aY():aY),"replaceWith",aY)
}},detach:function(aY){return this.remove(aY,true)},domManip:function(a4,a9,a8){var a1,a2,a7=a4[0],aZ=[],a3,a6;
if(!a.support.checkClone&&arguments.length===3&&typeof a7==="string"&&l.test(a7)){return this.each(function(){a(this).domManip(a4,a9,a8,true)
})}if(a.isFunction(a7)){return this.each(function(bb){var ba=a(this);a4[0]=a7.call(this,bb,a9?ba.html():C);
ba.domManip(a4,a9,a8)})}if(this[0]){a6=a7&&a7.parentNode;if(a.support.parentNode&&a6&&a6.nodeType===11&&a6.childNodes.length===this.length){a1={fragment:a6}
}else{a1=J(a4,this,aZ)}a3=a1.fragment;if(a3.childNodes.length===1){a2=a3=a3.firstChild
}else{a2=a3.firstChild}if(a2){a9=a9&&a.nodeName(a2,"tr");for(var a0=0,aY=this.length;
a0<aY;a0++){a8.call(a9?a5(this[a0],a2):this[a0],a0>0||a1.cacheable||this.length>1?a3.cloneNode(true):a3)
}}if(aZ.length){a.each(aZ,aV)}}return this;function a5(ba,bb){return a.nodeName(ba,"table")?(ba.getElementsByTagName("tbody")[0]||ba.appendChild(ba.ownerDocument.createElement("tbody"))):ba
}}});function q(a0,aY){var aZ=0;aY.each(function(){if(this.nodeName!==(a0[aZ]&&a0[aZ].nodeName)){return
}var a5=a.data(a0[aZ++]),a4=a.data(this,a5),a1=a5&&a5.events;if(a1){delete a4.handle;
a4.events={};for(var a3 in a1){for(var a2 in a1[a3]){a.event.add(this,a3,a1[a3][a2],a1[a3][a2].data)
}}}})}function J(a3,a1,aZ){var a2,aY,a0,a4=(a1&&a1[0]?a1[0].ownerDocument||a1[0]:ab);
if(a3.length===1&&typeof a3[0]==="string"&&a3[0].length<512&&a4===ab&&!E.test(a3[0])&&(a.support.checkClone||!l.test(a3[0]))){aY=true;
a0=a.fragments[a3[0]];if(a0){if(a0!==1){a2=a0}}}if(!a2){a2=a4.createDocumentFragment();
a.clean(a3,a4,a2,aZ)}if(aY){a.fragments[a3[0]]=a0?a2:1}return{fragment:a2,cacheable:aY}
}a.fragments={};a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(aY,aZ){a.fn[aY]=function(a0){var a3=[],a6=a(a0),a5=this.length===1&&this[0].parentNode;
if(a5&&a5.nodeType===11&&a5.childNodes.length===1&&a6.length===1){a6[aZ](this[0]);
return this}else{for(var a4=0,a1=a6.length;a4<a1;a4++){var a2=(a4>0?this.clone(true):this).get();
a.fn[aZ].apply(a(a6[a4]),a2);a3=a3.concat(a2)}return this.pushStack(a3,aY,a6.selector)
}}});a.extend({clean:function(a0,a2,a9,a4){a2=a2||ab;if(typeof a2.createElement==="undefined"){a2=a2.ownerDocument||a2[0]&&a2[0].ownerDocument||ab
}var ba=[];for(var a8=0,a3;(a3=a0[a8])!=null;a8++){if(typeof a3==="number"){a3+=""
}if(!a3){continue}if(typeof a3==="string"&&!L.test(a3)){a3=a2.createTextNode(a3)}else{if(typeof a3==="string"){a3=a3.replace(H,p);
var bb=(c.exec(a3)||["",""])[1].toLowerCase(),a1=ac[bb]||ac._default,a7=a1[0],aZ=a2.createElement("div");
aZ.innerHTML=a1[1]+a3+a1[2];while(a7--){aZ=aZ.lastChild}if(!a.support.tbody){var aY=t.test(a3),a6=bb==="table"&&!aY?aZ.firstChild&&aZ.firstChild.childNodes:a1[1]==="<table>"&&!aY?aZ.childNodes:[];
for(var a5=a6.length-1;a5>=0;--a5){if(a.nodeName(a6[a5],"tbody")&&!a6[a5].childNodes.length){a6[a5].parentNode.removeChild(a6[a5])
}}}if(!a.support.leadingWhitespace&&Z.test(a3)){aZ.insertBefore(a2.createTextNode(Z.exec(a3)[0]),aZ.firstChild)
}a3=aZ.childNodes}}if(a3.nodeType){ba.push(a3)}else{ba=a.merge(ba,a3)}}if(a9){for(var a8=0;
ba[a8];a8++){if(a4&&a.nodeName(ba[a8],"script")&&(!ba[a8].type||ba[a8].type.toLowerCase()==="text/javascript")){a4.push(ba[a8].parentNode?ba[a8].parentNode.removeChild(ba[a8]):ba[a8])
}else{if(ba[a8].nodeType===1){ba.splice.apply(ba,[a8+1,0].concat(a.makeArray(ba[a8].getElementsByTagName("script"))))
}a9.appendChild(ba[a8])}}}return ba},cleanData:function(aZ){var a2,a0,aY=a.cache,a5=a.event.special,a4=a.support.deleteExpando;
for(var a3=0,a1;(a1=aZ[a3])!=null;a3++){a0=a1[a.expando];if(a0){a2=aY[a0];if(a2.events){for(var a6 in a2.events){if(a5[a6]){a.event.remove(a1,a6)
}else{ag(a1,a6,a2.handle)}}}if(a4){delete a1[a.expando]}else{if(a1.removeAttribute){a1.removeAttribute(a.expando)
}}delete aY[a0]}}}});var ar=/z-?index|font-?weight|opacity|zoom|line-?height/i,U=/alpha\([^)]*\)/,aa=/opacity=([^)]*)/,ah=/float/i,az=/-([a-z])/ig,v=/([A-Z])/g,aO=/^-?\d+(?:px)?$/i,aU=/^-?\d/,aK={position:"absolute",visibility:"hidden",display:"block"},W=["Left","Right"],aE=["Top","Bottom"],ak=ab.defaultView&&ab.defaultView.getComputedStyle,aN=a.support.cssFloat?"cssFloat":"styleFloat",k=function(aY,aZ){return aZ.toUpperCase()
};a.fn.css=function(aY,aZ){return an(this,aY,aZ,true,function(a1,a0,a2){if(a2===C){return a.curCSS(a1,a0)
}if(typeof a2==="number"&&!ar.test(a0)){a2+="px"}a.style(a1,a0,a2)})};a.extend({style:function(a2,aZ,a3){if(!a2||a2.nodeType===3||a2.nodeType===8){return C
}if((aZ==="width"||aZ==="height")&&parseFloat(a3)<0){a3=C}var a1=a2.style||a2,a4=a3!==C;
if(!a.support.opacity&&aZ==="opacity"){if(a4){a1.zoom=1;var aY=parseInt(a3,10)+""==="NaN"?"":"alpha(opacity="+a3*100+")";
var a0=a1.filter||a.curCSS(a2,"filter")||"";a1.filter=U.test(a0)?a0.replace(U,aY):aY
}return a1.filter&&a1.filter.indexOf("opacity=")>=0?(parseFloat(aa.exec(a1.filter)[1])/100)+"":""
}if(ah.test(aZ)){aZ=aN}aZ=aZ.replace(az,k);if(a4){a1[aZ]=a3}return a1[aZ]},css:function(a1,aZ,a3,aY){if(aZ==="width"||aZ==="height"){var a5,a0=aK,a4=aZ==="width"?W:aE;
function a2(){a5=aZ==="width"?a1.offsetWidth:a1.offsetHeight;if(aY==="border"){return
}a.each(a4,function(){if(!aY){a5-=parseFloat(a.curCSS(a1,"padding"+this,true))||0
}if(aY==="margin"){a5+=parseFloat(a.curCSS(a1,"margin"+this,true))||0}else{a5-=parseFloat(a.curCSS(a1,"border"+this+"Width",true))||0
}})}if(a1.offsetWidth!==0){a2()}else{a.swap(a1,a0,a2)}return Math.max(0,Math.round(a5))
}return a.curCSS(a1,aZ,a3)},curCSS:function(a4,aZ,a0){var a7,aY=a4.style,a1;if(!a.support.opacity&&aZ==="opacity"&&a4.currentStyle){a7=aa.test(a4.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";
return a7===""?"1":a7}if(ah.test(aZ)){aZ=aN}if(!a0&&aY&&aY[aZ]){a7=aY[aZ]}else{if(ak){if(ah.test(aZ)){aZ="float"
}aZ=aZ.replace(v,"-$1").toLowerCase();var a6=a4.ownerDocument.defaultView;if(!a6){return null
}var a8=a6.getComputedStyle(a4,null);if(a8){a7=a8.getPropertyValue(aZ)}if(aZ==="opacity"&&a7===""){a7="1"
}}else{if(a4.currentStyle){var a3=aZ.replace(az,k);a7=a4.currentStyle[aZ]||a4.currentStyle[a3];
if(!aO.test(a7)&&aU.test(a7)){var a2=aY.left,a5=a4.runtimeStyle.left;a4.runtimeStyle.left=a4.currentStyle.left;
aY.left=a3==="fontSize"?"1em":(a7||0);a7=aY.pixelLeft+"px";aY.left=a2;a4.runtimeStyle.left=a5
}}}}return a7},swap:function(a1,a0,a2){var aY={};for(var aZ in a0){aY[aZ]=a1.style[aZ];
a1.style[aZ]=a0[aZ]}a2.call(a1);for(var aZ in a0){a1.style[aZ]=aY[aZ]}}});if(a.expr&&a.expr.filters){a.expr.filters.hidden=function(a1){var aZ=a1.offsetWidth,aY=a1.offsetHeight,a0=a1.nodeName.toLowerCase()==="tr";
return aZ===0&&aY===0&&!a0?true:aZ>0&&aY>0&&!a0?false:a.curCSS(a1,"display")==="none"
};a.expr.filters.visible=function(aY){return !a.expr.filters.hidden(aY)}}var af=aP(),aJ=/<script(.|\s)*?\/script>/gi,o=/select|textarea/i,aB=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,r=/=\?(&|$)/,D=/\?/,aX=/(\?|&)_=.*?(&|$)/,B=/^(\w+:)?\/\/([^\/?#]+)/,h=/%20/g,w=a.fn.load;
a.fn.extend({load:function(a0,a3,a4){if(typeof a0!=="string"){return w.call(this,a0)
}else{if(!this.length){return this}}var a2=a0.indexOf(" ");if(a2>=0){var aY=a0.slice(a2,a0.length);
a0=a0.slice(0,a2)}var a1="GET";if(a3){if(a.isFunction(a3)){a4=a3;a3=null}else{if(typeof a3==="object"){a3=a.param(a3,a.ajaxSettings.traditional);
a1="POST"}}}var aZ=this;a.ajax({url:a0,type:a1,dataType:"html",data:a3,complete:function(a6,a5){if(a5==="success"||a5==="notmodified"){aZ.html(aY?a("<div />").append(a6.responseText.replace(aJ,"")).find(aY):a6.responseText)
}if(a4){aZ.each(a4,[a6.responseText,a5,a6])}}});return this},serialize:function(){return a.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?a.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||o.test(this.nodeName)||aB.test(this.type))
}).map(function(aY,aZ){var a0=a(this).val();return a0==null?null:a.isArray(a0)?a.map(a0,function(a2,a1){return{name:aZ.name,value:a2}
}):{name:aZ.name,value:a0}}).get()}});a.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(aY,aZ){a.fn[aZ]=function(a0){return this.bind(aZ,a0)
}});a.extend({get:function(aY,a0,a1,aZ){if(a.isFunction(a0)){aZ=aZ||a1;a1=a0;a0=null
}return a.ajax({type:"GET",url:aY,data:a0,success:a1,dataType:aZ})},getScript:function(aY,aZ){return a.get(aY,null,aZ,"script")
},getJSON:function(aY,aZ,a0){return a.get(aY,aZ,a0,"json")},post:function(aY,a0,a1,aZ){if(a.isFunction(a0)){aZ=aZ||a1;
a1=a0;a0={}}return a.ajax({type:"POST",url:aY,data:a0,success:a1,dataType:aZ})},ajaxSetup:function(aY){a.extend(a.ajaxSettings,aY)
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:aM.XMLHttpRequest&&(aM.location.protocol!=="file:"||!aM.ActiveXObject)?function(){return new aM.XMLHttpRequest()
}:function(){try{return new aM.ActiveXObject("Microsoft.XMLHTTP")}catch(aY){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(bd){var a8=a.extend(true,{},a.ajaxSettings,bd);
var bi,bc,bh,bj=bd&&bd.context||a8,a0=a8.type.toUpperCase();if(a8.data&&a8.processData&&typeof a8.data!=="string"){a8.data=a.param(a8.data,a8.traditional)
}if(a8.dataType==="jsonp"){if(a0==="GET"){if(!r.test(a8.url)){a8.url+=(D.test(a8.url)?"&":"?")+(a8.jsonp||"callback")+"=?"
}}else{if(!a8.data||!r.test(a8.data)){a8.data=(a8.data?a8.data+"&":"")+(a8.jsonp||"callback")+"=?"
}}a8.dataType="json"}if(a8.dataType==="json"&&(a8.data&&r.test(a8.data)||r.test(a8.url))){bi=a8.jsonpCallback||("jsonp"+af++);
if(a8.data){a8.data=(a8.data+"").replace(r,"="+bi+"$1")}a8.url=a8.url.replace(r,"="+bi+"$1");
a8.dataType="script";aM[bi]=aM[bi]||function(bk){bh=bk;a3();a6();aM[bi]=C;try{delete aM[bi]
}catch(bl){}if(a1){a1.removeChild(bf)}}}if(a8.dataType==="script"&&a8.cache===null){a8.cache=false
}if(a8.cache===false&&a0==="GET"){var aY=aP();var bg=a8.url.replace(aX,"$1_="+aY+"$2");
a8.url=bg+((bg===a8.url)?(D.test(a8.url)?"&":"?")+"_="+aY:"")}if(a8.data&&a0==="GET"){a8.url+=(D.test(a8.url)?"&":"?")+a8.data
}if(a8.global&&!a.active++){a.event.trigger("ajaxStart")}var bb=B.exec(a8.url),a2=bb&&(bb[1]&&bb[1]!==location.protocol||bb[2]!==location.host);
if(a8.dataType==="script"&&a0==="GET"&&a2){var a1=ab.getElementsByTagName("head")[0]||ab.documentElement;
var bf=ab.createElement("script");bf.src=a8.url;if(a8.scriptCharset){bf.charset=a8.scriptCharset
}if(!bi){var ba=false;bf.onload=bf.onreadystatechange=function(){if(!ba&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){ba=true;
a3();a6();bf.onload=bf.onreadystatechange=null;if(a1&&bf.parentNode){a1.removeChild(bf)
}}}}a1.insertBefore(bf,a1.firstChild);return C}var a5=false;var a4=a8.xhr();if(!a4){return
}if(a8.username){a4.open(a0,a8.url,a8.async,a8.username,a8.password)}else{a4.open(a0,a8.url,a8.async)
}try{if(a8.data||bd&&bd.contentType){a4.setRequestHeader("Content-Type",a8.contentType)
}if(a8.ifModified){if(a.lastModified[a8.url]){a4.setRequestHeader("If-Modified-Since",a.lastModified[a8.url])
}if(a.etag[a8.url]){a4.setRequestHeader("If-None-Match",a.etag[a8.url])}}if(!a2){a4.setRequestHeader("X-Requested-With","XMLHttpRequest")
}a4.setRequestHeader("Accept",a8.dataType&&a8.accepts[a8.dataType]?a8.accepts[a8.dataType]+", */*":a8.accepts._default)
}catch(be){}if(a8.beforeSend&&a8.beforeSend.call(bj,a4,a8)===false){if(a8.global&&!--a.active){a.event.trigger("ajaxStop")
}a4.abort();return false}if(a8.global){a9("ajaxSend",[a4,a8])}var a7=a4.onreadystatechange=function(bk){if(!a4||a4.readyState===0||bk==="abort"){if(!a5){a6()
}a5=true;if(a4){a4.onreadystatechange=a.noop}}else{if(!a5&&a4&&(a4.readyState===4||bk==="timeout")){a5=true;
a4.onreadystatechange=a.noop;bc=bk==="timeout"?"timeout":!a.httpSuccess(a4)?"error":a8.ifModified&&a.httpNotModified(a4,a8.url)?"notmodified":"success";
var bm;if(bc==="success"){try{bh=a.httpData(a4,a8.dataType,a8)}catch(bl){bc="parsererror";
bm=bl}}if(bc==="success"||bc==="notmodified"){if(!bi){a3()}}else{a.handleError(a8,a4,bc,bm)
}a6();if(bk==="timeout"){a4.abort()}if(a8.async){a4=null}}}};try{var aZ=a4.abort;
a4.abort=function(){if(a4){aZ.call(a4)}a7("abort")}}catch(be){}if(a8.async&&a8.timeout>0){setTimeout(function(){if(a4&&!a5){a7("timeout")
}},a8.timeout)}try{a4.send(a0==="POST"||a0==="PUT"||a0==="DELETE"?a8.data:null)}catch(be){a.handleError(a8,a4,null,be);
a6()}if(!a8.async){a7()}function a3(){if(a8.success){a8.success.call(bj,bh,bc,a4)
}if(a8.global){a9("ajaxSuccess",[a4,a8])}}function a6(){if(a8.complete){a8.complete.call(bj,a4,bc)
}if(a8.global){a9("ajaxComplete",[a4,a8])}if(a8.global&&!--a.active){a.event.trigger("ajaxStop")
}}function a9(bl,bk){(a8.context?a(a8.context):a.event).trigger(bl,bk)}return a4},handleError:function(aZ,a1,aY,a0){if(aZ.error){aZ.error.call(aZ.context||aZ,a1,aY,a0)
}if(aZ.global){(aZ.context?a(aZ.context):a.event).trigger("ajaxError",[a1,aZ,a0])
}},active:0,httpSuccess:function(aZ){try{return !aZ.status&&location.protocol==="file:"||(aZ.status>=200&&aZ.status<300)||aZ.status===304||aZ.status===1223||aZ.status===0
}catch(aY){}return false},httpNotModified:function(a1,aY){var a0=a1.getResponseHeader("Last-Modified"),aZ=a1.getResponseHeader("Etag");
if(a0){a.lastModified[aY]=a0}if(aZ){a.etag[aY]=aZ}return a1.status===304||a1.status===0
},httpData:function(a3,a1,a0){var aZ=a3.getResponseHeader("content-type")||"",aY=a1==="xml"||!a1&&aZ.indexOf("xml")>=0,a2=aY?a3.responseXML:a3.responseText;
if(aY&&a2.documentElement.nodeName==="parsererror"){a.error("parsererror")}if(a0&&a0.dataFilter){a2=a0.dataFilter(a2,a1)
}if(typeof a2==="string"){if(a1==="json"||!a1&&aZ.indexOf("json")>=0){a2=a.parseJSON(a2)
}else{if(a1==="script"||!a1&&aZ.indexOf("javascript")>=0){a.globalEval(a2)}}}return a2
},param:function(aY,a1){var aZ=[];if(a1===C){a1=a.ajaxSettings.traditional}if(a.isArray(aY)||aY.jquery){a.each(aY,function(){a3(this.name,this.value)
})}else{for(var a2 in aY){a0(a2,aY[a2])}}return aZ.join("&").replace(h,"+");function a0(a4,a5){if(a.isArray(a5)){a.each(a5,function(a7,a6){if(a1||/\[\]$/.test(a4)){a3(a4,a6)
}else{a0(a4+"["+(typeof a6==="object"||a.isArray(a6)?a7:"")+"]",a6)}})}else{if(!a1&&a5!=null&&typeof a5==="object"){a.each(a5,function(a7,a6){a0(a4+"["+a7+"]",a6)
})}else{a3(a4,a5)}}}function a3(a4,a5){a5=a.isFunction(a5)?a5():a5;aZ[aZ.length]=encodeURIComponent(a4)+"="+encodeURIComponent(a5)
}}});var G={},ae=/toggle|show|hide/,au=/^([+-]=)?([\d+-.]+)(.*)$/,aF,aj=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
a.fn.extend({show:function(aZ,a7){if(aZ||aZ===0){return this.animate(aD("show",3),aZ,a7)
}else{for(var a4=0,a1=this.length;a4<a1;a4++){var aY=a.data(this[a4],"olddisplay");
this[a4].style.display=aY||"";if(a.css(this[a4],"display")==="none"){var a6=this[a4].nodeName,a5;
if(G[a6]){a5=G[a6]}else{var a0=a("<"+a6+" />").appendTo("body");a5=a0.css("display");
if(a5==="none"){a5="block"}a0.remove();G[a6]=a5}a.data(this[a4],"olddisplay",a5)}}for(var a3=0,a2=this.length;
a3<a2;a3++){this[a3].style.display=a.data(this[a3],"olddisplay")||""}return this}},hide:function(a3,a4){if(a3||a3===0){return this.animate(aD("hide",3),a3,a4)
}else{for(var a2=0,aZ=this.length;a2<aZ;a2++){var aY=a.data(this[a2],"olddisplay");
if(!aY&&aY!=="none"){a.data(this[a2],"olddisplay",a.css(this[a2],"display"))}}for(var a1=0,a0=this.length;
a1<a0;a1++){this[a1].style.display="none"}return this}},_toggle:a.fn.toggle,toggle:function(a0,aZ){var aY=typeof a0==="boolean";
if(a.isFunction(a0)&&a.isFunction(aZ)){this._toggle.apply(this,arguments)}else{if(a0==null||aY){this.each(function(){var a1=aY?a0:a(this).is(":hidden");
a(this)[a1?"show":"hide"]()})}else{this.animate(aD("toggle",3),a0,aZ)}}return this
},fadeTo:function(aY,a0,aZ){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:a0},aY,aZ)
},animate:function(a2,aZ,a1,a0){var aY=a.speed(aZ,a1,a0);if(a.isEmptyObject(a2)){return this.each(aY.complete)
}return this[aY.queue===false?"each":"queue"](function(){var a5=a.extend({},aY),a7,a6=this.nodeType===1&&a(this).is(":hidden"),a3=this;
for(a7 in a2){var a4=a7.replace(az,k);if(a7!==a4){a2[a4]=a2[a7];delete a2[a7];a7=a4
}if(a2[a7]==="hide"&&a6||a2[a7]==="show"&&!a6){return a5.complete.call(this)}if((a7==="height"||a7==="width")&&this.style){a5.display=a.css(this,"display");
a5.overflow=this.style.overflow}if(a.isArray(a2[a7])){(a5.specialEasing=a5.specialEasing||{})[a7]=a2[a7][1];
a2[a7]=a2[a7][0]}}if(a5.overflow!=null){this.style.overflow="hidden"}a5.curAnim=a.extend({},a2);
a.each(a2,function(a9,bd){var bc=new a.fx(a3,a5,a9);if(ae.test(bd)){bc[bd==="toggle"?a6?"show":"hide":bd](a2)
}else{var bb=au.exec(bd),be=bc.cur(true)||0;if(bb){var a8=parseFloat(bb[2]),ba=bb[3]||"px";
if(ba!=="px"){a3.style[a9]=(a8||1)+ba;be=((a8||1)/bc.cur(true))*be;a3.style[a9]=be+ba
}if(bb[1]){a8=((bb[1]==="-="?-1:1)*a8)+be}bc.custom(be,a8,ba)}else{bc.custom(be,bd,"")
}}});return true})},stop:function(aZ,aY){var a0=a.timers;if(aZ){this.queue([])}this.each(function(){for(var a1=a0.length-1;
a1>=0;a1--){if(a0[a1].elem===this){if(aY){a0[a1](true)}a0.splice(a1,1)}}});if(!aY){this.dequeue()
}return this}});a.each({slideDown:aD("show",1),slideUp:aD("hide",1),slideToggle:aD("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(aY,aZ){a.fn[aY]=function(a0,a1){return this.animate(aZ,a0,a1)
}});a.extend({speed:function(a0,a1,aZ){var aY=a0&&typeof a0==="object"?a0:{complete:aZ||!aZ&&a1||a.isFunction(a0)&&a0,duration:a0,easing:aZ&&a1||a1&&!a.isFunction(a1)&&a1};
aY.duration=a.fx.off?0:typeof aY.duration==="number"?aY.duration:a.fx.speeds[aY.duration]||a.fx.speeds._default;
aY.old=aY.complete;aY.complete=function(){if(aY.queue!==false){a(this).dequeue()}if(a.isFunction(aY.old)){aY.old.call(this)
}};return aY},easing:{linear:function(a0,a1,aY,aZ){return aY+aZ*a0},swing:function(a0,a1,aY,aZ){return((-Math.cos(a0*Math.PI)/2)+0.5)*aZ+aY
}},timers:[],fx:function(aZ,aY,a0){this.options=aY;this.elem=aZ;this.prop=a0;if(!aY.orig){aY.orig={}
}}});a.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(a.fx.step[this.prop]||a.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style){this.elem.style.display="block"
}},cur:function(aZ){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var aY=parseFloat(a.css(this.elem,this.prop,aZ));return aY&&aY>-10000?aY:parseFloat(a.curCSS(this.elem,this.prop))||0
},custom:function(a2,a1,a0){this.startTime=aP();this.start=a2;this.end=a1;this.unit=a0||this.unit||"px";
this.now=this.start;this.pos=this.state=0;var aY=this;function aZ(a3){return aY.step(a3)
}aZ.elem=this.elem;if(aZ()&&a.timers.push(aZ)&&!aF){aF=setInterval(a.fx.tick,13)}},show:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);
this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
a(this.elem).show()},hide:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);
this.options.hide=true;this.custom(this.cur(),0)},step:function(a1){var a6=aP(),a2=true;
if(a1||a6>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;
this.update();this.options.curAnim[this.prop]=true;for(var a3 in this.options.curAnim){if(this.options.curAnim[a3]!==true){a2=false
}}if(a2){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;
var a0=a.data(this.elem,"olddisplay");this.elem.style.display=a0?a0:this.options.display;
if(a.css(this.elem,"display")==="none"){this.elem.style.display="block"}}if(this.options.hide){a(this.elem).hide()
}if(this.options.hide||this.options.show){for(var aY in this.options.curAnim){a.style(this.elem,aY,this.options.orig[aY])
}}this.options.complete.call(this.elem)}return false}else{var aZ=a6-this.startTime;
this.state=aZ/this.options.duration;var a4=this.options.specialEasing&&this.options.specialEasing[this.prop];
var a5=this.options.easing||(a.easing.swing?"swing":"linear");this.pos=a.easing[a4||a5](this.state,aZ,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};
a.extend(a.fx,{tick:function(){var aZ=a.timers;for(var aY=0;aY<aZ.length;aY++){if(!aZ[aY]()){aZ.splice(aY--,1)
}}if(!aZ.length){a.fx.stop()}},stop:function(){clearInterval(aF);aF=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(aY){a.style(aY.elem,"opacity",aY.now)
},_default:function(aY){if(aY.elem.style&&aY.elem.style[aY.prop]!=null){aY.elem.style[aY.prop]=(aY.prop==="width"||aY.prop==="height"?Math.max(0,aY.now):aY.now)+aY.unit
}else{aY.elem[aY.prop]=aY.now}}}});if(a.expr&&a.expr.filters){a.expr.filters.animated=function(aY){return a.grep(a.timers,function(aZ){return aY===aZ.elem
}).length}}function aD(aZ,aY){var a0={};a.each(aj.concat.apply([],aj.slice(0,aY)),function(){a0[this]=aZ
});return a0}if("getBoundingClientRect" in ab.documentElement){a.fn.offset=function(a7){var a0=this[0];
if(a7){return this.each(function(a8){a.offset.setOffset(this,a7,a8)})}if(!a0||!a0.ownerDocument){return null
}if(a0===a0.ownerDocument.body){return a.offset.bodyOffset(a0)}var a2=a0.getBoundingClientRect(),a6=a0.ownerDocument,a3=a6.body,aY=a6.documentElement,a1=aY.clientTop||a3.clientTop||0,a4=aY.clientLeft||a3.clientLeft||0,a5=a2.top+(self.pageYOffset||a.support.boxModel&&aY.scrollTop||a3.scrollTop)-a1,aZ=a2.left+(self.pageXOffset||a.support.boxModel&&aY.scrollLeft||a3.scrollLeft)-a4;
return{top:a5,left:aZ}}}else{a.fn.offset=function(a9){var a3=this[0];if(a9){return this.each(function(ba){a.offset.setOffset(this,a9,ba)
})}if(!a3||!a3.ownerDocument){return null}if(a3===a3.ownerDocument.body){return a.offset.bodyOffset(a3)
}a.offset.initialize();var a0=a3.offsetParent,aZ=a3,a8=a3.ownerDocument,a6,a1=a8.documentElement,a4=a8.body,a5=a8.defaultView,aY=a5?a5.getComputedStyle(a3,null):a3.currentStyle,a7=a3.offsetTop,a2=a3.offsetLeft;
while((a3=a3.parentNode)&&a3!==a4&&a3!==a1){if(a.offset.supportsFixedPosition&&aY.position==="fixed"){break
}a6=a5?a5.getComputedStyle(a3,null):a3.currentStyle;a7-=a3.scrollTop;a2-=a3.scrollLeft;
if(a3===a0){a7+=a3.offsetTop;a2+=a3.offsetLeft;if(a.offset.doesNotAddBorder&&!(a.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(a3.nodeName))){a7+=parseFloat(a6.borderTopWidth)||0;
a2+=parseFloat(a6.borderLeftWidth)||0}aZ=a0,a0=a3.offsetParent}if(a.offset.subtractsBorderForOverflowNotVisible&&a6.overflow!=="visible"){a7+=parseFloat(a6.borderTopWidth)||0;
a2+=parseFloat(a6.borderLeftWidth)||0}aY=a6}if(aY.position==="relative"||aY.position==="static"){a7+=a4.offsetTop;
a2+=a4.offsetLeft}if(a.offset.supportsFixedPosition&&aY.position==="fixed"){a7+=Math.max(a1.scrollTop,a4.scrollTop);
a2+=Math.max(a1.scrollLeft,a4.scrollLeft)}return{top:a7,left:a2}}}a.offset={initialize:function(){var aY=ab.body,aZ=ab.createElement("div"),a2,a4,a3,a5,a0=parseFloat(a.curCSS(aY,"marginTop",true))||0,a1="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.extend(aZ.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});
aZ.innerHTML=a1;aY.insertBefore(aZ,aY.firstChild);a2=aZ.firstChild;a4=a2.firstChild;
a5=a2.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(a4.offsetTop!==5);
this.doesAddBorderForTableAndCells=(a5.offsetTop===5);a4.style.position="fixed",a4.style.top="20px";
this.supportsFixedPosition=(a4.offsetTop===20||a4.offsetTop===15);a4.style.position=a4.style.top="";
a2.style.overflow="hidden",a2.style.position="relative";this.subtractsBorderForOverflowNotVisible=(a4.offsetTop===-5);
this.doesNotIncludeMarginInBodyOffset=(aY.offsetTop!==a0);aY.removeChild(aZ);aY=aZ=a2=a4=a3=a5=null;
a.offset.initialize=a.noop},bodyOffset:function(aY){var a0=aY.offsetTop,aZ=aY.offsetLeft;
a.offset.initialize();if(a.offset.doesNotIncludeMarginInBodyOffset){a0+=parseFloat(a.curCSS(aY,"marginTop",true))||0;
aZ+=parseFloat(a.curCSS(aY,"marginLeft",true))||0}return{top:a0,left:aZ}},setOffset:function(a3,aZ,a0){if(/slick\/static/.test(a.curCSS(a3,"position"))){a3.style.position="relative"
}var a2=a(a3),a5=a2.offset(),aY=parseInt(a.curCSS(a3,"top",true),10)||0,a4=parseInt(a.curCSS(a3,"left",true),10)||0;
if(a.isFunction(aZ)){aZ=aZ.call(a3,a0,a5)}var a1={top:(aZ.top-a5.top)+aY,left:(aZ.left-a5.left)+a4};
if("using" in aZ){aZ.using.call(a3,a1)}else{a2.css(a1)}}};a.fn.extend({position:function(){if(!this[0]){return null
}var a0=this[0],aZ=this.offsetParent(),a1=this.offset(),aY=/^body|html$/i.test(aZ[0].nodeName)?{top:0,left:0}:aZ.offset();
a1.top-=parseFloat(a.curCSS(a0,"marginTop",true))||0;a1.left-=parseFloat(a.curCSS(a0,"marginLeft",true))||0;
aY.top+=parseFloat(a.curCSS(aZ[0],"borderTopWidth",true))||0;aY.left+=parseFloat(a.curCSS(aZ[0],"borderLeftWidth",true))||0;
return{top:a1.top-aY.top,left:a1.left-aY.left}},offsetParent:function(){return this.map(function(){var aY=this.offsetParent||ab.body;
while(aY&&(!/^body|html$/i.test(aY.nodeName)&&a.css(aY,"position")==="static")){aY=aY.offsetParent
}return aY})}});a.each(["Left","Top"],function(aZ,aY){var a0="scroll"+aY;a.fn[a0]=function(a3){var a1=this[0],a2;
if(!a1){return null}if(a3!==C){return this.each(function(){a2=am(this);if(a2){a2.scrollTo(!aZ?a3:a(a2).scrollLeft(),aZ?a3:a(a2).scrollTop())
}else{this[a0]=a3}})}else{a2=am(a1);return a2?("pageXOffset" in a2)?a2[aZ?"pageYOffset":"pageXOffset"]:a.support.boxModel&&a2.document.documentElement[a0]||a2.document.body[a0]:a1[a0]
}}});function am(aY){return("scrollTo" in aY&&aY.document)?aY:aY.nodeType===9?aY.defaultView||aY.parentWindow:false
}a.each(["Height","Width"],function(aZ,aY){var a0=aY.toLowerCase();a.fn["inner"+aY]=function(){return this[0]?a.css(this[0],a0,false,"padding"):null
};a.fn["outer"+aY]=function(a1){return this[0]?a.css(this[0],a0,false,a1?"margin":"border"):null
};a.fn[a0]=function(a1){var a2=this[0];if(!a2){return a1==null?null:this}if(a.isFunction(a1)){return this.each(function(a4){var a3=a(this);
a3[a0](a1.call(this,a4,a3[a0]()))})}return("scrollTo" in a2&&a2.document)?a2.document.compatMode==="CSS1Compat"&&a2.document.documentElement["client"+aY]||a2.document.body["client"+aY]:(a2.nodeType===9)?Math.max(a2.documentElement["client"+aY],a2.body["scroll"+aY],a2.documentElement["scroll"+aY],a2.body["offset"+aY],a2.documentElement["offset"+aY]):a1===C?a.css(a2,a0):this.css(a0,typeof a1==="string"?a1:a1+"px")
}});aM.jQuery=aM.$=a})(window);if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/jquery");
/* @license
==========================================================================
SproutCore Costello -- Property Observing Library
Copyright ©2006-2009, Sprout Systems, Inc. and contributors.
Portions copyright ©2008-2009 Apple Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a 
copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.

For more information about SproutCore, visit http://www.sproutcore.com

==========================================================================
@license */
}var require=require||function require(){};
var sc_require=sc_require||require;var sc_resource=sc_resource||function sc_resource(){};
sc_require("license");var YES=true;var NO=false;if(typeof console==="undefined"){window.console={};
console.log=console.info=console.warn=console.error=function(){}}var SC=SC||{};var SproutCore=SproutCore||SC;
SC._baseMixin=function(c){var f=Array.prototype.slice.call(arguments,1),a,e=f[0]||{},g=1,d=f.length,i,b,h;
if(d===1){e=this||{};g=0}for(;g<d;g++){if(!(i=f[g])){continue}for(h in i){if(!i.hasOwnProperty(h)){continue
}b=i[h];if(e===b){continue}if(b!==undefined&&(c||(e[h]===undefined))){e[h]=b}}}return e
};SC.mixin=function(){var a=Array.prototype.slice.call(arguments);a.unshift(true);
return SC._baseMixin.apply(this,a)};SC.supplement=function(){var a=Array.prototype.slice.call(arguments);
a.unshift(false);return SC._baseMixin.apply(this,a)};SC.extend=SC.mixin;SC.mixin({T_ERROR:"error",T_OBJECT:"object",T_NULL:"null",T_CLASS:"class",T_HASH:"hash",T_FUNCTION:"function",T_UNDEFINED:"undefined",T_NUMBER:"number",T_BOOL:"boolean",T_ARRAY:"array",T_STRING:"string",typeOf:function(b){if(b===undefined){return SC.T_UNDEFINED
}if(b===null){return SC.T_NULL}var a=typeof(b);if(a=="object"){if(b instanceof Array){a=SC.T_ARRAY
}else{if(b instanceof Function){a=b.isClass?SC.T_CLASS:SC.T_FUNCTION}else{if(SC.Error&&(b instanceof SC.Error)){a=SC.T_ERROR
}else{if(b.isObject===true){a=SC.T_OBJECT}else{a=SC.T_HASH}}}}}else{if(a===SC.T_FUNCTION){a=(b.isClass)?SC.T_CLASS:SC.T_FUNCTION
}}return a},none:function(a){return a===null||a===undefined},empty:function(a){return a===null||a===undefined||a===""
},isArray:function(c){if(c&&c.objectAt){return YES}var a=(c?c.length:null),b=SC.typeOf(c);
return !(SC.none(a)||(b===SC.T_FUNCTION)||(b===SC.T_STRING)||c.setInterval)},makeArray:function(a){return SC.isArray(a)?a:SC.A(a)
},A:function(c){if(SC.none(c)){return[]}if(c.slice instanceof Function){if(typeof(c)==="string"){return[c]
}else{return c.slice()}}if(c.toArray){return c.toArray()}if(!SC.isArray(c)){return[c]
}var b=[],a=c.length;while(--a>=0){b[a]=c[a]}return b},guidKey:"_sc_guid_"+new Date().getTime(),_nextGUID:0,_numberGuids:[],_stringGuids:{},_keyCache:{},guidFor:function(b){if(b===undefined){return"(undefined)"
}if(b===null){return"(null)"}if(b===Object){return"(Object)"}if(b===Array){return"(Array)"
}var a=this.guidKey;if(b[a]){return b[a]}switch(typeof b){case SC.T_NUMBER:return(this._numberGuids[b]=this._numberGuids[b]||("nu"+b));
case SC.T_STRING:return(this._stringGuids[b]=this._stringGuids[b]||("st"+b));case SC.T_BOOL:return(b)?"(true)":"(false)";
default:return SC.generateGuid(b)}},keyFor:function(d,c){var b,a=this._keyCache[d];
if(!a){a=this._keyCache[d]={}}b=a[c];if(!b){b=a[c]=d+"_"+c}return b},generateGuid:function(b){var a=("sc"+(this._nextGUID++));
if(b){b[this.guidKey]=a}return a},hashFor:function(a){return(a&&a.hash&&(typeof a.hash===SC.T_FUNCTION))?a.hash():this.guidFor(a)
},isEqual:function(d,c){if(d===null){return c===null}else{if(d===undefined){return c===undefined
}else{return this.hashFor(d)===this.hashFor(c)}}},compare:function(s,p){if(s===p){return 0
}var j=SC.typeOf(s);var g=SC.typeOf(p);var b=SC.ORDER_DEFINITION_MAPPING;if(!b){var d=SC.ORDER_DEFINITION;
b=SC.ORDER_DEFINITION_MAPPING={};var q,n;for(q=0,n=d.length;q<n;++q){b[d[q]]=q}delete SC.ORDER_DEFINITION
}var t=b[j];var c=b[g];if(t<c){return -1}if(t>c){return 1}switch(j){case SC.T_BOOL:case SC.T_NUMBER:if(s<p){return -1
}if(s>p){return 1}return 0;case SC.T_STRING:var k=s.localeCompare(p);if(k<0){return -1
}if(k>0){return 1}return 0;case SC.T_ARRAY:var o=s.length;var m=p.length;var e=Math.min(o,m);
var a=0;var h=0;var f=arguments.callee;while(a===0&&h<e){a=f(s[h],p[h]);h++}if(a!==0){return a
}if(o<m){return -1}if(o>m){return 1}return 0;case SC.T_OBJECT:if(s.constructor.isComparable===YES){return s.constructor.compare(s,p)
}return 0;default:return 0}},K:function(){return this},EMPTY_ARRAY:[],EMPTY_HASH:{},EMPTY_RANGE:{start:0,length:0},beget:function(c){if(SC.none(c)){return null
}var a=SC.K;a.prototype=c;var b=new a();a.prototype=null;if(SC.typeOf(c.didBeget)===SC.T_FUNCTION){b=c.didBeget(b)
}return b},copy:function(b){var a=b;if(b&&b.isCopyable){return b.copy()}switch(SC.typeOf(b)){case SC.T_ARRAY:if(b.clone&&SC.typeOf(b.clone)===SC.T_FUNCTION){a=b.clone()
}else{a=b.slice()}break;case SC.T_HASH:case SC.T_OBJECT:if(b.clone&&SC.typeOf(b.clone)===SC.T_FUNCTION){a=b.clone()
}else{a={};for(var c in b){a[c]=b[c]}}}return a},merge:function(){var c={},b=arguments.length,a;
for(a=0;a<b;a++){SC.mixin(c,arguments[a])}return c},keys:function(c){var a=[];for(var b in c){a.push(b)
}return a},inspect:function(d){var a,b=[];for(var c in d){a=d[c];if(a==="toString"){continue
}if(SC.typeOf(a)===SC.T_FUNCTION){a="function() { ... }"}b.push(c+": "+a)}return"{"+b.join(" , ")+"}"
},tupleForPropertyPath:function(e,a){if(SC.typeOf(e)===SC.T_ARRAY){return e}var c;
var b=e.indexOf("*");if(b<0){b=e.lastIndexOf(".")}c=(b>=0)?e.slice(b+1):e;var d=this.objectForPropertyPath(e,a,b);
return(d&&c)?[d,c]:null},objectForPropertyPath:function(f,c,d){var g,b,e,a;if(!c){c=window
}if(SC.typeOf(f)===SC.T_STRING){if(d===undefined){d=f.length}g=0;while((c)&&(g<d)){b=f.indexOf(".",g);
if((b<0)||(b>d)){b=d}e=f.slice(g,b);c=c.get?c.get(e):c[e];g=b+1}if(g<d){c=undefined
}}else{g=0;a=f.length;e=null;while((g<a)&&c){e=f[g++];if(e){c=(c.get)?c.get(e):c[e]
}}if(g<a){c=undefined}}return c},STRINGS:{},stringsFor:function(b,a){SC.mixin(SC.STRINGS,a);
return this}});SC.clone=SC.copy;SC.$A=SC.A;SC.didLoad=SC.K;SC.ORDER_DEFINITION=[SC.T_ERROR,SC.T_UNDEFINED,SC.T_NULL,SC.T_BOOL,SC.T_NUMBER,SC.T_STRING,SC.T_ARRAY,SC.T_HASH,SC.T_OBJECT,SC.T_FUNCTION,SC.T_CLASS];
SC.mixin(Function.prototype,{property:function(){this.dependentKeys=SC.$A(arguments);
var a=SC.guidFor(this);this.cacheKey="__cache__"+a;this.lastSetValueKey="__lastValue__"+a;
this.isProperty=YES;return this},cacheable:function(a){this.isProperty=YES;if(!this.dependentKeys){this.dependentKeys=[]
}this.isCacheable=(a===undefined)?YES:a;return this},idempotent:function(a){this.isProperty=YES;
if(!this.dependentKeys){this.dependentKeys=[]}this.isVolatile=(a===undefined)?YES:a;
return this},observes:function(a){var e=arguments.length,b=null,d=null;while(--e>=0){var c=arguments[e];
if((c.indexOf(".")<0)&&(c.indexOf("*")<0)){if(!b){b=this.localPropertyPaths=[]}b.push(c)
}else{if(!d){d=this.propertyPaths=[]}d.push(c)}}return this}});String.prototype.fmt=function(){var b=arguments,a=0;
return this.replace(/%@([0-9]+)?/g,function(c,d){d=(d)?parseInt(d,0)-1:a++;c=b[d];
return((c===null)?"(null)":(c===undefined)?"":c).toString()})};String.prototype.loc=function(){var a=SC.STRINGS[this]||this;
return a.fmt.apply(a,arguments)};String.prototype.w=function(){var c=[],d=this.split(" "),b=d.length,e,a=0;
for(a=0;a<b;++a){e=d[a];if(e.length!==0){c.push(e)}}return c};if(!Date.now){Date.now=function(){return new Date().getTime()
}}SC.ObserverSet={targets:0,_membersCacheIsValid:NO,add:function(d,f,b){var c=(d)?SC.guidFor(d):"__this__";
var a=this[c];if(!a){a=this[c]=SC.CoreSet.create();a.target=d;a.isTargetSet=YES;this.targets++
}a.add(f);if(b!==undefined){var e=a.contexts;if(!e){e=a.contexts={}}e[SC.guidFor(f)]=b
}this._membersCacheIsValid=NO},remove:function(c,d){var b=(c)?SC.guidFor(c):"__this__";
var a=this[b];if(!a){return NO}a.remove(d);if(a.length<=0){a.target=null;a.isTargetSet=NO;
a.contexts=null;delete this[b];this.targets--}else{if(a.contexts){delete a.contexts[SC.guidFor(d)]
}}this._membersCacheIsValid=NO;return YES},invokeMethods:function(){var b,c,a,d,e;
for(b in this){if(!this.hasOwnProperty(b)){continue}c=this[b];if(c&&c.isTargetSet){a=c.length;
d=c.target;while(--a>=0){e=c[a];if(e){e.call(d)}}}}},getMembers:function(){if(this._membersCacheIsValid){return this._members
}if(!this._members){this._members=[]}else{this._members.length=0}var b=this._members;
for(var c in this){if(!this.hasOwnProperty(c)){continue}var d=this[c];if(d&&d.isTargetSet){var a=d.length;
var e=d.target;var g=d.contexts;if(g){while(--a>=0){var f=d[a];b.push([e,f,g[SC.guidFor(f)]])
}}else{while(--a>=0){b.push([e,d[a]])}}}}this._membersCacheIsValid=YES;return b},clone:function(){var b,d,c,a=SC.ObserverSet.create();
for(c in this){if(!this.hasOwnProperty(c)){continue}b=this[c];if(b&&b.isTargetSet){d=b.clone();
d.target=b.target;if(b.contexts){d.contexts=SC.clone(b.contexts)}a[c]=d}}a.targets=this.targets;
a._membersCacheIsValid=NO;return a},create:function(){return SC.beget(this)}};SC.ObserverSet.slice=SC.ObserverSet.clone;
require("private/observer_set");SC.LOG_OBSERVERS=NO;SC.Observable={isObservable:YES,automaticallyNotifiesObserversFor:function(a){return YES
},get:function(c){var b=this[c],a;if(b===undefined){return this.unknownProperty(c)
}else{if(b&&b.isProperty){if(b.isCacheable){a=this._kvo_cache;if(!a){a=this._kvo_cache={}
}return(a[b.cacheKey]!==undefined)?a[b.cacheKey]:(a[b.cacheKey]=b.call(this,c))}else{return b.call(this,c)
}}else{return b}}},set:function(h,f){var b=this[h],i=this.automaticallyNotifiesObserversFor(h),e=f,c,a,g,d;
if(!i&&this._kvo_cacheable&&(a=this._kvo_cache)){c=this._kvo_cachedep;if(!c||(c=c[h])===undefined){c=this._kvo_computeCachedDependentsFor(h)
}if(c){g=c.length;while(--g>=0){d=c[g];a[d.cacheKey]=a[d.lastSetValueKey]=undefined
}}}if(b&&b.isProperty){a=this._kvo_cache;if(b.isVolatile||!a||(a[b.lastSetValueKey]!==f)){if(!a){a=this._kvo_cache={}
}a[b.lastSetValueKey]=f;if(i){this.propertyWillChange(h)}e=b.call(this,h,f);if(b.isCacheable){a[b.cacheKey]=e
}if(i){this.propertyDidChange(h,e,YES)}}}else{if(b===undefined){if(i){this.propertyWillChange(h)
}this.unknownProperty(h,f);if(i){this.propertyDidChange(h,e)}}else{if(this[h]!==f){if(i){this.propertyWillChange(h)
}e=this[h]=f;if(i){this.propertyDidChange(h,e)}}}}return this},unknownProperty:function(a,b){if(!(b===undefined)){this[a]=b
}return b},beginPropertyChanges:function(){this._kvo_changeLevel=(this._kvo_changeLevel||0)+1;
return this},endPropertyChanges:function(){this._kvo_changeLevel=(this._kvo_changeLevel||1)-1;
var b=this._kvo_changeLevel,a=this._kvo_changes;if((b<=0)&&a&&(a.length>0)&&!SC.Observers.isObservingSuspended){this._notifyPropertyObservers()
}return this},propertyWillChange:function(a){return this},propertyDidChange:function(l,j,c){this._kvo_revision=(this._kvo_revision||0)+1;
var b=this._kvo_changeLevel||0,g,k,h,a,d,f=SC.LOG_OBSERVERS&&!(this.LOG_OBSERVING===NO);
if(a=this._kvo_cache){if(!c){d=this[l];if(d&&d.isProperty){a[d.cacheKey]=a[d.lastSetValueKey]=undefined
}}if(this._kvo_cacheable){g=this._kvo_cachedep;if(!g||(g=g[l])===undefined){g=this._kvo_computeCachedDependentsFor(l)
}if(g){k=g.length;while(--k>=0){h=g[k];a[h.cacheKey]=a[h.lastSetValueKey]=undefined
}}}}var e=SC.Observers.isObservingSuspended;if((b>0)||e){var i=this._kvo_changes;
if(!i){i=this._kvo_changes=SC.CoreSet.create()}i.add(l);if(e){if(f){console.log("%@%@: will not notify observers because observing is suspended".fmt(SC.KVO_SPACES,this))
}SC.Observers.objectHasPendingChanges(this)}}else{this._notifyPropertyObservers(l)
}return this},registerDependentKey:function(h,c){var e=this._kvo_dependents,b=this[h],i,g,a,f,d;
if(SC.typeOf(c)===SC.T_ARRAY){i=c;a=0}else{i=arguments;a=1}g=i.length;if(!e){this._kvo_dependents=e={}
}while(--g>=a){f=i[g];d=e[f];if(!d){d=e[f]=[]}d.push(h)}},_kvo_addCachedDependents:function(b,f,h,c){var a=f.length,e,d,g;
while(--a>=0){d=f[a];c.add(d);e=this[d];if(e&&(e instanceof Function)&&e.isProperty){if(e.isCacheable){b.push(e)
}if((g=h[d])&&g.length>0){this._kvo_addCachedDependents(b,g,h,c)}}}},_kvo_computeCachedDependentsFor:function(c){var d=this._kvo_cachedep,f=this._kvo_dependents,e=f?f[c]:null,a,b;
if(!d){d=this._kvo_cachedep={}}if(!e||e.length===0){return d[c]=null}a=d[c]=[];b=SC._TMP_SEEN_SET=(SC._TMP_SEEN_SET||SC.CoreSet.create());
b.add(c);this._kvo_addCachedDependents(a,e,f,b);b.clear();if(a.length===0){a=d[c]=null
}return a},_kvo_for:function(c,b){var a=this[c];if(!this._kvo_cloned){this._kvo_cloned={}
}if(!a){a=this[c]=(b===undefined)?[]:b.create();this._kvo_cloned[c]=YES}else{if(!this._kvo_cloned[c]){a=this[c]=a.copy();
this._kvo_cloned[c]=YES}}return a},addObserver:function(c,f,h,b){var d,a,e,g;if(h===undefined){h=f;
f=this}if(!f){f=this}if(SC.typeOf(h)===SC.T_STRING){h=f[h]}if(!h){throw"You must pass a method to addObserver()"
}c=c.toString();if(c.indexOf(".")>=0){a=SC._ChainObserver.createChain(this,c,f,h,b);
a.masterTarget=f;a.masterMethod=h;this._kvo_for(SC.keyFor("_kvo_chains",c)).push(a)
}else{if((this[c]===undefined)&&(c.indexOf("@")===0)){this.get(c)}if(f===this){f=null
}d=SC.keyFor("_kvo_observers",c);this._kvo_for(d,SC.ObserverSet).add(f,h,b);this._kvo_for("_kvo_observed_keys",SC.CoreSet).add(c)
}if(this.didAddObserver){this.didAddObserver(c,f,h)}return this},removeObserver:function(c,f,h){var d,e,b,g,a;
if(h===undefined){h=f;f=this}if(!f){f=this}if(SC.typeOf(h)===SC.T_STRING){h=f[h]}if(!h){throw"You must pass a method to removeObserver()"
}c=c.toString();if(c.indexOf(".")>=0){d=SC.keyFor("_kvo_chains",c);if(e=this[d]){e=this._kvo_for(d);
a=e.length;while(--a>=0){b=e[a];if(b&&(b.masterTarget===f)&&(b.masterMethod===h)){e[a]=b.destroyChain()
}}}}else{if(f===this){f=null}d=SC.keyFor("_kvo_observers",c);if(g=this[d]){g=this._kvo_for(d);
g.remove(f,h);if(g.targets<=0){this._kvo_for("_kvo_observed_keys",SC.CoreSet).remove(c)
}}}if(this.didRemoveObserver){this.didRemoveObserver(c,f,h)}return this},hasObserverFor:function(b){SC.Observers.flush(this);
var d=this[SC.keyFor("_kvo_observers",b)],c=this[SC.keyFor("_kvo_local",b)],a;if(c&&c.length>0){return YES
}if(d&&d.getMembers().length>0){return YES}return NO},initObservable:function(){if(this._observableInited){return
}this._observableInited=YES;var f,m,k,j,h,e,l,g,c,n,b,i,d,a;if(m=this._observers){g=m.length;
for(f=0;f<g;f++){k=m[f];h=this[k];e=h.propertyPaths;l=(e)?e.length:0;for(c=0;c<l;
c++){n=e[c];b=n.indexOf(".");if(b<0){this.addObserver(n,this,h)}else{if(n.indexOf("*")===0){this.addObserver(n.slice(1),this,h)
}else{i=null;if(b===0){i=this;n=n.slice(1)}else{if(b===4&&n.slice(0,5)==="this."){i=this;
n=n.slice(5)}else{if(b<0&&n.length===4&&n==="this"){i=this;n=""}}}SC.Observers.addObserver(n,this,h,i)
}}}}}this.bindings=[];if(m=this._bindings){for(f=0,a=m.length;f<a;f++){k=m[f];j=this[k];
d=k.slice(0,-7);this[k]=this.bind(d,j)}}if(m=this._properties){for(f=0,a=m.length;
f<a;f++){k=m[f];if(j=this[k]){if(j.isCacheable){this._kvo_cacheable=YES}if(j.dependentKeys&&(j.dependentKeys.length>0)){this.registerDependentKey(k,j.dependentKeys)
}}}}},observersForKey:function(a){var b=this._kvo_for("_kvo_observers",a);return b.getMembers()||[]
},_notifyPropertyObservers:function(t){if(!this._observableInited){this.initObservable()
}SC.Observers.flush(this);var g=SC.LOG_OBSERVERS&&!(this.LOG_OBSERVING===NO),o,r,m,d,n,l,q,p,j,a,f,s,c,i,e,b,h,k;
if(g){h=SC.KVO_SPACES=(SC.KVO_SPACES||"")+"  ";console.log('%@%@: notifying observers after change to key "%@"'.fmt(h,this,t))
}d=this["_kvo_observers_*"];this._kvo_changeLevel=(this._kvo_changeLevel||0)+1;while(((r=this._kvo_changes)&&(r.length>0))||t){q=++this.propertyRevision;
if(!r){r=SC.CoreSet.create()}this._kvo_changes=null;if(t==="*"){r.add("*");r.addEach(this._kvo_for("_kvo_observed_keys",SC.CoreSet))
}else{if(t){r.add(t)}}if(m=this._kvo_dependents){for(n=0;n<r.length;n++){t=r[n];l=m[t];
if(l&&(i=l.length)){if(g){console.log("%@...including dependent keys for %@: %@".fmt(h,t,l))
}k=this._kvo_cache;if(!k){k=this._kvo_cache={}}while(--i>=0){r.add(t=l[i]);if(e=this[t]){this[e.cacheKey]=undefined;
k[e.cacheKey]=k[e.lastSetValueKey]=undefined}}}}}while(r.length>0){t=r.pop();o=this[SC.keyFor("_kvo_observers",t)];
if(o){p=o.getMembers();j=p.length;for(f=0;f<j;f++){a=p[f];if(a[3]===q){continue}s=a[0]||this;
c=a[1];b=a[2];a[3]=q;if(g){console.log('%@...firing observer on %@ for key "%@"'.fmt(h,s,t))
}if(b!==undefined){c.call(s,this,t,null,b,q)}else{c.call(s,this,t,null,q)}}}p=this[SC.keyFor("_kvo_local",t)];
if(p){j=p.length;for(f=0;f<j;f++){a=p[f];c=this[a];if(c){if(g){console.log('%@...firing local observer %@.%@ for key "%@"'.fmt(h,this,a,t))
}c.call(this,this,t,null,q)}}}if(d&&t!=="*"){p=d.getMembers();j=p.length;for(f=0;
f<j;f++){a=p[f];s=a[0]||this;c=a[1];b=a[2];if(g){console.log('%@...firing * observer on %@ for key "%@"'.fmt(h,s,t))
}if(b!==undefined){c.call(s,this,t,null,b,q)}else{c.call(s,this,t,null,q)}}}if(this.propertyObserver){if(g){console.log('%@...firing %@.propertyObserver for key "%@"'.fmt(h,this,t))
}this.propertyObserver(this,t,null,q)}}if(r){r.destroy()}t=null}this._kvo_changeLevel=(this._kvo_changeLevel||1)-1;
if(g){SC.KVO_SPACES=h.slice(0,-2)}return YES},bind:function(a,c,e){var d,b;if(e!==undefined){c=[c,e]
}b=SC.typeOf(c);if(b===SC.T_STRING||b===SC.T_ARRAY){d=this[a+"BindingDefault"]||SC.Binding;
d=d.beget().from(c)}else{d=c}d=d.to(a,this).connect();this.bindings.push(d);return d
},didChangeFor:function(a){var b,f,e,j,d,c,h,i,g;a=SC.hashFor(a);b=this._kvo_didChange_valueCache;
if(!b){b=this._kvo_didChange_valueCache={}}f=this._kvo_didChange_revisionCache;if(!f){f=this._kvo_didChange_revisionCache={}
}e=b[a]||{};j=f[a]||{};d=false;c=this._kvo_revision||0;h=arguments.length;while(--h>=1){i=arguments[h];
if(j[i]!=c){g=this.get(i);if(e[i]!==g){d=true;e[i]=g}}j[i]=c}b[a]=e;f[a]=j;return d
},setIfChanged:function(a,b){return(this.get(a)!==b)?this.set(a,b):this},getPath:function(b){var a=SC.tupleForPropertyPath(b,this);
if(a===null||a[0]===null){return undefined}return a[0].get(a[1])},setPath:function(c,b){if(c.indexOf(".")>=0){var a=SC.tupleForPropertyPath(c,this);
if(!a||!a[0]){return null}a[0].set(a[1],b)}else{this.set(c,b)}return this},setPathIfChanged:function(c,b){if(c.indexOf(".")>=0){var a=SC.tupleForPropertyPath(c,this);
if(!a||!a[0]){return null}if(a[0].get(a[1])!==b){a[0].set(a[1],b)}}else{this.setIfChanged(c,b)
}return this},getEach:function(){var d=SC.A(arguments),c=[],a,b;for(a=0,b=d.length;
a<b;a++){c[c.length]=this.getPath(d[a])}return c},incrementProperty:function(b,a){if(!a){a=1
}this.set(b,(this.get(b)||0)+a);return this.get(b)},decrementProperty:function(b,a){if(!a){a=1
}this.set(b,(this.get(b)||0)-a);return this.get(b)},toggleProperty:function(a,b,c){if(b===undefined){b=true
}if(c===undefined){c=false}b=(this.get(a)==b)?c:b;this.set(a,b);return this.get(a)
},notifyPropertyChange:function(a,b){this.propertyWillChange(a);this.propertyDidChange(a,b);
return this},allPropertiesDidChange:function(){this._kvo_cache=null;this._notifyPropertyObservers("*");
return this},addProbe:function(a){this.addObserver(a,SC.logChange)},removeProbe:function(a){this.removeObserver(a,SC.logChange)
},logProperty:function(){var b=SC.$A(arguments),d,c,a;for(a=0,c=b.length;a<c;a++){d=b[a];
console.log("%@:%@: ".fmt(SC.guidFor(this),d),this.get(d))}},propertyRevision:1};
SC.logChange=function logChange(c,a,b){console.log("CHANGE: %@[%@] =>".fmt(c,a),c.get(a))
};SC.mixin(SC,{get:function(a,b){if(!a){return undefined}if(b===undefined){return this[a]
}if(a.get){return a.get(b)}return a[b]}});SC.mixin(Array.prototype,SC.Observable);
SC.Enumerator=function(a){this.enumerable=a;this.reset();return this};SC.Enumerator.prototype={nextObject:function(){var c=this._index;
var a=this._length;if(c>=a){return undefined}var b=this.enumerable.nextObject(c,this._previousObject,this._context);
this._previousObject=b;this._index=c+1;if(c>=a){this._context=SC.Enumerator._pushContext(this._context)
}return b},reset:function(){var b=this.enumerable;if(!b){throw SC.$error("Enumerator has been destroyed")
}this._length=b.get?b.get("length"):b.length;var a=this._length;this._index=0;this._previousObject=null;
this._context=(a>0)?SC.Enumerator._popContext():null},destroy:function(){this.enumerable=this._length=this._index=this._previousObject=this._context=null
}};SC.Enumerator.create=function(a){return new SC.Enumerator(a)};SC.Enumerator._popContext=function(){var a=this._contextCache?this._contextCache.pop():null;
return a||{}};SC.Enumerator._pushContext=function(b){this._contextCache=this._contextCache||[];
var a=this._contextCache;a.push(b);return null};require("core");require("system/enumerator");
SC.Enumerable={isEnumerable:YES,nextObject:function(a,c,b){return this.objectAt?this.objectAt(a):this[a]
},firstObject:function(){if(this.get("length")===0){return undefined}if(this.objectAt){return this.objectAt(0)
}var b=SC.Enumerator._popContext(),a;a=this.nextObject(0,null,b);b=SC.Enumerator._pushContext(b);
return a}.property(),lastObject:function(){var a=this.get("length");if(a===0){return undefined
}if(this.objectAt){return this.objectAt(a-1)}}.property(),enumerator:function(){return SC.Enumerator.create(this)
},forEach:function(g,f){if(typeof g!=="function"){throw new TypeError()}var b=this.get?this.get("length"):this.length;
if(f===undefined){f=null}var e=null;var c=SC.Enumerator._popContext();for(var a=0;
a<b;a++){var d=this.nextObject(a,e,c);g.call(f,d,a,this);e=d}e=null;c=SC.Enumerator._pushContext(c);
return this},getEach:function(a){return this.map(function(b){return b?(b.get?b.get(a):b[a]):null
},this)},setEach:function(a,b){this.forEach(function(c){if(c){if(c.set){c.set(a,b)
}else{c[a]=b}}},this);return this},map:function(h,g){if(typeof h!=="function"){throw new TypeError()
}var b=this.get?this.get("length"):this.length;if(g===undefined){g=null}var c=[];
var f=null;var d=SC.Enumerator._popContext();for(var a=0;a<b;a++){var e=this.nextObject(a,f,d);
c[a]=h.call(g,e,a,this);f=e}f=null;d=SC.Enumerator._pushContext(d);return c},mapProperty:function(a){return this.map(function(b){return b?(b.get?b.get(a):b[a]):null
})},filter:function(h,g){if(typeof h!=="function"){throw new TypeError()}var b=this.get?this.get("length"):this.length;
if(g===undefined){g=null}var c=[];var f=null;var d=SC.Enumerator._popContext();for(var a=0;
a<b;a++){var e=this.nextObject(a,f,d);if(h.call(g,e,a,this)){c.push(e)}f=e}f=null;
d=SC.Enumerator._pushContext(d);return c},sortProperty:function(b){var c=(typeof b===SC.T_STRING)?arguments:b,a=c.length,d;
if(this instanceof Array){d=this}else{d=[];this.forEach(function(e){d.push(e)})}if(!d){return[]
}return d.sort(function(g,f){var e,i,k,j,h=0;for(e=0;h===0&&e<a;e++){i=c[e];k=g?(g.get?g.get(i):g[i]):null;
j=f?(f.get?f.get(i):f[i]):null;h=SC.compare(k,j)}return h})},filterProperty:function(j,f){var d=this.get?this.get("length"):this.length;
var e=[];var i=null;var b=SC.Enumerator._popContext();for(var g=0;g<d;g++){var c=this.nextObject(g,i,b);
var h=c?(c.get?c.get(j):c[j]):null;var a=(f===undefined)?!!h:SC.isEqual(h,f);if(a){e.push(c)
}i=c}i=null;b=SC.Enumerator._pushContext(b);return e},find:function(h,d){var c=this.get?this.get("length"):this.length;
if(d===undefined){d=null}var g=null,b,i=NO,e=null;var a=SC.Enumerator._popContext();
for(var f=0;f<c&&!i;f++){b=this.nextObject(f,g,a);if(i=h.call(d,b,f,this)){e=b}g=b
}b=g=null;a=SC.Enumerator._pushContext(a);return e},findProperty:function(i,f){var c=this.get?this.get("length"):this.length;
var j=NO,d=null,h=null,b,g;var a=SC.Enumerator._popContext();for(var e=0;e<c&&!j;
e++){b=this.nextObject(e,h,a);g=b?(b.get?b.get(i):b[i]):null;j=(f===undefined)?!!g:SC.isEqual(g,f);
if(j){d=b}h=b}h=b=null;a=SC.Enumerator._pushContext(a);return d},every:function(h,g){if(typeof h!=="function"){throw new TypeError()
}var b=this.get?this.get("length"):this.length;if(g===undefined){g=null}var c=YES;
var f=null;var d=SC.Enumerator._popContext();for(var a=0;c&&(a<b);a++){var e=this.nextObject(a,f,d);
if(!h.call(g,e,a,this)){c=NO}f=e}f=null;d=SC.Enumerator._pushContext(d);return c},everyProperty:function(i,e){var c=this.get?this.get("length"):this.length;
var d=YES;var h=null;var a=SC.Enumerator._popContext();for(var f=0;d&&(f<c);f++){var b=this.nextObject(f,h,a);
var g=b?(b.get?b.get(i):b[i]):null;d=(e===undefined)?!!g:SC.isEqual(g,e);h=b}h=null;
a=SC.Enumerator._pushContext(a);return d},some:function(h,g){if(typeof h!=="function"){throw new TypeError()
}var b=this.get?this.get("length"):this.length;if(g===undefined){g=null}var c=NO;
var f=null;var d=SC.Enumerator._popContext();for(var a=0;(!c)&&(a<b);a++){var e=this.nextObject(a,f,d);
if(h.call(g,e,a,this)){c=YES}f=e}f=null;d=SC.Enumerator._pushContext(d);return c},someProperty:function(i,e){var c=this.get?this.get("length"):this.length;
var d=NO;var h=null;var a=SC.Enumerator._popContext();for(var f=0;!d&&(f<c);f++){var b=this.nextObject(f,h,a);
var g=b?(b.get?b.get(i):b[i]):null;d=(e===undefined)?!!g:SC.isEqual(g,e);h=b}h=null;
a=SC.Enumerator._pushContext(a);return d},reduce:function(g,h,i){if(typeof g!=="function"){throw new TypeError()
}var c=this.get?this.get("length"):this.length;if(c===0&&h===undefined){throw new TypeError()
}var d=h;var f=null;var a=SC.Enumerator._popContext();for(var e=0;e<c;e++){var b=this.nextObject(e,f,a);
if(b!==null){if(d===undefined){d=b}else{d=g.call(null,d,b,e,this,i)}}f=b}f=null;a=SC.Enumerator._pushContext(a);
if(d===undefined){throw new TypeError()}return d},invoke:function(h){var e=this.get?this.get("length"):this.length;
if(e<=0){return[]}var i;var g=[];var c=arguments.length;if(c>1){for(i=1;i<c;i++){g.push(arguments[i])
}}var f=[];var j=null;var b=SC.Enumerator._popContext();for(i=0;i<e;i++){var d=this.nextObject(i,j,b);
var a=d?d[h]:null;if(a){f[i]=a.apply(d,g)}j=d}j=null;b=SC.Enumerator._pushContext(b);
return f},invokeWhile:function(d,i){var f=this.get?this.get("length"):this.length;
if(f<=0){return null}var j;var h=[];var c=arguments.length;if(c>2){for(j=2;j<c;j++){h.push(arguments[j])
}}var g=d;var k=null;var b=SC.Enumerator._popContext();for(j=0;(g===d)&&(j<f);j++){var e=this.nextObject(j,k,b);
var a=e?e[i]:null;if(a){g=a.apply(e,h)}k=e}k=null;b=SC.Enumerator._pushContext(b);
return g},toArray:function(){var a=[];this.forEach(function(b){a.push(b)},this);return a
},groupBy:function(j){var d=this.get?this.get("length"):this.length,e=[],i=null,a=SC.Enumerator._popContext(),f=[],k=[];
for(var g=0;g<d;g++){var c=this.nextObject(g,i,a);var h=c?(c.get?c.get(j):c[j]):null;
if(SC.none(f[h])){f[h]=[];k.push(h)}f[h].push(c);i=c}i=null;a=SC.Enumerator._pushContext(a);
for(var g=0,b=k.length;g<b;g++){e.push(f[k[g]])}return e}};SC._buildReducerFor=function(a,b){return function(d,e){var f=this[a];
if(SC.typeOf(f)!==SC.T_FUNCTION){return this.unknownProperty?this.unknownProperty(d,e):null
}else{var c=SC.Enumerable.reduce.call(this,f,null,b);return c}}.property("[]")};SC.Reducers={"[]":function(a,b){return this
}.property(),enumerableContentDidChange:function(b,a){this.notifyPropertyChange("[]");
return this},reducedProperty:function(i,g,f){if(!i||i.charAt(0)!=="@"){return undefined
}var d=i.match(/^@([^(]*)(\(([^)]*)\))?$/);if(!d||d.length<2){return undefined}var h=d[1];
var j=d[3];h="reduce"+h.slice(0,1).toUpperCase()+h.slice(1);var a=this[h];if(SC.typeOf(a)!==SC.T_FUNCTION){return undefined
}if(f===NO){return SC.Enumerable.reduce.call(this,a,null,j)}var c=SC._buildReducerFor(h,j);
var b=this.constructor.prototype;if(b){b[i]=c;var e=b._properties||[];e.push(i);b._properties=e;
this.registerDependentKey(i,"[]")}return SC.Enumerable.reduce.call(this,a,null,j)
},reduceMax:function(a,d,b,f,c){if(c&&d){d=d.get?d.get(c):d[c]}if(a===null){return d
}return(d>a)?d:a},reduceMaxObject:function(b,f,c,g,d){var a=b,h=f;if(d){if(f){h=f.get?f.get(d):f[d]
}if(b){a=b.get?b.get(d):b[d]}}if(a===null){return f}return(h>a)?f:b},reduceMin:function(a,d,b,f,c){if(c&&d){d=d.get?d.get(c):d[c]
}if(a===null){return d}return(d<a)?d:a},reduceMinObject:function(b,f,c,g,d){var a=b,h=f;
if(d){if(f){h=f.get?f.get(d):f[d]}if(b){a=b.get?b.get(d):b[d]}}if(a===null){return f
}return(h<a)?f:b},reduceAverage:function(b,g,d,h,f){if(f&&g){g=g.get?g.get(f):g[f]
}var c=(b||0)+g;var a=h.get?h.get("length"):h.length;if(d>=a-1){c=c/a}return c},reduceSum:function(a,d,b,f,c){if(c&&d){d=d.get?d.get(c):d[c]
}return(a===null)?d:a+d}};SC.mixin(SC.Enumerable,SC.Reducers);SC.mixin(Array.prototype,SC.Reducers);
Array.prototype.isEnumerable=YES;(function(){var a={nextObject:SC.Enumerable.nextObject,enumerator:SC.Enumerable.enumerator,firstObject:SC.Enumerable.firstObject,lastObject:SC.Enumerable.lastObject,sortProperty:SC.Enumerable.sortProperty,mapProperty:function(g){var e=this.length;
var f=[];for(var d=0;d<e;d++){var h=this[d];f[d]=h?(h.get?h.get(g):h[g]):null}return f
},filterProperty:function(h,j){var f=this.length;var g=[];for(var e=0;e<f;e++){var i=this[e];
var k=i?(i.get?i.get(h):i[h]):null;var d=(j===undefined)?!!k:SC.isEqual(k,j);if(d){g.push(i)
}}return g},groupBy:function(k){var f=this.length,g=[],h=[],l=[];for(var i=0;i<f;
i++){var e=this[i];var j=e?(e.get?e.get(k):e[k]):null;if(SC.none(h[j])){h[j]=[];l.push(j)
}h[j].push(e)}for(var i=0,d=l.length;i<d;i++){g.push(h[l[i]])}return g},find:function(j,i){if(typeof j!=="function"){throw new TypeError()
}var e=this.length;if(i===undefined){i=null}var g,f=null,h=NO;for(var d=0;d<e&&!h;
d++){g=this[d];if(h=j.call(i,g,d,this)){f=g}}g=null;return f},findProperty:function(g,j){var e=this.length;
var h,k,i=NO,f=null;for(var d=0;d<e&&!i;d++){k=(h=this[d])?(h.get?h.get(g):h[g]):null;
i=(j===undefined)?!!k:SC.isEqual(k,j);if(i){f=h}}h=null;return f},everyProperty:function(g,i){var e=this.length;
var f=YES;for(var d=0;f&&(d<e);d++){var h=this[d];var j=h?(h.get?h.get(g):h[g]):null;
f=(i===undefined)?!!j:SC.isEqual(j,i)}return f},someProperty:function(g,i){var e=this.length;
var f=NO;for(var d=0;!f&&(d<e);d++){var h=this[d];var j=h?(h.get?h.get(g):h[g]):null;
f=(i===undefined)?!!j:SC.isEqual(j,i)}return f},invoke:function(f){var e=this.length;
if(e<=0){return[]}var d;var h=[];var j=arguments.length;if(j>1){for(d=1;d<j;d++){h.push(arguments[d])
}}var g=[];for(d=0;d<e;d++){var i=this[d];var k=i?i[f]:null;if(k){g[d]=k.apply(i,h)
}}return g},invokeWhile:function(f,k){var h=this.length;if(h<=0){return null}var l;
var j=[];var e=arguments.length;if(e>2){for(l=2;l<e;l++){j.push(arguments[l])}}var i=f;
for(l=0;(i===f)&&(l<h);l++){var g=this[l];var d=g?g[k]:null;if(d){i=d.apply(g,j)}}return i
},toArray:function(){var e=this.length;if(e<=0){return[]}var f=[];for(var d=0;d<e;
d++){var g=this[d];f.push(g)}return f},getEach:function(g){var f=[];var e=this.length;
for(var d=0;d<e;d++){var h=this[d];f[d]=h?(h.get?h.get(g):h[g]):null}return f},setEach:function(f,g){var e=this.length;
for(var d=0;d<e;d++){var h=this[d];if(h){if(h.set){h.set(f,g)}else{h[f]=g}}}return this
}};var c={forEach:function(h,g){if(typeof h!=="function"){throw new TypeError()}var e=this.length;
if(g===undefined){g=null}for(var d=0;d<e;d++){var f=this[d];h.call(g,f,d,this)}return this
},map:function(i,h){if(typeof i!=="function"){throw new TypeError()}var e=this.length;
if(h===undefined){h=null}var f=[];for(var d=0;d<e;d++){var g=this[d];f[d]=i.call(h,g,d,this)
}return f},filter:function(i,h){if(typeof i!=="function"){throw new TypeError()}var e=this.length;
if(h===undefined){h=null}var f=[];for(var d=0;d<e;d++){var g=this[d];if(i.call(h,g,d,this)){f.push(g)
}}return f},every:function(i,h){if(typeof i!=="function"){throw new TypeError()}var e=this.length;
if(h===undefined){h=null}var f=YES;for(var d=0;f&&(d<e);d++){var g=this[d];if(!i.call(h,g,d,this)){f=NO
}}return f},some:function(i,h){if(typeof i!=="function"){throw new TypeError()}var e=this.length;
if(h===undefined){h=null}var f=NO;for(var d=0;(!f)&&(d<e);d++){var g=this[d];if(i.call(h,g,d,this)){f=YES
}}return f},reduce:function(j,f,i){if(typeof j!=="function"){throw new TypeError()
}var e=this.length;if(e===0&&f===undefined){throw new TypeError()}var g=f;for(var d=0;
d<e;d++){var h=this[d];if(h!==null){if(g===undefined){g=h}else{g=j.call(null,g,h,d,this,i)
}}}if(g===undefined){throw new TypeError()}return g}};for(var b in c){if(!c.hasOwnProperty(b)){continue
}if(!Array.prototype[b]||((typeof Prototype==="object")&&Prototype.Version.match(/^1\.6/))){Array.prototype[b]=c[b]
}}SC.mixin(Array.prototype,a)})();SC.RangeObserver={isRangeObserver:YES,toString:function(){var a=this.indexes?this.indexes.toString():"SC.IndexSet<..>";
return a.replace("IndexSet","RangeObserver(%@)".fmt(SC.guidFor(this)))},create:function(d,f,e,g,c,a){var b=SC.beget(this);
b.source=d;b.indexes=f?f.frozenCopy():null;b.target=e;b.method=g;b.context=c;b.isDeep=a||NO;
b.beginObserving();return b},extend:function(e){var d=SC.beget(this),c=arguments,b=c.length,a;
for(a=0;a<b;a++){SC.mixin(d,c[a])}return d},destroy:function(a){this.endObserving();
return this},update:function(a,b){if(this.indexes&&this.indexes.isEqual(b)){return this
}this.indexes=b?b.frozenCopy():null;this.endObserving().beginObserving();return this
},beginObserving:function(){if(!this.isDeep){return this}var b=this.observing;if(!b){b=this.observing=SC.CoreSet.create()
}var a=this._beginObservingForEach;if(!a){a=this._beginObservingForEach=function(c){var d=this.source.objectAt(c);
if(d&&d.addObserver){b.push(d);d._kvo_needsRangeObserver=YES}}}this.indexes.forEach(a,this);
this.isObserving=NO;SC.Observers.addPendingRangeObserver(this);return this},setupPending:function(a){var d=this.observing;
if(this.isObserving||!d||(d.get("length")===0)){return YES}if(d.contains(a)){this.isObserving=YES;
var b=this._setupPendingForEach;if(!b){var c=this.source,e=this.objectPropertyDidChange;
b=this._setupPendingForEach=function(f){var i=this.source.objectAt(f),g=SC.guidFor(i),h;
if(i&&i.addObserver){d.push(i);i.addObserver("*",this,e);h=this[g];if(h===undefined||h===null){this[g]=f
}else{if(h.isIndexSet){h.add(f)}else{h=this[g]=SC.IndexSet.create(h).add(f)}}}}}this.indexes.forEach(b,this);
return YES}else{return NO}},endObserving:function(){if(!this.isDeep){return this}var e=this.observing;
if(this.isObserving){var b=this.objectPropertyDidChange,c=this.source,a,f,d;if(e){f=e.length;
for(a=0;a<f;a++){d=e[a];d.removeObserver("*",this,b);this[SC.guidFor(d)]=null}e.length=0
}this.isObserving=NO}if(e){e.clear()}return this},rangeDidChange:function(b){var a=this.indexes;
if(!b||!a||a.intersects(b)){this.endObserving();this.method.call(this.target,this.source,null,"[]",b,this.context);
this.beginObserving()}return this},objectPropertyDidChange:function(d,f,g,a){var e=this.context,h=this.method,c=SC.guidFor(d),b=this[c];
if(b&&!b.isIndexSet){b=this[c]=SC.IndexSet.create(b).freeze()}if(e){h.call(this.target,this.source,d,f,b,e,a)
}else{h.call(this.target,this.source,d,f,b,a)}}};sc_require("mixins/observable");
sc_require("mixins/enumerable");sc_require("system/range_observer");SC.OUT_OF_RANGE_EXCEPTION="Index out of range";
SC.Array={isSCArray:YES,replace:function(a,c,b){throw"replace() must be implemented to support SC.Array"
},objectAt:function(a){if(a<0){return undefined}if(a>=this.get("length")){return undefined
}return this.get(a)},"[]":function(a,b){if(b!==undefined){this.replace(0,this.get("length"),b)
}return this}.property(),insertAt:function(a,b){if(a>this.get("length")){throw SC.OUT_OF_RANGE_EXCEPTION
}this.replace(a,0,[b]);return this},removeAt:function(d,a){var c=0,b=[];if(typeof d===SC.T_NUMBER){if((d<0)||(d>=this.get("length"))){throw SC.OUT_OF_RANGE_EXCEPTION
}if(a===undefined){this.replace(d,1,b);return this}else{d=SC.IndexSet.create(d,a)
}}this.beginPropertyChanges();d.forEachRange(function(f,e){f-=c;c+=e;this.replace(f,e,b)
},this);this.endPropertyChanges();return this},removeObject:function(b){var c=this.get("length")||0;
while(--c>=0){var a=this.objectAt(c);if(a==b){this.removeAt(c)}}return this},removeObjects:function(a){this.beginPropertyChanges();
a.forEach(function(b){this.removeObject(b)},this);this.endPropertyChanges();return this
},pushObject:function(a){this.insertAt(this.get("length"),a);return a},pushObjects:function(a){this.beginPropertyChanges();
a.forEach(function(b){this.pushObject(b)},this);this.endPropertyChanges();return this
},popObject:function(){var a=this.get("length");if(a===0){return null}var b=this.objectAt(a-1);
this.removeAt(a-1);return b},shiftObject:function(){if(this.get("length")===0){return null
}var a=this.objectAt(0);this.removeAt(0);return a},unshiftObject:function(a){this.insertAt(0,a);
return a},unshiftObjects:function(a){this.beginPropertyChanges();a.forEach(function(b){this.unshiftObject(b)
},this);this.endPropertyChanges();return this},isEqual:function(a){if(!a){return false
}if(a==this){return true}var b=a.get("length");if(b!=this.get("length")){return false
}while(--b>=0){if(!SC.isEqual(a.objectAt(b),this.objectAt(b))){return false}}return true
},compact:function(){return this.without(null)},without:function(b){if(this.indexOf(b)<0){return this
}var a=[];this.forEach(function(c){if(c!==b){a[a.length]=c}});return a},uniq:function(){var a=[];
this.forEach(function(b){if(a.indexOf(b)<0){a[a.length]=b}});return a},max:function(){return Math.max.apply(Math,this)
},min:function(){return Math.min.apply(Math,this)},rangeObserverClass:SC.RangeObserver,contains:function(a){return this.indexOf(a)>=0
},addRangeObserver:function(d,f,h,e){var a=this._array_rangeObservers;if(!a){a=this._array_rangeObservers=SC.CoreSet.create()
}if(this._array_oldLength===undefined){this._array_oldLength=this.get("length")}var g=this.rangeObserverClass;
var b=NO;var c=g.create(this,d,f,h,e,b);a.add(c);if(!this._array_isNotifyingRangeObservers){this._array_isNotifyingRangeObservers=YES;
this.addObserver("[]",this,this._array_notifyRangeObservers)}return c},updateRangeObserver:function(b,a){return b.update(this,a)
},removeRangeObserver:function(c){var b=c.destroy(this);var a=this._array_rangeObservers;
if(a){a.remove(c)}return b},enumerableContentDidChange:function(h,g,f){var a=this._array_rangeObservers,d=this._array_oldLength,e,c,b;
this.beginPropertyChanges();this.notifyPropertyChange("length");if(a&&a.length>0){if(d===undefined){d=0
}this._array_oldLength=e=this.get("length");if(h===undefined){h=0}if(f===undefined){f=e-d
}if(f!==0||g===undefined){c=e-h;if(f<0){c-=f}}else{c=g}b=this._array_rangeChanges;
if(!b){b=this._array_rangeChanges=SC.IndexSet.create()}b.add(h,c)}this.notifyPropertyChange("[]");
this.endPropertyChanges();return this},_array_notifyRangeObservers:function(){var c=this._array_rangeObservers,d=this._array_rangeChanges,b=c?c.length:0,a,e;
if(b>0&&d&&d.length>0){for(a=0;a<b;a++){c[a].rangeDidChange(d)}d.clear()}}};SC.mixin(Array.prototype,SC.Array);
SC.Array=SC.mixin({},SC.Enumerable,SC.Array);SC.Array.slice=function(b,d){var a=[];
var c=this.get("length");if(SC.none(b)){b=0}if(SC.none(d)||(d>c)){d=c}while(b<d){a[a.length]=this.objectAt(b++)
}return a};SC.Array.indexOf=function(d,c){var b,a=this.get("length");if(c===undefined){c=0
}else{c=(c<0)?Math.ceil(c):Math.floor(c)}if(c<0){c+=a}for(b=c;b<a;b++){if(this.objectAt(b)===d){return b
}}return -1};if(!Array.prototype.indexOf){Array.prototype.indexOf=SC.Array.indexOf
}SC.Array.lastIndexOf=function(d,c){var b,a=this.get("length");if(c===undefined){c=a-1
}else{c=(c<0)?Math.ceil(c):Math.floor(c)}if(c<0){c+=a}for(b=c;b>=0;b--){if(this.objectAt(b)===d){return b
}}return -1};if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=SC.Array.lastIndexOf
}(function(){SC.mixin(Array.prototype,{replace:function(d,g,f){if(this.isFrozen){throw SC.FROZEN_ERROR
}if(!f||f.length===0){this.splice(d,g)}else{var e=[d,g].concat(f);this.splice.apply(this,e)
}var c=f?(f.get?f.get("length"):f.length):0;this.enumerableContentDidChange(d,g,c-g);
return this},unknownProperty:function(d,e){var c=this.reducedProperty(d,e);if((e!==undefined)&&c===undefined){c=this[d]=e
}return c}});var b=Array.prototype.indexOf;if(!b||(b===SC.Array.indexOf)){Array.prototype.indexOf=function(f,e){var d,c=this.length;
if(e===undefined){e=0}else{e=(e<0)?Math.ceil(e):Math.floor(e)}if(e<0){e+=c}for(d=e;
d<c;d++){if(this[d]===f){return d}}return -1}}var a=Array.prototype.lastIndexOf;if(!a||(a===SC.Array.lastIndexOf)){Array.prototype.lastIndexOf=function(f,e){var d,c=this.length;
if(e===undefined){e=c-1}else{e=(e<0)?Math.ceil(e):Math.floor(e)}if(e<0){e+=c}for(d=e;
d>=0;d--){if(this[d]===f){return d}}return -1}}})();SC.Comparable={isComparable:YES,compare:function(d,c){throw"%@.compare() is not implemented".fmt(this.toString())
}};SC.Copyable={isCopyable:YES,copy:function(){throw"%@.copy() is not implemented"
},frozenCopy:function(){var a=this.get?this.get("isFrozen"):this.isFrozen;if(a===YES){return this
}else{if(a===undefined){throw"%@ does not support freezing".fmt(this)}else{return this.copy().freeze()
}}}};SC.mixin(Array.prototype,SC.Copyable);Array.prototype.copy=Array.prototype.slice;
SC.DelegateSupport={delegateFor:function(c){var b=1,a=arguments.length,d;while(b<a){d=arguments[b];
if(d&&d[c]!==undefined){return d}b++}return(this[c]!==undefined)?this:null},invokeDelegateMethod:function(c,a,b){b=SC.A(arguments);
b=b.slice(2,b.length);if(!c||!c[a]){c=this}var d=c[a];return d?d.apply(c,b):null},getDelegateProperty:function(d,e){var b=1,a=arguments.length,c;
while(b<a){c=arguments[b++];if(c&&c[d]!==undefined){return c.get?c.get(d):c[d]}}return(this[d]!==undefined)?this.get(d):undefined
}};SC.FROZEN_ERROR=new Error("Cannot modify a frozen object");SC.Freezable={isFreezable:YES,isFrozen:NO,freeze:function(){if(this.set){this.set("isFrozen",YES)
}else{this.isFrozen=YES}return this}};SC.mixin(Array.prototype,SC.Freezable);sc_require("mixins/enumerable");
sc_require("mixins/observable");sc_require("mixins/freezable");sc_require("mixins/copyable");
SC.Set=SC.mixin({},SC.Enumerable,SC.Observable,SC.Freezable,{create:function(b){var c,a,d=SC.Set._pool,e=this.isObservable;
if(!e&&b===undefined&&d.length>0){c=d.pop()}else{c=SC.beget(this);if(e){c.initObservable()
}if(b&&b.isEnumerable&&b.get("length")>0){c.isObservable=NO;if(b.isSCArray){a=b.get?b.get("length"):b.length;
while(--a>=0){c.add(b.objectAt(a))}}else{if(b.isSet){a=b.length;while(--a>=0){c.add(b[a])
}}else{b.forEach(function(f){c.add(f)},this)}}c.isObservable=e}}return c},isSet:YES,length:0,firstObject:function(){return(this.length>0)?this[0]:undefined
}.property(),clear:function(){if(this.isFrozen){throw SC.FROZEN_ERROR}this.length=0;
return this},contains:function(b){if(b===null){return NO}var a=this[SC.hashFor(b)];
return(!SC.none(a)&&(a<this.length)&&(this[a]===b))},isEqual:function(a){if(!a||!a.isSet||(a.get("length")!==this.get("length"))){return NO
}var b=this.get("length");while(--b>=0){if(!a.contains(this[b])){return NO}}return YES
},add:function(d){if(this.isFrozen){throw SC.FROZEN_ERROR}if(d===null||d===undefined){return this
}var c=SC.hashFor(d);var b=this[c];var a=this.length;if((b===null||b===undefined)||(b>=a)||(this[b]!==d)){this[a]=d;
this[c]=a;this.length=a+1}if(this.isObservable){this.enumerableContentDidChange()
}return this},addEach:function(c){if(this.isFrozen){throw SC.FROZEN_ERROR}if(!c||!c.isEnumerable){throw"%@.addEach must pass enumerable".fmt(this)
}var a,b=this.isObservable;if(b){this.beginPropertyChanges()}if(c.isSCArray){a=c.get("length");
while(--a>=0){this.add(c.objectAt(a))}}else{if(c.isSet){a=c.length;while(--a>=0){this.add(c[a])
}}else{c.forEach(function(d){this.add(d)},this)}}if(b){this.endPropertyChanges()}return this
},remove:function(d){if(this.isFrozen){throw SC.FROZEN_ERROR}if(SC.none(d)){return this
}var c=SC.hashFor(d);var b=this[c];var a=this.length;if(SC.none(b)||(b>=a)||(this[b]!==d)){return this
}delete this[c];if(b<(a-1)){d=this[b]=this[a-1];this[SC.hashFor(d)]=b}this.length=a-1;
if(this.isObservable){this.enumerableContentDidChange()}return this},pop:function(){if(this.isFrozen){throw SC.FROZEN_ERROR
}var a=(this.length>0)?this[this.length-1]:null;if(a){this.remove(a)}return a},removeEach:function(c){if(this.isFrozen){throw SC.FROZEN_ERROR
}if(!c||!c.isEnumerable){throw"%@.addEach must pass enumerable".fmt(this)}var a,b=this.isObservable;
if(b){this.beginPropertyChanges()}if(c.isSCArray){a=c.get("length");while(--a>=0){this.remove(c.objectAt(a))
}}else{if(c.isSet){a=c.length;while(--a>=0){this.remove(c[a])}}else{c.forEach(function(d){this.remove(d)
},this)}}if(b){this.endPropertyChanges()}return this},copy:function(){return this.constructor.create(this)
},destroy:function(){this.isFrozen=NO;if(!this.isObservable){SC.Set._pool.push(this.clear())
}return this},forEach:function(c,d){var b=this.length;if(!d){d=this}for(var a=0;a<b;
a++){c.call(d,this[a],a,this)}return this},toString:function(){var b=this.length,a,c=[];
for(a=0;a<b;a++){c[a]=this[a]}return"SC.Set<%@>".fmt(c.join(","))},_pool:[],isObservable:YES});
SC.Set.constructor=SC.Set;SC.Set.clone=SC.Set.copy;SC.Set.push=SC.Set.unshift=SC.Set.add;
SC.Set.shift=SC.Set.pop;SC.Set.addObject=SC.Set.add;SC.Set.removeObject=SC.Set.remove;
SC.Set._pool=[];SC.CoreSet=SC.beget(SC.Set);SC.CoreSet.isObservable=NO;SC.CoreSet.constructor=SC.CoreSet;
sc_require("core");sc_require("mixins/observable");sc_require("mixins/array");sc_require("system/set");
SC.BENCHMARK_OBJECTS=NO;SC._object_extend=function _object_extend(g,f){if(!f){throw"SC.Object.extend expects a non-null value.  Did you forget to 'sc_require' something?  Or were you passing a Protocol to extend() as if it were a mixin?"
}g._kvo_cloned=null;var w,m,s,e,h=g.concatenatedProperties,k=SC.K;var c,b;m=(h)?h.length:0;
var a=(m>0)?{}:null;while(--m>=0){w=h[m];c=g[w];b=f[w];if(c){if(!(c instanceof Array)){c=SC.$A(c)
}a[w]=(b)?c.concat(b):b}else{if(!(b instanceof Array)){b=SC.$A(b)}a[w]=b}}var v=g._bindings,l=NO;
var t=g._observers,u=NO;var i=g._properties,d=NO;var p,j,n;var r=g.outlets,q=NO;if(f.outlets){r=(r||SC.EMPTY_ARRAY).concat(f.outlets);
q=YES}for(w in f){if(w==="_kvo_cloned"){continue}if(!f.hasOwnProperty(w)){continue
}var o=(a.hasOwnProperty(w)?a[w]:null)||f[w];if(w.slice(-7)==="Binding"){if(!l){v=(v||SC.EMPTY_ARRAY).slice();
l=YES}if(v===null){v=(g._bindings||SC.EMPTY_ARRAY).slice()}v[v.length]=w}else{if(o&&(o instanceof Function)){if(!o.superclass&&(o!==(e=g[w]))){o.superclass=o.base=e||k
}if(o.propertyPaths){if(!u){t=(t||SC.EMPTY_ARRAY).slice();u=YES}t[t.length]=w}else{if(p=o.localPropertyPaths){j=p.length;
while(--j>=0){n=g._kvo_for(SC.keyFor("_kvo_local",p[j]),SC.Set);n.add(w);g._kvo_for("_kvo_observed_keys",SC.CoreSet).add(p[j])
}}else{if(o.dependentKeys){if(!d){i=(i||SC.EMPTY_ARRAY).slice();d=YES}i[i.length]=w
}else{if(o.autoconfiguredOutlet){if(!q){r=(r||SC.EMPTY_ARRAY).slice();q=YES}r[r.length]=w
}}}}}}g[w]=o}if(f.hasOwnProperty("toString")){w="toString";o=(a.hasOwnProperty(w)?a[w]:null)||f[w];
if(!o.superclass&&(o!==(e=g[w]))){o.superclass=o.base=e||k}g[w]=o}g._bindings=v||[];
g._observers=t||[];g._properties=i||[];g.outlets=r||[];return g};SC.Object=function(a){return this._object_init(a)
};SC.mixin(SC.Object,{mixin:function(b){var a=arguments.length,c;for(c=0;c<a;c++){SC.mixin(this,arguments[c])
}return this},superclass:null,extend:function(e){var d=SC.BENCHMARK_OBJECTS;if(d){SC.Benchmark.start("SC.Object.extend")
}var g,c=function(h){return this._object_init(h)};for(g in this){if(!this.hasOwnProperty(g)){continue
}c[g]=this[g]}if(this.hasOwnProperty("toString")){c.toString=this.toString}c.superclass=this;
SC.generateGuid(c);c.subclasses=SC.Set.create();this.subclasses.add(c);var f=(c.prototype=SC.beget(this.prototype));
var b,a=arguments.length;for(b=0;b<a;b++){SC._object_extend(f,arguments[b])}f.constructor=c;
if(d){SC.Benchmark.end("SC.Object.extend")}return c},create:function(){var b=this,a=new b(arguments);
if(SC.ObjectDesigner){SC.ObjectDesigner.didCreateObject(a,SC.$A(arguments))}return a
},isClass:YES,subclasses:SC.Set.create(),toString:function(){return SC._object_className(this)
},subclassOf:function(b){if(this===b){return NO}var a=this;while(a=a.superclass){if(a===b){return YES
}}return NO},hasSubclass:function(a){return(a&&a.subclassOf)?a.subclassOf(this):NO
},kindOf:function(a){return(this===a)||this.subclassOf(a)},design:function(){if(this.isDesign){return this
}var a=this.extend.apply(this,arguments);a.isDesign=YES;if(SC.ObjectDesigner){SC.ObjectDesigner.didLoadDesign(a,this,SC.A(arguments))
}return a}});SC.Object.prototype={_kvo_enabled:YES,_object_init:function(c){var b,a=(c)?c.length:0;
for(b=0;b<a;b++){SC._object_extend(this,c[b])}SC.generateGuid(this);this.init();var d=this.initMixin;
a=(d)?d.length:0;for(b=0;b<a;b++){d[b].call(this)}return this},mixin:function(){var b,a=arguments.length;
for(b=0;b<a;b++){SC.mixin(this,arguments[b])}for(b=0;b<a;b++){var c=arguments[b].initMixin;
if(c){c.call(this)}}return this},init:function(){this.initObservable();return this
},isDestroyed:NO,destroy:function(){if(this.get("isDestroyed")){return this}this.set("isDestroyed",YES);
var b,c=this.destroyMixin,a=(c)?c.length:0;for(b=0;b<a;b++){c[b].call(this)}return this
},isObject:true,respondsTo:function(a){return !!(SC.typeOf(this[a])===SC.T_FUNCTION)
},tryToPerform:function(b,c,a){return this.respondsTo(b)&&(this[b](c,a)!==NO)},superclass:function(b){var a=arguments.callee.caller;
if(!a){throw"superclass cannot determine the caller method"}return a.superclass?a.superclass.apply(this,arguments):null
},instanceOf:function(a){return this.constructor===a},kindOf:function(a){return this.constructor.kindOf(a)
},toString:function(){if(!this._object_toString){var a=SC._object_className(this.constructor);
var b="%@:%@".fmt(a,SC.guidFor(this));if(a){this._object_toString=b}else{return b
}}return this._object_toString},awake:function(c){var e=this.outlets,b,a,d;for(b=0,a=e.length;
b<a;++b){d=e[b];this.get(d)}this.bindings.invoke("sync")},invokeOnce:function(a){SC.RunLoop.currentRunLoop.invokeOnce(this,a);
return this},invokeLast:function(a){SC.RunLoop.currentRunLoop.invokeLast(this,a);
return this},concatenatedProperties:["concatenatedProperties","initMixin","destroyMixin"]};
SC.Object.prototype.constructor=SC.Object;SC.mixin(SC.Object.prototype,SC.Observable);
function findClassNames(){if(SC._object_foundObjectClassNames){return}SC._object_foundObjectClassNames=true;
var b=[];var a=function(c,d,g){g--;if(b.indexOf(d)>=0){return}b.push(d);for(var e in d){if(e=="__scope__"){continue
}if(e=="superclass"){continue}if(!e.match(/^[A-Z0-9]/)){continue}var h=(c)?[c,e].join("."):e;
var f=d[e];switch(SC.typeOf(f)){case SC.T_CLASS:if(!f._object_className){f._object_className=h
}if(g>=0){a(h,f,g)}break;case SC.T_OBJECT:if(g>=0){a(h,f,g)}break;case SC.T_HASH:if(((c)||(h==="SC"))&&(g>=0)){a(h,f,g)
}break;default:break}}};a(null,window,2)}SC.instanceOf=function(a,b){return !!(a&&a.constructor===b)
};SC.kindOf=function(a,b){if(a&&!a.isClass){a=a.constructor}return !!(a&&a.kindOf&&a.kindOf(b))
};SC._object_className=function(b){if(!SC.isReady){return""}if(!b._object_className){findClassNames()
}if(b._object_className){return b._object_className}var a=b;while(a&&!a._object_className){a=a.superclass
}return(a&&a._object_className)?a._object_className:"Anonymous"};require("system/object");
SC._ChainObserver=function(a){this.property=a};SC._ChainObserver.createChain=function(d,j,f,a,b){var c=j.split("."),h=new SC._ChainObserver(c[0]),g=h,e=c.length;
for(var i=1;i<e;i++){g=g.next=new SC._ChainObserver(c[i])}h.objectDidChange(d);g.target=f;
g.method=a;g.context=b;return h};SC._ChainObserver.prototype={isChainObserver:true,object:null,property:null,next:null,target:null,method:null,objectDidChange:function(a){if(a===this.object){return
}if(this.object&&this.object.removeObserver){this.object.removeObserver(this.property,this,this.propertyDidChange)
}this.object=a;if(this.object&&this.object.addObserver){this.object.addObserver(this.property,this,this.propertyDidChange)
}this.propertyDidChange()},propertyDidChange:function(){var b=this.object;var e=this.property;
var d=(b&&b.get)?b.get(e):null;if(this.next){this.next.objectDidChange(d)}var f=this.target,g=this.method,c=this.context;
if(f&&g){var a=b?b.propertyRevision:null;if(c){g.call(f,b,e,d,c,a)}else{g.call(f,b,e,d,a)
}}},destroyChain:function(){var a=this.object;if(a&&a.removeObserver){a.removeObserver(this.property,this,this.propertyDidChange)
}if(this.next){this.next.destroyChain()}this.next=this.target=this.method=this.object=this.context=null;
return null}};sc_require("mixins/observable");sc_require("system/set");SC.Observers={queue:[],addObserver:function(c,d,e,b){var a;
if(SC.typeOf(c)===SC.T_STRING){a=SC.tupleForPropertyPath(c,b)}else{a=c}if(a){a[0].addObserver(a[1],d,e)
}else{this.queue.push([c,d,e,b])}},removeObserver:function(f,g,h,d){var c,b,a,e;a=SC.tupleForPropertyPath(f,d);
if(a){a[0].removeObserver(a[1],g,h)}c=this.queue.length;b=this.queue;while(--c>=0){e=b[c];
if((e[0]===f)&&(e[1]===g)&&(e[2]==h)&&(e[3]===d)){b[c]=null}}},addPendingRangeObserver:function(a){var b=this.rangeObservers;
if(!b){b=this.rangeObservers=SC.CoreSet.create()}b.add(a);return this},_TMP_OUT:[],flush:function(a){var e=this.queue;
if(e&&e.length>0){var h=(this.queue=[]);var i=e.length;while(--i>=0){var j=e[i];if(!j){continue
}var f=SC.tupleForPropertyPath(j[0],j[3]);if(f){f[0].addObserver(f[1],j[1],j[2])}else{h.push(j)
}}}if(a._kvo_needsRangeObserver){var g=this.rangeObservers,d=g?g.get("length"):0,b=this._TMP_OUT,c;
for(i=0;i<d;i++){c=g[i];if(c.setupPending(a)){b.push(c)}}if(b.length>0){g.removeEach(b)
}b.length=0;a._kvo_needsRangeObserver=NO}},isObservingSuspended:0,_pending:SC.CoreSet.create(),objectHasPendingChanges:function(a){this._pending.add(a)
},suspendPropertyObserving:function(){this.isObservingSuspended++},resumePropertyObserving:function(){var c;
if(--this.isObservingSuspended<=0){c=this._pending;this._pending=SC.CoreSet.create();
var b,a=c.length;for(b=0;b<a;b++){c[b]._notifyPropertyObservers()}c.clear();c=null
}}};sc_require("system/object");SC.LOG_BINDINGS=NO;SC.BENCHMARK_BINDING_NOTIFICATIONS=NO;
SC.BENCHMARK_BINDING_SETUP=NO;SC.MULTIPLE_PLACEHOLDER="@@MULT@@";SC.NULL_PLACEHOLDER="@@NULL@@";
SC.EMPTY_PLACEHOLDER="@@EMPTY@@";SC.Binding={beget:function(b){var a=SC.beget(this);
a.parentBinding=this;if(b!==undefined){a=a.from(b)}return a},builder:function(){var b=this,a=function(c){return b.beget().from(c)
};a.beget=function(){return b.beget()};return a},from:function(b,a){if(!b){return this
}var c=(this===SC.Binding)?this.beget():this;c._fromPropertyPath=b;c._fromRoot=a;
c._fromTuple=null;return c},to:function(b,a){var c=(this===SC.Binding)?this.beget():this;
c._toPropertyPath=b;c._toRoot=a;c._toTuple=null;return c},connect:function(){if(this.isConnected){return this
}this.isConnected=YES;this._connectionPending=YES;this._syncOnConnect=YES;SC.Binding._connectQueue.add(this);
return this},_connect:function(){if(!this._connectionPending){return}this._connectionPending=NO;
var c,a,b=SC.BENCHMARK_BINDING_SETUP;if(b){SC.Benchmark.start("SC.Binding.connect()")
}c=this._fromPropertyPath;a=this._fromRoot;if(SC.typeOf(c)===SC.T_STRING){if(c.indexOf(".")===0){c=c.slice(1);
if(!a){a=this._toRoot}}else{if(c.indexOf("*")===0){c=[this._fromRoot||this._toRoot,c.slice(1)];
a=null}}}SC.Observers.addObserver(c,this,this.fromPropertyDidChange,a);if(!this._oneWay){c=this._toPropertyPath;
a=this._toRoot;SC.Observers.addObserver(c,this,this.toPropertyDidChange,a)}if(b){SC.Benchmark.end("SC.Binding.connect()")
}if(this._syncOnConnect){this._syncOnConnect=NO;if(b){SC.Benchmark.start("SC.Binding.connect().sync")
}this.sync();if(b){SC.Benchmark.end("SC.Binding.connect().sync")}}},disconnect:function(){if(!this.isConnected){return this
}if(this._connectionPending){this._connectionPending=NO}else{SC.Observers.removeObserver(this._fromPropertyPath,this,this.fromPropertyDidChange,(this._fromRoot||this._toRoot));
if(!this._oneWay){SC.Observers.removeObserver(this._toPropertyPath,this,this.toPropertyDidChange,this._toRoot)
}}this.isConnected=NO;return this},fromPropertyDidChange:function(c,b){var a=c?c.get(b):null;
if(a!==this._bindingValue||b==="[]"){this._setBindingValue(c,b);this._changePending=YES;
SC.Binding._changeQueue.add(this)}},toPropertyDidChange:function(c,b){if(this._oneWay){return
}var a=c.get(b);if(a!==this._transformedBindingValue){this._setBindingValue(c,b);
this._changePending=YES;SC.Binding._changeQueue.add(this)}},_setBindingValue:function(b,a){this._bindingSource=b;
this._bindingKey=a},_computeBindingValue:function(){var g=this._bindingSource,e=this._bindingKey,c,b;
this._bindingValue=c=(g?g.getPath(e):null);var f=this._transforms;if(f){var a=f.length,d;
for(b=0;b<a;b++){d=f[b];c=d(c,this)}}if(this._noError&&SC.typeOf(c)===SC.T_ERROR){c=null
}this._transformedBindingValue=c},_connectQueue:SC.CoreSet.create(),_alternateConnectQueue:SC.CoreSet.create(),_changeQueue:SC.CoreSet.create(),_alternateChangeQueue:SC.CoreSet.create(),_changePending:NO,flushPendingChanges:function(){if(this._isFlushing){return NO
}this._isFlushing=YES;SC.Observers.suspendPropertyObserving();var b=NO,c=SC.LOG_BINDINGS,a,d;
while((a=this._connectQueue).length>0){this._connectQueue=this._alternateConnectQueue;
this._alternateConnectQueue=a;while(d=a.pop()){d._connect()}}while((a=this._changeQueue).length>0){if(c){console.log("Begin: Trigger changed bindings")
}b=YES;this._changeQueue=this._alternateChangeQueue;this._alternateChangeQueue=a;
while(d=a.pop()){d.applyBindingValue()}if(c){console.log("End: Trigger changed bindings")
}}this._isFlushing=NO;SC.Observers.resumePropertyObserving();return b},applyBindingValue:function(){this._changePending=NO;
this._computeBindingTargets();this._computeBindingValue();var a=this._bindingValue,b=this._transformedBindingValue,c=SC.BENCHMARK_BINDING_NOTIFICATIONS,d=SC.LOG_BINDINGS;
if(!this._oneWay&&this._fromTarget){if(d){console.log("%@: %@ -> %@".fmt(this,a,b))
}if(c){SC.Benchmark.start(this.toString()+"->")}this._fromTarget.setPathIfChanged(this._fromPropertyKey,a);
if(c){SC.Benchmark.end(this.toString()+"->")}}if(this._toTarget){if(d){console.log("%@: %@ <- %@".fmt(this,a,b))
}if(c){SC.Benchmark.start(this.toString()+"<-")}this._toTarget.setPathIfChanged(this._toPropertyKey,b);
if(c){SC.Benchmark.start(this.toString()+"<-")}}},sync:function(){if(!this.isConnected){return this
}if(this._connectionPending){this._syncOnConnect=YES}else{this._computeBindingTargets();
var c=this._fromTarget,b=this._fromPropertyKey;if(!c||!b){return this}var a=c.getPath(b);
if(a!==this._bindingValue||b==="[]"){this._setBindingValue(c,b);this._changePending=YES;
SC.Binding._changeQueue.add(this)}}return this},_syncOnConnect:NO,_computeBindingTargets:function(){if(!this._fromTarget){var c,b,a;
c=this._fromPropertyPath;b=this._fromRoot;if(SC.typeOf(c)===SC.T_STRING){if(c.indexOf(".")===0){c=c.slice(1);
if(!b){b=this._toRoot}}else{if(c.indexOf("*")===0){c=[b||this._toRoot,c.slice(1)];
b=null}}}a=SC.tupleForPropertyPath(c,b);if(a){this._fromTarget=a[0];this._fromPropertyKey=a[1]
}}if(!this._toTarget){c=this._toPropertyPath;b=this._toRoot;a=SC.tupleForPropertyPath(c,b);
if(a){this._toTarget=a[0];this._toPropertyKey=a[1]}}},oneWay:function(c,a){if((a===undefined)&&(SC.typeOf(c)===SC.T_BOOL)){a=c;
c=null}var b=this.from(c);if(b===SC.Binding){b=b.beget()}b._oneWay=(a===undefined)?YES:a;
return b},transform:function(b){var c=(this===SC.Binding)?this.beget():this;var a=c._transforms;
if(a&&(a===c.parentBinding._transform)){a=c._transforms=a.slice()}if(!a){a=c._transforms=[]
}a.push(b);return c},resetTransforms:function(){var a=(this===SC.Binding)?this.beget():this;
a._transforms=null;return a},noError:function(c,a){if((a===undefined)&&(SC.typeOf(c)===SC.T_BOOL)){a=c;
c=null}var b=this.from(c);if(b===SC.Binding){b=b.beget()}b._noError=(a===undefined)?YES:a;
return b},single:function(b,a){if(a===undefined){a=SC.MULTIPLE_PLACEHOLDER}return this.from(b).transform(function(e,d){if(e&&e.isEnumerable){var c=e.get("length");
e=(c>1)?a:(c<=0)?null:e.firstObject()}return e})},notEmpty:function(b,a){if(a===undefined){a=SC.EMPTY_PLACEHOLDER
}return this.from(b).transform(function(d,c){if(SC.none(d)||(d==="")||(SC.isArray(d)&&d.length===0)){d=a
}return d})},notNull:function(b,a){if(a===undefined){a=SC.EMPTY_PLACEHOLDER}return this.from(b).transform(function(d,c){if(SC.none(d)){d=a
}return d})},multiple:function(a){return this.from(a).transform(function(b){if(!SC.isArray(b)){b=(b==null)?[]:[b]
}return b})},bool:function(a){return this.from(a).transform(function(b){var c=SC.typeOf(b);
if(c===SC.T_ERROR){return b}return(c==SC.T_ARRAY)?(b.length>0):(b==="")?NO:!!b})},and:function(b,a){var c=SC.Object.create({valueABinding:b,valueBBinding:a,and:function(){return(this.get("valueA")&&this.get("valueB"))
}.property("valueA","valueB").cacheable()});return this.from("and",c).oneWay()},or:function(b,a){var c=SC.Object.create({valueABinding:b,valueBBinding:a,or:function(){return(this.get("valueA")||this.get("valueB"))
}.property("valueA","valueB").cacheable()});return this.from("or",c).oneWay()},not:function(a){return this.from(a).transform(function(b){var c=SC.typeOf(b);
if(c===SC.T_ERROR){return b}return !((c==SC.T_ARRAY)?(b.length>0):(b==="")?NO:!!b)
})},isNull:function(a){return this.from(a).transform(function(b){var c=SC.typeOf(b);
return(c===SC.T_ERROR)?b:SC.none(b)})},toString:function(){var c=this._fromRoot?"<%@>:%@".fmt(this._fromRoot,this._fromPropertyPath):this._fromPropertyPath;
var b=this._toRoot?"<%@>:%@".fmt(this._toRoot,this._toPropertyPath):this._toPropertyPath;
var a=this._oneWay?"[oneWay]":"";return"SC.Binding%@(%@ -> %@)%@".fmt(SC.guidFor(this),c,b,a)
}};SC.binding=function(b,a){return SC.Binding.from(b,a)};SC.Cookie=SC.Object.extend({name:null,value:"",expires:null,path:null,domain:null,secure:NO,isCookie:YES,destroy:function(){this.set("expires",-1);
this.write();arguments.callee.base.apply(this,arguments)},write:function(){var b=this.get("name"),i=this.get("value"),c=this.get("expires"),k=this.get("path"),e=this.get("domain"),a=this.get("secure");
var h="";if(c&&(SC.typeOf(c)===SC.T_NUMBER||(SC.DateTime&&c.get&&c.get("milliseconds"))||SC.typeOf(c.toUTCString)===SC.T_FUNCTION)){var d;
if(SC.typeOf(c)===SC.T_NUMBER){d=new Date();d.setTime(d.getTime()+(c*24*60*60*1000))
}else{if(SC.DateTime&&c.get&&c.get("milliseconds")){d=new Date(c.get("milliseconds"))
}else{if(SC.typeOf(c.toUTCString)===SC.T_FUNCTION){d=c}}}if(d){h="; expires="+d.toUTCString()
}}var j=k?"; path="+k:"";var g=e?"; domain="+e:"";var f=a?"; secure":"";document.cookie=[b,"=",encodeURIComponent(i),h,j,g,f].join("");
return this}});SC.Cookie.mixin({find:function(a){if(document.cookie&&document.cookie!=""){var d=document.cookie.split(";");
for(var c=0;c<d.length;c++){var b=String(d[c]).trim();if(b.substring(0,a.length+1)===(a+"=")){return SC.Cookie.create({name:a,value:decodeURIComponent(b.substring(a.length+1))})
}}}return null}});SC.Error=SC.Object.extend({code:-1,message:"",errorValue:null,errorObject:function(){return this
}.property().cacheable(),label:null,toString:function(){return"SC.Error:%@:%@ (%@)".fmt(SC.guidFor(this),this.get("message"),this.get("code"))
},isError:YES});SC.Error.desc=function(d,a,e,c){var b={message:d};if(a!==undefined){b.label=a
}if(c!==undefined){b.code=c}if(e!==undefined){b.errorValue=e}return this.create(b)
};SC.$error=function(b,a,d,e){return SC.Error.desc(b,a,d,e)};SC.ok=function(a){return(a!==false)&&!(a&&a.isError)
};SC.$ok=SC.ok;SC.val=function(a){if(a&&a.isError){return a.get?a.get("errorValue"):null
}else{return a}};SC.$val=SC.val;SC.Error.HAS_MULTIPLE_VALUES=-100;sc_require("mixins/enumerable");
sc_require("mixins/observable");sc_require("mixins/freezable");sc_require("mixins/copyable");
SC.IndexSet=SC.mixin({},SC.Enumerable,SC.Observable,SC.Freezable,SC.Copyable,{_sc_sliceContent:function(e){if(e.length<1000){return e.slice()
}var d=0,a=[],b=e[0];while(b!==0){a[d]=b;d=(b<0)?(0-b):b;b=e[d]}a[d]=0;this._hint(0,d,a);
return a},create:function(c,b){var a=SC.beget(this);a.initObservable();a.registerDependentKey("min","[]");
if(c&&c.isIndexSet){a._content=this._sc_sliceContent(c._content);a.max=c.max;a.length=c.length;
a.source=c.source}else{a._content=[0];if(c!==undefined){a.add(c,b)}}return a},isIndexSet:YES,HINT_SIZE:256,length:0,max:0,min:function(){var a=this._content,b=a[0];
return(b===0)?-1:(b>0)?0:Math.abs(b)}.property("[]").cacheable(),firstObject:function(){return(this.get("length")>0)?this.get("min"):undefined
}.property(),rangeStartForIndex:function(c){var f=this._content,a=this.get("max"),b,e,d;
if(c>=a){return a}if(Math.abs(f[c])>c){return c}d=c-(c%SC.IndexSet.HINT_SIZE);b=f[d];
if(b<0||b>c){b=d}e=Math.abs(f[b]);while(e<c){b=e;e=Math.abs(f[b])}return b},isEqual:function(c){if(c===this){return YES
}if(!c||!c.isIndexSet||(c.max!==this.max)||(c.length!==this.length)){return NO}var e=this._content,b=c._content,d=0,a=e[d];
do{if(b[d]!==a){return NO}d=Math.abs(a);a=e[d]}while(d!==0);return YES},indexBefore:function(b){if(b===0){return -1
}b--;var c=this._content,a=this.get("max"),d=this.rangeStartForIndex(b);if(!c){return null
}while((d===a)||(c[d]<0)){if(d===0){return -1}b=d-1;d=this.rangeStartForIndex(b)}return b
},indexAfter:function(b){var d=this._content,a=this.get("max"),e,c;if(!d||(b>=a)){return -1
}b++;e=this.rangeStartForIndex(b);c=d[e];while(c<0){if(c===0){return -1}b=e=Math.abs(c);
c=d[e]}return b},contains:function(g,c){var b,f,a,e,d;if(c===undefined){if(g===null||g===undefined){return NO
}if(typeof g===SC.T_NUMBER){c=1}else{if(g&&g.isIndexSet){if(g===this){return YES}b=g._content;
f=0;a=b[f];while(a!==0){if((a>0)&&!this.contains(f,a-f)){return NO}f=Math.abs(a);
a=b[f]}return YES}else{c=g.length;g=g.start}}}e=this.rangeStartForIndex(g);d=this._content[e];
return(d>0)&&(e<=g)&&(d>=(g+c))},intersects:function(f,c){var b,e,a,d;if(c===undefined){if(typeof f===SC.T_NUMBER){c=1
}else{if(f&&f.isIndexSet){if(f===this){return YES}b=f._content;e=0;a=b[e];while(a!==0){if((a>0)&&this.intersects(e,a-e)){return YES
}e=Math.abs(a);a=b[e]}return NO}else{c=f.length;f=f.start}}}e=this.rangeStartForIndex(f);
b=this._content;a=b[e];d=f+c;while(e<d){if(a===0){return NO}if((a>0)&&(a>f)){return YES
}e=Math.abs(a);a=b[e]}return NO},without:function(b,a){if(b===this){return SC.IndexSet.create()
}return this.clone().remove(b,a)},replace:function(c,a){if(a===undefined){if(typeof c===SC.T_NUMBER){a=1
}else{if(c&&c.isIndexSet){this._content=this._sc_sliceContent(c._content);this.beginPropertyChanges().set("max",c.max).set("length",c.length).set("source",c.source).enumerableContentDidChange().endPropertyChanges();
return this}else{a=c.length;c=c.start}}}var b=this.length;this._content.length=1;
this._content[0]=0;this.length=this.max=0;return this.add(c,a)},add:function(a,b){if(this.isFrozen){throw SC.FROZEN_ERROR
}var e,i,d;if(a&&a.isIndexSet){e=a._content;if(!e){return this}i=0;d=e[0];while(d!==0){if(d>0){this.add(i,d-i)
}i=d<0?0-d:d;d=e[i]}return this}else{if(b===undefined){if(a===null||a===undefined){return this
}else{if(typeof a===SC.T_NUMBER){b=1}else{b=a.length;a=a.start}}}else{if(b===null){b=1
}}}if(b<=0){return this}var f=this.get("max"),c=f,h,g;e=this._content;if(a===f){if(a>0){i=this.rangeStartForIndex(a-1);
d=e[i];if(d>0){delete e[f];e[i]=f=a+b;a=i}else{e[f]=f=a+b}}else{e[a]=f=b}e[f]=0;this.set("max",f);
this.set("length",this.length+b);b=f-a}else{if(a>f){e[f]=0-a;e[a]=a+b;e[a+b]=0;this.set("max",a+b);
this.set("length",this.length+b);b=a+b-f;a=f}else{i=this.rangeStartForIndex(a);d=e[i];
f=a+b;h=0;if((a>0)&&(i===a)&&(d<=0)){i=this.rangeStartForIndex(a-1);d=e[i]}if(d<0){e[i]=0-a;
if(Math.abs(d)>f){e[a]=0-f;e[f]=d}else{e[a]=d}}else{a=i;if(d>f){f=d}}i=a;while(i<f){g=e[i];
if(g===0){e[f]=0;d=f;h+=f-i}else{d=Math.abs(g);if(d>f){e[f]=g;d=f}if(g<0){h+=d-i}}delete e[i];
i=d}if((i=e[f])>0){delete e[f];f=i}e[a]=f;if(f>c){this.set("max",f)}this.set("length",this.get("length")+h);
b=f-a}}this._hint(a,b);if(h!==0){this.enumerableContentDidChange()}return this},remove:function(a,b){if(this.isFrozen){throw SC.FROZEN_ERROR
}if(b===undefined){if(a===null||a===undefined){return this}else{if(typeof a===SC.T_NUMBER){b=1
}else{if(a.isIndexSet){a.forEachRange(this.remove,this);return this}else{b=a.length;
a=a.start}}}}if(b<=0){return this}var f=this.get("max"),c=f,e=this._content,j,d,i,g,h;
if(a>=f){return this}j=this.rangeStartForIndex(a);d=e[j];h=a+b;i=0;if((a>0)&&(j===a)&&(d>0)){j=this.rangeStartForIndex(a-1);
d=e[j]}if(d>0){e[j]=a;if(d>h){e[a]=h;e[h]=d}else{e[a]=d}}else{a=j;d=Math.abs(d);if(d>h){h=d
}}j=a;while(j<h){g=e[j];if(g===0){e[h]=0;d=h}else{d=Math.abs(g);if(d>h){e[h]=g;d=h
}if(g>0){i+=d-j}}delete e[j];j=d}if((j=e[h])<0){delete e[h];h=Math.abs(j)}if(e[h]===0){delete e[h];
e[a]=0;this.set("max",a)}else{e[a]=0-h}this.set("length",this.get("length")-i);b=h-a;
this._hint(a,b);if(i!==0){this.enumerableContentDidChange()}return this},_hint:function(g,d,c){if(c===undefined){c=this._content
}var b=SC.IndexSet.HINT_SIZE,a=Math.abs(c[g]),f=g-(g%b)+b,e=g+d;while(f<e){while((a!==0)&&(a<=f)){g=a;
a=Math.abs(c[g])}if(a===0){delete c[f]}else{if(f!==g){c[f]=g}}f+=b}},clear:function(){if(this.isFrozen){throw SC.FROZEN_ERROR
}var a=this.length;this._content.length=1;this._content[0]=0;this.set("length",0).set("max",0);
if(a>0){this.enumerableContentDidChange()}},addEach:function(b){if(this.isFrozen){throw SC.FROZEN_ERROR
}this.beginPropertyChanges();var a=b.get("length");if(b.isSCArray){while(--a>=0){this.add(b.objectAt(a))
}}else{if(b.isEnumerable){b.forEach(function(c){this.add(c)},this)}}this.endPropertyChanges();
return this},removeEach:function(b){if(this.isFrozen){throw SC.FROZEN_ERROR}this.beginPropertyChanges();
var a=b.get("length");if(b.isSCArray){while(--a>=0){this.remove(b.objectAt(a))}}else{if(b.isEnumerable){b.forEach(function(c){this.remove(c)
},this)}}this.endPropertyChanges();return this},clone:function(){return SC.IndexSet.create(this)
},inspect:function(){var e=this._content,b=e.length,a=0,c=[],d;for(a=0;a<b;a++){d=e[a];
if(d!==undefined){c.push("%@:%@".fmt(a,d))}}return"SC.IndexSet<%@>".fmt(c.join(" , "))
},forEachRange:function(f,d){var b=this._content,e=0,a=b[e],c=this.source;if(d===undefined){d=null
}while(a!==0){if(a>0){f.call(d,e,a-e,this,c)}e=Math.abs(a);a=b[e]}return this},forEachIn:function(b,c,j,f){var g=this._content,i=0,h=0,d=b+c,a=this.source,e=g[i];
if(f===undefined){f=null}while(e!==0){if(i<b){i=b}while((i<e)&&(i<d)){j.call(f,i++,h++,this,a)
}if(i>=d){i=e=0}else{i=Math.abs(e);e=g[i]}}return this},lengthIn:function(g,d){var a=0;
if(d===undefined){if(g===null||g===undefined){return 0}else{if(typeof g===SC.T_NUMBER){d=1
}else{if(g.isIndexSet){g.forEachRange(function(i,h){a+=this.lengthIn(i,h)},this);
return a}else{d=g.length;g=g.start}}}}if(this.get("length")===0){return 0}var c=this._content,f=0,b=c[f],e=g+d;
while(f<e&&b!==0){if(b>0){a+=(b>e)?e-f:b-f}f=Math.abs(b);b=c[f]}return a},source:null,indexOf:function(d,c){var f=this.source;
if(!f){throw"%@.indexOf() requires source".fmt(this)}var b=f.get("length"),e=this._content,g=e[0]<0?Math.abs(e[0]):0,a;
while(g>=0&&g<b){a=f.indexOf(d,g);if(a<0){return -1}if(this.contains(a)){return a
}g=a+1}return -1},lastIndexOf:function(d,c){var e=this.source;if(!e){throw"%@.lastIndexOf() requires source".fmt(this)
}var b=e.get("length"),f=this.max-1,a;if(f>=b){f=b-1}while(f>=0){a=e.lastIndexOf(d,f);
if(a<0){return -1}if(this.contains(a)){return a}f=a+1}return -1},forEachObject:function(g,e){var d=this.source;
if(!d){throw"%@.forEachObject() requires source".fmt(this)}var c=this._content,f=0,a=0,b=c[f];
if(e===undefined){e=null}while(b!==0){while(f<b){g.call(e,d.objectAt(f),f,d,this);
f++}f=Math.abs(b);b=c[f]}return this},addObject:function(c,d){var e=this.source;if(!e){throw"%@.addObject() requires source".fmt(this)
}var b=e.get("length"),f=0,a;while(f>=0&&f<b){a=e.indexOf(c,f);if(a>=0){this.add(a);
if(d){return this}f=a++}else{return this}}return this},addObjects:function(b,a){b.forEach(function(c){this.addObject(c,a)
},this);return this},removeObject:function(c,d){var e=this.source;if(!e){throw"%@.removeObject() requires source".fmt(this)
}var b=e.get("length"),f=0,a;while(f>=0&&f<b){a=e.indexOf(c,f);if(a>=0){this.remove(a);
if(d){return this}f=a+1}else{return this}}return this},removeObjects:function(b,a){b.forEach(function(c){this.removeObject(c,a)
},this);return this},LOG_OBSERVING:NO,forEach:function(g,e){var c=this._content,f=0,a=0,d=this.source,b=c[f];
if(e===undefined){e=null}while(b!==0){while(f<b){g.call(e,f++,a++,this,d)}f=Math.abs(b);
b=c[f]}return this},nextObject:function(f,b,c){var e=this._content,d=c.next,a=this.get("max");
if(b===null){b=d=0}else{if(b>=a){delete c.next;return null}else{b++}}if(b===d){do{b=Math.abs(d);
d=e[b]}while(d<0);c.next=d}return b},toString:function(){var a=[];this.forEachRange(function(c,b){a.push(b===1?c:"%@..%@".fmt(c,c+b-1))
},this);return"SC.IndexSet<%@>".fmt(a.join(","))},max:0});SC.IndexSet.slice=SC.IndexSet.copy=SC.IndexSet.clone;
SC.IndexSet.EMPTY=SC.IndexSet.create().freeze();SC.LOGGER_LOG_DELIMITER=", ";SC.LOGGER_LOG_ERROR="ERROR: ";
SC.LOGGER_LOG_INFO="INFO: ";SC.LOGGER_LOG_WARN="WARNING: ";SC.LOGGER_LOG_DEBUG="DEBUG: ";
SC.Logger=SC.Object.create({debugEnabled:NO,exists:function(){return typeof(this.get("reporter"))!=="undefined"&&this.get("reporter")!=null
}.property("reporter").cacheable(),fallBackOnAlert:NO,fallBackOnLog:YES,format:YES,reporter:console,log:function(){var a=this.get("reporter");
if(this.get("exists")&&typeof(a.log)==="function"){if(this.get("format")){a.log(this._argumentsToString.apply(this,arguments))
}else{a.log.apply(a,arguments)}return true}else{if(this.fallBackOnAlert){var b=this.get("format")?this._argumentsToString.apply(this,arguments):arguments;
if(this.get("exists")&&typeof(a.alert)==="function"){a.alert(b)}else{alert(b)}return true
}}return false},debug:function(){var c=this.get("reporter");if(this.get("debugEnabled")!==YES){return false
}if(this.get("exists")&&(typeof c.debug==="function")){c.debug.apply(c,arguments);
return true}else{if(this.fallBackOnLog){var b=this._argumentsToArray(arguments);if(typeof(b.unshift)==="function"){b.unshift(SC.LOGGER_LOG_DEBUG)
}return this.log.apply(this,b)}}return false},dir:function(){var a=this.get("reporter");
if(this.get("exists")&&typeof(a.dir)==="function"){a.dir.apply(a,arguments);return true
}return(this.fallBackOnLog)?this.log.apply(this,arguments):false},dirxml:function(){var a=this.get("reporter");
if(this.get("exists")&&typeof(a.dirxml)==="function"){a.dirxml.apply(a,arguments);
return true}return(this.fallBackOnLog)?this.log.apply(this,arguments):false},error:function(){var c=this.get("reporter");
if(this.get("exists")&&typeof(c.error)==="function"){c.error.apply(c,arguments);return true
}else{if(this.fallBackOnLog){var b=this._argumentsToArray(arguments);if(typeof(b.unshift)==="function"){b.unshift(SC.LOGGER_LOG_ERROR)
}return this.log.apply(this,b)}}return false},group:function(b){var a=this.get("reporter");
if(this.get("exists")&&typeof(a.group)==="function"){a.group(b);return true}return false
},groupEnd:function(){var a=this.get("reporter");if(this.get("exists")&&typeof(a.groupEnd)==="function"){a.groupEnd();
return true}return false},info:function(){var c=this.get("reporter");if(this.get("exists")&&typeof(c.info)==="function"){c.info.apply(c,arguments);
return true}else{if(this.fallBackOnLog){var b=this._argumentsToArray(arguments);if(typeof(b.unshift)==="function"){b.unshift(SC.LOGGER_LOG_INFO)
}return this.log.apply(this,b)}}return false},profile:function(){var a=this.get("reporter");
if(this.get("exists")&&typeof(a.profile)==="function"){a.profile();return true}return false
},profileEnd:function(){var a=this.get("reporter");if(this.get("exists")&&typeof(a.profileEnd)==="function"){a.profileEnd();
return true}return false},time:function(b){var a=this.get("reporter");if(this.get("exists")&&typeof(a.time)==="function"){a.time(b);
return true}return false},timeEnd:function(b){var a=this.get("reporter");if(this.get("exists")&&typeof(a.timeEnd)==="function"){a.timeEnd(b);
return true}return false},trace:function(){var a=this.get("reporter");if(this.get("exists")&&typeof(a.trace)==="function"){a.trace();
return true}return false},warn:function(){var c=this.get("reporter");if(this.get("exists")&&typeof(c.warn)==="function"){c.warn.apply(c,arguments);
return true}else{if(this.fallBackOnLog){var b=this._argumentsToArray(arguments);if(typeof(b.unshift)==="function"){b.unshift(SC.LOGGER_LOG_WARN)
}return this.log.apply(this,b)}}return false},_argumentsToArray:function(d){if(!d){return[]
}var b=[];for(var c=0;c<d.length;c++){b[c]=d[c]}return b},_argumentsToString:function(){var b="";
for(var a=0;a<arguments.length-1;a++){b+=arguments[a]+SC.LOGGER_LOG_DELIMITER}b+=arguments[arguments.length-1];
return b}});sc_require("private/observer_set");SC.RunLoop=SC.Object.extend({beginRunLoop:function(){this._start=new Date().getTime();
if(SC.LOG_BINDINGS||SC.LOG_OBSERVERS){console.log("-- SC.RunLoop.beginRunLoop at %@".fmt(this._start))
}this._runLoopInProgress=YES;return this},isRunLoopInProgress:function(){return this._runLoopInProgress
}.property(),endRunLoop:function(){var a;if(SC.LOG_BINDINGS||SC.LOG_OBSERVERS){console.log("-- SC.RunLoop.endRunLoop ~ flushing application queues")
}do{a=this.flushApplicationQueues();if(!a){a=this._flushinvokeLastQueue()}}while(a);
this._start=null;if(SC.LOG_BINDINGS||SC.LOG_OBSERVERS){console.log("-- SC.RunLoop.endRunLoop ~ End")
}SC.RunLoop.lastRunLoopEnd=Date.now();this._runLoopInProgress=NO;return this},invokeOnce:function(a,b){if(b===undefined){b=a;
a=this}if(SC.typeOf(b)===SC.T_STRING){b=a[b]}if(!this._invokeQueue){this._invokeQueue=SC.ObserverSet.create()
}this._invokeQueue.add(a,b);return this},invokeLast:function(a,b){if(b===undefined){b=a;
a=this}if(SC.typeOf(b)===SC.T_STRING){b=a[b]}if(!this._invokeLastQueue){this._invokeLastQueue=SC.ObserverSet.create()
}this._invokeLastQueue.add(a,b);return this},flushApplicationQueues:function(){var b=NO,a=this._invokeQueue;
if(a&&a.targets>0){this._invokeQueue=null;b=YES;a.invokeMethods()}return SC.Binding.flushPendingChanges()||b
},_flushinvokeLastQueue:function(){var a=this._invokeLastQueue,b=NO;if(a&&a.targets>0){this._invokeLastQueue=null;
b=YES;if(b){a.invokeMethods()}}return b}});SC.RunLoop.currentRunLoop=null;SC.RunLoop.runLoopClass=SC.RunLoop;
SC.RunLoop.begin=function(){var a=this.currentRunLoop;if(!a){a=this.currentRunLoop=this.runLoopClass.create()
}a.beginRunLoop();return this};SC.RunLoop.end=function(){var a=this.currentRunLoop;
if(!a){throw"SC.RunLoop.end() called outside of a runloop!"}a.endRunLoop();return this
};SC.RunLoop.isRunLoopInProgress=function(){if(this.currentRunLoop){return this.currentRunLoop.get("isRunLoopInProgress")
}return NO};SC.run=function(d,c,b){if(b){var a=SC.RunLoop.isRunLoopInProgress();if(!a){SC.RunLoop.begin()
}d.call(c);if(!a){SC.RunLoop.end()}}else{SC.RunLoop.begin();d.call(c);SC.RunLoop.end()
}};sc_require("system/object");sc_require("mixins/enumerable");sc_require("mixins/copyable");
sc_require("mixins/freezable");SC.SelectionSet=SC.Object.extend(SC.Enumerable,SC.Freezable,SC.Copyable,{isSelectionSet:YES,length:function(){var a=0,b=this._sets,c=this._objects;
if(c){a+=c.get("length")}if(b){b.forEach(function(d){a+=d.get("length")})}return a
}.property().cacheable(),sources:function(){var c=[],d=this._sets,b=d?d.length:0,a,f,e;
for(a=0;a<b;a++){f=d[a];if(f&&f.get("length")>0&&f.source){c.push(f.source)}}return c
}.property().cacheable(),indexSetForSource:function(e){if(!e||!e.isSCArray){return null
}var b=this._indexSetCache,d=this._objects,c,a;if(!b){b=this._indexSetCache={}}c=b[SC.guidFor(e)];
if(c&&c._sourceRevision&&(c._sourceRevision!==e.propertyRevision)){c=null}if(!c){c=this._indexSetForSource(e,NO);
if(c&&c.get("length")===0){c=null}if(d){if(c){c=c.copy()}d.forEach(function(f){if((a=e.indexOf(f))>=0){if(!c){c=SC.IndexSet.create()
}c.add(a)}},this)}if(c){c=b[SC.guidFor(e)]=c.frozenCopy();c._sourceRevision=e.propertyRevision
}}return c},_indexSetForSource:function(f,g){if(g===undefined){g=YES}var d=SC.guidFor(f),c=this[d],e=this._sets,a=e?e.length:0,b=null;
if(c>=a){c=null}if(SC.none(c)){if(g&&!this.isFrozen){this.propertyWillChange("sources");
if(!e){e=this._sets=[]}b=e[a]=SC.IndexSet.create();b.source=f;this[d]=a;this.propertyDidChange("sources")
}}else{b=e?e[c]:null}return b},add:function(a,b,d){if(this.isFrozen){throw SC.FROZEN_ERROR
}var g,f,j,i,c,e,h,k;if(b===undefined&&d===undefined){if(!a){throw"Must pass params to SC.SelectionSet.add()"
}if(a.isIndexSet){return this.add(a.source,a)}if(a.isSelectionSet){g=a._sets;k=a._objects;
f=g?g.length:0;this.beginPropertyChanges();for(j=0;j<f;j++){i=g[j];if(i&&i.get("length")>0){this.add(i.source,i)
}}if(k){this.addObjects(k)}this.endPropertyChanges();return this}}i=this._indexSetForSource(a,YES);
c=this.get("length");h=i.get("length");e=c-h;i.add(b,d);this._indexSetCache=null;
e+=i.get("length");if(e!==c){this.propertyDidChange("length");this.enumerableContentDidChange();
if(h===0){this.notifyPropertyChange("sources")}}return this},remove:function(a,b,d){if(this.isFrozen){throw SC.FROZEN_ERROR
}var g,f,j,i,c,e,h,k;if(b===undefined&&d===undefined){if(!a){throw"Must pass params to SC.SelectionSet.remove()"
}if(a.isIndexSet){return this.remove(a.source,a)}if(a.isSelectionSet){g=a._sets;k=a._objects;
f=g?g.length:0;this.beginPropertyChanges();for(j=0;j<f;j++){i=g[j];if(i&&i.get("length")>0){this.remove(i.source,i)
}}if(k){this.removeObjects(k)}this.endPropertyChanges();return this}}i=this._indexSetForSource(a,YES);
c=this.get("length");e=c-i.get("length");if(i&&(k=this._objects)){if(d!==undefined){b=SC.IndexSet.create(b,d);
d=undefined}k.forEach(function(l){j=a.indexOf(l);if(b.contains(j)){k.remove(l);e--
}},this)}i.remove(b,d);h=i.get("length");e+=h;this._indexSetCache=null;if(e!==c){this.propertyDidChange("length");
this.enumerableContentDidChange();if(h===0){this.notifyPropertyChange("sources")}}return this
},contains:function(b,d,a){if(d===undefined&&a===undefined){return this.containsObject(b)
}var c=this.indexSetForSource(b);if(!c){return NO}return c.contains(d,a)},intersects:function(b,d,a){var c=this.indexSetForSource(b,NO);
if(!c){return NO}return c.intersects(d,a)},_TMP_ARY:[],addObject:function(b){var c=this._TMP_ARY,a;
c[0]=b;a=this.addObjects(c);c.length=0;return a},addObjects:function(a){var d=this._objects,b,c;
if(!d){d=this._objects=SC.CoreSet.create()}b=d.get("length");d.addEach(a);c=d.get("length");
this._indexSetCache=null;if(c!==b){this.propertyDidChange("length");this.enumerableContentDidChange()
}return this},removeObject:function(b){var c=this._TMP_ARY,a;c[0]=b;a=this.removeObjects(c);
c.length=0;return a},removeObjects:function(b){var e=this._objects,c,d,a;if(!e){return this
}c=e.get("length");e.removeEach(b);d=e.get("length");if(a=this._sets){a.forEach(function(f){c+=f.get("length");
f.removeObjects(b);d+=f.get("length")},this)}this._indexSetCache=null;if(d!==c){this.propertyDidChange("length");
this.enumerableContentDidChange()}return this},containsObject:function(c){var e=this._objects;
if(e&&e.contains(c)){return YES}var d=this._sets,b=d?d.length:0,a,f;for(a=0;a<b;a++){f=d[a];
if(f&&f.indexOf(c)>=0){return YES}}return NO},constrain:function(d){var e,b,a,c;this.beginPropertyChanges();
this.get("sources").forEach(function(f){if(f===d){return}var g=this._indexSetForSource(d,NO);
if(g){this.remove(d,g)}},this);e=this._indexSetForSource(d,NO);if(e&&((a=e.get("max"))>(b=d.get("length")))){this.remove(d,b,a-b)
}if(c=this._objects){c.forEach(function(f){if(d.indexOf(f)<0){this.removeObject(f)
}},this)}this.endPropertyChanges();return this},isEqual:function(g){var f,d,b,a,c,e;
if(!g||!g.isSelectionSet){return NO}if(g===this){return YES}if((this._sets===g._sets)&&(this._objects===g._objects)){return YES
}if(this.get("length")!==g.get("length")){return NO}f=this._objects;d=g._objects;
if(f||d){if((f?f.get("length"):0)!==(d?d.get("length"):0)){return NO}if(f&&!f.isEqual(d)){return NO
}}c=this.get("sources");a=c.get("length");for(b=0;b<a;b++){e=c.objectAt(b);f=this._indexSetForSource(e,NO);
d=this._indexSetForSource(e,NO);if(!!d!==!!f){return NO}if(f&&!f.isEqual(d)){return NO
}}return YES},clear:function(){if(this.isFrozen){throw SC.FROZEN_ERROR}if(this._sets){this._sets.length=0
}if(this._objects){this._objects=null}this._indexSetCache=null;this.propertyDidChange("length");
this.enumerableContentDidChange();this.notifyPropertyChange("sources");return this
},copy:function(){var c=this.constructor.create(),d=this._sets,b=d?d.length:0,a,e;
if(d&&b>0){d=c._sets=d.slice();for(a=0;a<b;a++){if(!(e=d[a])){continue}e=d[a]=e.copy();
c[SC.guidFor(e.source)]=a}}if(this._objects){c._objects=this._objects.copy()}return c
},freeze:function(){if(this.isFrozen){return this}var a=this._sets,b=a?a.length:0,c;
while(--b>=0){if(c=a[b]){c.freeze()}}if(this._objects){this._objects.freeze()}return arguments.callee.base.apply(this,arguments)
},toString:function(){var a=this._sets||[];a=a.map(function(b){return b.toString().replace("SC.IndexSet",SC.guidFor(b.source))
},this);if(this._objects){a.push(this._objects.toString())}return"SC.SelectionSet:%@<%@>".fmt(SC.guidFor(this),a.join(","))
},firstObject:function(){var b=this._sets,c=this._objects;if(b&&b.get("length")>0){var e=b?b[0]:null,d=e?e.source:null,a=e?e.firstObject():-1;
if(d&&a>=0){return d.objectAt(a)}}return c?c.firstObject():undefined}.property(),nextObject:function(c,e,b){var d,a;
if(c===0){d=b.objects=[];this.forEach(function(f){d.push(f)},this);b.max=d.length
}d=b.objects;a=d[c];if(c+1>=b.max){b.objects=b.max=null}return a},forEach:function(g,e){var c=this._sets,d=this._objects,b=c?c.length:0,f,a;
for(a=0;a<b;a++){f=c[a];if(f){f.forEachObject(g,e)}}if(d){d.forEach(g,e)}return this
}});SC.SelectionSet.prototype.clone=SC.SelectionSet.prototype.copy;SC.SelectionSet.EMPTY=SC.SelectionSet.create().freeze();
sc_require("mixins/enumerable");sc_require("mixins/array");sc_require("mixins/observable");
sc_require("mixins/delegate_support");SC.SparseArray=SC.Object.extend(SC.Observable,SC.Enumerable,SC.Array,SC.DelegateSupport,{_requestingLength:0,_requestingIndex:0,length:function(){var a=this.delegate;
if(a&&SC.none(this._length)&&a.sparseArrayDidRequestLength){this._requestingLength++;
a.sparseArrayDidRequestLength(this);this._requestingLength--}return this._length||0
}.property().cacheable(),provideLength:function(a){if(SC.none(a)){this._sa_content=null
}if(a!==this._length){this._length=a;if(this._requestingLength<=0){this.enumerableContentDidChange()
}}return this},rangeWindowSize:1,requestedRangeIndex:[],objectAt:function(a){var c=this._sa_content,b;
if(!c){c=this._sa_content=[]}if((b=c[a])===undefined){this.requestIndex(a);b=c[a]
}return b},definedIndexes:function(d){var c=SC.IndexSet.create(),e=this._sa_content,b,a;
if(!e){return c.freeze()}if(d){d.forEach(function(f){if(e[f]!==undefined){c.add(f)
}})}else{a=e.length;for(b=0;b<a;b++){if(e[b]!==undefined){c.add(b)}}}return c.freeze()
},_TMP_RANGE:{},requestIndex:function(b){var c=this.delegate;if(!c){return this}var a=this.get("rangeWindowSize"),e=b;
if(a>1){e=e-Math.floor(e%a)}if(a<1){a=1}this._requestingIndex++;if(c.sparseArrayDidRequestRange){var d=this._TMP_RANGE;
if(this.wasRangeRequested(e)===-1){d.start=e;d.length=a;c.sparseArrayDidRequestRange(this,d);
this.requestedRangeIndex.push(e)}}else{if(c.sparseArrayDidRequestIndex){while(--a>=0){c.sparseArrayDidRequestIndex(this,e+a)
}}}this._requestingIndex--;return this},wasRangeRequested:function(c){var b,a;for(b=0,a=this.requestedRangeIndex.length;
b<a;b++){if(this.requestedRangeIndex[b]===c){return b}}return -1},rangeRequestCompleted:function(b){var a=this.wasRangeRequested(b);
if(a>=0){this.requestedRangeIndex.removeAt(a,1);return YES}return NO},provideObjectsInRange:function(b,e){var c=this._sa_content;
if(!c){c=this._sa_content=[]}var d=b.start,a=b.length;while(--a>=0){c[d+a]=e[a]}if(this._requestingIndex<=0){this.enumerableContentDidChange()
}return this},_TMP_PROVIDE_ARRAY:[],_TMP_PROVIDE_RANGE:{length:1},provideObjectAtIndex:function(c,b){var d=this._TMP_PROVIDE_ARRAY,a=this._TMP_PROVIDE_RANGE;
d[0]=b;a.start=c;return this.provideObjectsInRange(a,d)},objectsDidChangeInRange:function(a){var b=this._sa_content;
if(b){if(a.start===0&&SC.maxRange(a)>=b.length){this._sa_content=null}else{var d=a.start,c=Math.min(d+a.length,b.length);
while(--c>=d){b[c]=undefined}}}this.enumerableContentDidChange(a);return this},indexOf:function(c){var a=this.delegate;
if(a&&a.sparseArrayDidRequestIndexOf){return a.sparseArrayDidRequestIndexOf(this,c)
}else{var b=this._sa_content;if(!b){b=this._sa_content=[]}return b.indexOf(c)}},replace:function(b,g,e){e=e||[];
var c=this.delegate;if(c){if(!c.sparseArrayShouldReplace||!c.sparseArrayShouldReplace(this,b,g,e)){return this
}}var d=this._sa_content;if(!d){d=this._sa_content=[]}d.replace(b,g,e);var a=e?(e.get?e.get("length"):e.length):0;
var f=a-g;if(!SC.none(this._length)){this.propertyWillChange("length");this._length+=f;
this.propertyDidChange("length")}this.enumerableContentDidChange(b,g,f);return this
},reset:function(){this._sa_content=null;this._length=null;this.enumerableContentDidChange();
this.invokeDelegateMethod(this.delegate,"sparseArrayDidReset",this);return this}});
SC.SparseArray.array=function(a){return this.create({_length:a||0})};if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/runtime")
}SC.Locale=SC.Object.extend({init:function(){if(!this.language){SC.Locale._assignLocales()
}if(!this.hasStrings){var c=this._deprecatedLanguageCodes||[];c.push(this.language);
var b=c.length;var a=null;while(!a&&--b>=0){a=String[c[b]]}if(a){this.hasStrings=YES;
this.strings=a}}},hasStrings:NO,strings:{},toString:function(){if(!this.language){SC.Locale._assignLocales()
}return"SC.Locale["+this.language+"]"+SC.guidFor(this)},locWithDefault:function(b,c){var a=this.strings[b];
if(SC.typeOf(a)===SC.T_STRING){return a}else{if(SC.typeOf(c)===SC.T_STRING){return c
}}return b}});SC.Locale.mixin({useAutodetectedLanguage:NO,preferredLanguage:null,createCurrentLocale:function(){var c=(String.useAutodetectedLanguage!==undefined)?String.useAutodetectedLanguage:this.useAutodetectedLanguage;
var b=(String.preferredLanguage!==undefined)?String.preferredLanguage:this.preferredLanguage;
var d=((c)?SC.browser.language:null)||b||SC.browser.language||"en";d=SC.Locale.normalizeLanguage(d);
var a=this.localeClassFor(d);if(d!=this.currentLanguage){this.currentLanguage=d;this.currentLocale=a.create()
}return this.currentLocale},localeClassFor:function(c){c=SC.Locale.normalizeLanguage(c);
var b,a=this.locales[c];if(!a&&((b=c.split("-")[0])!==c)&&(a=this.locales[b])){a=this.locales[c]=a.extend()
}if(!a){a=this.locales[c]=this.locales.en.extend()}return a},define:function(b,c){var a;
if(c===undefined&&(SC.typeOf(b)!==SC.T_STRING)){a=this;c=b}else{a=SC.Locale.localeClassFor(b)
}SC.mixin(a.prototype,c);return a},options:function(){return this.prototype},addStrings:function(b){var a=this.prototype.strings;
if(a){if(!this.prototype.hasOwnProperty("strings")){this.prototype.strings=SC.clone(a)
}}else{a=this.prototype.strings={}}if(b){this.prototype.strings=SC.mixin(a,b)}this.prototype.hasStrings=YES;
return this},_map:{english:"en",french:"fr",german:"de",japanese:"ja",jp:"ja",spanish:"es"},normalizeLanguage:function(a){if(!a){return"en"
}return SC.Locale._map[a.toLowerCase()]||a},_assignLocales:function(){for(var a in this.locales){this.locales[a].prototype.language=a
}},toString:function(){if(!this.prototype.language){SC.Locale._assignLocales()}return"SC.Locale["+this.prototype.language+"]"
},extend:function(){var a=SC.Object.extend.apply(this,arguments);a.addStrings=SC.Locale.addStrings;
a.define=SC.Locale.define;a.options=SC.Locale.options;a.toString=SC.Locale.toString;
return a}});SC.Locale.locales={en:SC.Locale.extend({_deprecatedLanguageCodes:["English"]}),fr:SC.Locale.extend({_deprecatedLanguageCodes:["French"]}),de:SC.Locale.extend({_deprecatedLanguageCodes:["German"]}),ja:SC.Locale.extend({_deprecatedLanguageCodes:["Japanese","jp"]}),es:SC.Locale.extend({_deprecatedLanguageCodes:["Spanish"]})};
SC.stringsFor=function(c,b){var a=SC.Locale.localeClassFor(c);a.addStrings(b);return this
};sc_require("system/locale");SC.stringsFor("English",{"_SC.DateTime.dayNames":"Sunday Monday Tuesday Wednesday Thursday Friday Saturday","_SC.DateTime.abbreviatedDayNames":"Sun Mon Tue Wed Thu Fri Sat","_SC.DateTime.monthNames":"January February March April May June July August September October November December","_SC.DateTime.abbreviatedMonthNames":"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec"});
SC.DROP_ON=1;SC.DROP_BEFORE=2;SC.DROP_AFTER=4;SC.DROP_ANY=7;SC.ALIGN_LEFT="left";
SC.ALIGN_RIGHT="right";SC.ALIGN_CENTER="center";SC.ALIGN_TOP="top";SC.ALIGN_MIDDLE="middle";
SC.ALIGN_BOTTOM="bottom";SC.SAFARI_FOCUS_BEHAVIOR=YES;SC.mixin({data:function(c,b,d){c=(c===window)?"@window":c;
var e=SC.hashFor(c);var a=SC._data_cache;if(!a){SC._data_cache=a={}}var f=a[e];if(b&&!f){a[e]=f={}
}if(f&&(d!==undefined)){f[b]=d}return(b)?f[b]:f},removeData:function(d,c){d=(d===window)?"@window":d;
var e=SC.hashFor(d);var a=SC._data_cache;if(!a){return undefined}var f=a[e];if(!f){return undefined
}var b=(c)?f[c]:f;if(c){delete f[c]}else{delete a[e]}return b}});SC.mixin(Function.prototype,{invokeLater:function(e,a){if(a===undefined){a=1
}var d=this;if(arguments.length>2){var b=SC.$A(arguments).slice(2,arguments.length);
b.unshift(e);var c=d;d=function(){return c.apply(this,b.slice(1))}}return SC.Timer.schedule({target:e,action:d,interval:a})
}});SC.Controller=SC.Object.extend({isEditable:YES});SC.SelectionSupport={hasSelectionSupport:YES,allowsSelection:YES,allowsMultipleSelection:YES,allowsEmptySelection:YES,firstSelectableObject:function(){return this.get("firstObject")
}.property(),selection:function(c,f){var b=this._scsel_selection,g=b?b.get("length"):0,d,e,a;
if((f===undefined)||!this.get("allowsSelection")){f=b}a=(f&&f.isEnumerable)?f.get("length"):0;
if((a>1)&&!this.get("allowsMultipleSelection")){if(g>1){f=SC.SelectionSet.create().addObject(b.get("firstObject")).freeze();
a=1}else{f=b;a=g}}if((a===0)&&!this.get("allowsEmptySelection")){if(g===0){f=this.get("firstSelectableObject");
if(f){f=SC.SelectionSet.create().addObject(f).freeze()}else{f=SC.SelectionSet.EMPTY
}a=f.get("length")}else{f=b;a=g}}if(a===0){f=SC.SelectionSet.EMPTY}f=f.frozenCopy();
this._scsel_selection=f;return f}.property("arrangedObjects","allowsEmptySelection","allowsMultipleSelection","allowsSelection").cacheable(),hasSelection:function(){var a=this.get("selection");
return !!a&&(a.get("length")>0)}.property("selection").cacheable(),selectObjects:function(b,c){if(!b||b.get("length")===0){if(!c){this.set("selection",SC.SelectionSet.EMPTY)
}return this}var a=this.get("selection");if(c&&a){a=a.copy()}else{a=SC.SelectionSet.create()
}a.addObjects(b).freeze();this.set("selection",a);return this},selectObject:function(a,b){if(a===null){if(!b){this.set("selection",null)
}return this}else{return this.selectObjects([a],b)}},deselectObjects:function(b){if(!b||b.get("length")===0){return this
}var a=this.get("selection");if(!a||a.get("length")===0){return this}a=a.copy().removeObjects(b).freeze();
this.set("selection",a.freeze());return this},deselectObject:function(a){if(!a){return this
}else{return this.deselectObjects([a])}},updateSelectionAfterContentChange:function(){var a=this.get("arrangedObjects");
var b=this.get("selection");var d=this.get("allowsEmptySelection");var c;c=b.indexSetForSource(a);
if((c&&(c.get("length")!==b.get("length")))||(!c&&(b.get("length")>0))){b=b.copy().constrain(a).freeze();
this.set("selection",b)}if((b.get("length")===0)&&(a.get("length")>0)&&!d){this.selectObject(this.get("firstSelectableObject"),NO)
}return this}};sc_require("controllers/controller");sc_require("mixins/selection_support");
SC.ArrayController=SC.Controller.extend(SC.Array,SC.SelectionSupport,{content:null,isEditable:YES,orderBy:null,allowsSingleContent:YES,destroyOnRemoval:NO,arrangedObjects:function(){return this
}.property().cacheable(),canRemoveContent:function(){var b=this.get("content"),a;
a=!!b&&this.get("isEditable")&&this.get("hasContent");if(a){return !b.isEnumerable||(SC.typeOf(b.removeObject)===SC.T_FUNCTION)
}else{return NO}}.property("content","isEditable","hasContent"),canReorderContent:function(){var b=this.get("content"),a;
a=!!b&&this.get("isEditable")&&!this.get("orderBy");return a&&!!b.isSCArray}.property("content","isEditable","orderBy"),canAddContent:function(){var b=this.get("content"),a;
a=b&&this.get("isEditable")&&b.isEnumerable;if(a){return(SC.typeOf(b.addObject)===SC.T_FUNCTION)||(SC.typeOf(b.pushObject)===SC.T_FUNCTION)
}else{return NO}}.property("content","isEditable"),hasContent:function(){var a=this.get("content");
return !!a&&(!!a.isEnumerable||!!this.get("allowsSingleContent"))}.property("content","allowSingleContent"),status:function(){var b=this.get("content"),a=b?b.get("status"):null;
return a?a:SC.Record.READY}.property().cacheable(),addObject:function(a){if(!this.get("canAddContent")){throw"%@ cannot add content".fmt(this)
}var b=this.get("content");if(b.isSCArray){b.pushObject(a)}else{if(b.addObject){b.addObject(a)
}else{throw"%@.content does not support addObject".fmt(this)}}return this},removeObject:function(a){if(!this.get("canRemoveContent")){throw"%@ cannot remove content".fmt(this)
}var b=this.get("content");if(b.isEnumerable){b.removeObject(a)}else{this.set("content",null)
}if(this.get("destroyOnRemoval")&&a.destroy){a.destroy()}return this},length:function(){var a=this._scac_observableContent();
return a?a.get("length"):0}.property().cacheable(),objectAt:function(a){var b=this._scac_observableContent();
return b?b.objectAt(a):undefined},replace:function(g,f,d){if(!d||d.get("length")===0){if(!this.get("canRemoveContent")){throw"%@ cannot remove objects from the current content".fmt(this)
}}else{if(!this.get("canReorderContent")){throw"%@ cannot add or reorder the current content".fmt(this)
}}var c=this.get("content");var b=[],a,e;if(this.get("destroyOnRemoval")){for(a=0;
a<f;a++){b.push(c.objectAt(a+g))}}if(c){c.replace(g,f,d)}for(a=0,e=b.length;a<e;a++){b[a].destroy()
}b=null;return this},indexOf:function(b,a){var c=this._scac_observableContent();return c?c.indexOf(b,a):-1
},init:function(){arguments.callee.base.apply(this,arguments);this._scac_contentDidChange()
},_scac_cached:NO,_scac_observableContent:function(){var b=this._scac_cached;if(b!==NO){return b
}var e=this.get("content"),f,d,c,a;if(SC.none(e)){return this._scac_cached=[]}if(!e.isEnumerable){b=this.get("allowsSingleContent")?[e]:[];
return(this._scac_cached=b)}f=this.get("orderBy");if(!f){if(e.isSCArray){return(this._scac_cached=e)
}else{throw"%@.orderBy is required for unordered content".fmt(this)}}switch(SC.typeOf(f)){case SC.T_STRING:f=[f];
break;case SC.T_FUNCTION:d=f;break;case SC.T_ARRAY:break;default:throw"%@.orderBy must be Array, String, or Function".fmt(this)
}if(!d){a=f.get("length");d=function(j,h){var g=0,i=0,k,m,l,n;for(g=0;(g<a)&&(i===0);
g++){k=f.objectAt(g);n=NO;if(k.indexOf("ASC")>-1){k=k.split("ASC ")[1]}else{if(k.indexOf("DESC")>-1){k=k.split("DESC ")[1];
n=YES}}if(!j){m=j}else{if(j.isObservable){m=j.get(k)}else{m=j[k]}}if(!h){l=h}else{if(h.isObservable){l=h.get(k)
}else{l=h[k]}}i=SC.compare(m,l);if(n){i=(-1)*i}}return i}}b=[];e.forEach(function(g){b.push(g)
});b.sort(d);d=null;return(this._scac_cached=b)},_scac_contentDidChange:function(){this._scac_cached=NO;
var h=this.get("content"),d=!!this.get("orderBy"),i=this._scac_content,a=this._scac_length||0,g=this._scac_rangeObserver,b=this._scac_rangeDidChange,f=this._scac_enumerableDidChange,c=this._scac_contentStatusDidChange,e;
if(i===h){return this}if(i){if(g&&i.isSCArray){i.removeRangeObserver(g)}else{if(i.isEnumerable){i.removeObserver("[]",this,f)
}}i.removeObserver("status",this,c)}g=null;this._scac_cached=NO;this._scac_content=h;
if(h){if(!d&&h.isSCArray){g=h.addRangeObserver(null,this,b)}else{if(h.isEnumerable){h.addObserver("[]",this,f)
}}e=h.isEnumerable?h.get("length"):1;h.addObserver("status",this,c)}else{e=SC.none(h)?0:1
}this._scac_rangeObserver=g;this._scac_length=e;this._scac_contentStatusDidChange();
this.enumerableContentDidChange(0,e,e-a);this.updateSelectionAfterContentChange()
}.observes("content"),_scac_enumerableDidChange:function(){var a=this.get("content"),c=a?a.get("length"):0,b=this._scac_length;
this._scac_length=c;this.beginPropertyChanges();this._scac_cached=NO;this.enumerableContentDidChange(0,c,c-b);
this.endPropertyChanges();this.updateSelectionAfterContentChange()}.observes("orderBy"),_scac_rangeDidChange:function(e,d,b,a){if(b!=="[]"){return
}var c=this.get("content");this._scac_length=c.get("length");this._scac_cached=NO;
if(a){this.beginPropertyChanges();a.forEachRange(function(g,f){this.enumerableContentDidChange(g,f,0)
},this);this.endPropertyChanges();this.updateSelectionAfterContentChange()}},_scac_contentStatusDidChange:function(){this.notifyPropertyChange("status")
}});require("controllers/controller");SC.ObjectController=SC.Controller.extend({content:null,allowsMultipleContent:NO,hasContent:function(){return !SC.none(this.get("observableContent"))
}.property("observableContent"),isEditable:YES,observableContent:function(){var b=this.get("content"),a,c;
if(b&&b.isEnumerable){a=b.get("length");c=this.get("allowsMultipleContent");if(a===1){b=b.firstObject()
}else{if(a===0||!c){b=null}}if(b&&!c&&b.isEnumerable){b=null}}return b}.property("content","allowsMultipleContent").cacheable(),destroy:function(){var a=this.get("observableContent");
if(a&&SC.typeOf(a.destroy)===SC.T_FUNCTION){a.destroy()}this.set("content",null);
return this},contentPropertyDidChange:function(b,a){if(a==="*"){this.allPropertiesDidChange()
}else{this.notifyPropertyChange(a)}},unknownProperty:function(b,d){if(b==="content"){if(d!==undefined){this.content=d
}return this.content}var c=this.get("observableContent"),f,e,a;if(c===null||c===undefined){return undefined
}if(d===undefined){if(c.isEnumerable){d=c.getEach(b);f=d.get("length");if(f>0){a=YES;
e=d.objectAt(0);while((--f>0)&&a){if(e!==d.objectAt(f)){a=NO}}if(a){d=e}}else{d=undefined
}}else{d=(c.isObservable)?c.get(b):c[b]}}else{if(!this.get("isEditable")){throw"%@.%@ is not editable".fmt(this,b)
}if(c.isEnumerable){c.setEach(b,d)}else{if(c.isObservable){c.set(b,d)}else{c[b]=d
}}}return d},init:function(){arguments.callee.base.apply(this,arguments);if(this.get("content")){this._scoc_contentDidChange()
}if(this.get("observableContent")){this._scoc_observableContentDidChange()}},_scoc_contentDidChange:function(){var b=this._scoc_content,c=this.get("content");
if(b!==c){this._scoc_content=c;var a=this._scoc_enumerableContentDidChange;if(b&&b.isEnumerable){b.removeObserver("[]",this,a)
}if(c&&c.isEnumerable){c.addObserver("[]",this,a)}}}.observes("content"),_scoc_observableContentDidChange:function(){var b=this._scoc_observableContent,d=this.get("observableContent"),a=this.contentPropertyDidChange,c=this._scoc_enumerableContentDidChange;
if(b===d){return this}this._scoc_observableContent=d;if(b){if(b.isEnumerable){b.removeObserver("[]",this,c)
}else{if(b.isObservable){b.removeObserver("*",this,a)}}}if(d){if(d.isEnumerable){d.addObserver("[]",this,c)
}else{if(d.isObservable){d.addObserver("*",this,a)}}}if((b&&b.isEnumerable)||(d&&d.isEnumerable)){this._scoc_enumerableContentDidChange()
}else{this.contentPropertyDidChange(d,"*")}}.observes("observableContent"),_scoc_enumerableContentDidChange:function(){var b=this.get("observableContent"),c=this._scoc_observableContentItems,a=this.contentPropertyDidChange;
if(c){c.forEach(function(d){if(d.isObservable){d.removeObserver("*",this,a)}},this);
c.clear()}if(b&&b.isEnumerable){if(!c){c=SC.Set.create()}b.forEach(function(d){if(c.contains(d)){return
}c.add(d);if(d.isObservable){d.addObserver("*",this,a)}},this)}else{c=null}this._scoc_observableContentItems=c;
this.contentPropertyDidChange(b,"*");return this}});SC.TreeItemContent={isTreeItemContent:YES,treeItemChildren:null,treeItemIsExpanded:YES,treeItemIsGrouped:NO,treeItemDisclosureState:function(b,a){return this.get("treeItemIsExpanded")?SC.BRANCH_OPEN:SC.BRANCH_CLOSED
},treeItemCollapse:function(b,a){this.setIfChanged("treeItemIsExpanded",NO)},treeItemExpand:function(b,a){this.setIfChanged("treeItemIsExpanded",YES)
},treeItemBranchIndexes:function(e,c){var d=this.get("treeItemChildren"),b,g,a,f;
if(!d){return null}b=SC.IndexSet.create();g=d.get("length");for(a=0;a<g;a++){if(!(f=d.objectAt(a))){continue
}if(!f.get("treeItemChildren")){continue}if(f.treeItemDisclosureState(this,a)!==SC.LEAF_NODE){b.add(a)
}}return b.get("length")>0?b:null}};SC.BRANCH_OPEN=17;SC.BRANCH_CLOSED=18;SC.LEAF_NODE=32;
SC.CollectionContent={isCollectionContent:YES,contentIndexIsSelected:function(b,c,a){var d=b.get("selection");
return d?d.contains(c,a):NO},contentIndexIsEnabled:function(b,c,a){return b.get("isEnabled")
},contentGroupIndexes:function(a,b){return null},contentIndexIsGroup:function(b,c,a){return NO
},contentIndexOutlineLevel:function(b,c,a){return -1},contentIndexDisclosureState:function(b,c,a){return SC.LEAF_NODE
},contentIndexExpand:function(b,c,a){console.log("contentIndexExpand(%@, %@, %@)".fmt(b,c,a))
},contentIndexCollapse:function(b,c,a){console.log("contentIndexCollapse(%@, %@, %@)".fmt(b,c,a))
}};sc_require("mixins/tree_item_content");sc_require("mixins/collection_content");
SC.TreeItemObserver=SC.Object.extend(SC.Array,SC.CollectionContent,{item:null,delegate:null,parentObserver:null,parentItem:function(){var a=this.get("parentObserver");
return a?a.get("item"):null}.property("parentObserver").cacheable(),index:null,outlineLevel:0,children:null,disclosureState:SC.BRANCH_OPEN,branchIndexes:function(){var e=this.get("item"),b,f,a,d,c;
if(!e){return SC.IndexSet.EMPTY}else{if(e.isTreeItemContent){f=this.get("parentItem");
a=this.get("index");return e.treeItemBranchIndexes(f,a)}else{d=this.get("children");
if(!d){return null}c=SC.IndexSet.create();b=d.get("length");f=e;for(a=0;a<b;a++){if(!(e=d.objectAt(a))){continue
}if(!this._computeChildren(e,f,a)){continue}if(this._computeDisclosureState(e,f,a)!==SC.LEAF_NODE){c.add(a)
}}return c.get("length")>0?c:null}}}.property("children").cacheable(),isHeaderVisible:function(){return !!this.get("parentObserver")
}.property("parentObserver").cacheable(),length:0,objectAt:function(d){var a=this.get("length"),f=this.get("item"),b=this._objectAtCache,h=d,g=0,c,e;
if(d>=a){return undefined}if(this.get("isHeaderVisible")){if(d===0){return f}else{h--
}}f=null;if(!b){b=this._objectAtCache=[]}if((f=b[d])!==undefined){return f}e=this.get("children");
if(!e){return undefined}if(c=this.get("branchIndexes")){c.forEach(function(l){if(f||(l>h)){return
}var k=this.branchObserverAt(l),j;if(!k){return}j=k.get("length");if(l+j>h){f=k.objectAt(h-l);
h=-1}else{h-=j-1}},this)}if(h>=0){f=e.objectAt(h)}b[d]=f;return f},replace:function(a,b,j,d){var i=a,g=null,e,f,h;
if(d===undefined){d=SC.DROP_BEFORE}if(this.get("isHeaderVisible")){i--}if(i<0){throw"Tree Item cannot replace itself"
}if(e=this.get("branchIndexes")){e.forEach(function(k){if(g||(k>=i)){return}if(!(g=this.branchObserverAt(k))){return
}f=g.get("length");if((k+f===i)&&d===SC.DROP_AFTER){i-=k}else{if(k+f>i){i-=k}else{i-=f-1;
g=null}}},this)}if(g){g.replace(i,b,j,d);return this}h=i+b;if(b>1&&e){e.forEachIn(i,e.get("max")-i,function(k){if(k>h){return
}if(!(g=this.branchObserverAt(k))){return}f=g.get("length");h-=f-1},this)}b=h-i;var c=this.get("children");
if(!c){throw"cannot replace() tree item with no children"}if((b<0)||(h>c.get("length"))){throw"replace() range must lie within a single tree item"
}c.replace(i,b,j,d);return this},observerContentDidChange:function(g,f,e){this.invalidateBranchObserversAt(g);
this._objectAtCache=this._outlineLevelCache=null;this._disclosureStateCache=null;
this._contentGroupIndexes=NO;this.notifyPropertyChange("branchIndexes");var b=this.get("length"),c=this._computeLength(),a=this.get("parentObserver"),d;
if(b!==c){this.set("length",c)}if(!this._notifyParent){return this}if(a){d=SC.IndexSet.create(this.get("index"));
a._childrenRangeDidChange(a.get("children"),null,"[]",d)}else{if(b===c){f=this.expandChildIndex(g+f);
g=this.expandChildIndex(g);f=f-g;e=0}else{g=this.expandChildIndex(g);f=c-g;e=c-b}this.enumerableContentDidChange(g,f,e)
}},expandChildIndex:function(c){var b=c;if(this.get("isHeaderVisible")){c++}var a=this.get("branchIndexes");
if(!a||a.get("length")===0){return b}a.forEachIn(0,c,function(d){b+=this.branchObserverAt(d).get("length")-1
},this);return b},_contentGroupIndexes:NO,contentGroupIndexes:function(g,e){if(e!==this){return null
}var f=this._contentGroupIndexes;if(f!==NO){return f}if(this.get("parentObserver")){return null
}var j=this.get("item"),i,b,d,h,c,a;if(j&&j.isTreeItemContent){i=j.get("treeItemIsGrouped")
}else{i=!!this.delegate.get("treeItemIsGrouped")}if(i){f=SC.IndexSet.create();b=this.get("branchIndexes");
a=this.get("children");d=a?a.get("length"):0;h=c=0;if(b){b.forEach(function(l){f.add(h,(l+1)-c);
h+=(l+1)-c;c=l+1;var k=this.branchObserverAt(l);if(k){h+=k.get("length")-1}},this)
}if(c<d){f.add(h,d-c)}}else{f=null}this._contentGroupIndexes=f;return f},contentIndexIsGroup:function(b,d,a){var c=this.contentGroupIndexes(b,d);
return c?c.contains(a):NO},contentIndexOutlineLevel:function(j,g,e){if(g!==this){return -1
}var a=this._outlineLevelCache;if(a&&(a[e]!==undefined)){return a[e]}if(!a){a=this._outlineLevelCache=[]
}var f=this.get("length"),k=e,d=0,h=null,c,b,i;if(e>=f){return -1}if(this.get("isHeaderVisible")){if(e===0){return a[0]=this.get("outlineLevel")-1
}else{k--}}if(c=this.get("branchIndexes")){c.forEach(function(n){if((h!==null)||(n>k)){return
}var m=this.branchObserverAt(n),l;if(!m){return}l=m.get("length");if(n+l>k){h=m.contentIndexOutlineLevel(j,m,k-n);
k=-1}else{k-=l-1}},this)}if(k>=0){h=this.get("outlineLevel")}a[e]=h;return h},contentIndexDisclosureState:function(j,g,e){if(g!==this){return -1
}var a=this._disclosureStateCache;if(a&&(a[e]!==undefined)){return a[e]}if(!a){a=this._disclosureStateCache=[]
}var f=this.get("length"),k=e,d=0,h=null,c,b,i;if(e>=f){return SC.LEAF_NODE}if(this.get("isHeaderVisible")){if(e===0){return a[0]=this.get("disclosureState")
}else{k--}}if(c=this.get("branchIndexes")){c.forEach(function(n){if((h!==null)||(n>k)){return
}var m=this.branchObserverAt(n),l;if(!m){return}l=m.get("length");if(n+l>k){h=m.contentIndexDisclosureState(j,m,k-n);
k=-1}else{k-=l-1}},this)}if(k>=0){h=SC.LEAF_NODE}a[e]=h;return h},contentIndexExpand:function(b,f,a){var c,g=a,d,e;
if(f!==this){return}if(this.get("isHeaderVisible")){if(a===0){this._expand(this.get("item"));
return}else{g--}}if(c=this.get("branchIndexes")){c.forEach(function(k){if(k>=g){return
}var j=this.branchObserverAt(k),h;if(!j){return}h=j.get("length");if(k+h>g){j.contentIndexExpand(b,j,g-k);
g=-1}else{g-=h-1}},this)}if(g>=0){d=this.get("children");e=d?d.objectAt(g):null;if(e){this._expand(e,this.get("item"),g)
}}},contentIndexCollapse:function(b,f,a){var c,d,e,g=a;if(f!==this){return}if(this.get("isHeaderVisible")){if(a===0){this._collapse(this.get("item"));
return}else{g--}}if(c=this.get("branchIndexes")){c.forEach(function(k){if(k>=g){return
}var j=this.branchObserverAt(k),h;if(!j){return}h=j.get("length");if(k+h>g){j.contentIndexCollapse(b,j,g-k);
g=-1}else{g-=h-1}},this)}if(g>=0){d=this.get("children");e=d?d.objectAt(g):null;if(e){this._collapse(e,this.get("item"),g)
}}},branchObserverAt:function(d){var g=this._branchObserversByIndex,c=this._branchObserverIndexes,e,h,b,j,a,f,i;
if(!g){g=this._branchObserversByIndex=[]}if(!c){c=this._branchObserverIndexes=SC.IndexSet.create()
}if(e=g[d]){return e}a=this.get("children");j=a?a.objectAt(d):null;if(!j){return null
}g[d]=e=SC.TreeItemObserver.create({item:j,delegate:this.get("delegate"),parentObserver:this,index:d,outlineLevel:this.get("outlineLevel")+1});
c.add(d);return e},invalidateBranchObserversAt:function(c){var b=this._branchObserversByIndex,a=this._branchObserverIndexes;
if(!b||b.length<=c){return this}if(c<0){c=0}a.forEachIn(c,a.get("max")-c,function(e){var d=b[e];
if(d){d.destroy()}},this);b.length=c;return this},init:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("item");if(!a){throw"SC.TreeItemObserver.item cannot be null"}a.addObserver("*",this,this._itemPropertyDidChange);
this._itemPropertyDidChange(a,"*");this._notifyParent=YES},destroy:function(){this.invalidateBranchObserversAt(0);
this._objectAtCache=null;var c=this.get("item");if(c){c.removeObserver("*",this,this._itemPropertyDidChange)
}var a=this._children,b=this._childrenRangeObserver;if(a&&b){a.removeRangeObserver(b)
}arguments.callee.base.apply(this,arguments)},_itemPropertyDidChange:function(f,b){var a=this.get("children"),e=this.get("disclosureState"),d=this.get("item"),c;
this.beginPropertyChanges();c=this._computeDisclosureState(d);if(e!==c){this.set("disclosureState",c)
}c=this._computeChildren(d);if(a!==c){this.set("children",c)}this.endPropertyChanges()
},_childrenDidChange:function(){var c=this.get("disclosureState"),d=c===SC.BRANCH_OPEN?this.get("children"):null,b=this._children,a=this._childrenRangeObserver;
if(b===d){return this}if(a){b.removeRangeObserver(a)}if(d){this._childrenRangeObserver=d.addRangeObserver(null,this,this._childrenRangeDidChange)
}else{this._childrenRangeObserver=null}this._children=d;this._childrenRangeDidChange(d,null,"[]",null)
}.observes("children","disclosureState"),_childrenRangeDidChange:function(f,i,h,d){var a=this.get("children"),e=a?a.get("length"):0,c=d?d.get("min"):0,g=d?d.get("max"):e,b=this._childrenLen||0;
this._childrenLen=e;this.observerContentDidChange(c,g-c,e-b)},_computeDisclosureState:function(d,e,b){var c,a;
if(!d||!this._computeChildren(d)){return SC.LEAF_NODE}else{if(d.isTreeItemContent){if(e===undefined){e=this.get("parentItem")
}if(b===undefined){b=this.get("index")}return d.treeItemDisclosureState(e,b)}else{c=this._treeItemIsExpandedKey;
if(!c){a=this.get("delegate");c=a?a.get("treeItemIsExpandedKey"):"treeItemIsExpanded";
this._treeItemIsExpandedKey=c}return d.get(c)?SC.BRANCH_OPEN:SC.BRANCH_CLOSED}}},_collapse:function(d,e,b){var c,a;
if(!d||!this._computeChildren(d)){return this}else{if(d.isTreeItemContent){if(e===undefined){e=this.get("parentItem")
}if(b===undefined){b=this.get("index")}d.treeItemCollapse(e,b)}else{c=this._treeItemIsExpandedKey;
if(!c){a=this.get("delegate");c=a?a.get("treeItemIsExpandedKey"):"treeItemIsExpanded";
this._treeItemIsExpandedKey=c}d.setIfChanged(c,NO)}}return this},_expand:function(d,e,b){var c,a;
if(!d||!this._computeChildren(d)){return this}else{if(d.isTreeItemContent){if(e===undefined){e=this.get("parentItem")
}if(b===undefined){b=this.get("index")}d.treeItemExpand(e,b)}else{c=this._treeItemIsExpandedKey;
if(!c){a=this.get("delegate");c=a?a.get("treeItemIsExpandedKey"):"treeItemIsExpanded";
this._treeItemIsExpandedKey=c}d.setIfChanged(c,YES)}}return this},_computeChildren:function(c){var a,b;
if(!c){return null}else{if(c.isTreeItemContent){return c.get("treeItemChildren")}else{b=this._treeItemChildrenKey;
if(!b){a=this.get("delegate");b=a?a.get("treeItemChildrenKey"):"treeItemChildren";
this._treeItemChildrenKey=b}return c.get(b)}}},_computeLength:function(){var b=this.get("isHeaderVisible")?1:0,d=this.get("disclosureState"),c=this.get("children"),a;
if((d===SC.BRANCH_OPEN)&&c){b+=c.get("length");if(a=this.get("branchIndexes")){a.forEach(function(e){var f=this.branchObserverAt(e);
b+=f.get("length")-1},this)}}return b}});sc_require("controllers/object");sc_require("mixins/selection_support");
sc_require("private/tree_item_observer");SC.TreeController=SC.ObjectController.extend(SC.SelectionSupport,{treeItemIsGrouped:NO,treeItemIsExpandedKey:"treeItemIsExpanded",treeItemChildrenKey:"treeItemChildren",arrangedObjects:function(){var a,b=this.get("content");
if(b){a=SC.TreeItemObserver.create({item:b,delegate:this})}else{a=null}this._sctc_arrangedObjects=a;
return a}.property().cacheable(),_sctc_invalidateArrangedObjects:function(){this.propertyWillChange("arrangedObjects");
var a=this._sctc_arrangedObjects;if(a){a.destroy()}this._sctc_arrangedObjects=null;
this.propertyDidChange("arrangedObjects")}.observes("content","treeItemIsExpandedKey","treeItemChildrenKey","treeItemIsGrouped"),_sctc_arrangedObjectsContentDidChange:function(){this.updateSelectionAfterContentChange()
}.observes("*arrangedObjects.[]"),firstSelectableObject:function(){var d=this.get("arrangedObjects"),c,b,a=0;
if(!d){return null}c=d.contentGroupIndexes(null,d);b=d.get("length");while(c.contains(a)&&(a<b)){a++
}return a>=b?null:d.objectAt(a)}.property()});SC.mixin(SC.Object.prototype,{invokeLater:function(b,a){if(a===undefined){a=1
}var e=b,c,d;if(arguments.length>2){c=SC.$A(arguments).slice(2);if(SC.typeOf(e)===SC.T_STRING){e=this[b]
}d=e;e=function(){return d.apply(this,c)}}return SC.Timer.schedule({target:this,action:e,interval:a})
},invokeWith:function(b,c,d){if(d===undefined){d=c;c=this}if(!c){c=this}if(SC.typeOf(d)===SC.T_STRING){d=c[d]
}var a=this.getPath(b);d.call(c,a,this);return this}});SC.RunLoop=SC.RunLoop.extend({startTime:function(){if(!this._start){this._start=Date.now()
}return this._start}.property(),endRunLoop:function(){this.fireExpiredTimers();var a=arguments.callee.base.apply(this,arguments);
this.scheduleNextTimeout();return a},scheduleTimer:function(b,a){this._timerQueue=b.removeFromTimerQueue(this._timerQueue);
this._timerQueue=b.scheduleInTimerQueue(this._timerQueue,a);return this},cancelTimer:function(a){this._timerQueue=a.removeFromTimerQueue(this._timerQueue);
return this},TIMER_ARRAY:[],fireExpiredTimers:function(){if(!this._timerQueue||this._firing){return NO
}var d=this.get("startTime"),e=this.TIMER_ARRAY,c,b,a;this._firing=YES;this._timerQueue=this._timerQueue.collectExpiredTimers(e,d);
b=e.length;for(c=0;c<b;c++){e[c].fire()}a=e.length>0;e.length=0;this._firing=NO;return a
},scheduleNextTimeout:function(){var d=this._timerQueue;var b=NO;if(!d){if(this._timeout){clearTimeout(this._timeout)
}}else{var c=d._timerQueueRunTime;if(this._timeoutAt!==c){if(this._timeout){clearTimeout(this._timeout)
}var a=Math.max(0,c-Date.now());this._timeout=setTimeout(this._timeoutDidFire,a);
this._timeoutAt=c}b=YES}return b},_timeoutDidFire:function(){var a=SC.RunLoop.currentRunLoop;
a._timeout=a._timeoutAt=null;SC.RunLoop.begin().end()}});SC.RunLoop.currentRunLoop=SC.RunLoop.create();
SC.Gesture=SC.Object.extend({name:"gesture",touchIsInGesture:function(b,a){return NO
},touchStart:function(a){},touchesDragged:function(a,b){},touchEnd:function(a){},start:function(){if(!this.get("isActive")){this.set("isActive",YES);
var b=SC.$A(arguments);b.unshift(this);var a=this.name+"Start";if(this.view[a]){this.view[a].apply(this.view,b)
}}},end:function(){if(this.get("isActive")){this.set("isActive",NO);var b=SC.$A(arguments);
b.unshift(this);var a=this.name+"End";if(this.view[a]){this.view[a].apply(this.view,b)
}}},change:function(){if(this.get("isActive")){var b=SC.$A(arguments);b.unshift(this);
var a=this.name+"Changed";if(this.view[a]){this.view[a].apply(this.view,b)}}},cancel:function(){if(this.get("isActive")){this.set("isActive",NO);
var b=SC.$A(arguments);b.unshift(this);var a=this.name+"Cancelled";if(this.view[a]){this.view[a].apply(this.view,b)
}}},take:function(a){this.invokeLater("_take",0,a)},_take:function(a){a.isTaken=YES;
if(a.touchResponder&&a.touchResponder!==this){a.makeTouchResponder(this,YES)}},release:function(a){a.isTaken=NO;
a.makeTouchResponder(a.nextTouchResponder)},trigger:function(){var b=SC.$A(arguments);
b.unshift(this);var a=this.name;if(this.view[a]){this.view[a].apply(this.view,b)}},discardTouch:function(a){a.isTaken=YES;
a.makeTouchResponder(null)},statusForTouch:function(c){var b=SC.guidFor(c.view)+this.name;
var a=c[b];if(!a){a=c[b]={}}return a},unassignedTouchDidStart:function(a){if(a.isTaken){return
}if(this.touchIsInGesture(a,this.statusForTouch(a))){this.take(a)}},unassignedTouchesDidChange:function(a,b){b.forEach(function(c){if(c.isTaken){return
}if(this.touchIsInGesture(c,this.statusForTouch(c))){this.take(c)}},this)},unassignedTouchDidEnd:function(a){},interestedInTouch:function(b){var a=this.statusForTouch(b);
if(a.isInterested){return}a.isInterested=YES;b.isInteresting++},uninterestedInTouch:function(b){var a=this.statusForTouch(b);
if(!a.isInterested){return}a.isInterested=NO;b.isInteresting--}});sc_require("system/gesture");
SC.PinchGesture=SC.Gesture.extend({name:"pinch",acceptsMultitouch:YES,scale:1,unassignedTouchesDidChange:function(a,b){if(b.length==2){this.take(b[0]);
this.take(b[1])}},touchStart:function(b){var a=b.touchesForResponder(this);if(!a||a.length==0){return YES
}else{if(a.length==1){this.start([a[0],b]);return YES}else{return NO}}},touchesDragged:function(a,c){var d=c.firstObject(),b=d.averagedTouchesForView(this);
if(b.touchCount==2){if(!this._startDistance){this._startDistance=b.d}this.scale=b.d/this._startDistance;
this.change(c,this.scale)}},touchEnd:function(b){this._startDistance=null;var a=b.touchesForResponder(this);
this.trigger(a,this.scale);this.end(a,this.scale);if(a){a.forEach(function(c){this.release(c)
},this)}}});sc_require("system/gesture");SC.SWIPE_HORIZONTAL="X";SC.SWIPE_VERTICAL="Y";
SC.SWIPE_ANY="XY";SC.SWIPE_LEFT="LEFT";SC.SWIPE_RIGHT="RIGHT";SC.SWIPE_UP="UP";SC.SWIPE_DOWN="DOWN";
SC.SwipeGesture=SC.Gesture.extend({name:"swipe",acceptsMultitouch:YES,direction:SC.SWIPE_HORIZONTAL,currentDirection:null,startDistance:5,swipeDistance:40,tolerance:0.5,touchIsInGesture:function(g,e){if(!e.flunked){var h=this.get("direction"),b=this.get("currentDirection"),a=this.get("startDistance"),f=g.pageX-g.startX,c=g.pageY-g.startY;
if(Math.abs(f)>a||Math.abs(c)>a){if(!b){if(h==SC.SWIPE_ANY){if(f>c){b=SC.SWIPE_HORIZONTAL
}else{if(c>f){b=SC.SWIPE_VERTICAL}else{return NO}}}else{b=h}this.set("currentDirection",b)
}var j=(b==SC.SWIPE_HORIZONTAL)?f:c,i=(b==SC.SWIPE_HORIZONTAL)?c:f;if(Math.abs(j)*this.get("tolerance")>Math.abs(i)){return YES
}}}return NO},touchStart:function(e){var b=this.get("currentDirection"),c=e["page"+b]-e["start"+b],a;
if(c<0){a=(b===SC.SWIPE_HORIZONTAL)?SC.SWIPE_LEFT:SC.SWIPE_UP}else{a=(b===SC.SWIPE_HORIZONTAL)?SC.SWIPE_RIGHT:SC.SWIPE_DOWN
}this.start(e,a,c);return YES},touchesDragged:function(j,e){var c=e.firstObject();
var f=this.get("currentDirection"),a=(f===SC.SWIPE_HORIZONTAL?"Y":"X"),i=c["page"+f]-c["start"+f],g=c["page"+a]-c["start"+a],h;
if(i<0){h=(f===SC.SWIPE_HORIZONTAL)?SC.SWIPE_LEFT:SC.SWIPE_UP}else{h=(f===SC.SWIPE_HORIZONTAL)?SC.SWIPE_RIGHT:SC.SWIPE_DOWN
}if(Math.abs(i)<this.get("startDistance")||Math.abs(i)*this.get("tolerance")<Math.abs(g)){this.release(c);
var b=c.touchesForResponder(this);if(!b||b.length==0){this.end(c,h,i)}}else{this.change(c,h,i)
}},touchEnd:function(h){var f=this.get("currentDirection"),e=(f===SC.SWIPE_HORIZONTAL?"Y":"X"),g=h["page"+f]-h["start"+f],b=h["page"+e]-h["start"+e],a;
if(g<0){a=(f===SC.SWIPE_HORIZONTAL)?SC.SWIPE_LEFT:SC.SWIPE_UP}else{a=(f===SC.SWIPE_HORIZONTAL)?SC.SWIPE_RIGHT:SC.SWIPE_DOWN
}if(Math.abs(g)>this.get("swipeDistance")||Math.abs(g)*this.get("tolerance")<Math.abs(b)){this.trigger(h,a)
}this.end(h,a,g);this.set("currentDirection",null);var c=h.touchesForResponder(this);
if(c){c.forEach(function(d){this.release(d)},this)}},cancel:function(){arguments.callee.base.apply(this,arguments);
this.set("currentDirection",null)}});
/* @license

Portions of this software are copyright Yahoo, Inc, used under the following license:

Software License Agreement (BSD License)
Copyright (c) 2009, Yahoo! Inc.
All rights reserved.
Redistribution and use of this software in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the
following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of Yahoo! Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission of Yahoo! Inc.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Sources of Intellectual Property Included in the YUI Library
Where not otherwise indicated, all YUI content is authored by Yahoo! engineers and consists of Yahoo!-owned intellectual property. YUI is issued by Yahoo! under the BSD license above. In some specific instances, YUI will incorporate work done by developers outside of Yahoo! with their express permission.

*/
SC.AutoMixin={autoMixins:[],createChildView:function(b,c){if(!c){c={}
}c.owner=c.parentView=this;c.isVisibleInWindow=this.get("isVisibleInWindow");if(!c.page){c.page=this.page
}var a=this.get("autoMixins");a.push(c);b=b.create.apply(b,a);return b}};SC.AutoResize={autoResizeField:"value",shouldAutoResize:YES,shouldMeasureSize:YES,shouldResizeWidth:YES,shouldResizeHeight:NO,measuredSize:{width:0,height:0},autoSizePadding:10,initMixin:function(){this.addObserver(this.get("autoResizeField"),this,"_scar_valueDidChange")
},measureSize:function(){if(!this.get("shouldMeasureSize")){return}var a=this.get("layer");
if(!a){return}var b=SC.metricsForString(this.get(this.get("autoResizeField")),a);
this.set("measuredSize",b);if(this.get("shouldAutoResize")){if(this.get("shouldResizeWidth")){this.adjust("width",b.width+this.get("autoSizePadding"))
}if(this.get("shouldResizeHeight")){this.adjust("height",b.height+this.get("autoSizePadding"))
}}},_scar_valueDidChange:function(){arguments.callee.base.apply(this,arguments);this.measureSize()
},didAppendToDocument:function(){arguments.callee.base.apply(this,arguments);this.invokeLast("measureSize")
},didCreateLayer:function(){arguments.callee.base.apply(this,arguments);this.invokeLast("measureSize")
}};SC.Button={value:null,toggleOnValue:YES,toggleOffValue:NO,localize:NO,localizeBindingDefault:SC.Binding.bool(),title:"",contentTitleKey:null,icon:null,contentIconKey:null,needsEllipsis:YES,displayTitle:function(){var a=this.get("title");
return(a&&this.get("localize"))?a.loc():(a||"")}.property("title","localize").cacheable(),keyEquivalent:null,renderTitle:function(b,a){var g=this.get("icon"),d="",h=this.get("displayTitle"),i=(!SC.none(h)&&h.length>0),c,j,e;
if(this.get("escapeHTML")){h=SC.RenderContext.escapeHTML(h)}if(g){var f=SC.BLANK_IMAGE_URL;
if(g.indexOf("/")>=0){d='<img src="'+g+'" alt="" class="icon" />'}else{d='<img src="'+f+'" alt="" class="'+g+'" />'
}i=YES}e=d+h;if(a){if(this.get("needsEllipsis")){b.push('<label class="sc-button-label ellipsis">'+e+"</label>")
}else{b.push('<label class="sc-button-label">'+e+"</label>")}this._ImageTitleCached=e
}else{c=this.$("label");if((j=c[0])){if(i){if(this.get("needsEllipsis")){c.addClass("ellipsis");
if(this._ImageTitleCached!==e){this._ImageTitleCached=e;j.innerHTML=e}}else{c.removeClass("ellipsis");
if(this._ImageTitleCached!==e){this._ImageTitleCached=e;j.innerHTML=e}}}else{j.innerHTML=""
}}}return b},contentPropertyDidChange:function(h,c){var b=this.get("displayDelegate"),e=this.get("content"),g;
var d=this.getDelegateProperty("contentValueKey",b);if(d&&(c===d||c==="*")){this.set("value",e?e.get(d):null)
}var a=this.getDelegateProperty("contentTitleKey",b);if(a&&(c===a||c==="*")){this.set("title",e?e.get(a):null)
}var f=this.getDelegateProperty("contentIconKey",b);if(f&&(c===f||c==="*")){this.set("icon",e?e.get(f):null)
}return this},_button_displayObserver:function(){this.displayDidChange()}.observes("title","icon","value"),performKeyEquivalent:function(c,b){if(!this.get("isEnabled")){return NO
}var a=this.get("keyEquivalent");if(a){if(a===c){return this.triggerAction(b)}}else{if((this.get("isDefault")&&(c==="return"))||(this.get("isCancel")&&(c==="escape"))){return this.triggerAction(b)
}}return NO},triggerAction:function(a){throw"SC.Button.triggerAction() is not defined in %@".fmt(this)
},computeIsSelectedForValue:function(d){var b=this.get("toggleOnValue"),c,a;if(SC.typeOf(d)===SC.T_ARRAY){if(d.length===1){c=(d[0]==b)
}else{c=null;d.find(function(e){a=(e==b);if(c===null){c=a}else{if(a!==c){c=SC.MIXED_STATE
}}return c===SC.MIXED_STATE})}}else{if(d===SC.MIXED_STATE){c=SC.MIXED_STATE}else{c=(d===b)
}}return c},initMixin:function(){if(!SC.none(this.get("value"))){this._button_valueDidChange()
}},_button_valueDidChange:function(){var b=this.get("value"),a=this.computeIsSelectedForValue(b);
this.set("isSelected",a)}.observes("value"),_button_isSelectedDidChange:function(){var c=this.get("isSelected"),b=this.computeIsSelectedForValue(this.get("value"));
if((c!==SC.MIXED_STATE)&&(b!==c)){var a=(c)?"toggleOnValue":"toggleOffValue";this.set("value",this.get(a))
}}.observes("isSelected")};SC.ContentDisplay={concatenatedProperties:"contentDisplayProperties",displayProperties:["content"],contentDisplayProperties:[],_display_contentDidChange:function(e,a,d){if((d=this.get("content"))!=this._display_content){var c=this._display_contentPropertyDidChange;
var b=this._display_content;if(b){if(SC.isArray(b)){b.invoke("removeObserver","*",this,c)
}else{if(b.removeObserver){b.removeObserver("*",this,c)}}}b=this._display_content=d;
if(b){if(SC.isArray(b)){b.invoke("addObserver","*",this,c)}else{if(b.addObserver){b.addObserver("*",this,c)
}}}this.allPropertiesDidChange();this.endPropertyChanges()}}.observes("content","contentDisplayProperties"),_display_contentPropertyDidChange:function(e,c,d,b){if(c==="*"){this.displayDidChange()
}else{var a=this.get("contentDisplayProperties");if(a&&a.indexOf(c)>=0){this.displayDidChange()
}}}};sc_require("system/locale");SC.STRING_TITLEIZE_REGEXP=(/([\s|\-|\_|\n])([^\s|\-|\_|\n]?)/g);
SC.STRING_DECAMELIZE_REGEXP=(/([a-z])([A-Z])/g);SC.STRING_DASHERIZE_REGEXP=(/[ _]/g);
SC.STRING_HUMANIZE_REGEXP=(/[\-_]/g);SC.STRING_TRIM_REGEXP=(/^\s+|\s+$/g);SC.STRING_TRIM_LEFT_REGEXP=(/^\s+/g);
SC.STRING_TRIM_RIGHT_REGEXP=(/\s+$/g);SC.STRING_REGEXP_ESCAPED_REGEXP=(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g);
SC.STRING_DASHERIZE_CACHE={top:"top",left:"left",right:"right",bottom:"bottom",width:"width",height:"height",minWidth:"min-width",maxWidth:"max-width"};
SC.INFLECTION_CONSTANTS={PLURAL:[[/(quiz)$/i,"$1zes"],[/^(ox)$/i,"$1en"],[/([m|l])ouse$/i,"$1ice"],[/(matr|vert|ind)ix|ex$/i,"$1ices"],[/(x|ch|ss|sh)$/i,"$1es"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(hive)$/i,"$1s"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/sis$/i,"ses"],[/([ti])um$/i,"$1a"],[/(buffal|tomat)o$/i,"$1oes"],[/(bu)s$/i,"$1ses"],[/(alias|status)$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(ax|test)is$/i,"$1es"],[/s$/i,"s"],[/$/,"s"]],SINGULAR:[[/(quiz)zes$/i,"$1"],[/(matr)ices$/i,"$1ix"],[/(vert|ind)ices$/i,"$1ex"],[/^(ox)en/i,"$1"],[/(alias|status)es$/i,"$1"],[/(octop|vir)i$/i,"$1us"],[/(cris|ax|test)es$/i,"$1is"],[/(shoe)s$/i,"$1"],[/(o)es$/i,"$1"],[/(bus)es$/i,"$1"],[/([m|l])ice$/i,"$1ouse"],[/(x|ch|ss|sh)es$/i,"$1"],[/(m)ovies$/i,"$1ovie"],[/(s)eries$/i,"$1eries"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/([lr])ves$/i,"$1f"],[/(tive)s$/i,"$1"],[/(hive)s$/i,"$1"],[/([^f])ves$/i,"$1fe"],[/(^analy)ses$/i,"$1sis"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i,"$1$2sis"],[/([ti])a$/i,"$1um"],[/(n)ews$/i,"$1ews"],[/s$/i,""]],IRREGULAR:[["move","moves"],["sex","sexes"],["child","children"],["man","men"],["person","people"]],UNCOUNTABLE:["sheep","fish","series","species","money","rice","information","info","equipment"]};
SC.String={loc:function(){if(!SC.Locale.currentLocale){SC.Locale.createCurrentLocale()
}var a=SC.Locale.currentLocale.locWithDefault(this);if(SC.typeOf(a)!==SC.T_STRING){a=this
}return a.fmt.apply(a,arguments)},locWithDefault:function(b){if(!SC.Locale.currentLocale){SC.Locale.createCurrentLocale()
}var c=SC.Locale.currentLocale.locWithDefault(this,b);if(SC.typeOf(c)!==SC.T_STRING){c=this
}var a=SC.$A(arguments);a.shift();return c.fmt.apply(c,a)},capitalize:function(){return this.charAt(0).toUpperCase()+this.slice(1)
},capitalizeEach:function(){return this.replace(SC.STRING_TITLEIZE_REGEXP,function(c,a,b){return(b)?(a+b.toUpperCase()):a
}).capitalize()},titleize:function(){var a=this.replace(SC.STRING_DECAMELIZE_REGEXP,"$1_$2");
return a.replace(SC.STRING_TITLEIZE_REGEXP,function(c,d,b){return(b)?(" "+b.toUpperCase()):" "
}).capitalize()},camelize:function(){var b=this.replace(SC.STRING_TITLEIZE_REGEXP,function(e,f,d){return(d)?d.toUpperCase():""
});var c=b.charAt(0),a=c.toLowerCase();return(c!==a)?(a+b.slice(1)):b},classify:function(){var a=this.replace(SC.STRING_TITLEIZE_REGEXP,function(e,f,d){return(d)?d.toUpperCase():""
});var c=a.charAt(0),b=c.toUpperCase();return(c!==b)?(b+a.slice(1)):a},decamelize:function(){return this.replace(SC.STRING_DECAMELIZE_REGEXP,"$1_$2").toLowerCase()
},dasherize:function(){var a=SC.STRING_DASHERIZE_CACHE,b=a[this];if(b){return b}else{b=this.decamelize().replace(SC.STRING_DASHERIZE_REGEXP,"-");
a[this]=b}return b},humanize:function(){return this.decamelize().replace(SC.STRING_HUMANIZE_REGEXP," ")
},escapeForRegExp:function(){return this.replace(SC.STRING_REGEXP_ESCAPED_REGEXP,"\\$1")
},removeDiacritics:function(){var a=SC.diacriticMappingTable;if(!a){SC.diacriticMappingTable={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ā":"A","Ă":"A","Ą":"A","Ǎ":"A","Ǟ":"A","Ǡ":"A","Ǻ":"A","Ȁ":"A","Ȃ":"A","Ȧ":"A","Ḁ":"A","Ạ":"A","Ả":"A","Ấ":"A","Ầ":"A","Ẩ":"A","Ẫ":"A","Ậ":"A","Ắ":"A","Ằ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Å":"A","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ç":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ḉ":"C","Ď":"D","Ḋ":"D","Ḍ":"D","Ḏ":"D","Ḑ":"D","Ḓ":"D","È":"E","É":"E","Ê":"E","Ë":"E","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ȩ":"E","Ḕ":"E","Ḗ":"E","Ḙ":"E","Ḛ":"E","Ḝ":"E","Ẹ":"E","Ẻ":"E","Ẽ":"E","Ế":"E","Ề":"E","Ể":"E","Ễ":"E","Ệ":"E","Ḟ":"F","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","Ǧ":"G","Ǵ":"G","Ḡ":"G","Ĥ":"H","Ȟ":"H","Ḣ":"H","Ḥ":"H","Ḧ":"H","Ḩ":"H","Ḫ":"H","Ì":"I","Í":"I","Î":"I","Ï":"I","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ḭ":"I","Ḯ":"I","Ỉ":"I","Ị":"I","Ĵ":"J","Ķ":"K","Ǩ":"K","Ḱ":"K","Ḳ":"K","Ḵ":"K","Ĺ":"L","Ļ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ḻ":"L","Ḽ":"L","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ñ":"N","Ń":"N","Ņ":"N","Ň":"N","Ǹ":"N","Ṅ":"N","Ṇ":"N","Ṉ":"N","Ṋ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ō":"O","Ŏ":"O","Ő":"O","Ơ":"O","Ǒ":"O","Ǫ":"O","Ǭ":"O","Ȍ":"O","Ȏ":"O","Ȫ":"O","Ȭ":"O","Ȯ":"O","Ȱ":"O","Ṍ":"O","Ṏ":"O","Ṑ":"O","Ṓ":"O","Ọ":"O","Ỏ":"O","Ố":"O","Ồ":"O","Ổ":"O","Ỗ":"O","Ộ":"O","Ớ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ợ":"O","Ṕ":"P","Ṗ":"P","Ŕ":"R","Ŗ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṙ":"R","Ṛ":"R","Ṝ":"R","Ṟ":"R","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","Ș":"S","Ṡ":"S","Ṣ":"S","Ṥ":"S","Ṧ":"S","Ṩ":"S","Ţ":"T","Ť":"T","Ț":"T","Ṫ":"T","Ṭ":"T","Ṯ":"T","Ṱ":"T","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","Ư":"U","Ǔ":"U","Ǖ":"U","Ǘ":"U","Ǚ":"U","Ǜ":"U","Ȕ":"U","Ȗ":"U","Ṳ":"U","Ṵ":"U","Ṷ":"U","Ṹ":"U","Ṻ":"U","Ụ":"U","Ủ":"U","Ứ":"U","Ừ":"U","Ử":"U","Ữ":"U","Ự":"U","Ṽ":"V","Ṿ":"V","Ŵ":"W","Ẁ":"W","Ẃ":"W","Ẅ":"W","Ẇ":"W","Ẉ":"W","Ẋ":"X","Ẍ":"X","Ý":"Y","Ŷ":"Y","Ÿ":"Y","Ȳ":"Y","Ẏ":"Y","Ỳ":"Y","Ỵ":"Y","Ỷ":"Y","Ỹ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","Ẑ":"Z","Ẓ":"Z","Ẕ":"Z","`":"`","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ā":"a","ă":"a","ą":"a","ǎ":"a","ǟ":"a","ǡ":"a","ǻ":"a","ȁ":"a","ȃ":"a","ȧ":"a","ḁ":"a","ạ":"a","ả":"a","ấ":"a","ầ":"a","ẩ":"a","ẫ":"a","ậ":"a","ắ":"a","ằ":"a","ẳ":"a","ẵ":"a","ặ":"a","ḃ":"b","ḅ":"b","ḇ":"b","ç":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ḉ":"c","ď":"d","ḋ":"d","ḍ":"d","ḏ":"d","ḑ":"d","ḓ":"d","è":"e","é":"e","ê":"e","ë":"e","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","ȅ":"e","ȇ":"e","ȩ":"e","ḕ":"e","ḗ":"e","ḙ":"e","ḛ":"e","ḝ":"e","ẹ":"e","ẻ":"e","ẽ":"e","ế":"e","ề":"e","ể":"e","ễ":"e","ệ":"e","ḟ":"f","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","ǧ":"g","ǵ":"g","ḡ":"g","ĥ":"h","ȟ":"h","ḣ":"h","ḥ":"h","ḧ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ì":"i","í":"i","î":"i","ï":"i","ĩ":"i","ī":"i","ĭ":"i","į":"i","ǐ":"i","ȉ":"i","ȋ":"i","ḭ":"i","ḯ":"i","ỉ":"i","ị":"i","ĵ":"j","ǰ":"j","ķ":"k","ǩ":"k","ḱ":"k","ḳ":"k","ḵ":"k","ĺ":"l","ļ":"l","ľ":"l","ḷ":"l","ḹ":"l","ḻ":"l","ḽ":"l","ḿ":"m","ṁ":"m","ṃ":"m","ñ":"n","ń":"n","ņ":"n","ň":"n","ǹ":"n","ṅ":"n","ṇ":"n","ṉ":"n","ṋ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ō":"o","ŏ":"o","ő":"o","ơ":"o","ǒ":"o","ǫ":"o","ǭ":"o","ȍ":"o","ȏ":"o","ȫ":"o","ȭ":"o","ȯ":"o","ȱ":"o","ṍ":"o","ṏ":"o","ṑ":"o","ṓ":"o","ọ":"o","ỏ":"o","ố":"o","ồ":"o","ổ":"o","ỗ":"o","ộ":"o","ớ":"o","ờ":"o","ở":"o","ỡ":"o","ợ":"o","ṕ":"p","ṗ":"p","ŕ":"r","ŗ":"r","ř":"r","ȑ":"r","ȓ":"r","ṙ":"r","ṛ":"r","ṝ":"r","ṟ":"r","ś":"s","ŝ":"s","ş":"s","š":"s","ș":"s","ṡ":"s","ṣ":"s","ṥ":"s","ṧ":"s","ṩ":"s","ţ":"t","ť":"t","ț":"t","ṫ":"t","ṭ":"t","ṯ":"t","ṱ":"t","ẗ":"t","ù":"u","ú":"u","û":"u","ü":"u","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","ư":"u","ǔ":"u","ǖ":"u","ǘ":"u","ǚ":"u","ǜ":"u","ȕ":"u","ȗ":"u","ṳ":"u","ṵ":"u","ṷ":"u","ṹ":"u","ṻ":"u","ụ":"u","ủ":"u","ứ":"u","ừ":"u","ử":"u","ữ":"u","ự":"u","ṽ":"v","ṿ":"v","ŵ":"w","ẁ":"w","ẃ":"w","ẅ":"w","ẇ":"w","ẉ":"w","ẘ":"w","ẋ":"x","ẍ":"x","ý":"y","ÿ":"y","ŷ":"y","ȳ":"y","ẏ":"y","ẙ":"y","ỳ":"y","ỵ":"y","ỷ":"y","ỹ":"y","ź":"z","ż":"z","ž":"z","ẑ":"z","ẓ":"z","ẕ":"z"};
a=SC.diacriticMappingTable}var d,e,b="",f=this.length;for(var c=0;c<=f;++c){d=this.charAt(c);
e=a[d];if(e){b+=e}else{b+=d}}return b},trim:function(){return this.replace(SC.STRING_TRIM_REGEXP,"")
},trimLeft:function(){return this.replace(SC.STRING_TRIM_LEFT_REGEXP,"")},trimRight:function(){return this.replace(SC.STRING_TRIM_RIGHT_REGEXP,"")
},pluralize:function(){var j,e,b=this.split(/\s/).pop(),g=this.replace(b,""),a=b.charAt(0).match(/[A-Z]/)?true:false;
b=b.toLowerCase();for(j=0,e=SC.INFLECTION_CONSTANTS.UNCOUNTABLE.length;j<e;j++){var f=SC.INFLECTION_CONSTANTS.UNCOUNTABLE[j];
if(b==f){return this.toString()}}for(j=0,e=SC.INFLECTION_CONSTANTS.IRREGULAR.length;
j<e;j++){var c=SC.INFLECTION_CONSTANTS.IRREGULAR[j][0],i=SC.INFLECTION_CONSTANTS.IRREGULAR[j][1];
if((b==c)||(b==i)){if(a){i=i.capitalize()}return g+i}}for(j=0,e=SC.INFLECTION_CONSTANTS.PLURAL.length;
j<e;j++){var h=SC.INFLECTION_CONSTANTS.PLURAL[j][0],d=SC.INFLECTION_CONSTANTS.PLURAL[j][1];
if(h.test(b)){return this.replace(h,d)}}},singularize:function(){var j,e,b=this.split(/\s/).pop(),g=this.replace(b,""),a=b.charAt(0).match(/[A-Z]/)?true:false;
b=b.toLowerCase();for(j=0,e=SC.INFLECTION_CONSTANTS.UNCOUNTABLE.length;j<e;j++){var f=SC.INFLECTION_CONSTANTS.UNCOUNTABLE[j];
if(b==f){return this.toString()}}for(j=0,e=SC.INFLECTION_CONSTANTS.IRREGULAR.length;
j<e;j++){var c=SC.INFLECTION_CONSTANTS.IRREGULAR[j][0],i=SC.INFLECTION_CONSTANTS.IRREGULAR[j][1];
if((b==c)||(b==i)){if(a){c=c.capitalize()}return g+c}}for(j=0,e=SC.INFLECTION_CONSTANTS.SINGULAR.length;
j<e;j++){var h=SC.INFLECTION_CONSTANTS.SINGULAR[j][0],d=SC.INFLECTION_CONSTANTS.SINGULAR[j][1];
if(h.test(b)){return this.replace(h,d)}}}};SC.String.strip=SC.String.trim;SC.supplement(String.prototype,SC.String);
String.prototype.loc=SC.String.loc;SC.String.fmt=String.prototype.fmt;sc_require("mixins/string");
SC.MIXED_STATE="__MIXED__";SC.AUTO_CONTROL_SIZE="__AUTO__";SC.CALCULATED_CONTROL_SIZE="__CALCULATED__";
SC.JUMBO_CONTROL_SIZE="sc-jumbo-size";SC.HUGE_CONTROL_SIZE="sc-huge-size";SC.LARGE_CONTROL_SIZE="sc-large-size";
SC.REGULAR_CONTROL_SIZE="sc-regular-size";SC.SMALL_CONTROL_SIZE="sc-small-size";SC.TINY_CONTROL_SIZE="sc-tiny-size";
SC.Control={initMixin:function(){this._control_contentDidChange()},isSelected:NO,isSelectedBindingDefault:SC.Binding.oneWay().bool(),isActive:NO,isActiveBindingDefault:SC.Binding.oneWay().bool(),value:null,content:null,contentValueKey:null,contentPropertyDidChange:function(b,a){return this.updatePropertyFromContent("value",a,"contentValueKey")
},updatePropertyFromContent:function(f,b,e,d){var c=b==="*";if(e===undefined){e="content"+f.capitalize()+"Key"
}if(d===undefined){d=this.get("content")}e=this[e]?this.get(e):this.getDelegateProperty(e,this.displayDelegate);
if(e&&(c||b===e)){var a=(d)?(d.get?d.get(e):d[e]):null;this.set(f,a)}return this},updateContentWithValueObserver:function(){var a=this.contentValueKey?this.get("contentValueKey"):this.getDelegateProperty("contentValueKey",this.displayDelegate),b=this.get("content");
if(!a||!b){return}var c=this.get("value");if(typeof b.setIfChanged===SC.T_FUNCTION){b.setIfChanged(a,c)
}else{if(b[a]!==c){b[a]=c}}}.observes("value"),fieldKey:null,fieldLabel:null,errorLabel:function(){var a,c,b;
if(a=this.get("fieldLabel")){return a}c=this.get("fieldKey")||this.constructor.toString();
b=(c||"").humanize().capitalize();return"ErrorLabel."+c.locWithDefault(("FieldKey."+c).locWithDefault(b))
}.property("fieldLabel","fieldKey").cacheable(),controlSize:SC.REGULAR_CONTROL_SIZE,displayProperties:"isEnabled isSelected isActive controlSize".w(),_CONTROL_TMP_CLASSNAMES:{},renderMixin:function(b,g){var d=this.get("isSelected"),c=!this.get("isEnabled"),e=this._CONTROL_TMP_CLASSNAMES;
e.mixed=d===SC.MIXED_STATE;e.sel=d&&(d!==SC.MIXED_STATE);e.active=this.get("isActive");
var f=this.get("controlSize");if(f===SC.AUTO_CONTROL_SIZE||f===SC.CALCULATED_CONTROL_SIZE){f=SC.REGULAR_CONTROL_SIZE
}b.setClass(e).addClass(f);if(!g&&this.$input){var a=this.$input();if(a.attr("type")!=="radio"){this.$input().attr("disabled",c)
}}},updateRendererMixin:function(a){a.attr({isSelected:this.get("isSelected"),isEnabled:this.get("isEnabled"),isActive:this.get("isActive")});
var c=this.get("controlSize");if(c===SC.AUTO_CONTROL_SIZE||c===SC.CALCULATED_CONTROL_SIZE){c=this.get("layout");
if(SC.none(c.height)){if(this.get("controlSize")!==SC.CALCULATED_CONTROL_SIZE){SC.Logger.warn("PERFORMANCE WARNING!!! When your control lacks a height, but is set to automatically calculate what theme control size to use, it can impact performance. To hide this warning, set controlSize on this control to SC.CALCULATED_CONTROL_SIZE, or if you know the control size, set controlSize to the numeric or string control size.")
}var b=SC.clone(this.get("frame"));if(b){c.width=b.width;c.height=b.height}}}a.attr("controlSize",c)
},_control_content:null,_control_contentDidChange:function(){var b=this.get("content");
if(this._control_content===b){return}var c=this.contentPropertyDidChange,a=this._control_content;
if(a&&a.removeObserver){a.removeObserver("*",this,c)}this._control_content=b;if(b&&b.addObserver){b.addObserver("*",this,c)
}this.contentPropertyDidChange(b,"*")}.observes("content")};SC.Editable={isEditable:NO,isEditing:NO,beginEditing:function(){if(!this.get("isEditable")){return NO
}if(this.get("isEditing")){return YES}this.beginPropertyChanges();this.set("isEditing",YES);
this.becomeFirstResponder();this.endPropertyChanges();return YES},discardEditing:function(){return !this.get("isEditing")
},commitEditing:function(){if(!this.get("isEditing")){return YES}this.set("isEditing",NO);
this.resignFirstResponder();return YES}};SC.ALIGN_JUSTIFY="justify";SC.FlowedLayout={layoutDirection:SC.LAYOUT_HORIZONTAL,autoResize:YES,align:SC.ALIGN_LEFT,canWrap:YES,defaultFlowSpacing:{left:0,bottom:0,top:0,right:0},flowPadding:{left:0,bottom:0,right:0,top:0},concatenatedProperties:["childMixins"],initMixin:function(){this._scfl_tile()
},_scfl_childViewsDidChange:function(a){this.invokeOnce("_scfl_tile")}.observes("childViews"),_scfl_layoutPropertyDidChange:function(){this.invokeOnce("_scfl_tile")
},layoutChildViews:function(){this.invokeOnce("_scfl_tile")},layoutDidChangeFor:function(b){if(b.get("useAbsoluteLayout")){return arguments.callee.base.apply(this,arguments)
}if(!this._scfl_itemLayouts){return arguments.callee.base.apply(this,arguments)}var a=this._scfl_itemLayouts[SC.guidFor(b)];
if(!a){return arguments.callee.base.apply(this,arguments)}if(b.layout.width!==a.width||b.layout.height!==a.height){return arguments.callee.base.apply(this,arguments)
}},_scfl_observeChild:function(a){if(a._scfl_isBeingObserved){return}a._scfl_isBeingObserved=YES;
a.addObserver("isVisible",this,"_scfl_layoutPropertyDidChange");a.addObserver("calculatedWidth",this,"_scfl_layoutPropertyDidChange");
a.addObserver("calculatedHeight",this,"_scfl_layoutPropertyDidChange")},_scfl_unobserveChild:function(a){a._scfl_isBeingObserved=NO;
a.removeObserver("isVisible",this,"_scfl_layoutPropertyDidChange");a.removeObserver("calculatedWidth",this,"_scfl_layoutPropertyDidChange");
a.removeObserver("calculatedHeight",this,"_scfl_layoutPropertyDidChange")},flowSpacingForView:function(a,b){if(b.get("isSpacer")){return{left:0,top:0,right:0,bottom:0}
}var c=b.get("flowSpacing");if(!SC.none(c)){return c}return this.get("defaultFlowSpacing")
},flowSizeForView:function(k,i){var e=SC.clone(i.get("flowSize"));if(!SC.none(e)){var b=this.get("frame"),j=this.get("flowPadding"),h=this.flowSpacingForView(k,i);
var d=(this.get("layoutDirection")===SC.LAYOUT_HORIZONTAL&&!this.get("canWrap"))||(this.get("layoutDirection")===SC.LAYOUT_VERTICAL&&this.get("canWrap"));
if(!SC.none(e.widthPercentage)&&!d){e.width=(b.width-j.left-j.right)*e.widthPercentage-h.left-h.right
}if(!SC.none(e.heightPercentage)&&d){e.height=(b.height-j.top-j.bottom)*e.heightPercentage-h.top-h.bottom
}if(SC.none(e.width)){e.width=i.get("frame").width}if(SC.none(e.height)){e.height=i.get("frame").height
}return e}var c=i.get("calculatedWidth"),a=i.get("calculatedHeight");if(!SC.none(c)&&!SC.none(a)){return{width:c,height:a}
}var g=i.get("frame");return{width:g.width,height:g.height}},flowRow:function(c,s,h,p,a,l,j,n){p+=h[j];
var q,o=c.length,i,r,k=0,b=0,m=0;for(i=0;i<o;i++){q=c[i];if(q.get("isSpacer")){b+=q.get("spaceUnits")||1
}k+=q._scfl_cachedSpacedSize[l==="left"?"width":"height"]}if(o>1&&n===SC.ALIGN_JUSTIFY){b+=o-1
}if(b>0){m=(s-k)/b;k=s}var f,e,d=0;if(n===SC.ALIGN_RIGHT||n===SC.ALIGN_BOTTOM){d=(s-k)
}else{if(n===SC.ALIGN_CENTER||n===SC.ALIGN_MIDDLE){d=(s-k)/2}}for(i=0;i<o;i++){q=c[i];
if(l=="left"){f=d+h.left;e=p+h.top}else{f=p+h.left;e=d+h.top}if(q.get("fillHeight")&&j==="top"){q._scfl_cachedFlowSize.height=a
}if(q.get("fillWidth")&&j==="left"){q._scfl_cachedFlowSize.width=a}if(q.get("isSpacer")){var g=q._scfl_cachedSpacedSize[l==="left"?"width":"height"];
g=Math.max(g,m*(q.get("spaceUnits")||1));d+=g;q._scfl_cachedFlowSize[l==="left"?"width":"height"]=g;
q._scfl_cachedFlowSize[j==="left"?"width":"height"]=a}else{d+=q._scfl_cachedSpacedSize[l==="left"?"width":"height"]
}this.flowPositionView(i,q,f,e);if(n===SC.ALIGN_JUSTIFY){d+=m}}},flowPositionView:function(b,f,a,h){var g=f._scfl_cachedFlowSpacing,d=f._scfl_cachedFlowSize;
var e=this._scfl_itemLayouts[SC.guidFor(f)];var c={left:a+g.left,top:h+g.top,width:d.width,height:d.height};
this._scfl_itemLayouts[SC.guidFor(f)]=c;if(e&&e.left==c.left&&e.top==c.top&&e.width==c.width&&e.height==c.height){return
}f.set("layout",c);f.updateLayout()},_scfl_tile:function(){if(!this._scfl_itemLayouts){this._scfl_itemLayouts={}
}var h=this._scfl_isObserving||{},z={};var d=this.get("childViews"),e,n,w=d.length,j=[],f=[],a=0,x=0,i=0,r=this.get("frame").width,o=this.get("frame").height,l=this.get("canWrap"),y=this.get("layoutDirection"),m=this.get("flowPadding"),b,u,v=this.get("align");
var t,q,g,p,c,k,s;if(y===SC.LAYOUT_HORIZONTAL){s=r-m.right-m.left;t="left";p="top";
q="right";c="bottom";g="width";k="height"}else{s=o-m.bottom-m.top;t="top";p="left";
q="bottom";c="right";g="height";k="width"}for(n=0;n<w;n++){e=d[n];if(e.get("useAbsoluteLayout")){continue
}delete h[SC.guidFor(e)];z[SC.guidFor(e)]=e;if(!e.get("isVisible")){continue}b=this.flowSizeForView(n,e);
if(e.get("isSpacer")){b[g]=0}e._scfl_cachedFlowSize={width:b.width,height:b.height};
u=this.flowSpacingForView(n,e);b.width+=u.left+u.right;b.height+=u.top+u.bottom;e._scfl_cachedFlowSpacing=u;
e._scfl_cachedSpacedSize=b;if(l&&f.length>0){if(i+b[g]>=s){this.flowRow(f,s,m,x,a,t,p,v);
f=[];j.push(f);x+=a;a=0;i=0}}f.push(e);a=Math.max(b[k],a);i+=b[g]}this.flowRow(f,s,m,x,a,t,p,v);
this._scfl_lastFrameSize=this.get("frame");if(!l&&this.get("autoResize")){this._scfl_lastFrameSize[g]=i+m[t]+m[q];
this.adjust(g,i+m[t]+m[q])}else{if(this.get("autoResize")){this._scfl_lastFrameSize[k]=x+a+m[p]+m[c];
this.adjust(k,x+a+m[p]+m[c])}}for(n in h){this._scfl_unobserveChild(h[n])}for(n in z){this._scfl_observeChild(z[n])
}this._scfl_isObserving=z},_scfl_frameDidChange:function(){var b=this.get("frame"),a=this._scfl_lastFrameSize;
this._scfl_lastFrameSize=b;if(a&&a.width==b.width&&a.height==b.height){return}this.invokeOnce("_scfl_tile")
}.observes("frame"),destroyMixin:function(){var b=this._scfl_isObserving||SC.CoreSet.create();
for(var a in b){this._scfl_unobserveChild(b[a])}}};SC.Gesturable={concatenatedProperties:["gestures"],gestures:[],initMixin:function(){this.createGestures()
},createGestures:function(){var e=this.get("gestures"),b,a=e.length,c,d=[];for(b=0;
b<a;b++){if(SC.typeOf(e[b])===SC.T_STRING){c=this.get(e[b])}else{c=e[b]}if(!c){throw"Could not find gesture named '"+e[b]+"' on view."
}if(c.isClass){c=c.create({view:this})}if(SC.typeOf(e[b])===SC.T_STRING){this[e[b]]=c
}d.push(c)}this.set("gestures",d)},touchStart:function(a){this.gestureTouchStart(a)
},touchesDragged:function(a,b){this.gestureTouchesDragged(a,b)},touchEnd:function(a){this.gestureTouchEnd(a)
},gestureTouchStart:function(e){e.isInteresting=0;var d=this.get("gestures"),b,a=d.length,c;
for(b=0;b<a;b++){c=d[b];c.unassignedTouchDidStart(e)}},gestureTouchesDragged:function(c,e){var f=this.get("gestures"),b,a=f.length,d;
for(b=0;b<a;b++){d=f[b];d.unassignedTouchesDidChange(c,e)}},gestureTouchEnd:function(e){var d=this.get("gestures"),b,a=d.length,c;
for(b=0;b<a;b++){c=d[b];c.unassignedTouchDidEnd(e)}}};SC.mixin(SC.browser,(function(){var a=window.innerWidth,c=SC.browser,b=navigator.standalone;
SC.extend(c,{isOpera:!!c.opera,isIe:!!c.msie,isIE:!!c.msie,isSafari:!!c.safari,isMobileSafari:(!!c.mobileSafari||!!c.standalone),isMozilla:!!c.mozilla,isWindows:!!c.windows,isMac:!!c.mac,isiPhone:((!!c.mobileSafari||!!c.standalone)&&(a==320||a==480)),current:c.msie?"msie":c.mozilla?"mozilla":c.safari?"safari":c.opera?"opera":"unknown",compareVersion:function(){if(this._versionSplit===undefined){var g=function(h){return Number(h.match(/^[0-9]+/))
};this._versionSplit=SC.A(this.version.split(".")).map(g)}var f=SC.A(arguments).map(Number);
for(var e=0;e<f.length;e++){var d=this._versionSplit[e]-f[e];if(isNaN(d)){return 0
}if(d!==0){return d}}return 0}});return c})());SC.Builder=function(a){return SC.Builder.create(a)
};SC.Builder.create=function create(c){var b=SC.mixin(SC.beget(this.fn),c||{});if(c.hasOwnProperty("toString")){b.toString=c.toString
}var a=function(){var d=SC.beget(b);d.defaultClass=this;d.constructor=a;return d.init.apply(d,arguments)
};a.fn=a.prototype=b;a.extend=SC.Builder.create;a.mixin=SC.Builder.mixin;return a
};SC.Builder.mixin=function(){var b=arguments.length,a;for(a=0;a<b;a++){SC.mixin(this,arguments[a])
}return this};SC.Builder.fn={init:function(a){if(a!==undefined){if(SC.typeOf(a)===SC.T_ARRAY){var b=a.length;
while(--b>=0){this[b]=a.objectAt?a.objectAt(b):a[b]}this.length=a.length}else{this[0]=a;
this.length=1}}return this},size:function(){return this.length},pushStack:function(){var a=this.constructor.apply(this,arguments);
a.prevObject=this;return a},end:function(){return this.prevObject||this.constructor()
},toString:function(){return"%@$(%@)".fmt(this.defaultClass.toString(),SC.A(this).invoke("toString").join(","))
},mixin:SC.Builder.mixin};(function(){var a=SC.Enumerable,c=SC.Builder.fn,b,d;for(b in a){if(!a.hasOwnProperty(b)){continue
}d=Array.prototype[b]||a[b];c[b]=d}})();require("system/builder");SC.CoreQuery=(function(){var D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,i=/^.[^:#\[\.]*$/;
var v=/ CQ\d+="(?:\d+|null)"/g,e=/(<(\w+)[^>]*?)\/>/g,p=/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i,b=/\s+/,f=/^\s+/,h=/^body|html$/i,B=/href|src|style/,j=/(button|input|object|select|textarea)/i,w=/alpha\([^)]*\)/,r=/opacity=([^)]*)/;
var A=SC.browser.msie?"styleFloat":"cssFloat";var s=(SC.browser.safari&&parseInt(SC.browser.version,0)<417)?"(?:[\\w*_-]|\\\\.)":"(?:[\\w\u0128-\uFFFF*_-]|\\\\.)";
var x=new RegExp("^("+s+"+)(#)("+s+"+)");var n=new RegExp("^([#.]?)("+s+"*)");var g=new RegExp("([#.]?)("+s+"*)","g");
var m=["Left","Right"];var d=["Top","Bottom"];var o={position:"absolute",visibility:"hidden",display:"block"};
var z=function z(G,F,L){var K=F==="width"?G.offsetWidth:G.offsetHeight;var I=0,E=0,J=L.length,H;
while(--J>=0){H=L[J];I+=parseFloat(c.curCSS(G,"padding"+H,true))||0;E+=parseFloat(c.curCSS(G,"border"+H+"Width",true))||0
}K-=Math.round(I+E);return K};var k=SC.guidKey,y=0,C={},a=/z-?index|font-?weight|opacity|zoom|line-?height/i,t=document.defaultView||{};
var q=function q(F){if(!SC.browser.safari){return false}var E=t.getComputedStyle(F,null);
return !E||E.getPropertyValue("color")===""};function l(E,F){return E[0]&&parseInt(c.curCSS(E[0],F,true),10)||0
}var u,c;c=u=SC.Builder.create({jquery:"SC.CoreQuery",init:function(E,G){E=E||document;
if(E.nodeType){this[0]=E;this.length=1;return this}else{if(typeof E==="string"){var F=D.exec(E);
if(F&&(F[1]||!G)){if(F[1]){E=c.clean([F[1]],G)}else{var H=document.getElementById(F[3]);
if(H){if(H.id!=F[3]){return c().find(E)}return c(H)}E=[]}}else{return c(G).find(E)
}}else{if(SC.typeOf(E)===SC.T_FUNCTION){return SC.ready(E)}}}return this.setArray(c.makeArray(E))
},size:function(){return this.length},get:function(E){return E===undefined?c.makeArray(this):this[E]
},find:function(E){var F=c.map(this,function(G){return c.find(E,G)});return this.pushStack(F)
},filter:function(E){return this.pushStack((SC.typeOf(E)===SC.T_FUNCTION)&&c.grep(this,function(G,F){return E.call(G,F)
})||c.multiFilter(E,this))},not:function(E){if(typeof E==="string"){if(i.test(E)){return this.pushStack(c.multiFilter(E,this,true))
}else{E=c.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==undefined&&!E.nodeType;
return this.filter(function(){return F?c.inArray(this,E)<0:this!=E})},setArray:function(E){this.length=0;
Array.prototype.push.apply(this,E);return this},map:function(E){return this.pushStack(c.map(this,function(G,F){return E.call(G,F,G)
}))},each:function(F,E){return c.each(this,F,E)},index:function(E){if(E&&E.jquery){E=E[0]
}return Array.prototype.indexOf.call(this,E)},eq:function(E){return this.slice(E,+E+1)
},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments))
},add:function(E){return this.pushStack(c.merge(this.get(),typeof E==="string"?c(E):c.makeArray(E)).uniq())
},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===undefined){return this[0]&&c[G||"attr"](this[0],F)
}else{E={};E[F]=H}}return this.each(function(I){for(F in E){c.attr((G)?this.style:this,F,c.prop(this,E[F],G,I,F))
}})},html:function(E){return E===undefined?(this[0]?this[0].innerHTML.replace(v,""):null):this.empty().append(E)
},andSelf:function(){return this.add(this.prevObject)},is:function(E){return !!E&&c.multiFilter(E,this).length>0
},hasClass:function(E){return Array.prototype.every.call(this,function(F){return(F.nodeType===1)&&c.className.has(F,E)
})},val:function(K){if(K===undefined){var E=this[0];if(E){if(c.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text
}if(c.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type==="select-one",G;
if(I<0){return null}var F,J=H?I+1:M.length;for(F=H?I:0;F<J;F++){G=M[F];if(G.selected){K=c(G).val();
if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return undefined
}else{if(typeof K==="number"){K+=""}this.each(function(){if(this.nodeType!==1){return
}if(SC.typeOf(K)===SC.T_ARRAY&&(/radio|checkbox/).test(this.type)){this.checked=(c.inArray(this.value,K)>=0||c.inArray(this.name,K)>=0)
}else{if(c.nodeName(this,"select")){var N=c.makeArray(K);c("option",this).each(function(){this.selected=(c.inArray(this.value,N)>=0||c.inArray(this.text,N)>=0)
});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})}return this},clone:function(){var E=this.map(function(){if(SC.browser.msie&&!c.isXMLDoc(this)){var H=this.cloneNode(true),G=document.createElement("div");
G.appendChild(H);return c.clean([G.innerHTML])[0]}else{return this.cloneNode(true)
}});var F=E.find("*").andSelf().each(function(){if(this[SC.guidKey]!==undefined){this[SC.guidKey]=null
}});return E},css:function(E,F){if((E==="width"||E==="height")&&parseFloat(F,0)<0){F=undefined
}return this.attr(E,F,"curCSS")},text:function(F){if(F!==undefined&&typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))
}var E="";c.each(F||this,function(){c.each(this.childNodes,function(){if(this.nodeType!==8){E+=this.nodeType!==1?this.nodeValue:c.fn.text([this])
}})});return E},show:function(){var E=SC.$.isVisible;this.each(function(){if(!E(this)){this.style.display=this.oldblock||"";
if(c.css(this,"display")==="none"){var F=c("<"+this.tagName+"/>");c("body").append(F);
this.style.display=F.css("display");if(this.style.display==="none"){this.style.display="block"
}F.remove();F=null}}});return this},hide:function(){var E=SC.$.isVisible;this.each(function(){if(E(this)){this.oldblock=this.oldblock||c.css(this,"display");
this.style.display="none"}});return this},domManip:function(G,H,F,J){var I=this.length>1,E;
return this.each(function(){if(!E){E=c.clean(G,this.ownerDocument);if(F){E.reverse()
}}var K=this;if(H&&c.nodeName(this,"table")&&c.nodeName(E[0],"tr")){K=this.getElementsByTagName("tbody")[0]||this.appendChild(this.ownerDocument.createElement("tbody"))
}c.each(E,function(){var L=I?c(this).clone(true)[0]:this;J.call(K,L)})})},append:function(){return this.domManip(arguments,true,false,function(E){if(this.nodeType===1){this.appendChild(E)
}})},prepend:function(){return this.domManip(arguments,true,true,function(E){if(this.nodeType===1){this.insertBefore(E,this.firstChild)
}})},before:function(){return this.domManip(arguments,false,false,function(E){this.parentNode.insertBefore(E,this)
})},after:function(){return this.domManip(arguments,false,true,function(E){this.parentNode.insertBefore(E,this.nextSibling)
})},replaceWith:function(E){return this.after(E).remove()},removeData:function(E){return this.each(function(){SC.removeData(this,E)
})}});u.mixin({nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()===E.toUpperCase()
},map:function(E,J){var F=[],I,G,H;for(G=0,H=E.length;G<H;G++){I=J(E[G],G);if(I!=null){F[F.length]=I
}}return F.concat.apply([],F)},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===undefined){for(E in G){if(K.apply(G[E],F)===false){break
}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===undefined){for(E in G){if(K.call(G[E],E,G[E])===false){break
}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},isXMLDoc:function(E){return E.documentElement&&!E.body||E.tagName&&E.ownerDocument&&!E.ownerDocument.body
},clean:function(E,G){var F=[];G=G||document;if(typeof G.createElement=="undefined"){G=G.ownerDocument||G[0]&&G[0].ownerDocument||document
}c.each(E,function(K,M){if(typeof M==="number"){M+=""}if(!M){return}if(typeof M==="string"){M=M.replace(e,function(P,Q,O){return O.match(p)?P:Q+"></"+O+">"
});var J=M.replace(f,"").substring(0,10).toLowerCase(),N=G.createElement("div");var L=!J.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!J.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||J.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!J.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!J.indexOf("<td")||!J.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!J.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||SC.browser.msie&&[1,"div<div>","</div>"]||[0,"",""];
N.innerHTML=L[1]+M+L[2];while(L[0]--){N=N.lastChild}if(SC.browser.msie){var I=!J.indexOf("<table")&&J.indexOf("<tbody")<0?N.firstChild&&N.firstChild.childNodes:L[1]==="<table>"&&J.indexOf("<tbody")<0?N.childNodes:[];
for(var H=I.length-1;H>=0;--H){if(c.nodeName(I[H],"tbody")&&!I[H].childNodes.length){I[H].parentNode.removeChild(I[H])
}}if(/^\s/.test(M)){N.insertBefore(G.createTextNode(M.match(/^\s*/)[0]),N.firstChild)
}}M=c.makeArray(N.childNodes)}if(M.length===0&&(!c.nodeName(M,"form")&&!c.nodeName(M,"select"))){return
}if(M[0]===undefined||c.nodeName(M,"form")||M.options){F.push(M)}else{F=c.merge(F,M)
}});return F},find:function(R,F){var M;if(typeof R!=="string"){return[R]}if(R.indexOf(",")>=0){M=R.split(",").map(function(T){return c.find(T,F)
});return M.concat.apply([],M).uniq()}if(F&&F.nodeType!==1&&F.nodeType!==9){return[]
}F=F||document;M=[F];var O,E=YES,I=R.match(g),L=I.length,H;for(var P=0;P<L;P++){R=I[P];
if(R===" "||R===""){E=YES}else{if(E){H=n.exec(R);if((H[1]==="")&&(P<(L-1))&&(I[P+1].charAt(0)==="#")){R=I[P+1];
I[P+1]=I[P];H=n.exec(R)}var K=[],J=M.length,N,Q,G=H[2],S;for(N=0;N<J;N++){Q=M[N];
switch(H[1]){case"":if(!G){G="*"}if(G==="*"&&Q.nodeName.toLowerCase()==="object"){G="param"
}K=c.merge(K,Q.getElementsByTagName(G));break;case"#":if(Q===document){S=document.getElementById(G);
if(SC.browser.msie&&S&&S.getAttribute("id")!==G){S=NO}else{if(S){K.push(S)}S=YES}}else{S=NO
}if(!S){S=Q.getElementsByTagName("*");S=Array.prototype.find.call(S,function(T){return T.getAttribute&&(T.getAttribute("id")===G)
});if(S){K.push(S)}}break;case".":if(Q.getElementsByClassName){K=c.merge(K,Q.getElementsByClassName(G))
}else{K=c.merge(K,c.classFilter(Q.getElementsByTagName("*"),G))}break;default:}}delete M;
M=K;E=NO}else{M=c.filter(R,M)}}}if(M&&M[0]==F){M.shift()}return M.uniq()},classFilter:function(J,E,I){E=" "+E+" ";
var G=[],H;for(var F=0;J[F];F++){H=(" "+J[F].className+" ").indexOf(E)>=0;if(!I&&H||I&&!H){G.push(J[F])
}}return G},filter:function(F,J,I){var E=n.exec(F),K=E[2],H=E[1],G;if(H==="."){return c.classFilter(c.makeArray(J),K,I)
}else{if(H==="#"){G=function(M){var L=M&&M.getAttribute&&(M.getAttribute("id")===K);
return(I)?!L:L}}else{G=function(M){var L=c.nodeName(M,K);return(I)?!L:L}}return Array.prototype.filter.call(c.makeArray(J),G)
}},multiFilter:function(H,E,G){H=H.indexOf(",")?H.split(","):[H];var J=H.length,I,F=[];
while(--J>=0){I=c.filter(H[J].trim(),E,G);F=G?E=I:c.merge(I,F)}return F},merge:function(H,E){var F=0,G,I=H.length;
if(SC.browser.msie){while(G=E[F++]){if(G.nodeType!==8){H[I++]=G}}}else{while(G=E[F++]){H[I++]=G
}}return H},makeArray:function(G){var E=[];if(!SC.none(G)){var F=G.length;if(F==null||typeof G==="string"||G.setInterval){E[0]=G
}else{while(F){E[--F]=G[F]}}}return E},inArray:function(E,F){return F.indexOf?F.indexOf(E):Array.prototype.indexOf.call(F,E)
},boxModel:!SC.browser.msie||document.compatMode==="CSS1Compat",props:{"for":"htmlFor","class":"className","float":A,cssFloat:A,styleFloat:A,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan"},prop:function(H,I,G,F,E){if(SC.typeOf(I)===SC.T_FUNCTION){I=I.call(H,F)
}return I&&(typeof I==="number")&&G==="curCSS"&&!a.test(E)?I+"px":I},grep:function(F,J,E){var G=[];
for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},className:{add:function(F,G){var E=c.className.has;
c.each((G||"").split(b),function(H,I){if(F.nodeType===1&&!E(F.className,I)){F.className+=(F.className?" ":"")+I
}})},remove:function(E,F){if(E.nodeType===1){E.className=F!==undefined?c.grep(E.className.split(b),function(G){return !c.className.has(F,G)
}).join(" "):""}},has:function(F,E){return F&&c.inArray(E,(F.className||F).toString().split(b))>-1
}},swap:function(J,I,L,K,E){var F={},H;for(H in I){F[H]=J.style[H];J.style[H]=I[H]
}var G=L(J,K,E);for(H in I){J.style[H]=F[H]}return G},css:function(G,E,H){if(E==="width"||E==="height"){var J,I=(E==="width")?m:d,F=o;
J=SC.$.isVisible(G)?z(G,E,I):c.swap(G,F,z,E,I);return Math.max(0,J)}return c.curCSS(G,E,H)
},curCSS:function(K,F,G){var P,E=K.style;if(F==="opacity"&&SC.browser.msie){P=c.attr(E,"opacity");
return P===""?"1":P}if(SC.browser.opera&&F==="display"){var Q=E.outline;E.outline="0 solid black";
E.outline=Q}var H=F.match(/float/i);if(H){F=A}if(!G&&E&&E[F]){P=E[F]}else{if(t.getComputedStyle){if(H){F="float"
}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var R=t.getComputedStyle(K,null);if(R&&!q(K,t)){P=R.getPropertyValue(F)
}else{var J=[],S=[],T=K,M=0,O,L;for(;T&&q(T);T=T.parentNode){S.unshift(T)}for(L=S.length;
M<L;M++){if(q(S[M])){J[M]=S[M].style.display;S[M].style.display="block"}}P=(F==="display"&&J[S.length-1]!==null)?"none":(R&&R.getPropertyValue(F))||"";
for(M=0,O=J.length;M<O;M++){if(J[M]!==null){S[M].style.display=J[M]}}}if(F==="opacity"&&P===""){P="1"
}}else{if(K.currentStyle){P=K.currentStyle[F]||K.currentStyle[F.camelize()];if(!(/^\d+(px)?$/i).test(P)&&(/^\d/).test(P)){var I=E.left,N=K.runtimeStyle.left;
K.runtimeStyle.left=K.currentStyle.left;E.left=P||0;P=E.pixelLeft+"px";E.left=I;K.runtimeStyle.left=N
}}}}return P},dir:function(G,F){var E=[],H=G[F];while(H&&H!=document){if(H.nodeType===1){E.push(H)
}H=H[F]}return E},nth:function(I,E,G,H){E=E||1;var F=0;for(;I;I=I[G]){if(I.nodeType===1&&++F==E){break
}}return I},sibling:function(G,F){var E=[];for(;G;G=G.nextSibling){if(G.nodeType===1&&G!=F){E.push(G)
}}return E},attr:function(F,E,L){if(!F||F.nodeType===3||F.nodeType===8){return undefined
}var G=!c.isXMLDoc(F),K=L!==undefined,I=SC.browser.msie;E=G&&c.props[E]||E;if(F.tagName){var J=B.test(E);
if(E==="selected"&&F.parentNode){F.parentNode.selectedIndex}if(E in F&&G&&!J){if(K){if(E==="type"&&c.nodeName(F,"input")&&F.parentNode){throw"type property can't be changed"
}F[E]=L}if(c.nodeName(F,"form")&&F.getAttributeNode(E)){return F.getAttributeNode(E).nodeValue
}if(E==="tabIndex"){var M=F.getAttributeNode("tabIndex");return M&&M.specified?M.value:F.nodeName.match(j)?0:F.nodeName.match(/^(a|area)$/i)&&F.href?0:undefined
}return F[E]}if(I&&G&&E==="style"){return c.attr(F.style,"cssText",L)}if(K){F.setAttribute(E,""+L)
}var H=(I&&G&&J)?F.getAttribute(E,2):F.getAttribute(E);return H===null?undefined:H
}if(I&&E==="opacity"){if(K){F.zoom=1;F.filter=(F.filter||"").replace(w,"")+(parseInt(L,0)+""=="NaN"?"":"alpha(opacity="+L*100+")")
}return F.filter&&F.filter.indexOf("opacity=")>=0?(parseFloat(F.filter.match(r)[1])/100)+"":""
}E=E.camelize();if(K){F[E]=L}return F[E]}});c.fn.init.prototype=c.fn;c.each({parent:function(E){return E.parentNode
},parents:function(E){return c.dir(E,"parentNode")},next:function(E){return c.nth(E,2,"nextSibling")
},prev:function(E){return c.nth(E,2,"previousSibling")},nextAll:function(E){return c.dir(E,"nextSibling")
},prevAll:function(E){return c.dir(E,"previousSibling")},siblings:function(E){return c.sibling(E.parentNode.firstChild,E)
},children:function(E){return c.sibling(E.firstChild)},contents:function(E){return c.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:c.makeArray(E.childNodes)
}},function(E,F){c.fn[E]=function(G){var H=c.map(this,F);if(G&&typeof G==="string"){H=c.multiFilter(G,H)
}return this.pushStack(H.uniq())}});c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){c.fn[E]=function(){var G=arguments;
return this.each(function(){for(var H=0,I=G.length;H<I;H++){c(G[H])[F](this)}})}});
c.each({removeAttr:function(E){c.attr(this,E,"");if(this.nodeType===1){this.removeAttribute(E)
}},addClass:function(E){c.className.add(this,E)},removeClass:function(E){c.className.remove(this,E)
},toggleClass:function(E){c.className[c.className.has(this,E)?"remove":"add"](this,E)
},remove:function(E){if(!E||c.filter(E,[this]).length){if(this.parentNode){this.parentNode.removeChild(this)
}}},empty:function(){while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){c.fn[E]=function(){return this.each(F,arguments)
}});c.each(["Height","Width"],function(I,G){var J=G.toLowerCase(),F;c.fn[J]=function(K){if(this[0]===window){if(SC.browser.opera){F=document.body["client"+G]
}else{if(SC.browser.safari){F=window["inner"+G]}else{if(document.compatMode){F=documentElement["client"+G]
}else{F=document.body["client"+G]}}}}else{if(this[0]===document){F=Math.max(Math.max(document.body["scroll"+G],document.documentElement["scroll"+G]),Math.max(document.body["offset"+G],document.documentElement["offset"+G]))
}else{if(K===undefined){return this.length?c.css(this[0],J):null}else{return this.css(J,(typeof K==="string")?K:K+"px")
}}}return F};var E=I?"Left":"Top",H=I?"Right":"Bottom";c.fn["inner"+G]=function(){return this[G.toLowerCase()]()+l(this,"padding"+E)+l(this,"padding"+H)
};c.fn["outer"+G]=function(K){return this["inner"+G]()+l(this,"border"+E+"Width")+l(this,"border"+H+"Width")+(K?l(this,"margin"+E)+l(this,"margin"+H):0)
}});u.fn.offset=function(){var F=0,N=0,G=this[0],S=SC.browser,J;if(!G){return undefined
}function I(T){R(c.curCSS(T,"borderLeftWidth",true),c.curCSS(T,"borderTopWidth",true))
}function R(T,U){F+=parseInt(T,10)||0;N+=parseInt(U,10)||0}var P=G.parentNode,M=G,E=G.offsetParent,O=G.ownerDocument,Q=S.safari&&parseInt(S.version,0)<522&&!(/adobeair/i).test(S.userAgent),L=c.curCSS,H=c.css(G,"position")==="fixed";
if(!(S.mozilla&&G==document.body)&&G.getBoundingClientRect){var K=G.getBoundingClientRect();
R(K.left+Math.max(O.documentElement.scrollLeft,O.body.scrollLeft),K.top+Math.max(O.documentElement.scrollTop,O.body.scrollTop));
R(-O.documentElement.clientLeft,-O.documentElement.clientTop)}else{R(G.offsetLeft,G.offsetTop);
while(E){R(E.offsetLeft,E.offsetTop);if(S.mozilla&&!(/^t(able|d|h)$/i).test(E.tagName)||S.safari&&!Q){I(E)
}if(!H&&L(E,"position")==="fixed"){H=true}M=(/^body$/i).test(E.tagName)?M:E;E=E.offsetParent
}while(P&&P.tagName&&!(h).test(P.tagName)){if(!(/^inline|table.*$/i).test(L(P,"display"))){R(-P.scrollLeft,-P.scrollTop)
}if(S.mozilla&&L(P,"overflow")!=="visible"){I(P)}P=P.parentNode}if((Q&&(H||L(M,"position")==="absolute"))||(S.mozilla&&L(M,"position")!=="absolute")){R(-O.body.offsetLeft,-O.body.offsetTop)
}if(H){R(Math.max(O.documentElement.scrollLeft,O.body.scrollLeft),Math.max(O.documentElement.scrollTop,O.body.scrollTop))
}}J={top:N,left:F};return J};u.fn.mixin({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=h.test(G[0].tagName)?{top:0,left:0}:G.offset();
J.top-=l(this,"marginTop");J.left-=l(this,"marginLeft");E.top+=l(G,"borderTopWidth");
E.left+=l(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;
while(E&&(!(h).test(E.tagName)&&c.css(E,"position")==="static")){E=E.offsetParent
}return c(E)}});c.each(["Left","Top"],function(F,E){var G="scroll"+E;c.fn[G]=function(H){if(!this[0]){return
}return H!==undefined?this.each(function(){this==window||this==document?window.scrollTo(!F?H:c(window).scrollLeft(),F?H:c(window).scrollTop()):this[G]=H
}):this[0]==window||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||c.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]
}});return u}());SC.$=(typeof jQuery=="undefined")?SC.CoreQuery:jQuery;SC.mixin(SC.$.fn,{isCoreQuery:YES,toString:function(){var c=[],b=this.length,a=0;
for(a=0;a<b;a++){c[a]="%@: %@".fmt(a,this[a]?this[a].toString():"(null)")}return"<$:%@>(%@)".fmt(SC.guidFor(this),c.join(" , "))
},isVisible:function(){return Array.prototype.every.call(this,function(a){return SC.$.isVisible(a)
})},first:function(){return this.pushStack([this[0]])},last:function(){return this.pushStack([this[this.length-1]])
},view:function(){return this.map(function(){var b=null,a=SC.viewKey,d=this,c;while(!b&&d&&(d!==document)){if(d.nodeType===1&&(c=d.getAttribute("id"))){b=SC.View.views[c]
}d=d.parentNode}d=null;return b})},setClass:function(d,c){if(SC.none(d)){return this
}var e=SC.typeOf(d)!==SC.T_STRING,a=this._fixupClass,b;this.each(function(){if(this.nodeType!==1){return
}var h=this.className.split(/\s+/),g=NO;if(e){for(var f in d){if(!d.hasOwnProperty(f)){continue
}g=a(h,f,d[f])||g}}else{g=a(h,d,c)}if(g){this.className=h.join(" ")}});return this
},_fixupClass:function(d,a,c){var b=d.indexOf(a);if(c){if(b<0){d.push(a);return YES
}}else{if(b>=0){d[b]=null;return YES}}return NO},within:function(e){e=SC.$(e);var d,c,g,b,a=e.length,f=this.length;
while(!d&&(--f>=0)){g=this[f];for(b=0;!d&&(b<a);b++){c=e[b];while(c&&(c!==g)){c=c.parentNode
}d=c===g}}g=c=null;return d}});(function(){var c={},f={find:function(i,h){return(h!==undefined)?SC.Enumerable.find.call(this,i,h):c.find.call(this,i)
},filter:function(i,h){return(h!==undefined)?this.pushStack(SC.Enumerable.filter.call(this,i,h)):c.filter.call(this,i)
},filterProperty:function(h,i){return this.pushStack(SC.Enumerable.filterProperty.call(this,h,i))
},indexOf:SC.$.index,map:function(i,h){return(h!==undefined)?SC.Enumerable.map.call(this,i,h):c.map.call(this,i)
}};var g=SC.$.jquery==="SC.CoreQuery",d=SC.$.fn,a=g?f:SC.Enumerable,e;for(var b in a){if(!a.hasOwnProperty(b)){continue
}e=a[b];if(b in f){c[b]=d[b];e=f[b]}d[b]=e}})();SC.mixin(SC.$,{isVisible:function(a){var b=SC.$;
return("hidden"!=a.type)&&(b.css(a,"display")!="none")&&(b.css(a,"visibility")!="hidden")
}});sc_require("system/core_query");SC.Event=function(d){var c,b;if(d){this.originalEvent=d;
var g=SC.Event._props,e;b=g.length;c=b;while(--c>=0){e=g[c];this[e]=d[e]}}this.timeStamp=this.timeStamp||Date.now();
if(!this.target){this.target=this.srcElement||document}if(this.target.nodeType===3){this.target=this.target.parentNode
}if(!this.relatedTarget&&this.fromElement){this.relatedTarget=(this.fromElement===this.target)?this.toElement:this.fromElement
}if(SC.none(this.pageX)&&!SC.none(this.clientX)){var h=document.documentElement,a=document.body;
this.pageX=this.clientX+(h&&h.scrollLeft||a&&a.scrollLeft||0)-(h.clientLeft||0);this.pageY=this.clientY+(h&&h.scrollTop||a&&a.scrollTop||0)-(h.clientTop||0)
}if(!this.which&&((this.charCode||d.charCode===0)?this.charCode:this.keyCode)){this.which=this.charCode||this.keyCode
}if(!this.metaKey&&this.ctrlKey){this.metaKey=this.ctrlKey}if(!this.which&&this.button){this.which=((this.button&1)?1:((this.button&2)?3:((this.button&4)?2:0)))
}if(SC.browser.safari&&d.wheelDelta!==undefined){this.wheelDelta=0-(d.wheelDeltaY||d.wheelDeltaX);
this.wheelDeltaY=0-(d.wheelDeltaY||0);this.wheelDeltaX=0-(d.wheelDeltaX||0)}else{if(!SC.none(d.detail)){var f=Math.floor(d.detail*40);
if(d.axis&&(d.axis===d.HORIZONTAL_AXIS)){this.wheelDeltaX=f;this.wheelDeltaY=this.wheelDelta=0
}else{this.wheelDeltaY=this.wheelDelta=f;this.wheelDeltaX=0}}else{this.wheelDelta=this.wheelDeltaY=SC.browser.msie?0-d.wheelDelta:d.wheelDelta;
this.wheelDeltaX=0}}return this};SC.mixin(SC.Event,{create:function(a){return new SC.Event(a)
},add:function(e,d,f,g,c){if(e&&e.isCoreQuery){if(e.length>0){e.forEach(function(h){this.add(h,d,f,g,c)
},this);return this}else{e=e[0]}}if(!e){return this}if(e.nodeType===3||e.nodeType===8){return SC.Event
}if(SC.browser.msie&&e.setInterval){e=window}if(SC.typeOf(f)===SC.T_FUNCTION){c=g;
g=f;f=null}else{if(f&&SC.typeOf(g)===SC.T_STRING){g=f[g]}}var b=SC.data(e,"events")||SC.data(e,"events",{}),a=b[d];
if(!a){a=b[d]={};this._addEventListener(e,d)}a[SC.guidFor(g)]=[f,g,c];SC.Event._global[d]=YES;
e=b=a=null;return this},remove:function(f,e,g,h){if(f&&f.isCoreQuery){if(f.length>0){f.forEach(function(i){this.remove(i,e,g,h)
},this);return this}else{f=f[0]}}if(!f){return this}if(f.nodeType===3||f.nodeType===8){return SC.Event
}if(SC.browser.msie&&f.setInterval){f=window}var a,d,c=SC.data(f,"events");if(!c){return this
}if(e===undefined){for(e in c){this.remove(f,e)}}else{if(a=c[e]){var b=NO;if(g||h){if(SC.typeOf(g)===SC.T_FUNCTION){h=g;
g=null}else{if(SC.typeOf(h)===SC.T_STRING){h=g[h]}}delete a[SC.guidFor(h)];d=null;
for(d in a){break}if(d===null){b=YES}}else{b=YES}if(b){delete c[e];this._removeEventListener(f,e)
}d=null;for(d in c){break}if(!d){SC.removeData(f,"events");delete this._elements[SC.guidFor(f)]
}}}f=c=a=null;return this},NO_BUBBLE:["blur","focus","change"],simulateEvent:function(d,c,b){var a=SC.Event.create({type:c,target:d,preventDefault:function(){this.cancelled=YES
},stopPropagation:function(){this.bubbles=NO},allowDefault:function(){this.hasCustomEventHandling=YES
},timeStamp:Date.now(),bubbles:(this.NO_BUBBLE.indexOf(c)<0),cancelled:NO,normalized:YES});
if(b){SC.mixin(a,b)}return a},trigger:function(c,b,i,j){if(c&&c.isCoreQuery){if(c.length>0){c.forEach(function(m){this.trigger(m,b,i,j)
},this);return this}else{c=c[0]}}if(!c){return this}if(c.nodeType===3||c.nodeType===8){return undefined
}i=SC.A(i);var h,k=SC.typeOf(c[b]||null)===SC.T_FUNCTION,a,g,d,l;a=i[0];if(!a||!a.preventDefault){a=this.simulateEvent(c,b);
i.unshift(a)}a.type=b;g=c;do{h=SC.Event.handle.apply(g,i);g=(g===document)?null:(g.parentNode||document)
}while(!h&&a.bubbles&&g);g=null;d=c["on"+b];l=SC.$.nodeName(c,"a")&&b==="click";if((!k||l)&&d&&d.apply(c,i)===NO){h=NO
}if(k&&j!==NO&&h!==NO&&!l){this.triggered=YES;try{c[b]()}catch(f){}}this.triggered=NO;
return h},handle:function(b){if((typeof SC==="undefined")||SC.Event.triggered){return YES
}var c,g,e,i,d,h,j,k,a,f;h=SC.A(arguments);h[0]=b=SC.Event.normalizeEvent(b||window.event);
d=(SC.data(this,"events")||{})[b.type];if(!d){return NO}for(j in d){k=d[j];a=k[1];
b.handler=a;b.data=b.context=k[2];f=k[0]||this;g=a.apply(f,h);if(c!==NO){c=g}if(g===NO){b.preventDefault();
b.stopPropagation()}}return c},unload:function(){var a,b=this._elements;for(a in b){this.remove(b[a])
}for(a in b){delete b[a]}delete this._elements},special:{ready:{setup:function(){SC._bindReady();
return},teardown:function(){return}},mouseenter:{setup:function(){if(SC.browser.msie){return NO
}SC.Event.add(this,"mouseover",SC.Event.special.mouseenter.handler);return YES},teardown:function(){if(SC.browser.msie){return NO
}SC.Event.remove(this,"mouseover",SC.Event.special.mouseenter.handler);return YES
},handler:function(a){if(SC.Event._withinElement(a,this)){return YES}a.type="mouseenter";
return SC.Event.handle.apply(this,arguments)}},mouseleave:{setup:function(){if(SC.browser.msie){return NO
}SC.Event.add(this,"mouseout",SC.Event.special.mouseleave.handler);return YES},teardown:function(){if(SC.browser.msie){return NO
}SC.Event.remove(this,"mouseout",SC.Event.special.mouseleave.handler);return YES},handler:function(a){if(SC.Event._withinElement(a,this)){return YES
}a.type="mouseleave";return SC.Event.handle.apply(this,arguments)}}},KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34,KEY_INSERT:45,_withinElement:function(d,c){var b=d.relatedTarget;
while(b&&b!=c){try{b=b.parentNode}catch(a){b=c}}return b===c},_addEventListener:function(d,c){var e,b=this.special[c];
if(!b||b.setup.call(d)===NO){var a=SC.guidFor(d);this._elements[a]=d;e=SC.data(d,"listener")||SC.data(d,"listener",function(){return SC.Event.handle.apply(SC.Event._elements[a],arguments)
});if(d.addEventListener){d.addEventListener(c,e,NO)}else{if(d.attachEvent){d.attachEvent("on"+c,e)
}}}d=b=e=null},_removeEventListener:function(c,b){var d,a=SC.Event.special[b];if(!a||(a.teardown.call(c)===NO)){d=SC.data(c,"listener");
if(d){if(c.removeEventListener){c.removeEventListener(b,d,NO)}else{if(c.detachEvent){c.detachEvent("on"+b,d)
}}}}c=a=d=null},_elements:{},normalizeEvent:function(a){if(a===window.event){return SC.Event.create(a)
}else{return a.normalized?a:SC.Event.create(a)}},_global:{},_props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target timeStamp toElement type view which touches targetTouches changedTouches animationName elapsedTime".split(" ")});
SC.Event.prototype={hasCustomEventHandling:NO,touchesForView:function(a){if(this.touchContext){return this.touchContext.touchesForView(a)
}},touchesForResponder:function(a){if(this.touchContext){return this.touchContext.touchesForView(a)
}},averagedTouchesForView:function(a){if(this.touchContext){return this.touchContext.averagedTouchesForView(a)
}return null},allowDefault:function(){this.hasCustomEventHandling=YES;return this
},preventDefault:function(){var a=this.originalEvent;if(a){if(a.preventDefault){a.preventDefault()
}a.returnValue=NO}this.hasCustomEventHandling=YES;return this},stopPropagation:function(){var a=this.originalEvent;
if(a){if(a.stopPropagation){a.stopPropagation()}a.cancelBubble=YES}this.hasCustomEventHandling=YES;
return this},stop:function(){return this.preventDefault().stopPropagation()},normalized:YES,getCharString:function(){if(SC.browser.msie){if(this.keyCode==8||this.keyCode==9||(this.keyCode>=37&&this.keyCode<=40)){return String.fromCharCode(0)
}else{return(this.keyCode>0)?String.fromCharCode(this.keyCode):null}}else{return(this.charCode>0)?String.fromCharCode(this.charCode):null
}},commandCodes:function(){var e=this.keyCode,b=null,c=null,a="",d;if(e){b=SC.FUNCTION_KEYS[e];
if(!b&&(this.altKey||this.ctrlKey||this.metaKey)){b=SC.PRINTABLE_KEYS[e]}if(b){if(this.altKey){a+="alt_"
}if(this.ctrlKey||this.metaKey){a+="ctrl_"}if(this.shiftKey){a+="shift_"}}}if(!b){e=this.which;
c=b=String.fromCharCode(e);d=b.toLowerCase();if(this.metaKey){a="meta_";b=d}else{b=null
}}if(b){b=a+b}return[b,c]}};SC.Event.observe=SC.Event.add;SC.Event.stopObserving=SC.Event.remove;
SC.Event.fire=SC.Event.trigger;if(SC.browser.msie){SC.Event.add(window,"unload",SC.Event.prototype,SC.Event.unload)
}SC.MODIFIER_KEYS={16:"shift",17:"ctrl",18:"alt"};SC.FUNCTION_KEYS={8:"backspace",9:"tab",13:"return",19:"pause",27:"escape",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",44:"printscreen",45:"insert",46:"delete",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scrolllock"};
SC.PRINTABLE_KEYS={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",188:",",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:'"'};
SC.SYSTEM_CURSOR="default";SC.AUTO_CURSOR=SC.DEFAULT_CURSOR="auto";SC.CROSSHAIR_CURSOR="crosshair";
SC.HAND_CURSOR=SC.POINTER_CURSOR="pointer";SC.MOVE_CURSOR="move";SC.E_RESIZE_CURSOR="e-resize";
SC.NE_RESIZE_CURSOR="ne-resize";SC.NW_RESIZE_CURSOR="nw-resize";SC.N_RESIZE_CURSOR="n-resize";
SC.SE_RESIZE_CURSOR="se-resize";SC.SW_RESIZE_CURSOR="sw-resize";SC.S_RESIZE_CURSOR="s-resize";
SC.W_RESIZE_CURSOR="w-resize";SC.IBEAM_CURSOR=SC.TEXT_CURSOR="text";SC.WAIT_CURSOR="wait";
SC.HELP_CURSOR="help";SC.Cursor=SC.Object.extend({init:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("cursorStyle")||SC.DEFAULT_CURSOR,c=this.constructor.sharedStyleSheet(),b=SC.guidFor(this);
if(c.insertRule){c.insertRule("."+b+" {cursor: "+a+";}",c.cssRules?c.cssRules.length:0)
}else{if(c.addRule){c.addRule("."+b,"cursor: "+a)}}this.cursorStyle=a;this.className=b;
return this},className:null,cursorStyle:SC.DEFAULT_CURSOR,cursorStyleDidChange:function(){var d,f,c,e,g,b,a;
d=this.get("cursorStyle")||SC.DEFAULT_CURSOR;f=this._rule;if(f){f.style.cursor=d;
return}c="."+this.get("className");e=this.constructor.sharedStyleSheet();g=(e.cssRules?e.cssRules:e.rules)||[];
for(b=0,a=g.length;b<a;++b){f=g[b];if(f.selectorText===c){this._rule=f;f.style.cursor=d;
break}}}.observes("cursorStyle")});SC.Cursor.sharedStyleSheet=function(){var b,a=this._styleSheet;
if(!a){a=document.createElement("style");a.type="text/css";b=document.getElementsByTagName("head")[0];
if(!b){b=document.documentElement}b.appendChild(a);a=document.styleSheets[document.styleSheets.length-1];
this._styleSheet=a}return a};SC.Responder=SC.Object.extend({isResponder:YES,pane:null,responderContext:null,nextResponder:null,isFirstResponder:NO,hasFirstResponder:NO,acceptsFirstResponder:YES,becomingFirstResponder:NO,becomeFirstResponder:function(){var a=this.get("pane")||this.get("responderContext")||this.pane();
if(a&&this.get("acceptsFirstResponder")){if(a.get("firstResponder")!==this){a.makeFirstResponder(this)
}}return this},resignFirstResponder:function(a){var b=this.get("pane")||this.get("responderContext");
if(b&&(b.get("firstResponder")===this)){b.makeFirstResponder(null,a)}return YES},willLoseFirstResponder:function(a){},didBecomeFirstResponder:function(a){}});
SC.Theme=SC.Object.extend({concatenatedProperties:"classNames".w(),isTheme:YES,classNames:[],find:function(a){var c=this.themeClass,b=null;
while(c&&!b){b=c.find(a);c=c.baseTheme}return b}});SC.mixin(SC.Theme,{extend:function(){var a=SC.Object.extend.apply(this,arguments);
a.themes={};a.baseTheme=this;a.prototype.themeClass=a;a.renderers=a.prototype;return a
},subtheme:function(a,c){var b=this.extend({classNames:SC.$A(c)});this.register(a,b);
return b},themes:{},find:function(a){var b=this.themes[a];if(SC.none(b)){return null
}return b},register:function(b,c){var a=c.create();this.themes[b]=a;return a}});SC.BaseTheme=SC.Theme.extend({classNames:[]});
SC.Theme.register("sc-base",SC.BaseTheme);sc_require("system/browser");sc_require("system/event");
sc_require("system/cursor");sc_require("system/responder");sc_require("system/theme");
sc_require("mixins/string");SC.viewKey=SC.guidKey+"_view";SC.LAYOUT_HORIZONTAL="sc-layout-horizontal";
SC.LAYOUT_VERTICAL="sc-layout-vertical";SC._VIEW_DEFAULT_DIMS="marginTop marginLeft".w();
SC.ANCHOR_TOP={top:0};SC.ANCHOR_LEFT={left:0};SC.ANCHOR_TOP_LEFT={top:0,left:0};SC.ANCHOR_BOTTOM={bottom:0};
SC.ANCHOR_RIGHT={right:0};SC.ANCHOR_BOTTOM_RIGHT={bottom:0,right:0};SC.FULL_WIDTH={left:0,right:0};
SC.FULL_HEIGHT={top:0,bottom:0};SC.ANCHOR_CENTER={centerX:0,centerY:0};SC.LAYOUT_AUTO="auto";
SC.CONTEXT_MENU_ENABLED=NO;SC.TABBING_ONLY_INSIDE_DOCUMENT=YES;SC.FROM_THEME="__FROM_THEME__";
SC.EMPTY_CHILD_VIEWS_ARRAY=[];SC.EMPTY_CHILD_VIEWS_ARRAY.needsClone=YES;SC.CSS_TRANSFORM_MAP={rotate:function(a){if(SC.typeOf(a)===SC.T_NUMBER||a===0){a+="deg"
}return"rotate("+a+")"},scale:function(a){if(SC.typeOf(a)===SC.T_ARRAY){a=a.join(", ")
}return"scale("+a+")"}};SC.ANIMATABLE_PROPERTIES=["top","left","bottom","right","width","height","centerX","centerY","opacity","scale","rotate"];
SC.View=SC.Responder.extend(SC.DelegateSupport,{concatenatedProperties:"outlets displayProperties layoutProperties classNames renderMixin didCreateLayerMixin willDestroyLayerMixin createRendererMixin updateRendererMixin".w(),pane:function(){var a=this;
while(a&&!a.isPane){a=a.get("parentView")}return a}.property("parentView").cacheable(),page:null,splitView:function(){var a=this;
while(a&&!a.isSplitView){a=a.get("parentView")}return a}.property("parentView").cacheable(),parentView:null,backgroundColor:null,useStaticLayout:NO,_baseThemeName:false,baseTheme:null,_baseThemeProperty:function(a,c){if(SC.typeOf(c)===SC.T_STRING){this.set("_baseThemeName",c)
}if(this.get("_baseThemeName")){var d=SC.Theme.find(this.get("_baseThemeName"));if(d){return d
}}var b=this.get("parentView");if(b){return b.get("theme")}return SC.Theme.find("sc-base")
}.property().cacheable(),_last_theme:null,_themeName:false,_baseThemeDidChange:function(){this.notifyPropertyChange("theme")
}.observes("baseTheme"),_themeProperty:function(a,c){if(SC.typeOf(c)===SC.T_STRING){this.set("_themeName",c)
}var b=this.get("baseTheme");if(this.get("_themeName")){var d;if(b){d=b.find(this.get("_themeName"));
if(d){return d}}d=SC.Theme.find(this.get("_themeName"));if(d){return d}}return b}.property().cacheable(),_notifyThemeDidChange:function(){var b,a,c=this.get("childViews");
b=c.length;for(a=0;a<b;a++){c[a].notifyPropertyChange("baseTheme");c[a].notifyPropertyChange("theme")
}},theme:null,_themeDidChange:function(){var a=this.get("theme");if(a===this._last_theme){return
}this._last_theme=a;if(this.get("layer")){this.replaceLayer()}if(this._hasCreatedChildViews){this._notifyThemeDidChange()
}this._generateRenderer()}.observes("theme"),themed:function(a){var b=this.get(a);
if(b===SC.FROM_THEME){if(this.renderer){return this.renderer[a]}else{return this.get(a+"Default")
}}return b},_generateRenderer:function(){var d=this.get("theme");this._destroyRenderer();
if(d&&d.isTheme){this._viewRenderer=d.view();if(this.createRenderer){this.renderer=this.createRenderer(d);
if(this.renderer){var c,b,a;this.renderer.contentProvider=this;if(c=this.createRendererMixin){a=c.length;
for(b=0;b<a;b++){c[b].call(this,d)}}}}}this._updateViewRenderer();this._updateRenderer()
},_updateRenderer:function(){var c,b,a;if(this.renderer){this.updateRenderer(this.renderer);
if(c=this.updateRendererMixin){a=c.length;for(b=0;b<a;b++){c[b].call(this,this.renderer)
}}}},_destroyRenderer:function(){if(!this.renderer){return}this.renderer.destroy();
this.renderer=null},isEnabled:YES,isEnabledBindingDefault:SC.Binding.oneWay().bool(),isEnabledInPane:function(){var a=this.get("isEnabled"),b;
if(a&&(b=this.get("parentView"))){a=b.get("isEnabledInPane")}return a}.property("parentView","isEnabled"),_sc_view_isEnabledDidChange:function(){if(!this.get("isEnabled")&&this.get("isFirstResponder")){this.resignFirstResponder()
}}.observes("isEnabled"),acceptsMultitouch:NO,hasTouch:NO,routeTouch:YES,isVisible:YES,isVisibleBindingDefault:SC.Binding.bool(),isVisibleInWindow:NO,isContextMenuEnabled:function(){return SC.CONTEXT_MENU_ENABLED
}.property(),recomputeIsVisibleInWindow:function(c){var e=this.get("isVisibleInWindow"),g=this.get("isVisible"),d;
if(g){if(c===undefined){d=this.get("parentView");c=d?d.get("isVisibleInWindow"):NO
}g=g&&c}this.set("isVisibleInWindow",g);var f=this.get("childViews"),b=f.length,a;
for(a=0;a<b;a++){f[a].recomputeIsVisibleInWindow(g)}if(g){this.displayDidChange();
if(this.get("childViewsNeedLayout")){this.invokeOnce(this.layoutChildViewsIfNeeded)
}}else{this._forceLayerUpdateDueToVisibilityChange=YES;this.displayDidChange();if(this.get("isFirstResponder")){this.resignFirstResponder()
}}return this},_sc_isVisibleDidChange:function(){this.recomputeIsVisibleInWindow()
}.observes("isVisible"),childViews:SC.EMPTY_CHILD_VIEWS_ARRAY,insertBefore:function(b,d){b.beginPropertyChanges();
if(b.get("parentView")){b.removeFromParent()}if(this.willAddChild){this.willAddChild(b,d)
}if(b.willAddToParent){b.willAddToParent(this,d)}b.set("parentView",this);var a,c=this.get("childViews");
if(c.needsClone){this.set(c=[])}a=(d)?c.indexOf(d):c.length;if(a<0){a=c.length}c.insertAt(a,b);
b.parentViewDidChange();b.layoutDidChange();var e=b.get("pane");if(e&&e.get("isPaneAttached")){b._notifyDidAppendToDocument()
}if(this.didAddChild){this.didAddChild(b,d)}if(b.didAddToParent){b.didAddToParent(this,d)
}b.endPropertyChanges();return this},removeChild:function(b){if(!b){return this}if(b.parentView!==this){throw"%@.removeChild(%@) must belong to parent".fmt(this,b)
}if(SC.platform.supportsCSSTransitions){this.resetAnimation()}if(b.willRemoveFromParent){b.willRemoveFromParent()
}if(this.willRemoveChild){this.willRemoveChild(b)}b.set("parentView",null);var c=this.get("childViews"),a=c.indexOf(b);
if(a>=0){c.removeAt(a)}b.parentViewDidChange();if(this.didRemoveChild){this.didRemoveChild(b)
}if(b.didRemoveFromParent){b.didRemoveFromParent(this)}return this},removeAllChildren:function(){var b=this.get("childViews"),a;
while(a=b.objectAt(b.get("length")-1)){this.removeChild(a)}return this},removeFromParent:function(){var a=this.get("parentView");
if(a){a.removeChild(this)}return this},replaceChild:function(a,b){a.beginPropertyChanges();
b.beginPropertyChanges();this.beginPropertyChanges();this.insertBefore(a,b).removeChild(b);
this.endPropertyChanges();b.endPropertyChanges();a.endPropertyChanges();return this
},replaceAllChildren:function(c){var b=c.get("length"),a;this.beginPropertyChanges();
this.destroyLayer().removeAllChildren();for(a=0;a<b;a++){this.appendChild(c.objectAt(a))
}this.replaceLayer();this.endPropertyChanges();return this},appendChild:function(a){return this.insertBefore(a,null)
},parentViewDidChange:function(){this.recomputeIsVisibleInWindow();this.resetBuildState();
this.notifyPropertyChange("baseTheme");this.set("layerLocationNeedsUpdate",YES);this.invokeOnce(this.updateLayerLocationIfNeeded);
this._invalidatePaneCacheForSelfAndAllChildViews();return this},_invalidatePaneCacheForSelfAndAllChildViews:function(){var d,c=this.get("childViews"),b=c.length,a;
this.notifyPropertyChange("pane");for(a=0;a<b;++a){d=c[a];if(d._invalidatePaneCacheForSelfAndAllChildViews){d._invalidatePaneCacheForSelfAndAllChildViews()
}}},layer:function(a,c){if(c!==undefined){this._view_layer=c}else{c=this._view_layer;
if(!c){var b=this.get("parentView");if(b){b=b.get("layer")}if(b){this._view_layer=c=this.findLayerInParentLayer(b)
}b=null}}return c}.property("isVisibleInWindow").cacheable(),$:function(c){var a,b=this.get("layer");
a=!b?SC.$([]):(c===undefined)?SC.$(b):SC.$(c,b);b=null;return a},containerLayer:function(){return this.get("layer")
}.property("layer").cacheable(),layerId:function(){return SC.guidFor(this)}.property().cacheable(),_lastLayerId:null,layerIdDidChange:function(){var a=this.get("layer");
if(a&&this.get("layerId")!==this._lastLayerId){if(this._lastLayerId){delete SC.View.views[this._lastLayerId]
}this._lastLayerId=this.get("layerId");SC.View.views[this.get("layerId")]=this;a.id=this.get("layerId")
}}.observes("layerId"),findLayerInParentLayer:function(d){var a=this.get("layerId"),f,c,b,h,e;
if(d.getElementById){e=d.getElementById(a)}else{e=document.getElementById(a)}if(SC.browser.msie&&e&&e.id!==a){e=null
}if(!e&&d.querySelector){e=d.querySelector("#"+a)}if(!e){e=d.firstChild;var g=[];
g.push(d);while(g.length!==0){f=g[0];g.shift();if(f.id===a){h=true;e=f;break}for(c=0,b=f.childNodes.length;
c<b;c++){g.push(f.childNodes[c])}}if(!h){e=null}}return e},isDescendantOf:function(a){var b=this.get("parentView");
if(this===a){return YES}else{if(b){return b.isDescendantOf(a)}else{return NO}}},displayDidChange:function(){this.set("layerNeedsUpdate",YES);
return this},layerNeedsUpdate:NO,_view_layerNeedsUpdateDidChange:function(){if(this.get("layerNeedsUpdate")){this.invokeOnce(this.updateLayerIfNeeded)
}}.observes("layerNeedsUpdate"),updateLayerIfNeeded:function(){var b=this._forceLayerUpdateDueToVisibilityChange,a=(b||this.get("isVisibleInWindow"))&&this.get("layerNeedsUpdate");
if(a){if(this.get("layer")){this.beginPropertyChanges();this.set("layerNeedsUpdate",NO);
this.updateLayer();this.endPropertyChanges()}}else{this.set("layerNeedsUpdate",NO)
}this._forceLayerUpdateDueToVisibilityChange=NO;return this},updateLayer:function(e){var c,b,a,f=this.renderer,g=this._viewRenderer;
this.updateViewSettings();this._updateViewRenderer();this._updateRenderer();if(!this._useRenderFirst&&this.createRenderer){if(f){f.update()
}if(g){g.update()}}else{var d=e||this.renderContext(this.get("layer"));this.render(d,NO);
if(c=this.renderMixin){a=c.length;for(b=0;b<a;++b){c[b].call(this,d,NO)}}d.update();
if(d._innerHTMLReplaced){var h=this.get("pane");if(h&&h.get("isPaneAttached")){this._notifyDidAppendToDocument()
}}}if(this.useStaticLayout){this.viewDidResize()}if(this.didUpdateLayer){this.didUpdateLayer()
}if(this.designer&&this.designer.viewDidUpdateLayer){this.designer.viewDidUpdateLayer()
}return this},renderContext:function(a){return SC.RenderContext(a)},createLayer:function(){if(this.get("layer")){return this
}var a=this.renderContext(this.get("tagName"));this.renderToContext(a);this.set("layer",a.element());
this._notifyDidCreateLayer();return this},_notifyDidCreateLayer:function(){this.notifyPropertyChange("layer");
this._viewRenderer.attachLayer(this);if(this.renderer){this.renderer.attachLayer(this)
}if(this.didCreateLayer){this.didCreateLayer()}if(SC.platform.supportsCSSTransitions){this.resetAnimation();
SC.Event.add(this.get("layer"),SC.platform.cssPrefix+"TransitionEnd",this,this._scv_animationEnd);
SC.Event.add(this.get("layer"),"transitionEnd",this,this._scv_animationEnd)}var c=this.didCreateLayerMixin,b,a,d=this.get("childViews");
if(c){b=c.length;for(a=0;a<b;++a){c[a].call(this)}}b=d.length;for(a=0;a<b;++a){if(!d[a]){continue
}d[a]._notifyDidCreateLayer()}},destroyLayer:function(){var a=this.get("layer");if(a){if(SC.platform.supportsCSSTransitions){SC.Event.remove(this.get("layer"),SC.platform.cssPrefix+"TransitionEnd",this,this._scv_animationEnd);
SC.Event.remove(this.get("layer"),"transitionEnd",this,this._scv_animationEnd)}this._notifyWillDestroyLayer();
if(this._viewRenderer){this._viewRenderer.detachLayer()}if(this.renderer){this.renderer.detachLayer()
}if(a.parentNode){a.parentNode.removeChild(a)}a=null}return this},replaceLayer:function(){this.destroyLayer();
this.set("layerLocationNeedsUpdate",YES);this.invokeOnce(this.updateLayerLocationIfNeeded)
},_notifyWillDestroyLayer:function(){if(this.willDestroyLayer){this.willDestroyLayer()
}var c=this.willDestroyLayerMixin,b,a,d=this.get("childViews");if(c){b=c.length;for(a=0;
a<b;++a){c[a].call(this)}}b=d.length;for(a=0;a<b;++a){d[a]._notifyWillDestroyLayer()
}this.set("layer",null)},isLayerProvider:YES,getLayer:function(){return this.get("layer")
},renderToContext:function(d,e){var c,b,a;this.beginPropertyChanges();this.set("layerNeedsUpdate",NO);
this.renderViewSettings(d);if(this.createRenderer){this._updateRenderer()}if(!this._useRenderFirst&&this.createRenderer){if(this.renderer){this.renderer.render(d)
}}else{if(SC.none(e)){e=YES}this.render(d,e);if(c=this.renderMixin){a=c.length;for(b=0;
b<a;++b){c[b].call(this,d,e)}}}this.endPropertyChanges()},_updateViewRenderer:function(){if(!this._viewRenderer){return
}var a=this.get("classNames");if(this.get("theme")){a=a.concat(this.get("theme").classNames)
}this._scv_willRenderAnimations();this._viewRenderer.attr({layerId:this.layerId?this.get("layerId"):SC.guidFor(this),classNames:a,backgroundColor:this.get("backgroundColor"),cursor:this.get("cursor"),layoutStyle:this.get("layoutStyle"),isTextSelectable:this.get("isTextSelectable"),isEnabled:this.get("isEnabled"),isVisible:this.get("isVisible"),isFirstResponder:this.get("isFirstResponder"),hasStaticLayout:this.get("useStaticLayout")})
},renderViewSettings:function(a){this._updateViewRenderer();this.renderLayout(a,YES);
this._viewRenderer.render(a)},updateViewSettings:function(){this._updateViewRenderer();
this._viewRenderer.update()},prepareContext:function(a,b){if(SC.none(b)){b=YES}if(b){this.renderToContext(a)
}else{this.updateLayer(a)}},renderChildViews:function(a,b){if(b||a){this.renderContent(a,b)
}else{this.updateContent(a)}return a},renderContent:function(e,f){var d=this.get("childViews"),b=d.length,a,c;
for(a=0;a<b;++a){c=d[a];if(!c){continue}e=e.begin(c.get("tagName"));c.renderToContext(e,f);
e=e.end()}},updateContent:function(e){var d=this.get("childViews"),b=d.length,a,c;
for(a=0;a<b;++a){c=d[a];if(!c){continue}c.updateLayer(e)}},render:function(a,c){var b=this.renderer;
if(this.createRenderer&&b){if(c){b.render(a)}else{b.update()}}else{if(c){this.renderChildViews(a,c)
}}},_notifyDidAppendToDocument:function(){if(this.didAppendToDocument){this.didAppendToDocument()
}var c=0,d,a,b=this.get("childViews");for(c=0,a=b.length;c<a;c++){d=b[c];if(d._notifyDidAppendToDocument){d._notifyDidAppendToDocument()
}}},tagName:"div",classNames:["sc-view"],toolTip:null,isTextSelectable:NO,displayProperties:["isFirstResponder","isVisible"],cursor:null,shouldInheritCursor:YES,layerLocationNeedsUpdate:NO,updateLayerLocationIfNeeded:function(a){if(this.get("layerLocationNeedsUpdate")){this.set("layerLocationNeedsUpdate",NO);
this.updateLayerLocation()}return this},updateLayerLocation:function(){var e=this.get("layer"),d=this.get("parentView"),b=d?d.get("containerLayer"):null;
if(e&&e.parentNode&&e.parentNode!==b){e.parentNode.removeChild(e)}if(!d){if(e&&e.parentNode){e.parentNode.removeChild(e)
}}else{if(!b){if(e){if(e.parentNode){e.parentNode.removeChild(e)}this.destroyLayer()
}}else{if(!e){this.createLayer();e=this.get("layer");if(!e){return}}var f=d.get("childViews"),c=f.objectAt(f.indexOf(this)+1),a=(c)?c.get("layer"):null;
if(c&&(!a||a.parentNode!==b)){c.updateLayerLocationIfNeeded();a=c.get("layer")}if((e.parentNode!==b)||(e.nextSibling!==a)){b.insertBefore(e,a)
}}}b=d=e=a=null;return this},nextResponder:function(){return this.get("parentView")
}.property("parentView").cacheable(),acceptsFirstResponder:NO,isKeyResponder:NO,willLoseKeyResponderTo:function(a){},willBecomeKeyResponderFrom:function(a){},didLoseKeyResponderTo:function(a){},didBecomeKeyResponderFrom:function(a){},interpretKeyEvents:function(b){var a=b.commandCodes(),d=a[0],e=a[1],g;
if(!d&&!e){return null}if(d){var h=SC.MODIFIED_KEY_BINDINGS[d]||SC.BASE_KEY_BINDINGS[d.match(/[^_]+$/)[0]];
if(h){var f=this,c=this.get("pane"),i=null;while(f&&!(i=f.tryToPerform(h,b))){f=(f===c)?null:f.get("nextResponder")
}return i}}if(e&&this.respondsTo("insertText")){g=this.insertText(e,b);return g?(g===YES?this:g):null
}return null},insertText:function(a){return NO},performKeyEquivalent:function(e,c){var d=NO,f=this.get("childViews"),b=f.length,a=-1;
while(!d&&(++a<b)){d=f[a].performKeyEquivalent(e,c)}return d},nextKeyView:null,nextValidKeyView:function(){var a=[],c=this.pane(),b=this.get("nextKeyView");
if(!b){b=c._computeNextValidKeyView(this,a)}if(SC.TABBING_ONLY_INSIDE_DOCUMENT&&!b){b=c._computeNextValidKeyView(c,a)
}return b}.property("nextKeyView"),_computeNextValidKeyView:function(g,b){var c=this.get("nextKeyView"),e,d,a,f;
if(this!==g&&b.indexOf(g)!=-1&&this.get("acceptsFirstResponder")&&this.get("isVisibleInWindow")){return this
}b.push(this);if(!c){e=this.get("childViews");for(d=0,a=e.length;d<a;d++){f=e[d];
if(f.get("isVisibleInWindow")&&f.get("isVisible")){c=f._computeNextValidKeyView(g,b)
}if(c){return c}}c=null}return c},previousKeyView:null,previousValidKeyView:function(){var a=[],c=this.pane(),b=this.get("previousKeyView");
if(!b){b=c._computePreviousValidKeyView(this,a)}return b}.property("previousKeyView"),_computePreviousValidKeyView:function(f,a){var b=this.get("previousKeyView"),d,c,e;
if(this!==f&&a.indexOf(f)!=-1&&this.get("acceptsFirstResponder")&&this.get("isVisibleInWindow")){return this
}a.push(this);if(!b){d=this.get("childViews");for(c=d.length-1;0<=c;c--){e=d[c];if(e.get("isVisibleInWindow")&&e.get("isVisible")){b=e._computePreviousValidKeyView(f,a)
}if(b){return b}}b=null}return b},init:function(){var n,o,k,m,f,e,a;arguments.callee.base.apply(this,arguments);
var g=this.baseTheme;this.baseTheme=this._baseThemeProperty;this.set("baseTheme",g);
var b=this.theme;this.theme=this._themeProperty;this.set("theme",b);var l=-1,d=-1,j=0,h=this.constructor;
while(h&&h.prototype.render){if(l<0&&h.prototype.render!==this.render){l=j}if(d<0&&h.prototype.createRenderer!==this.createRenderer){d=j
}if(d>=0&&l>=0){break}j=j+1;h=h.superclass}if(l<d&&l>=0){this._useRenderFirst=YES
}else{this._useRenderFirst=NO}if(!this.get("isMaterialized")){SC.View.views[this.get("layerId")]=this
}var i=this.get("childViews");this.childViews=i?i.slice():[];this.createChildViews();
this._hasCreatedChildViews=YES;a=this.get("displayProperties");m=a.length;while(--m>=0){this.addObserver(a[m],this,this.displayDidChange)
}if(this.get("isDropTarget")){SC.Drag.addDropTarget(this)}if(this.get("isScrollable")){SC.Drag.addScrollableView(this)
}},awake:function(){arguments.callee.base.apply(this,arguments);var c=this.get("childViews"),b=c.length,a;
for(a=0;a<b;++a){if(!c[a]){continue}c[a].awake()}},destroy:function(){if(this.get("isDestroyed")){return this
}this._destroy();this.removeFromParent();if(this.get("isDropTarget")){SC.Drag.removeDropTarget(this)
}if(this.get("isScrollable")){SC.Drag.removeScrollableView(this)}arguments.callee.base.apply(this,arguments);
return this},_destroy:function(){if(this.get("isDestroyed")){return this}this.destroyLayer();
var c=this.get("childViews"),b=c.length,a;if(b){c=c.slice();for(a=0;a<b;++a){c[a].destroy()
}}delete SC.View.views[this.get("layerId")];delete this._CQ;delete this.page;return this
},createChildViews:function(){var f=this.get("childViews"),b=f.length,a,e,d,c;this.beginPropertyChanges();
for(a=0;a<b;++a){if(e=(c=f[a])){if(typeof e===SC.T_STRING){c=this[e]}else{e=null}if(!c){console.error("No view with name "+e+" has been found in "+this.toString());
continue}if(c.isClass){c=this.createChildView(c);if(e){this[e]=c}}}f[a]=c}this.endPropertyChanges();
return this},createChildView:function(a,b){if(!b){b={}}b.owner=b.parentView=this;
b.isVisibleInWindow=this.get("isVisibleInWindow");if(!b.page){b.page=this.page}a=a.create(b);
return a},propertyDidChange:function(a,c,b){if(a==="layout"){this.layoutDidChange()
}arguments.callee.base.apply(this,arguments)},adjust:function(a,d){var b=SC.clone(this.get("layout")),c=NO,f;
if(a===undefined){return this}if(SC.typeOf(a)===SC.T_STRING){f=b[a];if(SC.none(d)){if(f!==undefined){c=YES
}delete b[a]}else{if(f!==d){c=YES}b[a]=d}}else{var e=a;for(a in e){if(!e.hasOwnProperty(a)){continue
}d=e[a];f=b[a];if(d===null){if(f!==undefined){c=YES}delete b[a]}else{if(d!==undefined){if(f!==d){c=YES
}b[a]=d}}}}if(c){this.set("layout",b)}return this},animate:function(k,h,b,j){var d,l;
if(SC.typeOf(k)===SC.T_HASH){d=k;l=h;j=b}else{d={};d[k]=h;l=b}if(SC.typeOf(l)===SC.T_NUMBER){l={duration:l}
}else{if(SC.typeOf(l)!==SC.T_HASH){throw"Must provide options hash or duration!"}}if(j){l.callback=j
}var e=SC.clone(this.get("layout")),f=NO,g,i,a,c;for(key in d){if(!d.hasOwnProperty(key)){continue
}g=d[key];i=e[key];if(SC.ANIMATABLE_PROPERTIES.contains(key)){c=e["animate"+key.capitalize()];
if(g===null||g===undefined){throw"Can only animate to an actual value!"}else{if(i!==g){f=YES
}if(c&&c.duration!==l.duration){f=YES}e[key]=g;e["animate"+key.capitalize()]=SC.clone(l)
}}else{if(i!==g){f=YES}e[key]=g}}if(f){this.set("layout",e)}return this},resetAnimation:function(){var b=this.get("layout"),c=NO,a;
for(a in b){if(a.substring(0,7)==="animate"){c=YES;delete b[a]}}if(c){this.set("layout",b);
this.notifyPropertyChange("layout")}return this},_scv_willRenderAnimations:function(){if(SC.platform.supportsCSSTransitions){var d=this.get("layer"),b=d?d.style:null,f=this.get("layoutStyle"),a=f[SC.platform.domCSSPrefix+"Transition"],e=this.get("layout"),c;
if(this._activeAnimations){for(c in this._activeAnimations){if(f[c]!==b[c]||!this._pendingAnimations||!this._pendingAnimations[c]||this._activeAnimations[c].duration!==this._pendingAnimations[c].duration){var g=this._activeAnimations[c].callback;
if(g){if(this._animatedTransforms&&this._animatedTransforms.length>0){for(idx=0;idx<this._animatedTransforms.length;
idx++){this._scv_runAnimationCallback(g,null,this._animatedTransforms[idx],YES)}this._animatedTransforms=null
}else{this._scv_runAnimationCallback(g,null,c,YES)}}this._scv_removeAnimationFromLayout(c,YES)
}}}this._activeAnimations=this._pendingAnimations;this._pendingAnimations=null}else{var c;
for(c in this._pendingAnimations){var g=this._pendingAnimations[c].callback;if(g){this._scv_runAnimationCallback(g,null,c,NO)
}this._scv_removeAnimationFromLayout(c,NO,YES)}this._activeAnimations=this._pendingAnimations=null
}},_scv_removeAnimationFromLayout:function(b,g,a){if(g){var d=this.get("layer"),f=[],c;
for(c in this._activeAnimations){if(c!==b){f.push(this._activeAnimations[c].css)}}d.style[SC.platform.domCSSPrefix+"Transition"]=f.join(", ")
}var e=this.get("layout");if(b==="-"+SC.platform.cssPrefix+"-transform"&&this._animatedTransforms&&this._animatedTransforms.length>0){for(idx=0;
idx<this._animatedTransforms.length;idx++){delete e["animate"+this._animatedTransforms[idx].capitalize()]
}this._animatedTransforms=null}delete e["animate"+b.capitalize()];if(!a){delete this._activeAnimations[b]
}},_scv_runAnimationCallback:function(d,a,b,c){if(d){if(SC.typeOf(d)!==SC.T_HASH){d={action:d}
}d.source=this;if(!d.target){d.target=this}}SC.View.runCallback(d,{event:a,propertyName:b,view:this,isCancelled:c})
},_scv_animationEnd:function(a){var b=a.originalEvent.propertyName,c=this.get("layout"),d;
d=this._activeAnimations?this._activeAnimations[b]:null;if(d){if(d.callback){SC.RunLoop.begin();
if(this._animatedTransforms&&this._animatedTransforms.length>0){for(idx=0;idx<this._animatedTransforms.length;
idx++){this.invokeLater("_scv_runAnimationCallback",1,d.callback,a,this._animatedTransforms[idx],NO)
}}else{this.invokeLater("_scv_runAnimationCallback",1,d.callback,a,b,NO)}SC.RunLoop.end()
}this._scv_removeAnimationFromLayout(b,YES)}},layout:{top:0,left:0,bottom:0,right:0},convertFrameToView:function(i,d){var c=0,b=0,g=0,e=0,a=this,h;
while(a){h=a.get("frame");c+=h.x;b+=h.y;a=a.get("layoutView")}if(d){a=d;while(a){h=a.get("frame");
g+=h.x;e+=h.y;a=a.get("layoutView")}}c=i.x+c-g;b=i.y+b-e;return{x:c,y:b,width:i.width,height:i.height}
},convertFrameFromView:function(i,d){var c=0,b=0,g=0,e=0,a=this,h;while(a&&(h=a.get("frame"))){c+=h.x;
b+=h.y;a=a.get("parentView")}if(d){a=d;while(a){h=a.get("frame");g+=h.x;e+=h.y;a=a.get("parentView")
}}c=i.x-c+g;b=i.y-b+e;return{x:c,y:b,width:i.width,height:i.height}},scrollToVisible:function(){var a=this.get("parentView");
while(a&&!a.get("isScrollable")){a=a.get("parentView")}if(a){a.scrollToVisible();
return a.scrollToVisible(this)}else{return NO}},frame:function(){return this.computeFrameWithParentFrame(null)
}.property("useStaticLayout").cacheable(),computeFrameWithParentFrame:function(h){var r=this.get("layout"),q={},o,u,n=SC.LAYOUT_AUTO,p=this.get("useStaticLayout"),m=this.get("parentView"),i,d,l,b,a=r.right,c=r.left,t=r.top,g=r.bottom,s=r.width,e=r.height,k=r.centerX,j=r.centerY;
if(s!==undefined&&s===SC.LAYOUT_AUTO&&p!==undefined&&!p){o=SC.Error.desc(("%@.layout() cannot use width:auto if staticLayout is disabled").fmt(this),"%@".fmt(this),-1);
console.error(o.toString());throw o}if(e!==undefined&&e===SC.LAYOUT_AUTO&&p!==undefined&&!p){o=SC.Error.desc(("%@.layout() cannot use height:auto if staticLayout is disabled").fmt(this),"%@".fmt(this),-1);
console.error(o.toString());throw o}if(p){if(u=this.get("layer")){q=SC.viewportOffset(u);
if(m){q=m.convertFrameFromView(q,null)}q.width=u.offsetWidth;q.height=u.offsetHeight;
return q}return null}if(!h){h=this.computeParentDimensions(r)}i=h.height;d=h.width;
if(!SC.none(c)){if(SC.isPercentage(c)){q.x=d*c}else{q.x=c}if(s!==undefined){if(s===n){q.width=n
}else{if(SC.isPercentage(s)){q.width=d*s}else{q.width=s}}}else{q.width=d-q.x;if(a&&SC.isPercentage(a)){q.width=q.width-(a*d)
}else{q.width=q.width-(a||0)}}}else{if(!SC.none(a)){if(SC.none(s)){if(SC.isPercentage(c)){q.width=d-(d*a)
}else{q.width=d-a}q.x=0}else{if(s===n){q.width=n}else{if(SC.isPercentage(s)){q.width=d*s
}else{q.width=(s||0)}}if(SC.isPercentage(s)){q.x=d-(a*d)-q.width}else{q.x=d-a-q.width
}}}else{if(!SC.none(k)){if(s===n){q.width=n}else{if(SC.isPercentage(s)){q.width=s*d
}else{q.width=(s||0)}}if(SC.isPercentage(k)){q.x=(d-q.width)/2+(k*d)}else{q.x=(d-q.width)/2+k
}}else{q.x=0;if(SC.none(s)){q.width=d}else{if(s===n){q.width=n}if(SC.isPercentage(s)){q.width=s*d
}else{q.width=(s||0)}}}}}if(!SC.none(t)){if(SC.isPercentage(t)){q.y=t*i}else{q.y=t
}if(e!==undefined){if(e===n){q.height=n}else{if(SC.isPercentage(e)){q.height=e*i}else{q.height=e
}}}else{if(g&&SC.isPercentage(g)){q.height=i-q.y-(g*i)}else{q.height=i-q.y-(g||0)
}}}else{if(!SC.none(g)){if(SC.none(e)){if(SC.isPercentage(g)){q.height=i-(g*i)}else{q.height=i-g
}q.y=0}else{if(e===n){q.height=n}if(e&&SC.isPercentage(e)){q.height=e*i}else{q.height=(e||0)
}if(SC.isPercentage(g)){q.y=i-(g*i)-q.height}else{q.y=i-g-q.height}}}else{if(!SC.none(j)){if(e===n){q.height=n
}if(e&&SC.isPercentage(e)){q.height=e*i}else{q.height=(e||0)}if(SC.isPercentage(j)){q.y=(i-q.height)/2+(j*i)
}else{q.y=(i-q.height)/2+j}}else{q.y=0;if(SC.none(e)){q.height=i}else{if(e===n){q.height=n
}if(SC.isPercentage(e)){q.height=e*i}else{q.height=e||0}}}}}q.x=Math.floor(q.x);q.y=Math.floor(q.y);
if(q.height!==n){q.height=Math.floor(q.height)}if(q.width!==n){q.width=Math.floor(q.width)
}if(q.height===n||q.width===n){u=this.get("layer");if(q.height===n){q.height=u?u.clientHeight:0
}if(q.width===n){q.width=u?u.clientWidth:0}}if(this.get("hasBorder")){l=this.get("borderTop");
b=this.get("borderLeft");q.height-=l+this.get("borderBottom");q.y+=l;q.width-=b+this.get("borderRight");
q.x+=b}if(m&&m.isScrollContainer){m=m.get("parentView");q.x-=m.get("horizontalScrollOffset");
q.y-=m.get("verticalScrollOffset")}if(!SC.none(r.maxHeight)&&(q.height>r.maxHeight)){q.height=r.maxHeight
}if(!SC.none(r.minHeight)&&(q.height<r.minHeight)){q.height=r.minHeight}if(!SC.none(r.maxWidth)&&(q.width>r.maxWidth)){q.width=r.maxWidth
}if(!SC.none(r.minWidth)&&(q.width<r.minWidth)){q.width=r.minWidth}if(q.height<0){q.height=0
}if(q.width<0){q.width=0}return q},computeParentDimensions:function(e){var b,c=this.get("parentView"),a=(c)?c.get("frame"):null;
if(a){b={width:a.width,height:a.height}}else{var d=e;b={width:(d.left||0)+(d.width||0)+(d.right||0),height:(d.top||0)+(d.height||0)+(d.bottom||0)}
}return b},clippingFrame:function(){var d=this.get("frame"),a=d,b,c;if(!d){return null
}b=this.get("parentView");if(b){c=b.get("contentClippingFrame");if(!c){return d}a=SC.intersectRects(c,d)
}a.x-=d.x;a.y-=d.y;return a}.property("parentView","frame").cacheable(),contentClippingFrame:function(){return this.get("clippingFrame")
}.property("clippingFrame").cacheable(),_sc_view_clippingFrameDidChange:function(){var d=this.get("childViews"),b=d.length,a,c;
for(a=0;a<b;++a){c=d[a];if(!c.useStaticLayout){c.notifyPropertyChange("clippingFrame");
c._sc_view_clippingFrameDidChange()}}},parentViewDidResize:function(){var b=this.get("layout"),a,d,c;
c=((b.left!==undefined)&&(b.top!==undefined)&&(b.width!==undefined)&&(b.height!==undefined));
a=SC.isPercentage;d=(a(b.left)||a(b.top)||a(b.width)||a(b.right)||a(b.centerX)||a(b.centerY));
if(!c||d){this.viewDidResize()}},viewDidResize:function(){this._viewFrameDidChange();
var d=this.childViews,b=d.length,a,c;for(a=0;a<b;++a){c=d[a];c.parentViewDidResize()
}},_viewFrameDidChange:function(){this.notifyPropertyChange("frame");this._sc_view_clippingFrameDidChange()
},beginLiveResize:function(){if(this.willBeginLiveResize){this.willBeginLiveResize()
}var d=this.get("childViews"),b=d.length,a,c;for(a=0;a<b;++a){c=d[a];if(c.beginLiveResize){c.beginLiveResize()
}}return this},endLiveResize:function(){var d=this.get("childViews"),b=d.length,a,c;
for(a=b-1;a>=0;--a){c=d[a];if(c.endLiveResize){c.endLiveResize()}}if(this.didEndLiveResize){this.didEndLiveResize()
}return this},wantsAcceleratedLayer:NO,hasAcceleratedLayer:function(){return this.get("wantsAcceleratedLayer")&&SC.platform.supportsCSSTransforms
}.property("wantsAcceleratedLayer").cacheable(),layoutStyle:function(){var u=this.get("layout"),w={},L=null,s,t=SC.LAYOUT_AUTO,c=SC._VIEW_DEFAULT_DIMS,j=c.length,B,C,o,p=this.get("useStaticLayout"),G=u.right,I=u.left,F=u.top,a=u.bottom,D=u.width,M=u.height,q=u.maxWidth,v=u.maxHeight,l=u.centerX,k=u.centerY,z=this.get("hasAcceleratedLayer"),g=null,E=null;
if(D!==undefined&&D===SC.LAYOUT_AUTO&&!p){s=SC.Error.desc("%@.layout() you cannot use width:auto if ".fmt(this)+"staticLayout is disabled","%@".fmt(this),-1);
console.error(s.toString());throw s}if(M!==undefined&&M===SC.LAYOUT_AUTO&&!p){s=SC.Error.desc("%@.layout() you cannot use height:auto if ".fmt(this)+"staticLayout is disabled","%@".fmt(this),-1);
console.error(s.toString());throw s}if(SC.platform.supportsCSSTransforms){var n=NO,d;
for(o in u){if(o.substring(0,7)==="animate"){if(SC.CSS_TRANSFORM_MAP[o.substring(7).camelize()]){n=YES;
if(this._pendingAnimations&&this._pendingAnimations["-"+SC.platform.cssPrefix+"-transform"]){throw"Animations of transforms must be executed simultaneously!"
}if(d&&u[o].duration!==d){console.warn("Can't animate transforms with different durations! Using first duration specified.");
u[o].duration=d}d=u[o].duration}}}if(n&&((u.animateTop&&u.animateTop.duration!==d)||(u.animateLeft&&u.animateLeft.duration!==d))){z=NO
}}if(!SC.none(I)){if(SC.isPercentage(I)){w.left=(I*100)+"%"}else{if(z&&!SC.empty(D)){E=Math.floor(I);
w.left=0}else{w.left=Math.floor(I)}}w.marginLeft=0;if(D!==undefined){if(D===SC.LAYOUT_AUTO){w.width=SC.LAYOUT_AUTO
}else{if(SC.isPercentage(D)){w.width=(D*100)+"%"}else{w.width=Math.floor(D)}}w.right=null
}else{w.width=null;if(G&&SC.isPercentage(G)){w.right=(G*100)+"%"}else{w.right=Math.floor(G||0)
}}}else{if(!SC.none(G)){if(SC.isPercentage(G)){w.right=Math.floor(G*100)+"%"}else{w.right=Math.floor(G)
}w.marginLeft=0;if(SC.none(D)){if(SC.none(q)){w.left=0}w.width=null}else{w.left=null;
if(D===SC.LAYOUT_AUTO){w.width=SC.LAYOUT_AUTO}else{if(D&&SC.isPercentage(D)){w.width=(D*100)+"%"
}else{w.width=Math.floor(D||0)}}}}else{if(!SC.none(l)){w.left="50%";if(D&&SC.isPercentage(D)){w.width=(D*100)+"%"
}else{w.width=Math.floor(D||0)}if(D&&SC.isPercentage(D)&&(SC.isPercentage(l)||SC.isPercentage(l*-1))){w.marginLeft=Math.floor((l-D/2)*100)+"%"
}else{if(D&&D>=1&&!SC.isPercentage(l)){w.marginLeft=Math.floor(l-w.width/2)}else{console.warn("You have to set width and centerX using both percentages or pixels");
w.marginLeft="50%"}}w.right=null}else{if(!SC.none(D)){w.left=0;w.right=null;if(D===SC.LAYOUT_AUTO){w.width=SC.LAYOUT_AUTO
}else{if(SC.isPercentage(D)){w.width=(D*100)+"%"}else{w.width=Math.floor(D)}}w.marginLeft=0
}else{w.left=0;w.right=0;w.width=null;w.marginLeft=0}}}}w.minWidth=(u.minWidth===undefined)?null:u.minWidth;
w.maxWidth=(u.maxWidth===undefined)?null:u.maxWidth;if(!SC.none(F)){if(SC.isPercentage(F)){w.top=(F*100)+"%"
}else{if(z&&!SC.empty(M)){g=Math.floor(F);w.top=0}else{w.top=Math.floor(F)}}if(M!==undefined){if(M===SC.LAYOUT_AUTO){w.height=SC.LAYOUT_AUTO
}else{if(SC.isPercentage(M)){w.height=(M*100)+"%"}else{w.height=Math.floor(M)}}w.bottom=null
}else{w.height=null;if(a&&SC.isPercentage(a)){w.bottom=(a*100)+"%"}else{w.bottom=Math.floor(a||0)
}}w.marginTop=0}else{if(!SC.none(a)){w.marginTop=0;if(SC.isPercentage(a)){w.bottom=(a*100)+"%"
}else{w.bottom=Math.floor(a)}if(SC.none(M)){if(SC.none(v)){w.top=0}w.height=null}else{w.top=null;
if(M===SC.LAYOUT_AUTO){w.height=SC.LAYOUT_AUTO}else{if(M&&SC.isPercentage(M)){w.height=(M*100)+"%"
}else{w.height=Math.floor(M||0)}}}}else{if(!SC.none(k)){w.top="50%";w.bottom=null;
if(M&&SC.isPercentage(M)){w.height=(M*100)+"%"}else{w.height=Math.floor(M||0)}if(M&&SC.isPercentage(M)&&(SC.isPercentage(k)||SC.isPercentage(k*-1))){w.marginTop=Math.floor((k-M/2)*100)+"%"
}else{if(M&&M>=1&&!SC.isPercentage(k)){w.marginTop=Math.floor(k-w.height/2)}else{console.warn("You have to set height and centerY to use both percentages or pixels");
w.marginTop="50%"}}}else{if(!SC.none(M)){w.top=0;w.bottom=null;if(M===SC.LAYOUT_AUTO){w.height=SC.LAYOUT_AUTO
}else{if(M&&SC.isPercentage(M)){w.height=(M*100)+"%"}else{w.height=Math.floor(M||0)
}}w.marginTop=0}else{w.top=0;w.bottom=0;w.height=null;w.marginTop=0}}}}w.minHeight=(u.minHeight===undefined)?null:u.minHeight;
w.maxHeight=(u.maxHeight===undefined)?null:u.maxHeight;w.zIndex=SC.none(u.zIndex)?null:u.zIndex.toString();
w.opacity=SC.none(u.opacity)?null:u.opacity.toString();w.backgroundPosition=SC.none(u.backgroundPosition)?null:u.backgroundPosition.toString();
while(--j>=0){B=c[j];if(w[B]===0){w[B]=null}}if(SC.platform.supportsCSSTransforms){var y=SC.platform.domCSSPrefix+"Transform",b=this.get("layer"),J=(b?b.style[y]:"").split(" "),i,f=[],H;
if(z){if(this._lastAcceleratedTransforms){J.removeObjects(this._lastAcceleratedTransforms)
}i=["translateX("+(E||0)+"px)","translateY("+(g||0)+"px)"];if(SC.platform.supportsCSS3DTransforms&&!J.join(" ").match("translateZ")){i.push("translateZ(0px)")
}this._lastAcceleratedTransforms=i}var f=[],m;for(m in SC.CSS_TRANSFORM_MAP){var r=[],H;
for(H=0;H<J.length;H++){if(!J[H].match(new RegExp("^"+m+"\\("))){r.push(J[H])}}J=r;
if(u[m]){f.push(SC.CSS_TRANSFORM_MAP[m](u[m]))}}f=f.join(" ");var h=J.concat(i,f).without(undefined).without("").join(" ");
if(h!==""){w[y]=h}}if(!this.isAnimatable){var e=[],K,A;this._animatedTransforms=[];
for(o in u){if(o.substring(0,7)==="animate"){K=u[o];if(K.timing){if(SC.typeOf(K.timing)!=SC.T_STRING){K.timing="cubic-bezier("+K.timing[0]+", "+K.timing[1]+", "+K.timing[2]+", "+K.timing[3]+")"
}}else{K.timing="linear"}A=o.substring(7).camelize();if(SC.platform.supportsCSSTransforms&&((z&&((A==="top"&&!SC.empty(g))||(A==="left"&&!SC.empty(E))))||SC.CSS_TRANSFORM_MAP[A])){this._animatedTransforms.push(A);
A="-"+SC.platform.cssPrefix+"-transform"}K.css=A+" "+K.duration+"s "+K.timing;if(!this._pendingAnimations){this._pendingAnimations={}
}if(!this._pendingAnimations[A]){this._pendingAnimations[A]=K;e.push(K.css)}}}if(SC.platform.supportsCSSTransitions){w[SC.platform.domCSSPrefix+"Transition"]=e.length>0?e.join(", "):null
}}for(o in w){C=w[o];if(typeof C===SC.T_NUMBER){w[o]=(C+"px")}}return w}.property().cacheable(),layoutView:function(){return this.get("parentView")
}.property("parentView").cacheable(),layoutDidChange:function(){var c=this._previousLayout,e=this.get("layout"),a=YES,h,f,d,g;
if(c&&c!==e){h=c.width;if(h!==undefined){d=e.width;if(h===d){f=c.height;if(c!==undefined){g=e.height;
if(f===g){a=NO}}}}}this.beginPropertyChanges();this.notifyPropertyChange("layoutStyle");
if(a){this.viewDidResize()}else{this._viewFrameDidChange()}this.endPropertyChanges();
var b=this.get("layoutView");if(b){b.set("childViewsNeedLayout",YES);b.layoutDidChangeFor(this);
if(b.get("childViewsNeedLayout")){b.invokeOnce(b.layoutChildViewsIfNeeded)}}return this
},childViewsNeedLayout:NO,layoutDidChangeFor:function(b){var a=this._needLayoutViews;
if(!a){a=this._needLayoutViews=SC.CoreSet.create()}a.add(b)},layoutChildViewsIfNeeded:function(a){if(!a){a=this.get("isVisibleInWindow")
}if(a&&this.get("childViewsNeedLayout")){this.set("childViewsNeedLayout",NO);this.layoutChildViews()
}return this},layoutChildViews:function(){var c=this._needLayoutViews,a=c?c.length:0,b;
for(b=0;b<a;++b){c[b].updateLayout()}c.clear()},updateLayout:function(){var b=this.get("layer"),a;
if(b){a=this.renderContext(b);this.renderLayout(a);a.update();if(this.useStaticLayout){this.viewDidResize()
}}b=null;return this},renderLayout:function(a,b){this._viewRenderer.attr({layoutStyle:this.get("layoutStyle")});
this._scv_willRenderAnimations();this._viewRenderer.render(a)},isView:YES,selectStart:function(a){return this.get("isTextSelectable")
},contextMenu:function(a){if(!this.get("isContextMenuEnabled")){a.stop()}return true
},touchBoundary:{left:50,right:50,top:50,bottom:50},_touchBoundaryFrame:function(){return this.get("parentView").convertFrameToView(this.get("frame"),null)
}.property("frame","parentView").cacheable(),touchIsInBoundary:function(h){var c=this.get("_touchBoundaryFrame"),d=0,b=0,g=this.get("touchBoundary");
var a=h.pageX,e=h.pageY;if(a<c.x){a=c.x-a;d=g.left}else{if(a>c.x+c.width){a=a-(c.x+c.width);
d=g.right}else{a=0;d=1}}if(e<c.y){e=c.y-e;b=g.top}else{if(e>c.y+c.height){e=e-(c.y+c.height);
b=g.bottom}else{e=0;b=1}}if(a>100||e>100){return NO}return YES},buildInChild:function(a){a.willBuildInToView(this);
this.appendChild(a);a.buildInToView(this)},buildOutChild:function(a){a.buildOutFromView(this)
},buildInDidFinishFor:function(a){},buildOutDidFinishFor:function(a){this.removeChild(a)
},isBuildingIn:NO,isBuildingOut:NO,buildIn:function(){this.buildInDidFinish()},buildOut:function(){this.buildOutDidFinish()
},resetBuild:function(){},buildOutDidCancel:function(){},buildInDidCancel:function(){},buildInDidFinish:function(){this.isBuildingIn=NO;
this._buildingInTo.buildInDidFinishFor(this);this._buildingInTo=null},buildOutDidFinish:function(){this.isBuildingOut=NO;
this._buildingOutFrom.buildOutDidFinishFor(this);this._buildingOutFrom=null},resetBuildState:function(){if(this.isBuildingIn){this.buildInDidCancel();
this.isBuildingIn=NO}if(this.isBuildingOut){this.buildOutDidCancel();this.isBuildingOut=NO
}this.buildingInTo=null;this.buildingOutFrom=null;this.resetBuild()},willBuildInToView:function(a){if(this.isBuildingOut){this.buildOutDidCancel()
}},buildInToView:function(a){if(this.isBuildingIn){return}this._buildingInTo=a;this.isBuildingOut=NO;
this.isBuildingIn=YES;this.buildIn()},buildOutFromView:function(a){if(this.isBuildingOut){return
}if(this.isBuildingIn){this.buildInDidCancel()}this.isBuildingOut=YES;this.isBuildingIn=NO;
this._buildingOutFrom=a;this.buildOut()}});SC.View.mixin({isViewClass:YES,design:function(){if(this.isDesign){return this
}var a=this.extend.apply(this,arguments);a.isDesign=YES;if(SC.ViewDesigner){SC.ViewDesigner.didLoadDesign(a,this,SC.A(arguments))
}return a},layout:function(a){this.prototype.layout=a;return this},convertLayoutToAnchoredLayout:function(f,m){var h={top:0,left:0,width:m.width,height:m.height},d=m.width,k=m.height,l=f.right,a=f.left,j=f.top,g=f.bottom,i=f.width,e=f.height,c=f.centerX,b=f.centerY;
if(!SC.none(a)){if(SC.isPercentage(a)){h.left=a*d}else{h.left=a}if(i!==undefined){if(i===SC.LAYOUT_AUTO){h.width=SC.LAYOUT_AUTO
}else{if(SC.isPercentage(i)){h.width=i*d}else{h.width=i}}}else{if(l&&SC.isPercentage(l)){h.width=d-h.left-(l*d)
}else{h.width=d-h.left-(l||0)}}}else{if(!SC.none(l)){if(SC.none(i)){h.left=0;if(l&&SC.isPercentage(l)){h.width=d-(l*d)
}else{h.width=d-(l||0)}}else{if(i===SC.LAYOUT_AUTO){h.width=SC.LAYOUT_AUTO}else{if(SC.isPercentage(i)){h.width=i*d
}else{h.width=i}if(SC.isPercentage(l)){h.left=d-(h.width+l)}else{h.left=d-(h.width+l)
}}}}else{if(!SC.none(c)){if(i&&SC.isPercentage(i)){h.width=(i*d)}else{h.width=(i||0)
}h.left=((d-h.width)/2);if(SC.isPercentage(c)){h.left=h.left+c*d}else{h.left=h.left+c
}}else{if(!SC.none(i)){h.left=0;if(i===SC.LAYOUT_AUTO){h.width=SC.LAYOUT_AUTO}else{if(SC.isPercentage(i)){h.width=i*d
}else{h.width=i}}}else{h.left=0;h.width=0}}}}if(f.minWidth!==undefined){h.minWidth=f.minWidth
}if(f.maxWidth!==undefined){h.maxWidth=f.maxWidth}if(!SC.none(j)){if(SC.isPercentage(j)){h.top=j*k
}else{h.top=j}if(e!==undefined){if(e===SC.LAYOUT_AUTO){h.height=SC.LAYOUT_AUTO}else{if(SC.isPercentage(e)){h.height=e*k
}else{h.height=e}}}else{h.height=k-h.top;if(g&&SC.isPercentage(g)){h.height=h.height-(g*k)
}else{h.height=h.height-(g||0)}}}else{if(!SC.none(g)){if(SC.none(e)){h.top=0;if(g&&SC.isPercentage(g)){h.height=k-(g*k)
}else{h.height=k-(g||0)}}else{if(e===SC.LAYOUT_AUTO){h.height=SC.LAYOUT_AUTO}else{if(SC.isPercentage(e)){h.height=e*k
}else{h.height=e}h.top=k-h.height;if(SC.isPercentage(g)){h.top=h.top-(g*k)}else{h.top=h.top-g
}}}}else{if(!SC.none(b)){if(e&&SC.isPercentage(e)){h.height=(e*k)}else{h.height=(e||0)
}h.top=((k-h.height)/2);if(SC.isPercentage(b)){h.top=h.top+b*k}else{h.top=h.top+b
}}else{if(!SC.none(e)){h.top=0;if(e===SC.LAYOUT_AUTO){h.height=SC.LAYOUT_AUTO}else{if(SC.isPercentage(e)){h.height=e*k
}else{h.height=e}}}else{h.top=0;h.height=0}}}}if(h.top){h.top=Math.floor(h.top)}if(h.bottom){h.bottom=Math.floor(h.bottom)
}if(h.left){h.left=Math.floor(h.left)}if(h.right){h.right=Math.floor(h.right)}if(h.width!==SC.LAYOUT_AUTO){h.width=Math.floor(h.width)
}if(h.height!==SC.LAYOUT_AUTO){h.height=Math.floor(h.height)}if(f.minHeight!==undefined){h.minHeight=f.minHeight
}if(f.maxHeight!==undefined){h.maxHeight=f.maxHeight}return h},convertLayoutToCustomLayout:function(b,a,c){},classNames:function(a){a=(this.prototype.classNames||[]).concat(a);
this.prototype.classNames=a;return this},tagName:function(a){this.prototype.tagName=a;
return this},childView:function(a){var b=this.prototype.childViews||[];if(b===this.superclass.prototype.childViews){b=b.slice()
}b.push(a);this.prototype.childViews=b;return this},bind:function(b,d){var c=this.prototype,a=this.superclass.prototype;
var e=c._bindings;if(!e||e===a._bindings){e=c._bindings=(e||[]).slice()}b=b+"Binding";
c[b]=d;e.push(b);return this},prop:function(a,b){this.prototype[a]=b;return this},localization:function(b,a){if(a){b.rootElement=SC.$(a)[0]
}return b},viewFor:function(d,c){var b=SC.$A(arguments);if(SC.none(d)){b.shift()}else{b[0]={rootElement:SC.$(d)[0]}
}var a=this.create.apply(this,arguments);b=b[0]=null;return a},create:function(){var b=this,a=new b(arguments);
if(SC.ViewDesigner){SC.ViewDesigner.didCreateView(a,SC.$A(arguments))}return a},loc:function(e){var b=e.childViews;
delete e.childViews;this.applyLocalizedAttributes(e);if(SC.ViewDesigner){SC.ViewDesigner.didLoadLocalization(this,SC.$A(arguments))
}var d=this.prototype.childViews,a=d.length,c;while(--a>=0){c=d[a];e=b[a];if(e&&c&&c.loc){c.loc(e)
}}return this},applyLocalizedAttributes:function(a){SC.mixin(this.prototype,a)},views:{}});
SC.outlet=function(b,a){return function(c){return(this[c]=SC.objectForPropertyPath(b,(a!==undefined)?a:this))
}.property()};SC.View.unload=function(){var a=SC.View.views;if(a){for(var b in a){if(!a.hasOwnProperty(b)){continue
}delete a[b]}}};SC.View.runCallback=function(g){var b=SC.$A(arguments).slice(1),a=SC.typeOf(g.action);
if(a==SC.T_FUNCTION){g.action.apply(g.target,b)}else{if(a===SC.T_STRING){if(g.action.indexOf(".")>=0){var f=g.action.split(".");
var d=f.pop();var e=SC.objectForPropertyPath(f,window);var c=e.get?e.get(d):e[d];
if(c&&SC.typeOf(c)==SC.T_FUNCTION){c.apply(e,b)}else{throw"SC.Animator could not find a function at %@".fmt(g.action)
}}}}};if(SC.browser.msie){SC.Event.add(window,"unload",SC.View,SC.View.unload)}SC.Validatable={initMixin:function(){this._validatable_validatorDidChange()
},validator:null,errorLabel:null,isValid:function(){return SC.typeOf(this.get("value"))!==SC.T_ERROR
}.property("value"),ownerForm:null,performValidate:function(c){var a=SC.VALIDATE_OK;
if(this._validator){var b=this.get("ownerForm");if(c){a=this._validator.validatePartial(b,this);
if((a==SC.VALIDATE_NO_CHANGE)&&(this._validator.validateChange(b,this)==SC.VALIDATE_OK)){a=SC.VALIDATE_OK
}}else{a=this._validator.validateChange(b,this)}}return a},performValidateSubmit:function(){return this._validator?this._validator.validateSubmit(this.get("ownerForm"),this):SC.VALIDATE_OK
},performValidateKeyDown:function(a){var b=a.getCharString();if(!b){return YES}return this._validator?this._validator.validateKeyDown(this.get("ownerForm"),this,b):YES
},validatorObject:function(){return this._validator}.property(),validateSubmit:function(){return this.performValidateSubmit()
},objectForFieldValue:function(b,a){return this._validator?this._validator.objectForFieldValue(b,this.get("ownerForm"),this):b
},fieldValueForObject:function(a){return this._validator?this._validator.fieldValueForObject(a,this.get("ownerForm"),this):a
},_validatable_displayObserver:function(){this.displayDidChange()}.observes("isValid"),renderMixin:function(a){a.setClass("invalid",!this.get("isValid"))
},_validatable_validatorDidChange:function(){var a=this.get("ownerForm");var b=SC.Validator.findFor(a,this,this.get("validator"));
if(b!=this._validator){this.propertyWillChange("validatorObject");if(this._validator){this._validator.detachFrom(a,this)
}this._validator=b;if(this._validator){this._validator.attachTo(a,this)}this.propertyDidChange("validatorObject")
}}.observes("validator","ownerForm")};sc_require("views/view");sc_require("mixins/control");
sc_require("mixins/validatable");SC.FieldView=SC.View.extend(SC.Control,SC.Validatable,{isTextArea:NO,_field_isMouseDown:NO,fieldValue:function(){var a=this.get("value");
if(SC.typeOf(a)===SC.T_ERROR){a=a.get("errorValue")}return this.fieldValueForObject(a)
}.property("value","validator").cacheable(),$input:function(){if(this.get("isTextArea")){return this.$("textarea").andSelf().filter("textarea")
}else{return this.$("input").andSelf().filter("input")}},setFieldValue:function(b){if(SC.none(b)){b=""
}var a=this.$input();if(a.val()!==b){a.val(b)}return this},getFieldValue:function(){return this.$input().val()
},_field_fieldValueDidChange:function(a){SC.RunLoop.begin();this.fieldValueDidChange(NO);
SC.RunLoop.end()},fieldValueDidChange:function(a){var c=this.getFieldValue();var b=this.objectForFieldValue(c,a);
this.setIfChanged("value",b)},_field_valueDidChange:function(){this.setFieldValue(this.get("fieldValue"))
}.observes("fieldValue"),didCreateLayer:function(){this.setFieldValue(this.get("fieldValue"));
SC.Event.add(this.$input(),"change",this,this._field_fieldValueDidChange)},didAppendToDocument:function(){if(this.get("isTextArea")){this.setFieldValue(this.get("fieldValue"));
SC.Event.add(this.$input(),"change",this,this._field_fieldValueDidChange)}},willDestroyLayer:function(){SC.Event.remove(this.$input(),"change",this,this._field_fieldValueDidChange)
},mouseDown:function(a){this._field_isMouseDown=YES;a.allowDefault();return YES},mouseOut:function(a){if(this._field_isMouseDown){this.set("isActive",NO)
}a.allowDefault();return YES},mouseOver:function(a){this.set("isActive",this._field_isMouseDown);
a.allowDefault();return YES},mouseUp:function(a){if(this._field_isMouseDown){this.set("isActive",NO)
}this._field_isMouseDown=NO;a.allowDefault();return YES},keyDown:function(b){if(b.which===9){var a=b.shiftKey?this.get("previousValidKeyView"):this.get("nextValidKeyView");
if(a){a.becomeFirstResponder()}else{b.allowDefault()}return YES}if(this.performValidateKeyDown(b)){this._isKeyDown=YES;
b.allowDefault()}else{b.stop()}return YES},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled"),willBecomeKeyResponderFrom:function(a){if(!this._isFocused){this._isFocused=YES;
this.becomeFirstResponder();if(this.get("isVisibleInWindow")){this.$input()[0].focus()
}}},willLoseKeyResponderTo:function(a){if(this._isFocused){this._isFocused=NO}},_field_setFieldValue:function(b){this.propertyWillChange("fieldValue");
if(this.fieldValueForObject){b=this.fieldValueForObject(b)}var a=this.setFieldValue(b);
this.propertyDidChange("fieldValue");return a},_field_getFieldValue:function(){var a=this.getFieldValue();
if(this.objectForFieldValue){a=this.objectForFieldValue(a)}return a}});SC.TextSelection=SC.Object.extend(SC.Copyable,SC.Freezable,{start:-1,end:-1,length:function(){var b=this.get("start");
var a=this.get("end");if((b)===-1||(a===-1)){return -1}else{return a-b}}.property("start","end").cacheable(),init:function(){arguments.callee.base.apply(this,arguments);
this.freeze()},copy:function(){return SC.TextSelection.create({start:this.get("start"),end:this.get("end")})
},toString:function(){var a=this.get("length");if(a&&a>0){if(a===1){return"[%@ character selected: {%@, %@}]".fmt(a,this.get("start"),this.get("end"))
}else{return"[%@ characters selected: {%@, %@}]".fmt(a,this.get("start"),this.get("end"))
}}else{return"[no text selected; caret at %@]".fmt(this.get("start"))}}});SC.StaticLayout={hasStaticLayout:YES};
sc_require("views/field");sc_require("system/text_selection");sc_require("mixins/static_layout");
SC.TextFieldView=SC.FieldView.extend(SC.StaticLayout,SC.Editable,{tagName:"label",classNames:["sc-text-field-view"],applyImmediately:YES,isPassword:NO,isTextArea:NO,hint:"",isEditing:NO,hintON:YES,defaultTabbingEnabled:YES,isContextMenuEnabled:YES,continuouslyUpdatesValue:YES,allowsErrorAsValue:YES,leftAccessoryView:null,rightAccessoryView:null,spellCheckEnabled:YES,maxLength:5096,_isFocused:NO,init:function(){var a=this.get("hintON"),b=this.get("value");
if(!b||b&&b.length===0){this.set("hintON",YES)}else{this.set("hintON",NO)}return arguments.callee.base.apply(this,arguments)
},isEditable:function(){return this.get("isEnabled")}.property("isEnabled").cacheable(),selection:function(j,h){var d=this.$input()[0],e,a,c;
if(h===undefined){if(d){a=null;c=null;if(!d.value){a=c=0}else{if("selectionStart" in d){a=d.selectionStart
}if("selectionEnd" in d){c=d.selectionEnd}if(a===null||c===null){var i=document.selection;
if(i){var g=i.type;if(g&&(g==="None"||g==="Text")){e=i.createRange();if(!this.get("isTextArea")){var b=e.text.length;
a=Math.abs(e.moveStart("character",0-(d.value.length+1)));c=a+b}else{var f=e.duplicate();
f.moveToElementText(d);f.setEndPoint("EndToStart",e);a=f.text.length;c=a+e.text.length
}}}}}return SC.TextSelection.create({start:a,end:c})}else{return null}}else{if(!h||!h.kindOf||!h.kindOf(SC.TextSelection)){throw"When setting the selection, you must specify an SC.TextSelection instance."
}if(d){if(d.setSelectionRange){d.setSelectionRange(h.get("start"),h.get("end"))}else{e=d.createTextRange();
a=h.get("start");e.move("character",a);e.moveEnd("character",h.get("end")-a);e.select()
}}return h}}.property("fieldValue").cacheable(),displayProperties:"hint fieldValue isEditing leftAccessoryView rightAccessoryView isTextArea".w(),createChildViews:function(){arguments.callee.base.apply(this,arguments);
this.accessoryViewObserver()},acceptsFirstResponder:function(){return this.get("isEnabled")
}.property("isEnabled"),accessoryViewObserver:function(){var f,h=["leftAccessoryView","rightAccessoryView"],a=h.length,b,e,d,g;
for(b=0;b<a;b++){e=h[b];d=this["_"+e];g=this.get(e);if(!(d&&g&&(d===g))){if(d){f=d.get("classNames");
f=f.without("sc-text-field-accessory-view");d.set("classNames",f);this.removeChild(d);
d=null;this["_"+e]=null}if(g){if(g.isClass){g=g.create({layoutView:this})}f=g.get("classNames");
var c="sc-text-field-accessory-view";if(f.indexOf(c)<0){f=SC.clone(f);f.push(c);g.set("classNames",f)
}this.appendChild(g);this["_"+e]=g}}}}.observes("leftAccessoryView","rightAccessoryView"),layoutChildViewsIfNeeded:function(a){if(!a){a=this.get("isVisibleInWindow")
}if(a&&this.get("childViewsNeedLayout")){var b=this.get("rightAccessoryView");if(b&&b.get){var c=b.get("layout");
if(c){c.left=null;if(!c.right){c.right=0}b.adjust({layout:c})}}}arguments.callee.base.apply(this,arguments)
},render:function(e,f){arguments.callee.base.apply(this,arguments);var a,d,c,b;a=this.get("fieldValue");
if(SC.none(a)){a=""}a=String(a);e.setClass("not-empty",a.length>0);d=this._getAccessoryViewWidths();
c=d.left;b=d.right;if(c){c+="px"}if(b){b+="px"}this._renderField(e,f,a,c,b);if(SC.browser.mozilla){this.invokeLast(this._applyFirefoxCursorFix)
}},_forceRenderFirstTime:NO,_renderFieldLikeFirstTime:function(){this.set("_forceRenderFirstTime",YES)
}.observes("isTextArea"),_renderField:function(b,h,m,f,j){var k=this.get("hint"),d,r,n,c,o,a,i,e,l=this.get("spellCheckEnabled"),q,g=this.get("maxLength");
b.setClass("text-area",this.get("isTextArea"));q=l?' spellcheck="true"':' spellcheck="false"';
if(h||this._forceRenderFirstTime){this._forceRenderFirstTime=NO;d=this.get("isEnabled")?"":'disabled="disabled"';
r=this.get("layerId");b.push('<span class="border"></span>');n="";if(f||j){n='style="';
if(f){n+="left: "+f+"; "}if(j){n+="right: "+j+";"}n+='"'}b.push('<span class="padding" '+n+">");
m=this.get("escapeHTML")?SC.RenderContext.escapeHTML(m):m;if(!this.get("_supportsPlaceHolder")&&(!m||(m&&m.length===0))){m=this.get("hint");
b.setClass("sc-hint",YES)}e=(SC.browser.mozilla&&(parseFloat(SC.browser.mozilla)<1.9||SC.browser.mozilla.match(/1\.9\.0|1\.9\.1/)))?"field oldGecko":"field";
if(this.get("isTextArea")){b.push('<textarea class="',e,'" name="',r,'" ',d,' placeholder="',k,'"',q,' maxlength="',g,'">',m,"</textarea></span>")
}else{c=this.get("isPassword")?"password":"text";b.push('<input class="',e,'" type="',c,'" name="',r,'" ',d,' value="',m,'" placeholder="',k,'"',q,' maxlength="',g,'" /></span>')
}}else{if(!this.get("_supportsPlaceHolder")){var p=this.get("value");if((!p||(p&&p.length===0))){if(this.get("hintON")&&!this.get("isFirstResponder")){b.setClass("sc-hint",YES);
this.$input().val(k)}else{b.setClass("sc-hint",NO);this.$input().val("")}}}a=this.$input()[0];
if(a){if(!this.get("isEnabled")){a.disabled="true"}else{a.disabled=null}i=a.parentNode.style;
if(f){if(i.left!==f){i.left=f}}else{i.left=null}if(j){if(i.right!==j){i.right=j}}else{i.right=null
}}}},_getAccessoryViewWidths:function(){var c={},k=["left","right"],d=k.length,f,g,l,j,a,h,e,b;
for(f=0;f<d;f++){g=k[f];l=this.get(g+"AccessoryView");if(l){if(l.isClass){l=l.create({layoutView:this})
}if(l.get){b=l.get("frame");if(b){a=b.width;if(a){h=l.get("layout");if(h){e=h[g];
a+=e}c[g]=a}}}}}return c},didCreateLayer:function(){arguments.callee.base.apply(this,arguments);
if(!this.get("_supportsPlaceHolder")&&this.get("hintON")){var b=this.$input().val();
if(!b||(b&&b.length===0)){this.$input().val(this.get("hint"))}}if(this.get("isTextArea")){this.invokeLast(this._addTextAreaEvents)
}else{this._addTextAreaEvents();if(SC.browser.mozilla){var a=this.$input();SC.Event.add(a,"keypress",this,this._firefox_dispatch_keypress)
}}},_addTextAreaEvents:function(){var a=this.$input();SC.Event.add(a,"focus",this,this._textField_fieldDidFocus);
SC.Event.add(a,"blur",this,this._textField_fieldDidBlur);SC.Event.add(a,"select",this,this._textField_selectionDidChange);
if(SC.browser.mozilla){this._cacheInputElement=this.$input();this._cachePaddingElement=this.$(".padding")
}},willDestroyLayer:function(){arguments.callee.base.apply(this,arguments);var a=this.$input();
SC.Event.remove(a,"focus",this,this._textField_fieldDidFocus);SC.Event.remove(a,"blur",this,this._textField_fieldDidBlur);
SC.Event.remove(a,"select",this,this._textField_selectionDidChange);SC.Event.remove(a,"focus",this,this._firefox_dispatch_keypress)
},_textField_fieldDidFocus:function(a){SC.RunLoop.begin();this.set("focused",YES);
this.fieldDidFocus(a);var b=this.get("value");if(!this.get("_supportsPlaceHolder")&&((!b)||(b&&b.length===0))){this.set("hintON",NO)
}SC.RunLoop.end()},_textField_fieldDidBlur:function(a){SC.RunLoop.begin();this.set("focused",NO);
this.fieldDidBlur(this._origEvent);var b=this.get("value");if(!this.get("_supportsPlaceHolder")&&((!b)||(b&&b.length===0))){this.set("hintON",YES)
}SC.RunLoop.end()},fieldDidFocus:function(a){this.beginEditing(a);if(this.getPath("pane.usingTouchIntercept")){this.get("pane").hideTouchIntercept()
}},fieldDidBlur:function(a){this.commitEditing(a);if(this.getPath("pane.usingTouchIntercept")){this.get("pane").showTouchIntercept()
}},_field_fieldValueDidChange:function(a){if(this.get("focused")){SC.RunLoop.begin();
this.fieldValueDidChange(NO);SC.RunLoop.end()}},_topOffsetForFirefoxCursorFix:3,_applyFirefoxCursorFix:function(){if(parseFloat(SC.browser.mozilla)<1.9&&!this.get("useStaticLayout")){var h,d,c,i,b,g,e,f;
e=this._cacheInputElement;f=this._cachePaddingElement;if(f&&f[0]){g=f[0];b=SC.$(g).offset();
if(SC.browser.compareVersion(1,9,2)<0&&e[0].tagName.toLowerCase()==="input"){h=b.top+this._topOffsetForFirefoxCursorFix
}else{h=b.top}d=b.left;c=g.offsetWidth;i=g.offsetHeight;var a="position: fixed; top: %@px; left: %@px; width: %@px; height: %@px;".fmt(h,d,c,i);
if(!this._prevStyle||this._prevStyle!=a){e.attr("style",a)}this._prevStyle=a}}return this
},_firefox_dispatch_keypress:function(a){var d=this.get("selection"),e=this.get("value"),c=e?e.length:0,b;
if(!d||((d.get("length")===0&&(d.get("start")===0)||d.get("end")===c))){b=SC.RootResponder.responder;
b.keypress.call(b,a);a.stopPropagation()}},_textField_selectionDidChange:function(){this.notifyPropertyChange("selection")
},willBecomeKeyResponderFrom:function(a){if(this.get("isVisibleInWindow")){var b=this.$input()[0];
try{if(b){b.focus()}}catch(c){}if(!this._txtFieldMouseDown){this.invokeLast(this._selectRootElement)
}}},willLoseKeyResponderTo:function(a){},_selectRootElement:function(){var a=this.$input()[0];
if(a){a.select()}else{this._textField_selectionDidChange()}},didLoseKeyResponderTo:function(a){var b=this.$input()[0];
if(b){b.blur()}},parentViewDidResize:function(){if(SC.browser.mozilla){this.invokeLast(this._applyFirefoxCursorFix)
}arguments.callee.base.apply(this,arguments)},keyDown:function(b){var c=b.which;if((c===13&&!b.isIMEInput)&&!this.get("isTextArea")){return NO
}if(c===27){return NO}if(b.which===9&&this.get("defaultTabbingEnabled")){var a=b.shiftKey?this.get("previousValidKeyView"):this.get("nextValidKeyView");
if(a){a.becomeFirstResponder()}else{b.allowDefault()}return YES}if(this.performValidateKeyDown(b)){this._isKeyDown=YES;
b.allowDefault()}else{b.stop()}if(this.get("applyImmediately")){this.invokeLater(this.fieldValueDidChange,1)
}return YES},keyUp:function(a){if(SC.browser.mozilla&&a.keyCode===13){this.fieldValueDidChange()
}this.notifyPropertyChange("selection");this._isKeyDown=NO;a.allowDefault();return YES
},mouseDown:function(a){var b=this.get("fieldValue");this._txtFieldMouseDown=YES;
if(!this.get("isEnabled")){a.stop();return YES}else{return arguments.callee.base.apply(this,arguments)
}},mouseUp:function(a){this._txtFieldMouseDown=NO;this.notifyPropertyChange("selection");
if(!this.get("isEnabled")){a.stop();return YES}return arguments.callee.base.apply(this,arguments)
},mouseWheel:function(a){a.allowDefault();return YES},selectStart:function(a){return YES
},_supportsPlaceHolder:function(){return SC.browser.safari&&!this.get("isTextArea")
}.property("isTextArea").cacheable(),valueObserver:function(){var a=this.get("value");
if(a&&a.length>0){this.set("hintON",NO)}else{this.set("hintON",YES)}}.observes("value")});
sc_require("views/text_field");SC.InlineTextFieldView=SC.TextFieldView.extend(SC.DelegateSupport,{_topOffsetForFirefoxCursorFix:0,beginEditing:function(b){if(!b){throw"InlineTextField.beginEditing() requires options"
}if(this.get("isEditing")){return NO}var d={},f,c,e,a;a=this._delegate=b.delegate;
this.set("delegate",this._delegate);if(!this.invokeDelegateMethod(a,"inlineEditorShouldBeginEditing",this)){SC.Logger.warn("InlineTextField.beginEditing() cannot begin without inlineEditorShouldBeginEditing() on the delegate.");
return NO}this.beginPropertyChanges();this.set("isEditing",YES);this.set("escapeHTML",b.escapeHTML);
this._optframe=b.frame;this._optIsCollection=b.isCollection;this._exampleElement=b.exampleElement;
if(!this._optframe||!this._delegate){throw"At least frame and delegate options are required for inline editor"
}this._originalValue=b.value||"";this._multiline=(b.multiline!==undefined)?b.multiline:NO;
if(this._multiline){this.set("isTextArea",YES)}else{this.set("isTextArea",NO)}this._commitOnBlur=(b.commitOnBlur!==undefined)?b.commitOnBlur:YES;
this.set("validator",b.validator);this.set("value",this._originalValue);f=this._delegate.pane();
d.height=this._optframe.height;d.width=this._optframe.width;c=this._delegate.get("layout");
e=f.$()[0];if(this._optIsCollection&&c.left){d.left=this._optframe.x-c.left-e.offsetLeft-1;
if(SC.browser.msie==7){d.left--}}else{d.left=this._optframe.x-e.offsetLeft-1;if(SC.browser.msie==7){d.left--
}}if(this._optIsCollection&&c.top){d.top=this._optframe.y-c.top-e.offsetTop;if(SC.browser.msie==7){d.top=d.top-2
}}else{d.top=this._optframe.y-e.offsetTop;if(SC.browser.msie==7){d.top=d.top-2}}this.set("layout",d);
this.set("parentNode",f);f.appendChild(this);a=this._delegate;this._className=this.getDelegateProperty(a,"inlineEditorClassName");
if(this._className&&!this.hasClassName(this._className)){this.setClassName(this._className,true)
}this.invokeDelegateMethod(a,"inlineEditorWillBeginEditing",this);this._previousFirstResponder=f?f.get("firstResponder"):null;
this.becomeFirstResponder();this.endPropertyChanges();this.invokeLast(function(){this.invokeDelegateMethod(a,"inlineEditorDidBeginEditing",this)
})},commitEditing:function(a){if(!SC.$ok(this.validateSubmit())){return NO}return this._endEditing(this.get("value"),a)
},discardEditing:function(){return this._endEditing(this._originalValue,null,YES)
},blurEditor:function(a){if(!this.get("isEditing")){return YES}return this._commitOnBlur?this.commitEditing(a):this.discardEditing(a)
},_endEditing:function(d,b,c){if(!this.get("isEditing")){return YES}var a=this._delegate;
if(!this.invokeDelegateMethod(a,"inlineEditorShouldEndEditing",this,d,b,c)){SC.Logger.warn("InlineTextField._endEditing() cannot end without inlineEditorShouldEndEditing() on the delegate.");
return NO}this.invokeDelegateMethod(a,"inlineEditorDidEndEditing",this,d,b,c);if(this._className){this.setClassName(this._className,false)
}this._originalValue=this._delegate=this._exampleElement=this._optframe=this._className=null;
this.set("isEditing",NO);if(this.get("isFirstResponder")){var e=this.get("pane");
if(e&&this._previousFirstResponder){e.makeFirstResponder(this._previousFirstResponder)
}else{this.resignFirstResponder()}}this._previousFirstResponder=null;if(this.get("parentNode")){this.removeFromParent()
}return YES},isEditing:NO,mouseDown:function(a){arguments.callee.base.call(this,a);
return this.get("isEditing")},touchStart:function(a){this.mouseDown(a)},keyDown:function(a){var b=this.interpretKeyEvents(a);
this.fieldValueDidChange(true);return !b?NO:b},insertText:null,_scitf_blurInput:function(){var a=this.$input()[0];
if(a){a.blur()}a=null},willRemoveFromParent:function(){return this._scitf_blurInput()
},willLoseFirstResponder:function(b,a){if(b!==this){return}this._previousFirstResponder=null;
this._origEvent=a;this._scitf_blurInput();return this.blurEditor(a)},cancel:function(){this.discardEditing();
return YES},fieldValueDidChange:function(a){arguments.callee.base.call(this,a)},insertNewline:function(a){if(this._multiline){a.allowDefault();
return arguments.callee.base.call(this,a)}else{if(this.get("value")!=this.$input().val()){this.set("value",this.$input().val())
}this.commitEditing();return YES}},insertTab:function(a){this.resignFirstResponder();
this.commitEditing();if(this._delegate){var b=this._delegate.nextValidKeyView();if(b&&b.beginEditing){b.beginEditing()
}}return YES},insertBacktab:function(a){this.commitEditing();if(this._delegate){var b=this._delegate.previousValidKeyView();
if(b){b.beginEditing()}}return YES},deleteForward:function(a){a.allowDefault();return YES
},deleteBackward:function(a){a.allowDefault();return YES}});SC.InlineTextFieldView.mixin({beginEditing:function(b){this._exampleElement=b.exampleElement;
var a=b.exampleInlineTextFieldView?b.exampleInlineTextFieldView:this,f=b.delegate.get("layout"),e=this.updateViewStyle(),g=this.updateViewPaddingStyle();
var h=".inline-editor input{"+e+"} ";h=h+".inline-editor textarea{"+e+"} .inline-editor .padding{"+g+"}";
var d=document.getElementsByTagName("head")[0],c=document.createElement("style");
c.type="text/css";c.media="screen";if(c.styleSheet){c.styleSheet.cssText=h}else{c.appendChild(document.createTextNode(h))
}d.appendChild(c);this.editor=a.create({classNames:"inline-editor",layout:f});return this.editor.beginEditing(b)
},commitEditing:function(){return this.editor?this.editor.commitEditing():YES},discardEditing:function(){return this.editor?this.editor.discardEditing():YES
},updateViewStyle:function(){var b=this._exampleElement[0],c="",a=SC.getStyle(b,"font-size");
if(a&&a.length>0){c=c+"font-size: "+a+" !important; "}a=SC.getStyle(b,"font-family");
if(a&&a.length>0){c=c+"font-family: "+a+" !important; "}a=SC.getStyle(b,"font-weight");
if(a&&a.length>0){c=c+"font-weight: "+a+" !important; "}a=SC.getStyle(b,"z-index");
if(a&&a.length>0){c=c+"z-index: "+a+" !important; "}a=SC.getStyle(b,"line-height");
if(a&&a.length>0){c=c+"line-height: "+a+" !important; "}a=SC.getStyle(b,"text-align");
if(a&&a.length>0){c=c+"text-align: "+a+" !important; "}a=SC.getStyle(b,"top-margin");
if(a&&a.length>0){c=c+"top-margin: "+a+" !important; "}a=SC.getStyle(b,"bottom-margin");
if(a&&a.length>0){c=c+"bottom-margin: "+a+" !important; "}a=SC.getStyle(b,"left-margin");
if(a&&a.length>0){c=c+"left-margin: "+a+" !important; "}a=SC.getStyle(b,"right-margin");
if(a&&a.length>0){c=c+"right-margin: "+a+" !important; "}return c},updateViewPaddingStyle:function(){var b=this._exampleElement[0];
var c="";var a=SC.getStyle(b,"padding-top");if(a&&a.length>0){c=c+"top: "+a+" !important; "
}a=SC.getStyle(b,"padding-bottom");if(a&&a.length>0){c=c+"bottom: "+a+" !important; "
}a=SC.getStyle(b,"padding-left");if(a&&a.length>0){c=c+"left: "+a+" !important; "
}a=SC.getStyle(b,"padding-right");if(a&&a.length>0){c=c+"right: "+a+" !important; "
}return c},editor:null});sc_require("system/responder");SC.ResponderContext={isResponderContext:YES,trace:NO,defaultResponder:null,nextResponder:function(){return this.get("defaultResponder")
}.property("defaultResponder").cacheable(),firstResponder:null,nextResponderFor:function(a){var b=a.get("nextResponder");
if(typeof b===SC.T_STRING){b=SC.objectForPropertyPath(b,this)}else{if(!b&&(a!==this)){b=this
}}return b},responderNameFor:function(a){if(!a){return"(No Responder)"}else{if(a._scrc_name){return a._scrc_name
}}var b=this.NAMESPACE;this._findResponderNamesFor(this,3,b?[this.NAMESPACE]:[]);
return a._scrc_name||a.toString()},_findResponderNamesFor:function(a,e,d){var b,c;
for(b in a){if(b==="nextResponder"){continue}c=a[b];if(c&&c.isResponder){if(c._scrc_name){continue
}d.push(b);c._scrc_name=d.join(".");if(e>0){this._findResponderNamesFor(c,e-1,d)}d.pop()
}}},makeFirstResponder:function(b,a){var f=this.get("firstResponder"),d=this.get("nextResponder"),e=this.get("trace"),c;
if(this._locked){if(e){console.log("%@: AFTER ACTION: makeFirstResponder => %@".fmt(this,this.responderNameFor(b)))
}this._pendingResponder=b;return}if(e){console.log("%@: makeFirstResponder => %@".fmt(this,this.responderNameFor(b)))
}if(b){b.set("becomingFirstResponder",YES)}this._locked=YES;this._pendingResponder=null;
c=b?b:null;while(c){if(c.get("hasFirstResponder")){break}c=(c===d)?null:this.nextResponderFor(c)
}if(!c){c=d}this._notifyWillLoseFirstResponder(f,f,c,a);if(f){f.set("isFirstResponder",NO)
}this.beginPropertyChanges();this.set("firstResponder",b);if(b){b.set("isFirstResponder",YES)
}this._notifyDidBecomeFirstResponder(b,b,c);this.endPropertyChanges();this._locked=NO;
if(this._pendingResponder){this.makeFirstResponder(this._pendingResponder);this._pendingResponder=null
}if(b){b.set("becomingFirstResponder",NO)}return this},_notifyWillLoseFirstResponder:function(c,e,b,a){if(e===b){return
}e.willLoseFirstResponder(c,a);e.set("hasFirstResponder",NO);var d=this.nextResponderFor(e);
if(d){this._notifyWillLoseFirstResponder(c,d,b)}},_notifyDidBecomeFirstResponder:function(b,d,a){if(d===a){return
}var c=this.nextResponderFor(d);if(c){this._notifyDidBecomeFirstResponder(b,c,a)}d.set("hasFirstResponder",YES);
d.didBecomeFirstResponder(b)},resetFirstResponder:function(){var a=this.get("firstResponder");
if(!a){return}a.willLoseFirstResponder();a.didBecomeFirstResponder()},sendAction:function(g,d,c){var a=this.get("firstResponder"),e=this.get("nextResponder"),f=this.get("trace"),h=NO,b;
this._locked=YES;if(f){console.log("%@: begin action '%@' (%@, %@)".fmt(this,g,d,c))
}if(!h&&!a&&this.tryToPerform){h=this.tryToPerform(g,d,c)}while(!h&&a){if(a.tryToPerform){h=a.tryToPerform(g,d,c)
}if(!h){a=(a===e)?null:this.nextResponderFor(a)}}if(f){if(!h){console.log("%@:  action '%@' NOT HANDLED".fmt(this,g))
}else{console.log("%@: action '%@' handled by %@".fmt(this,g,this.responderNameFor(a)))
}}this._locked=NO;if(b=this._pendingResponder){this._pendingResponder=null;this.makeFirstResponder(b)
}return a}};sc_require("views/view");sc_require("mixins/responder_context");SC.Pane=SC.View.extend(SC.ResponderContext,{isPane:YES,page:null,baseTheme:"sc-base",rootResponder:null,currentWindowSize:null,computeParentDimensions:function(c){if(this.get("designer")&&SC.suppressMain){return arguments.callee.base.apply(this,arguments)
}var b=this.get("currentWindowSize");var d={x:0,y:0,width:1000,height:1000};if(b){d.width=b.width;
d.height=b.height}else{if(SC.RootResponder.responder){var a=SC.RootResponder.responder.get("currentWindowSize");
if(a){d.width=a.width;d.height=a.height}}else{if(window.innerHeight){d.width=window.innerWidth;
d.height=window.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){d.width=document.documentElement.clientWidth;
d.height=document.documentElement.clientHeight}else{if(document.body){d.width=document.body.clientWidth;
d.height=document.body.clientHeight}}}this.windowSizeDidChange(null,d)}}return d},frame:function(){if(this.get("designer")&&SC.suppressMain){return arguments.callee.base.apply(this,arguments)
}return this.computeFrameWithParentFrame(null)}.property(),windowSizeDidChange:function(b,a){this.set("currentWindowSize",a);
this.parentViewDidResize();return this},paneLayoutDidChange:function(){this.invokeOnce(this.updateLayout)
}.observes("layout"),sendEvent:function(c,a,d){var b;if(!d){d=this.get("firstResponder")
}while(d){if(c==="touchStart"){if(a.touchResponder===d){d=null;break}if(!d.get("hasTouch")||d.get("acceptsMultitouch")){if(d.tryToPerform("touchStart",a)){break
}}}else{if(c==="touchEnd"&&!d.get("acceptsMultitouch")){if(!d.get("hasTouch")){if(d.tryToPerform("touchEnd",a)){break
}}}else{if(d.tryToPerform(c,a)){break}}}d=(d===this)?null:d.get("nextResponder")}if(!d&&(d=this.get("defaultResponder"))){if(typeof d===SC.T_STRING){d=SC.objectForPropertyPath(d)
}if(!d){d=null}d=d.tryToPerform(c,a)?d:null}return a.mouseHandler||d},sendTouchEvent:function(e,a,f){var d,b,g=NO,c=[];
if(!f){f=this.get("firstResponder")}while(f){if(f.respondsTo(e)){switch(f[e](a)){case SC.MIXED_STATE:c.push(f);
break;case YES:c=[f];f=null;g=YES;continue}}f=(f===this)?null:f.get("nextResponder")
}if(!g&&(f=this.get("defaultResponder"))){if(typeof f===SC.T_STRING){f=SC.objectForPropertyPath(f)
}if(f){if(f.isResponderContext){c=c.concat(f.sendTouchAction(e,this,a))}else{if(f.respondsTo(e)){b=f[e](a)
}switch(b){case SC.MIXED_STATE:c.push(f);break;case YES:c=[f]}}}}f=null;return c},performKeyEquivalent:function(c,a){var b=arguments.callee.base.apply(this,arguments);
if(!b){var d=this.get("defaultResponder");if(d){if(d.performKeyEquivalent){b=d.performKeyEquivalent(c,a)
}if(!b&&d.tryToPerform){b=d.tryToPerform(c,a)}}}return b},nextResponder:function(){return null
}.property().cacheable(),firstResponder:null,acceptsKeyPane:YES,isKeyPane:NO,becomeKeyPane:function(){if(this.get("isKeyPane")){return this
}if(this.rootResponder){this.rootResponder.makeKeyPane(this)}return this},resignKeyPane:function(){if(!this.get("isKeyPane")){return this
}if(this.rootResponder){this.rootResponder.makeKeyPane(null)}return this},makeFirstResponder:function(b,a){var d=this.get("firstResponder"),c=this.get("isKeyPane");
if(d===b){return this}if(SC.platform.touch&&b&&b.kindOf(SC.TextFieldView)&&!b.get("focused")){return this
}if(d){d.willLoseFirstResponder(d,a)}if(c){if(d){d.willLoseKeyResponderTo(b)}if(b){b.willBecomeKeyResponderFrom(d)
}}if(d){d.beginPropertyChanges().set("isFirstResponder",NO).set("isKeyResponder",NO).endPropertyChanges()
}this.set("firstResponder",b);if(b){b.beginPropertyChanges().set("isFirstResponder",YES).set("isKeyResponder",c).endPropertyChanges()
}if(c){if(b){b.didBecomeKeyResponderFrom(d)}if(d){d.didLoseKeyResponderTo(b)}}if(b){b.didBecomeFirstResponder(b)
}return this},_forwardKeyChange:function(d,b,g,f){var c,a,e;if(d&&(a=this.get("firstResponder"))){e=(g)?g.get("firstResponder"):null;
c=this.get("firstResponder");if(c){c[b](e)}if((f!==undefined)&&a){a.set("isKeyResponder",f)
}}},willLoseKeyPaneTo:function(a){this._forwardKeyChange(this.get("isKeyPane"),"willLoseKeyResponderTo",a,NO);
return this},willBecomeKeyPaneFrom:function(a){this._forwardKeyChange(!this.get("isKeyPane"),"willBecomeKeyResponderFrom",a,YES);
return this},didLoseKeyPaneTo:function(b){var a=this.get("isKeyPane");this.set("isKeyPane",NO);
this._forwardKeyChange(a,"didLoseKeyResponderTo",b);return this},didBecomeKeyPaneFrom:function(b){var a=this.get("isKeyPane");
this.set("isKeyPane",YES);this._forwardKeyChange(!a,"didBecomeKeyResponderFrom",b,YES);
return this},isMainPane:NO,focusFrom:function(a){},blurTo:function(a){},blurMainTo:function(a){this.set("isMainPane",NO)
},focusMainFrom:function(a){this.set("isMainPane",YES)},append:function(){return this.appendTo(document.body)
},remove:function(){if(!this.get("isVisibleInWindow")){return this}if(!this.get("isPaneAttached")){return this
}this.set("isVisibleInWindow",NO);var b=this.get("layer");if(b&&b.parentNode){b.parentNode.removeChild(b)
}b=null;this._removeIntercept();this.resignKeyPane();var a=this.rootResponder;if(this.get("isMainPane")){a.makeMainPane(null)
}a.panes.remove(this);this.rootResponder=null;this.set("isPaneAttached",NO);return this
},appendTo:function(b){var a=this.get("layer");if(!a){a=this.createLayer().get("layer")
}if(this.get("isPaneAttached")&&(a.parentNode===b)){return this}b.insertBefore(a,null);
b=a=null;return this.paneDidAttach()},prependTo:function(b){if(this.get("isPaneAttached")){return this
}var a=this.get("layer");if(!a){a=this.createLayer().get("layer")}if(this.get("isPaneAttached")&&(a.parentNode===b)){return this
}b.insertBefore(a,b.firstChild);b=a=null;return this.paneDidAttach()},before:function(c){if(this.get("isPaneAttached")){return this
}var a=this.get("layer");if(!a){a=this.createLayer().get("layer")}var b=c.parentNode;
if(this.get("isPaneAttached")&&(a.parentNode===b)){return this}b.insertBefore(a,c);
b=c=a=null;return this.paneDidAttach()},after:function(c){var a=this.get("layer");
if(!a){a=this.createLayer().get("layer")}var b=c.parentNode;if(this.get("isPaneAttached")&&(a.parentNode===b)){return this
}b.insertBefore(a,c.nextSibling);b=c=a=null;return this.paneDidAttach()},removeFromParent:function(){},paneDidAttach:function(){var a=(this.rootResponder=SC.RootResponder.responder);
a.panes.add(this);this.set("currentWindowSize",a.computeWindowSize());this.set("isPaneAttached",YES);
this.parentViewDidChange();this._notifyDidAppendToDocument();this._addIntercept();
return this},isPaneAttached:NO,hasTouchIntercept:NO,zIndex:0,touchZ:99,_addIntercept:function(){if(this.get("hasTouchIntercept")&&SC.platform.touch){this.set("usingTouchIntercept",YES);
var a=document.createElement("div");a.style.position="absolute";a.style.left="0px";
a.style.top="0px";a.style.right="0px";a.style.bottom="0px";a.style.webkitTransform="translateZ(0px)";
a.style.zIndex=this.get("zIndex")+this.get("touchZ");a.className="touch-intercept";
a.id="touch-intercept-"+SC.guidFor(this);this._touchIntercept=a;document.body.appendChild(a)
}},_removeIntercept:function(){if(this._touchIntercept){document.body.removeChild(this._touchIntercept);
this._touchIntercept=null}},hideTouchIntercept:function(){if(this._touchIntercept){this._touchIntercept.style.display="none"
}},showTouchIntercept:function(){if(this._touchIntercept){this._touchIntercept.style.display="block"
}},recomputeIsVisibleInWindow:function(){if(this.get("designer")&&SC.suppressMain){return arguments.callee.base.apply(this,arguments)
}var c=this.get("isVisibleInWindow"),e=this.get("isVisible");if(c!==e){this.set("isVisibleInWindow",e);
var d=this.get("childViews"),b=d.length,a;for(a=0;a<b;a++){d[a].recomputeIsVisibleInWindow(e)
}if(e){this.displayDidChange();if(this.get("childViewsNeedLayout")){this.invokeOnce(this.layoutChildViewsIfNeeded)
}}else{this._forceLayerUpdateDueToVisibilityChange=YES;this.displayDidChange();if(this.get("isFirstResponder")){this.resignFirstResponder()
}}}return this},updateLayerLocation:function(){if(this.get("designer")&&SC.suppressMain){return arguments.callee.base.apply(this,arguments)
}return this},init:function(){var a=!!this.get("layer");arguments.callee.base.apply(this,arguments);
if(a){this.paneDidAttach()}},classNames:"sc-pane".w()});sc_require("system/theme");
SC.Renderer={classNames:{},render:function(a){a.setClass(this.classNames)},update:function(){this.$().setClass(this.classNames)
},destroy:function(){},didAttachLayer:function(a){},willDetachLayer:function(){},$:function(c){var a,b=this.layer();
a=!b?SC.$([]):(c===undefined)?SC.$(b):SC.$(c,b);b=null;return a},applyContextToLayer:function(c,d){var e=SC.$(c.join()),a,b;
d.addClass(c.classNames().join(" "));a=e.attr();for(b in a){if(!a.hasOwnProperty(b)){continue
}d.attr(b,a[b])}d.append(e.children())},causedEvent:function(a){return this.$().within(a.target)
},attachLayer:function(a){if(this._layer||this._layerProvider){this.detachLayer()
}if(a.isLayerProvider){this._layerProvider=a}else{this._layer=a}this.didAttachLayer(a)
},detachLayer:function(){this.willDetachLayer();this._layer=null;this._layerProvider=null
},layer:function(a){if(this._layer){return this._layer}if(this._layerProvider){this._layer=this._layerProvider.getLayer();
return this._layer}return null},extend:function(c){var a=SC.mixin(SC.beget(this),c),b,d,e;
a.classNames=SC.mixin({},this.classNames,c.classNames);a.superclass=this;for(b in a){d=a[b];
if(d instanceof Function&&!d.base&&(d!==(e=this[b]))){d.base=e}}return a},create:function(a){a=a?SC.mixin(SC.beget(this),a):this;
return function(c){var b=SC.beget(a);b.theme=this;if(b.init){b.init(c)}else{b.attr(c)
}return b}},init:function(a){this.classNames=SC.mixin({},this.classNames);if(a){this.attr(a)
}},attr:function(c,g){var d=this.changes,f,e,a,b;if(typeof c===SC.T_STRING){if(g===undefined){return this[c]
}if(c!=="classNames"||!g.isEnumerable){if(this[c]===g){return this}this[c]=g}else{a=g.length;
for(b=0;b<a;b++){this.classNames[g[b]]=YES}}if(!d){d=this.changes=SC.CoreSet.create()
}d.add(c);return this}else{e=c;for(c in e){if(!e.hasOwnProperty(c)){continue}g=e[c];
if(c!=="classNames"||!g.isEnumerable){if(this[c]!==g){this[c]=g;f=YES}}else{a=g.length;
for(b=0;b<a;b++){this.classNames[g[b]]=YES}f=YES}if(f){if(!d){d=this.changes=SC.CoreSet.create()
}d.add(c)}}return this}},hasChanges:function(){if(!this.changes||this.changes.length===0){return NO
}return YES},didChange:function(a){if(!this.changes){return NO}return this.changes.contains(a)
},resetChanges:function(){this.changes=null},_layerFinder:function(){var a=this.renderer.$(this.selector);
return a[0]},provide:function(a){return{isLayerProvider:YES,renderer:this,getLayer:this._layerFinder,selector:a}
},toString:function(){return"SC.Renderer#"+SC.guidFor(this)}};sc_require("renderers/renderer");
SC.BaseTheme.renderers.Control=SC.Renderer.extend({controlSizeForSize:function(d){var f=this.controlSizeArray,e=this.controlSizes;
if(!f){var c;f=[];for(c in e){f.push(Number(c))}f=f.sort();this.controlSizeArray=f
}if(e[d]){return e[d]}var b,a,g=null;a=f.length;if(a===0){return null}for(b=0;b<a;
b++){if(f[b]>d){break}g=f[b]}if(!g){return null}return e[g]},controlSizeForLayout:function(a){if(!SC.none(a.height)){return this.controlSizeForSize(a.height)
}return null},resolveControlSize:function(){var a=this.controlSize;if(!a){return null
}if(SC.typeOf(a)===SC.T_STRING){return a}if(SC.typeOf(a)===SC.T_NUMBER){return this.controlSizeForSize(a)
}if(SC.typeOf(a)===SC.T_HASH){return this.controlSizeForLayout(a)}return null},calculateClasses:function(){var b=this.isSelected,a=!this.isEnabled,c=this._TMP_CLASSNAMES?this._TMP_CLASSNAMES:this._TMP_CLASSNAMES={};
c.mixed=b===SC.MIXED_STATE;c.sel=b&&(b!==SC.MIXED_STATE);c.active=this.isActive;return c
},render:function(a){a.setClass(this.calculateClasses());var b=this.resolveControlSize();
if(!b){b=SC.REGULAR_CONTROL_SIZE}if(b){a.addClass(b)}this._last_control_size=b},update:function(){if(this.didChange("controlSize")){var a=this.resolveControlSize();
if(!a){a=SC.REGULAR_CONTROL_SIZE}if(this._last_control_size!=this.controlSize){this.$().setClass(this._last_control_size,NO)
}if(a){this.$().setClass(a,YES)}}this.$().setClass(this.calculateClasses())}});SC.BaseTheme.renderers.control=SC.BaseTheme.renderers.Control.create();
sc_require("renderers/renderer");SC.BaseTheme.renderers.Image=SC.Renderer.extend({render:function(b){var d=this.src,a=this.toolTip||"",c="";
if((this.isSprite!==YES&&d.indexOf("/")>=0)||this.isSprite===NO){b.attr("src",d);
this._last_sprite_class=NO}else{b.attr("src",SC.BLANK_IMAGE_URL);b.addClass(d);this._last_sprite_class=d
}b.attr("title",a);b.attr("alt",a)},update:function(){var b=this.$();var d=this.src,a=this.toolTip||"",c="";
if((this.isSprite!==YES&&d.indexOf("/")>=0)||this.isSprite===NO){b.attr("src",d);
this._last_sprite_class=NO}else{if(this._last_sprite_class){b.setClass(this._last_sprite_class,NO)
}b.attr("src",SC.BLANK_IMAGE_URL);b.setClass(d,YES);this._last_sprite_class=d}b.attr("title",a);
b.attr("alt",a)}});SC.BaseTheme.renderers.image=SC.BaseTheme.renderers.Image.create();
sc_require("renderers/renderer");SC.BaseTheme.renderers.Label=SC.Renderer.extend({init:function(a){this.titleRenderer=this.theme.title();
this.controlRenderer=this.theme.control();this.attr(a)},updateControlRenderer:function(){this.controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize})
},updateTitleRenderer:function(){var f=this.value,e=this.hint,b=this.icon,c=this.escapeHTML,a,d;
this.titleRenderer.attr({title:f,icon:b,escapeHTML:c,hint:e})},render:function(a){this.updateTitleRenderer();
this.updateControlRenderer();a.addStyle({textAlign:this.textAlign,fontWeight:this.fontWeight,opacity:this.isEditing?0:1});
a.setClass("icon",!!this.icon);this.renderTitle(a);this.controlRenderer.render(a)
},renderTitle:function(a){this.titleRenderer.render(a)},update:function(){var a=this.$();
this.updateTitleRenderer();if(this.didChange("text-align")){a.css("text-align",this.textAlign)
}if(this.didChange("font-weight")){a.css("font-weight",this.fontWeight)}if(this.didChange("opacity")){a.css("opacity",this.isEditing?0:1)
}if(this.didChange("icon")){a.setClass("icon",!!this.icon)}this.resetChanges();this.updateTitle();
this.controlRenderer.update()},updateTitle:function(){this.titleRenderer.update()
},didAttachLayer:function(a){this.titleRenderer.attachLayer(a);this.controlRenderer.attachLayer(a)
},didDetachLayer:function(){this.titleRenderer.detachLayer();this.controlRenderer.detachLayer()
}});SC.BaseTheme.renderers.label=SC.BaseTheme.renderers.Label.create();sc_require("renderers/renderer");
SC.BaseTheme.renderers.Title=SC.Renderer.extend({render:function(b){var c=this.icon,e="",g=this.title,f=this.hint,a=(!SC.none(g)&&g.length>0),d;
if(this.escapeHTML){g=SC.RenderContext.escapeHTML(g)}if(c){var h=SC.BLANK_IMAGE_URL;
if(c.indexOf("/")>=0){e='<img src="'+c+'" alt="" class="icon" />'}else{e='<img src="'+h+'" alt="" class="'+c+'" />'
}a=YES}if(f&&(!g||g==="")){if(this.escapeHTML){f=SC.RenderContext.escapeHTML(f)}g="<span class='sc-hint'>"+f+"</span>"
}d=e+g;if(this.needsEllipsis){b.addClass("ellipsis")}b.push(d);this._ImageTitleCached=d
},update:function(){var f=this.icon,b="",g=this.title,c=this.hint,h=(!SC.none(g)&&g.length>0),d,a,i;
if(this.escapeHTML){g=SC.RenderContext.escapeHTML(g)}if(f){var e=SC.BLANK_IMAGE_URL;
if(f.indexOf("/")>=0){b='<img src="'+f+'" alt="" class="icon" />'}else{b='<img src="'+e+'" alt="" class="'+f+'" />'
}h=YES}if(c&&(!g||g==="")){if(this.escapeHTML){c=SC.RenderContext.escapeHTML(c)}g="<span class='sc-hint'>"+c+"</span>"
}d=b+g;a=this.$();if((i=a[0])){if(h){if(this.needsEllipsis){a.addClass("ellipsis");
if(this._ImageTitleCached!==d){this._ImageTitleCached=d;i.innerHTML=d}}else{a.removeClass("ellipsis");
if(this._ImageTitleCached!==d){this._ImageTitleCached=d;i.innerHTML=d}}}else{this._ImageTitleCached=d;
i.innerHTML=""}}}});SC.BaseTheme.renderers.title=SC.BaseTheme.renderers.Title.create();
sc_require("renderers/renderer");SC.BaseTheme.renderers.View=SC.Renderer.extend({render:function(a){a.id(this.layerId).setClass(this.calculateClassNames()).addStyle(this.layoutStyle);
if(this.backgroundColor){a.addStyle("backgroundColor",this.backgroundColor)}this.resetChanges()
},update:function(){var a=this.$();a.setClass(this.calculateClassNames()).css(this.layoutStyle);
if(this.didChange("backgroundColor")){a.css("backgroundColor",this.backgroundColor)
}this.resetChanges()},calculateClassNames:function(){var a=this.classNames;if(this.didChange("isTextSelectable")){a["allow-select"]=this.isTextSelectable
}if(this.didChange("isEnabled")){a.disabled=!this.isEnabled}if(this.didChange("isVisible")){a.hidden=!this.isVisible
}if(this.didChange("isFirstResponder")){a.focus=this.isFirstResponder}if(this.didChange("hasStaticLayout")){a["sc-static-layout"]=this.hasStaticLayout
}if(this.didChange("cursor")&&this.cursor){a[this.cursor.get("className")]=YES}this.classNames=a;
return a}});SC.BaseTheme.renderers.view=SC.BaseTheme.renderers.View.create();sc_require("mixins/responder_context");
SC.Application=SC.Responder.extend(SC.ResponderContext,{});sc_require("core");SC.Benchmark={verbose:NO,enabled:YES,stats:{},globalStartTime:null,start:function(b,a,e,d){if(!this.enabled){return
}var f=(e||Date.now()),c;if(a){c=this._subStatFor(b,a)}else{c=this._statFor(b)}if(d&&c._starts.length>0){c._starts.push("ignore")
}else{c._starts.push(f)}c._times.push({start:f,_subStats:{}});return b},end:function(c,b,f){var e;
if(!this.enabled){return}if(b){e=this._subStatFor(c,b)}else{e=this._statFor(c)}var g=e._starts.pop();
if(!g){console.log('SC.Benchmark "%@" ended without a matching start.  No information was saved.'.fmt(c));
return}if(g=="ignore"){return}var a=(f||Date.now());var d=a-g;e._times[e._times.length-1].end=a;
e._times[e._times.length-1].dur=d;e.amt+=d;e.runs++;if(this.verbose){this.log(c)}},setGlobalStartTime:function(a){this.globalStartTime=a
},bench:function(e,d,a){if(!d){d="bench%@".fmt(this._benchCount++)}if(!a){a=1}var b;
while(--a>=0){var c=SC.Benchmark.start(d);b=e();SC.Benchmark.end(c)}return b},install:function(a,d,b){a["b__"+d]=a[d];
var c=a["b__"+d];a[d]=function(){var f="%@(%@)".fmt(d,$A(arguments).join(", "));SC.Benchmark.start(f,b);
var e=c.apply(this,arguments);SC.Benchmark.end(f);return e}},restore:function(a,b){a[b]=a["b__"+b]
},report:function(c){if(c){return this._genReport(c)}var b=[];for(var a in this.stats){if(!this.stats.hasOwnProperty(a)){continue
}b.push(this._genReport(a))}return b.join("\n")},timelineReport:function(a){a=(a)?"SproutCore Application":a;
var b=[a,"User-Agent: %@".fmt(navigator.userAgent),"Report Generated: %@ (%@)".fmt(new Date().toString(),Date.now()),""];
var d=this._compileChartData(true);for(var c=0;c<d.length;c++){if(d[c][4]){b.push(this._timelineGenSubReport(d[c]))
}else{b.push(this._timelineGenReport(d[c]))}}return b.join("\n")},timelineChart:function(s){var o=0;
this.hideChart();var m=this._compileChartData(false);var j=m.length;if(j===0){return
}var b=this.globalStartTime?this.globalStartTime:m[0][1];var d=m[j-1][2]-b;var n=50+j*30;
var p=Math.ceil(d/200)+1;var r=p*50;var c=document.createElement("div");c.className="sc-benchmark-graph";
document.body.appendChild(c);var t=document.createElement("div");t.innerHTML=((s)?s:"SproutCore Application")+(" - Total Captured Time: "+d+" ms - Points Captured: "+j)+' [<a href="javascript:SC.Benchmark.hideChart();">Hide Chart</a>]';
t.className="sc-benchmark-title";c.appendChild(t);var f=document.createElement("div");
f.className="sc-benchmark-top";f.style.width=r+"px";c.appendChild(f);for(o=0;o<p;
o++){var q=document.createElement("div");q.className="sc-benchmark-tick";q.style.left=(o*50)+"px";
q.style.height=n+"px";var e=document.createElement("div");e.className="sc-benchmark-tick-label";
e.style.left=(o*50)+"px";e.innerHTML=o*200+" ms";c.appendChild(q);c.appendChild(e)
}for(o=0;o<j;o++){var k=document.createElement("div");k.style.top=(75+(o*30))+"px";
k.style.width=r+"px";k.className=(o%2===0)?"sc-benchmark-row even":"sc-benchmark-row";
c.appendChild(k);var l=document.createElement("div");var h=m[o][1];var g=m[o][2];
var a=m[o][3];l.innerHTML="&nbsp;"+(m[o][0]+" <span class='sc-benchmark-emphasis'>"+a+"ms</span>");
l.className="sc-benchmark-bar";l.style.cssText="left:"+(((h-b)/4))+"px; width: "+((a/4))+"px; top: "+(53+(o*30))+"px;";
l.title="start: "+(h-b)+" ms, end: "+(g-b)+" ms, duration: "+a+" ms";c.appendChild(l)
}this._graph=c},hideChart:function(){if(this._graph){try{document.body.removeChild(this._graph)
}catch(a){}}},log:function(d){var c=this.report(d).split("\n"),b=c.length,a;for(a=0;
a<b;a++){console.log(c[a])}},startProfile:function(a){if(!this.enabled){return}if(console&&console.profile){console.profile(a)
}},endProfile:function(a){if(!this.enabled){return}if(console&&console.profileEnd){console.profileEnd(a)
}},_compileChartData:function(g){var l=[],a;for(var m in this.stats){var e=this.stats[m];
for(var f=0;f<e._times.length;f++){var n=e._times[f];a=(e._times.length>1)?(f+1)+" - "+m:m;
l.push([a,n.start,n.end,n.dur,false]);if(g){var b=n._subStats;for(var c in b){var h=b[c];
for(var d=0;d<h._times.length;d++){var o=h._times[d];a=(h._times.length>1)?(d+1)+" - "+c:c;
l.push([a,o.start,o.end,o.dur,true])}}}}}l.sort(function(j,i){if(j[1]<i[1]){return -1
}else{if(j[1]==i[1]){if(j[3]&&!i[3]){return -1}if(!j[3]&&i[3]){return 1}return 0}}return 1
});return l},_genReport:function(a){var b=this._statFor(a);var c=(b.runs>0)?(Math.floor(b.amt*1000/b.runs)/1000):0;
return"BENCH %@ msec: %@ (%@x)".fmt(c,(b.name||a),b.runs)},_timelineGenReport:function(a){if(this.globalStartTime){return"BENCH start: %@ msec, duration: %@ msec,  %@".fmt((a[1]-this.globalStartTime),a[3],a[0])
}else{return"BENCH duration: %@ msec, %@".fmt(a[3],a[0])}},_timelineGenSubReport:function(a){if(this.globalStartTime){return"   CHECKPOINT BENCH start: %@ msec, duration: %@ msec,  %@".fmt((a[1]-this.globalStartTime),a[3],a[0])
}else{return"   CHECKPOINT BENCH duration: %@ msec, %@".fmt(a[3],a[0])}},_subStatFor:function(d,c){var e=this.stats[c]._times.length;
if(e===0){return}var a=this.stats[c]._times[this.stats[c]._times.length-1]._subStats;
var b=a[d];if(!b){a[d]={runs:0,amt:0,name:d,_starts:[],_times:[]};b=a[d]}return b
},_statFor:function(b){var a=this.stats[b];if(!a){a=this.stats[b]={runs:0,amt:0,name:b,_starts:[],_times:[]};
a=this.stats[b]}return a},reset:function(){this.stats={}},_bench:function(b,a){SC.Benchmark.bench(b,a,1)
},_benchCount:1};SC.Benchmark=SC.Benchmark;SC.mixin({logBundleLoading:NO,bundleIsLoaded:function(a){var b=SC.BUNDLE_INFO[a];
return b?!!b.loaded:NO},_scb_bundleDidLoad:function(b,h,a,j){var d=a,n=h;if(SC.typeOf(h)===SC.T_STRING){n=SC.objectForPropertyPath(h)
}if(SC.typeOf(a)===SC.T_STRING){d=SC.objectForPropertyPath(a,n)}if(!d){if(SC.LAZY_INSTANTIATION[b]){var l=SC.LAZY_INSTANTIATION[b];
if(SC.logBundleLoading){console.log("SC.loadBundle(): Bundle '%@' is marked for lazy instantiation, instantiating it now…".fmt(b))
}for(var f=0,c=l.length;f<c;f++){try{l[f]()}catch(g){console.log("SC.loadBundle(): Failted to lazily instatiate entry for  '%@'".fmt(b))
}}delete SC.LAZY_INSTANTIATION[b];if(SC.typeOf(h)===SC.T_STRING){n=SC.objectForPropertyPath(h)
}if(SC.typeOf(a)===SC.T_STRING){d=SC.objectForPropertyPath(a,n)}if(!a){throw"SC.loadBundle(): could not find callback for lazily instantiated bundle '%@'".fmt(b)
}}else{throw"SC.loadBundle(): could not find callback for '%@'".fmt(b)}}if(!j){j=[]
}j.push(b);var k=!!SC.RunLoop.currentRunLoop;if(k){SC.RunLoop.begin()}d.apply(n,j);
if(k){SC.RunLoop.end()}},tryToLoadBundle:function(d,e,f,b){var a,c;if(SC.typeOf(e)===SC.T_STRING){c=SC.objectForPropertyPath(e)
}if(SC.typeOf(f)===SC.T_STRING){a=SC.objectForPropertyPath(f,c)}if(a||SC.LAZY_INSTANTIATION[d]){if(SC.logBundleLoading){console.log("SC.loadBundle(): Bundle '%@' found through other means, will attempt to load…".fmt(d))
}SC.BUNDLE_INFO[d]={loaded:YES};return SC.BUNDLE_INFO[d]}return NO},loadBundle:function(t,x,d){var r,u;
if(d===undefined&&SC.typeOf(x)===SC.T_FUNCTION){d=x;x=null}var n=SC.BUNDLE_INFO[t],w,v,c=SC.A(arguments).slice(3),j=SC.logBundleLoading;
if(j){console.log("SC.loadBundle(): Attempting to load '%@'".fmt(t))}if(!n){if(j){console.log("SC.loadBundle(): Attemping to load %@ without SC.BUNDLE_INFO entry… could be loaded through other means.".fmt(t))
}n=this.tryToLoadBundle(t,x,d,c)}if(!n){throw"SC.loadBundle(): could not find bundle '%@'".fmt(t)
}else{if(n.loaded){if(j){console.log("SC.loadBundle(): Bundle '%@' already loaded, skipping.".fmt(t))
}if(d){if(SC.isReady){SC._scb_bundleDidLoad(t,x,d,c)}else{SC.ready(SC,function(){SC._scb_bundleDidLoad(t,x,d,c)
})}}}else{if(j){console.log("SC.loadBundle(): Bundle '%@' is not loaded, loading now.".fmt(t))
}w=n.callbacks||[];if(d){w.push(function(){SC._scb_bundleDidLoad(t,x,d,c)});n.callbacks=w
}if(!n.loading){var b=n.requires||[];var g=YES;for(r=0,u=b.length;r<u;++r){var o=b[r];
var k=SC.BUNDLE_INFO[o];if(!k){throw"SC.loadBundle(): could not find required bundle '%@' for bundle '%@'".fmt(o,t)
}else{if(k.loading){g=NO;break}else{if(k.loaded){continue}else{g=NO;var p=k.dependents;
if(!p){k.dependents=p=[]}p.push(t);if(j){console.log("SC.loadBundle(): '%@' depends on '%@', loading dependency…".fmt(t,o))
}SC.loadBundle(o);break}}}}if(g){var l,e,f,a,h,m;h=document.getElementsByTagName("head")[0];
if(!h){h=document.documentElement}l=n.styles||[];for(r=0,u=l.length;r<u;++r){f=l[r];
if(f.length>0){a=document.createElement("link");a.setAttribute("href",f);a.setAttribute("rel","stylesheet");
a.setAttribute("type","text/css");h.appendChild(a)}}var i=this._jsBundleLoadQueue;
if(!i){this._jsBundleLoadQueue=i={}}i[t]=[];var s=i[t];e=n.scripts||[];for(r=0,u=e.length;
r<u;++r){f=e[r];if(f.length>0){s.push(f)}}n.loading=YES;this.scriptDidLoad(t)}}}}},scriptDidLoad:function(c){var a=this._jsBundleLoadQueue;
if(a){var e=a[c];if(e){var b=e.shift();if(SC.logBundleLoading){console.log("SC.scriptDidLoad(): Loading next file in '%@' -> '%@'".fmt(c,b))
}var d=document.createElement("script");d.setAttribute("type","text/javascript");
d.setAttribute("src",b);document.body.appendChild(d)}}},bundleDidLoad:function(d){var g=SC.BUNDLE_INFO[d],e=SC.logBundleLoading,f,c;
if(!g){g=SC.BUNDLE_INFO[d]={loaded:YES};return}if(g.loaded&&e){console.log("SC.bundleDidLoad() called more than once for bundle '%@'. Skipping.".fmt(d));
return}delete g.loading;g.loaded=YES;if(SC.isReady){SC._invokeCallbacksForBundle(d)
}else{SC.ready(SC,function(){SC._invokeCallbacksForBundle(d)})}var h=g.dependents||[];
for(var b=0,a=h.length;b<a;++b){if(e){console.log("SC.loadBundle(): Bundle '%@' has completed loading, loading '%@' that depended on it.".fmt(d,h[b]))
}SC.loadBundle(h[b])}},_invokeCallbacksForBundle:function(c){var e=SC.BUNDLE_INFO[c],d;
if(!e){return}if(SC.logBundleLoading){console.log("SC.loadBundle(): Bundle '%@' has completed loading, invoking callbacks.".fmt(c))
}d=e.callbacks||[];SC.RunLoop.begin();for(var b=0,a=d.length;b<a;++b){d[b]()}SC.RunLoop.end()
}});SC.SCANNER_OUT_OF_BOUNDS_ERROR=new Error("Out of bounds.");SC.SCANNER_INT_ERROR=new Error("Not an int.");
SC.SCANNER_SKIP_ERROR=new Error("Did not find the string to skip.");SC.SCANNER_SCAN_ARRAY_ERROR=new Error("Did not find any string of the given array to scan.");
SC.DATETIME_COMPAREDATE_TIMEZONE_ERROR=new Error("Can't compare the dates of two DateTimes that don't have the same timezone.");
SC.DATETIME_ISO8601="%Y-%m-%dT%H:%M:%S%Z";SC.Scanner=SC.Object.extend({string:null,scanLocation:0,scan:function(a){if(this.scanLocation+a>this.length){throw SC.SCANNER_OUT_OF_BOUNDS_ERROR
}var b=this.string.substr(this.scanLocation,a);this.scanLocation+=a;return b},scanInt:function(a){var c=this.scan(a);
var b=new RegExp("\\d{"+a+"}");if(!c.match(b)){throw SC.SCANNER_INT_ERROR}return parseInt(c,10)
},skipString:function(a){if(this.scan(a.length)!==a){throw SC.SCANNER_SKIP_ERROR}return YES
},scanArray:function(c){for(var b=0,a=c.length;b<a;b++){if(this.scan(c[b].length)===c[b]){return b
}this.scanLocation-=c[b].length}throw SC.SCANNER_SCAN_ARRAY_ERROR}});SC.DateTime=SC.Object.extend(SC.Freezable,SC.Copyable,{_ms:0,timezone:0,isFrozen:YES,adjust:function(b,a){var c;
b=b?SC.clone(b):{};c=(b.timezone!==undefined)?b.timezone:(this.timezone!==undefined)?this.timezone:0;
return this.constructor._adjust(b,this._ms,c,a)._createFromCurrentState()},advance:function(a){return this.constructor._advance(a,this._ms,this.timezone)._createFromCurrentState()
},unknownProperty:function(a){return this.constructor._get(a,this._ms,this.timezone)
},toFormattedString:function(a){return this.constructor._toFormattedString(a,this._ms,this.timezone)
},toISO8601:function(){return this.constructor._toFormattedString(SC.DATETIME_ISO8601,this._ms,this.timezone)
},toString:function(){return"UTC: "+new Date(this._ms).toUTCString()+", timezone: "+this.timezone
},isEqual:function(a){return SC.DateTime.compare(this,a)===0},copy:function(){return this
},toTimezone:function(a){if(a===undefined){a=0}return this.advance({timezone:a-this.timezone})
}});SC.DateTime.mixin(SC.Comparable,{recordFormat:SC.DATETIME_ISO8601,dayNames:"_SC.DateTime.dayNames".loc().w(),_englishDayNames:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".w(),abbreviatedDayNames:"_SC.DateTime.abbreviatedDayNames".loc().w(),monthNames:"_SC.DateTime.monthNames".loc().w(),abbreviatedMonthNames:"_SC.DateTime.abbreviatedMonthNames".loc().w(),_date:new Date(),_tz:0,timezone:new Date().getTimezoneOffset(),_dt_cache:{},_dt_cache_index:-1,_DT_CACHE_MAX_LENGTH:1000,_setCalcState:function(a,c){var b={milliseconds:this._date.getTime(),timezone:this._tz};
if(a!==undefined){this._date.setTime(a)}if(c!==undefined){this._tz=c}return b},_setCalcStateFromHash:function(c,b){var d=(b!==undefined)?b:this._tz;
var a=this._toMilliseconds(c,this._ms,d);return this._setCalcState(a,d)},_get:function(u,b,n){var l,s,h,o,e,j,k,f,p,a;
var c,i;var r=this._date;var q,g=null;q=this._setCalcState(b,n);if(u==="milliseconds"){g=r.getTime()
}else{if(u==="timezone"){g=this._tz}}if(g===null){p=u.slice(0,4);a=u.slice(4);if(p==="last"||p==="next"){c=this._get("dayOfWeek");
i=this._englishDayNames.indexOf(a);if(i>=0){var t=i-c;if(p==="last"&&t>=0){t-=7}if(p==="next"&&t<0){t+=7
}this._advance({day:t},b,n);g=this._createFromCurrentState()}}}if(g===null){if(n!==undefined){this._setCalcState(r.getTime()-(n*60000),0)
}switch(u){case"year":g=r.getUTCFullYear();break;case"month":g=r.getUTCMonth()+1;
break;case"day":g=r.getUTCDate();break;case"dayOfWeek":g=r.getUTCDay();break;case"hour":g=r.getUTCHours();
break;case"minute":g=r.getUTCMinutes();break;case"second":g=r.getUTCSeconds();break;
case"millisecond":g=r.getUTCMilliseconds();break}if((g===null)&&(u==="isLeapYear")){e=this._get("year");
g=(e%4===0&&e%100!==0)||e%400===0}if((g===null)&&(u==="daysInMonth")){switch(this._get("month")){case 4:case 6:case 9:case 11:g=30;
break;case 2:g=this._get("isLeapYear")?29:28;break;default:g=31;break}}if((g===null)&&(u==="dayOfYear")){l=r.getTime();
h=this._get("day");this._setCalcStateFromHash({day:1});for(o=this._get("month")-1;
o>0;o--){this._setCalcStateFromHash({month:o});h+=this._get("daysInMonth")}r.setTime(l);
g=h}if((g===null)&&(u.slice(0,4)==="week")){j=u.length===4?1:parseInt(u.slice("4"),10);
k=this._get("dayOfWeek");f=this._get("dayOfYear")-1;if(j===0){g=parseInt((f-k+7)/7,10)
}else{g=parseInt((f-(k-1+7)%7+7)/7,10)}}}this._setCalcState(q.milliseconds,q.timezone);
return g},_adjust:function(c,f,e,a){var d=c?SC.clone(c):{};var b=this._toMilliseconds(c,f,e,a);
this._setCalcState(b,e);return this},_advance:function(a,f,d){var c=a?SC.clone(a):{};
var e;for(var b in c){c[b]+=this._get(b,f,d)}e=(c.timezone!==undefined)?c.timezone:d;
return this._adjust(c,f,e,NO)},_toMilliseconds:function(j,c,h,f){var a=j?SC.clone(j):{};
var i=this._date;var g=i.getTime();var b,e;if(!SC.none(c)){i.setTime(c)}e=(h!==undefined)?h:(this.timezone!==undefined)?this.timezone:0;
i.setTime(i.getTime()-(e*60000));if(f===undefined||f===YES){if(!SC.none(a.hour)&&SC.none(a.minute)){a.minute=0
}if(!(SC.none(a.hour)&&SC.none(a.minute))&&SC.none(a.second)){a.second=0}if(!(SC.none(a.hour)&&SC.none(a.minute)&&SC.none(a.second))&&SC.none(a.millisecond)){a.millisecond=0
}}if(SC.none(a.year)){a.year=i.getUTCFullYear()}if(SC.none(a.month)){a.month=i.getUTCMonth()+1
}if(SC.none(a.day)){a.day=i.getUTCDate()}if(SC.none(a.hour)){a.hour=i.getUTCHours()
}if(SC.none(a.minute)){a.minute=i.getUTCMinutes()}if(SC.none(a.second)){a.second=i.getUTCSeconds()
}if(SC.none(a.millisecond)){a.millisecond=i.getUTCMilliseconds()}b=Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute,a.second,a.millisecond);
i.setTime(b+(e*60000));b=i.getTime();i.setTime(g);return b},create:function(){var i=arguments.length===0?{}:arguments[0];
var d;if(SC.typeOf(i)===SC.T_NUMBER){i={milliseconds:i}}d=(i.timezone!==undefined)?i.timezone:this.timezone;
if(d===undefined){d=0}if(!SC.none(i.milliseconds)){var h="nu"+i.milliseconds+d,a=this._dt_cache;
var e=a[h];if(!e){var f,g=this._dt_cache_index,b=this;e=a[h]=new b([{_ms:i.milliseconds,timezone:d}]);
g=this._dt_cache_index=(g+1)%this._DT_CACHE_MAX_LENGTH;f=a[g];if(f!==undefined&&a[f]){delete a[f]
}a[g]=h}return e}else{var c=new Date();return this.create({milliseconds:this._toMilliseconds(i,c.getTime(),d,i.resetCascadingly),timezone:d})
}},_createFromCurrentState:function(){return this.create({milliseconds:this._date.getTime(),timezone:this._tz})
},parse:function(o,c){var p=/(?:\%([aAbBcdHIjmMpSUWwxXyYZ\%])|(.))/g;var n,j,a={},b={},i=SC.Scanner.create({string:o});
try{while((j=p.exec(c))!==null){switch(j[1]){case"a":b.dayOfWeek=i.scanArray(this.abbreviatedDayNames);
break;case"A":b.dayOfWeek=i.scanArray(this.dayNames);break;case"b":a.month=i.scanArray(this.abbreviatedMonthNames)+1;
break;case"B":a.month=i.scanArray(this.monthNames)+1;break;case"c":throw"%c is not implemented";
case"d":a.day=i.scanInt(2);break;case"H":a.hour=i.scanInt(2);break;case"I":a.hour=i.scanInt(2);
break;case"j":throw"%j is not implemented";case"m":a.month=i.scanInt(2);break;case"M":a.minute=i.scanInt(2);
break;case"p":a.meridian=i.scanArray(["AM","PM"]);break;case"S":a.second=i.scanInt(2);
break;case"U":throw"%U is not implemented";case"W":throw"%W is not implemented";case"w":throw"%w is not implemented";
case"x":throw"%x is not implemented";case"X":throw"%X is not implemented";case"y":a.year=i.scanInt(2);
a.year+=(a.year>70?1900:2000);break;case"Y":a.year=i.scanInt(4);break;case"Z":var g=i.scan(1);
if(g==="Z"){a.timezone=0}else{if(g==="+"||g==="-"){var k=i.scanInt(2);if(i.scan(1)!==":"){i.scan(-1)
}var f=i.scanInt(2);a.timezone=(g==="+"?-1:1)*(k*60+f)}}break;case"%":i.skipString("%");
break;default:i.skipString(j[0]);break}}}catch(l){console.log("SC.DateTime.createFromString "+l.toString());
return null}if(!SC.none(a.meridian)&&!SC.none(a.hour)){if(a.meridian===1){a.hour=(a.hour+12)%24
}delete a.meridian}n=SC.DateTime.create(a);if(!SC.none(b.dayOfWeek)&&n.get("dayOfWeek")!==b.dayOfWeek){return null
}return n},_pad:function(b,a){var c=""+b;if(a===undefined){a=2}while(c.length<a){c="0"+c
}return c},__toFormattedString:function(b,e,c){var a,d;switch(b[1]){case"a":return this.abbreviatedDayNames[this._get("dayOfWeek")];
case"A":return this.dayNames[this._get("dayOfWeek")];case"b":return this.abbreviatedMonthNames[this._get("month")-1];
case"B":return this.monthNames[this._get("month")-1];case"c":return this._date.toString();
case"d":return this._pad(this._get("day"));case"D":return this._get("day");case"h":return this._get("hour");
case"H":return this._pad(this._get("hour"));case"i":a=this._get("hour");return(a===12||a===0)?12:(a+12)%12;
case"I":a=this._get("hour");return this._pad((a===12||a===0)?12:(a+12)%12);case"j":return this._pad(this._get("dayOfYear"),3);
case"m":return this._pad(this._get("month"));case"M":return this._pad(this._get("minute"));
case"p":return this._get("hour")>11?"PM":"AM";case"S":return this._pad(this._get("second"));
case"u":return this._pad(this._get("utc"));case"U":return this._pad(this._get("week0"));
case"W":return this._pad(this._get("week1"));case"w":return this._get("dayOfWeek");
case"x":return this._date.toDateString();case"X":return this._date.toTimeString();
case"y":return this._pad(this._get("year")%100);case"Y":return this._get("year");
case"Z":d=-1*c;return(d>=0?"+":"-")+this._pad(parseInt(Math.abs(d)/60,10))+":"+this._pad(Math.abs(d)%60);
case"%":return"%"}},_toFormattedString:function(c,e,b){var a=this;var d=(b!==undefined)?b:(this.timezone!==undefined)?this.timezone:0;
this._setCalcState(e-(b*60000),0);return c.replace(/\%([aAbBcdDHiIjmMpSUWwxXyYZ\%])/g,function(){var f=a.__toFormattedString.call(a,arguments,e,b);
return f})},compare:function(d,c){var f=d.get("milliseconds");var e=c.get("milliseconds");
return f<e?-1:f===e?0:1},compareDate:function(d,c){if(d.get("timezone")!==c.get("timezone")){throw SC.DATETIME_COMPAREDATE_TIMEZONE_ERROR
}var f=d.adjust({hour:0}).get("milliseconds");var e=c.adjust({hour:0}).get("milliseconds");
return f<e?-1:f===e?0:1}});SC.Binding.dateTime=function(a){return this.transform(function(b,c){return b?b.toFormattedString(a):null
})};if(SC.RecordAttribute&&!SC.RecordAttribute.transforms[SC.guidFor(SC.DateTime)]){SC.RecordAttribute.registerTransform(SC.DateTime,{to:function(c,a){if(SC.none(c)||SC.instanceOf(c,SC.DateTime)){return c
}var b=a.get("format");return SC.DateTime.parse(c,b?b:SC.DateTime.recordFormat)},from:function(b,a){if(SC.none(b)){return b
}var c=a.get("format");return b.toFormattedString(c?c:SC.DateTime.recordFormat)}})
}sc_require("system/event");SC.mixin({_isReadyBound:NO,_bindReady:function(){if(this._isReadyBound){return
}this._isReadyBound=YES;if(document.addEventListener&&!SC.browser.opera){document.addEventListener("DOMContentLoaded",SC._didBecomeReady,NO)
}if(SC.browser.msie&&(window===top)){(function(){if(SC.isReady){return}try{document.documentElement.doScroll("left")
}catch(a){setTimeout(arguments.callee,0);return}SC._didBecomeReady()})()}if(SC.browser.opera){document.addEventListener("DOMContentLoaded",function(){if(SC.isReady){return
}for(var a=0;a<document.styleSheets.length;a++){if(document.styleSheets[a].disabled){setTimeout(arguments.callee,0);
return}}SC._didBecomeReady()},NO)}if(SC.browser.safari&&SC.browser.safari<530){console.error("ready() is not yet supported on Safari 3.1 and earlier")
}SC.Event.add(window,"load",SC._didBecomeReady)},_readyQueue:[],_afterReadyQueue:[],isReady:NO,_didBecomeReady:function(){if(SC.isReady){return
}if(typeof SC.mapDisplayNames===SC.T_FUNCTION){SC.mapDisplayNames()}if(typeof SC.addInvokeOnceLastDebuggingInfo===SC.T_FUNCTION){SC.addInvokeOnceLastDebuggingInfo()
}SC.Locale.createCurrentLocale();if(document&&document.getElementsByTagName){var d=document.getElementsByTagName("body")[0];
if(d){var g=d.className;var c=SC.Locale.currentLanguage.toLowerCase();d.className=(g&&g.length>0)?[g,c].join(" "):c
}}SC.Benchmark.start("ready");SC.RunLoop.begin();var i,b,h,e;do{b=SC._readyQueue;
SC._readyQueue=[];for(h=0,e=b.length;h<e;h++){i=b[h];var f=i[0]||document;var a=i[1];
if(a){a.call(f)}}}while(SC._readyQueue.length>0);SC.isReady=YES;SC._readyQueue=null;
SC.Event.trigger(document,"ready",null,NO);if(SC.removeLoading){SC.$("#loading").remove()
}if(SC.userDefaults.get("ready")){if((SC.mode===SC.APP_MODE)&&(typeof main!="undefined")&&(main instanceof Function)&&!SC.suppressMain){main()
}}else{SC.userDefaults.readyCallback(window,main)}SC.RunLoop.end();SC.Benchmark.end("ready");
SC.Benchmark.log()},ready:function(b,c){var a=this._readyQueue;if(c===undefined){c=b;
b=null}else{if(SC.typeOf(c)===SC.T_STRING){c=b[c]}}if(!c){return this}if(this.isReady){return c.call(b||document)
}a.push([b,c]);return this}});SC._bindReady();SC.removeLoading=YES;SC.APP_MODE="APP_MODE";
SC.TEST_MODE="TEST_MODE";SC.mode=SC.APP_MODE;require("system/ready");SC.CAPTURE_BACKSPACE_KEY=NO;
SC.RootResponder=SC.Object.extend({panes:null,init:function(){arguments.callee.base.apply(this,arguments);
this.panes=SC.Set.create()},mainPane:null,makeMainPane:function(b){var a=this.get("mainPane");
if(a===b){return this}this.beginPropertyChanges();if(this.get("keyPane")===a){this.makeKeyPane(b)
}this.set("mainPane",b);if(a){a.blurMainTo(b)}if(b){b.focusMainFrom(a)}this.endPropertyChanges();
return this},menuPane:null,makeMenuPane:function(b){if(b&&!b.get("acceptsMenuPane")){return this
}else{var a=this.get("menuPane");if(a===b){return this}this.set("menuPane",b)}return this
},keyPane:null,previousKeyPanes:[],makeKeyPane:function(f){var e,a,d;if(f){if(!f.get("acceptsKeyPane")){return this
}else{a=this.get("keyPane");if(a===f){return this}else{if(a){d=this.get("previousKeyPanes");
d.push(a)}e=f}}}else{a=this.get("keyPane");d=this.get("previousKeyPanes");e=null;
while(d.length>0){var c=d.pop();if(c.get("isPaneAttached")&&c.get("acceptsKeyPane")){e=c;
break}}}if(!e){var b=this.get("mainPane");if(b&&b.get("acceptsKeyPane")){e=b}}if(a){a.willLoseKeyPaneTo(e)
}if(e){e.willBecomeKeyPaneFrom(a)}this.set("keyPane",e);if(e){e.didBecomeKeyPaneFrom(a)
}if(a){a.didLoseKeyPaneTo(e)}return this},currentWindowSize:null,computeWindowSize:function(){var a;
if(window.innerHeight){a={width:window.innerWidth,height:window.innerHeight}}else{if(document.documentElement&&document.documentElement.clientHeight){a={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}
}else{if(document.body){a={width:document.body.clientWidth,height:document.body.clientHeight}
}}}return a},resize:function(){this._resize();return YES},_resize:function(){var b=this.computeWindowSize(),c=this.get("currentWindowSize");
this.set("currentWindowSize",b);if(!SC.rectsEqual(b,c)){if(SC.platform.touch){var a=SC.$(document.body);
if(b.height>=b.width){SC.device.set("orientation","portrait")}else{SC.device.set("orientation","landscape")
}}if(this.panes){SC.RunLoop.begin();this.panes.invoke("windowSizeDidChange",c,b);
SC.RunLoop.end()}}},hasFocus:NO,focus:function(){if(!this.get("hasFocus")){SC.$("body").addClass("sc-focus").removeClass("sc-blur");
SC.RunLoop.begin();this.set("hasFocus",YES);SC.RunLoop.end()}return YES},focusin:function(){this.focus()
},focusout:function(){this.blur()},blur:function(){if(this.get("hasFocus")){SC.$("body").addClass("sc-blur").removeClass("sc-focus");
SC.RunLoop.begin();this.set("hasFocus",NO);SC.RunLoop.end()}return YES},dragDidStart:function(a){this._mouseDownView=a;
this._drag=a},defaultResponder:null,sendAction:function(d,e,c,f,b,a){e=this.targetForAction(d,e,c,f,a);
if(e&&e.isResponderContext){return !!e.sendAction(d,c,b,a)}else{return e&&e.tryToPerform(d,c)
}},_responderFor:function(d,b,a){var c=d?d.get("defaultResponder"):null;if(d){d=a||d.get("firstResponder")||d;
do{if(d.respondsTo(b)){return d}}while((d=d.get("nextResponder")))}if(typeof c===SC.T_STRING){c=SC.objectForPropertyPath(c)
}if(!c){return null}else{if(c.isResponderContext){return c}else{if(c.respondsTo(b)){return c
}else{return null}}}},targetForAction:function(c,f,e,g,a){if(!c||(SC.typeOf(c)!==SC.T_STRING)){return null
}if(f){if(SC.typeOf(f)===SC.T_STRING){f=SC.objectForPropertyPath(f)||SC.objectForPropertyPath(f,e)
}if(f){if(f.respondsTo&&!f.respondsTo(c)){f=null}else{if(SC.typeOf(f[c])!==SC.T_FUNCTION){f=null
}}}return f}if(g){return this._responderFor(g,c,a)}var b=this.get("keyPane"),d=this.get("mainPane");
if(b&&(b!==g)){f=this._responderFor(b,c)}if(!f&&d&&(d!==b)){f=this._responderFor(d,c)
}if(!f&&(f=this.get("defaultResponder"))){if(SC.typeOf(f)===SC.T_STRING){f=SC.objectForPropertyPath(f);
if(f){this.set("defaultResponder",f)}}if(f){if(f.respondsTo&&!f.respondsTo(c)){f=null
}else{if(SC.typeOf(f[c])!==SC.T_FUNCTION){f=null}}}}return f},targetViewForEvent:function(a){return a.target?SC.$(a.target).view()[0]:null
},sendEvent:function(c,a,d){var e,b;SC.RunLoop.begin();if(d){e=d.get("pane")}else{e=this.get("menuPane")||this.get("keyPane")||this.get("mainPane")
}b=(e)?e.sendEvent(c,a,d):null;SC.RunLoop.end();return b},listenFor:function(c,b,a){a=a?a:this;
c.forEach(function(d){var e=a[d];if(e){SC.Event.add(b,d,a,e)}},this);b=null;return a
},setup:function(){this.listenFor("touchstart touchmove touchend touchcancel".w(),document);
this.listenFor("keydown keyup beforedeactivate mousedown mouseup click dblclick mouseout mouseover mousemove selectstart contextmenu".w(),document).listenFor("resize".w(),window);
if(SC.browser.msie){this.listenFor("focusin focusout".w(),document)}else{this.listenFor("focus blur".w(),window)
}this.listenFor("webkitAnimationStart webkitAnimationIteration webkitAnimationEnd".w(),document);
if(this.keypress){if(SC.CAPTURE_BACKSPACE_KEY&&SC.browser.mozilla){var b=this;document.onkeypress=function(f){f=SC.Event.normalizeEvent(f);
return b.keypress.call(b,f)}}else{SC.Event.add(document,"keypress",this,this.keypress)
}}"drag selectstart".w().forEach(function(f){var g=this[f];if(g){if(SC.browser.msie){var e=this;
document.body["on"+f]=function(h){return g.call(e,SC.Event.normalizeEvent(event||window.event))
};SC.Event.add(window,"unload",this,function(){document.body["on"+f]=null})}else{SC.Event.add(document,f,this,g)
}}},this);var a=SC.browser.mozilla?"DOMMouseScroll":"mousewheel";SC.Event.add(document,a,this,this.mousewheel);
this.set("currentWindowSize",this.computeWindowSize());this.focus();if(SC.browser.mobileSafari){var c=SC.RunLoop.prototype.endRunLoop,d;
d=function(){if(c){c.apply(this,arguments)}var i=SC.RootResponder.responder._touches,h,e,j,f,l,m=NO;
if(i){for(h in i){if(i[h]._rescuedElement){continue}j=e=i[h].target;while(e&&(e=e.parentNode)&&!m){m=(e===document.body)
}if(!m&&j){if(j.parentNode&&j.cloneNode){var k=j.cloneNode(true);j.parentNode.replaceChild(k,j);
j.swapNode=k}var g=SC.touchHoldingPen;if(!g){g=SC.touchHoldingPen=document.createElement("div");
g.style.display="none";document.body.appendChild(g)}g.appendChild(j);i[h]._rescuedElement=j
}}}};SC.RunLoop.prototype.endRunLoop=d}},_touchedViews:{},_touches:{},touchesForView:function(a){if(this._touchedViews[SC.guidFor(a)]){return this._touchedViews[SC.guidFor(a)].touches
}},averagedTouchesForView:function(f,e){var j=this.touchesForView(f);if((!j||j.length===0)&&!e){return{x:0,y:0,d:0,touchCount:0}
}var c;if(j){c=j.toArray()}else{c=[]}if(e){c.push(e)}var g,d=c.length,b,a=0,l=0,k,i,h=0;
for(g=0;g<d;g++){b=c[g];a+=b.pageX;l+=b.pageY}a/=d;l/=d;for(g=0;g<d;g++){b=c[g];k=Math.abs(b.pageX-a);
i=Math.abs(b.pageY-l);h+=Math.pow(k*k+i*i,0.5)}h/=d;return{x:a,y:l,d:h,touchCount:d}
},assignTouch:function(b,a){if(b.hasEnded){throw"This touch is done for! Yet something tried to assign it."
}if(b.view===a){return}if(b.view){this.unassignTouch(b)}if(!this._touchedViews[SC.guidFor(a)]){this._touchedViews[SC.guidFor(a)]={view:a,touches:SC.CoreSet.create([]),touchCount:0};
a.set("hasTouch",YES)}b.view=a;this._touchedViews[SC.guidFor(a)].touches.add(b);this._touchedViews[SC.guidFor(a)].touchCount++
},unassignTouch:function(c){var a,b;if(!c.view){return}a=c.view;b=this._touchedViews[SC.guidFor(a)];
b.touches.remove(c);b.touchCount--;if(b.touchCount<1){a.set("hasTouch",NO);b.view=null;
delete this._touchedViews[SC.guidFor(a)]}c.view=undefined},makeTouchResponder:function(f,d,c,k){var h=f.touchResponders,b;
if(f.touchResponder===d){return}var a;if(d){a=d.get("pane")}else{a=this.get("keyPane")||this.get("mainPane")
}if(h.indexOf(d)<0){if(k){try{d=(a)?a.sendEvent("touchStart",f,d):null}catch(g){SC.Logger.error("Error in touchStart: "+g);
d=null}}else{if((d.get?d.get("acceptsMultitouch"):d.acceptsMultitouch)||!d.hasTouch){if(!d.touchStart(f)){d=null
}}else{}}}if(!c||(h.indexOf(d)>-1&&h[h.length-1]!==d)){this.unassignTouch(f);var i=h.length-1,j=h[i];
while(j&&j!==d){b=this.touchesForView(j);if((j.get?j.get("acceptsMultitouch"):j.acceptsMultitouch)||!b){if(j.touchCancelled){j.touchCancelled(f)
}}i--;j=h[i];h.pop();f.touchResponder=h[i];f.nextTouchResponder=h[i-1]}}if(d){this.assignTouch(f,d);
if(d!==f.touchResponder){h.push(d);f.touchResponder=d;f.nextTouchResponder=h[h.length-2]
}}},captureTouch:function(h,e,g){if(!e){e=this}var f=h.targetView,c=f,d=[],b,a;if(SC.LOG_TOUCH_EVENTS){SC.Logger.info("  -- Received one touch on %@".fmt(f.toString()))
}while(c&&(c!==e)){d.unshift(c);c=c.get("nextResponder")}for(a=d.length,b=0;b<a;b++){c=d[b];
if(SC.LOG_TOUCH_EVENTS){SC.Logger.info("  -- Checking %@ for captureTouch response…".fmt(c.toString()))
}if(c.tryToPerform("captureTouch",h)){if(SC.LOG_TOUCH_EVENTS){SC.Logger.info("   -- Making %@ touch responder because it returns YES to captureTouch".fmt(c.toString()))
}this.makeTouchResponder(h,c,g,YES);return}}if(SC.LOG_TOUCH_EVENTS){SC.Logger.info("   -- Didn't find a view that returned YES to captureTouch, so we're calling touchStart")
}this.makeTouchResponder(h,f,g,YES)},endMissingTouches:function(e){var b,a=e.length,d={},c=[];
for(b=0;b<a;b++){d[e[b].identifier]=YES}for(b in this._touches){var f=this._touches[b].identifier;
if(!d[f]){c.push(this._touches[b])}}for(b=0,a=c.length;b<a;b++){this.endTouch(c[b]);
this.finishTouch(c[b])}},_touchCount:0,endTouch:function(b,g,c){if(!g){g="touchEnd"
}var a,f,d,e;this.unassignTouch(b);if(b.touchResponder){e=b.touchResponder;f=b.touchResponders;
a=f.length-1;d=f[a];while(d){if(d[g]){d[g](b,c)}if(b.touchResponder!==e){break}a--;
d=f[a];g="touchCancelled"}}},finishTouch:function(a){this.unassignTouch(a);a.touchResponders=null;
a.touchResponder=null;a.nextTouchResponder=null;a.hasEnded=YES;if(this._touches[a.identifier]){delete this._touches[a.identifier]
}},touchstart:function(j){SC.RunLoop.begin();this.endMissingTouches(j.touches);try{var i,b=j.changedTouches,d=b.length,g,h,a,k,c=NO;
j.touchContext=this;for(i=0;i<d;i++){a=b[i];k=SC.Touch.create(a,this);if(k.hidesTouchIntercept){c=YES
}k.timeStamp=j.timeStamp;this._touches[a.identifier]=k;a.event=j;this.captureTouch(k,this);
a.event=null}}catch(f){SC.Logger.warn("Exception during touchStart: %@".fmt(f));SC.RunLoop.end();
return NO}SC.RunLoop.end();if(c){j.allowDefault();return YES}return NO},touchmove:function(n){SC.RunLoop.begin();
try{var b=n.changedTouches,a,p,m,f=b.length,l,k,j,o,h={},d,i,c=NO;if(this._drag){a=SC.Touch.create(n.changedTouches[0],this);
this._drag.tryToPerform("mouseDragged",a)}for(m=0;m<f;m++){a=b[m];p=this._touches[a.identifier];
if(p.hidesTouchIntercept){c=YES}if(!p){SC.Logger.log("Received a touchmove for a touch we don't know about. This is bad.");
continue}p.pageX=a.pageX;p.pageY=a.pageY;p.timeStamp=n.timeStamp;p.event=n;if(p.touchResponder){l=p.touchResponder;
i=SC.guidFor(l);if(!h[i]){h[i]={view:l,touches:[]}}h[i].touches.push(p)}}if(c){n.allowDefault();
return YES}for(m in h){l=h[m].view;k=h[m].touches;n.viewChangedTouches=k;j=this.touchesForView(l);
o=j.firstObject();n.pageX=o.pageX;n.pageY=o.pageY;n.touchContext=this;if(l.touchesDragged){l.touchesDragged(n,j)
}}b=n.changedTouches;f=b.length;for(m=0;m<f;m++){a=b[m];p=this._touches[a.identifier];
p.event=null}}catch(g){SC.Logger.warn("Exception during touchMove: %@".fmt(g))}SC.RunLoop.end();
return NO},touchend:function(o){SC.RunLoop.begin();try{var h=o.changedTouches,g,q,n,j=h.length,l,b,f=o.isCancel?"touchCancelled":"touchEnd",m,p,c,d,i=NO;
for(n=0;n<j;n++){g=h[n];g.type="touchend";q=this._touches[g.identifier];q.timeStamp=o.timeStamp;
q.pageX=g.pageX;q.pageY=g.pageY;q.type="touchend";if(q.hidesTouchIntercept){q.unhideTouchIntercept();
i=YES}if(this._drag){this._drag.tryToPerform("mouseUp",g);this._drag=null}this.endTouch(q,f,o);
this.finishTouch(q)}}catch(k){SC.Logger.warn("Exception during touchEnd: %@".fmt(k));
SC.RunLoop.end();return NO}SC.RunLoop.end();if(i){o.allowDefault();return YES}return NO
},touchcancel:function(a){a.isCancel=YES;this.touchend(a)},attemptKeyEquivalent:function(b){var d=null;
var c=b.commandCodes()[0];if(!c){return NO}var f=this.get("menuPane"),a=this.get("keyPane"),e=this.get("mainPane");
if(f){d=f.performKeyEquivalent(c,b);if(d){return d}}if(a){d=a.performKeyEquivalent(c,b);
if(d||a.get("isModal")){return d}}if(!d&&e&&(e!==a)){d=e.performKeyEquivalent(c,b);
if(d||e.get("isModal")){return d}}return d},_lastModifiers:null,_handleModifierChanges:function(b){var a;
a=this._lastModifiers=(this._lastModifiers||{alt:false,ctrl:false,shift:false});var c=false;
if(b.altKey!==a.alt){a.alt=b.altKey;c=true}if(b.ctrlKey!==a.ctrl){a.ctrl=b.ctrlKey;
c=true}if(b.shiftKey!==a.shift){a.shift=b.shiftKey;c=true}b.modifiers=a;return(c)?(this.sendEvent("flagsChanged",b)?b.hasCustomEventHandling:YES):YES
},_isFunctionOrNonPrintableKey:function(a){return !!(a.altKey||a.ctrlKey||a.metaKey||((a.charCode!==a.which)&&SC.FUNCTION_KEYS[a.which]))
},_isModifierKey:function(a){return !!SC.MODIFIER_KEYS[a.charCode]},keydown:function(a){if(SC.none(a)){return YES
}if(a.keyCode===229){this._IMEInputON=YES;return this.sendEvent("keyDown",a)}if(SC.browser.mozilla&&(a.which===8)){return true
}var b=this._handleModifierChanges(a),d=a.target||a.srcElement,c=(a.which===8)&&!SC.allowsBackspaceToPreviousPage&&(d===document.body);
if(this._isModifierKey(a)){return(c?NO:b)}b=YES;if(this._isFunctionOrNonPrintableKey(a)){if(a.keyCode>=37&&a.keyCode<=40&&SC.browser.mozilla){return YES
}b=this.sendEvent("keyDown",a);if(!b){b=!this.attemptKeyEquivalent(a)}else{b=a.hasCustomEventHandling;
if(b){c=NO}}}return c?NO:b},keypress:function(b){var c,e=b.keyCode,f=!!SC.browser.mozilla;
if(f&&(b.which===8)){b.which=e;c=this.sendEvent("keyDown",b);return c?(SC.allowsBackspaceToPreviousPage||b.hasCustomEventHandling):YES
}else{var d=(e>=37&&e<=40&&f),a=b.charCode;if((a!==undefined&&a===0)&&!d){return YES
}if(d){b.which=e}return this.sendEvent("keyDown",b)?b.hasCustomEventHandling:YES}},keyup:function(a){if(this._ffevt){this._ffevt=null
}var b=this._handleModifierChanges(a);if(this._isModifierKey(a)){return b}if(this._IMEInputON&&a.keyCode===13){a.isIMEInput=YES;
this.sendEvent("keyDown",a);this._IMEInputON=NO}return this.sendEvent("keyUp",a)?a.hasCustomEventHandling:YES
},beforedeactivate:function(c){var b=c.toElement;if(b&&b.tagName&&b.tagName!=="IFRAME"){var a=SC.$(b).view()[0];
if(a&&a.get("blocksIEDeactivate")){return NO}}return YES},mousedown:function(f){try{if(!SC.browser.msie){window.focus()
}this._clickCount+=1;if(!this._lastMouseUpAt||((Date.now()-this._lastMouseUpAt)>200)){this._clickCount=1
}else{var d=this._lastMouseDownX-f.clientX,a=this._lastMouseDownY-f.clientY,h=Math.sqrt(d*d+a*a);
if(h>8){this._clickCount=1}}f.clickCount=this._clickCount;this._lastMouseDownX=f.clientX;
this._lastMouseDownY=f.clientY;var c,b=this.targetViewForEvent(f);if(b){c=b.getPath("pane.firstResponder")
}if(c&&c.kindOf(SC.InlineTextFieldView)&&c!==b){c.resignFirstResponder()}b=this._mouseDownView=this.sendEvent("mouseDown",f,b);
if(b&&b.respondsTo("mouseDragged")){this._mouseCanDrag=YES}}catch(g){SC.Logger.warn("Exception during mousedown: %@".fmt(g));
this._mouseDownView=null;this._mouseCanDrag=NO;throw g}return b?f.hasCustomEventHandling:YES
},mouseup:function(b){this.targetViewForEvent(b);try{if(this._drag){this._drag.tryToPerform("mouseUp",b);
this._drag=null}var d=null,a=this._mouseDownView,c=this.targetViewForEvent(b);this._lastMouseUpAt=Date.now();
b.clickCount=this._clickCount;if(a){d=this.sendEvent("mouseUp",b,a);if(!d&&(this._clickCount===2)){d=this.sendEvent("doubleClick",b,a)
}if(!d){d=this.sendEvent("click",b,a)}}if(!d){if(this._clickCount===2){d=this.sendEvent("doubleClick",b,c)
}if(!d){d=this.sendEvent("click",b,c)}}this._mouseCanDrag=NO;this._mouseDownView=null
}catch(f){this._drag=null;this._mouseCanDrag=NO;this._mouseDownView=null;throw f}return(d)?b.hasCustomEventHandling:YES
},dblclick:function(a){if(SC.browser.isIE){this._clickCount=2;this.mouseup(a)}},mousewheel:function(b){try{var a=this.targetViewForEvent(b),c=this.sendEvent("mouseWheel",b,a)
}catch(d){throw d}return(c)?b.hasCustomEventHandling:YES},_lastHovered:null,mousemove:function(d){if(SC.browser.msie){if(this._lastMoveX===d.clientX&&this._lastMoveY===d.clientY){return
}}this._lastMoveX=d.clientX;this._lastMoveY=d.clientY;SC.RunLoop.begin();try{if(this._drag){if(SC.browser.msie){if(this._lastMouseDownX!==d.clientX||this._lastMouseDownY!==d.clientY){this._drag.tryToPerform("mouseDragged",d)
}}else{this._drag.tryToPerform("mouseDragged",d)}}else{var c=this._lastHovered||[],f=[],i,h,a,b=this.targetViewForEvent(d);
while(b&&(b!==this)){if(c.indexOf(b)!==-1){b.tryToPerform("mouseMoved",d);f.push(b)
}else{b.tryToPerform("mouseEntered",d);f.push(b)}b=b.get("nextResponder")}for(h=0,a=c.length;
h<a;h++){b=c[h];i=b.respondsTo("mouseExited");if(i&&!(f.indexOf(b)!==-1)){b.tryToPerform("mouseExited",d)
}}this._lastHovered=f;if(this._mouseDownView){if(SC.browser.msie){if(this._lastMouseDownX!==d.clientX&&this._lastMouseDownY!==d.clientY){this._mouseDownView.tryToPerform("mouseDragged",d)
}}else{this._mouseDownView.tryToPerform("mouseDragged",d)}}}}catch(g){throw g}SC.RunLoop.end()
},_mouseCanDrag:YES,selectstart:function(b){var c=this.targetViewForEvent(b),a=this.sendEvent("selectStart",b,c);
if(c&&c.respondsTo("mouseDragged")){return(a!==null?YES:NO)&&!this._mouseCanDrag}else{return(a!==null?YES:NO)
}},drag:function(){return false},contextmenu:function(b){var a=this.targetViewForEvent(b);
return this.sendEvent("contextMenu",b,a)},webkitAnimationStart:function(b){try{var a=this.targetViewForEvent(b);
this.sendEvent("animationDidStart",b,a)}catch(c){console.warn("Exception during animationDidStart: %@".fmt(c));
throw c}return a?b.hasCustomEventHandling:YES},webkitAnimationIteration:function(b){try{var a=this.targetViewForEvent(b);
this.sendEvent("animationDidIterate",b,a)}catch(c){console.warn("Exception during animationDidIterate: %@".fmt(c));
throw c}return a?b.hasCustomEventHandling:YES},webkitAnimationEnd:function(b){try{var a=this.targetViewForEvent(b);
this.sendEvent("animationDidEnd",b,a)}catch(c){console.warn("Exception during animationDidEnd: %@".fmt(c));
throw c}return a?b.hasCustomEventHandling:YES}});SC.Touch=function(d,a){this.touchContext=a;
this.identifier=d.identifier;var c=d.target,b;if(c&&SC.$(c).hasClass("touch-intercept")){d.target.style.webkitTransform="translate3d(0px,-5000px,0px)";
c=document.elementFromPoint(d.pageX,d.pageY);if(c){b=SC.$(c).view()[0]}this.hidesTouchIntercept=NO;
if(c.tagName==="INPUT"){this.hidesTouchIntercept=d.target}else{d.target.style.webkitTransform="translate3d(0px,0px,0px)"
}}else{b=d.target?SC.$(d.target).view()[0]:null}this.targetView=b;this.target=c;this.hasEnded=NO;
this.type=d.type;this.clickCount=1;this.view=undefined;this.touchResponder=this.nextTouchResponder=undefined;
this.touchResponders=[];this.startX=this.pageX=d.pageX;this.startY=this.pageY=d.pageY
};SC.Touch.prototype={unhideTouchIntercept:function(){var a=this.hidesTouchIntercept;
if(a){setTimeout(function(){a.style.webkitTransform="translate3d(0px,0px,0px)"},500)
}},allowDefault:function(){this.hasCustomEventHandling=YES},preventDefault:function(){if(this.event){this.event.preventDefault()
}},stopPropagation:function(){if(this.event){this.event.stopPropagation()}},stop:function(){if(this.event){this.event.stop()
}},end:function(){this.touchContext.endTouch(this)},makeTouchResponder:function(b,c,a){this.touchContext.makeTouchResponder(this,b,c,a)
},captureTouch:function(a,b){this.touchContext.captureTouch(this,a,b)},touchesForView:function(a){return this.touchContext.touchesForView(a)
},touchesForResponder:function(a){return this.touchContext.touchesForView(a)},averagedTouchesForView:function(a,b){return this.touchContext.averagedTouchesForView(a,(b?this:null))
}};SC.mixin(SC.Touch,{create:function(b,a){return new SC.Touch(b,a)}});SC.ready(SC.RootResponder,SC.RootResponder.ready=function(){var a;
a=SC.RootResponder.responder=SC.RootResponder.create();a.setup()});SC.platform={touch:("createTouch" in document),bounceOnScroll:(/iPhone|iPad|iPod/).test(navigator.platform),pinchToZoom:(/iPhone|iPad|iPod/).test(navigator.platform),input:{placeholder:(function(){return"placeholder" in document.createElement("input")
})()},input:function(d){var e={},c=d.length,f=document.createElement("input"),b,a;
for(a=0;a<c;a++){b=d[a];e[b]=!!(b in f)}return e}(("autocomplete readonly list size required multiple maxlength pattern min max step placeholder").w()),standalone:navigator.standalone,cssPrefix:null,domCSSPrefix:null,removeEvents:function(d){var b,a=d.length,c;
for(b=0;b<a;b++){c=d[b];SC.Event.remove(document,c,SC.RootResponder.responder,SC.RootResponder.responder[c])
}},replaceEvent:function(a,b){SC.Event.remove(document,a,SC.RootResponder.responder,SC.RootResponder.responder[a]);
SC.Event.add(document,a,this,b)},supportsCSSTransitions:NO,supportsCSSTransforms:NO,understandsCSS3DTransforms:NO,supportsCSS3DTransforms:NO,supportsHashChange:function(){return("onhashchange" in window)&&(document.documentMode===undefined||document.documentMode>7)
}()};(function(){var a=navigator.userAgent.toLowerCase();if((/webkit/).test(a)){SC.platform.cssPrefix="webkit";
SC.platform.domCSSPrefix="Webkit"}else{if((/opera/).test(a)){SC.platform.cssPrefix="opera";
SC.platform.domCSSPrefix="O"}else{if((/msie/).test(a)&&!(/opera/).test(a)){SC.platform.cssPrefix="ms";
SC.platform.domCSSPrefix="ms"}else{if((/mozilla/).test(a)&&!(/(compatible|webkit)/).test(a)){SC.platform.cssPrefix="moz";
SC.platform.domCSSPrefix="Moz"}}}}})();(function(){var d=document.createElement("div");
var e=["-moz-","-moz-","-o-","-ms-","-webkit-"];var a=["moz","Moz","o","ms","webkit"];
var c="",b=null;for(b=0;b<e.length;b++){c+=e[b]+"transition:all 1s linear;";c+=e[b]+"transform: translate(1px, 1px);";
c+=e[b]+"perspective: 500px;"}d.style.cssText=c;for(b=0;b<a.length;b++){if(d.style[a[b]+"TransitionProperty"]!==undefined){SC.platform.supportsCSSTransitions=YES
}if(d.style[a[b]+"Transform"]!==undefined){SC.platform.supportsCSSTransforms=YES}if(d.style[a[b]+"Perspective"]!==undefined||d.style[a[b]+"PerspectiveProperty"]!==undefined){SC.platform.understandsCSS3DTransforms=YES;
SC.platform.supportsCSS3DTransforms=YES}}if(window.media&&window.media.matchMedium){if(!window.media.matchMedium("(-webkit-transform-3d)")){SC.platform.supportsCSS3DTransforms=NO
}}else{if(window.styleMedia&&window.styleMedia.matchMedium){if(!window.styleMedia.matchMedium("(-webkit-transform-3d)")){SC.platform.supportsCSS3DTransforms=NO
}}}})();require("system/ready");require("system/root_responder");require("system/platform");
SC.device=SC.Object.create({orientation:"desktop",isOffline:NO,mouseLocation:function(){var a=SC.RootResponder.responder,c=a._lastMoveX,b=a._lastMoveY;
if(SC.empty(c)||SC.empty(b)){return null}return{x:c,y:b}}.property(),init:function(){arguments.callee.base.apply(this,arguments);
if(SC.platform.touch){this.orientationchange()}if(navigator&&navigator.onLine===false){this.set("isOffline",YES)
}this.panes=SC.Set.create()},setup:function(){var a=SC.RootResponder.responder;a.listenFor("orientationchange".w(),window,this);
a.listenFor("online offline".w(),document,this)},orientationchange:function(a){if(window.orientation===0||window.orientation===180){this.set("orientation","portrait")
}else{this.set("orientation","landscape")}},orientationObserver:function(){var a=SC.$(document.body),b=this.get("orientation");
if(b==="portrait"){a.setClass("portrait",YES);a.setClass("landscape",NO)}if(b==="landscape"){a.setClass("portrait",NO);
a.setClass("landscape",YES)}}.observes("orientation"),online:function(a){this.set("isOffline",NO)
},offline:function(a){this.set("isOffline",YES)}});SC.ready(function(){SC.device.setup()
});sc_require("system/locale");SC.IMAGE_ABORTED_ERROR=SC.$error("SC.Image.AbortedError","Image",-100);
SC.IMAGE_FAILED_ERROR=SC.$error("SC.Image.FailedError","Image",-101);SC.imageCache=SC.Object.create({loadLimit:4,activeRequests:0,loadImage:function(a,e,f,d){var b=SC.typeOf(e);
if(SC.none(f)&&SC.typeOf(e)===SC.T_FUNCTION){e=null;f=e}if(SC.typeOf(f)===SC.T_STRING){f=e[f]
}if(SC.none(d)){d=SC.none(e)&&SC.none(f)}var c=this._imageEntryFor(a);if(c.status===this.IMAGE_LOADED){if(f){f.call(e||c.image,c.url,c.image)
}}else{if(e||f){this._addCallback(c,e,f)}c.retainCount++;this._scheduleImageEntry(c,d)
}},releaseImage:function(a,d,e){var c=this._imageEntryFor(a,NO);if(!c){return this
}if(--c.retainCount<=0){this._deleteEntry(c)}else{if(d||e){var b=SC.typeOf(d);if(SC.none(e)&&SC.typeOf(d)===SC.T_FUNCTION){d=null;
e=d}if(SC.typeOf(e)===SC.T_STRING){e=d[e]}this._removeCallback(c,d,e)}}},reloadImage:function(a){var b=this._imageEntryFor(a,NO);
if(b&&b.status===this.IMAGE_LOADED){b.status=this.IMAGE_WAITING}},loadNextImage:function(){var c=null,a;
if(this.get("activeRequests")>=this.get("loadLimit")){return}a=this._foregroundQueue;
while(a.length>0&&!c){c=a.shift()}if(!c){a=this._backgroundQueue;while(a.length>0&&!c){c=a.shift()
}}this.set("isLoading",!!c);if(c){var b=c.image;b.onabort=this._imageDidAbort;b.onerror=this._imageDidError;
b.onload=this._imageDidLoad;b.src=c.url;this._loading.push(c);this.incrementProperty("activeRequests");
this.loadNextImage()}},_imageEntryFor:function(c,a){if(a===undefined){a=YES}var d=this._images[c];
if(!d&&a){var b=new Image();d=this._images[c]={url:c,status:this.IMAGE_WAITING,callbacks:[],retainCount:0,image:b};
b.entry=d}return d},_deleteEntry:function(a){this._unscheduleImageEntry(a);delete this._images[a.url]
},_addCallback:function(c,d,e){var b=c.callbacks;var a=b.find(function(f){return f[0]===d&&f[1]===e
},this);if(!a){b.push([d,e])}b=null;return this},_removeCallback:function(b,c,d){var a=b.callbacks;
a.forEach(function(f,e){if(f[0]===c&&f[1]===d){a[e]=null}},this);a=null;return this
},_scheduleImageEntry:function(d,c){var b=this._backgroundQueue;var e=this._foregroundQueue;
if(d.status===this.IMAGE_LOADED){return this}if((d.status===this.IMAGE_QUEUED)&&!c&&d.isBackground){b[b.indexOf(d)]=null;
d.status=this.IMAGE_WAITING}if(d.status!==this.IMAGE_QUEUED){var a=(c)?b:e;a.push(d);
d.status=this.IMAGE_QUEUED;d.isBackground=c}if(!this.isLoading){this.invokeLater(this.loadNextImage,100)
}this.set("isLoading",YES);return this},_unscheduleImageEntry:function(b){if(b.status!==this.IMAGE_QUEUED){return this
}var a=b.isBackground?this._backgroundQueue:this._foregroundQueue;a[a.indexOf(b)]=null;
if(this._loading.indexOf(b)>=0){a.image.abort();this.imageStatusDidChange(b,this.ABORTED)
}return this},_imageDidAbort:function(){SC.RunLoop.begin();SC.imageCache.imageStatusDidChange(this.entry,SC.imageCache.ABORTED);
SC.RunLoop.end()},_imageDidError:function(){SC.RunLoop.begin();SC.imageCache.imageStatusDidChange(this.entry,SC.imageCache.ERROR);
SC.RunLoop.end()},_imageDidLoad:function(){SC.RunLoop.begin();SC.imageCache.imageStatusDidChange(this.entry,SC.imageCache.LOADED);
SC.RunLoop.end()},imageStatusDidChange:function(c,a){if(!c){return}var b=c.url;var d;
switch(a){case this.LOADED:d=c.image;break;case this.ABORTED:d=SC.IMAGE_ABORTED_ERROR;
break;case this.ERROR:d=SC.IMAGE_FAILED_ERROR;break;default:d=SC.IMAGE_FAILED_ERROR;
break}c.callbacks.forEach(function(f){var g=f[0],h=f[1];h.call(g,b,d)},this);c.callbacks=[];
c.status=(a===this.LOADED)?this.IMAGE_LOADED:this.IMAGE_WAITING;var e=c.image;if(e){e.onload=e.onerror=e.onabort=null;
if(a!==this.LOADED){c.image=null}}this._loading[this._loading.indexOf(c)]=null;if(this._loading.length>this.loadLimit*2){this._loading=this._loading.compact()
}this.decrementProperty("activeRequests");this.loadNextImage()},init:function(){arguments.callee.base.apply(this,arguments);
this._images={};this._loading=[];this._foregroundQueue=[];this._backgroundQueue=[]
},IMAGE_LOADED:"loaded",IMAGE_QUEUED:"queued",IMAGE_WAITING:"waiting",ABORTED:"aborted",ERROR:"error",LOADED:"loaded"});
SC.json={encode:function(a){return JSON.stringify(a)},decode:function(a){return JSON.parse(a)
}};if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);
case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;
i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space
}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)
}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")
}}}());SC.Math=SC.Object.create({near:function(c,b,a){if(!a){a=0.00001}return Math.abs(c-b)<=a
},round:function(d,a){if(!a){a=0}var b=Math.pow(10,a);if(a<0){var c=b.toString();
b=c.substring(0,c.indexOf("1")+1)}d=d.valueOf();return Math.round(d*b)/b}});SC.Page=SC.Object.extend({owner:null,get:function(a){var b=this[a];
if(b&&b.isClass){this[a]=b=b.create({page:this});if(!this.get("inDesignMode")){b.awake()
}return b}else{return arguments.callee.base.apply(this,arguments)}},awake:function(){var b,a;
for(a in this){if(!this.hasOwnProperty(a)){continue}b=this[a];if(b&&b.isViewClass){this[a]=b=b.create({page:this})
}}return this},getIfConfigured:function(b){var a=this[b];return(a&&a.isViewClass)?null:this.get(b)
},loc:function(c){var a,b;for(b in c){if(!c.hasOwnProperty(b)){continue}a=this[b];
if(!a||!a.isViewClass){continue}a.loc(c[b])}return this}});SC.Page.design=SC.Page.create;
SC.Page.localization=function(a){return a};sc_require("system/builder");SC.MODE_REPLACE="replace";
SC.MODE_APPEND="append";SC.MODE_PREPEND="prepend";SC.NON_PIXEL_PROPERTIES="zIndex font-weight opacity".w();
SC.COMBO_STYLES={WebkitTransition:"WebkitTransitionProperty WebkitTransitionDuration WebkitTransitionDelay WebkitTransitionTimingFunction".w()};
SC.RenderContext=SC.Builder.create({SELF_CLOSING:SC.CoreSet.create().addEach("area base basefront br hr input img link meta".w()),init:function(e,d){var b,a;
if(d){this.prevObject=d;this.strings=d.strings;this.offset=d.length+d.offset}if(!this.strings){this.strings=[]
}if(e===undefined){e="div";a=YES}else{if(e==="div"||e==="label"||e==="a"){a=YES}else{if(SC.typeOf(e)===SC.T_STRING){e=e.toLowerCase();
a=YES}}}if(a){this._tagName=e;this._needsTag=YES;this.needsContent=YES;var f=this;
while(f){f.length++;f=f.prevObject}this.strings.push(null);this._selfClosing=this.SELF_CLOSING.contains(e)
}else{this._elem=e;this._needsTag=NO;this.length=0;this.needsContent=NO}return this
},strings:null,offset:0,length:0,updateMode:SC.MODE_REPLACE,needsContent:NO,get:function(b){var a=this.strings||[];
return(b===undefined)?a.slice(this.offset,this.length):a[b+this.offset]},push:function(d){var b=this.strings,a=arguments.length;
if(!b){this.strings=b=[]}if(a>1){b.push.apply(b,arguments)}else{b.push(d)}var e=this;
while(e){e.length+=a;e=e.prevObject}this.needsContent=YES;return this},text:function(c){var b=arguments.length,a=0;
for(a=0;a<b;a++){this.push(SC.RenderContext.escapeHTML(arguments[a]))}return this
},join:function(b){if(this._needsTag){this.end()}var a=this.strings;return a?a.join(b||""):""
},begin:function(a){return SC.RenderContext(a,this)},element:function(){if(this._elem){return this._elem
}var a=SC.RenderContext,b=a.factory,c,d;if(!b){b=a.factory=document.createElement("div")
}b.innerHTML=this.join();if(SC.browser.msie){if(b.innerHTML.length>0){d=b.firstChild.cloneNode(true);
b.innerHTML=""}else{d=null}}else{d=b.firstChild}return d},remove:function(a){if(!a){return
}var b,c=this._elem;if(!c||!c.removeChild){return}b=document.getElementById(a);if(b){b=c.removeChild(b);
b=null}},update:function(){var a=this._elem,e=this.updateMode,g,k,i,f,m,c,j,d,h;this._innerHTMLReplaced=NO;
if(!a){return}g=SC.$(a);if(this.length>0){this._innerHTMLReplaced=YES;if(e===SC.MODE_REPLACE){a.innerHTML=this.join()
}else{c=a.cloneNode(false);c.innerHTML=this.join();h=(e===SC.MODE_APPEND)?null:a.firstChild;
j=c.firstChild;while(j){d=j.nextSibling;a.insertBefore(j,d);j=d}j=d=c=h=null}}if(this._attrsDidChange&&(i=this._attrs)){for(k in i){if(!i.hasOwnProperty(k)){continue
}f=i[k];if(f===null){a.removeAttribute(k)}else{g.attr(k,f)}}}if(this._classNamesDidChange&&(i=this._classNames)){g.attr("class",i.join(" "))
}if(this._idDidChange&&(i=this._id)){g.attr("id",i)}if(this._stylesDidChange&&(m=this._styles)){var b=this._STYLE_PAIR_ARRAY,l=this._JOIN_ARRAY;
for(k in m){if(!m.hasOwnProperty(k)){continue}i=m[k];if(i===null){continue}if(!isNaN(i)&&!SC.NON_PIXEL_PROPERTIES.contains(k)){i+="px"
}b[0]=this._dasherizeStyleName(k);b[1]=i;l.push(b.join(": "))}g.attr("style",l.join("; "));
l.length=0}a=this._elem=null;return this.prevObject||this},_DEFAULT_ATTRS:{},_TAG_ARRAY:[],_JOIN_ARRAY:[],_STYLE_PAIR_ARRAY:[],end:function(){var m=this._TAG_ARRAY,b,k,i,g,j=this._attrs,d=this._classNames,a=this._id,l=this._styles;
m[0]="<";m[1]=this._tagName;if(j||d||l||a){if(!j){j=this._DEFAULT_ATTRS}if(a){j.id=a
}if(d){j["class"]=d.join(" ")}if(l){k=this._JOIN_ARRAY;b=this._STYLE_PAIR_ARRAY;for(i in l){if(!l.hasOwnProperty(i)){continue
}g=l[i];if(g===null){continue}if(!isNaN(g)&&!SC.NON_PIXEL_PROPERTIES.contains(i)){g+="px"
}b[0]=this._dasherizeStyleName(i);b[1]=g;k.push(b.join(": "))}j.style=k.join("; ");
k.length=0}m.push(" ");for(i in j){if(!j.hasOwnProperty(i)){continue}g=j[i];if(g===null){continue
}m.push(i,'="',g,'" ')}if(j===this._DEFAULT_ATTRS){delete j.style;delete j["class"];
delete j.id}}var h=this.strings;var f=(this._selfClosing===NO)?NO:(this.length===1);
m.push(f?" />":">");h[this.offset]=m.join("");m.length=0;if(!f){m[0]="</";m[1]=this._tagName;
m[2]=">";h.push(m.join(""));var e=this;while(e){e.length++;e=e.prevObject}m.length=0
}this._elem=null;return this.prevObject||this},tag:function(a,b){return this.begin(a,b).end()
},tagName:function(a){if(a===undefined){if(!this._tagName&&this._elem){this._tagName=this._elem.tagName
}return this._tagName}else{this._tagName=a;this._tagNameDidChange=YES;return this
}},id:function(a){if(a===undefined){if(!this._id&&this._elem){this._id=this._elem.id
}return this._id}else{this._id=a;this._idDidChange=YES;return this}},classNames:function(b,a){if(b===undefined){if(!this._classNames&&this._elem){this._classNames=(SC.$(this._elem).attr("class")||"").split(" ")
}if(this._cloneClassNames){this._classNames=(this._classNames||[]).slice();this._cloneClassNames=NO
}if(!this._classNames){this._classNames=[]}return this._classNames}else{this._classNames=b;
this._cloneClassNames=a||NO;this._classNamesDidChange=YES;return this}},hasClass:function(a){return this.classNames().indexOf(a)>=0
},addClass:function(d){if(d===undefined||d===null){console.warn("You are adding an undefined or empty class"+this.toString());
return this}var e=this.classNames();if(SC.typeOf(d)===SC.T_STRING){if(e.indexOf(d)<0){e.push(d);
this._classNamesDidChange=YES}}else{for(var c=0,a=d.length;c<a;c++){var b=d[c];if(e.indexOf(b)<0){e.push(b);
this._classNamesDidChange=YES}}}return this},removeClass:function(b){var c=this._classNames,a;
if(!c&&this._elem){c=this._classNames=(SC.$(this._elem).attr("class")||"").split(" ")
}if(c&&(a=c.indexOf(b))>=0){if(this._cloneClassNames){c=this._classNames=c.slice();
this._cloneClassNames=NO}c[a]=null;this._classNamesDidChange=YES}return this},resetClassNames:function(){this._classNames=[];
this._classNamesDidChange=YES;return this},setClass:function(d,c){var f,a,b,e;if(c!==undefined){return c?this.addClass(d):this.removeClass(d)
}else{f=this._classNames;if(!f&&this._elem){f=this._classNames=(SC.$(this._elem).attr("class")||"").split(" ")
}if(!f){f=this._classNames=[]}if(this._cloneClassNames){f=this._classNames=f.slice();
this._cloneClassNames=NO}e=NO;for(b in d){if(!d.hasOwnProperty(b)){continue}a=f.indexOf(b);
if(d[b]){if(a<0){f.push(b);e=YES}}else{if(a>=0){f[a]=null;e=YES}}}if(e){this._classNamesDidChange=YES
}}return this},_STYLE_REGEX:/-?\s*([^:\s]+)\s*:\s*([^;]+)\s*;?/g,styles:function(d,e){var a,c,b;
if(d===undefined){if(!this._styles&&this._elem){a=SC.$(this._elem).attr("style");
if(a&&(a=a.toString()).length>0){if(SC.browser.msie){a=a.toLowerCase()}d={};c=this._STYLE_REGEX;
c.lastIndex=0;while(b=c.exec(a)){d[this._camelizeStyleName(b[1])]=b[2]}this._styles=d;
this._cloneStyles=NO}else{this._styles={}}}else{if(!this._styles){this._styles={}
}else{if(this._cloneStyles){this._styles=SC.beget(this._styles);this._cloneStyles=NO
}}}return this._styles}else{this._styles=d;this._cloneStyles=e||NO;this._stylesDidChange=YES;
return this}},_deleteComboStyles:function(c,b){var e=SC.COMBO_STYLES[b],d=NO;if(e){var a;
for(a=0;a<e.length;a++){if(c[e[a]]){delete c[e[a]];d=YES}}}return d},addStyle:function(a,e){var b,d=NO,c=this.styles();
if(typeof a===SC.T_STRING){if(e===undefined){return c[a]}else{d=this._deleteComboStyles(c,a);
if(c[a]!==e){c[a]=e;d=YES}if(d){this._stylesDidChange=YES}}}else{for(b in a){if(!a.hasOwnProperty(b)){continue
}d=d||this._deleteComboStyles(c,b);e=a[b];if(c[b]!==e){c[b]=e;d=YES}}if(d){this._stylesDidChange=YES
}}return this},removeStyle:function(a){if(!this._styles&&!this._elem){return this
}var b=this.styles();if(b[a]){b[a]=null;this._stylesDidChange=YES}},attr:function(a,e){var c,b=this._attrs,d=NO;
if(!b){this._attrs=b={}}if(typeof a===SC.T_STRING){if(e===undefined){return b[a]}else{if(b[a]!==e){b[a]=e;
this._attrsDidChange=YES}}}else{for(c in a){if(!a.hasOwnProperty(c)){continue}e=a[c];
if(b[c]!==e){b[c]=e;d=YES}}if(d){this._attrsDidChange=YES}}return this},_camelizeStyleName:function(a){var b=a.match(/^-(webkit|moz|o)-/),c=a.camelize();
if(b){return c.substr(0,1).toUpperCase()+c.substr(1)}else{return c}},_dasherizeStyleName:function(a){var b=a.dasherize();
if(b.match(/^(webkit|moz|ms|o)-/)){b="-"+b}return b}});SC.RenderContext.fn.html=SC.RenderContext.fn.push;
SC.RenderContext.fn.css=SC.RenderContext.fn.addStyle;if(!SC.browser.isSafari||parseInt(SC.browser.version,10)<526){SC.RenderContext._safari3=YES
}SC.RenderContext.escapeHTML=function(d){var c,b,a;if(SC.none(d)){return d}c=this.escapeHTMLElement;
if(!c){c=this.escapeHTMLElement=document.createElement("div")}b=this.escapeTextNode;
if(!b){b=this.escapeTextNode=document.createTextNode("");c.appendChild(b)}b.data=d;
a=c.innerHTML;if(SC.RenderContext._safari3){a=a.replace(/>/g,"&gt;")}b=c=null;return a
};SC.Response=SC.Object.extend({isError:NO,errorValue:function(){return this}.property().cacheable(),errorObject:null,request:null,originalRequest:function(){var a=this.get("request");
while(a.get("source")){a=a.get("source")}return a}.property("request").cacheable(),type:function(){return this.getPath("request.type")
}.property("request").cacheable(),address:function(){return this.getPath("request.address")
}.property("request").cacheable(),isJSON:function(){return this.getPath("request.isJSON")||NO
}.property("request").cacheable(),isXML:function(){return this.getPath("request.isXML")||NO
}.property("request").cacheable(),listeners:function(){return this.getPath("request.listeners")
}.property("request").cacheable(),status:-100,headers:null,encodedBody:null,body:function(){var a=this.get("encodedBody");
if(a&&this.get("isJSON")){try{a=SC.json.decode(a)}catch(b){return SC.Error.create({message:b.name+": "+b.message,label:"Response",errorValue:this})
}}return a}.property("encodedBody").cacheable(),response:function(){return this.get("body")
}.property("body").cacheable(),isCancelled:NO,timedOut:null,timeoutTimer:null,fire:function(){var a=this.get("request"),c=a?a.get("source"):null;
if(c&&c.willSend){c.willSend(a,this)}a.freeze();if(!this.get("isCancelled")){this.invokeTransport()
}var b=a.get("timeout");if(b){var d=SC.Timer.schedule({target:this,action:"timeoutReached",interval:b,repeats:NO});
this.set("timeoutTimer",d)}if(!this.get("isCancelled")&&c&&c.didSend){c.didSend(a,this)
}},invokeTransport:function(){this.receive(function(a){this.set("status",200)},this)
},receive:function(e,a){if(!this.get("timedOut")){var d=this.get("timeoutTimer");
if(d){d.invalidate()}this.set("timedOut",NO);var b=this.get("request");var c=b?b.get("source"):null;
SC.RunLoop.begin();if(c&&c.willReceive){c.willReceive(b,this)}e.call(a,!this.get("isCancelled"));
if(!this.get("isCancelled")&&c&&c.didReceive){c.didReceive(b,this)}if(!this.get("isCancelled")){this.notify()
}SC.RunLoop.end()}SC.Request.manager.transportDidClose(this);return this},cancel:function(){if(!this.get("isCancelled")){this.set("isCancelled",YES);
this.cancelTransport();SC.Request.manager.transportDidClose(this)}},timeoutReached:function(){if(this.get("timedOut")===null){this.set("timedOut",YES);
this.cancelTransport();SC.Request.manager.transportDidClose(this);var a=SC.$error("HTTP Request timed out","Request",408);
a.set("errorValue",this);this.set("isError",YES);this.set("errorObject",a);var b=this.get("request");
var c=b?b.get("source"):null;if(!this.get("isCancelled")&&c&&c.didTimeout){c.didTimeout(b,this)
}}},cancelTransport:function(){},_notifyListener:function(b,a){var e=b[a],f,d,c;if(!e){return NO
}f=(e.params||[]).copy();f.unshift(this);d=e.target;c=e.action;if(SC.typeOf(c)===SC.T_STRING){c=d[c]
}return c.apply(d,f)},notify:function(){var b=this.get("listeners"),a=this.get("status"),c=Math.floor(a/100)*100,d=NO;
if(!b){return this}d=this._notifyListener(b,a);if(!d){d=this._notifyListener(b,c)
}if(!d){d=this._notifyListener(b,0)}return this},toString:function(){var a=arguments.callee.base.apply(this,arguments);
return"%@<%@ %@, status=%@".fmt(a,this.get("type"),this.get("address"),this.get("status"))
}});SC.XHRResponse=SC.Response.extend({headers:function(){var c=this.get("rawRequest"),b=c?c.getAllResponseHeaders():null,a={};
if(!b){return a}b.split("\n").forEach(function(g){var d=g.indexOf(":"),e,f;if(d>=0){e=g.slice(0,d);
f=g.slice(d+1).trim();a[e]=f}},this);return a}.property("status").cacheable(),header:function(a){var b=this.get("rawRequest");
return b?b.getResponseHeader(a):null},encodedBody:function(){var b=this.get("rawRequest"),a;
if(!b){a=null}else{if(this.get("isXML")){a=b.responseXML}else{a=b.responseText}}return a
}.property("status").cacheable(),cancelTransport:function(){var a=this.get("rawRequest");
if(a){a.abort()}this.set("rawRequest",null)},invokeTransport:function(){var d,g,b,c,f;
function e(){for(var h=0;h<arguments.length;h++){try{var j=arguments[h]();return j
}catch(k){}}return NO}d=e(function(){return new XMLHttpRequest()},function(){return new ActiveXObject("Msxml2.XMLHTTP")
},function(){return new ActiveXObject("Microsoft.XMLHTTP")});this.set("rawRequest",d);
c=!!this.getPath("request.isAsynchronous");if(c){if(!SC.browser.msie){SC.Event.add(d,"readystatechange",this,this.finishRequest,d)
}else{g=this;b=function(){if(!g){return null}var h=g.finishRequest();if(h){g=null
}return h};d.onreadystatechange=b}}d.open(this.get("type"),this.get("address"),c);
f=this.getPath("request.headers");for(var a in f){d.setRequestHeader(a,f[a])}d.send(this.getPath("request.encodedBody"));
if(!c){this.finishRequest()}return d},finishRequest:function(c){var e=this.get("rawRequest"),a=e.readyState,d,b,f;
if(a===4){this.receive(function(g){if(!g){return}b=-1;try{b=e.status||0}catch(i){}if((b<200)||(b>=300)){try{f=e.statusText||""
}catch(h){f=""}d=SC.$error(f||"HTTP Request failed","Request",b);d.set("errorValue",this);
this.set("isError",YES);this.set("errorObject",d)}this.set("status",b)},this);e.onreadystatechange=function(){};
return YES}return NO}});sc_require("system/response");SC.Request=SC.Object.extend(SC.Copyable,SC.Freezable,{isAsynchronous:YES,isJSON:NO,isXML:NO,init:function(){arguments.callee.base.apply(this,arguments);
this.header("X-Requested-With","XMLHttpRequest");this.header("X-SproutCore-Version","1.0")
},headers:function(){var a=this._headers;if(!a){a=this._headers={}}return a}.property().cacheable(),responseClass:SC.XHRResponse,source:null,address:null,type:"GET",timeout:null,body:null,encodedBody:function(){var a=this.get("body");
if(a&&this.get("isJSON")){a=SC.json.encode(a)}return a}.property("isJSON","isXML","body").cacheable(),willSend:function(b,a){},didSend:function(b,a){},willReceive:function(b,a){},didReceive:function(b,a){},didTimeout:function(b,a){},COPY_KEYS:"isAsynchronous isJSON isXML address type timeout body responseClass willSend didSend willReceive didReceive".w(),copy:function(){var a={},d=this.COPY_KEYS,f=d.length,b,c,e;
while(--f>=0){b=d[f];if(this.hasOwnProperty(b)){a[b]=this.get(b)}}if(this.hasOwnProperty("listeners")){a.listeners=SC.copy(this.get("listeners"))
}if(this.hasOwnProperty("_headers")){a._headers=SC.copy(this._headers)}a.source=this.get("source")||this;
return this.constructor.create(a)},header:function(a,b){var c;if(SC.typeOf(a)===SC.T_STRING){c=this._headers;
if(arguments.length===1){return c?c[a]:null}else{this.propertyWillChange("headers");
if(!c){c=this._headers={}}c[a]=b;this.propertyDidChange("headers");return this}}else{if(b===undefined){c=a;
this.beginPropertyChanges();for(a in c){if(!c.hasOwnProperty(a)){continue}this.header(a,c[a])
}this.endPropertyChanges();return this}}return this},async:function(a){if(a===undefined){a=YES
}return this.set("isAsynchronous",a)},json:function(a){if(a===undefined){a=YES}if(a){this.set("isXML",NO)
}return this.set("isJSON",a)},xml:function(a){if(a===undefined){a=YES}if(a){this.set("isJSON",NO)
}return this.set("isXML",a)},_prep:function(){var a=!!this.header("Content-Type");
if(this.get("isJSON")&&!a){this.header("Content-Type","application/json")}else{if(this.get("isXML")&&!a){this.header("Content-Type","text/xml")
}}return this},send:function(a){var b=this.get("timeout");if(b){if(!this.get("isAsynchronous")){throw"Timeout values cannot be used with synchronous requests"
}}else{if(b===0){throw"The timeout value must either not be specified or must be greater than 0"
}}if(a){this.set("body",a)}return SC.Request.manager.sendRequest(this.copy()._prep())
},resend:function(){var a=this.get("source")?this:this.copy()._prep();return SC.Request.manager.sendRequest(a)
},notify:function(a,e,d,f){var c=YES;if(SC.typeOf(a)!==SC.T_NUMBER){f=SC.A(arguments).slice(2);
d=e;e=a;a=0;c=NO}else{f=SC.A(arguments).slice(3)}var b=this.get("listeners");if(!b){this.set("listeners",b={})
}b[a]={target:e,action:d,params:f};return this}});SC.Request.mixin({getUrl:function(a){return this.create().set("address",a).set("type","GET")
},postUrl:function(b,a){var c=this.create().set("address",b).set("type","POST");if(a){c.set("body",a)
}return c},deleteUrl:function(a){return this.create().set("address",a).set("type","DELETE")
},putUrl:function(b,a){var c=this.create().set("address",b).set("type","PUT");if(a){c.set("body",a)
}return c}});SC.Request.manager=SC.Object.create(SC.DelegateSupport,{maxRequests:6,inflight:[],pending:[],sendRequest:function(b){if(!b){return null
}var a=b.get("responseClass").create({request:b});this.get("pending").pushObject(a);
this.fireRequestIfNeeded();return a},cancel:function(b){var d=this.get("pending"),c=this.get("inflight"),a;
if(d.indexOf(b)>=0){this.propertyWillChange("pending");d.removeObject(b);this.propertyDidChange("pending");
return YES}else{if(c.indexOf(b)>=0){b.cancel();c.removeObject(b);this.fireRequestIfNeeded();
return YES}else{return NO}}},cancelAll:function(){if(this.get("pending").length||this.get("inflight").length){this.set("pending",[]);
this.get("inflight").forEach(function(a){a.cancel()});this.set("inflight",[]);return YES
}else{return NO}},fireRequestIfNeeded:function(){var d=this.get("pending"),c=this.get("inflight"),a=this.get("maxRequests"),b;
if((d.length>0)&&(c.length<a)){b=d.shiftObject();c.pushObject(b);b.fire()}},transportDidClose:function(a){this.get("inflight").removeObject(a);
this.fireRequestIfNeeded()}});require("system/platform");SC.routes=SC.Object.create({_didSetup:NO,_location:null,_firstRoute:null,_extractParametersAndRoute:function(c){var a={},h=c.route||"",e,b,d,g,f,j;
e=(h.indexOf("?")<0&&h.indexOf("&")>=0)?"&":"?";b=h.split(e);h=b[0];if(b.length===1){b=[]
}else{if(b.length===2){b=b[1].split("&")}else{if(b.length>2){b.shift()}}}g=b.length;
for(d=0;d<g;++d){f=b[d].split("=");a[f[0]]=f[1]}for(j in c){if(c.hasOwnProperty(j)&&j!=="route"){a[j]=""+c[j]
}}b=[];for(j in a){b.push([j,a[j]].join("="))}a.params=e+b.join("&");a.route=h;return a
},location:function(b,c){var a;if(c!==undefined){if(c===null){c=""}if(typeof(c)==="object"){a=this._extractParametersAndRoute(c);
c=a.route+a.params}if(!SC.empty(c)||(this._location&&this._location!==c)){window.location.hash=encodeURI(c)
}this._location=c;return this}return this._location}.property(),ping:function(){var a;
if(!this._didSetup){this._didSetup=YES;if(SC.platform.supportsHashChange){this.hashChange();
SC.Event.add(window,"hashchange",this,this.hashChange)}else{a=this;this._invokeHashChange=function(){a.hashChange();
setTimeout(a._invokeHashChange,100)};this._invokeHashChange()}}},hashChange:function(a){var b=window.location.hash;
b=(b&&b.length>0)?b.slice(1,b.length):"";if(!SC.browser.isMozilla){b=decodeURI(b)
}if(this.get("location")!==b){SC.RunLoop.begin();this.set("location",b);SC.RunLoop.end()
}},add:function(a,b,c){if(!this._didSetup){this.invokeLast(this.ping)}if(c===undefined&&SC.typeOf(b)===SC.T_FUNCTION){c=b;
b=null}else{if(SC.typeOf(c)===SC.T_STRING){c=b[c]}}if(!this._firstRoute){this._firstRoute=this._Route.create()
}this._firstRoute.add(a.split("/"),b,c);return this},locationDidChange:function(){this.trigger()
}.observes("location"),trigger:function(){var a=this._firstRoute,b=this.get("location"),d,c;
if(a){d=this._extractParametersAndRoute({route:b});b=d.route;delete d.route;delete d.params;
c=a.routeForParts(b.split("/"),d);if(c&&c.target&&c.method){c.method.call(c.target,d)
}}},_Route:SC.Object.extend({target:null,method:null,staticRoutes:null,dynamicRoutes:null,wildcardRoutes:null,add:function(c,b,e){var a,d;
c=SC.clone(c);if(!c||c.length===0){this.target=b;this.method=e}else{a=c.shift();switch(a.slice(0,1)){case":":a=a.slice(1,a.length);
if(!this.dynamicRoutes){this.dynamicRoutes={}}if(!this.dynamicRoutes[a]){this.dynamicRoutes[a]=this.constructor.create()
}d=this.dynamicRoutes[a];break;case"*":a=a.slice(1,a.length);if(!this.wildcardRoutes){this.wildcardRoutes={}
}d=this.wildcardRoutes[a]=this.constructor.create();break;default:if(!this.staticRoutes){this.staticRoutes={}
}if(!this.staticRoutes[a]){this.staticRoutes[a]=this.constructor.create()}d=this.staticRoutes[a]
}if(d){d.add(c,b,e)}}},routeForParts:function(d,e){var b,c,a;d=SC.clone(d);if(!d||d.length===0){return this.method?this:null
}else{b=d.shift();if(this.staticRoutes&&this.staticRoutes[b]){return this.staticRoutes[b].routeForParts(d,e)
}else{for(c in this.dynamicRoutes){a=this.dynamicRoutes[c].routeForParts(d,e);if(a){e[c]=b;
return a}}for(c in this.wildcardRoutes){d.unshift(b);e[c]=d.join("/");return this.wildcardRoutes[c].routeForParts(null,e)
}return null}}}})});SC.Task=SC.Object.extend({run:function(a){}});sc_require("tasks/task");
SC.TaskQueue=SC.Task.extend({runWhenIdle:NO,runLimit:50,interval:50,isRunning:NO,minimumIdleDuration:500,_tasks:[],hasTasks:function(){return this._tasks.length>0
}.property("taskCount").cacheable(),taskCount:function(){return this._tasks.length
}.property().cacheable(),push:function(a){this._tasks.push(a);this.notifyPropertyChange("taskCount")
},next:function(){if(this._tasks.length<1){return null}var a=this._tasks.shift();
this.notifyPropertyChange("taskCount");return a},_taskCountDidChange:function(){this._setupIdle()
}.observes("taskCount"),_setupIdle:function(){if(this.get("runWhenIdle")&&!this._idleIsScheduled&&this.get("taskCount")>0){var a=this;
setTimeout(function(){a._idleEntry()},this.get("interval"));this._idleIsScheduled=YES
}},_idleEntry:function(){this._idleIsScheduled=NO;var a=SC.RunLoop.lastRunLoopEnd;
if(Date.now()-a>this.get("minimumIdleDuration")){this.run()}else{SC.RunLoop.begin();
this._setupIdle();SC.RunLoop.end();SC.RunLoop.lastRunLoopEnd=a}},run:function(a){this.set("isRunning",YES);
if(!a){a=this.get("runLimit")}var b,c=Date.now();while(b=this.next()){b.run(this);
if(Date.now()-c>a){break}}this._setupIdle();this.set("isRunning",NO)}});SC.backgroundTaskQueue=SC.TaskQueue.create({runWhenIdle:YES});
SC.time=function(a){var b=SC.beget(fn);b.value=timeOffset;return b};(function(){var a=new Date();
SC.mixin(SC.time,{month:function(c,b){a.setTime(c);if(b===undefined){return a.getMonth()
}a.setMonth(b);return a.getTime()},utc:function(b){a.setTime(b);return b+(a.getTimezoneOffset()*60*1000)
},local:function(b){a.setTime(b);return b-(a.getTimezoneOffset()*60*1000)},parse:function(b){},format:function(b){}})
})();SC.time.fmt=SC.time.format;SC.time.fn={done:function(){return this.value}};"month day year".split(" ").forEach(function(a){SC.time.fn[a]=function(b){if(b===undefined){return SC.time[a](this.value)
}else{this.value=SC.time[a](this.value,b);return this}}});var MONTH_NAMES=new Array("January","February","March","April","May","June","July","August","September","October","November","December","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
var DAY_NAMES=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sun","Mon","Tue","Wed","Thu","Fri","Sat");
function LZ(a){return(a<0||a>9?"":"0")+a}SC.Locale.define("en",{longMonthNames:"January February March April May".split(" "),shortMonthNames:[],shortDateFormat:"dd/mm/yy",longDateFormat:""});
SC.mixin(Date,{isDate:function(c,b){var a=Date.getDateFromFormat(c,b);if(a==0){return false
}return true},compareDates:function(e,f,c,d){var b=Date.getDateFromFormat(e,f);var a=Date.getDateFromFormat(c,d);
if(b==0||a==0){return -1}else{if(b>a){return 1}}return 0},getDateFromFormat:function(z,q){z=z+"";
q=q+"";var w=0;var l=0;var s="";var f="";var v="";var h,g;var b=new Date();var j=b.getFullYear();
var u=b.getMonth()+1;var t=1;var d=b.getHours();var r=b.getMinutes();var n=b.getSeconds();
var k="";var o=SC.Locale.currentLocale;while(l<q.length){s=q.charAt(l);f="";while((q.charAt(l)==s)&&(l<q.length)){f+=q.charAt(l++)
}if(f=="yyyy"||f=="yy"||f=="y"){if(f=="yyyy"){h=4;g=4}if(f=="yy"){h=2;g=2}if(f=="y"){h=2;
g=4}j=Date._getInt(z,w,h,g);if(j==null){return 0}w+=j.length;if(j.length==2){if(j>70){j=1900+(j-0)
}else{j=2000+(j-0)}}}else{if(f=="MMM"||f=="NNN"){u=0;for(var p=0;p<MONTH_NAMES.length;
p++){var e=MONTH_NAMES[p];if(z.substring(w,w+e.length).toLowerCase()==e.toLowerCase()){if(f=="MMM"||(f=="NNN"&&p>11)){u=p+1;
if(u>12){u-=12}w+=e.length;break}}}if((u<1)||(u>12)){return 0}}else{if(f=="EE"||f=="E"){for(var p=0;
p<DAY_NAMES.length;p++){var m=DAY_NAMES[p];if(z.substring(w,w+m.length).toLowerCase()==m.toLowerCase()){w+=m.length;
break}}}else{if(f=="MM"||f=="M"){u=Date._getInt(z,w,f.length,2);if(u==null||(u<1)||(u>12)){return 0
}w+=u.length}else{if(f=="dd"||f=="d"){t=Date._getInt(z,w,f.length,2);if(t==null||(t<1)||(t>31)){return 0
}w+=t.length}else{if(f=="hh"||f=="h"){d=Date._getInt(z,w,f.length,2);if(d==null||(d<1)||(d>12)){return 0
}w+=d.length}else{if(f=="HH"||f=="H"){d=Date._getInt(z,w,f.length,2);if(d==null||(d<0)||(d>23)){return 0
}w+=d.length}else{if(f=="KK"||f=="K"){d=Date._getInt(z,w,f.length,2);if(d==null||(d<0)||(d>11)){return 0
}w+=d.length}else{if(f=="kk"||f=="k"){d=Date._getInt(z,w,f.length,2);if(d==null||(d<1)||(d>24)){return 0
}w+=d.length;d--}else{if(f=="mm"||f=="m"){r=Date._getInt(z,w,f.length,2);if(r==null||(r<0)||(r>59)){return 0
}w+=r.length}else{if(f=="ss"||f=="s"){n=Date._getInt(z,w,f.length,2);if(n==null||(n<0)||(n>59)){return 0
}w+=n.length}else{if(f=="a"){if(z.substring(w,w+2).toLowerCase()=="am"){k="AM"}else{if(z.substring(w,w+2).toLowerCase()=="pm"){k="PM"
}else{return 0}}w+=2}else{if(z.substring(w,w+f.length)!=f){return 0}else{w+=f.length
}}}}}}}}}}}}}}if(w!=z.length){return 0}if(u==2){if(((j%4==0)&&(j%100!=0))||(j%400==0)){if(t>29){return 0
}}else{if(t>28){return 0}}}if((u==4)||(u==6)||(u==9)||(u==11)){if(t>30){return 0}}if(d<12&&k=="PM"){d=d-0+12
}else{if(d>11&&k=="AM"){d-=12}}var a=new Date(j,u-1,t,d,r,n);return a.getTime()},parseDate:function(k){var g=(arguments.length==2)?arguments[1]:false;
generalFormats=new Array("E NNN dd HH:mm:ss UTC yyyy","y-M-d","y-M-d","MMM d, y","MMM d,y","y-MMM-d","d-MMM-y","MMM d","d MMM y","d.MMM.y","y MMM d","y.MMM.d");
monthFirst=new Array("M/d/y","M-d-y","M.d.y","MMM-d","M/d","M-d");dateFirst=new Array("d/M/y","d-M-y","d.M.y","d-MMM","d/M","d-M");
var b=new Array("generalFormats",g?"dateFirst":"monthFirst",g?"monthFirst":"dateFirst");
var h=null;h=0;var e=new Date().getTime();switch(k.toLowerCase()){case"yesterday".loc():h=e-(24*60*60*1000);
break;case"today".loc():case"now".loc():h=e;break;case"tomorrow".loc():h=e+(24*60*60*1000);
break}if(h>0){return new Date(h)}for(var f=0;f<b.length;f++){var a=window[b[f]];for(var c=0;
c<a.length;c++){h=Date.getDateFromFormat(k,a[c]);if(h==0){h=Date.getDateFromFormat(k,a[c]+" H:m:s")
}if(h==0){h=Date.getDateFromFormat(k,a[c]+" h:m:s a")}if(h!=0){return new Date(h)
}}}return null},_isInteger:function(c){var b="1234567890";for(var a=0;a<c.length;
a++){if(b.indexOf(c.charAt(a))==-1){return false}}return true},_getInt:function(f,d,e,c){for(var a=c;
a>=e;a--){var b=f.substring(d,d+a);if(b.length<e){return null}if(Date._isInteger(b)){return b
}}return null}});SC.mixin(Date.prototype,{format:function(D){D=D+"";var I=this;var l="";
var v=0;var G="";var f="";var j=I.getFullYear()+"";var g=I.getMonth()+1;var F=I.getDate();
var o=I.getDay();var n=I.getHours();var x=I.getMinutes();var q=I.getSeconds();var t,u,b,r,J,e,C,B,z,p,N,n,L,i,a,A;
var w=new Object();if(j.length<4){j=""+(j-0+1900)}w.y=""+j;w.yyyy=j;w.yy=j.substring(2,4);
w.M=g;w.MM=LZ(g);w.MMM=MONTH_NAMES[g-1];w.NNN=MONTH_NAMES[g+11];w.d=F;w.dd=LZ(F);
w.E=DAY_NAMES[o+7];w.EE=DAY_NAMES[o];w.H=n;w.HH=LZ(n);if(n==0){w.h=12}else{if(n>12){w.h=n-12
}else{w.h=n}}w.hh=LZ(w.h);if(n>11){w.K=n-12}else{w.K=n}w.k=n+1;w.KK=LZ(w.K);w.kk=LZ(w.k);
if(n>11){w.a="PM"}else{w.a="AM"}w.m=x;w.mm=LZ(x);w.s=q;w.ss=LZ(q);while(v<D.length){G=D.charAt(v);
f="";while((D.charAt(v)==G)&&(v<D.length)){f+=D.charAt(v++)}if(w[f]!=null){l=l+w[f]
}else{l=l+f}}return l},utcFormat:function(){return(new Date(this.getTime()+(this.getTimezoneOffset()*60*1000))).format("E NNN dd HH:mm:ss UTC yyyy")
}});SC.Timer=SC.Object.extend({target:null,action:null,isPooled:NO,interval:0,startTime:null,repeats:NO,until:null,isPaused:NO,isScheduled:NO,isValid:YES,lastFireTime:0,fireTime:function(){if(!this.get("isValid")){return -1
}var e=this.get("startTime");if(!e||e===0){return -1}var a=this.get("interval"),c=this.get("lastFireTime");
if(c<e){c=e}var b;if(this.get("repeats")){if(a===0){b=c}else{b=e+(Math.floor((c-e)/a)+1)*a
}}else{b=e+a}var d=this.get("until");if(d&&d>0&&b>d){b=d}return b}.property("interval","startTime","repeats","until","isValid","lastFireTime").cacheable(),schedule:function(){if(!this.get("isValid")){return this
}this.beginPropertyChanges();if(!this.startTime){this.set("startTime",SC.RunLoop.currentRunLoop.get("startTime"))
}var a=this.get("fireTime"),b=this.get("lastFireTime");if(a>=b){this.set("isScheduled",YES);
SC.RunLoop.currentRunLoop.scheduleTimer(this,a)}this.endPropertyChanges();return this
},invalidate:function(){this.beginPropertyChanges();this.set("isValid",NO);SC.RunLoop.currentRunLoop.cancelTimer(this);
this.action=this.target=null;this.endPropertyChanges();if(this.get("isPooled")){SC.Timer.returnTimerToPool(this)
}return this},fire:function(){var b=Date.now();this.set("lastFireTime",b);var a=this.get("fireTime");
if(!this.get("isPaused")){this.performAction()}if(a>b){this.schedule()}else{this.invalidate()
}},performAction:function(){var a=SC.typeOf(this.action);if(a==SC.T_FUNCTION){this.action.call((this.target||this),this)
}else{if(a===SC.T_STRING){if(this.action.indexOf(".")>=0){var e=this.action.split(".");
var c=e.pop();var d=SC.objectForPropertyPath(e,window);var b=d.get?d.get(c):d[c];
if(b&&SC.typeOf(b)==SC.T_FUNCTION){b.call(d,this)}else{throw"%@: Timer could not find a function at %@".fmt(this,this.action)
}}else{SC.RootResponder.responder.sendAction(this.action,this.target,this)}}}},init:function(){arguments.callee.base.apply(this,arguments);
if(this.startTime instanceof Date){this.startTime=this.startTime.getTime()}if(this.until instanceof Date){this.until=this.until.getTime()
}},RESET_DEFAULTS:{target:null,action:null,isPooled:NO,isPaused:NO,isScheduled:NO,isValid:YES,interval:0,repeats:NO,until:null,startTime:null,lastFireTime:0},reset:function(b){if(!b){b=SC.EMPTY_HASH
}this.propertyWillChange("fireTime");var c=this.RESET_DEFAULTS;for(var a in c){if(!c.hasOwnProperty(a)){continue
}this[a]=SC.none(b[a])?c[a]:b[a]}this.propertyDidChange("fireTime");return this},removeFromTimerQueue:function(c){var b=this._timerQueuePrevious,a=this._timerQueueNext;
if(!b&&!a&&c!==this){return c}if(b){b._timerQueueNext=a}if(a){a._timerQueuePrevious=b
}this._timerQueuePrevious=this._timerQueueNext=null;return(c===this)?a:c},scheduleInTimerQueue:function(c,b){this._timerQueueRunTime=b;
var a=c;var d=null;while(a&&a._timerQueueRunTime<b){d=a;a=a._timerQueueNext}if(d){d._timerQueueNext=this;
this._timerQueuePrevious=d}if(a){a._timerQueuePrevious=this;this._timerQueueNext=a
}return(a===c)?this:c},collectExpiredTimers:function(c,a){if(this._timerQueueRunTime>a){return this
}c.push(this);var b=this._timerQueueNext;this._timerQueueNext=null;if(b){b._timerQueuePrevious=null
}return b?b.collectExpiredTimers(c,a):null}});SC.Timer.schedule=function(a){var b;
if(!a||SC.none(a.isPooled)||a.isPooled){b=this.timerFromPool(a)}else{b=this.create(a)
}return b.schedule()};SC.Timer.timerFromPool=function(a){var b=this._timerPool;if(!b){b=this._timerPool=[]
}var c=b.pop();if(!c){c=this.create()}return c.reset(a)};SC.Timer.returnTimerToPool=function(a){if(!this._timerPool){this._timerPool=[]
}this._timerPool.push(a);return this};SC.UserDefaults=SC.Object.extend({ready:NO,userDomain:null,appDomain:null,_defaults:null,_safari3DB:null,defaults:function(a){this._defaults=a;
this.allPropertiesDidChange()},readDefault:function(h){var c=undefined,a,i,g,j,f;
h=this._normalizeKeyName(h);a=this._userKeyName(h);if(this._written){c=this._written[a]
}if(SC.browser.msie=="7.0"){i=document.body;try{i.load("SC.UserDefaults")}catch(b){console.err("Couldn't load userDefaults in IE7: "+b.description)
}}else{if(this.HTML5DB_noLocalStorage){f=this._safari3DB}else{i=window.localStorage;
if(!i&&window.globalStorage){i=window.globalStorage[window.location.hostname]}}}if(i||f){g=["SC.UserDefaults",a].join("-at-");
if(SC.browser.msie=="7.0"){c=i.getAttribute(g.replace(/\W/gi,""))}else{if(f){c=this.dataHash[g]
}else{c=i[g]}}if(!SC.none(c)){try{c=SC.json.decode(c)}catch(d){c=undefined}}else{c=undefined
}}j=this.delegate;if(j&&j.userDefaultsNeedsDefault){c=j.userDefaultsNeedsDefault(this,h,a)
}if((c===undefined)&&this._defaults){c=this._defaults[a]||this._defaults[h]}return c
},writeDefault:function(j,h){var d,b,k,i,l,g;j=this._normalizeKeyName(j);d=this._userKeyName(j);
b=this._written;if(!b){b=this._written={}}b[d]=h;if(SC.browser.msie=="7.0"){k=document.body
}else{if(this.HTML5DB_noLocalStorage){g=this._safari3DB}else{k=window.localStorage;
if(!k&&window.globalStorage){k=window.globalStorage[window.location.hostname]}}}i=["SC.UserDefaults",d].join("-at-");
if(k||g){var a=SC.json.encode(h);if(SC.browser.msie=="7.0"){k.setAttribute(i.replace(/\W/gi,""),a);
k.save("SC.UserDefaults")}else{if(g){var c=this;g.transaction(function(e){e.executeSql("delete from SCLocalStorage where key = ?",[i],function(){e.executeSql("insert into SCLocalStorage(key, value) VALUES ('"+i+"', '"+a+"');",[],c._nullDataHandler,c.killTransaction)
})});this.dataHash[i]=a}else{try{k[i]=a}catch(f){console.error("Failed using localStorage. "+f)
}}}}l=this.delegate;if(l&&l.userDefaultsDidChange){l.userDefaultsDidChange(this,j,h,d)
}return this},resetDefault:function(g){var f,a,b,d,e,c;f=this._normalizeKeyName(g);
a=this._userKeyName(f);this.propertyWillChange(g);this.propertyWillChange(f);b=this._written;
if(b){delete b[a]}if(SC.browser.msie=="7.0"){d=document.body}else{if(this.HTML5DB_noLocalStorage){c=this._safari3DB
}else{d=window.localStorage;if(!d&&window.globalStorage){d=window.globalStorage[window.location.hostname]
}}}e=["SC.UserDefaults",a].join("-at-");if(d){if(SC.browser.msie=="7.0"){d.setAttribute(e.replace(/\W/gi,""),null);
d.save("SC.UserDefaults")}else{if(c){var h=this;c.transaction(function(i){i.executeSql("delete from SCLocalStorage where key = ?",[e],null)
});delete this.dataHash[e]}else{delete d[e]}}}this.propertyDidChange(g);this.propertyDidChange(f);
return this},unknownProperty:function(a,b){if(b===undefined){return this.readDefault(a)
}else{this.writeDefault(a,b);return b}},_normalizeKeyName:function(a){if(a.indexOf(":")<0){var b=this.get("appDomain")||"app";
a=[b,a].join(":")}return a},_userKeyName:function(b){var a=this.get("userDomain")||"(anonymous)";
return[a,b].join("-at-")},_domainDidChange:function(){var a=NO;if(this.get("userDomain")!==this._scud_userDomain){this._scud_userDomain=this.get("userDomain");
a=YES}if(this.get("appDomain")!==this._scud_appDomain){this._scud_appDomain=this.get("appDomain");
a=YES}if(a){this.allPropertiesDidChange()}}.observes("userDomain","appDomain"),init:function(){arguments.callee.base.apply(this,arguments);
if(SC.userDefaults&&SC.userDefaults.get("dataHash")){var f=SC.userDefaults.get("dataHash");
if(f){this.dataHash=SC.userDefaults.get("dataHash")}}this._scud_userDomain=this.get("userDomain");
this._scud_appDomain=this.get("appDomain");if(SC.browser.msie=="7.0"){document.body.addBehavior("#default#userData")
}this.HTML5DB_noLocalStorage=((parseInt(SC.browser.safari,0)>523)&&(parseInt(SC.browser.safari,0)<528));
if(this.HTML5DB_noLocalStorage){var d;try{if(!window.openDatabase){console.error("Trying to load a database with safari version 3.1 to get SC.UserDefaults to work. You are either in a previous version or there is a problem with your browser.");
return}else{var a="scdb",c="1.0",b="SproutCore database",i=65536;d=openDatabase(a,c,b,i)
}}catch(h){console.error("Trying to load a database with safari version 3.1 to get SC.UserDefaults to work. You are either in a previous version or there is a problem with your browser.");
return}if(d){var g=this;d.transaction(function(e){e.executeSql("CREATE TABLE IF NOT EXISTS SCLocalStorage(key TEXT NOT NULL PRIMARY KEY, value TEXT NOT NULL);",[],g._nullDataHandler,g.killTransaction)
});d.transaction(function(e){e.parent=g;e.executeSql("SELECT * from SCLocalStorage;",[],function(o,l){var m={},n;
for(var k=0,j=l.rows.length;k<j;k++){n=l.rows.item(k);m[n.key]=n.value}o.parent.dataHash=m;
SC.run(function(){SC.userDefaults.set("ready",YES)})},g.killTransaction)});this._safari3DB=d
}}else{this.set("ready",YES)}},_killTransaction:function(b,a){return true},_nullDataHandler:function(b,a){},readyCallback:function(a,b){this.func=b;
this.ob=a},readyChanged:function(){if(this.ready===YES){var a=this.func;if(a){a.apply(this.ob)
}}}.observes("ready")});SC.userDefaults=SC.UserDefaults.create();sc_require("system/browser");
SC.mixin({_downloadFrames:0,_copy_computed_props:["maxWidth","maxHeight","paddingLeft","paddingRight","paddingTop","paddingBottom","fontFamily","fontSize","fontStyle","fontWeight","fontVariant","lineHeight","whiteSpace"],download:function(e){var a=document.createElement("iframe"),d="DownloadFrame_"+this._downloadFrames;
SC.$(a).attr("id",d);a.style.border="10px";a.style.width="0px";a.style.height="0px";
a.style.position="absolute";a.style.top="-10000px";a.style.left="-10000px";if(!SC.browser.isSafari){SC.$(a).attr("src",e)
}document.getElementsByTagName("body")[0].appendChild(a);if(SC.browser.isSafari){SC.$(a).attr("src",e)
}this._downloadFrames=this._downloadFrames+1;if(!SC.browser.isSafari){var c=function(){document.body.removeChild(document.getElementById(d));
d=null};var b=c.invokeLater(null,2000)}a=null},normalizeURL:function(a){if(a.slice(0,1)=="/"){a=window.location.protocol+"//"+window.location.host+a
}else{if((a.slice(0,5)=="http:")||(a.slice(0,6)=="https:")){}else{a=window.location.href+"/"+a
}}return a},isPercentage:function(a){return(a<1&&a>0)},minX:function(a){return a.x||0
},maxX:function(a){return(a.x||0)+(a.width||0)},midX:function(a){return(a.x||0)+((a.width||0)/2)
},minY:function(a){return a.y||0},maxY:function(a){return(a.y||0)+(a.height||0)},midY:function(a){return(a.y||0)+((a.height||0)/2)
},centerX:function(b,a){return(a.width-b.width)/2},centerY:function(b,a){return(a.height-b.height)/2
},pointInRect:function(a,b){return(a.x>=SC.minX(b))&&(a.y>=SC.minY(b))&&(a.x<=SC.maxX(b))&&(a.y<=SC.maxY(b))
},rectsEqual:function(b,a,c){if(!b||!a){return(b==a)}if(!c&&c!==0){c=0.1}if((b.y!=a.y)&&(Math.abs(b.y-a.y)>c)){return NO
}if((b.x!=a.x)&&(Math.abs(b.x-a.x)>c)){return NO}if((b.width!=a.width)&&(Math.abs(b.width-a.width)>c)){return NO
}if((b.height!=a.height)&&(Math.abs(b.height-a.height)>c)){return NO}return YES},intersectRects:function(b,a){var c={x:Math.max(SC.minX(b),SC.minX(a)),y:Math.max(SC.minY(b),SC.minY(a)),width:Math.min(SC.maxX(b),SC.maxX(a)),height:Math.min(SC.maxY(b),SC.maxY(a))};
c.width=Math.max(0,c.width-c.x);c.height=Math.max(0,c.height-c.y);return c},unionRects:function(b,a){var c={x:Math.min(SC.minX(b),SC.minX(a)),y:Math.min(SC.minY(b),SC.minY(a)),width:Math.max(SC.maxX(b),SC.maxX(a)),height:Math.max(SC.maxY(b),SC.maxY(a))};
c.width=Math.max(0,c.width-c.x);c.height=Math.max(0,c.height-c.y);return c},cloneRect:function(a){return{x:a.x,y:a.y,width:a.width,height:a.height}
},stringFromRect:function(a){if(!a){return"(null)"}else{return"{x:"+a.x+", y:"+a.y+", width:"+a.width+", height:"+a.height+"}"
}},stringFromLayout:function(e){var d=["maxHeight","maxWidth","minHeight","minWidth","centerY","centerX","width","height","bottom","right","top","left"],a=[],c,b=d.length;
while(--b>=0){c=d[b];if(e.hasOwnProperty(c)){a.push(c+":"+e[c])}}return"{"+a.join(", ")+"}"
},heightForString:function(h,e,d,g){var f=this._heightCalcElement,c,a;c=(g&&SC.typeOf(g)===SC.T_ARRAY)?g.join(" "):"";
if(!e){e=100}if(!f){f=this._heightCalcElement=document.createElement("div");document.body.insertBefore(f,null)
}d=d+"; width: "+e+"px; left: "+(-1*e)+"px; position: absolute";var b=SC.$(f);b.attr("style",d);
if(c!==""){b.attr("class",c)}f.innerHTML=h;a=f.clientHeight;f=null;return a},prepareStringMeasurement:function(m,a){var j=this._metricsCalculationElement,g,n,c;
g=SC.A(a).join(" ");if(!j){j=this._metricsCalculationElement=document.createElement("div");
document.body.insertBefore(j,null)}if(SC.typeOf(m)!=SC.T_STRING){var f=null;if(document.defaultView&&document.defaultView.getComputedStyle){f=document.defaultView.getComputedStyle(m,null)
}else{f=m.currentStyle}c=f.cssText;if(!c||c.trim()===""){var l=this._copy_computed_props;
for(var h=0;h<l.length;h++){var b=l[h],e=f[b];j.style[b]=e}var k=j.style;if(k.font===""){var d="";
if(k.fontStyle){d+=k.fontStyle+" "}if(k.fontVariant){d+=k.fontVariant+" "}if(k.fontWeight){d+=k.fontWeight+" "
}if(k.fontSize){d+=k.fontSize}else{d+="10px"}if(k.lineHeight){d+="/"+k.lineHeight
}d+=" ";if(k.fontFamily){d+=k.fontFamily}else{k+="sans-serif"}j.style.font=d}SC.mixin(j.style,{left:"0px",top:"0px",position:"absolute",bottom:"auto",right:"auto",width:"auto",height:"auto"})
}else{j.setAttribute("style",c+"; position:absolute; left: 0px; top: 0px; bottom: auto; right: auto; width: auto; height: auto;")
}f=null}else{c=m;j.setAttribute("style",c+"; position:absolute; left: 0px; top: 0px; bottom: auto; right: auto; width: auto; height: auto;")
}j.className=g;j=null},teardownStringMeasurement:function(){var a=this._metricsCalculationElement;
a.innerHTML="";a.className="";a.setAttribute("style","");a=null},measureString:function(b){var c=this._metricsCalculationElement;
if(!c){throw"measureString requires a string measurement environment to be set up. Did you mean metricsForString?"
}if(typeof c.innerText!="undefined"){c.innerText=b}else{c.textContent=b}var a={width:c.clientWidth,height:c.clientHeight};
c=null;return a},metricsForString:function(b,c,d){SC.prepareStringMeasurement(c,d);
var a=SC.measureString(b);SC.teardownStringMeasurement();return a},viewportOffset:function(c){if(c.getBoundingClientRect){var d=c.getBoundingClientRect();
return{x:d.left,y:d.top}}var i=0,e=0,j,g,f,k,b,h=c,a=SC.browser.mozilla>=3;while(h){j=SC.$(h);
e+=(h.offsetTop||0);if(!a||(h!==c)){e+=(h.clientTop||0)}i+=(h.offsetLeft||0);if(!a||(h!==c)){i+=(h.clientLeft||0)
}if(SC.browser.mozilla){g=j.attr("overflow");if(g!=="visible"){f=parseInt(j.attr("borderLeftWidth"),0)||0;
k=parseInt(j.attr("borderTopWidth"),0)||0;if(c!==h){f*=2;k*=2}i+=f;e+=k}b=h.offsetParent;
if(SC.browser.mozilla.match(/1[.]9/)&&b){e-=b.clientTop;i-=b.clientLeft}}if(h.offsetParent==document.body&&j.attr("position")==="absolute"){break
}h=h.offsetParent}h=c;while(h){if(!SC.browser.isOpera||h.tagName==="BODY"){e-=h.scrollTop||0;
i-=h.scrollLeft||0}h=h.parentNode}return{x:i,y:e}},ZERO_POINT:{x:0,y:0},ZERO_RANGE:{start:0,length:0},RANGE_NOT_FOUND:{start:0,length:-1},valueInRange:function(b,a){return(b>=0)&&(b>=a.start)&&(b<(a.start+a.length))
},minRange:function(a){return a.start},maxRange:function(a){return(a.length<0)?-1:(a.start+a.length)
},unionRanges:function(c,b){if((c==null)||(c.length<0)){return b}if((b==null)||(b.length<0)){return c
}var d=Math.min(c.start,b.start),a=Math.max(SC.maxRange(c),SC.maxRange(b));return{start:d,length:a-d}
},intersectRanges:function(c,b){if((c==null)||(b==null)){return SC.RANGE_NOT_FOUND
}if((c.length<0)||(b.length<0)){return SC.RANGE_NOT_FOUND}var d=Math.max(SC.minRange(c),SC.minRange(b)),a=Math.min(SC.maxRange(c),SC.maxRange(b));
if(a<d){return SC.RANGE_NOT_FOUND}return{start:d,length:a-d}},subtractRanges:function(c,b){if((c==null)||(b==null)){return SC.RANGE_NOT_FOUND
}if((c.length<0)||(b.length<0)){return SC.RANGE_NOT_FOUND}var a=Math.max(SC.minRange(c),SC.minRange(b)),d=Math.min(SC.maxRange(c),SC.maxRange(b));
if(a<d){return SC.RANGE_NOT_FOUND}return{start:d,length:a-d}},cloneRange:function(a){return{start:a.start,length:a.length}
},rangesEqual:function(b,a){if(b===a){return true}if(b==null){return a.length<0}if(a==null){return b.length<0
}return(b.start==a.start)&&(b.length==a.length)},convertHsvToHex:function(j,w,o){var a=0,k=0,n=0;
if(o>0){var e=(j==1)?0:Math.floor(j*6),l=(j==1)?0:(j*6)-e,d=o*(1-w),c=o*(1-(w*l)),u=o*(1-(w*(1-l))),m=[[o,u,d],[c,o,d],[d,o,u],[d,c,o],[u,d,o],[o,d,c]];
a=Math.round(255*m[e][0]);k=Math.round(255*m[e][1]);n=Math.round(255*m[e][2])}return this.parseColor("rgb("+a+","+k+","+n+")")
},convertHexToHsv:function(g){var c=this.expandColor(g),a=Math.max(Math.max(c[0],c[1]),c[2]),d=Math.min(Math.min(c[0],c[1]),c[2]);
var f=(a==d)?0:((a==c[0])?((c[1]-c[2])/(a-d)/6):((a==c[1])?((c[2]-c[0])/(a-d)/6+1/3):((c[0]-c[1])/(a-d)/6+2/3)));
f=(f<0)?(f+1):((f>1)?(f-1):f);var e=(a===0)?0:(1-d/a);var b=a/255;return[f,e,b]},PARSE_COLOR_RGBRE:/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i,PARSE_COLOR_HEXRE:/^\#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,expandColor:function(b){var c,e,d,a;
c=this.parseColor(b);if(c){e=parseInt(c.slice(1,3),16);d=parseInt(c.slice(3,5),16);
a=parseInt(c.slice(5,7),16);return[e,d,a]}},parseColor:function(d){var e=0,a="#",c;
if(c=this.PARSE_COLOR_RGBRE.exec(d)){var b;for(e=1;e<=3;e++){b=Math.max(0,Math.min(255,parseInt(c[e],0)));
a+=this.toColorPart(b)}return a}if(c=this.PARSE_COLOR_HEXRE.exec(d)){if(c[1].length==3){for(e=0;
e<3;e++){a+=c[1].charAt(e)+c[1].charAt(e)}return a}return"#"+c[1]}return false},toColorPart:function(a){if(a>255){a=255
}var b=a.toString(16);if(a<16){return"0"+b}return b},getStyle:function(a,b){var c="";
if(document.defaultView&&document.defaultView.getComputedStyle){c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)
}else{if(a.currentStyle){b=b.replace(/\-(\w)/g,function(d,e){return e.toUpperCase()
});c=a.currentStyle[b]}}return c},uniJapaneseConvert:function(d){var a,c="",b;for(b=0;
b<d.length;b++){a=d.charCodeAt(b);a=((a>=65281&&a<=65392)?a-65248:a);a=(a===12540?45:a);
c=c+String.fromCharCode(a)}return c}});require("tasks/task");SC.didPreloadBundle=function(){};
SC.PreloadBundleTask=SC.Task.extend({bundle:null,target:"SC",action:"preloaded",run:function(a){var b;
if(b=this.get("bundle")){var c=Date.now();SC.loadBundle(this.get("bundle"),this.get("target"),this.get("action"))
}}});SC.VALIDATE_OK=YES;SC.VALIDATE_NO_CHANGE=NO;SC.Validator=SC.Object.extend({fieldValueForObject:function(b,c,a){return b
},objectForFieldValue:function(c,b,a){return c},validate:function(a,b){return true
},validateError:function(a,b){return SC.$error("Invalid.General(%@)".loc(b.get("fieldValue")),b.get("fieldKey"))
},validateChange:function(b,c,a){return this.validate(b,c)?SC.VALIDATE_OK:this.validateError(b,c)
},validateSubmit:function(a,b){return this.validate(a,b)?SC.VALIDATE_OK:this.validateError(a,b)
},validatePartial:function(a,b){if(!b.get("isValid")){return this.validate(a,b)?SC.VALIDATE_OK:this.validateError(a,b)
}else{return SC.VALIDATE_NO_CHANGE}},validateKeyDown:function(b,c,a){return true},attachTo:function(a,b){},detachFrom:function(a,b){}});
SC.Validator.mixin({OK:true,NO_CHANGE:false,findFor:function(e,g,f){var c;if(!f){return
}if(f instanceof SC.Validator){c=f}else{if(f.isClass){c=f.create()}else{if(SC.typeOf(f)===SC.T_STRING){var b=null;
var a=f.match(/^(.+)\[(.*)\]/);if(a){f=a[1];b=a[2]}f=f.classify();var d=SC.Validator[f];
if(SC.none(d)){throw"validator %@ not found for %@".fmt(f,g)}else{if(b){if(!e){throw"named validator (%@) could not be found for field %@ because the field does not belong to a form".fmt(b,g)
}if(!e._validatorHash){e._validatorHash={}}c=(b)?e._validatorHash[b]:null;if(!c){c=d.create()
}if(b){e._validatorHash[b]=c}}else{c=d.create()}}}}}return c},fieldValueForObject:function(a,b,c){if(this.prototype&&this.prototype.fieldValueForObject){return this.prototype.fieldValueForObject(a,b,c)
}else{return null}},objectForFieldValue:function(b,a,c){if(this.prototype&&this.prototype.objectForFieldValue){return this.prototype.objectForFieldValue(b,a,c)
}else{return null}}});sc_require("validators/validator");SC.Validator.CreditCard=SC.Validator.extend({fieldValueForObject:function(a,b,c){if(typeof(a)=="string"&&a.length==16){a=[a.slice(0,4),a.slice(4,8),a.slice(8,12),a.slice(12,16)].join(" ")
}return a},objectForFieldValue:function(b,a,c){return b.replace(/[\s-\.\:]/g,"")},validate:function(a,b){return this.checkNumber(b.get("fieldValue"))
},validateError:function(b,c){var a=c.get("errorLabel")||"Field";return SC.$error("Invalid.CreditCard(%@)".loc(a),a)
},validateKeyDown:function(b,c,a){return !!a.match(/[0-9\- ]/)},checkNumber:function(h){if(!h||h.length===0){return YES
}h=h.replace(/[^0-9]/g,"");var a="0123456789";var g=h.length;var f=parseInt(h,0);
var l=h.toString();l=l.replace(/^\s+|\s+$/g,"");var k=0;var n=true;var b=false;var m;
var d;for(var c=0;c<g;c++){m=""+l.substring(c,c+1);if(a.indexOf(m)=="-1"){n=false
}}if(!n){b=false}if((g===0)&&(b)){b=false}else{if(g>=15){for(var e=g;e>0;e--){d=parseInt(f,0)%10;
d=parseInt(d,0);k+=d;e--;f=f/10;d=parseInt(f,0)%10;d=d*2;switch(d){case 10:d=1;break;
case 12:d=3;break;case 14:d=5;break;case 16:d=7;break;case 18:d=9;break;default:d=d
}f=f/10;k+=d}if((k%10)===0){b=true}else{b=false}}}return b}});sc_require("validators/validator");
SC.Validator.Date=SC.Validator.extend({format:"NNN d, yyyy h:mm:ss a",fieldValueForObject:function(b,c,d){var a;
if(typeof(b)==="number"){a=new Date(b)}else{if(b instanceof Date){a=b}}if(a){b=a.format(this.get("format"))
}return b},objectForFieldValue:function(c,b,d){if(c){var a=Date.parseDate(c);c=(a)?a.getTime():null
}return c}});SC.Validator.DateTime=SC.Validator.extend({format:"%d/%m/%Y",fieldValueForObject:function(a,b,c){if(SC.kindOf(a,SC.DateTime)){a=a.toFormattedString(this.get("format"))
}else{a=null}return a},objectForFieldValue:function(b,a,c){if(b){b=SC.DateTime.parse(b,this.get("format"))
}return b}});sc_require("validators/validator");SC.Validator.Email=SC.Validator.extend({validate:function(a,b){return(b.get("fieldValue")||"").match(/.+@.+\...+/)
},validateError:function(b,c){var a=c.get("errorLabel")||"Field";return SC.$error("Invalid.Email(%@)".loc(a),a)
}});SC.Validator.EmailOrEmpty=SC.Validator.Email.extend({validate:function(a,c){var b=c.get("fieldValue");
return(b&&b.length>0)?b.match(/.+@.+\...+/):true}});sc_require("validators/validator");
SC.Validator.NotEmpty=SC.Validator.extend({validate:function(b,d){var c=d.get("fieldValue");
var a=!!c;if(a&&c.length){a=c.length>0}return a},validateError:function(b,c){var a=c.get("errorLabel")||"Field";
return SC.$error("Invalid.NotEmpty(%@)".loc(a.capitalize()),c.get("errorLabel"))}});
sc_require("validators/validator");SC.Validator.Number=SC.Validator.extend({places:0,fieldValueForObject:function(a,b,c){switch(SC.typeOf(a)){case SC.T_NUMBER:a=a.toFixed(this.get("places"));
break;case SC.T_NULL:case SC.T_UNDEFINED:a="";break}return a},objectForFieldValue:function(c,b,d){var a;
c=c.replace(/,/g,"");switch(SC.typeOf(c)){case SC.T_STRING:if(c.length===0){c=null
}else{if(this.get("places")>0){c=parseFloat(c)}else{if(c.length==1&&c.match(/-/)){c=null
}else{a=parseInt(c,0);if(isNaN(a)){c=SC.uniJapaneseConvert(c);c=parseInt(c,0);if(isNaN(c)){c=""
}}else{c=a}}}}break;case SC.T_NULL:case SC.T_UNDEFINED:c=null;break}return c},validate:function(a,c){var b=c.get("fieldValue");
return(b==="")||!(isNaN(b)||isNaN(parseFloat(b)))},validateError:function(b,c){var a=c.get("errorLabel")||"Field";
return SC.$error("Invalid.Number(%@)".loc(a),a)},validateKeyDown:function(b,c,a){var d=c.$input().val();
if(!d){d=""}d+=a;if(this.get("places")===0){if(a.length===0){return true}else{return d.match(/^[\-{0,1}]?[0-9,\0]*/)[0]===d
}}else{if(a.length===0){return true}else{return d.match(/^[\-{0,1}]?[0-9,\0]*\.?[0-9\0]+/)===d
}}}});sc_require("validators/validator");SC.Validator.Password=SC.Validator.extend({attachTo:function(a,b){arguments.callee.base.apply(this,arguments);
if(!this.fields){this.fields=[]}this.fields.push(b)},validate:function(e){if(!this.fields||this.fields.length===0){return true
}var d=false;var b=false;var a=true;var c=this.fields[0].get("fieldValue");this.fields.forEach(function(g){var f=g.get("fieldValue");
if(f!=c){a=false}if(!f||f.length===0){d=true}if(f&&f.length>0){b=true}});if(e){return(b===false)?false:a
}else{return(d===true)?true:a}},updateFields:function(c,b){if(!this.fields||this.fields.length===0){return true
}var a="Invalid.Password".loc();var d=this._field;this.fields.forEach(function(e){var g=(b)?null:((e==d)?a:"");
c.setErrorFor(e,g)});return(b)?SC.VALIDATE_OK:a},validateChange:function(b,c,a){return this.updateFields(b,this.validate(false))
},validateSubmit:function(a,b){return this.updateFields(a,this.validate(true))},validatePartial:function(b,c){var a=!this._field.get("isValid");
if(a){return this.updateFields(b,this.validate(false))}else{return SC.VALIDATE_NO_CHANGE
}}});sc_require("validators/validator");SC.Validator.PositiveInteger=SC.Validator.extend({defaultValue:null,fieldValueForObject:function(a,b,c){switch(SC.typeOf(a)){case SC.T_NUMBER:a=a.toFixed(0);
break;case SC.T_NULL:case SC.T_UNDEFINED:a=this.get("defaultValue");break}return a
},objectForFieldValue:function(b,a,c){b=b.replace(/,/g,"");switch(SC.typeOf(b)){case SC.T_STRING:if(b.length===0){b=this.get("defaultValue")
}else{b=parseInt(b,0)}break;case SC.T_NULL:case SC.T_UNDEFINED:b=this.get("defaultValue");
break}return b},validate:function(a,c){var b=c.get("fieldValue");return(b==="")||!isNaN(b)
},validateError:function(b,c){var a=c.get("errorLabel")||"Field";return SC.$error("Invalid.Number(%@)".loc(a),a)
},validateKeyDown:function(b,c,a){var d=c.$input().val();if(!d){d=""}d+=a;if(a.length===0){return true
}else{return d.match(/^[0-9\0]*/)[0]===d}}});sc_require("views/view");SC.ContainerView=SC.View.extend({classNames:["sc-container-view"],nowShowing:null,contentView:null,contentViewBindingDefault:SC.Binding.single(),replaceContent:function(a){this.removeAllChildren();
if(a){this.appendChild(a)}},createChildViews:function(){var a=this.get("contentView");
if(a){a=this.contentView=this.createChildView(a);this.childViews=[a]}},awake:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("nowShowing");if(a&&a.length>0){this.nowShowingDidChange()}},nowShowingDidChange:function(){var a=this.get("nowShowing");
if(a===SC.CONTENT_SET_DIRECTLY){return}if(SC.typeOf(a)===SC.T_STRING&&a.length>0){if(a.indexOf(".")>0){a=SC.objectForPropertyPath(a)
}else{a=SC.objectForPropertyPath(a,this.get("page"))}}if(SC.typeOf(a)===SC.T_CLASS){if(a.kindOf(SC.View)){a=a.create()
}else{a=null}}if(a&&!(a instanceof SC.View)){a=null}this.set("contentView",a)}.observes("nowShowing"),contentViewDidChange:function(){this.replaceContent(this.get("contentView"))
}.observes("contentView")});sc_require("views/view");sc_require("mixins/control");
SC.IMAGE_STATE_NONE="none";SC.IMAGE_STATE_LOADING="loading";SC.IMAGE_STATE_LOADED="loaded";
SC.IMAGE_STATE_FAILED="failed";SC.IMAGE_STATE_SPRITE="sprite";SC.BLANK_IMAGE_DATAURL="data:image/gif;base64,R0lGODlhAQABAJAAAP///wAAACH5BAUQAAAALAAAAAABAAEAAAICBAEAOw==";
SC.BLANK_IMAGE_URL=SC.browser.msie&&SC.browser.msie<8?"/slick/static/sproutcore/foundation/en/dda7c76d3c3d013125718785fed7848a87ed6d84/blank.gif":SC.BLANK_IMAGE_DATAURL;
SC.ImageView=SC.View.extend(SC.Control,{classNames:"sc-image-view",tagName:"img",status:SC.IMAGE_STATE_NONE,value:null,useImageCache:YES,canLoadInBackground:NO,localize:YES,displayProperties:"status toolTip".w(),render:function(c,f){var a=this.get("status"),d=this.get("value");
if(a===SC.IMAGE_STATE_NONE&&d){this._image_valueDidChange()}a=this.get("status");
var e=(a===SC.IMAGE_STATE_LOADED)?d:SC.BLANK_IMAGE_URL;if(a===SC.IMAGE_STATE_SPRITE){c.addClass(d)
}c.attr("src",e);var b=this.get("toolTip");if(SC.typeOf(b)===SC.T_STRING){if(this.get("localize")){b=b.loc()
}c.attr("title",b);c.attr("alt",b)}},_image_valueDidChange:function(){var b=this.get("value"),c;
if(b&&b.isEnumerable){b=b.firstObject()}c=SC.ImageView.valueIsUrl(b);if(c&&this.get("useImageCache")){var a=this.get("isVisibleInWindow")||this.get("canLoadInBackground");
this._loadingUrl=b;SC.imageCache.loadImage(b,this,this.imageDidLoad,a);if(this._loadingUrl){this.set("status",SC.IMAGE_STATE_LOADING)
}}else{this._loadingUrl=null;this.set("status",(c)?SC.IMAGE_STATE_LOADED:SC.IMAGE_STATE_SPRITE);
this.displayDidChange()}}.observes("value"),imageDidLoad:function(a,b){if(a===this._loadingUrl){this._loadingUrl=null
}if(this.get("value")===a){this.set("status",SC.$ok(b)?SC.IMAGE_STATE_LOADED:SC.IMAGE_STATE_FAILED);
this.displayDidChange()}}});SC.ImageView.valueIsUrl=function(a){return a?a.indexOf("/")>=0:NO
};sc_require("views/view");sc_require("mixins/control");SC.REGULAR_WEIGHT="normal";
SC.BOLD_WEIGHT="bold";SC.LabelView=SC.View.extend(SC.Control,{classNames:["sc-label-view"],fontWeight:SC.REGULAR_WEIGHT,escapeHTML:true,escapeHTMLBindingDefault:SC.Binding.oneWay().bool(),localize:false,localizeBindingDefault:SC.Binding.oneWay().bool(),formatter:null,value:"",hint:null,exampleInlineTextFieldView:SC.InlineTextFieldView,icon:null,textAlign:SC.ALIGN_LEFT,isInlineEditorMultiline:NO,displayValue:function(){var g,e;
g=this.get("value");e=this.getDelegateProperty("formatter",this.displayDelegate);
if(e){var f=(SC.typeOf(e)===SC.T_FUNCTION)?e(g,this):e.fieldValueForObject(g,this);
if(!SC.none(f)){g=f}}if(SC.typeOf(g)===SC.T_ARRAY){var d=[];for(var b=0,c=g.get("length");
b<c;b++){var a=g.objectAt(b);if(!SC.none(a)&&a.toString){a=a.toString()}d.push(a)
}g=d.join(",")}if(!SC.none(g)&&g.toString){g=g.toString()}if(g&&this.getDelegateProperty("localize",this.displayDelegate)){g=g.loc()
}if(this.get("escapeHTML")){g=SC.RenderContext.escapeHTML(g)}return g}.property("value","localize","formatter","escapeHTML").cacheable(),hintValue:function(){var a=this.get("hint");
if(this.get("escapeHTML")){a=SC.RenderContext.escapeHTML(a)}return a}.property("hint","escapeHTML").cacheable(),isEditable:NO,isEditableBindingDefault:SC.Binding.bool(),isEditing:NO,validator:null,doubleClick:function(a){return this.beginEditing()
},beginEditing:function(){if(this.get("isEditing")){return YES}if(!this.get("isEditable")){return NO
}var b=this.$(),d=this.get("value")||"",c=SC.viewportOffset(b[0]),a=this.convertFrameFromView(this.get("frame"),null);
c.width=a.width;c.height=a.height;SC.InlineTextFieldView.beginEditing({frame:c,delegate:this,exampleElement:b,value:d,multiline:this.get("isInlineEditorMultiline"),isCollection:NO,validator:this.get("validator"),exampleInlineTextFieldView:this.get("exampleInlineTextFieldView")})
},discardEditing:function(){if(!this.get("isEditing")){return YES}return SC.InlineTextFieldView.discardEditing()
},commitEditing:function(){if(!this.get("isEditing")){return YES}return SC.InlineTextFieldView.commitEditing()
},inlineEditorShouldBeginEditing:function(a){return YES},inlineEditorWillBeginEditing:function(a){this.set("isEditing",YES)
},inlineEditorDidBeginEditing:function(b){var a=this.$();this._oldOpacity=a.css("opacity");
a.css("opacity",0)},inlineEditorShouldBeginEditing:function(){return this.get("isEditable")
},inlineEditorShouldEndEditing:function(a,b){return YES},inlineEditorDidEndEditing:function(a,b){this.setIfChanged("value",b);
this.$().css("opacity",this._oldOpacity);this._oldOpacity=null;this.set("isEditing",NO)
},displayProperties:"displayValue textAlign fontWeight icon".w(),_TEMPORARY_CLASS_HASH:{},createRenderer:function(a){return a.label()
},updateRenderer:function(a){a.attr({value:this.get("displayValue"),icon:this.get("icon"),hint:this.get("hint"),escapeHTML:this.get("escapeHTML"),isEditing:this.get("isEditing"),textAlign:this.get("textAlign"),fontWeight:this.get("fontWeight")})
}});require("panes/pane");SC.MainPane=SC.Pane.extend({layout:{left:0,right:0,top:0,bottom:0},paneDidAttach:function(){var b=arguments.callee.base.apply(this,arguments);
var a=this.rootResponder;a.makeMainPane(this);if(!a.get("keyRootView")){a.makeKeyPane(this)
}return b},acceptsKeyPane:YES,classNames:["sc-main"]});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/foundation")
}SC.stringsFor("English",{"Invalid.CreditCard(%@)":"%@ is not a valid credit card number","Invalid.Email(%@)":"%@ is not a valid email address","Invalid.NotEmpty(%@)":"%@ must not be empty","Invalid.Password":"Your passwords do not match.  Please try typing them again.","Invalid.General(%@)":"%@ is invalid.  Please try again.","Invalid.Number(%@)":"%@ is not a number."});
SC.allowsBackspaceToPreviousPage=NO;SC.BORDER_BEZEL="sc-bezel-border";SC.BORDER_BLACK="sc-black-border";
SC.BORDER_GRAY="sc-gray-border";SC.BORDER_TOP="sc-top-border";SC.BORDER_BOTTOM="sc-bottom-border";
SC.BORDER_NONE=null;SC.Border={borderTop:0,borderRight:0,borderBottom:0,borderLeft:0,borderStyle:SC.BORDER_GRAY,hasBorder:YES,displayProperties:["borderStyle"],_BORDER_REGEXP:(/-border$/),initMixin:function(){this._sc_border_borderStyleDidChange()
},renderMixin:function(a,c){var b=this.get("borderStyle");if(b){if(this._BORDER_REGEXP.exec(b)){a.addClass(b)
}else{a.addStyle("border","1px "+b+" solid")}}},_sc_border_borderStyleDidChange:function(){var a=this.get("borderStyle"),b=SC.Border.dimensions[a];
if(b){this.borderTop=b;this.borderRight=b;this.borderBottom=b;this.borderLeft=b}}};
SC.mixin(SC.Border,{dimensions:{"sc-bezel-border":1,"sc-black-border":1,"sc-gray-border":1,"sc-top-border":1,"sc-bottom-border":1}});
SC.CollectionFastPath={initMixin:function(){this._indexMap={}},poolForExampleView:function(a){var b="_pool_"+SC.guidFor(a);
if(!this[b]){this[b]=[]}return this[b]},createItemViewFromExampleView:function(c,b){var a=c.create(b);
if(a.isPoolable){a.owningPool=this.poolForExampleView(c)}a.createdFromExampleView=c;
return a},configureItemView:function(b,a){b.beginPropertyChanges();b.setIfChanged("content",a.content);
b.setIfChanged("contentIndex",a.contentIndex);b.setIfChanged("parentView",a.parentView);
b.setIfChanged("layerId",a.layerId);b.setIfChanged("isEnabled",a.isEnabled);b.setIfChanged("isSelected",a.isSelected);
b.setIfChanged("outlineLevel",a.outlineLevel);b.setIfChanged("layout",a.layout);b.setIfChanged("disclosureState",a.disclosureState);
b.setIfChanged("isVisibleInWindow",a.isVisibleInWindow);b.setIfChanged("isGroupView",a.isGroupView);
b.setIfChanged("page",this.page);b.endPropertyChanges()},wakePooledView:function(b,a){this.configureItemView(b,a);
if(b.awakeFromPool){b.awakeFromPool(b.owningPool,this)}},allocateItemView:function(d,b){var a;
if(d.prototype.isPoolable){var c=this.poolForExampleView(d);if(c.length>0){a=c.pop();
this.wakePooledView(a,b)}}if(!a){a=this.createItemViewFromExampleView(d,b)}return a
},releaseItemView:function(b){if(!b.isPoolable){b.destroy();return}var a=b.owningPool;
a.push(b);if(b.hibernateInPool){b.hibernateInPool(a,this)}},contentIndexIsGroup:function(b,d){var c=this.get("contentDelegate");
var a=this.get("_contentGroupIndexes"),e=NO;e=a&&a.contains(b);if(e){e=c.contentIndexIsGroup(this,this.get("content"),b)
}return e},exampleViewForItem:function(f,d){var b=this.get("contentDelegate"),c=this.get("_contentGroupIndexes"),e,a,g=this.contentIndexIsGroup(d,f);
if(g){e=this.get("contentGroupExampleViewKey");if(e&&f){a=f.get(e)}if(!a){a=this.get("groupExampleView")||this.get("exampleView")
}}else{e=this.get("contentExampleViewKey");if(e&&f){a=f.get(e)}if(!a){a=this.get("exampleView")
}}return a},setAttributesForItem:function(f,d,c){var b=this.get("contentDelegate"),g=this.contentIndexIsGroup(d),a=this.exampleViewForItem(f,d),e=this.get("content");
c.createdFromExampleView=a;c.parentView=this.get("containerView")||this;c.contentIndex=d;
c.owner=c.displayDelegate=this;c.content=f;c.page=this.page;c.layerId=this.layerIdFor(d);
c.isEnabled=b.contentIndexIsEnabled(this,e,d);c.isSelected=b.contentIndexIsSelected(this,e,d);
c.outlineLevel=b.contentIndexOutlineLevel(this,e,d);c.disclosureState=b.contentIndexDisclosureState(this,e,d);
c.isVisibleInWindow=this.get("isVisibleInWindow");c.isGroupView=g;c.layout=this.layoutForContentIndex(d);
if(!c.layout){c.layout=a.prototype.layout}},mappedViewsForItem:function(a,b){if(!b){b=this._viewMap
}return b[SC.guidFor(a)]},mappedViewForItem:function(c,b,d){if(!d){d=this._viewMap
}var a=d[SC.guidFor(c)];if(!a){return undefined}return a[b]},mapView:function(e,c,b,f){if(!f){f=this._viewMap
}var d=SC.guidFor(e),a=f[d];if(!a){a=f[d]={_length:0}}a[c]=b;a._length++},unmapView:function(e,c,f){if(!f){f=this._viewMap
}var d=SC.guidFor(e),a=f[d];if(!a){return}if(a[c]){var b=a[c];delete a[c];a._length--;
if(a._length<=0){delete f[d]}}},itemViewForContentIndex:function(b){var a=this._indexMap[b];
if(!a){var d=this.get("content"),c;c=d.objectAt(b);if(!c){return null}var e=this.exampleViewForItem(c,b);
a=this.addItemView(e,c,b)}return a},nearestMappedViewIndexForItem:function(e,c,f){var b=this.mappedViewsForItem(e,f);
if(!b){return null}var d=null,h=-1,g=0;for(var a in b){a=parseInt(a,10);if(isNaN(a)){continue
}g=Math.abs(c-a);if(h<0||g<h){h=g;d=a}}return d},remapItemViews:function(b){var j=this._viewMap||{},a=(this._viewMap={}),i=(this._indexMap={}),k=[],h=this.get("content"),n;
if(!h){return}var f=this._itemsToAdd;b.forEach(function(o){n=h.objectAt(o);var q=this.mappedViewsForItem(n,j);
if(q){if(q[o]){var p=q[o];this.unmapView(n,o,j);this.mapView(n,o,p,a);i[o]=p}else{k.push(o)
}}else{f.push(o)}},this);for(var m=0,g=k.length;m<g;m++){var l=k[m];n=h.objectAt(l);
var e=this.nearestMappedViewIndexForItem(n,l,j),c;if(!SC.none(e)){c=this.mappedViewForItem(n,e,j);
var d=this.exampleViewForItem(n,l);if(d===c.createdFromExampleView){this.unmapView(n,e,j);
this.mapView(n,l,c,a);i[l]=c}else{f.push(l)}}else{f.push(l)}}return j},reloadIfNeeded:function(f,b){var d=this.get("content"),e;
if(!f||!f.isIndexSet){f=this.get("nowShowing")}if(!b){e=this._invalidIndexes;if(!e||!this.get("isVisibleInWindow")){return this
}this._invalidIndexes=NO;if(e.isIndexSet&&e.contains(f)){e=YES}if(this.willReload){this.willReload(e===YES?null:e)
}}var g=this._itemsToAdd||(this._itemsToAdd=[]);var a=this.remapItemViews(f);this.processRemovals(a);
if(e){this.processUpdates(e===YES?f:e)}this.processAdds();if(!b){this.clearDOMPools()
}g.length=0;if(!b){var c=this.computeLayout();if(c){this.adjust(c)}if(this.didReload){this.didReload(e===YES?null:e)
}}return this},processRemovals:function(c){var f=this.get("content");for(var d in c){var b=c[d];
for(var e in b){e=parseInt(e,10);if(isNaN(e)){continue}var a=b[e];if(this._indexMap[e]===a){delete this._indexMap[e]
}a._isInCollection=NO;this.removeItemView(a)}}},processUpdates:function(e){var b=this._itemsToUpdate,d=this.get("content"),c,a;
e.forEach(function(f){c=d.objectAt(f);if(a=this.mappedViewForItem(c,f)){if(!a._isInCollection){return
}var g=this.exampleViewForItem(c,f);this.updateItemView(a,g,c,f)}},this)},processAdds:function(){var f=this.get("content");
var g=this._itemsToAdd,b,a=g.length,e,d;for(b=0;b<a;b++){e=g[b];d=f.objectAt(e);var h=this.exampleViewForItem(d,e);
var c=this.addItemView(h,d,e)}},clearDOMPools:function(){var a=this._domPools||(this._domPools={});
for(var b in a){this.clearDOMPool(a[b])}},domPoolSize:10,clearDOMPool:function(c){var b,a=c.length,d;
for(b=this.domPoolSize;b<a;b++){d=c[b];this.removeChild(d);this.releaseItemView(d)
}c.length=Math.min(c.length,this.domPoolSize)},domPoolForExampleView:function(d){var c=this._domPools||(this._domPools={}),a=SC.guidFor(d);
var b=c[a];if(!b){b=c[a]=[]}return b},itemFromDOMPool:function(c){var b=this.domPoolForExampleView(c);
if(b.length<1){return null}var a=b.shift();if(a.wakeFromDOMPool){a.wakeFromDOMPool()
}return a},sendToDOMPool:function(a){var b=this.domPoolForExampleView(a.createdFromExampleView);
b.push(a);var c=a.get("frame");a.adjust({top:-c.height});a.set("layerId",SC.guidFor(a));
if(a.sleepInDOMPool){a.sleepInDOMPool()}},addItemView:function(e,d,c){var a,b=this._TMP_ATTRS||(this._TMP_ATTRS={});
this.setAttributesForItem(d,c,b);if(a=this.itemFromDOMPool(e)){this.configureItemView(a,b);
a._isInCollection=YES;this.mapView(d,c,a);this._indexMap[c]=a;return a}a=this.allocateItemView(e,b);
this.appendChild(a);a._isInCollection=YES;this.mapView(d,c,a);this._indexMap[c]=a;
return a},removeItemView:function(a){if(a.get("layerIsCacheable")){this.sendToDOMPool(a)
}else{this.removeChild(a)}a._isInCollection=NO},updateItemView:function(d,e,c,b){if(!d.get("layerIsCacheable")||d.createdFromExampleView!==e){console.error("BAD UPDATE");
this.unmapView(d,b);delete this._indexMap[b];this.removeItemView(d,c,b);var f=this.addItemView(e,c,b)
}else{var a=this._TMP_ATTRS||(this._TMP_ATTRS={});this.setAttributesForItem(c,b,a);
this.configureItemView(d,a)}},_lastTopUpdate:0,_lastLeftUpdate:0,_tolerance:100,touchScrollDidChange:function(g,f){var h=this.get("clippingFrame");
var e=this._inScrollClippingFrame||(this._inScrollClippingFrame={x:0,y:0,width:0,height:0});
e.x=h.x;e.y=h.y;e.width=h.width;e.height=h.height;e.x=g;e.y=f;var d=this.contentIndexesInRect(e);
if(!d){return}var b=this.get("length"),a=d.get("max"),c=d.get("min");if(a>b||c<0){d=d.copy();
d.remove(b,a-b).remove(c,0-c).freeze()}if(this._lastNowShowing){if(d.contains(this._lastNowShowing)&&this._lastNowShowing.contains(d)){return
}}this._lastNowShowing=d;this.reloadIfNeeded(d,YES)}};SC.CollectionGroup={classNames:["sc-collection-group"]};
SC.CollectionRowDelegate={isCollectionRowDelegate:YES,rowHeight:18,customRowHeightIndexes:null,contentIndexRowHeight:function(a,b,c){return this.get("rowHeight")
}};SC.CollectionViewDelegate={isCollectionViewDelegate:YES,collectionViewSelectionForProposedSelection:function(a,b){return b
},collectionViewShouldSelectIndexes:function(a,b,c){return b},collectionViewShouldDeselectIndexes:function(a,b){return b
},collectionViewShouldDeleteIndexes:function(a,b){return b},collectionViewDeleteContent:function(a,c,b){if(!c){return NO
}if(SC.typeOf(c.destroyAt)===SC.T_FUNCTION){c.destroyAt(b);a.selectPreviousItem(NO,1);
return YES}else{if(SC.typeOf(c.removeAt)===SC.T_FUNCTION){c.removeAt(b);a.selectPreviousItem(NO,1);
return YES}else{return NO}}},collectionViewShouldBeginDrag:function(a){return YES
},collectionViewDragDataTypes:function(a){return[]},collectionViewDragDataForType:function(a,c,b){return null
},collectionViewComputeDragOperations:function(a,b,c){return c},collectionViewValidateDragOperation:function(b,d,e,c,a){return(a&SC.DROP_ON)?SC.DRAG_NONE:e
},collectionViewPerformDragOperation:function(b,d,e,c,a){return SC.DRAG_NONE},collectionViewDragViewFor:function(a,b){return null
},ghostActsLikeCursor:NO};SC.NavigationBuilder={isNavigationBuilder:YES,navigationTransitions:NO,initMixin:function(){var b=SC.Animatable;
if(b&&!this.isAnimatable){this.mixin(b)}else{if(!b){console.error("SC.NavigationView and SC.NavigationBuilder require SC.Animatable to perform animations, but it is not present. Please ensure your app or framework references it.")
}}var a=this.get("navigationTransitions");if(!a&&SC.Animatable){a={left:{duration:0.25,timing:SC.Animatable.TRANSITION_EASE_IN_OUT,action:"navigationBuildDidFinish"},transform:{duration:0.25,timing:SC.Animatable.TRANSITION_EASE_IN_OUT,action:"navigationBuildDidFinish"}}
}if(SC.Animatable){SC.mixin(this.transitions,a)}},metrics:function(){var a=this.computeFrameWithParentFrame();
return a},transform:function(a){if(SC.platform.supportsCSS3DTransforms){this.adjust("transform","translate3d("+a+"px,0px,0px)")
}else{this.adjust("transform","translate("+a+"px,0px)")}},buildInNavigation:function(){var a=this.metrics();
this.disableAnimation();this.transform(this.get("buildDirection")===SC.TO_LEFT?a.width:-a.width);
this.enableAnimation();this.invokeLater("transform",10,0)},buildOutNavigation:function(){var a=this.metrics();
this.transform(this.get("buildDirection")===SC.TO_LEFT?-a.width:a.width)},buildIn:function(){this.buildInNavigation()
},buildOut:function(){this.buildOutNavigation()},resetBuild:function(){this.transform(0)
},navigationBuildDidFinish:function(){if(this.isBuildingIn){this.buildInDidFinish()
}else{if(this.isBuildingOut){this.buildOutDidFinish()}}}};SC.Scrollable={initMixin:function(){console.warn("SC.Scrollable is deprecated and will be removed in a future version of SproutCore.  Consider pulling the mixin into your own app if you want to keep using it.")
},isScrollable:true,verticalLineScroll:20,horizontalLineScroll:20,verticalPageScroll:function(){return this.get("innerFrame").height
}.property("innerFrame"),horizontalPageScroll:function(){return this.get("innerFrame").width
}.property("innerFrame"),hasVerticalScroller:function(){return this.get("scrollFrame").height>this.get("innerFrame").height
}.property("scrollFrame"),hasHorizontalScroller:function(){return this.get("scrollFrame").width>this.get("innerFrame").width
}.property("scrollFrame"),scrollBy:function(a){var b=this.get("scrollFrame");var c=this.get("innerFrame");
if(!this.get("hasVerticalScroller")){a.y=0}if(b.height<=c.height){a.y=0}if(!this.get("hasHorizontalScroller")){a.x=0
}if(b.width<=c.width){a.x=0}var d={x:b.x-(a.x||0),y:b.y-(a.y||0)};this.set("scrollFrame",d);
d=this.get("scrollFrame");return{x:d.x-b.x,y:d.y-b.y}},scrollTo:function(a,b){this.set("scrollFrame",{x:0-a,y:0-b})
},scrollToVisible:function(b){var e=this.get("innerFrame");var d=this.get("scrollFrame");
var a=this.convertFrameFromView(b.get("frame"),b);a.x-=(e.x+d.x);a.y-=(e.y+d.y);var c={x:0-d.x,y:0-d.y,width:e.width,height:e.height};
c.y-=Math.max(0,SC.minY(c)-SC.minY(a));c.x-=Math.max(0,SC.minX(c)-SC.minX(a));c.y+=Math.max(0,SC.maxY(a)-SC.maxY(c));
c.x+=Math.max(0,SC.maxX(a)-SC.maxX(c));this.scrollTo(c.x,c.y)},scrollDownLine:function(a){if(a===undefined){a=1
}return this.scrollBy({y:this.get("verticalLineScroll")*a}).y},scrollUpLine:function(a){if(a===undefined){a=1
}return 0-this.scrollBy({y:0-this.get("verticalLineScroll")*a}).y},scrollRightLine:function(a){if(a===undefined){a=1
}return this.scrollTo({y:this.get("horizontalLineScroll")*a}).x},scrollLeftLine:function(a){if(a===undefined){a=1
}return 0-this.scrollTo({y:0-this.get("horizontalLineScroll")*a}).x},scrollDownPage:function(a){if(a===undefined){a=1
}return this.scrollBy({y:this.get("verticalPageScroll")*a}).y},scrollUpPage:function(a){if(a===undefined){a=1
}return 0-this.scrollBy({y:0-this.get("verticalPageScroll")*a}).y},scrollRightPage:function(a){if(a===undefined){a=1
}return this.scrollTo({y:this.get("horizontalPageScroll")*a}).x},scrollLeftPage:function(a){if(a===undefined){a=1
}return 0-this.scrollTo({y:0-this.get("horizontalPageScroll")*a}).x}};SC.ModalPane=SC.Pane.extend({classNames:"sc-modal",layout:{top:0,left:0,bottom:0,right:0},_openPaneCount:0,paneWillAppend:function(a){this._openPaneCount++;
if(!this.get("isVisibleInWindow")){this.append()}return this},paneDidRemove:function(a){this._openPaneCount--;
if(this._openPaneCount<=0){this._openPaneCount=0;if(this.get("isVisibleInWindow")){this.remove()
}}},mouseDown:function(b){var a=this.get("owner");if(a&&a.modalPaneDidClick){a.modalPaneDidClick(b)
}},touchStart:function(a){this.mouseDown(a)}});sc_require("panes/modal");SC.PanelPane=SC.Pane.extend({layout:{left:0,right:0,top:0,bottom:0},classNames:["sc-panel"],acceptsKeyPane:YES,isModal:YES,modalPane:SC.ModalPane.extend({classNames:"for-sc-panel"}),contentView:null,contentViewBindingDefault:SC.Binding.single(),createRenderer:function(){return this.get("theme").panel()
},updateRenderer:function(){},replaceContent:function(a){this.removeAllChildren();
if(a){this.appendChild(a)}},createChildViews:function(){var a=this.contentView;if(a){a=this.contentView=this.createChildView(a);
this.childViews=[a]}},contentViewDidChange:function(){this.replaceContent(this.get("contentView"))
}.observes("contentView"),_modalPane:function(){var a=this.get("modalPane");if(a&&a.isClass){a=a.create({owner:this});
this.set("modalPane",a)}return a},appendTo:function(a){var b;if(!this.get("isVisibleInWindow")&&this.get("isModal")&&(b=this._modalPane())){this._isShowingModal=YES;
b.paneWillAppend(this)}return arguments.callee.base.apply(this,arguments)},remove:function(){var b,a=arguments.callee.base.apply(this,arguments);
if(this._isShowingModal){this._isShowingModal=NO;if(b=this._modalPane()){b.paneDidRemove(this)
}}return a},_isModalDidChange:function(){var b,a=this.get("isModal");if(a){if(!this._isShowingModal&&this.get("isVisibleInWindow")&&(b=this._modalPane())){this._isShowingModal=YES;
b.paneWillAppend(this)}}else{if(this._isShowingModal&&(b=this._modalPane())){this._isShowingModal=NO;
b.paneDidRemove(this)}}}.observes("isModal"),paneDidAttach:function(){var a=arguments.callee.base.apply(this,arguments);
this.becomeKeyPane();return a}});SC.ButtonView=SC.View.extend(SC.Control,SC.Button,SC.StaticLayout,{tagName:"div",controlSize:SC.REGULAR_CONTROL_SIZE,classNames:["sc-button-view"],controlStyle:"square",buttonBehavior:SC.PUSH_BEHAVIOR,holdInterval:100,isDefault:NO,isDefaultBindingDefault:SC.Binding.oneWay().bool(),isCancel:NO,isCancelBindingDefault:SC.Binding.oneWay().bool(),href:"",action:null,target:null,supportFocusRing:NO,triggerAction:function(a){if(!this.get("isEnabled")){return NO
}this.set("isActive",YES);this.invokeLater("_triggerActionAfterDelay",200,a);return YES
},_triggerActionAfterDelay:function(a){this._action(a,YES);this.didTriggerAction();
this.set("isActive",NO)},didTriggerAction:function(){},titleMinWidth:80,init:function(){var a=SC.clone(this.get("classNames"));
a.push(this.get("controlStyle"));this.set("classNames",a);arguments.callee.base.apply(this,arguments);
if(this.get("keyEquivalent")){this._defaultKeyEquivalent=this.get("keyEquivalent")
}},_TEMPORARY_CLASS_HASH:{},displayProperties:["href","icon","title","value","toolTip"],renderStyle:"renderDefault",createRenderer:function(c){var a,b=this.get("renderStyle");
if(b==="renderDefault"){a=c.button()}if(b==="renderImage"){a=c.imageButton()}this.updateRenderer(a);
return a},updateRenderer:function(b){var a=this.get("toolTip");if(a&&this.get("localize")){a=a.loc()
}b.attr({toolTip:a,isAnchor:this.get("tagName")==="a",href:this.get("href"),isDefault:this.get("isDefault"),isCancel:this.get("isCancel"),icon:this.get("icon"),supportFocusRing:this.get("supportFocusRing"),titleMinWidth:this.get("titleMinWidth"),title:this.get("displayTitle"),escapeHTML:this.get("escapeHTML"),needsEllipsis:this.get("needsEllipsis")})
},_defaultKeyEquivalent:null,_isDefaultOrCancelDidChange:function(){var a=!!this.get("isDefault"),b=!a&&this.get("isCancel");
if(this.didChangeFor("defaultCancelChanged","isDefault","isCancel")){this.displayDidChange();
if(a){this.set("keyEquivalent","return")}else{if(b){this.setIfChanged("keyEquivalent","escape")
}else{this.set("keyEquivalent",this._defaultKeyEquivalent)}}}}.observes("isDefault","isCancel"),isMouseDown:false,mouseDown:function(a){var b=this.get("buttonBehavior");
if(!this.get("isEnabled")){return YES}this.set("isActive",YES);this._isMouseDown=YES;
if(b===SC.HOLD_BEHAVIOR){this._action(a)}else{if(!this._isFocused&&(b!==SC.PUSH_BEHAVIOR)){this._isFocused=YES;
this.becomeFirstResponder();if(this.get("isVisibleInWindow")){this.renderer.focus()
}}}return YES},mouseExited:function(a){if(this._isMouseDown){this.set("isActive",NO)
}return YES},mouseEntered:function(a){if(this._isMouseDown){this.set("isActive",YES)
}return YES},mouseUp:function(b){if(this._isMouseDown){this.set("isActive",NO)}this._isMouseDown=false;
if(this.get("buttonBehavior")!==SC.HOLD_BEHAVIOR){var a=this.renderer.causedEvent(b);
if(a&&this.get("isEnabled")){this._action(b)}}return YES},touchStart:function(b){var a=this.get("buttonBehavior");
if(!this.get("isEnabled")){return YES}this.set("isActive",YES);if(a===SC.HOLD_BEHAVIOR){this._action(b)
}else{if(!this._isFocused&&(a!==SC.PUSH_BEHAVIOR)){this._isFocused=YES;this.becomeFirstResponder();
if(this.get("isVisibleInWindow")){this.$()[0].focus()}}}b.preventDefault();return YES
},touchesDragged:function(a,b){if(!this.touchIsInBoundary(a)){if(!this._touch_exited){this.set("isActive",NO)
}this._touch_exited=YES}else{if(this._touch_exited){this.set("isActive",YES)}this._touch_exited=NO
}a.preventDefault();return YES},touchEnd:function(a){this._touch_exited=NO;this.set("isActive",NO);
if(this.get("buttonBehavior")!==SC.HOLD_BEHAVIOR){if(this.touchIsInBoundary(a)){this._action()
}}a.preventDefault();return YES},keyDown:function(b){if(b.which===9){var a=b.shiftKey?this.get("previousValidKeyView"):this.get("nextValidKeyView");
if(a){a.becomeFirstResponder()}else{b.allowDefault()}return YES}if(b.which===13){this.triggerAction(b);
return YES}return YES},_action:function(a,c){switch(this.get("buttonBehavior")){case SC.TOGGLE_BEHAVIOR:var b=this.get("isSelected");
if(b){this.set("value",this.get("toggleOffValue"))}else{this.set("value",this.get("toggleOnValue"))
}break;case SC.TOGGLE_ON_BEHAVIOR:this.set("value",this.get("toggleOnValue"));break;
case SC.TOGGLE_OFF_BEHAVIOR:this.set("value",this.get("toggleOffValue"));break;case SC.HOLD_BEHAVIOR:this._runHoldAction(a,c);
break;default:this._runAction(a)}},_runAction:function(a){var c=this.get("action"),d=this.get("target")||null,b=this.getPath("pane.rootResponder");
if(c){if(this._hasLegacyActionHandler()){this._triggerLegacyActionHandler(a)}else{if(b){this.getPath("pane.rootResponder").sendAction(c,d,this,this.get("pane"),null,this)
}}}},_runHoldAction:function(a,b){if(this.get("isActive")){this._runAction();if(!b){SC.RunLoop.begin();
this.invokeLater("_runHoldAction",this.get("holdInterval"),a);SC.RunLoop.end()}}},_hasLegacyActionHandler:function(){var a=this.get("action");
if(a&&(SC.typeOf(a)===SC.T_FUNCTION)){return true}if(a&&(SC.typeOf(a)===SC.T_STRING)&&(a.indexOf(".")!=-1)){return true
}return false},_triggerLegacyActionHandler:function(evt){if(!this._hasLegacyActionHandler()){return false
}var action=this.get("action");if(SC.typeOf(action)===SC.T_FUNCTION){this.action(evt)
}if(SC.typeOf(action)===SC.T_STRING){eval("this.action = function(e) { return "+action+"(this, e); };");
this.action(evt)}},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled"),willBecomeKeyResponderFrom:function(a){if(!this._isFocused){this._isFocused=YES;
this.becomeFirstResponder();if(this.get("isVisibleInWindow")){if(this.renderer){this.renderer.focus()
}}}},willLoseKeyResponderTo:function(a){if(this._isFocused){this._isFocused=NO}},didAppendToDocument:function(){if(parseInt(SC.browser.msie,0)===7){var c=this.get("layout");
if(this.get("useStaticLayout")&&c.width&&(c.width.indexOf&&c.width.indexOf("auto")!=-1)){var b=this.$();
if(b&&b[0]){var a=b[0].clientWidth;if(a!==0){var d=parseInt(b.css("paddingRight"),0);
this.$(".sc-button-label").css("minWidth",a-(d*2)+"px")}}}}}});SC.TOGGLE_BEHAVIOR="toggle";
SC.PUSH_BEHAVIOR="push";SC.TOGGLE_ON_BEHAVIOR="on";SC.TOGGLE_OFF_BEHAVIOR="off";SC.HOLD_BEHAVIOR="hold";
SC.ButtonView.CLICK_AND_HOLD_DELAY=300;SC.REGULAR_BUTTON_HEIGHT=24;sc_require("panes/panel");
sc_require("views/button");SC.BUTTON1_STATUS="button1";SC.BUTTON2_STATUS="button2";
SC.BUTTON3_STATUS="button3";SC.AlertPane=SC.PanelPane.extend({classNames:"sc-alert",delegate:null,icon:"sc-icon-alert-48",message:"",description:"",displayDescription:function(){var a=this.get("description");
if(!a||a.length===0){return a}a=SC.RenderContext.escapeHTML(a);return'<p class="description">'+a.split("\n").join('</p><p class="description">')+"</p>"
}.property("description").cacheable(),caption:"",displayCaption:function(){var a=this.get("caption");
if(!a||a.length===0){return a}a=SC.RenderContext.escapeHTML(a);return'<p class="caption">'+a.split("\n").join('</p><p class="caption">')+"</p>"
}.property("caption").cacheable(),buttonOne:SC.outlet("contentView.childViews.1.childViews.1"),buttonTwo:SC.outlet("contentView.childViews.1.childViews.0"),buttonThree:SC.outlet("contentView.childViews.2.childViews.0"),buttonThreeWrapper:SC.outlet("contentView.childViews.2"),layout:{top:0.3,centerX:0,width:500},contentView:SC.View.extend({useStaticLayout:YES,layout:{left:0,right:0,top:0,height:"auto"},childViews:[SC.View.extend(SC.StaticLayout,{classNames:["info"],render:function(a,d){var c=this.get("pane");
var b=SC.BLANK_IMAGE_URL;if(c.get("icon")=="blank"){a.addClass("plain")}a.push('<img src="'+b+'" class="icon '+c.get("icon")+'" />');
a.begin("h1").attr("class","header").text(c.get("message")||"").end();a.push(c.get("displayDescription")||"");
a.push(c.get("displayCaption")||"");a.push('<div class="separator"></div>')}}),SC.View.extend({layout:{bottom:13,height:24,right:18,width:466},childViews:["cancelButton","okButton"],classNames:["text-align-right"],cancelButton:SC.ButtonView.extend({useStaticLayout:YES,actionKey:SC.BUTTON2_STATUS,localize:YES,titleMinWidth:64,layout:{right:5,height:"auto",width:"auto",bottom:0},controlStyle:"capsule",title:"Cancel",isCancel:YES,action:"dismiss",isVisible:NO}),okButton:SC.ButtonView.extend({useStaticLayout:YES,actionKey:SC.BUTTON1_STATUS,localize:YES,titleMinWidth:64,layout:{left:0,height:"auto",width:"auto",bottom:0},controlStyle:"capsule",title:"OK",isDefault:YES,action:"dismiss"})}),SC.View.extend({layout:{bottom:13,height:24,left:18,width:150},isVisible:NO,childViews:[SC.ButtonView.extend({useStaticLayout:YES,actionKey:SC.BUTTON3_STATUS,localize:YES,titleMinWidth:64,layout:{left:0,height:"auto",width:"auto",bottom:0},controlStyle:"capsule",title:"Extra",action:"dismiss",isVisible:NO})]})]}),dismiss:function(b){var a=this.delegate;
if(a&&a.alertPaneDidDismiss){a.alertPaneDidDismiss(this,b.get("actionKey"))}this.remove()
},alertInfoDidChange:function(){var a=this.getPath("contentView.childViews.0");if(a){a.displayDidChange()
}}.observes("icon","message","displayDescription","displayCaption")});SC.AlertPane._normalizeArguments=function(b){b=SC.A(b);
var a=b.length,c=b[a-1];if(SC.typeOf(c)!==SC.T_STRING){b[a-1]=null}else{c=null}b[7]=c;
return b};SC.AlertPane.show=function(p,l,n,b,c,o,a,g){var f=this._normalizeArguments(arguments);
var e=this.create({message:f[0]||"",description:f[1]||null,caption:f[2]||null,icon:f[6]||"sc-icon-alert-48",delegate:f[7]});
var k="buttonOne buttonTwo buttonThree".w(),d,h;for(var j=0;j<3;j++){d=e.get(k[j]);
h=f[j+3];if(h){d.set("title",h).set("isVisible",YES);if(h=="?"){d.set("titleMinWidth",0)
}if(j==2){var m=e.get("buttonThreeWrapper");m.set("isVisible",YES)}}}var i=e.append();
e.adjust("height",e.childViews[0].$().height());e.updateLayout();return i};SC.AlertPane.warn=function(e,d,a,h,f,g,c){var b=this._normalizeArguments(arguments);
b[6]="sc-icon-alert-48";return this.show.apply(this,b)};SC.AlertPane.info=function(e,d,a,h,f,g,c){var b=this._normalizeArguments(arguments);
b[6]="sc-icon-info-48";return this.show.apply(this,b)};SC.AlertPane.error=function(e,d,a,h,f,g,c){var b=this._normalizeArguments(arguments);
b[6]="sc-icon-error-48";return this.show.apply(this,b)};SC.AlertPane.plain=function(e,d,a,h,f,g,c){var b=this._normalizeArguments(arguments);
b[6]="blank";return this.show.apply(this,b)};sc_require("panes/panel");SC.PalettePane=SC.PanelPane.extend({classNames:"sc-palette",isModal:NO,modalPane:SC.ModalPane,isAnchored:NO,_mouseOffsetX:null,_mouseOffsetY:null,mouseDown:function(a){var b=this.get("frame");
this._mouseOffsetX=b?(b.x-a.pageX):0;this._mouseOffsetY=b?(b.y-a.pageY):0;return YES
},mouseDragged:function(a){if(!this.isAnchored){this.set("layout",{width:this.layout.width,height:this.layout.height,left:this._mouseOffsetX+a.pageX,top:this._mouseOffsetY+a.pageY});
this.updateLayout()}return YES},touchStart:function(a){return this.mouseDown(a)},touchesDragged:function(a){return this.mouseDragged(a)
}});sc_require("panes/palette");SC.PICKER_MENU="menu";SC.PICKER_FIXED="fixed";SC.PICKER_POINTER="pointer";
SC.PICKER_MENU_POINTER="menu-pointer";SC.POINTER_LAYOUT=["perfectRight","perfectLeft","perfectTop","perfectBottom"];
SC.PickerPane=SC.PalettePane.extend({classNames:"sc-picker",isAnchored:YES,isModal:YES,pointerPos:"perfectRight",pointerPosX:0,pointerPosY:0,anchorElement:null,preferType:null,preferMatrix:null,pointerOffset:null,extraRightOffset:0,popup:function(d,c,e,a){var b=d.isView?d.get("layer"):d;
this.beginPropertyChanges();this.set("anchorElement",b);if(c){this.set("preferType",c)
}if(e){this.set("preferMatrix",e)}if(a){this.set("pointerOffset",a)}this.endPropertyChanges();
this.positionPane();this.append()},positionPane:function(){var b=this.get("anchorElement"),c=this.get("preferType"),d=this.get("preferMatrix"),e=this.get("layout"),a;
if(b){b=this.computeAnchorRect(b);if(b.x===0&&b.y===0){return}a=SC.cloneRect(b);if(c){switch(c){case SC.PICKER_MENU:case SC.PICKER_FIXED:if(!d||d.length!==3){this.set("preferMatrix",[1,4,3])
}a.x+=((this.preferMatrix[2]===0)?a.width:0)+this.preferMatrix[0];a.y+=((this.preferMatrix[2]===3)?a.height:0)+this.preferMatrix[1];
break;default:a.y+=a.height;break}}else{a.y+=a.height}a=this.fitPositionToScreen(a,this.get("frame"),b);
this.adjust({width:a.width,height:a.height,left:a.x,top:a.y})}else{this.adjust({width:e.width,height:e.height,centerX:0,centerY:0})
}this.updateLayout();return this},computeAnchorRect:function(c){var e,b,d,a=SC.RootResponder.responder.computeWindowSize();
if(c.getBoundingClientRect){e=c.getBoundingClientRect();b={x:e.left,y:e.top,width:e.width,height:e.height};
if(b.width===undefined||b.height===undefined){d=SC.$(c);b.width=d.outerWidth();b.height=d.outerHeight()
}}else{b=SC.viewportOffset(c);d=SC.$(c);b.width=d.outerWidth();b.height=d.outerHeight()
}b.height=(a.height-b.y)<b.height?(a.height-b.y):b.height;return b},fitPositionToScreen:function(e,c,b){var a=SC.RootResponder.responder.computeWindowSize();
var d={x:0,y:0,width:a.width,height:a.height};c.x=e.x;c.y=e.y;if(this.preferType){switch(this.preferType){case SC.PICKER_MENU:c=this.fitPositionToScreenMenu(d,c,this.get("isSubMenu"));
break;case SC.PICKER_MENU_POINTER:this.setupPointer(b);c=this.fitPositionToScreenMenuPointer(d,c,b);
break;case SC.PICKER_POINTER:this.setupPointer(b);c=this.fitPositionToScreenPointer(d,c,b);
break;case SC.PICKER_FIXED:break;default:break}}else{c=this.fitPositionToScreenDefault(d,c,b)
}this.displayDidChange();return c},fitPositionToScreenDefault:function(c,d,b){if(SC.maxX(d)>c.width){var e=Math.max(SC.maxX(b),d.width);
d.x=Math.min(e,c.width)-d.width}if(SC.minX(d)<0){d.x=SC.minX(Math.max(b,0));if(SC.maxX(d)>c.width){d.x=Math.max(0,c.width-d.width)
}}if(SC.maxY(d)>c.height){e=Math.max((b.y-d.height),0);if(e>c.height){d.y=Math.max(0,c.height-d.height)
}else{d.y=e}}if(SC.minY(d)<0){e=Math.min(SC.maxY(b),(c.height-b.height));d.y=Math.max(e,0)
}return d},fitPositionToScreenMenu:function(c,b,a){if(a){b.x-=this.get("submenuOffsetX");
b.y-=Math.floor(this.get("menuHeightPadding")/2)}if((b.x+b.width)>(c.width-20)){if(a){b.x=b.x-(b.width*2)
}else{b.x=c.width-b.width-20}}if(b.x<7){b.x=7}if(b.y<7){b.height+=b.y;b.y=7}if(b.height+b.y+35>=c.height){if(b.height+50>=c.height){b.y=SC.MenuPane.VERTICAL_OFFSET;
b.height=c.height-(SC.MenuPane.VERTICAL_OFFSET*2)}else{b.y+=(c.height-(b.height+b.y+35))
}}return b},fitPositionToScreenMenuPointer:function(c,d,b){d=this.fitPositionToScreenPointer(c,d,b);
if(d.height+d.y+35>=c.height){d.height=c.height-d.y-(SC.MenuPane.VERTICAL_OFFSET*2)
}return d},fitPositionToScreenPointer:function(o,l,n){var h=[this.pointerOffset[0],this.pointerOffset[1],this.pointerOffset[2],this.pointerOffset[3]];
var e=[[n.x+n.width+h[0],n.y+parseInt(n.height/2,0)-40],[n.x-l.width+h[1],n.y+parseInt(n.height/2,0)-40],[n.x+parseInt((n.width/2)-(l.width/2),0),n.y-l.height+h[2]],[n.x+parseInt((n.width/2)-(l.width/2),0),n.y+n.height+h[3]]];
var c=[[n.x+n.width+l.width+h[0],n.y+parseInt(n.height/2,0)+l.height-24],[n.x+h[1],n.y+parseInt(n.height/2,0)+l.height-24],[n.x+parseInt((n.width/2)-(l.width/2),0)+l.width,n.y+h[2]],[n.x+parseInt((n.width/2)-(l.width/2),0)+l.width,n.y+n.height+l.height+h[3]]];
var g=[[e[0][1]>0?0:0-e[0][1],c[0][0]<o.width?0:c[0][0]-o.width,c[0][1]<o.height?0:c[0][1]-o.height,e[0][0]>0?0:0-e[0][0]],[e[1][1]>0?0:0-e[1][1],c[1][0]<o.width?0:c[1][0]-o.width,c[1][1]<o.height?0:c[1][1]-o.height,e[1][0]>0?0:0-e[1][0]],[e[2][1]>0?0:0-e[2][1],c[2][0]<o.width?0:c[2][0]-o.width,c[2][1]<o.height?0:c[2][1]-o.height,e[2][0]>0?0:0-e[2][0]],[e[3][1]>0?0:0-e[3][1],c[3][0]<o.width?0:c[3][0]-o.width,c[3][1]<o.height?0:c[3][1]-o.height,e[3][0]>0?0:0-e[3][0]]];
var d=this.preferMatrix;if(d[4]===-1){l.x=n.x+parseInt(n.width/2,0);l.y=n.y+parseInt(n.height/2,0)-parseInt(l.height/2,0);
this.set("pointerPos",SC.POINTER_LAYOUT[0]+" fallback");this.set("pointerPosY",parseInt(l.height/2,0)-40)
}else{l.x=e[d[4]][0];l.y=e[d[4]][1];this.set("pointerPos",SC.POINTER_LAYOUT[d[4]]);
this.set("pointerPosY",0)}this.set("pointerPosX",0);for(var j=0,b,k=SC.POINTER_LAYOUT.length;
j<k;j++){b=d[j];if(g[b][0]===0&&g[b][1]===0&&g[b][2]===0&&g[b][3]===0){if(d[4]!==b){l.x=e[b][0];
l.y=e[b][1];this.set("pointerPosY",0);this.set("pointerPos",SC.POINTER_LAYOUT[b])
}j=SC.POINTER_LAYOUT.length}else{if((b===0||b===1)&&g[b][0]===0&&g[b][1]===0&&g[b][2]<l.height-91&&g[b][3]===0){if(d[4]!==b){l.x=e[b][0];
this.set("pointerPos",SC.POINTER_LAYOUT[b])}l.y=e[b][1]-g[b][2];this.set("pointerPosY",g[b][2]);
j=SC.POINTER_LAYOUT.length}else{if((b===0||b===1)&&g[b][0]===0&&g[b][1]===0&&g[b][2]<=l.height-51&&g[b][3]===0){if(d[4]!==b){l.x=e[b][0]
}l.y=e[b][1]-(l.height-51);this.set("pointerPosY",(l.height-53));this.set("pointerPos",SC.POINTER_LAYOUT[b]+" extra-low");
j=SC.POINTER_LAYOUT.length}else{if((b===2||b===3)&&g[b][0]===0&&g[b][1]<=parseInt(l.width/2,0)-this.get("extraRightOffset")&&g[b][2]===0&&g[b][3]===0){if(d[4]!==b){l.y=e[b][1]
}l.x=e[b][0]-(parseInt(l.width/2,0)-this.get("extraRightOffset"));this.set("pointerPos",SC.POINTER_LAYOUT[b]+" extra-right");
j=SC.POINTER_LAYOUT.length}else{if((b===2||b===3)&&g[b][0]===0&&g[b][1]===0&&g[b][2]===0&&g[b][3]<=parseInt(l.width/2,0)-this.get("extraRightOffset")){if(d[4]!==b){l.y=e[b][1]
}l.x=e[b][0]+(parseInt(l.width/2,0)-this.get("extraRightOffset"));this.set("pointerPos",SC.POINTER_LAYOUT[b]+" extra-left");
j=SC.POINTER_LAYOUT.length}}}}}}return l},setupPointer:function(f){var g=this.pointerOffset,e=SC.PickerPane;
if(!g||g.length!==4){if(this.get("preferType")==SC.PICKER_MENU_POINTER){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:this.set("pointerOffset",e.TINY_PICKER_MENU_POINTER_OFFSET);
this.set("extraRightOffset",e.TINY_PICKER_MENU_EXTRA_RIGHT_OFFSET);break;case SC.SMALL_CONTROL_SIZE:this.set("pointerOffset",e.SMALL_PICKER_MENU_POINTER_OFFSET);
this.set("extraRightOffset",e.SMALL_PICKER_MENU_EXTRA_RIGHT_OFFSET);break;case SC.REGULAR_CONTROL_SIZE:this.set("pointerOffset",e.REGULAR_PICKER_MENU_POINTER_OFFSET);
this.set("extraRightOffset",e.REGULAR_PICKER_MENU_EXTRA_RIGHT_OFFSET);break;case SC.LARGE_CONTROL_SIZE:this.set("pointerOffset",e.LARGE_PICKER_MENU_POINTER_OFFSET);
this.set("extraRightOffset",e.LARGE_PICKER_MENU_EXTRA_RIGHT_OFFSET);break;case SC.HUGE_CONTROL_SIZE:this.set("pointerOffset",e.HUGE_PICKER_MENU_POINTER_OFFSET);
this.set("extraRightOffset",e.HUGE_PICKER_MENU_EXTRA_RIGHT_OFFSET);break}}else{var d=(f.width<16)?((f.width<4)?9:6):0,b=(f.height<16)?((f.height<4)?9:6):0,c=e.PICKER_POINTER_OFFSET;
var h=[c[0]+d,c[1]-d,c[2]-b,c[3]+b];this.set("pointerOffset",h);this.set("extraRightOffset",e.PICKER_EXTRA_RIGHT_OFFSET)
}}if(!this.preferMatrix||this.preferMatrix.length!==5){this.set("preferMatrix",this.get("preferType")==SC.PICKER_MENU_POINTER?[3,0,1,2,3]:[0,1,2,3,2])
}},displayProperties:["pointerPosY"],render:function(b,d){var a=arguments.callee.base.apply(this,arguments);
if(b.needsContent){if(this.get("preferType")==SC.PICKER_POINTER||this.get("preferType")==SC.PICKER_MENU_POINTER){b.push('<div class="sc-pointer '+this.get("pointerPos")+'" style="margin-top: '+this.get("pointerPosY")+'px"></div>');
b.addClass(this.get("pointerPos"))}}else{if(this.get("preferType")==SC.PICKER_POINTER||this.get("preferType")==SC.PICKER_MENU_POINTER){var c=this.$(".sc-pointer");
c.attr("class","sc-pointer "+this.get("pointerPos"));c.attr("style","margin-top: "+this.get("pointerPosY")+"px");
b.addClass(this.get("pointerPos"))}}return a},modalPaneDidClick:function(a){var b=this.get("frame");
if(!this.clickInside(b,a)){this.remove()}return YES},mouseDown:function(a){return this.modalPaneDidClick(a)
},clickInside:function(b,a){return SC.pointInRect({x:a.pageX,y:a.pageY},b)},windowSizeDidChange:function(b,a){this.positionPane()
}});SC.PickerPane.PICKER_POINTER_OFFSET=[9,-9,-18,18];SC.PickerPane.PICKER_EXTRA_RIGHT_OFFSET=20;
SC.PickerPane.TINY_PICKER_MENU_POINTER_OFFSET=[9,-9,-18,18];SC.PickerPane.TINY_PICKER_MENU_EXTRA_RIGHT_OFFSET=12;
SC.PickerPane.SMALL_PICKER_MENU_POINTER_OFFSET=[9,-9,-8,8];SC.PickerPane.SMALL_PICKER_MENU_EXTRA_RIGHT_OFFSET=11;
SC.PickerPane.REGULAR_PICKER_MENU_POINTER_OFFSET=[9,-9,-12,12];SC.PickerPane.REGULAR_PICKER_MENU_EXTRA_RIGHT_OFFSET=13;
SC.PickerPane.LARGE_PICKER_MENU_POINTER_OFFSET=[9,-9,-16,16];SC.PickerPane.LARGE_PICKER_MENU_EXTRA_RIGHT_OFFSET=17;
SC.PickerPane.HUGE_PICKER_MENU_POINTER_OFFSET=[9,-9,-18,18];SC.PickerPane.HUGE_PICKER_MENU_EXTRA_RIGHT_OFFSET=12;
SC.SeparatorView=SC.View.extend({classNames:["sc-separator-view"],tagName:"span",layoutDirection:SC.LAYOUT_HORIZONTAL,render:function(a,b){if(b){a.push("<span></span>")
}a.addClass(this.get("layoutDirection"))}});sc_require("views/button");sc_require("views/separator");
SC.MenuItemView=SC.View.extend(SC.ContentDisplay,{classNames:["sc-menu-item"],escapeHTML:YES,acceptsFirstResponder:YES,blocksIEDeactivate:YES,blocksIEDeactivate:YES,content:null,isSeparator:function(){return this.getContentProperty("itemSeparatorKey")===YES
}.property("content").cacheable(),isEnabled:function(){return this.getContentProperty("itemIsEnabledKey")!==NO&&this.getContentProperty("itemSeparatorKey")!==YES
}.property("content.isEnabled").cacheable(),subMenu:function(){var c=this.get("content"),b,a;
if(!c){return null}a=this.get("parentMenu");b=c.get(a.itemSubMenuKey);if(b){if(SC.kindOf(b,SC.MenuPane)){b.set("isModal",NO);
b.set("isSubMenu",YES);b.set("parentMenu",a);return b}else{return SC.MenuPane.create({layout:{width:200},items:b,isModal:NO,isSubMenu:YES,parentMenu:a,controlSize:a.get("controlSize")})
}}return null}.property("content").cacheable(),hasSubMenu:function(){return !!this.get("subMenu")
}.property("subMenu").cacheable(),init:function(){arguments.callee.base.apply(this,arguments);
this.contentDidChange()},render:function(b,h){var c=this.get("content"),a,f,e=this.get("parentMenu"),d=this.get("itemWidth")||e.layout.width,g=this.get("itemHeight")||SC.DEFAULT_MENU_ITEM_HEIGHT;
this.set("itemWidth",d);this.set("itemHeight",g);b=b.begin("a").addClass("menu-item");
if(c.get(e.itemSeparatorKey)){b.push('<span class="separator"></span>');b.addClass("disabled")
}else{f=c.get(e.itemIconKey);if(f){this.renderImage(b,f);b.addClass("has-icon")}f=this.get("title");
if(SC.typeOf(f)!==SC.T_STRING){f=f.toString()}this.renderLabel(b,f);if(this.getContentProperty("itemCheckboxKey")){b.push('<div class="checkbox"></div>')
}if(this.get("hasSubMenu")){this.renderBranch(b)}f=this.getContentProperty("itemShortCutKey");
if(f){this.renderShortcut(b,f)}}b=b.end()},renderImage:function(b,d){var a,c;if(d&&SC.ImageView.valueIsUrl(d)){a=d;
c=""}else{c=d;a=SC.BLANK_IMAGE_URL}b.begin("img").addClass("image").addClass(c).attr("src",a).end()
},renderLabel:function(b,a){if(this.get("escapeHTML")){a=SC.RenderContext.escapeHTML(a)
}b.push("<span class='value ellipsis'>"+a+"</span>")},renderBranch:function(a){a.push('<span class="has-branch"></span>')
},renderShortcut:function(b,a){b.push('<span class = "shortcut">'+a+"</span>")},showSubMenu:function(){var a=this.get("subMenu");
if(a){a.set("mouseHasEntered",NO);a.popup(this,[0,0,0])}this._subMenuTimer=null},title:function(){var b=this.getContentProperty("itemTitleKey"),a=this.getPath("parentMenu.localize");
if(a&&b){b=b.loc()}return b||""}.property("content.title").cacheable(),getContentProperty:function(b){var a=this.get("content"),c=this.get("parentMenu");
if(a){return a.get(c.get(b))}},mouseUp:function(b){var a;a=this.getPath("parentMenu.rootMenu.targetMenuItem");
if(a){a.performAction()}return YES},performAction:function(){if(!this.get("isEnabled")||this.get("hasSubMenu")){return NO
}var b=this.getContentProperty("itemDisableMenuFlashKey"),a;if(b){this.sendAction()
}else{this._flashCounter=0;a=this.getPath("parentMenu.rootMenu");a._isFlashing=YES;
this.invokeLater(this.flashHighlight,25);this.invokeLater(this.sendAction,150)}return YES
},sendAction:function(){var c=this.getContentProperty("itemActionKey"),d=this.getContentProperty("itemTargetKey"),b=this.getPath("parentMenu.rootMenu"),a;
this.getPath("parentMenu.rootMenu").remove();b._isFlashing=NO;c=(c===undefined)?b.get("action"):c;
d=(d===undefined)?b.get("target"):d;b.set("selectedItem",this.get("content"));if(SC.typeOf(c)===SC.T_FUNCTION){c.apply(d,[b]);
SC.Logger.warn("Support for menu item action functions has been deprecated. Please use target and action.")
}else{a=this.getPath("pane.rootResponder")||SC.RootResponder.responder;if(a){a.sendAction(c,d,this)
}}},flashHighlight:function(){var a=this._flashCounter,b=this.$();if(a%2===0){b.addClass("focus")
}else{b.removeClass("focus")}if(a<=2){this.invokeLater(this.flashHighlight,50);this._flashCounter++
}},mouseDown:function(a){return YES},mouseEntered:function(a){var c=this.get("parentMenu"),b=c.get("rootMenu");
if(b._isFlashing){return}c.set("mouseHasEntered",YES);this.set("mouseHasEntered",YES);
c.set("currentMenuItem",this);if(this.get("isEnabled")){this.becomeFirstResponder()
}if(this.get("hasSubMenu")){this._subMenuTimer=this.invokeLater(this.showSubMenu,100)
}return YES},mouseExited:function(a){var b,c;if(this.get("hasSubMenu")){c=this._subMenuTimer;
if(c){c.invalidate()}else{this.invokeLater(this.checkMouseLocation,100)}}else{b=this.get("parentMenu");
if(b.get("currentMenuItem")===this){b.set("currentMenuItem",null)}}return YES},touchStart:function(a){this.mouseEntered(a);
return YES},touchEnd:function(a){return this.mouseUp(a)},touchEntered:function(a){return this.mouseEntered(a)
},touchExited:function(a){return this.mouseExited(a)},checkMouseLocation:function(){var b=this.get("subMenu"),c=this.get("parentMenu"),a,d;
if(!b.get("mouseHasEntered")){a=c.get("currentMenuItem");if(a===this||a===null){d=c.get("previousMenuItem");
if(d){d.resignFirstResponder()}this.resignFirstResponder();b.remove()}}},moveUp:function(b,a){var c=this.get("parentMenu");
if(c){c.moveUp(this)}return YES},moveDown:function(b,a){var c=this.get("parentMenu");
if(c){c.moveDown(this)}return YES},moveRight:function(b,a){this.showSubMenu();return YES
},insertText:function(b,a){var c=this.get("parentMenu");if(c){c.insertText(b,a)}},keyDown:function(a){return this.interpretKeyEvents(a)
},keyUp:function(a){return YES},cancel:function(a){this.getPath("parentMenu.rootMenu").remove();
return YES},didBecomeFirstResponder:function(a){if(a!==this){return}var b=this.get("parentMenu");
if(b){b.set("currentSelectedMenuItem",this)}},willLoseFirstResponder:function(a){if(a!==this){return
}var b=this.get("parentMenu");if(b){b.set("currentSelectedMenuItem",null);b.set("previousSelectedMenuItem",this)
}},insertNewline:function(b,a){this.mouseUp(a)},closeParent:function(){this.$().removeClass("focus");
var a=this.get("parentMenu");if(a){a.remove()}},clickInside:function(b,a){return SC.pointInRect({x:a.pageX,y:a.pageY},b)
},contentDidChange:function(){var b=this.get("content"),a=this._content;if(b===a){return
}var c=this.contentPropertyDidChange;if(a&&a.removeObserver){a.removeObserver("*",this,c)
}this._content=b;if(b&&b.addObserver){b.addObserver("*",this,c)}this.contentPropertyDidChange(b,"*")
}.observes("content"),contentPropertyDidChange:function(g,j){var b=this.get("parentMenu");
if(!b){return}var a=SC.MenuItemView._contentPropertyToMenuItemPropertyMapping,h=SC.keys(a),e,f,d,c;
if(j==="*"){for(e=0,f=h.length;e<f;++e){d=h[e];c=a[d];this.notifyPropertyChange(c)
}}else{for(e=0,f=h.length;e<f;++e){d=h[e];if(b.get(d)===j){c=a[d];this.notifyPropertyChange(c)
}}}}});SC.MenuItemView._contentPropertyToMenuItemPropertyMapping={itemTitleKey:"title",itemIsEnabledKey:"isEnabled",itemSeparatorKey:"isSeparator",itemSubMenuKey:"subMenu"};
require("panes/picker");require("views/menu_item");SC.MenuPane=SC.PickerPane.extend({classNames:["sc-menu"],items:[],controlSize:SC.REGULAR_CONTROL_SIZE,itemHeight:null,itemSeparatorHeight:null,menuHeight:0,menuHeightPadding:null,submenuOffsetX:null,selectedItem:null,exampleView:SC.MenuItemView,anchor:null,isSubMenu:NO,localize:YES,acceptsMenuPane:YES,popup:function(b,c){var a;
this.beginPropertyChanges();if(b){a=b.isView?b.get("layer"):b}this.set("anchorElement",a);
this.set("anchor",b);if(c){this.set("preferMatrix",c)}this.adjust("height",this.get("menuHeight"));
this.positionPane();this.set("defaultResponder",this);this.endPropertyChanges();if(parseInt(SC.browser.msie,0)===7){this.invokeLast(this.append)
}else{this.append()}},remove:function(){var a=this.get("parentMenu");this.set("currentMenuItem",null);
this.closeOpenMenus();this.resignMenuPane();if(a){a.becomeMenuPane()}return arguments.callee.base.apply(this,arguments)
},itemTitleKey:"title",itemIsEnabledKey:"isEnabled",itemValueKey:"value",itemIconKey:"icon",itemHeightKey:"height",itemSubMenuKey:"subMenu",itemSeparatorKey:"separator",itemTargetKey:"target",itemActionKey:"action",itemCheckboxKey:"checkbox",itemShortCutKey:"shortcut",itemKeyEquivalentKey:"keyEquivalent",itemDisableMenuFlashKey:"disableMenuFlash",menuItemKeys:"itemTitleKey itemValueKey itemIsEnabledKey itemIconKey itemSeparatorKey itemActionKey itemCheckboxKey itemShortCutKey itemBranchKey itemHeightKey itemSubMenuKey itemKeyEquivalentKey itemTargetKey".w(),preferType:SC.PICKER_MENU,isModal:YES,_menuView:null,init:function(){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:this.setIfNull("itemHeight",SC.MenuPane.TINY_MENU_ITEM_HEIGHT);
this.setIfNull("itemSeparatorHeight",SC.MenuPane.TINY_MENU_ITEM_SEPARATOR_HEIGHT);
this.setIfNull("menuHeightPadding",SC.MenuPane.TINY_MENU_HEIGHT_PADDING);this.setIfNull("submenuOffsetX",SC.MenuPane.TINY_SUBMENU_OFFSET_X);
break;case SC.SMALL_CONTROL_SIZE:this.setIfNull("itemHeight",SC.MenuPane.SMALL_MENU_ITEM_HEIGHT);
this.setIfNull("itemSeparatorHeight",SC.MenuPane.SMALL_MENU_ITEM_SEPARATOR_HEIGHT);
this.setIfNull("menuHeightPadding",SC.MenuPane.SMALL_MENU_HEIGHT_PADDING);this.setIfNull("submenuOffsetX",SC.MenuPane.SMALL_SUBMENU_OFFSET_X);
break;case SC.REGULAR_CONTROL_SIZE:this.setIfNull("itemHeight",SC.MenuPane.REGULAR_MENU_ITEM_HEIGHT);
this.setIfNull("itemSeparatorHeight",SC.MenuPane.REGULAR_MENU_ITEM_SEPARATOR_HEIGHT);
this.setIfNull("menuHeightPadding",SC.MenuPane.REGULAR_MENU_HEIGHT_PADDING);this.setIfNull("submenuOffsetX",SC.MenuPane.REGULAR_SUBMENU_OFFSET_X);
break;case SC.LARGE_CONTROL_SIZE:this.setIfNull("itemHeight",SC.MenuPane.LARGE_MENU_ITEM_HEIGHT);
this.setIfNull("itemSeparatorHeight",SC.MenuPane.LARGE_MENU_ITEM_SEPARATOR_HEIGHT);
this.setIfNull("menuHeightPadding",SC.MenuPane.LARGE_MENU_HEIGHT_PADDING);this.setIfNull("submenuOffsetX",SC.MenuPane.LARGE_SUBMENU_OFFSET_X);
break;case SC.HUGE_CONTROL_SIZE:this.setIfNull("itemHeight",SC.MenuPane.HUGE_MENU_ITEM_HEIGHT);
this.setIfNull("itemSeparatorHeight",SC.MenuPane.HUGE_MENU_ITEM_SEPARATOR_HEIGHT);
this.setIfNull("menuHeightPadding",SC.MenuPane.HUGE_MENU_HEIGHT_PADDING);this.setIfNull("submenuOffsetX",SC.MenuPane.HUGE_SUBMENU_OFFSET_X);
break}return arguments.callee.base.apply(this,arguments)},setIfNull:function(a,b){if(this.get(a)===null){this.set(a,b)
}},render:function(a,b){a.addClass(this.get("controlSize"));return arguments.callee.base.apply(this,arguments)
},createChildViews:function(){var b,a,c;b=this.createChildView(SC.MenuScrollView,{borderStyle:SC.BORDER_NONE,controlSize:this.get("controlSize")});
a=this._menuView=SC.View.create();c=this.get("menuItemViews");a.set("layout",{top:0,left:0,height:this.get("menuHeight")});
a.replaceAllChildren(c);b.set("contentView",a);this.childViews=[b];return this},paneDidAttach:function(){var a=(this.rootResponder=SC.RootResponder.responder);
a.panes.add(this);this.set("currentWindowSize",a.computeWindowSize());this.set("isPaneAttached",YES);
this.parentViewDidChange();this._notifyDidAppendToDocument();this.becomeMenuPane();
return this},becomeMenuPane:function(){if(this.rootResponder){this.rootResponder.makeMenuPane(this)
}return this},resignMenuPane:function(){if(this.rootResponder){this.rootResponder.makeMenuPane(null)
}return this},menuItemViews:function(){var o=[],l=this.get("displayItems"),j=this.get("exampleView"),q,m,p,c,k,b,f,e,h,a,g,d,n,i;
if(!l){return o}c=this.get("itemHeightKey");k=this.get("itemSeparatorKey");b=this.get("itemHeight");
a=this.get("itemKeyEquivalentKey");f=this.get("itemSeparatorHeight");h=Math.floor(this.get("menuHeightPadding")/2);
e=h;d=this.menuItemKeys.map(SC._menu_fetchKeys,this);i=l.get("length");for(n=0;n<i;
n++){q=l[n];p=q.get(c);if(!p){p=q.get(k)?f:b}m=this._menuView.createChildView(j,{layout:{height:p,top:e},contentDisplayProperties:d,content:q,parentMenu:this});
o[n]=m;e+=p;g=q.get(a);if(g){this._keyEquivalents[g]=m}}this.set("menuHeight",e+h);
return o}.property("displayItems").cacheable(),menuItemViewForContentIndex:function(a){var b=this.get("menuItemViews");
if(!b){return undefined}return b.objectAt(a)},_keyEquivalents:{},rootMenu:function(){if(this.get("isSubMenu")){return this.getPath("parentMenu.rootMenu")
}return this}.property("isSubMenu").cacheable(),windowSizeDidChange:function(b,a){this.remove();
return arguments.callee.base.apply(this,arguments)},displayItems:function(){var d=this.get("items"),c=this.get("localize"),h=this.get("itemHeight"),b,e=[],a,f,g;
if(!d){return null}b=d.get("length");for(a=0;a<b;a++){f=d.objectAt(a);if(!f){continue
}g=SC.typeOf(f);if(g===SC.T_STRING){f=SC.Object.create({title:f,value:f,isEnabled:YES})
}else{if(g===SC.T_HASH){f=SC.Object.create(f)}else{if(g===SC.T_ARRAY){f=this.convertArrayMenuItemToObject(f)
}}}f.contentIndex=a;e.push(f)}return e}.property("items").cacheable(),_sc_menu_itemsDidChange:function(){var a=this.get("menuItemViews");
this._menuView.replaceAllChildren(a);this._menuView.adjust("height",this.get("menuHeight"))
}.observes("items"),convertArrayMenuItemToObject:function(f){SC.Logger.warn("Support for Array-based menu items has been deprecated.  Please update your menus to use a hash.");
var e,c=SC._menu_fetchKeys,b=SC._menu_fetchItem,h,d=SC.Object.create(),a,g;e=this.menuItemKeys.map(c,this);
d[e[0]]=f[0];d[e[1]]=f[1];d[e[2]]=f[2];d[e[3]]=f[3];d[e[4]]=f[4];d[e[5]]=f[5];d[e[6]]=f[6];
d[e[7]]=f[7];d[e[8]]=f[8];d[e[9]]=f[9];d[e[10]]=f[10];d[e[11]]=f[11];d[e[12]]=f[12];
return d},currentMenuItem:function(a,b){if(b!==undefined){if(this._currentMenuItem!==null){this.set("previousMenuItem",this._currentMenuItem)
}this._currentMenuItem=b;this.setPath("rootMenu.targetMenuItem",b);return b}return this._currentMenuItem
}.property().cacheable(),_sc_menu_currentMenuItemDidChange:function(){var a=this.get("currentMenuItem"),b=this.get("previousMenuItem");
if(b){if(b.get("hasSubMenu")&&a===null){}else{b.resignFirstResponder();this.closeOpenMenusFor(b)
}}if(a&&a.get("isEnabled")){a.scrollToVisible()}}.observes("currentMenuItem"),closeOpenMenusFor:function(a){if(!a){return
}var b=a.get("parentMenu");while(b&&a){b=a.get("subMenu");if(b){b.remove();a.resignFirstResponder();
a=b.get("previousMenuItem")}}},closeOpenMenus:function(){this.closeOpenMenusFor(this.get("previousMenuItem"))
},mouseDown:function(a){this.modalPaneDidClick();return YES},mouseEntered:function(a){this.set("mouseHasEntered",YES)
},keyUp:function(a){var b=this.interpretKeyEvents(a);return !b?NO:b},moveUp:function(){var c=this.get("currentMenuItem"),d=this.get("menuItemViews"),b,e,a;
if(!c){a=d.get("length")-1}else{b=c.getPath("content.contentIndex");if(b===0){return YES
}a=b-1}while(a>=0){if(d[a].get("isEnabled")){this.set("currentMenuItem",d[a]);d[a].becomeFirstResponder();
break}a--}return YES},moveDown:function(){var d=this.get("currentMenuItem"),e=this.get("menuItemViews"),b=e.get("length"),c,f,a;
if(!d){a=0}else{c=d.getPath("content.contentIndex");if(c===b){return YES}a=c+1}while(a<b){if(e[a].get("isEnabled")){this.set("currentMenuItem",e[a]);
e[a].becomeFirstResponder();break}a++}return YES},insertText:function(b,a){var d=this._timer,c=this._keyBuffer;
if(d){d.invalidate()}d=this._timer=SC.Timer.schedule({target:this,action:"clearKeyBuffer",interval:500,isPooled:NO});
c=c||"";c+=b.toUpperCase();this.selectMenuItemForString(c);this._keyBuffer=c;return YES
},performKeyEquivalent:function(b){var a=this._keyEquivalents[b];if(a){a.performAction(YES);
return YES}if(b==="escape"){this.remove();return YES}if(b==="return"){return YES}return NO
},selectMenuItemForString:function(c){var d=this.get("menuItemViews"),f,g,b,a,e;if(!d){return
}e=c.length;a=d.get("length");for(b=0;b<a;b++){f=d.objectAt(b);g=f.get("title");if(!g){continue
}g=g.replace(/ /g,"").substr(0,e).toUpperCase();if(g===c){this.set("currentMenuItem",f);
f.becomeFirstResponder();break}}},clearKeyBuffer:function(){this._keyBuffer=""},modalPaneDidClick:function(a){this.remove();
return YES}});SC._menu_fetchKeys=function(a){return this.get(a)};SC._menu_fetchItem=function(a){if(!a){return null
}return this.get?this.get(a):this[a]};SC.MenuPane.TINY_MENU_ITEM_HEIGHT=10;SC.MenuPane.TINY_MENU_ITEM_SEPARATOR_HEIGHT=2;
SC.MenuPane.TINY_MENU_HEIGHT_PADDING=2;SC.MenuPane.TINY_SUBMENU_OFFSET_X=0;SC.MenuPane.SMALL_MENU_ITEM_HEIGHT=16;
SC.MenuPane.SMALL_MENU_ITEM_SEPARATOR_HEIGHT=7;SC.MenuPane.SMALL_MENU_HEIGHT_PADDING=4;
SC.MenuPane.SMALL_SUBMENU_OFFSET_X=2;SC.MenuPane.REGULAR_MENU_ITEM_HEIGHT=20;SC.MenuPane.REGULAR_MENU_ITEM_SEPARATOR_HEIGHT=9;
SC.MenuPane.REGULAR_MENU_HEIGHT_PADDING=6;SC.MenuPane.REGULAR_SUBMENU_OFFSET_X=2;
SC.MenuPane.LARGE_MENU_ITEM_HEIGHT=60;SC.MenuPane.LARGE_MENU_ITEM_SEPARATOR_HEIGHT=20;
SC.MenuPane.LARGE_MENU_HEIGHT_PADDING=0;SC.MenuPane.LARGE_SUBMENU_OFFSET_X=4;SC.MenuPane.HUGE_MENU_ITEM_HEIGHT=20;
SC.MenuPane.HUGE_MENU_ITEM_SEPARATOR_HEIGHT=9;SC.MenuPane.HUGE_MENU_HEIGHT_PADDING=0;
SC.MenuPane.HUGE_SUBMENU_OFFSET_X=0;SC.MenuPane.VERTICAL_OFFSET=23;sc_require("views/button");
SC.SelectButtonView=SC.ButtonView.extend({escapeHTML:YES,objects:[],objectsBindingDefault:SC.Binding.multiple(),nameKey:null,sortKey:null,valueKey:null,iconKey:null,isEnabledKey:"isEnabled",localize:YES,disableSort:YES,classNames:["select-button"],menu:null,itemList:[],itemIdx:null,value:null,checkboxEnabled:YES,separatorPostion:null,_defaultVal:null,_defaultTitle:null,_defaultIcon:null,controlStyle:"popup",displayProperties:["icon","value","controlSize","objects"],preferMatrix:null,SELECT_BUTTON_SPRITE_WIDTH:28,isActiveBinding:"*menu.isVisibleInWindow",isDefaultPosition:NO,lastMenuWidth:null,customView:null,customViewClassName:null,customViewMenuOffsetWidth:0,needsEllipsis:YES,menuPaneHeightPadding:0,supportFocusRing:YES,leftAlign:function(){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:return SC.SelectButtonView.TINY_OFFSET_X;
case SC.SMALL_CONTROL_SIZE:return SC.SelectButtonView.SMALL_OFFSET_X;case SC.REGULAR_CONTROL_SIZE:return SC.SelectButtonView.REGULAR_OFFSET_X;
case SC.LARGE_CONTROL_SIZE:return SC.SelectButtonView.LARGE_OFFSET_X;case SC.HUGE_CONTROL_SIZE:return SC.SelectButtonView.HUGE_OFFSET_X
}return 0}.property("controlSize"),sortObjects:function(b){if(!this.get("disableSort")){var a=this.get("sortKey")||this.get("nameKey");
b=b.sort(function(d,c){if(a){d=d.get?d.get(a):d[a];c=c.get?c.get(a):c[a]}return(d<c)?-1:((d>c)?1:0)
})}return b},render:function(b,e){arguments.callee.base.apply(this,arguments);var c,a,n,q,t,f,s,g,l,o,k,d,i,u,p,m,r,j,h;
c=this.layout.width;if(e&&c){this.adjust({width:c-this.SELECT_BUTTON_SPRITE_WIDTH})
}a=this.get("objects");a=this.sortObjects(a);n=a.length;q=this.get("nameKey");t=this.get("iconKey");
f=this.get("valueKey");h=this.get("isEnabledKey");s=this.get("checkboxEnabled");g=this.get("value");
l=this.get("localize");o=this.get("separatorPostion");k=[];d=YES;i=0;a.forEach(function(v){if(v){u=q?(v.get?v.get(q):v[q]):v.toString();
u=l?u.loc():u;p=t?(v.get?v.get(t):v[t]):null;if(SC.none(v[t])){p=null}m=(f)?(v.get?v.get(f):v[f]):v;
if(!SC.none(g)&&!SC.none(m)){if(g===m){this.set("title",u);this.set("icon",p)}}if(m===this.get("value")){this.set("itemIdx",i);
d=!s?NO:YES}else{d=NO}j=(h)?(v.get?v.get(h):v[h]):v;if(NO!==j){j=YES}if(i===0){this._defaultVal=m;
this._defaultTitle=u;this._defaultIcon=p}var w=SC.Object.create({title:u,icon:p,value:m,isEnabled:j,checkbox:d,target:this,action:"displaySelectedItem"});
k.push(w)}i+=1;if(o&&i===(n-o)){var x=SC.Object.create({separator:YES});k.push(x)
}this.set("itemList",k)},this);if(e){this.invokeLast(function(){var v=this.get("value");
if(SC.none(v)){this.set("value",this._defaultVal);this.set("title",this._defaultTitle);
this.set("icon",this._defaultIcon)}})}this.changeSelectButtonPreferMatrix(this.itemIdx)
},_action:function(n){var i,a,k,l,s,p,z,e,y,c,o,t,q,w,f,g,m,b,x,h,j;i=this.$(".sc-button-label")[0];
var A=SC.SelectButtonView.MENU_WIDTH_OFFSET;if(!this.get("isDefaultPosition")){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:A+=SC.SelectButtonView.TINY_POPUP_MENU_WIDTH_OFFSET;
break;case SC.SMALL_CONTROL_SIZE:A+=SC.SelectButtonView.SMALL_POPUP_MENU_WIDTH_OFFSET;
break;case SC.REGULAR_CONTROL_SIZE:A+=SC.SelectButtonView.REGULAR_POPUP_MENU_WIDTH_OFFSET;
break;case SC.LARGE_CONTROL_SIZE:A+=SC.SelectButtonView.LARGE_POPUP_MENU_WIDTH_OFFSET;
break;case SC.HUGE_CONTROL_SIZE:A+=SC.SelectButtonView.HUGE_POPUP_MENU_WIDTH_OFFSET;
break}}a=this.get("layer").offsetWidth+A;k=i.scrollWidth;l=this.get("lastMenuWidth");
if(k){s=i.offsetWidth;if(k&&s){a=a+k-s}}if(!l||(a>l)){l=a}p=this.get("itemList");
var u=this.get("customViewClassName");var r=this.get("customViewMenuOffsetWidth");
var d="sc-view sc-pane sc-panel sc-palette sc-picker sc-menu select-button sc-scroll-view sc-menu-scroll-view sc-container-view menuContainer sc-button-view sc-menu-item sc-regular-size";
d=u?(d+" "+u):d;h=(this.get("customView")||SC.MenuItemView).create();j=h.get("escapeHTML");
for(o=0,x=p.length;o<x;++o){y=p.objectAt(o);c=document.createElement("div");c.style.cssText="top:-10000px; left: -10000px;  position: absolute;";
c.className=d;c.innerHTML=j?SC.RenderContext.escapeHTML(y.title):y.title;document.body.appendChild(c);
z=c.offsetWidth+r;if(!e||(z>e)){e=z}document.body.removeChild(c)}e=(e>l)?e:l;var v=SC.RootResponder.responder.get("currentWindowSize").width;
if(e>v){e=(v-25)}this.set("lastMenuWidth",l);t=this.get("value");q=this.get("itemList");
w=this.get("controlSize");g=this.get("customView");m=g?g:SC.MenuItemView;b=SC.MenuPane.create({classNames:["select-button"],items:q,exampleView:m,isEnabled:YES,preferType:SC.PICKER_MENU,itemHeightKey:"height",layout:{width:e},controlSize:w,itemWidth:l});
if(!b){return NO}b.popup(this,this.preferMatrix);this.set("menu",b);g=b.menuItemViewForContentIndex(this.get("itemIdx"));
b.set("currentMenuItem",g);g.becomeFirstResponder();this.set("isActive",YES);return YES
},displaySelectedItem:function(a){var b=this.getPath("menu.selectedItem");if(!b){return NO
}this.set("value",b.get("value"));this.set("title",b.get("title"));this.set("itemIdx",b.get("contentIndex"));
return YES},changeSelectButtonPreferMatrix:function(){var c=0,g=0;switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:c=SC.SelectButtonView.TINY_OFFSET_Y;
g=SC.MenuPane.TINY_MENU_ITEM_HEIGHT;break;case SC.SMALL_CONTROL_SIZE:c=SC.SelectButtonView.SMALL_OFFSET_Y;
g=SC.MenuPane.SMALL_MENU_ITEM_HEIGHT;break;case SC.REGULAR_CONTROL_SIZE:c=SC.SelectButtonView.REGULAR_OFFSET_Y;
g=SC.MenuPane.REGULAR_MENU_ITEM_HEIGHT;break;case SC.LARGE_CONTROL_SIZE:c=SC.SelectButtonView.LARGE_OFFSET_Y;
g=SC.MenuPane.LARGE_MENU_ITEM_HEIGHT;break;case SC.HUGE_CONTROL_SIZE:c=SC.SelectButtonView.HUGE_OFFSET_Y;
g=SC.MenuPane.HUGE_MENU_ITEM_HEIGHT;break}var e=c,b=this.get("itemIdx"),a=this.get("leftAlign"),f,d;
if(this.get("isDefaultPosition")){f=[1,0,3];this.set("preferMatrix",f)}else{if(b){e=b*g+c
}d=[a,-e,2];this.set("preferMatrix",d)}},mouseDown:function(a){if(!this.get("isEnabled")){return YES
}this.set("isActive",YES);this._isMouseDown=YES;this.becomeFirstResponder();this._action();
this.invokeLast(this._recordMouseDownTimestamp);return YES},_recordMouseDownTimestamp:function(){this._menuRenderedTimestamp=new Date().getTime()
},mouseUp:function(b){var d=new Date().getTime(),c=this._menuRenderedTimestamp,e=this.get("menu"),f=SC.platform.touch,a;
if(e){a=e.getPath("rootMenu.targetMenuItem");if(a&&a.get("mouseHasEntered")){if(!a.performAction()){e.remove()
}}else{if(!f&&(d-c>SC.ButtonView.CLICK_AND_HOLD_DELAY)){if(!e.get("mouseHasEntered")&&!this.get("isDefaultPosition")){a=e.get("currentMenuItem");
if(a&&!a.performAction()){e.remove()}}else{e.remove()}}}}this._isMouseDown=NO;this.set("isActive",NO);
return YES},mouseExited:function(){return YES},keyDown:function(a){if(this.interpretKeyEvents(a)){return YES
}else{arguments.callee.base.apply(this,arguments)}},interpretKeyEvents:function(a){if(a){if((a.keyCode===38||a.keyCode===40)){this._action()
}else{if(a.keyCode===27){this.resignFirstResponder()}}}return arguments.callee.base.apply(this,arguments)
},acceptsFirstResponder:function(){return this.get("isEnabled")}.property("isEnabled"),_button_isSelectedDidChange:function(){}.observes("isSelected")});
SC.SelectButtonView.TINY_OFFSET_X=0;SC.SelectButtonView.TINY_OFFSET_Y=0;SC.SelectButtonView.TINY_POPUP_MENU_WIDTH_OFFSET=0;
SC.SelectButtonView.SMALL_OFFSET_X=-18;SC.SelectButtonView.SMALL_OFFSET_Y=3;SC.SelectButtonView.SMALL_POPUP_MENU_WIDTH_OFFSET=7;
SC.SelectButtonView.REGULAR_OFFSET_X=-17;SC.SelectButtonView.REGULAR_OFFSET_Y=3;SC.SelectButtonView.REGULAR_POPUP_MENU_WIDTH_OFFSET=4;
SC.SelectButtonView.LARGE_OFFSET_X=-17;SC.SelectButtonView.LARGE_OFFSET_Y=6;SC.SelectButtonView.LARGE_POPUP_MENU_WIDTH_OFFSET=3;
SC.SelectButtonView.HUGE_OFFSET_X=0;SC.SelectButtonView.HUGE_OFFSET_Y=0;SC.SelectButtonView.HUGE_POPUP_MENU_WIDTH_OFFSET=0;
SC.SelectButtonView.MENU_WIDTH_OFFSET=-2;sc_require("panes/panel");SC.SheetPane=SC.PanelPane.extend({classNames:"sc-sheet",modalPane:SC.ModalPane,transitionDuration:200,_state:"NO_VIEW",init:function(){arguments.callee.base.apply(this,arguments);
if(SC.Animatable){SC.SheetPane.ANIMATABLE_AVAILABLE=YES;this.mixin(SC.Animatable);
if(!this.transitions){this.transitions={}}if(!this.transitions.top){this.transitions.top={duration:this.transitionDuration===200?0.3:this.transitionDuration/1000,action:"_complete",target:this}
}}},append:function(){var a=this.get("layout");if(!a.height||!a.top){a=SC.View.convertLayoutToAnchoredLayout(a,this.computeParentDimensions())
}a.top=-1*a.height;if(this.disableAnimation){this.disableAnimation()}this.adjust(a);
this.updateLayout();if(this.enableAnimation){this.enableAnimation()}return arguments.callee.base.apply(this,arguments)
},remove:function(){var b=this,a=arguments;this.invokeLater(function(){a.callee.base.apply(b,a)
},this.transitionDuration);this.slideUp();return this},paneDidAttach:function(){var a=arguments.callee.base.apply(this,arguments);
this.slideDown();return a},slideDown:function(){this._state=SC.SheetPane.ANIMATING;
this._direction=SC.SheetPane.SLIDE_DOWN;if(SC.SheetPane.ANIMATABLE_AVAILABLE){this.transitions.top.timing=SC.Animatable.TRANSITION_EASE_OUT;
this.adjust("top",0)}else{this._start=Date.now();this._end=this._start+this.get("transitionDuration");
this.tick()}},slideUp:function(){this._state=SC.SheetPane.ANIMATING;this._direction=SC.SheetPane.SLIDE_UP;
if(SC.SheetPane.ANIMATABLE_AVAILABLE){var a=this.get("layout");this.transitions.top.timing=SC.Animatable.TRANSITION_EASE_IN;
this.adjust("top",-1*a.height)}else{this._start=Date.now();this._end=this._start+this.get("transitionDuration");
this.tick()}},_complete:function(){var a=this._direction;if(a===SC.SheetPane.SLIDE_DOWN){if(!SC.SheetPane.ANIMATABLE_AVAILABLE){this.adjust("top",0)
}this.adjust({centerX:0,left:null});if(SC.browser.mozilla){this.parentViewDidChange()
}}else{var b=this.get("layout");if(!SC.SheetPane.ANIMATABLE_AVAILABLE){this.adjust("top",-1*b.height)
}}this._state=SC.SheetPane.READY;this.updateLayout()},blurTo:function(a){this.setFirstResponder("")
},tick:function(){this._timer=null;var b=Date.now();var e=(b-this._start)/(this._end-this._start),g=this,a=this._direction,c=this.get("layout"),d,f;
if(e<0){e=0}if(e>=1){this._complete();return this}f=Math.floor(c.height*e);if(a==SC.SheetPane.SLIDE_DOWN){g.adjust("top",0-(c.height-f))
}else{if(a==SC.SheetPane.SLIDE_UP){g.adjust("top",0-f)}}this._timer=this.invokeLater(this.tick,20);
g.updateLayout();return this}});SC.SheetPane.mixin({ANIMATABLE_AVAILABLE:NO,NO_VIEW:"NO_VIEW",ANIMATING:"ANIMATING",READY:"READY",SLIDE_DOWN:"SLIDEDOWN",SLIDE_UP:"SLIDEUP"});
SC.BaseTheme.renderers.Button=SC.Renderer.extend({controlSizeArray:[18,24,30,44],controlSizes:{18:SC.SMALL_CONTROL_SIZE,24:SC.REGULAR_CONTROL_SIZE,30:SC.HUGE_CONTROL_SIZE,44:SC.JUMBO_CONTROL_SIZE},init:function(a){this._controlRenderer=this.theme.control({controlSizes:this.controlSizes,controlSizeArray:this.controlSizeArray});
this._titleRenderer=this.theme.title();this.attr(a)},render:function(d){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
this._controlRenderer.render(d);var a,b,c,e;if(this.isAnchor){a=this.href;if(!a||(a.length===0)){a="javascript:;"
}d.attr("href",a)}b=this.toolTip;if(SC.typeOf(b)===SC.T_STRING){d.attr("title",b);
d.attr("alt",b)}c=this._TEMPORARY_CLASS_HASH?this._TEMPORARY_CLASS_HASH:this._TEMPORARY_CLASS_HASH={};
c.def=this.isDefault;c.cancel=this.isCancel;c.icon=!!this.icon;d.attr("role","button").setClass(c);
e=this.oldButtonTheme;if(e){d.addClass(e)}this.renderContents(d)},renderContents:function(a){var b=(this.titleMinWidth?"style='min-width: "+this.titleMinWidth+"px'":"");
a=a.push("<span class='sc-button-inner' "+b+">");a=a.begin("label").addClass("sc-button-label");
this._titleRenderer.render(a);a=a.end();a.push("</span>");if(this.supportFocusRing){a.push('<div class="focus-ring">','<div class="focus-left"></div>','<div class="focus-middle"></div>','<div class="focus-right"></div></div>')
}},update:function(){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
this._controlRenderer.update();var a,c,b=this.$();a=this._TEMPORARY_CLASS_HASH?this._TEMPORARY_CLASS_HASH:this._TEMPORARY_CLASS_HASH={};
a.def=this.isDefault;a.cancel=this.isCancel;a.icon=!!this.icon;b.setClass(a);this.updateContents()
},updateContents:function(){this._titleRenderer.update()},focus:function(){var a=this.$()[0];
a.focus()},didAttachLayer:function(a){this._titleRenderer.attachLayer(this.provide("label"));
this._controlRenderer.attachLayer(a)},willDetachLayer:function(){this._titleRenderer.detachLayer();
this._controlRenderer.detachLayer()}});SC.BaseTheme.renderers.button=SC.BaseTheme.renderers.Button.create();
SC.BaseTheme.renderers.Checkbox=SC.Renderer.extend({classNames:{"sc-checkbox":YES},controlSizeArray:[14,16],controlSizes:{14:SC.SMALL_CONTROL_SIZE,16:SC.REGULAR_CONTROL_SIZE},init:function(a){this._controlRenderer=this.theme.control({controlSizes:this.controlSizes,controlSizeArray:this.controlSizeArray});
this.attr(a)},render:function(a){arguments.callee.base.apply(this,arguments);this.renderControlRenderer(a);
a.attr("role","checkbox");if(SC.browser.msie){a.attr("for",this.guid)}a.attr("name",this.name);
a.attr("aria-checked",this.ariaValue);a.push('<span class="button"></span>');this.resetChanges()
},update:function(){arguments.callee.base.apply(this,arguments);this.updateControlRenderer();
if(this.didChange("ariaValue")){this.$().attr("aria-checked",this.ariaValue)}this.resetChanges()
},renderControlRenderer:function(a){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.render(a)},updateControlRenderer:function(){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.update()},didAttachLayer:function(a){this._controlRenderer.attachLayer(a)
},willDetachLayer:function(){this._controlRenderer.detachLayer()}});SC.BaseTheme.renderers.checkbox=SC.BaseTheme.renderers.Checkbox.create();
SC.BaseTheme.renderers.CheckboxControl=SC.Renderer.extend({classNames:{"sc-checkbox-control":YES},init:function(a){this._checkboxRenderer=this.theme.checkbox();
this._titleRenderer=this.theme.title();this.attr(a)},render:function(a){arguments.callee.base.apply(this,arguments);
this.renderCheckboxRenderer(a);this.renderTitleRenderer(a);this.resetChanges()},update:function(){arguments.callee.base.apply(this,arguments);
this.updateCheckboxRenderer();this.updateTitleRenderer();this.resetChanges()},renderCheckboxRenderer:function(a){this._checkboxRenderer.attr({ariaValue:this.ariaValue,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected,controlSize:this.controlSize,name:this.name});
this._checkboxRenderer.render(a)},updateCheckboxRenderer:function(){this._checkboxRenderer.attr({ariaValue:this.ariaValue,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected,controlSize:this.controlSize,name:this.name});
this._checkboxRenderer.update()},renderTitleRenderer:function(a){this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
a=a.begin("span").addClass("label");this._titleRenderer.render(a);a=a.end()},updateTitleRenderer:function(){this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
this._titleRenderer.update()},didAttachLayer:function(a){this._checkboxRenderer.attachLayer(a);
this._titleRenderer.attachLayer(this.provide("span.label"))},willDetachLayer:function(){this._checkboxRenderer.detachLayer();
this._titleRenderer.detachLayer()}});SC.BaseTheme.renderers.checkboxControl=SC.BaseTheme.renderers.CheckboxControl.create();
SC.BaseTheme.renderers.Disclosure=SC.Renderer.extend({classNames:{"sc-disclosure":YES},init:function(a){this._controlRenderer=this.theme.control();
this.attr(a)},render:function(a){arguments.callee.base.apply(this,arguments);this.renderControlRenderer(a);
var b=this.state?"open":"closed";a.push('<img src="'+SC.BLANK_IMAGE_URL+'" class="disclosure button '+b+'" />')
},update:function(a){arguments.callee.base.apply(this,arguments);this.updateControlRenderer();
var c=this.state,b=this.$("img");b.setClass("open",c);b.setClass("closed",!c);b.setClass("active",this.isActive)
},renderControlRenderer:function(a){this._controlRenderer.attr({controlSize:this.controlSize,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected});
this._controlRenderer.render(a)},updateControlRenderer:function(){this._controlRenderer.attr({controlSize:this.controlSize,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected});
this._controlRenderer.update()},focus:function(){var a=this.$()[0];a.focus()},didAttachLayer:function(a){this._controlRenderer.attachLayer(a)
},willDetachLayer:function(){this._controlRenderer.detachLayer()}});SC.BaseTheme.renderers.disclosure=SC.BaseTheme.renderers.Disclosure.create();
SC.BaseTheme.renderers.DisclosureControl=SC.Renderer.extend({classNames:{"sc-disclosure-control":YES},init:function(a){this._disclosureRenderer=this.theme.disclosure();
this._titleRenderer=this.theme.title();this.attr(a)},render:function(a){arguments.callee.base.apply(this,arguments);
this.renderDisclosureRenderer(a);this.renderTitleRenderer(a)},update:function(a){arguments.callee.base.apply(this,arguments);
this.updateDisclosureRenderer();this.updateTitleRenderer()},renderTitleRenderer:function(a){this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
a=a.begin("span").addClass("sc-button-label");this._titleRenderer.render(a);a=a.end()
},updateTitleRenderer:function(){this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
this._titleRenderer.update()},renderDisclosureRenderer:function(a){this._disclosureRenderer.attr({controlSize:this.controlSize,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected,state:this.state});
this._disclosureRenderer.render(a)},updateDisclosureRenderer:function(){this._disclosureRenderer.attr({controlSize:this.controlSize,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected,state:this.state});
this._disclosureRenderer.update()},focus:function(){var a=this.$()[0];a.focus()},didAttachLayer:function(a){this._disclosureRenderer.attachLayer(a);
this._titleRenderer.attachLayer(this.provide("span.sc-button-label"))},willDetachLayer:function(){this._disclosureRenderer.detachLayer();
this._titleRenderer.detachLayer()}});SC.BaseTheme.renderers.disclosureControl=SC.BaseTheme.renderers.DisclosureControl.create();
SC.BaseTheme.renderers.ImageButton=SC.Renderer.extend({render:function(a){var b=this.icon;
a.addClass("no-min-width");if(b){a.push("<div class='img "+b+"'></div>")}else{a.push("<div class='img'></div>")
}},update:function(){var a=this.$("img"),b=this.icon;if(b){a.attr("class","img "+b)
}else{a.attr("class","img")}}});SC.BaseTheme.renderers.imageButton=SC.BaseTheme.renderers.ImageButton.create();
SC.LIST_ITEM_COUNT_DIGITS=["zero","one","two","three","four","five"];SC.BaseTheme.renderers.ListItem=SC.Renderer.extend({init:function(a){this._controlRenderer=this.theme.control();
this.attr(a)},render:function(b){var a=this.outlineIndent,c=this.outlineLevel;this.renderControlRenderer(b);
b.setClass(this.calculateClassNames());b=b.begin("div").addClass("sc-outline");if(c>=0&&a>0){b.addStyle("left",a*(c+1))
}this.renderDisclosure(b);this.renderCheckbox(b);this.renderIcon(b);this.renderLabel(b);
this.renderRightIcon(b);this.renderCount(b);this.renderBranch(b);b=b.end();this.resetChanges()
},update:function(){this.updateControlRenderer();this.$().setClass(this.calculateClassNames());
this.updateDisclosure();this.updateCheckbox();this.updateIcon();this.updateLabel();
this.updateRightIcon();this.updateCount();this.updateBranch();this.resetChanges()
},didAttachLayer:function(a){this._controlRenderer.attachLayer(a);if(this._disclosureRenderer){this._disclosureRenderer.attachLayer(this.provide(".sc-disclosure-view"))
}if(this._checkboxRenderer){this._checkboxRenderer.attachLayer(this.provide(".sc-checkbox-view"))
}},willDetachLayer:function(){this._controlRenderer.detachLayer();if(this._disclosureRenderer){this._disclosureRenderer.detachLayer()
}if(this._checkboxRenderer){this._checkboxRenderer.detachLayer()}},calculateClassNames:function(){var f=this.classNames,d=SC.LIST_ITEM_COUNT_DIGITS,e=this.contentIndex%2===0,a,b,g;
f.even=e;f.odd=!e;f.disabled=!SC.none(this.isEnabled)&&!this.isEnabled;f["has-disclosure"]=!SC.none(this.disclosureState);
f["has-checkbox"]=!SC.none(this.checkbox);f["has-icon"]=!SC.none(this.icon);f["has-right-icon"]=!SC.none(this.rightIcon);
f["has-branch"]=!SC.none(this.branch);a=d.length;if(this.count){f["has-count"]=YES;
var c=this.count.toString().length;g=(c<a)?d[c]:d[a-1]}else{f["has-count"]=NO}for(b=0;
b<a;b++){f[d[b]+"-digit"]=d[b]===g}this.classNames=f;return f},renderControlRenderer:function(a){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.render(a)},updateControlRenderer:function(){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.update()},renderDisclosure:function(a){var c=this.disclosureState,b;
if(!SC.none(c)){if(!(b=this._disclosureRenderer)){b=this._disclosureRenderer=this.theme.disclosure()
}b.attr({isActive:this.disclosureActive||NO,isEnabled:this.isEnabled,isSelected:c,state:c});
a=a.begin("div").addClass("sc-disclosure-view");b.render(a);a=a.end()}},renderDisclosureViaQuery:function(){var a=SC.RenderContext();
this.renderDisclosure(a);this.applyContextToLayer(a,this.$(".sc-outline"));this._disclosureRenderer.attachLayer(this.provide(".sc-disclosure-view"))
},updateDisclosure:function(){var b,a=NO;if(this.didChange("disclosureState")){if(!(b=this._disclosureRenderer)){b=this._disclosureRenderer=this.theme.disclosure();
a=YES}b.attr({isActive:this.disclosureActive||NO,isEnabled:this.isEnabled,isSelected:this.disclosureState,state:this.disclosureState});
if(!SC.none(this.disclosureState)){if(!a){b.update()}else{this.renderDisclosureViaQuery()
}}else{if(!a){this._disclosureRenderer.detachLayer();this.$(".sc-disclosure-view").remove();
this._disclosureRenderer=null}}}},renderCheckbox:function(a){var c=this.checkbox,b;
if(!SC.none(c)){if(!(b=this._checkboxRenderer)){b=this._checkboxRenderer=this.theme.checkbox()
}b.attr({ariaValue:c?"true":"false",isActive:this.checkboxActive||NO,isEnabled:this.isEnabled&&this.contentIsEditable,isSelected:c,name:SC.guidFor(this)});
a=a.begin("div").addClass("sc-checkbox-view");b.render(a);a=a.end()}},renderCheckboxViaQuery:function(){var a=SC.RenderContext();
this.renderCheckbox(a);this.applyContextToLayer(a,this.$(".sc-outline"));this._checkboxRenderer.attachLayer(this.provide(".sc-checkbox-view"))
},updateCheckbox:function(b){var c,a=NO;if(!this.didChange("checkbox")&&!this.didChange("checkboxActive")){return
}if(!(c=this._checkboxRenderer)){c=this._checkboxRenderer=this.theme.checkbox();a=YES
}c.attr({ariaValue:this.checkbox?"true":"false",isActive:this.checkboxActive||NO,isEnabled:this.isEnabled&&this.contentIsEditable,isSelected:this.checkbox,name:SC.guidFor(this)});
if(!SC.none(this.checkbox)){if(!a){c.update()}else{this.renderCheckboxViaQuery()}}else{if(!a){this._checkboxRenderer.detachLayer();
this.$(".sc-checkbox-view").remove();this._checkboxRenderer=null}}},renderIcon:function(d,f,b){f=f||this.icon;
if(f){var c=null,e=null,a=[];if(f&&SC.ImageView.valueIsUrl(f)){e="";c=f}else{e=f;
c=SC.BLANK_IMAGE_URL}a.push(e,b||"icon");d.begin("img").addClass(a).attr("src",c).end()
}},updateIcon:function(a){},renderLabel:function(b){var a=this.escapeHTML?SC.RenderContext.escapeHTML(this.label):this.label;
b.push("<label>",a,"</label>")},updateLabel:function(){var a=this.escapeHTML?SC.RenderContext.escapeHTML(this.label):this.label;
this.$("label")[0].innerHTML=a},renderRightIcon:function(a){if(this.rightIcon){this.renderIcon(a,this.rightIcon,"right-icon")
}},updateRightIcon:function(){if(this.rightIcon){this.updateIcon(this.rightIcon,"right-icon")
}},renderCount:function(a){var b=this.count;if(!SC.none(b)&&(b!==0)){a.push('<span class="count"><span class="inner">',b.toString(),"</span></span>")
}},updateCount:function(){var a=this.count,b=this.$(".count");if(!SC.none(a)&&(a!==0)){b.find(".inner").text(a.toString())
}else{if(b.size()>0){b[0].parentNode.removeChild(b[0])}}},renderBranch:function(a){var b=this.branch;
if(!SC.none(b)){a.push('<span class="branch '+(b?"branch-visible":"branch-hidden")+'">&nbsp;</span>')
}},updateBranch:function(){var a=this.branch;if(!SC.none(a)){var b=this.$("span.branch");
b.setClass("branch-visible",a);b.setClass("branch-hidden",!a)}}});SC.BaseTheme.renderers.listItem=SC.BaseTheme.renderers.ListItem.create();
SC.BaseTheme.renderers.MasterDetail=SC.Renderer.extend({BORDER:1,render:function(a){if(this.contentProvider){this.contentProvider.renderContent(a)
}},update:function(){}});SC.BaseTheme.renderers.masterDetail=SC.BaseTheme.renderers.MasterDetail.create();
SC.BaseTheme.renderers.Panel=SC.Renderer.extend({render:function(a){if(this.contentProvider){this.contentProvider.renderContent(a)
}a.push("<div class='middle'></div>","<div class='top-left-edge'></div>","<div class='top-edge'></div>","<div class='top-right-edge'></div>","<div class='right-edge'></div>","<div class='bottom-right-edge'></div>","<div class='bottom-edge'></div>","<div class='bottom-left-edge'></div>","<div class='left-edge'></div>")
},update:function(){}});SC.BaseTheme.renderers.panel=SC.BaseTheme.renderers.Panel.create();
SC.BaseTheme.renderers.Picker=SC.Renderer.extend({init:function(a){this.attr(a);this.panelRenderer=this.theme.panel()
},render:function(a){this.panelRenderer.attr("contentProvider",this.contentProvider);
this.panelRenderer.render(a);if(this.preferType==SC.PICKER_POINTER||this.preferType==SC.PICKER_MENU_POINTER){a.push('<div class="sc-pointer '+this.pointerPos+'" style="margin-top: '+this.pointerPosY+'px"></div>');
a.addClass(this.pointerPos)}},update:function(){this.panelRenderer.attr("contentProvider",this.contentProvider);
this.panelRenderer.update();if(this.preferType==SC.PICKER_POINTER||this.preferType==SC.PICKER_MENU_POINTER){var a=this.$(".sc-pointer");
a.attr("class","sc-pointer "+this.pointerPos);a.attr("style","margin-top: "+this.pointerPosY+"px");
this.$().addClass(this.pointerPos)}},didAttachLayer:function(a){this.panelRenderer.attachLayer(a)
},willDetachLayer:function(){this.panelRenderer.detachLayer()}});SC.BaseTheme.renderers.picker=SC.BaseTheme.renderers.Picker.create();
SC.BaseTheme.renderers.Segment=SC.Renderer.extend({init:function(a){this._buttonRenderer=this.theme.button();
this.attr(a)},updateButtonRenderer:function(){this._buttonRenderer.attr({title:this.title,icon:this.icon,toolTip:this.toolTip,isEnabled:this.isEnabled,isSelected:this.isSelected,isActive:this.isActive,controlSize:this.controlSize})
},computeClasses:function(){var a=this._class_hash||{};a["sc-first-segment"]=this.isFirstSegment;
a["sc-middle-segment"]=this.isMiddleSegment;a["sc-last-segment"]=this.isLastSegment;
a["sc-segment"]=YES;this._class_hash=a;return a},render:function(a){this.updateButtonRenderer();
this._buttonRenderer.render(a);a.setClass(this.computeClasses());if(this.width){a.addStyle("width",this.width+"px")
}if(this.layoutDirection===SC.LAYOUT_HORIZONTAL){a.addStyle("display","inline-block")
}this.resetChanges()},update:function(){if(!this.hasChanges()){return}this.updateButtonRenderer();
this._buttonRenderer.update();this.$().setClass(this.computeClasses());if(this.didChange("width")){this.$().css("width",this.width?this.width+"px":"")
}if(this.didChange("layoutDirection")){this.$().css("display",this.layoutDirection==SC.LAYOUT_HORIZONTAL?"inline-block":"")
}this.resetChanges()},didAttachLayer:function(a){this._buttonRenderer.attachLayer(a)
},willDetachLayer:function(){this._buttonRenderer.detachLayer()}});SC.BaseTheme.renderers.segment=SC.BaseTheme.renderers.Segment.create();
SC.BaseTheme.renderers.Segmented=SC.Renderer.extend({controlSizeArray:[18,24,30,44],controlSizes:{18:SC.SMALL_CONTROL_SIZE,24:SC.REGULAR_CONTROL_SIZE,30:SC.HUGE_CONTROL_SIZE,44:SC.JUMBO_CONTROL_SIZE},init:function(a){this._controlRenderer=this.theme.control({controlSizes:this.controlSizes,controlSizeArray:this.controlSizeArray});
this._segments=[];this.attr(a)},render:function(e){var d=this.segments,b,a,c=[],h=this._segments,f,g;
this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.render(e);for(b=0,a=h.length;b<a;b++){h[b].detachLayer()}for(b=0,a=d.length;
b<a;b++){f=d[b];e=e.begin("a");e.addClass("segment-"+b);if(h.length>b){g=h[b]}else{g=this.theme.segment()
}g.attr(f);g.attr("layoutDirection",this.layoutDirection);g.attr("isFirstSegment",b===0);
g.attr("isLastSegment",b===a-1);g.attr("isMiddleSegment",b<a-1&&b>0);g.attr("controlSize",this.controlSize);
g.render(e);e=e.end();c.push(g);g.attachLayer(this.provide(".segment-"+b))}this._segments=c
},update:function(){if(this._segments.length!==this.segments.length){var f=this.layer();
if(!f){return}var e=SC.RenderContext(f);this.render(e);e.update();return}var d=this.segments,b,a=d.length,c=this._segments,g,h;
this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.update();for(b=0;b<a;b++){g=d[b];h=c[b];h.attr(g);h.attr("layoutDirection",this.layoutDirection);
h.attr("controlSize",this.controlSize);h.update()}},didAttachLayer:function(d){var c=this._segments,e,b,a=c.length;
this._controlRenderer.attachLayer(d);for(b=0;b<a;b++){e=c[b];e.attachLayer(this.provide(".segment-"+b))
}},willDetachLayer:function(){var c=this._segments,d,b,a=c.length;this._controlRenderer.detachLayer();
for(b=0;b<a;b++){c[b].detachLayer()}},indexForEvent:function(c){var f=c.pageX,e=c.pageY;
var d=this.$(".sc-segment"),b=d.length,a,h,g;for(a=0;a<b;a++){h=d[a];g=h.getBoundingClientRect();
if(this.layoutDirection==SC.LAYOUT_VERTICAL){if(e>g.top&&e<g.bottom){return a}}else{if(f>g.left&&f<g.right){return a
}}}return -1}});SC.BaseTheme.renderers.segmented=SC.BaseTheme.renderers.Segmented.create();
SC.BaseTheme.renderers.Slider=SC.Renderer.extend({controlSizeArray:[14,16,22],controlSizes:{14:SC.SMALL_CONTROL_SIZE,16:SC.REGULAR_CONTROL_SIZE,22:SC.JUMBO_CONTROL_SIZE},init:function(a){this._controlRenderer=this.theme.control({controlSizes:this.controlSizes,controlSizeArray:this.controlSizeArray});
this.attr(a)},render:function(a){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.render(a);this.renderSlider(a);this.resetChanges()},renderSlider:function(b){var a=SC.BLANK_IMAGE_URL;
b.push('<span class="sc-inner">','<span class="sc-leftcap"></span>','<span class="sc-rightcap"></span>','<img src="',a,'" class="sc-handle" style="left: ',this.value,'%" />',"</span>")
},update:function(){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.update();this.updateSlider();this.resetChanges()},updateSlider:function(){if(this.didChange("value")){this.$(".sc-handle").css("left",this.value+"%")
}},focus:function(){var a=this.$()[0];a.focus()},didAttachLayer:function(a){this._controlRenderer.attachLayer(a)
},willDetachLayer:function(){this._controlRenderer.detachLayer()}});SC.BaseTheme.renderers.slider=SC.BaseTheme.renderers.Slider.create();
SC.BaseTheme.renderers.Workspace=SC.Renderer.extend({render:function(a){if(this.contentProvider){this.contentProvider.renderContent(a)
}},update:function(){}});SC.BaseTheme.renderers.workspace=SC.BaseTheme.renderers.Workspace.create();
SC.DRAG_LINK=4;SC.DRAG_COPY=1;SC.DRAG_MOVE=2;SC.DRAG_NONE=0;SC.DRAG_ANY=7;SC.DRAG_AUTOSCROLL_ZONE_THICKNESS=20;
SC.Drag=SC.Object.extend({source:null,ghostView:null,ghostActsLikeCursor:NO,dragView:null,ghost:YES,slideBack:YES,ghostOffset:{x:0,y:0},location:{},dataTypes:function(){if(this.dataSource){return this.dataSource.get("dragDataTypes")||[]
}var d=this.data;if(d){var a=[];for(var b in d){if(d.hasOwnProperty(b)){a.push(b)
}}return a}var c=this.get("source");if(c&&c.dragDataTypes){return c.get("dragDataTypes")||[]
}return[]}.property().cacheable(),hasDataType:function(a){return(this.get("dataTypes").indexOf(a)>=0)
},dataForType:function(a){if(this.dataSource){return this.dataSource.dragDataForType(this,a)
}else{if(this.data){return this.data[a]}else{var b=this.get("source");if(b&&SC.typeOf(b.dragDataForType)==SC.T_FUNCTION){return b.dragDataForType(this,a)
}else{return null}}}},dataSource:null,data:null,allowedDragOperations:SC.DRAG_ANY,_dragInProgress:YES,_dragViewWasVisible:null,startDrag:function(){this._createGhostView();
var h=this.event;var e={x:h.pageX,y:h.pageY};this.set("location",e);var b=this._getDragView();
var i=b.get("parentView");var g=i?i.convertFrameToView(b.get("frame"),null):b.get("frame");
if(this.get("ghost")){this._dragViewWasVisible=b.get("isVisible");b.set("isVisible",NO)
}if(this.ghostActsLikeCursor){this.ghostOffset={x:14,y:14}}else{this.ghostOffset={x:(e.x-g.x),y:(e.y-g.y)}
}if(!this._ghostViewHidden){this._positionGhostView(h)}if(h.makeTouchResponder){var j=this;
SC.Timer.schedule({target:h,action:function(){if(!h.hasEnded){h.makeTouchResponder(j,YES)
}},interval:1})}else{this.ghostView.rootResponder.dragDidStart(this,h)}var a=this.source;
if(a&&a.dragDidBegin){a.dragDidBegin(this,e)}var c=this._dropTargets();for(var f=0,d=c.length;
f<d;f++){c[f].tryToPerform("dragStarted",this,h)}},touchStart:function(a){return YES
},mouseDragged:function(a){var b=this._autoscroll(a);var f=this.get("location");if(!b&&(a.pageX===f.x)&&(a.pageY===f.y)){return
}f={x:a.pageX,y:a.pageY};this.set("location",f);var d=this.source;var c=this._lastTarget;
var e=this._findDropTarget(a);var g=SC.DRAG_NONE;while(e&&(e!==c)&&(g===SC.DRAG_NONE)){if(e&&d&&d.dragSourceOperationMaskFor){g=d.dragSourceOperationMaskFor(this,e)
}else{g=SC.DRAG_ANY}if((g!==SC.DRAG_NONE)&&e&&e.computeDragOperations){g=g&e.computeDragOperations(this,a,g)
}else{g=SC.DRAG_NONE}this.allowedDragOperations=g;if(g===SC.DRAG_NONE){e=this._findNextDropTarget(e)
}}if(e!==c){if(c&&c.dragExited){c.dragExited(this,a)}if(e){if(e.dragEntered){e.dragEntered(this,a)
}if(e.dragUpdated){e.dragUpdated(this,a)}}this._lastTarget=e}else{if(e&&e.dragUpdated){e.dragUpdated(this,a)
}}if(d&&d.dragDidMove){d.dragDidMove(this,f)}if(!this._ghostViewHidden){this._positionGhostView(a)
}},touchesDragged:function(a){this.mouseDragged(a)},mouseUp:function(l){var g={x:l.pageX,y:l.pageY},h=this._lastTarget,d=this.allowedDragOperations;
this.set("location",g);try{if(h&&h.acceptDragOperation&&h.acceptDragOperation(this,d)){d=h.performDragOperation?h.performDragOperation(this,d):SC.DRAG_NONE
}else{d=SC.DRAG_NONE}}catch(i){console.error("Exception in SC.Drag.mouseUp(acceptDragOperation|performDragOperation): %@".fmt(i))
}try{if(h&&h.dragExited){h.dragExited(this,l)}}catch(j){console.error("Exception in SC.Drag.mouseUp(target.dragExited): %@".fmt(j))
}var c=this._dropTargets();for(var k=0,f=c.length;k<f;k++){try{c[k].tryToPerform("dragEnded",this,l)
}catch(b){console.error("Exception in SC.Drag.mouseUp(dragEnded on %@): %@".fmt(c[k],b))
}}this._destroyGhostView();if(this.get("ghost")){if(this._dragViewWasVisible){this._getDragView().set("isVisible",YES)
}this._dragViewWasVisible=null}var a=this.source;if(a&&a.dragDidEnd){a.dragDidEnd(this,g,d)
}this._lastTarget=null;this._dragInProgress=NO},touchEnd:function(a){this.mouseUp(a)
},_getDragView:function(){if(!this.dragView){if(!this.source||!this.source.isView){throw"Source can't be used as dragView, because it's not a view."
}this.dragView=this.source}return this.dragView},_createGhostView:function(){var c=this,b=this._getDragView(),d=b.get("frame"),a;
a=this.ghostView=SC.Pane.create({classNames:["sc-ghost-view"],layout:{top:d.y,left:d.x,width:d.width,height:d.height},owner:this,didCreateLayer:function(){if(b){var e=b.get("layer");
if(e){e=e.cloneNode(true);e.style.top="0px";e.style.left="0px";this.get("layer").appendChild(e)
}}}});a.append()},_positionGhostView:function(a){var c=this.get("location");c.x-=this.ghostOffset.x;
c.y-=this.ghostOffset.y;var b=this.ghostView;if(b){b.adjust({top:c.y,left:c.x});b.invokeOnce("updateLayout")
}},_ghostViewHidden:NO,hideGhostView:function(){if(this.ghostView&&!this._ghostViewHidden){this.ghostView.remove();
this._ghostViewHidden=YES}},unhideGhostView:function(){if(this._ghostViewHidden){this._ghostViewHidden=NO;
this._createGhostView()}},_destroyGhostView:function(){if(this.ghostView){this.ghostView.remove();
this.ghostView=null;this._ghostViewHidden=NO}},_dropTargets:function(){if(this._cachedDropTargets){return this._cachedDropTargets
}var b=[];var d=SC.Drag._dropTargets;for(var c in d){if(d.hasOwnProperty(c)){b.push(d[c])
}}var f={};var e=SC.Drag._dropTargets;var a=function(g){if(!g){return 0}var i=SC.guidFor(g);
var h=f[i];if(!h){h=1;while(g=g.get("parentView")){if(e[SC.guidFor(g)]!==undefined){h++
}}f[i]=h}return h};b.sort(function(h,g){if(h===g){return 0}h=a(h);g=a(g);return(h>g)?-1:1
});this._cachedDropTargets=b;return b},_findDropTarget:function(c){var g={x:c.pageX,y:c.pageY};
var e,f;var d=this._dropTargets();for(var b=0,a=d.length;b<a;b++){e=d[b];if(!e.get("isVisibleInWindow")){continue
}f=e.convertFrameToView(e.get("clippingFrame"),null);if(SC.pointInRect(g,f)){return e
}}return null},_findNextDropTarget:function(a){var b=SC.Drag._dropTargets;while(a=a.get("parentView")){if(b[SC.guidFor(a)]){return a
}}return null},_autoscroll:function(l){if(!l){l=this._lastAutoscrollEvent}if(!this._dragInProgress){return NO
}var g=l?{x:l.pageX,y:l.pageY}:this.get("location"),h=this._findScrollableView(g),m=null,k,c,d,i,b,a,e;
while(h&&!m){k=h.get("canScrollVertical")?1:0;c=h.get("canScrollHorizontal")?1:0;
if(k||c){a=h.get("containerView");if(a){e=h.convertFrameToView(a.get("frame"),null)
}else{k=c=0}}if(k){i=SC.maxY(e);d=i-SC.DRAG_AUTOSCROLL_ZONE_THICKNESS;if(g.y>=d&&g.y<=i){k=1
}else{d=SC.minY(e);i=d+SC.DRAG_AUTOSCROLL_ZONE_THICKNESS;if(g.y>=d&&g.y<=i){k=-1}else{k=0
}}}if(c){i=SC.maxX(e);d=i-SC.DRAG_AUTOSCROLL_ZONE_THICKNESS;if(g.x>=d&&g.x<=i){c=1
}else{d=SC.minX(e);i=d+SC.DRAG_AUTOSCROLL_ZONE_THICKNESS;if(g.x>=d&&g.x<=i){c=-1}else{c=0
}}}if(k||c){m=h}else{h=this._findNextScrollableView(h)}}if(m&&(this._lastScrollableView===m)){if((Date.now()-this._hotzoneStartTime)>100){this._horizontalScrollAmount*=1.05;
this._verticalScrollAmount*=1.05}}else{this._lastScrollableView=m;this._horizontalScrollAmount=15;
this._verticalScrollAmount=15;this._hotzoneStartTime=(m)?Date.now():null;c=k=0}if(m&&(c||k)){var j={x:c*this._horizontalScrollAmount,y:k*this._verticalScrollAmount};
m.scrollBy(j)}if(m){if(l){this._lastAutoscrollEvent={pageX:l.pageX,pageY:l.pageY}
}this.invokeLater(this._autoscroll,100,null);return YES}else{this._lastAutoscrollEvent=null;
return NO}},_scrollableViews:function(){if(this._cachedScrollableView){return this._cachedScrollableView
}var a=[];var c=SC.Drag._scrollableViews;for(var b in c){if(c.hasOwnProperty(b)){a.push(c[b])
}}a=a.sort(function(f,d){var e=f;while(e=e.get("parentView")){if(d==e){return -1}}return 1
});this._cachedScrollableView=a;return a},_findScrollableView:function(f){var c=this._scrollableViews(),b=c?c.length:0,d,e,a;
for(a=0;a<b;a++){d=c[a];if(!d.get("isVisibleInWindow")){continue}e=d.convertFrameToView(d.get("clippingFrame"),null);
if(SC.pointInRect(f,e)){return d}}return null},_findNextScrollableView:function(a){var b=SC.Drag._scrollableViews;
while(a=a.get("parentView")){if(b[SC.guidFor(a)]){return a}}return null}});SC.Drag.mixin({start:function(b){var a=this.create(b);
a.startDrag();return a},_dropTargets:{},_scrollableViews:{},addDropTarget:function(a){this._dropTargets[SC.guidFor(a)]=a
},removeDropTarget:function(a){delete this._dropTargets[SC.guidFor(a)]},addScrollableView:function(a){this._scrollableViews[SC.guidFor(a)]=a
},removeScrollableView:function(a){delete this._scrollableViews[SC.guidFor(a)]}});
SC.MODIFIED_KEY_BINDINGS={"ctrl_.":"cancel",shift_tab:"insertBacktab",shift_left:"moveLeftAndModifySelection",shift_right:"moveRightAndModifySelection",shift_up:"moveUpAndModifySelection",shift_down:"moveDownAndModifySelection",alt_left:"moveLeftAndModifySelection",alt_right:"moveRightAndModifySelection",alt_up:"moveUpAndModifySelection",alt_down:"moveDownAndModifySelection",ctrl_a:"selectAll"};
SC.BASE_KEY_BINDINGS={escape:"cancel",backspace:"deleteBackward","delete":"deleteForward","return":"insertNewline",tab:"insertTab",left:"moveLeft",right:"moveRight",up:"moveUp",down:"moveDown",home:"moveToBeginningOfDocument",end:"moveToEndOfDocument",pagedown:"pageDown",pageup:"pageUp"};
require("core");SC.UndoManager=SC.Object.extend({undoActionName:function(){return this.undoStack?this.undoStack.name:null
}.property("undoStack"),redoActionName:function(){return this.redoStack?this.redoStack.name:null
}.property("redoStack"),canUndo:function(){return this.undoStack!=null}.property("undoStack"),canRedo:function(){return this.redoStack!=null
}.property("redoStack"),undo:function(){this._undoOrRedo("undoStack","isUndoing")
},redo:function(){this._undoOrRedo("redoStack","isRedoing")},isUndoing:false,isRedoing:false,groupingLevel:0,registerUndo:function(b,a){this.beginUndoGroup(a);
this._activeGroup.actions.push(b);this.endUndoGroup(a)},beginUndoGroup:function(b){if(this._activeGroup){this.groupingLevel++
}else{var a=this.isUndoing?"redoStack":"undoStack";this._activeGroup={name:b,actions:[],prev:this.get(a)};
this.set(a,this._activeGroup);this.groupingLevel=1}},endUndoGroup:function(a){if(!this._activeGroup){raise("endUndoGroup() called outside group.")
}if(this.groupingLevel>1){this.groupingLevel--}else{this._activeGroup=null;this.groupingLevel=0
}this.propertyDidChange(this.isUndoing?"redoStack":"undoStack")},setActionName:function(a){if(!this._activeGroup){raise("setActionName() called outside group.")
}this._activeGroup.name=a},_activeGroup:null,undoStack:null,redoStack:null,_undoOrRedo:function(a,c){if(this._activeGroup){return false
}if(this.get(a)==null){return true}this.set(c,true);var e=this.get(a);this.set(a,e.prev);
var b;var d=e.actions.length>1;if(d){this.beginUndoGroup(e.name)}while(b=e.actions.pop()){b()
}if(d){this.endUndoGroup(e.name)}this.set(c,false)}});SC.CheckboxView=SC.ButtonView.extend(SC.StaticLayout,SC.Button,{classNames:["sc-checkbox-view","sc-checkbox-control"],tagName:"label",controlStyle:"",needsEllipsis:NO,routeTouch:NO,createRenderer:function(a){return a.checkboxControl()
},updateRenderer:function(a){var b=this.get("value");a.attr({title:this.get("displayTitle"),name:SC.guidFor(this),ariaValue:b===SC.MIXED_MODE?"mixed":(b===this.get("toggleOnValue")?"true":"false"),needsEllipsis:this.get("needsEllipsis"),escapeHTML:this.get("escapeHTML"),icon:this.get("icon")})
},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled"),mouseDown:function(a){if(!this.get("isEnabled")){return YES
}this.set("isActive",YES);this._isMouseDown=YES;if(a){a.allowDefault()}return YES
},mouseUp:function(a){if(!this.get("isEnabled")||(a&&a.target&&!this.$().within(a.target))){return YES
}var b=this.get("value");if(b===this.get("toggleOnValue")){this.renderer.attr("ariaValue","false");
this.renderer.update();this.set("value",this.get("toggleOffValue"))}else{this.renderer.attr("ariaValue","true");
this.renderer.update();this.set("value",this.get("toggleOnValue"))}this.set("isActive",NO);
this._isMouseDown=NO;return YES},touchStart:function(a){return this.mouseDown(a)},touchEnd:function(a){return this.mouseUp(a)
}});SC.LIST_ITEM_ACTION_CANCEL="sc-list-item-cancel-action";SC.LIST_ITEM_ACTION_REFRESH="sc-list-item-cancel-refresh";
SC.LIST_ITEM_ACTION_EJECT="sc-list-item-cancel-eject";SC.ListItemView=SC.View.extend(SC.StaticLayout,SC.Control,{classNames:["sc-list-item-view"],displayProperties:["disclosureState","escapeHTML"],init:function(){arguments.callee.base.apply(this,arguments);
if(this.render!==SC.View.prototype.render){this.render.base=this.__DEPRECATED__render
}},content:null,hasContentIcon:NO,hasContentRightIcon:NO,hasContentBranch:NO,contentCheckboxKey:null,icon:null,contentIconKey:null,rightIcon:null,contentRightIconKey:null,contentValueKey:null,escapeHTML:YES,contentUnreadCountKey:null,contentIsBranchKey:null,isEditing:NO,outlineIndent:16,outlineLevel:0,disclosureState:SC.LEAF_NODE,validator:null,contentPropertyDidChange:function(){if(this.get("contentIsEditable")!==this.contentIsEditable()){this.notifyPropertyChange("contentIsEditable")
}this.displayDidChange()},contentIsEditable:function(){var a=this.get("content");
return a&&(a.get?a.get("isEditable")!==NO:NO)}.property("content").cacheable(),createRenderer:function(b){var a=b.listItem();
this.updateRenderer(a);return a},updateRenderer:function(f){var d=this.get("content"),a=this.displayDelegate,c,e;
var b={contentIndex:this.get("contentIndex"),contentIsEditable:this.get("contentIsEditable"),escapeHTML:this.get("escapeHTML"),isEnabled:this.get("isEnabled"),outlineIndent:this.get("outlineIndent"),outlineLevel:this.get("outlineLevel")};
e=this.get("disclosureState");if(e!==SC.LEAF_NODE){b.disclosureState=e===SC.BRANCH_OPEN?YES:NO
}else{b.disclosureState=null}if(c=this.getDelegateProperty("contentCheckboxKey",a)){e=d?(d.get?d.get(c):d[c]):NO;
b.checkbox=e}if(this.getDelegateProperty("hasContentIcon",a)){c=this.getDelegateProperty("contentIconKey",a);
e=(c&&d)?(d.get?d.get(c):d[c]):null;b.icon=e}else{if(!SC.none(this.icon)){b.icon=this.get("icon")
}}c=this.getDelegateProperty("contentValueKey",a);e=(c&&d)?(d.get?d.get(c):d[c]):d;
if(e&&SC.typeOf(e)!==SC.T_STRING){e=e.toString()}b.label=e;if(this.getDelegateProperty("hasContentRightIcon",a)){c=this.getDelegateProperty("contentRightIconKey",a);
e=(c&&d)?(d.get?d.get(c):d[c]):null;b.rightIcon=e}else{if(!SC.none(this.rightIcon)){b.rightIcon=this.get("rightIcon")
}}c=this.getDelegateProperty("contentUnreadCountKey",a);e=(c&&d)?(d.get?d.get(c):d[c]):null;
b.count=e;if(this.getDelegateProperty("hasContentBranch",a)){c=this.getDelegateProperty("contentIsBranchKey",a);
e=(c&&d)?(d.get?d.get(c):d[c]):NO;b.branch=e}f.attr(b)},$label:function(){return this.$("label")
},renderAction:function(a,b){a.push('<img src="',SC.BLANK_IMAGE_URL,'" class="action" />')
},_isInsideElementWithClassName:function(e,a){var c=this.get("layer");if(!c){return NO
}var d=SC.$(a.target);var b=NO,f;while(!b&&d.length>0&&(d[0]!==c)){if(d.hasClass(e)){b=YES
}d=d.parent()}d=c=null;return b},_isInsideCheckbox:function(b){var a=this.displayDelegate;
var c=this.getDelegateProperty("contentCheckboxKey",a);return c&&this._isInsideElementWithClassName("sc-checkbox-view",b)
},_isInsideDisclosure:function(a){if(this.get("disclosureState")===SC.LEAF_NODE){return NO
}return this._isInsideElementWithClassName("disclosure",a)},_isInsideRightIcon:function(c){var b=this.displayDelegate;
var a=this.getDelegateProperty("hasContentRightIcon",b);return a&&this._isInsideElementWithClassName("right-icon",c)
},mouseDown:function(a){if(!this.get("contentIsEditable")){return NO}if(this._isInsideCheckbox(a)){this._addCheckboxActiveState();
this._isMouseDownOnCheckbox=YES;this._isMouseInsideCheckbox=YES;return YES}else{if(this._isInsideDisclosure(a)){this._addDisclosureActiveState();
this._isMouseDownOnDisclosure=YES;this._isMouseInsideDisclosure=YES;return YES}else{if(this._isInsideRightIcon(a)){this._addRightIconActiveState();
this._isMouseDownOnRightIcon=YES;this._isMouseInsideRightIcon=YES;return YES}}}return NO
},mouseUp:function(h){var c=NO,i,d,b,a,g,f;if(this._isMouseDownOnCheckbox){if(this._isInsideCheckbox(h)){i=this.displayDelegate;
d=this.getDelegateProperty("contentCheckboxKey",i);b=this.get("content");if(b&&b.get){var e=b.get(d);
e=(e===SC.MIXED_STATE)?YES:!e;b.set(d,e);this.displayDidChange()}}this._removeCheckboxActiveState();
c=YES}else{if(this._isMouseDownOnDisclosure){if(this._isInsideDisclosure(h)){a=this.get("disclosureState");
g=this.get("contentIndex");f=(!SC.none(g))?SC.IndexSet.create(g):null;i=this.get("displayDelegate");
if(a===SC.BRANCH_OPEN){if(f&&i&&i.collapse){i.collapse(f)}else{this.set("disclosureState",SC.BRANCH_CLOSED)
}this.displayDidChange()}else{if(a===SC.BRANCH_CLOSED){if(f&&i&&i.expand){i.expand(f)
}else{this.set("disclosureState",SC.BRANCH_OPEN)}this.displayDidChange()}}}this._removeDisclosureActiveState();
c=YES}else{if(this._isMouseDownOnRightIcon){this._removeRightIconActiveState();c=YES
}}}this._isMouseInsideCheckbox=this._isMouseDownOnCheckbox=NO;this._isMouseDownOnDisclosure=this._isMouseInsideDisclosure=NO;
this._isMouseInsideRightIcon=this._isMouseDownOnRightIcon=NO;return c},mouseMoved:function(a){if(this._isMouseDownOnCheckbox&&this._isInsideCheckbox(a)){this._addCheckboxActiveState();
this._isMouseInsideCheckbox=YES}else{if(this._isMouseDownOnCheckbox){this._removeCheckboxActiveState();
this._isMouseInsideCheckbox=NO}else{if(this._isMouseDownOnDisclosure&&this._isInsideDisclosure(a)){this._addDisclosureActiveState();
this._isMouseInsideDisclosure=YES}else{if(this._isMouseDownOnDisclosure){this._removeDisclosureActiveState();
this._isMouseInsideDisclosure=NO}else{if(this._isMouseDownOnRightIcon&&this._isInsideRightIcon(a)){this._addRightIconActiveState();
this._isMouseInsideRightIcon=YES}else{if(this._isMouseDownOnRightIcon){this._removeRightIconActiveState();
this._isMouseInsideRightIcon=NO}}}}}}return NO},touchStart:function(a){return this.mouseDown(a)
},touchEnd:function(a){return this.mouseUp(a)},touchEntered:function(a){return this.mouseEntered(a)
},touchExited:function(a){return this.mouseExited(a)},_addCheckboxActiveState:function(){if(this.get("isEnabled")){this.renderer.attr({checkboxActive:YES});
this.displayDidChange()}},_removeCheckboxActiveState:function(){this.renderer.attr({checkboxActive:NO});
this.displayDidChange()},_addDisclosureActiveState:function(){if(this.get("isEnabled")){this.renderer.attr({disclosureActive:YES});
this.displayDidChange()}},_removeDisclosureActiveState:function(){this.renderer.attr({disclosureActive:NO});
this.displayDidChange()},_addRightIconActiveState:function(){this.$("img.right-icon").setClass("active",YES)
},_removeRightIconActiveState:function(){this.$("img.right-icon").removeClass("active")
},contentHitTest:function(b){var a=this.displayDelegate;var c=this.getDelegateProperty("contentValueKey",a);
if(!c){return NO}var e=this.$label()[0];if(!e){return NO}var f=b.target,d=this.get("layer");
while(f&&(f!==d)&&(f!==window)){if(f===e){return YES}f=f.parentNode}return NO},beginEditing:function(){if(this.get("isEditing")){return YES
}return this._beginEditing(YES)},_beginEditing:function(u){var p=this.get("content"),h=this.get("displayDelegate"),g=this.getDelegateProperty("contentValueKey",h),i=this.get("parentView"),t=i?i.get("frame"):null,a=this.$label(),d=this.get("validator"),r,k,e,l,b,n,c,o,s,q,w;
if(u&&this.scrollToVisible()){var j=this.get("owner"),m=this.get("contentIndex");
this.invokeLast(function(){var f=j.itemViewForContentIndex(m);if(f&&f._beginEditing){f._beginEditing(NO)
}});return YES}if(!i||!a||a.get("length")===0){return NO}k=(g&&p&&p.get)?p.get(g):null;
r=this.computeFrameWithParentFrame(null);e=SC.viewportOffset(a[0]);l=a.css("lineHeight");
b=a.css("fontSize");n=this.$().css("top");if(n){n=parseInt(n.substring(0,n.length-2),0)
}else{n=0}c=l;s=0;if(b&&c){q=b*1.5;if(q<c){a.css({lineHeight:"1.5"});s=(c-q)/2}else{l=null
}}r.x=e.x;r.y=e.y+n+s;r.height=a[0].offsetHeight;r.width=a[0].offsetWidth;o=this.get("escapeHTML");
w=SC.InlineTextFieldView.beginEditing({frame:r,exampleElement:a,delegate:this,value:k,multiline:NO,isCollection:YES,validator:d,escapeHTML:o});
if(l){a.css({lineHeight:l})}return w},commitEditing:function(){if(!this.get("isEditing")){return YES
}return SC.InlineTextFieldView.commitEditing()},discardEditing:function(){if(!this.get("isEditing")){return YES
}return SC.InlineTextFieldView.discardEditing()},inlineEditorShouldBeginEditing:function(a){return YES
},inlineEditorWillBeginEditing:function(a){this.set("isEditing",YES)},inlineEditorDidBeginEditing:function(b){var a=this.$label();
this._oldOpacity=a.css("opacity");a.css("opacity",0)},inlineEditorShouldBeginEditing:function(a){return YES
},inlineEditorShouldBeginEditing:function(a,b){return YES},inlineEditorShouldEndEditing:function(a,b){return YES
},inlineEditorDidEndEditing:function(c,e){this.set("isEditing",NO);var d=this.get("content");
var a=this.displayDelegate;var b=this.getDelegateProperty("contentValueKey",a);if(b&&d&&d.set){d.set(b,e)
}this.displayDidChange()},deprecatedRenderWarning:function(){if(!SC.ListItemView._deprecatedRenderWarningHasBeenIssued){SC.ListItemView._deprecatedRenderWarningHasBeenIssued=true;
SC.Logger.warn("!!!DEPRECATED LIST ITEM RENDER METHODS BEING USED!!!\nQuilmes comes with a new Renderer system, please consider using it in your custom views to future-proof your application!")
}},__DEPRECATED__render:function(c,a){this.deprecatedRenderWarning();var f=this.get("content"),m=this.displayDelegate,b=this.get("outlineLevel"),e=this.get("outlineIndent"),l,j,i,n=[];
n.push((this.get("contentIndex")%2===0)?"even":"odd");c.setClass("disabled",!this.get("isEnabled"));
i=c.begin("div").addClass("sc-outline");if(b>=0&&e>0){i.addStyle("left",e*(b+1))}j=this.get("disclosureState");
if(j!==SC.LEAF_NODE){this.renderDisclosure(i,j);n.push("has-disclosure")}l=this.getDelegateProperty("contentCheckboxKey",m);
if(l){j=f?(f.get?f.get(l):f[l]):NO;this.renderCheckbox(i,j);n.push("has-checkbox")
}if(this.getDelegateProperty("hasContentIcon",m)){l=this.getDelegateProperty("contentIconKey",m);
j=(l&&f)?(f.get?f.get(l):f[l]):null;this.renderIcon(i,j);n.push("has-icon")}l=this.getDelegateProperty("contentValueKey",m);
j=(l&&f)?(f.get?f.get(l):f[l]):f;if(j&&SC.typeOf(j)!==SC.T_STRING){j=j.toString()
}if(this.get("escapeHTML")){j=SC.RenderContext.escapeHTML(j)}this.renderLabel(i,j);
if(this.getDelegateProperty("hasContentRightIcon",m)){l=this.getDelegateProperty("contentRightIconKey",m);
j=(l&&f)?(f.get?f.get(l):f[l]):null;this.renderRightIcon(i,j);n.push("has-right-icon")
}l=this.getDelegateProperty("contentUnreadCountKey",m);j=(l&&f)?(f.get?f.get(l):f[l]):null;
if(!SC.none(j)&&(j!==0)){this.renderCount(i,j);var d=["zero","one","two","three","four","five"];
var k=j.toString().length;var h=d.length;var g=(k<h)?d[k]:d[h-1];n.push("has-count "+g+"-digit")
}l=this.getDelegateProperty("listItemActionProperty",m);j=(l&&f)?(f.get?f.get(l):f[l]):null;
if(j){this.renderAction(i,j);n.push("has-action")}if(this.getDelegateProperty("hasContentBranch",m)){l=this.getDelegateProperty("contentIsBranchKey",m);
j=(l&&f)?(f.get?f.get(l):f[l]):NO;this.renderBranch(i,j);n.push("has-branch")}c.addClass(n);
c=i.end()},renderDisclosure:function(e,f){this.deprecatedRenderWarning();var d=(f===SC.BRANCH_OPEN)?"open":"closed",a=this._scli_disclosureHtml,c,b;
if(!a){a=this.constructor.prototype._scli_disclosureHtml={}}c=a[d];if(!c){c=a[d]='<img src="'+SC.BLANK_IMAGE_URL+'" class="disclosure button '+d+'" />'
}e.push(c)},renderCheckbox:function(f,h){this.deprecatedRenderWarning();var e=(h===SC.MIXED_STATE)?"mixed":h?"sel":"nosel",b=this._scli_checkboxHtml,g=this.get("contentIsEditable")&&this.get("isEnabled"),d,c,a=[];
if(!g){e=SC.keyFor("disabled",e)}if(!b){b=this.constructor.prototype._scli_checkboxHtml={}
}d=b[e];if(!d){c=SC.RenderContext("div").attr("role","button").classNames(SC.clone(SC.CheckboxView.prototype.classNames));
if(h===SC.MIXED_STATE){a.push("mixed")}else{if(h){a.push("sel")}}if(!g){a.push("disabled")
}c.addClass(a);c.push('<span class="button"></span>');d=b[e]=c.join()}f.push(d)},renderIcon:function(c,e){this.deprecatedRenderWarning();
var b=null,d=null,a=[];if(e&&SC.ImageView.valueIsUrl(e)){b=e;d=""}else{d=e;b=SC.BLANK_IMAGE_URL
}a.push(d,"icon");c.begin("img").addClass(a).attr("src",b).end()},renderLabel:function(b,a){this.deprecatedRenderWarning();
b.push("<label>",a||"","</label>")},renderRightIcon:function(c,e){this.deprecatedRenderWarning();
var b=null,d=null,a=[];if(e&&SC.ImageView.valueIsUrl(e)){b=e;d=""}else{d=e;b=SC.BLANK_IMAGE_URL
}a.push("right-icon",d);c.begin("img").addClass(a).attr("src",b).end()},renderCount:function(a,b){this.deprecatedRenderWarning();
a.push('<span class="count"><span class="inner">',b.toString(),"</span></span>")},renderAction:function(a,b){this.deprecatedRenderWarning();
a.push('<img src="',SC.BLANK_IMAGE_URL,'" class="action" />')},renderBranch:function(c,b){this.deprecatedRenderWarning();
var a=[];a.push("branch",b?"branch-visible":"branch-hidden");c.begin("span").addClass(a).push("&nbsp;").end()
}});SC.ListItemView._deprecatedRenderWarningHasBeenIssued=false;sc_require("mixins/collection_view_delegate");
sc_require("views/list_item");SC.DRAG_REORDER=16;SC.HORIZONTAL_ORIENTATION="horizontal";
SC.VERTICAL_ORIENTATION="vertical";SC.BENCHMARK_RELOAD=NO;SC.CollectionView=SC.View.extend(SC.CollectionViewDelegate,SC.CollectionContent,{classNames:["sc-collection-view"],ACTION_DELAY:200,useFastPath:NO,content:null,contentBindingDefault:SC.Binding.multiple(),length:0,nowShowing:function(){return this.computeNowShowing()
}.property("length","clippingFrame").cacheable(),selection:null,isSelectable:YES,isSelectableBindingDefault:SC.Binding.bool(),isEnabled:YES,isEnabledBindingDefault:SC.Binding.bool(),isEditable:YES,isEditableBindingDefault:SC.Binding.bool(),canReorderContent:NO,canReorderContentBindingDefault:SC.Binding.bool(),canDeleteContent:NO,canDeleteContentBindingDefault:SC.Binding.bool(),canEditContent:NO,canEditContentBindingDefault:SC.Binding.bool(),isDropTarget:NO,useToggleSelection:NO,actOnSelect:NO,selectOnMouseDown:YES,exampleView:SC.ListItemView,contentExampleViewKey:null,groupExampleView:null,contentGroupExampleViewKey:null,action:null,target:null,contentValueKey:null,acceptsFirstResponder:NO,isActive:NO,calculatedHeight:0,calculatedWidth:0,computeLayout:function(){return null
},layoutForContentIndex:function(a){return null},allContentIndexes:function(){return SC.IndexSet.create(0,this.get("length")).freeze()
}.property("length").cacheable(),contentIndexesInRect:function(a){return null},computeNowShowing:function(){var c=this.contentIndexesInRect(this.get("clippingFrame"));
if(!c){c=this.get("allContentIndexes")}else{var b=this.get("length"),a=c.get("max");
if(a>b){c=c.copy().remove(b,a-b).freeze()}}return c},showInsertionPoint:function(a,b){},hideInsertionPoint:function(){},delegate:null,selectionDelegate:function(){var a=this.get("delegate"),b=this.get("content");
return this.delegateFor("isCollectionViewDelegate",a,b)}.property("delegate","content").cacheable(),contentDelegate:function(){var a=this.get("delegate"),b=this.get("content");
return this.delegateFor("isCollectionContent",a,b)}.property("delegate","content").cacheable(),_contentGroupIndexes:function(){return this.get("contentDelegate").contentGroupIndexes(this,this.get("content"))
}.property("contentDelegate","content").cacheable(),contentRangeDidChange:function(d,b,c,a){if(!b&&(c==="[]")){this.notifyPropertyChange("_contentGroupIndexes");
this.reload(a)}else{this.contentPropertyDidChange(b,c,a)}},contentPropertyDidChange:function(c,b,a){},updateContentRangeObserver:function(){var d=this.get("nowShowing"),a=this._cv_contentRangeObserver,c=this.get("content");
if(!c){return}if(a){c.updateRangeObserver(a,d)}else{var b=this.contentRangeDidChange;
a=c.addRangeObserver(d,this,b,null);this._cv_contentRangeObserver=a}},removeContentRangeObserver:function(){var b=this.get("content"),a=this._cv_contentRangeObserver;
if(a){if(b){b.removeRangeObserver(a)}this._cv_contentRangeObserver=null}},contentLengthDidChange:function(){var a=this.get("content");
this.set("length",a?a.get("length"):0)},_cv_contentDidChange:function(){var b=this.get("content"),a=this.contentLengthDidChange;
if(b===this._content){return}this.removeContentRangeObserver();if(this._content){this._content.removeObserver("length",this,a)
}this._content=b;if(b){b.addObserver("length",this,a)}this.contentLengthDidChange();
this.contentRangeDidChange(b,null,"[]",null)}.observes("content"),_invalidIndexes:NO,reload:function(a){var b=this._invalidIndexes;
if(a&&b!==YES){if(b){b.add(a)}else{b=this._invalidIndexes=a.clone()}}else{this._invalidIndexes=YES
}if(this.get("isVisibleInWindow")){this.invokeOnce(this.reloadIfNeeded)}return this
},reloadIfNeeded:function(){var x=this._invalidIndexes;if(!x||!this.get("isVisibleInWindow")){return this
}this._invalidIndexes=NO;var u=this.get("content"),v,w,n,z=this.computeLayout(),y=SC.BENCHMARK_RELOAD,c=this.get("nowShowing"),A=this._sc_itemViews,o=this.get("containerView")||this,a,r,t,s,l,p,h,q,e,m,k,B,d,b,g,j,f;
if(x.isIndexSet&&x.contains(c)){x=YES}if(this.willReload){this.willReload(x===YES?null:x)
}a=this.get("exampleView");t=a?a.isReusableInCollections:NO;r=this.get("groupExampleView");
s=r?r.isReusableInCollections:NO;if(x.isIndexSet){if(y){SC.Benchmark.start(y="%@#reloadIfNeeded (Partial)".fmt(this),YES)
}p=[];h=[];q=[];x.forEach(function(i){n=A?A[i]:null;if(c.contains(i)){if(n&&n.parentView===o){h.push(i)
}else{q.push(i)}}else{if(n&&n.parentView===o){p.push(i)}}},this);for(v=0,w=p.length;
v<w;++v){m=p[v];n=A?A[m]:null;delete A[m];g=this.get("contentDelegate");j=this.get("_contentGroupIndexes");
f=j&&j.contains(m);if(f){f=g.contentIndexIsGroup(this,u,m)}l=f?s:t;if(l){b=f?this._GROUP_VIEW_POOL:this._VIEW_POOL;
b.push(n);n.destroyLayer()}o.removeChild(n)}for(v=0,w=h.length;v<w;++v){m=h[v];n=A?A[m]:null;
k=this.itemViewForContentIndex(m,YES);n.destroyLayer();o.replaceChild(k,n)}for(v=0,w=q.length;
v<w;++v){m=q[v];k=this.itemViewForContentIndex(m,YES);o.insertBefore(k,null)}if(y){SC.Benchmark.end(y)
}}else{if(y){SC.Benchmark.start(y="%@#reloadIfNeeded (Full)".fmt(this),YES)}if(A){A.length=0
}e=o.get("childViews");if(e){e=e.copy()}o.beginPropertyChanges();if(this.willRemoveAllChildren){this.willRemoveAllChildren()
}o.destroyLayer().removeAllChildren();if(e){for(v=0,w=e.length;v<w;++v){k=e[v];f=k.get("isGroupView");
l=f?s:t;if(l){b=f?this._GROUP_VIEW_POOL:this._VIEW_POOL;b.push(k);k.destroyLayer()
}}}e=[];c.forEach(function(i){e.push(this.itemViewForContentIndex(i,YES))},this);
o.set("childViews",e);o.replaceLayer();o.endPropertyChanges();if(y){SC.Benchmark.end(y)
}}if(z){this.adjust(z)}if(this.didReload){this.didReload(x===YES?null:x)}return this
},displayProperties:"isFirstResponder isEnabled isActive".w(),render:function(a,b){a.setClass("focus",this.get("isFirstResponder"));
a.setClass("disabled",!this.get("isEnabled"));a.setClass("active",this.get("isActive"));
return arguments.callee.base.apply(this,arguments)},_TMP_ATTRS:{},_COLLECTION_CLASS_NAMES:"sc-collection-item".w(),_GROUP_COLLECTION_CLASS_NAMES:"sc-collection-item sc-group-item".w(),_VIEW_POOL:null,_GROUP_VIEW_POOL:null,itemViewForContentIndex:function(l,a){var v;
var u=this._sc_itemViews;if(!u){u=this._sc_itemViews=[]}else{if(!a&&(v=u[l])){return v
}}var n=this.get("content"),p=n.objectAt(l),h=this.get("contentDelegate"),j=this.get("_contentGroupIndexes"),i=NO,w,k,q,f,r,d,b,c,t,g,e,o,s;
i=j&&j.contains(l);if(i){i=h.contentIndexIsGroup(this,n,l)}if(i){w=this.get("contentGroupExampleViewKey");
if(w&&p){k=p.get(w)}if(!k){k=this.get("groupExampleView")||this.get("exampleView")
}r="_GROUP_VIEW_POOL"}else{w=this.get("contentExampleViewKey");if(w&&p){k=p.get(w)
}if(!k){k=this.get("exampleView")}r="_VIEW_POOL"}c=this.get("containerView")||this;
f=this.layerIdFor(l);t=h.contentIndexIsEnabled(this,n,l);g=h.contentIndexIsSelected(this,n,l);
e=h.contentIndexOutlineLevel(this,n,l);o=h.contentIndexDisclosureState(this,n,l);
s=this.isVisibleInWindow;q=this.layoutForContentIndex(l);if(k&&k.isReusableInCollections){d=this[r];
if(!d){d=this[r]=[]}if(d.length>0){v=d.pop();b=v.prepareForReuse;if(b){b.call(v)}v.beginPropertyChanges();
v.set("contentIndex",l);v.set("layerId",f);v.set("isEnabled",t);v.set("isSelected",g);
v.set("outlineLevel",e);v.set("disclosureState",o);v.set("isVisibleInWindow",s);v.set("parentView",c);
SC.View.views[f]=v;if(q){v.set("layout",q)}else{v.set("layout",k.prototype.layout)
}v.set("content",p);v.endPropertyChanges()}}if(!v){var m=this._TMP_ATTRS;m.contentIndex=l;
m.content=p;m.owner=m.displayDelegate=this;m.parentView=c;m.page=this.page;m.layerId=f;
m.isEnabled=t;m.isSelected=g;m.outlineLevel=e;m.disclosureState=o;m.isGroupView=i;
m.isVisibleInWindow=s;if(i){m.classNames=this._GROUP_COLLECTION_CLASS_NAMES}else{m.classNames=this._COLLECTION_CLASS_NAMES
}if(q){m.layout=q}else{delete m.layout}v=this.createItemView(k,l,m)}u[l]=v;return v
},itemViewForContentObject:function(a){return this.itemViewForContentIndex(this.get("content").indexOf(a))
},_TMP_LAYERID:[],createItemView:function(c,a,b){return c.create(b)},layerIdFor:function(a){var b=this._TMP_LAYERID;
b[0]=SC.guidFor(this);b[1]=a;return b.join("-")},contentIndexForLayerId:function(c){if(!c||!(c=c.toString())){return null
}var b=this._baseLayerId;if(!b){b=this._baseLayerId=SC.guidFor(this)+"-"}if((c.length<=b.length)||(c.indexOf(b)!==0)){return null
}var a=Number(c.slice(c.lastIndexOf("-")+1));return isNaN(a)?null:a},itemViewForEvent:function(j){var d=this.getPath("pane.rootResponder");
if(!d){return null}var c=SC.guidFor(this)+"-",a=c.length,e=j.target,g=this.get("layer"),f=null,b,i,h;
while(e&&e!==document&&e!==g){b=e?SC.$(e).attr("id"):null;if(b&&(f=this.contentIndexForLayerId(b))!==null){break
}e=e.parentNode}if(f===null||(e===g)){e=g=null;return null}if(f>=this.get("length")){throw"layout for item view %@ was found when item view does not exist (%@)".fmt(b,this)
}return this.itemViewForContentIndex(f)},expand:function(b){if(!b){return this}var a=this.get("contentDelegate"),c=this.get("content");
b.forEach(function(d){var e=a.contentIndexDisclosureState(this,c,d);if(e===SC.BRANCH_CLOSED){a.contentIndexExpand(this,c,d)
}},this);return this},collapse:function(b){if(!b){return this}var a=this.get("contentDelegate"),c=this.get("content");
b.forEach(function(d){var e=a.contentIndexDisclosureState(this,c,d);if(e===SC.BRANCH_OPEN){a.contentIndexCollapse(this,c,d)
}},this);return this},_cv_selectionDidChange:function(){var c=this.get("selection"),b=this._cv_selection,a=this._cv_selectionContentDidChange;
if(c===b){return}if(b){b.removeObserver("[]",this,a)}if(c){c.addObserver("[]",this,a)
}this._cv_selection=c;this._cv_selectionContentDidChange()}.observes("selection"),_cv_selectionContentDidChange:function(){var c=this.get("selection"),b=this._cv_selindexes,a=this.get("content"),d;
this._cv_selindexes=c?c.frozenCopy():null;if(b){b=b.indexSetForSource(a)}if(c){c=c.indexSetForSource(a)
}if(c&&b){d=c.without(b).add(b.without(c))}else{d=c||b}if(d&&d.get("length")>0){this.reloadSelectionIndexes(d)
}},_invalidSelection:NO,reloadSelectionIndexes:function(a){var b=this._invalidSelection;
if(a&&(b!==YES)){if(b){b.add(a)}else{b=this._invalidSelection=a.copy()}}else{this._invalidSelection=YES
}if(this.get("isVisibleInWindow")){this.invokeOnce(this.reloadSelectionIndexesIfNeeded)
}return this},reloadSelectionIndexesIfNeeded:function(){var e=this._invalidSelection;
if(!e||!this.get("isVisibleInWindow")){return this}var d=this.get("nowShowing"),b=this._invalidIndexes,a=this.get("content"),c=this.get("selection");
this._invalidSelection=NO;if(b===YES||!d){return this}if(e===YES){e=d}if(b&&b.isIndexSet){e=e.without(b)
}e.forEach(function(f){if(!d.contains(f)){return}var g=this.itemViewForContentIndex(f,NO);
if(g){g.set("isSelected",c?c.contains(a,f):NO)}},this);return this},select:function(c,f){var d=this.get("content"),a=this.get("selectionDelegate"),b=this.get("_contentGroupIndexes"),e;
if(!this.get("isSelectable")){return this}if(SC.typeOf(c)===SC.T_NUMBER){c=SC.IndexSet.create(c,1)
}if(c&&c.get("length")>0){if(b&&b.get("length")>0){c=c.copy().remove(b)}c=a.collectionViewShouldSelectIndexes(this,c,f);
if(!c||c.get("length")===0){return this}}else{c=null}if(f&&(e=this.get("selection"))){e=e.copy()
}else{e=SC.SelectionSet.create()}if(c&&c.get("length")>0){if(c.get("length")===1){e.addObject(d.objectAt(c.get("firstObject")))
}else{e.add(d,c)}}e=a.collectionViewSelectionForProposedSelection(this,e);if(!e){e=SC.SelectionSet.create()
}this._selectionAnchor=null;this.set("selection",e.freeze());return this},deselect:function(b){var d=this.get("selection"),c=this.get("content"),a=this.get("selectionDelegate");
if(!this.get("isSelectable")){return this}if(!d||d.get("length")===0){return this
}if(SC.typeOf(b)===SC.T_NUMBER){b=SC.IndexSet.create(b,1)}b=a.collectionViewShouldDeselectIndexes(this,b);
if(!b||b.get("length")===0){return this}d=d.copy().remove(c,b);d=a.collectionViewSelectionForProposedSelection(this,d);
if(!d){d=SC.SelectionSet.create()}this.set("selection",d.freeze());return this},_findNextSelectableItemFromIndex:function(h,a){var c=this.get("length"),d=SC.IndexSet.create(),e=this.get("content"),i=this.get("selectionDelegate"),g=this.get("_contentGroupIndexes"),f,b;
if(!g&&(i.collectionViewShouldSelectIndexes===this.collectionViewShouldSelectIndexes)){return h
}while(h<c){if(!g||!g.contains(h)){d.add(h);f=i.collectionViewShouldSelectIndexes(this,d);
if(f&&f.get("length")>=1){return h}d.remove(h)}h++}if(a===undefined){b=this.get("selection");
a=b?b.get("max"):-1}return a},_findPreviousSelectableItemFromIndex:function(b,h){var c=SC.IndexSet.create(),f=this.get("content"),a=this.get("selectionDelegate"),e=this.get("_contentGroupIndexes"),d;
if(SC.none(b)){b=-1}if(!e&&(a.collectionViewShouldSelectIndexes===this.collectionViewShouldSelectIndexes)){return b
}while(b>=0){if(!e||!e.contains(b)){c.add(b);d=a.collectionViewShouldSelectIndexes(this,c);
if(d&&d.get("length")>=1){return b}c.remove(b)}b--}if(h===undefined){var g=this.get("selection");
h=g?g.get("min"):-1}if(SC.none(h)){h=-1}return h},selectPreviousItem:function(h,b){if(SC.none(b)){b=1
}if(SC.none(h)){h=false}var f=this.get("selection"),e=this.get("content");if(f){f=f.indexSetForSource(e)
}var g=f?f.get("min"):-1,a=f?f.get("max")-1:-1,d=this._selectionAnchor;if(SC.none(d)){d=g
}if(h){if(a>d){a=a-b}else{g=this._findPreviousSelectableItemFromIndex(g-b)}if(SC.none(g)||(g<0)){g=0
}if(a<g){a=g}}else{g=this._findPreviousSelectableItemFromIndex(g-b);if(SC.none(g)||(g<0)){g=0
}a=g;d=null}var c=g;f=SC.IndexSet.create(g,a+1-g);this.scrollToContentIndex(c);this.select(f);
this._selectionAnchor=d;return this},selectNextItem:function(h,i){if(SC.none(i)){i=1
}if(SC.none(h)){h=false}var b=this.get("selection"),g=this.get("content");if(b){b=b.indexSetForSource(g)
}var a=b?b.get("min"):-1,d=b?b.get("max")-1:-1,e=this._selectionAnchor,c=this.get("length");
if(SC.none(e)){e=a}if(h){if(a<e){a=a+i}else{d=this._findNextSelectableItemFromIndex(d+i,d)
}if(d>=c){d=c-1}if(a>d){a=d}}else{d=this._findNextSelectableItemFromIndex(d+i,d);
if(d>=c){d=c-1}a=d;e=null}var f=d;b=SC.IndexSet.create(a,d-a+1);this.scrollToContentIndex(f);
this.select(b);this._selectionAnchor=e;return this},deleteSelection:function(){if(!this.get("canDeleteContent")){return NO
}var d=this.get("selection"),c=this.get("content"),a=this.get("selectionDelegate"),b=d&&c?d.indexSetForSource(c):null;
if(!c||!b||b.get("length")===0){return NO}b=a.collectionViewShouldDeleteIndexes(this,b);
if(!b||b.get("length")===0){return NO}a.collectionViewDeleteContent(this,this.get("content"),b);
return YES},scrollToContentIndex:function(b){var a=this.itemViewForContentIndex(b);
if(a){this.scrollToItemView(a)}return this},scrollToItemView:function(a){if(a){a.scrollToVisible()
}return this},keyDown:function(a){var b=this.interpretKeyEvents(a);return !b?NO:b
},keyUp:function(){return true},insertText:function(b,a){if(b===" "){var c=this.get("selection");
if(c&&c.get("length")>0){this.invokeLater(this._cv_action,0,null,a)}return YES}else{return NO
}},selectAll:function(a){var b=this.get("content"),c=b?SC.IndexSet.create(0,b.get("length")):null;
this.select(c,NO);return YES},deleteBackward:function(a){return this.deleteSelection()
},deleteForward:function(a){return this.deleteSelection()},moveDown:function(b,a){this.selectNextItem(false,this.get("itemsPerRow")||1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY);return true},moveUp:function(b,a){this.selectPreviousItem(false,this.get("itemsPerRow")||1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY);return true},moveLeft:function(k){if(k.ctrlKey||k.metaKey){return NO
}if((this.get("itemsPerRow")||1)>1){this.selectPreviousItem(false,1);this._cv_performSelectAction(null,k,this.ACTION_DELAY)
}else{var c=this.get("selection"),i=this.get("content"),g=c?c.indexSetForSource(i):null;
if(g){var l=undefined,f=false,h=undefined;if(g.get("length")===1){h=g.get("firstObject");
l=this.get("contentDelegate");var b=l.contentIndexDisclosureState(this,i,h);if(b!==SC.BRANCH_OPEN){f=true
}}if(f){var a=l.contentIndexOutlineLevel(this,i,h)-1;if(a>=0){var e=-1;while(e<0){var d=this._findPreviousSelectableItemFromIndex(h-1);
if(d<0){return false}h=d;var j=l.contentIndexOutlineLevel(this,i,h);if(j===a){e=d
}}if(e!==-1){this.select(h)}}}else{this.collapse(g)}}}return true},moveRight:function(a){if(a.ctrlKey||a.metaKey){return NO
}if((this.get("itemsPerRow")||1)>1){this.selectNextItem(false,1);this._cv_performSelectAction(null,a,this.ACTION_DELAY)
}else{var d=this.get("selection"),c=this.get("content"),b=d?d.indexSetForSource(c):null;
if(b){this.expand(b)}}return true},moveDownAndModifySelection:function(b,a){this.selectNextItem(true,this.get("itemsPerRow")||1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY);return true},moveUpAndModifySelection:function(b,a){this.selectPreviousItem(true,this.get("itemsPerRow")||1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY);return true},moveLeftAndModifySelection:function(b,a){if((this.get("itemsPerRow")||1)>1){this.selectPreviousItem(true,1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY)}return true},moveRightAndModifySelection:function(b,a){if((this.get("itemsPerRow")||1)>1){this.selectNextItem(true,1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY)}return true},insertNewline:function(d,c){var b=this.get("isEditable")&&this.get("canEditContent"),g,f,h,a,e;
if(b){g=this.get("selection");f=this.get("content");if(g&&g.get("length")===1){h=g.indexSetForSource(f);
a=h?h.get("min"):-1;b=a>=0}}if(b){e=this.itemViewForContentIndex(a);b=e&&SC.typeOf(e.beginEditing)===SC.T_FUNCTION
}if(b){this.scrollToContentIndex(a);e=this.itemViewForContentIndex(a);e.beginEditing()
}else{this.invokeLater(this._cv_action,0,e,null)}return YES},mouseDown:function(i){var g=this.itemViewForEvent(i),f=this.get("content"),e=g?g.get("contentIndex"):-1,c,d,b,a,j,h=f.get("allowsMultipleSelection");
c=this.mouseDownInfo={event:i,itemView:g,contentIndex:e,at:Date.now()};this.becomeFirstResponder();
if(this.get("useToggleSelection")){if(this.get("selectOnMouseDown")){if(!g){return
}b=this.get("selection");a=b&&b.containsObject(g.get("content"));if(a){this.deselect(e)
}else{if(!h){this.select(e,NO)}else{this.select(e,YES)}}}return YES}if(!g){if(this.get("allowDeselectAll")){this.select(null,false)
}return YES}b=this.get("selection");if(b){b=b.indexSetForSource(f)}a=b?b.contains(e):NO;
c.modifierKeyPressed=j=i.ctrlKey||i.metaKey;if(j&&a){c.shouldDeselect=e>=0}else{if(i.shiftKey&&b&&b.get("length")>0&&h){b=this._findSelectionExtendedByShift(b,e);
d=this._selectionAnchor;this.select(b);this._selectionAnchor=d}else{if(!j&&a){c.shouldReselect=e>=0
}else{if((i.shiftKey||j)&&!h){this.select(null,false)}if(this.get("selectOnMouseDown")){this.select(e,j)
}else{c.shouldSelect=e>=0}}}}c.previousContentIndex=e;return YES},mouseUp:function(i){var j=this.itemViewForEvent(i),d=this.mouseDownInfo,f=this.get("content"),e,c,a,b,g,k,h=f.get("allowsMultipleSelection");
if(this.get("useToggleSelection")){if(!j||this.get("selectOnMouseDown")){return NO
}c=this.get("selection");e=(j)?j.get("contentIndex"):-1;a=c&&c.containsObject(j.get("content"));
if(a){this.deselect(e)}else{if(!h){this.select(e,NO)}else{this.select(e,YES)}}}else{if(d){k=d.contentIndex;
e=(j)?j.get("contentIndex"):-1;if(d.shouldSelect){this.select(k,d.modifierKeyPressed)
}if(d.shouldDeselect){this.deselect(k)}if(d.shouldReselect){b=this.get("isEditable")&&this.get("canEditContent");
if(b){c=this.get("selection");b=c&&(c.get("length")===1)}if(b){g=this.itemViewForContentIndex(k);
b=g&&(!g.contentHitTest||g.contentHitTest(i));b=(b&&g.beginEditing)?g.beginEditing():NO
}if(!b){if(this._cv_reselectTimer){this._cv_reselectTimer.invalidate()}this._cv_reselectTimer=this.invokeLater(this.select,300,k,false)
}}this._cleanupMouseDown()}}this._cv_performSelectAction(j,i,0,i.clickCount);return NO
},_cleanupMouseDown:function(){var b=this.mouseDownInfo,a;if(b){for(a in b){if(!b.hasOwnProperty(a)){continue
}delete b[a]}}this.mouseDownInfo=null},mouseMoved:function(c){var a=this.itemViewForEvent(c),b=this._lastHoveredItem;
if(a!==b){if(b&&b.mouseOut){b.mouseOut(c)}if(a&&a.mouseOver){a.mouseOver(c)}}this._lastHoveredItem=a;
if(a&&a.mouseMoved){a.mouseMoved(c)}return YES},mouseOut:function(b){var a=this._lastHoveredItem;
this._lastHoveredItem=null;if(a&&a.mouseOut){a.mouseOut(b)}return YES},touchStart:function(g,a){if(this.get("useToggleSelection")){return true
}var c=this.itemViewForEvent(g),d=this.get("content"),f=c?c.get("contentIndex"):-1,e,b;
this.becomeFirstResponder();this.invokeLater("select",1,f);return YES},touchesDragged:function(a,b){b.forEach(function(c){if(Math.abs(c.pageX-c.startX)>5||Math.abs(c.pageY-c.startY)>5){this.select(null,NO);
c.makeTouchResponder(c.nextTouchResponder)}},this)},touchEnd:function(b){var a=this.itemViewForEvent(b);
this._cv_performSelectAction(a,b,0)},touchCancelled:function(a){this.select(null,NO)
},_findSelectionExtendedByShift:function(e,h){if(!e||e.get("length")===0){return SC.IndexSet.create(h)
}var d=this.get("content"),g=d.get("length")-1,c=e.get("min"),a=e.get("max")-1,f=this.mouseDownInfo,b=this._selectionAnchor;
if(SC.none(b)){b=-1}if(h<c){c=h;if(b<0){this._selectionAnchor=b=a}}else{if(h>a){a=h;
if(b<0){this._selectionAnchor=b=c}}else{if(h>=c&&h<=a){if(b<0){this._selectionAnchor=b=c
}if(h===b){c=a=h}else{if(h>b){c=b;a=h}else{if(h<b){c=h;a=b}}}}}}return SC.IndexSet.create(c,a-c+1)
},reorderDataType:function(){return"SC.CollectionView.Reorder."+SC.guidFor(this)}.property().cacheable(),dragContent:null,proposedInsertionIndex:null,proposedDropOperation:null,mouseDragged:function(h){var i=this.get("selectionDelegate"),e=this.get("content"),a=this.get("selection"),c=this.mouseDownInfo,f=this.get("_contentGroupIndexes"),d,b,g;
if(!c||c.contentIndex<0){return YES}if((Date.now()-c.at)<123){return YES}if(i.collectionViewShouldBeginDrag(this)){if(!this.get("selectOnMouseDown")){d=SC.IndexSet.create(c.contentIndex)
}else{d=a?a.indexSetForSource(e):null}if(d&&f&&f.get("length")>0){d=d.copy().remove(f);
if(d.get("length")===0){d=null}else{d.freeze()}}if(!d){return YES}else{d=d.frozenCopy()
}d={content:e,indexes:d};this.set("dragContent",d);b=this.get("dragDataTypes");if(b&&b.get("length")>0){g=i.collectionViewDragViewFor(this,d.indexes);
if(!g){g=this._cv_dragViewFor(d.indexes)}g.createLayer();SC.Drag.start({event:c.event,source:this,dragView:g,ghost:NO,ghostActsLikeCursor:i.ghostActsLikeCursor,slideBack:YES,dataSource:this});
this._cleanupMouseDown();this._lastInsertionIndex=null}else{this.set("dragContent",null)
}return YES}},_cv_dragViewFor:function(d){var b=this.get("nowShowing").without(d);
b=this.get("nowShowing").without(b);var c=this.get("layer").cloneNode(false);var a=SC.View.create({layer:c,parentView:this});
SC.$(c).css("backgroundColor","transparent").css("border","none").css("top",0).css("left",0);
b.forEach(function(g){var h=this.itemViewForContentIndex(g),e,f;if(h){e=h.get("isSelected");
h.set("isSelected",NO);h.updateLayerIfNeeded();f=h.get("layer");if(f){f=f.cloneNode(true)
}h.set("isSelected",e);h.updateLayerIfNeeded()}if(f){c.appendChild(f)}f=null},this);
c=null;return a},dragDataTypes:function(){var a=this.get("selectionDelegate"),b=a.collectionViewDragDataTypes(this),c;
if(this.get("canReorderContent")){b=b?b.copy():[];c=this.get("reorderDataType");if(b.indexOf(c)<0){b.push(c)
}}return b?b:[]}.property(),dragDataForType:function(c,b){if(this.get("canReorderContent")){if(b===this.get("reorderDataType")){return this.get("dragContent")
}}var a=this.get("selectionDelegate");return a.collectionViewDragDataForType(this,c,b)
},computeDragOperations:function(c,b){var d=SC.DRAG_NONE,a=this.get("selectionDelegate");
if(this.get("canReorderContent")){if(c.get("dataTypes").indexOf(this.get("reorderDataType"))>=0){d=SC.DRAG_REORDER
}}d=a.collectionViewComputeDragOperations(this,c,d);if(d&SC.DRAG_REORDER){d=SC.DRAG_MOVE
}return d},_computeDropOperationState:function(c,l,e){var g=this.convertFrameFromView(c.get("location"),null),k=SC.DROP_BEFORE,m=this.get("selectionDelegate"),d=this.get("canReorderContent"),n,h,a,i,f,b;
var j=this.insertionIndexForLocation(g,SC.DROP_ON);if(SC.typeOf(j)===SC.T_ARRAY){k=j[1];
j=j[0]}if(k===SC.DROP_ON){this.set("proposedInsertionIndex",j);this.set("proposedDropOperation",k);
b=m.collectionViewValidateDragOperation(this,c,e,j,k);j=this.get("proposedInsertionIndex");
k=this.get("proposedDropOperation");this._dropInsertionIndex=this._dropOperation=null;
if(b!==SC.DRAG_NONE){return[j,k,b]}else{k=SC.DROP_BEFORE;j=this.insertionIndexForLocation(g,SC.DROP_BEFORE);
if(SC.typeOf(j)===SC.T_ARRAY){k=j[1];j=j[0]}}}if((j>=0)&&d&&(k!==SC.DROP_ON)){n=c.dataForType(this.get("reorderDataType"));
if(n){h=this.get("content");if(k===SC.DROP_BEFORE){a=n.indexes.contains(j-1);i=n.indexes.contains(j)
}else{a=n.indexes.contains(j);i=n.indexes.contains(j-1)}if(a&&i){if(SC.none(this._lastInsertionIndex)){if(k===SC.DROP_BEFORE){while((j>=0)&&n.indexes.contains(j)){j--
}}else{f=h?h.get("length"):0;while((j<f)&&n.indexes.contains(j)){j++}}}else{j=this._lastInsertionIndex
}}if(j>=0){e=SC.DRAG_REORDER}}}this.set("proposedInsertionIndex",j);this.set("proposedDropOperation",k);
e=m.collectionViewValidateDragOperation(this,c,e,j,k);j=this.get("proposedInsertionIndex");
k=this.get("proposedDropOperation");this._dropInsertionIndex=this._dropOperation=null;
return[j,k,e]},dragUpdated:function(f,b){var h=f.get("allowedDragOperations"),g=this._computeDropOperationState(f,b,h),a=g[0],c=g[1],e=g[2];
if(e!==SC.DRAG_NONE){if((this._lastInsertionIndex!==a)||(this._lastDropOperation!==c)){var d=this.itemViewForContentIndex(a);
this.showInsertionPoint(d,c)}this._lastInsertionIndex=a;this._lastDropOperation=c
}else{this.hideInsertionPoint();this._lastInsertionIndex=this._lastDropOperation=null
}return(e&SC.DRAG_REORDER)?SC.DRAG_MOVE:e},dragExited:function(){this.hideInsertionPoint();
this._lastInsertionIndex=this._lastDropOperation=null},acceptDragOperation:function(a,b){return YES
},performDragOperation:function(e,g){var a=this._computeDropOperationState(e,null,g),k=a[0],j=a[1],h=a[2],l=this.get("selectionDelegate"),c,m,d,i,b,f;
if(h&SC.DRAG_REORDER){g=(g&SC.DRAG_MOVE)?SC.DRAG_REORDER:SC.DRAG_NONE}else{g=g&h}if(g===SC.DRAG_NONE){return g
}c=l.collectionViewPerformDragOperation(this,e,g,k,j);if((c===SC.DRAG_NONE)&&(g&SC.DRAG_REORDER)){d=e.dataForType(this.get("reorderDataType"));
if(!d){return SC.DRAG_NONE}i=this.get("content");f=d.indexes;if(f.get("length")===1){if(((j===SC.DROP_BEFORE)||(j===SC.DROP_AFTER))&&(f.get("min")===k)){return SC.DRAG_MOVE
}}i.beginPropertyChanges();m=[];b=0;d.indexes.forEach(function(n){m.push(i.objectAt(n-b));
i.removeAt(n-b);b++;if(n<k){k--}},this);if(j===SC.DROP_AFTER){k++}i.replace(k,0,m,j);
this.select(SC.IndexSet.create(k,m.length));i.endPropertyChanges();g=SC.DRAG_MOVE
}return g},collectionViewShouldBeginDrag:function(a){return this.get("canReorderContent")
},insertionIndexForLocation:function(a,b){return -1},_cv_isVisibleInWindowDidChange:function(){if(this.get("isVisibleInWindow")){if(this._invalidIndexes){this.invokeOnce(this.reloadIfNeeded)
}if(this._invalidSelection){this.invokeOnce(this.reloadSelectionIndexesIfNeeded)}}}.observes("isVisibleInWindow"),collectionViewShouldSelectItem:function(a,b){return this.get("isSelectable")
},_TMP_DIFF1:SC.IndexSet.create(),_TMP_DIFF2:SC.IndexSet.create(),_cv_nowShowingDidChange:function(){var b=this.get("nowShowing"),a=this._sccv_lastNowShowing,d,e,c;
if(a!==b){if(a&&b){e=this._TMP_DIFF1.add(a).remove(b);c=this._TMP_DIFF2.add(b).remove(a);
d=e.add(c)}else{d=a||b}}if(d&&d.get("length")>0){this._sccv_lastNowShowing=b?b.frozenCopy():null;
this.updateContentRangeObserver();this.reload(d)}if(e){e.clear()}if(c){c.clear()}}.observes("nowShowing"),init:function(){arguments.callee.base.apply(this,arguments);
if(this.useFastPath){this.mixin(SC.CollectionFastPath)}if(this.get("canReorderContent")){this._cv_canReorderContentDidChange()
}this._sccv_lastNowShowing=this.get("nowShowing").clone();if(this.content){this._cv_contentDidChange()
}if(this.selection){this._cv_selectionDidChange()}},_cv_canReorderContentDidChange:function(){if(this.get("canReorderContent")){if(!this.get("isDropTarget")){this.set("isDropTarget",YES)
}SC.Drag.addDropTarget(this)}}.observes("canReorderContent"),_cv_performSelectAction:function(b,d,c,a){var e;
if(c===undefined){c=0}if(a===undefined){a=1}if((a>1)||this.get("actOnSelect")){if(this._cv_reselectTimer){this._cv_reselectTimer.invalidate()
}e=this.get("selection");e=e?e.toArray():[];if(this._cv_actionTimer){this._cv_actionTimer.invalidate()
}this._cv_actionTimer=this.invokeLater(this._cv_action,c,b,d,e)}},_cv_action:function(b,a,c){var d=this.get("action");
var e=this.get("target")||null;this._cv_actionTimer=null;if(d){if(SC.typeOf(d)===SC.T_FUNCTION){return this.action(b,a)
}var f=this.get("pane");if(f){f.rootResponder.sendAction(d,e,this,f,c)}}else{if(!b){return
}else{if(SC.typeOf(b._action)==SC.T_FUNCTION){return b._action(a)}else{if(SC.typeOf(b.action)==SC.T_FUNCTION){return b.action(a)
}}}}}});SC.DateFieldView=SC.TextFieldView.extend({value:null,showDate:YES,showTime:NO,formatTime:"%I:%M %p",formatDate:"%d/%m/%Y",formatDateTime:"%d/%m/%Y %I:%M %p",_dtConstants:"%a %b %d %H %I %j %m %M %p %S %U %W %y %Y".w(),_wtConstants:[3,3,2,2,2,3,2,2,2,2,2,2,2,4],activeSelection:0,format:function(){var a=this.get("showTime");
var b=this.get("showDate");if(a===YES&&b===YES){return this.get("formatDateTime")
}if(a===YES){return this.get("formatTime")}return this.get("formatDate")}.property("showTime","showDate").cacheable(),validator:function(){return SC.Validator.DateTime.extend({format:this.get("format")})
}.property("format").cacheable(),tabsSelections:function(){var f=[];var d=this.get("format");
var i=this.get("_dtConstants");var b=this.get("_wtConstants");if(SC.empty(d)){throw"The format string is empty, and must be a valid string."
}var g,j,c,e=0,a=0,h=0;while(e<d.length&&d.indexOf("%",e)!==-1){g=d.indexOf("%",e);
j=d.substring(g,g+2);e=g+2;c=i.indexOf(j);if(c===-1){throw"SC.DateFieldView: The format's key '%@' is not supported.".fmt(j)
}a=a+g-h;f.push(SC.Object.create({key:j,textSelection:SC.TextSelection.create({start:a,end:a+b[c]})}));
a=a+b[c];h=e}g=j=c=null;return f}.property("format").cacheable(),updateTextSelecitonObserver:function(){var a=this.get("activeSelection");
var b=this.get("tabsSelections");if(this.get("isEditing")){this.selection(null,b[a].get("textSelection"))
}}.observes("activeSelection","value"),updateValue:function(b,c){var e=(c===0)?-1:1;
var d=this.get("value"),a;switch(b){case"%a":case"%d":case"%j":this.set("value",d.advance({day:e}));
break;case"%b":case"%m":this.set("value",d.advance({month:e}));break;case"%H":case"%I":this.set("value",d.advance({hour:e}));
break;case"%M":this.set("value",d.advance({minute:e}));break;case"%p":a=d.get("hour")>=12?-12:12;
this.set("value",d.advance({hour:a}));break;case"%S":this.set("value",d.advance({second:e}));
break;case"%U":this.set("value",d.advance({week1:e}));break;case"%W":this.set("value",d.advance({week0:e}));
break;case"%y":case"%Y":this.set("value",d.advance({year:e}));break}},_selectRootElement:function(){},keyDown:function(a){if(this.interpretKeyEvents(a)){a.stop();
return YES}return arguments.callee.base.apply(this,arguments)},ctrl_a:function(){return YES
},moveUp:function(b){var a=this.get("activeSelection");var c=this.get("tabsSelections");
this.updateValue(c[a].get("key"),1);return YES},moveDown:function(b){var a=this.get("activeSelection");
var c=this.get("tabsSelections");this.updateValue(c[a].get("key"),0);return YES},insertText:function(a){return YES
},moveRight:function(a){var c=this.get("tabsSelections");var b=this.get("activeSelection")+1;
if(b===c.length){b=0}this.set("activeSelection",b);return YES},moveLeft:function(a){var c=this.get("tabsSelections");
var b=this.get("activeSelection")-1;if(b===-1){b=c.length-1}this.set("activeSelection",b);
return YES},insertTab:function(a){var c=this.get("tabsSelections");var b=this.get("activeSelection")+1;
if(b<c.length){this.set("activeSelection",b);return YES}return NO},insertBacktab:function(a){var b=this.get("activeSelection")-1;
if(b!==-1){this.set("activeSelection",b);return YES}return NO},mouseUp:function(b){var c=arguments.callee.base.apply(this,arguments);
var e=this.get("selection");if(SC.none(e)){this.set("activeSelection",0)}else{var h=e.get("start");
var g=this.get("tabsSelections");var a=g.length,f;for(var d=0;d<a;d++){f=g[d].get("textSelection");
if(h>=f.get("start")&&h<=f.get("end")){this.set("activeSelection",d)}}}return c},deleteBackward:function(a){return YES
},deleteForward:function(a){return YES}});SC.DisclosureView=SC.ButtonView.extend({classNames:["sc-disclosure-view"],controlStyle:"disclosure",buttonBehavior:SC.TOGGLE_BEHAVIOR,toggleOnValue:YES,toggleOffValue:NO,valueBindingDefault:SC.Binding.bool(),createRenderer:function(b){var a=b.disclosureControl();
this.updateRenderer(a);return a},updateRenderer:function(a){a.attr({icon:this.get("icon"),isActive:this.get("isActive"),isEnabled:this.get("isEnabled"),isSelected:this.get("isSelected"),needsEllipsis:this.get("needsEllipsis"),state:this.value===this.get("toggleOnValue")?YES:NO,title:this.get("displayTitle")})
},keyDown:function(a){if(a.which===37||a.which===38){this.set("value",this.get("toggleOffValue"));
return YES}if(a.which===39||a.which===40){this.set("value",this.get("toggleOnValue"));
return YES}arguments.callee.base.apply(this,arguments)}});SC.FileView=SC.FieldView.extend({classNames:"sc-file-view".w(),autoSubmit:YES,action:"uploadImage",target:null,childViews:"button form".w(),button:SC.ButtonView.design({title:"Choose File",theme:"capsule"}),form:SC.View.design({tagName:"form",render:function(a,b){a.attr("method","post").attr("action","javascript:;").attr("enctype","multipart/form-data");
arguments.callee.base.apply(this,arguments)},childViews:"input".w(),input:SC.View.design({tagName:"input",render:function(a,b){a.attr("type","file").end();
arguments.callee.base.apply(this,arguments)}})}),title:"Choose File",setFieldValue:function(a){console.log("SC.FileView: setFieldValue: %@ does nothing".fmt(a))
},fieldValueDidChange:function(a){arguments.callee.base.apply(this,arguments);if(this.get("autoSubmit")){var b=SC.Request.postUrl("/proxy/user/update_image").json().async(NO).send({picture:this.get("value")})
}}});sc_require("views/collection");sc_require("mixins/collection_row_delegate");
SC.ListView=SC.CollectionView.extend(SC.CollectionRowDelegate,{classNames:["sc-list-view"],acceptsFirstResponder:YES,showAlternatingRows:NO,render:function(a,b){a.setClass("alternating",this.get("showAlternatingRows"));
return arguments.callee.base.apply(this,arguments)},rowDelegate:function(){var a=this.delegate,b=this.get("content");
return this.delegateFor("isCollectionRowDelegate",a,b)}.property("delegate","content").cacheable(),_sclv_rowDelegateDidChange:function(){var d=this._sclv_rowDelegate,b=this.get("rowDelegate"),c=this._sclv_rowHeightDidChange,a=this._sclv_customRowHeightIndexesDidChange;
if(d===b){return this}this._sclv_rowDelegate=b;if(d){d.removeObserver("rowHeight",this,c);
d.removeObserver("customRowHeightIndexes",this,a)}if(!b){throw"Internal Inconsistancy: ListView must always have CollectionRowDelegate"
}b.addObserver("rowHeight",this,c);b.addObserver("customRowHeightIndexes",this,a);
this._sclv_rowHeightDidChange()._sclv_customRowHeightIndexesDidChange();return this
}.observes("rowDelegate"),_sclv_rowHeightDidChange:function(){var b=this.get("rowDelegate"),a=b.get("rowHeight"),c;
if(a===this._sclv_rowHeight){return this}this._sclv_rowHeight=a;c=SC.IndexSet.create(0,this.get("length"));
this.rowHeightDidChangeForIndexes(c);return this},_sclv_customRowHeightIndexesDidChange:function(){var a=this.get("rowDelegate"),b=a.get("customRowHeightIndexes"),d=this._sclv_customRowHeightIndexes,c=this._sclv_customRowHeightIndexesContentDidChange;
if((b===d)||(d&&d.isEqual(b))){return this}if(d&&this._sclv_isObservingCustomRowHeightIndexes){d.removeObserver("[]",this,c)
}if(this._sclv_isObservingCustomRowHeightIndexes=b&&!b.get("isFrozen")){b.addObserver("[]",this,c)
}this._sclv_customRowHeightIndexesContentDidChange();return this},_sclv_customRowHeightIndexesContentDidChange:function(){var a=this.get("rowDelegate"),b=a.get("customRowHeightIndexes"),c=this._sclv_customRowHeightIndexes,d;
if(b&&c){d=b.copy().add(c)}else{d=b||c}this._sclv_customRowHeightIndexes=b?b.frozenCopy():null;
this.rowHeightDidChangeForIndexes(d);return this},rowOffsetForContentIndex:function(h){if(h===0){return 0
}var j=this.get("rowDelegate"),a=j.get("rowHeight"),f,e,c,b,i,g,d;e=h*a;f=this.get("rowSpacing");
if(f){e+=h*f}if(j.customRowHeightIndexes&&(c=j.get("customRowHeightIndexes"))){b=this._sclv_offsetCache;
if(!b){b=this._sclv_offsetCache=[];i=g=0;c.forEach(function(k){i+=this.rowHeightForContentIndex(k)-a;
b[k+1]=i;g=k},this);this._sclv_max=g+1}i=b[h];if(i===undefined){i=b[h]=b[h-1];if(i===undefined){g=this._sclv_max;
if(h<g){g=c.indexBefore(h)+1}i=b[h]=b[g]||0}}e+=i}return e},rowHeightForContentIndex:function(a){var b=this.get("rowDelegate"),e,c,f,d;
if(b.customRowHeightIndexes&&(d=b.get("customRowHeightIndexes"))){c=this._sclv_heightCache;
if(!c){c=this._sclv_heightCache=[];f=this.get("content");d.forEach(function(g){c[g]=b.contentIndexRowHeight(this,f,g)
},this)}e=c[a];if(e===undefined){e=b.get("rowHeight")}}else{e=b.get("rowHeight")}return e
},rowHeightDidChangeForIndexes:function(b){var a=this.get("length");this._sclv_heightCache=this._sclv_offsetCache=null;
if(b&&b.isIndexSet){b=b.get("min")}this.reload(SC.IndexSet.create(b,a-b));return this
},computeLayout:function(){var a=this._sclv_layout;if(!a){a=this._sclv_layout={}}a.minHeight=this.rowOffsetForContentIndex(this.get("length"));
this.set("calculatedHeight",a.minHeight);return a},layoutForContentIndex:function(a){return{top:this.rowOffsetForContentIndex(a),height:this.rowHeightForContentIndex(a),left:0,right:0}
},contentIndexesInRect:function(h){var a=this.get("rowDelegate").get("rowHeight"),g=SC.minY(h),b=SC.maxY(h),i=h.height||0,f=this.get("length"),e,c,d;
c=(g-(g%a))/a;e=this.rowOffsetForContentIndex(c);while(c>0&&e>g){c--;e-=this.rowHeightForContentIndex(c)
}e+=this.rowHeightForContentIndex(c);while(c<f&&e<=g){c++;e+=this.rowHeightForContentIndex(c)
}if(c<0){c=0}if(c>=f){c=f}d=c+((i-(i%a))/a);if(d>f){d=f}e=this.rowOffsetForContentIndex(d);
while(d>=c&&e>=b){d--;e-=this.rowHeightForContentIndex(d)}e+=this.rowHeightForContentIndex(d);
while(d<f&&e<b){d++;e+=this.rowHeightForContentIndex(d)}d++;if(d<c){d=c}if(d>f){d=f
}return SC.IndexSet.create(c,d-c)},insertionPointView:SC.View.extend({classNames:"sc-list-insertion-point",render:function(a,b){if(b){a.push('<div class="anchor"></div>')
}}}),showInsertionPoint:function(g,f){var h=this._insertionPointView;if(!h){h=this._insertionPointView=this.get("insertionPointView").create()
}var d=g.get("contentIndex"),e=this.get("length"),c=SC.clone(g.get("layout")),a=g.get("outlineLevel"),b=g.get("outlineIndent")||0,i;
if((d>=e)&&d>0){i=this.itemViewForContentIndex(e-1);if(i.get("isGroupView")){a=1;
b=i.get("outlineIndent")}}if(SC.none(a)){a=-1}if(f&SC.DROP_ON){this.hideInsertionPoint();
g.set("isSelected",YES);this._lastDropOnView=g}else{if(this._lastDropOnView){this._lastDropOnView.set("isSelected",NO);
this._lastDropOnView=null}if(f&SC.DROP_AFTER){c.top+=c.height}c.height=2;c.right=0;
c.left=((a+1)*b)+12;delete c.width;h.set("layout",c);this.appendChild(h)}},hideInsertionPoint:function(){if(this._lastDropOnView){this._lastDropOnView.set("isSelected",NO);
this._lastDropOnView=null}var a=this._insertionPointView;if(a){a.removeFromParent().destroy()
}this._insertionPointView=null},insertionIndexForLocation:function(g,k){var b={x:g.x,y:g.y,width:1,height:1},f=this.contentIndexesInRect(b),h=f.get("min"),i=this.get("length"),c,l,m,e,o,d,n,j,a;
if(SC.none(h)||h<0){if((i===0)||(g.y<=this.rowOffsetForContentIndex(0))){h=0}else{if(g.y>=this.rowOffsetForContentIndex(i)){h=i
}}}c=this.rowOffsetForContentIndex(h);l=c+this.rowHeightForContentIndex(h);if(k==SC.DROP_ON){if(this.get("isEditable")){m=Math.min(Math.floor((l-c)*0.2),5)
}else{m=0}if(g.y>=(c+m)||g.y<=(l+m)){return[h,SC.DROP_ON]}}if((h<i)&&(g.y>=l-10)){h++
}if(h>0){j=this.itemViewForContentIndex(h-1);n=(j?j.get("outlineIndent"):0)||0;d=j?j.get("outlineLevel"):0;
if(h<i){j=this.itemViewForContentIndex(h);e=j?j.get("outlineLevel"):0;o=(j?j.get("outlineIndent"):0)||0;
o*=e}else{e=j.get("isGroupView")?1:0;o=n*e}n*=d;if((e!==d)&&(o!==n)){if(n>o){h--;
k=SC.DROP_AFTER}}}if(k===SC.DROP_BEFORE){j=(h<i)?this.itemViewForContentIndex(h):null;
if(!j||j.get("isGroupView")){if(h>0){j=this.itemViewForContentIndex(h-1);if(!j.get("isGroupView")||(j.get("disclosureState")===SC.BRANCH_OPEN)){h=h-1;
k=SC.DROP_AFTER}else{h=-1}}else{h=-1}}if(h<0){k=SC.DRAG_NONE}}return[h,k]},mouseWheel:function(a){var b=SC.InlineTextFieldView.editor;
if(b&&b.get("isEditing")){if(b.get("delegate").get("displayDelegate")===this){SC.InlineTextFieldView.commitEditing()
}}return NO},init:function(){arguments.callee.base.apply(this,arguments);this._sclv_rowDelegateDidChange()
}});require("views/list");SC.GridView=SC.ListView.extend({classNames:["sc-grid-view"],layout:{left:0,right:0,top:0,bottom:0},rowHeight:48,columnWidth:64,exampleView:SC.LabelView,insertionOrientation:SC.HORIZONTAL_ORIENTATION,itemsPerRow:function(){var b=this.get("frame"),a=this.get("columnWidth")||0;
return(a<=0)?1:Math.floor(b.width/a)}.property("clippingFrame","columnWidth").cacheable(),contentIndexesInRect:function(e){var d=this.get("rowHeight")||48,b=this.get("itemsPerRow"),c=Math.floor(SC.minY(e)/d)*b,a=Math.ceil(SC.maxY(e)/d)*b;
return SC.IndexSet.create(c,a-c)},layoutForContentIndex:function(g){var d=this.get("rowHeight")||48,a=this.get("clippingFrame").width,b=this.get("itemsPerRow"),e=Math.floor(a/b),f=Math.floor(g/b),c=g-(b*f);
return{left:c*e,top:f*d,height:d,width:e}},computeLayout:function(){var e=this.get("content"),d=(e)?e.get("length"):0,c=this.get("rowHeight")||48,a=this.get("itemsPerRow"),f=Math.ceil(d/a);
var b=this._cachedLayoutHash;if(!b){b=this._cachedLayoutHash={}}b.minHeight=f*c;this.calculatedHeight=b.minHeight;
return b},insertionPointClass:SC.View.extend({classNames:["grid-insertion-point"],render:function(a,b){if(b){a.push('<span class="anchor"></span>')
}}}),showInsertionPoint:function(c,e){if(!c){return}if(e===SC.DROP_ON){if(c!==this._dropOnInsertionPoint){this.hideInsertionPoint();
this._dropOnInsertionPoint=c}}else{if(this._dropOnInsertionPoint){this._dropOnInsertionPoint=null
}if(!this._insertionPointView){this._insertionPointView=this.insertionPointClass.create()
}var b=this._insertionPointView;var a=c.get("frame");var d={height:a.height-6,x:a.x,y:a.y+6,width:0};
if(!SC.rectsEqual(b.get("frame"),d)){b.set("frame",d)}if(b.parentNode!==c.parentNode){c.parentNode.appendChild(b)
}}},hideInsertionPoint:function(){var a=this._insertionPointView;if(a){a.removeFromParent()
}if(this._dropOnInsertionPoint){this._dropOnInsertionPoint=null}},insertionIndexForLocation:function(d,j){var e=this.get("frame"),g=this.get("clippingFrame"),k=this.get("itemsPerRow"),a=Math.floor(e.width/k),m=Math.floor((d.y-e.y-g.y)/this.get("rowHeight"));
var i=SC.DROP_BEFORE,c=(d.x-e.x-g.x),b=Math.floor(c/a),l=(c/a)-b;if(j===SC.DROP_ON){if(l>0.8){b++
}if((l>=0.2)&&(l<=0.8)){i=SC.DROP_ON}}else{if(l>0.45){b++}}var h=(m*k)+b;return[h,i]
},_gv_clippingFrameDidChange:function(){var d=this.get("nowShowing"),c,b,a;this.notifyPropertyChange("itemsPerRow");
a=d.get("length");for(b=0;b<a;b++){c=this.itemViewForContentIndex(b);c.adjust(this.layoutForContentIndex(b))
}}.observes("clippingFrame")});SC.ToolbarView=SC.View.extend({classNames:["sc-toolbar-view"],anchorLocation:null,layout:{left:0,height:32,right:0},init:function(){if(this.anchorLocation){this.layout=SC.merge(this.layout,this.anchorLocation)
}arguments.callee.base.apply(this,arguments)}});require("views/toolbar");SC.VERTICAL_ORIENTATION="vertical";
SC.HORIZONTAL_ORIENTATION="horizontal";SC.WorkspaceView=SC.View.extend({classNames:["sc-workspace-view"],topToolbar:SC.ToolbarView.extend(),bottomToolbar:null,contentView:SC.View.extend(),autoResizeToolbars:NO,defaultToolbarSize:44,largeToolbarSize:44,smallToolbarSize:30,toolbarSize:function(){if(!this.get("autoResizeToolbars")){return this.get("defaultToolbarSize")
}if(this.get("orientation")===SC.HORIZONTAL_ORIENTATION){return this.get("smallToolbarSize")
}return this.get("largeToolbarSize")}.property("autoHideMaster","orientation"),orientation:function(){var a=this.get("frame");
if(a.width>a.height){return SC.HORIZONTAL_ORIENTATION}else{return SC.VERTICAL_ORIENTATION
}}.property("frame").cacheable(),masterIsHidden:NO,masterIsHiddenDidChange:function(){var a,b=this.get("masterIsHidden");
if(a=this.get("topToolbar")){a.set("masterIsHidden",b)}if(a=this.get("bottomToolbar")){a.set("masterIsHidden",b)
}}.observes("masterIsHidden"),_scmd_tilePropertyDidChange:function(){this.invokeOnce("_scws_tile")
}.observes("toolbarSize"),createChildViews:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("topToolbar");if(a){a=this.topToolbar=this.activeTopToolbar=this.createChildView(a);
this.appendChild(a)}var c=this.get("bottomToolbar");if(c){c=this.bottomToolbar=this.activeBottomToolbar=this.createChildView(c);
this.appendChild(c)}var b=this.get("contentView");b=this.contentView=this.activeContentView=this.createChildView(b);
this.appendChild(b);this.invokeOnce("_scws_tile")},_scws_tile:function(){var b=0,e=0,a=this.get("topToolbar"),f=this.get("bottomToolbar"),d=this.get("contentView"),c=this.get("toolbarSize");
if(a){a.set("layout",{left:0,right:0,top:0,height:c});b+=c}if(f){f.set("layout",{left:0,right:0,bottom:0,height:c});
e+=c}this.contentView.set("layout",{left:0,right:0,top:b,bottom:e})},hasTopToolbar:function(){if(this.get("topToolbar")){return YES
}return NO}.property("topToolbar").cacheable(),hasBottomToolbar:function(){if(this.get("bottomToolbar")){return YES
}return NO}.property("bottomToolbar").cacheable(),childDidChange:function(){this._scws_tile()
},activeTopToolbar:null,activeBottomToolbar:null,activeContentView:null,topToolbarDidChange:function(){var b=this.activeTopToolbar,a=this.get("topToolbar");
if(b){this.removeChild(b)}if(a){this.appendChild(a)}this.activeTopToolbar=a;this.invokeLast("childDidChange")
}.observes("topToolbar"),bottomToolbarDidChange:function(){var b=this.activeBottomToolbar,a=this.get("bottomToolbar");
if(b){this.removeChild(b)}if(a){this.appendChild(a)}this.activeBottomToolbar=a;this.invokeLast("childDidChange")
}.observes("bottomToolbar"),contentViewDidChange:function(){var b=this.activeContentView,a=this.get("contentView");
if(b){this.removeChild(b)}if(a){this.appendChild(a)}this.activeContentView=a;this.invokeLast("childDidChange")
}.observes("contentView"),displayProperties:"hasTopToolbar hasBottomToolbar".w(),createRenderer:function(a){return a.workspace()
},updateRenderer:function(a){a.attr({hasTopToolbar:!!this.get("topToolbar"),hasBottomToolbar:!!this.get("bottomToolbar")})
}});require("views/workspace");require("views/toolbar");SC.VERTICAL_ORIENTATION="vertical";
SC.HORIZONTAL_ORIENTATION="horizontal";SC.MasterDetailView=SC.View.extend({classNames:["sc-master-detail-view"],masterView:SC.WorkspaceView.extend({topToolbar:SC.ToolbarView.extend({}),contentView:SC.View.extend({backgroundColor:"white"})}),detailView:SC.WorkspaceView.extend({topToolbar:SC.ToolbarView.extend({childViews:"showHidePicker".w(),showHidePicker:SC.ButtonView.extend({layout:{left:7,centerY:0,height:30,width:100},controlSize:SC.AUTO_CONTROL_SIZE,title:"Picker",action:"toggleMasterPicker",isVisible:NO,isVisibleBinding:".parentView.masterIsHidden"})})}),autoHideMaster:function(){if(SC.platform.touch){return YES
}return NO}.property().cacheable(),masterWidth:250,masterIsHidden:function(){if(!this.get("autoHideMaster")){return NO
}if(this.get("orientation")===SC.HORIZONTAL_ORIENTATION){return NO}return YES}.property("autoHideMaster","orientation"),orientation:function(){var a=this.get("frame");
if(a.width>a.height){return SC.HORIZONTAL_ORIENTATION}else{return SC.VERTICAL_ORIENTATION
}}.property("frame").cacheable(),toggleMasterPicker:function(a){if(!this.get("masterIsHidden")){return
}if(this._picker&&this._picker.get("isVisibleInWindow")){this.hideMasterPicker()}else{this.showMasterPicker(a)
}},showMasterPicker:function(b){if(this._picker&&this._picker.get("isVisibleInWindow")){return
}if(!this._picker){var a=this.get("pickerPane");this._picker=a.create({});this._picker.set("contentView",this.get("masterView"));
this._picker.set("extraRightOffset",this.get("pointerDistanceFromEdge"))}this.showPicker(this._picker,b)
},hideMasterPicker:function(){if(this._picker&&this._picker.get("isVisibleInWindow")){this.hidePicker(this._picker)
}},showPicker:function(b,a){b.popup(a,SC.PICKER_POINTER,[3,0,1,2,3],[9,-9,-18,18])
},hidePicker:function(a){a.remove()},pickerPane:SC.PickerPane.extend({layout:{width:250,height:480},theme:"popover"}),_picker:null,pointerDistanceFromEdge:46,_scmd_masterIsHiddenDidChange:function(){var a=this.get("masterIsHidden");
this.get("masterView").set("masterIsHidden",a);this.get("detailView").set("masterIsHidden",a)
}.observes("masterIsHidden"),_scmd_orientationDidChange:function(){this.invokeOnce("_scmd_tile")
}.observes("orientation"),_scmd_retileProperties:function(){this.invokeOnce("_scmd_tile")
}.observes("masterIsHidden","masterWidth"),createChildViews:function(){var b=this.get("masterView");
b=this.masterView=this.createChildView(b);var a=this.get("detailView");a=this.detailView=this.createChildView(a);
this.appendChild(a);this.invokeOnce("_scmd_tile")},_masterIsDrawn:NO,_scmd_tile:function(){var b=!this.get("masterIsHidden");
var e=this.get("masterWidth"),d=this.get("masterView"),c=this.get("detailView");if(b){this.hideMasterPicker();
if(!this._masterIsDrawn){this.appendChild(d);this._masterIsDrawn=YES}d.set("layout",{left:0,top:0,bottom:0,width:e});
var a=this.renderer?this.renderer.BORDER:0;c.set("layout",{left:e+a,right:0,top:0,bottom:0})
}else{if(this._masterIsDrawn){this.removeChild(d);this._masterIsDrawn=NO}c.set("layout",{left:0,right:0,top:0,bottom:0})
}},createRenderer:function(a){return a.masterDetail()},updateRenderer:function(a){}});
SC.ScrollerView=SC.View.extend({classNames:["sc-scroller-view"],_touchScrollValue:NO,value:function(a,c){var b=this.get("minimum");
if(c!==undefined){this._scs_value=c}c=this._scs_value||b;return Math.max(Math.min(c,this.get("maximum")),b)
}.property("maximum","minimum").cacheable(),displayValue:function(){var a;if(this.get("_touchScrollValue")){a=this.get("_touchScrollValue")
}else{a=this.get("value")}return a}.property("value","_touchScrollValue").cacheable(),proportion:0,maximum:100,minimum:0,isEnabled:YES,layoutDirection:SC.LAYOUT_VERTICAL,hasButtons:YES,scrollbarThickness:14,capLength:18,capOverlap:14,buttonLength:41,buttonOverlap:11,displayProperties:"thumbPosition thumbLength isEnabled controlsHidden".w(),render:function(c,a){var b=[],i="",e,k,g,f,l,j,h,d,m;
switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:b.push("sc-vertical");
break;case SC.LAYOUT_HORIZONTAL:b.push("sc-horizontal");break}if(!this.get("isEnabled")){b.push("disabled")
}if(this.get("controlsHidden")){b.push("controls-hidden")}c.addClass(b);k=this.get("thumbLength");
e=this.get("thumbPosition");if(a){if(this.get("hasButtons")){i='<div class="button-bottom"></div><div class="button-top"></div>'
}else{i='<div class="endcap"></div>'}switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:c.push('<div class="track"></div>','<div class="cap"></div>',i,'<div class="thumb" style="height: '+k+'px;">','<div class="thumb-center"></div>','<div class="thumb-top"></div>','<div class="thumb-bottom"></div></div>');
break;case SC.LAYOUT_HORIZONTAL:c.push('<div class="track"></div>','<div class="cap"></div>',i,'<div class="thumb" style="width: '+k+'px;">','<div class="thumb-center"></div>','<div class="thumb-top"></div>','<div class="thumb-bottom"></div></div>')
}}else{if(this.get("controlsHidden")){return}f=this.$(".thumb");this.adjustThumb(f,e,k)
}},touchScrollDidStart:function(a){this.set("_touchScrollValue",a)},touchScrollDidEnd:function(a){this.set("_touchScrollValue",NO)
},touchScrollDidChange:function(a){this.set("_touchScrollValue",a)},adjustThumb:function(b,a,c){this.adjustThumbPosition(b,a);
this.adjustThumbSize(b,c)},adjustThumbPosition:function(b,a){if(this._thumbPosition===a){return
}switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:b.css("top",a);break;
case SC.LAYOUT_HORIZONTAL:b.css("left",a);break}this._thumbPosition=a},adjustThumbSize:function(a,b){if(this._thumbSize===b){return
}switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:a.css("height",Math.max(b,20));
break;case SC.LAYOUT_HORIZONTAL:a.css("width",Math.max(b,20));break}this._thumbSize=b
},trackLength:function(){var a=this.get("scrollerLength");a-=this.capLength-this.capOverlap;
a-=this.buttonLength-this.buttonOverlap;return a}.property("scrollerLength").cacheable(),scrollerLength:function(){switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:return this.get("frame").height;
case SC.LAYOUT_HORIZONTAL:return this.get("frame").width}return 0}.property("frame").cacheable(),thumbLength:function(){var a;
a=Math.floor(this.get("trackLength")*this.get("proportion"));a=isNaN(a)?0:a;return Math.max(a,20)
}.property("trackLength","proportion").cacheable(),thumbPosition:function(){var g=this.get("displayValue"),c=this.get("maximum"),b=this.get("trackLength"),d=this.get("thumbLength"),f=this.get("capLength"),e=this.get("capOverlap"),a;
a=(g/c)*(b-d);a+=f-e;return Math.floor(isNaN(a)?0:a)}.property("displayValue","maximum","trackLength","thumbLength").cacheable(),controlsHidden:function(){return this.get("proportion")>=1
}.property("proportion").cacheable(),mouseDown:function(h){if(!this.get("isEnabled")){return NO
}var d=h.target,b=this.get("thumbPosition"),g,c,f;if(d.className.indexOf("thumb")>=0){c=this.convertFrameFromView({x:h.pageX,y:h.pageY});
c.x-=b;c.y-=b;this._thumbDragging=YES;this._thumbOffset=c;this._mouseDownLocation={x:h.pageX,y:h.pageY};
this._thumbPositionAtDragStart=this.get("thumbPosition")}else{if(d.className.indexOf("button-top")>=0){this.decrementProperty("value",30);
this.makeButtonActive(".button-top");this.startMouseDownTimer("scrollUp")}else{if(d.className.indexOf("button-bottom")>=0){this.incrementProperty("value",30);
this.makeButtonActive(".button-bottom");this.startMouseDownTimer("scrollDown")}else{var e=this.get("scrollerLength"),a=this.convertFrameFromView({x:h.pageX,y:h.pageY}),i;
switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:this._mouseDownLocation=i=a.y;
break;case SC.LAYOUT_HORIZONTAL:this._mouseDownLocation=i=a.x;break}if(i<b){this.decrementProperty("value",e);
this.startMouseDownTimer("page")}else{this.incrementProperty("value",e);this.startMouseDownTimer("page")
}}}}return YES},mouseUp:function(a){var c=this._scs_buttonActive,b=NO,d;if(c){c.removeClass("active");
b=YES}d=this._mouseDownTimer;if(d){d.invalidate();this._mouseDownTimer=null}this._thumbDragging=NO;
return b},mouseDragged:function(a){var d,c,f,b,e=this._thumbPositionAtDragStart;if(!this._thumbDragging){return NO
}switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:f=(a.pageY-this._mouseDownLocation.y);
break;case SC.LAYOUT_HORIZONTAL:f=(a.pageX-this._mouseDownLocation.x);break}b=e+f;
c=this.get("trackLength")-this.get("thumbLength");this.set("value",Math.round((b/c)*this.get("maximum")));
return YES},startMouseDownTimer:function(a){var b;this._mouseDownTimerAction=a;this._mouseDownTimer=SC.Timer.schedule({target:this,action:this.mouseDownTimerDidFire,interval:300})
},mouseDownTimerDidFire:function(){var d=this.get("scrollerLength"),a=SC.device.get("mouseLocation"),c=this.get("thumbPosition"),b=this.get("thumbLength"),e=50;
switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:a=this.convertFrameFromView(a).y;
break;case SC.LAYOUT_HORIZONTAL:a=this.convertFrameFromView(a).x;break}switch(this._mouseDownTimerAction){case"scrollDown":this.incrementProperty("value",30);
break;case"scrollUp":this.decrementProperty("value",30);break;case"page":e=150;if(a<c){this.decrementProperty("value",d)
}else{if(a>c+b){this.incrementProperty("value",d)}}}this._mouseDownTimer=SC.Timer.schedule({target:this,action:this.mouseDownTimerDidFire,interval:e})
},makeButtonActive:function(a){this._scs_buttonActive=this.$(a).addClass("active")
}});sc_require("views/scroller");sc_require("mixins/border");SC.NORMAL_SCROLL_DECELERATION=0.95;
SC.FAST_SCROLL_DECELERATION=0.85;SC.ScrollView=SC.View.extend(SC.Border,{classNames:["sc-scroll-view"],isScrollable:YES,contentView:null,horizontalAlign:SC.ALIGN_LEFT,verticalAlign:SC.ALIGN_TOP,horizontalScrollOffset:function(b,d){if(d!==undefined){var c=this.minimumHorizontalScrollOffset(),a=this.get("maximumHorizontalScrollOffset");
this._scroll_horizontalScrollOffset=Math.max(c,Math.min(a,d))}return this._scroll_horizontalScrollOffset||0
}.property().cacheable(),verticalScrollOffset:function(b,d){if(d!==undefined){var c=this.get("minimumVerticalScrollOffset"),a=this.get("maximumVerticalScrollOffset");
this._scroll_verticalScrollOffset=Math.max(c,Math.min(a,d))}return this._scroll_verticalScrollOffset||0
}.property().cacheable(),maximumScrollOffset:function(b,a,c){if(b>=a){return b-a}if(c===SC.ALIGN_LEFT||c===SC.ALIGN_TOP){return 0
}else{if(c===SC.ALIGN_MIDDLE||c===SC.ALIGN_CENTER){return 0-Math.round((a-b)/2)}else{return 0-(a-b)
}}},minimumScrollOffset:function(b,a,c){if(b>a){return 0}if(c===SC.ALIGN_LEFT||c===SC.ALIGN_TOP){return 0
}else{if(c===SC.ALIGN_MIDDLE||c===SC.ALIGN_CENTER){return 0-Math.round((a-b)/2)}else{return 0-(a-b)
}}},maximumHorizontalScrollOffset:function(){var c=this.get("contentView"),b=0,a=0;
if(c&&c.get("frame")){b=c.get("frame").width}if(c){a=c.calculatedWidth||0}if(c&&c.calculatedWidth&&c.calculatedWidth!==0){b=c.calculatedWidth
}b*=this._scale;var d=this.get("containerView").get("frame").width;if(!this.get("canScrollHorizontal")){b=Math.min(b,d)
}return this.maximumScrollOffset(b,d,this.get("horizontalAlign"))}.property(),maximumVerticalScrollOffset:function(){var a=this.get("contentView"),c=0,b=0;
if(a&&a.get("frame")){c=a.get("frame").height}if(a){b=a.calculatedHeight||0}if(a&&a.calculatedHeight&&a.calculatedHeight!==0){c=a.calculatedHeight
}c*=this._scale;var d=this.get("containerView").get("frame").height;if(!this.get("canScrollVertical")){c=Math.min(c,d)
}return this.maximumScrollOffset(c,d,this.get("verticalAlign"))}.property(),minimumHorizontalScrollOffset:function(){var b=this.get("contentView");
var a=b?b.get("frame").width:0;if(b&&b.calculatedWidth&&b.calculatedWidth!==0){a=b.calculatedWidth
}a*=this._scale;var c=this.get("containerView").get("frame").width;if(!this.get("canScrollHorizontal")){a=Math.min(a,c)
}return this.minimumScrollOffset(a,c,this.get("horizontalAlign"))}.property(),minimumVerticalScrollOffset:function(){var a=this.get("contentView");
var b=(a&&a.get("frame"))?a.get("frame").height:0;if(a&&a.calculatedHeight&&a.calculatedHeight!==0){b=a.calculatedHeight
}b*=this._scale;var c=this.get("containerView").get("frame").height;if(!this.get("canScrollVertical")){b=Math.min(b,c)
}return this.minimumScrollOffset(b,c,this.get("verticalAlign"))}.property(),verticalLineScroll:20,horizontalLineScroll:20,verticalPageScroll:function(){return this.get("frame").height
}.property("frame"),horizontalPageScroll:function(){return this.get("frame").width
}.property("frame"),hasHorizontalScroller:YES,horizontalScrollerView:function(){return SC.ScrollerView
}.property().cacheable(),isHorizontalScrollerVisible:YES,canScrollHorizontal:function(){return !!(this.get("hasHorizontalScroller")&&this.get("horizontalScrollerView")&&this.get("isHorizontalScrollerVisible"))
}.property("isHorizontalScrollerVisible").cacheable(),autohidesHorizontalScroller:YES,hasVerticalScroller:YES,verticalScrollerView:function(){return SC.ScrollerView
}.property().cacheable(),isVerticalScrollerVisible:YES,canScrollVertical:function(){return !!(this.get("hasVerticalScroller")&&this.get("verticalScrollerView")&&this.get("isVerticalScrollerVisible"))
}.property("isVerticalScrollerVisible").cacheable(),autohidesVerticalScroller:YES,verticalScrollerBottom:0,verticalOverlay:function(){if(SC.platform.touch){return YES
}return NO}.property().cacheable(),horizontalOverlay:function(){if(SC.platform.touch){return YES
}return NO}.property().cacheable(),verticalScrollerLayout:null,horizontalScrollerLayout:null,containerView:SC.ContainerView.extend({}),scrollTo:function(a,b){if(b===undefined&&SC.typeOf(a)===SC.T_HASH){b=a.y;
a=a.x}if(!SC.none(a)){a=Math.max(this.get("minimumHorizontalScrollOffset"),Math.min(this.get("maximumHorizontalScrollOffset"),a));
this.set("horizontalScrollOffset",a)}if(!SC.none(b)){b=Math.max(this.get("minimumVerticalScrollOffset"),Math.min(this.get("maximumVerticalScrollOffset"),b));
this.set("verticalScrollOffset",b)}return this},scrollBy:function(a,b){if(b===undefined&&SC.typeOf(a)===SC.T_HASH){b=a.y;
a=a.x}a=(a)?this.get("horizontalScrollOffset")+a:null;b=(b)?this.get("verticalScrollOffset")+b:null;
return this.scrollTo(a,b)},scrollToVisible:function(b){if(arguments.length===0){return arguments.callee.base.apply(this,arguments)
}var c=this.get("contentView");if(!c){return NO}var a=b.get("frame");if(!a){return NO
}a=c.convertFrameFromView(a,b.get("parentView"));return this.scrollToRect(a)},scrollToRect:function(b){var a=SC.cloneRect(this.get("containerView").get("frame"));
a.x=this.get("horizontalScrollOffset");a.y=this.get("verticalScrollOffset");var d=a.x,c=a.y;
a.y-=Math.max(0,SC.minY(a)-SC.minY(b));a.x-=Math.max(0,SC.minX(a)-SC.minX(b));a.y+=Math.max(0,SC.maxY(b)-SC.maxY(a));
a.x+=Math.max(0,SC.maxX(b)-SC.maxX(a));if((d!==a.x)||(c!==a.y)){this.scrollTo(a.x,a.y);
return YES}else{return NO}},scrollDownLine:function(a){if(a===undefined){a=1}return this.scrollBy(null,this.get("verticalLineScroll")*a)
},scrollUpLine:function(a){if(a===undefined){a=1}return this.scrollBy(null,0-this.get("verticalLineScroll")*a)
},scrollRightLine:function(a){if(a===undefined){a=1}return this.scrollTo(this.get("horizontalLineScroll")*a,null)
},scrollLeftLine:function(a){if(a===undefined){a=1}return this.scrollTo(0-this.get("horizontalLineScroll")*a,null)
},scrollDownPage:function(a){if(a===undefined){a=1}return this.scrollBy(null,this.get("verticalPageScroll")*a)
},scrollUpPage:function(a){if(a===undefined){a=1}return this.scrollBy(null,0-(this.get("verticalPageScroll")*a))
},scrollRightPage:function(a){if(a===undefined){a=1}return this.scrollBy(this.get("horizontalPageScroll")*a,null)
},scrollLeftPage:function(a){if(a===undefined){a=1}return this.scrollBy(0-(this.get("horizontalPageScroll")*a),null)
},tile:function(){var g=SC.platform.touch;var c=this.get("hasHorizontalScroller")?this.get("horizontalScrollerView"):null;
var i=c&&!g&&this.get("isHorizontalScrollerVisible");var k=this.get("hasVerticalScroller")?this.get("verticalScrollerView"):null;
var f=k&&!g&&this.get("isVerticalScrollerVisible");var e=this.get("containerView");
var n={left:0,top:0};var m,h,b,o,d,a;var j=((i)?c.get("scrollbarThickness"):0);var l=(f)?k.get("scrollbarThickness"):0;
if(i){a=this.get("horizontalScrollerLayout");h={left:(a?a.left:0),bottom:(a?a.bottom:0),right:(a?a.right+l-1:l-1),height:j};
c.set("layout",h);o=this.get("horizontalOverlay");n.bottom=o?0:(h.bottom+j)}else{n.bottom=0
}if(c){c.set("isVisible",i)}if(f){j=j+this.get("verticalScrollerBottom");d=this.get("verticalScrollerLayout");
h={top:(d?d.top:0),bottom:(d?d.bottom+j:j),right:(d?d.right:0),width:l};k.set("layout",h);
b=this.get("verticalOverlay");n.right=b?0:(h.right+l)}else{n.right=0}if(k){k.set("isVisible",f)
}e.adjust(n)},scrollerVisibilityDidChange:function(){this.tile()}.observes("isVerticalScrollerVisible","isHorizontalScrollerVisible"),_scroll_wheelDeltaX:0,_scroll_wheelDeltaY:0,mouseWheel:function(a){var b=(SC.browser.safari&&SC.browser.version>533)?120:1;
this._scroll_wheelDeltaX+=a.wheelDeltaX/b;this._scroll_wheelDeltaY+=a.wheelDeltaY/b;
this.invokeLater(this._scroll_mouseWheel,10);return this.get("canScrollHorizontal")||this.get("canScrollVertical")
},_scroll_mouseWheel:function(){this.scrollBy(this._scroll_wheelDeltaX,this._scroll_wheelDeltaY);
if(SC.WHEEL_MOMENTUM&&this._scroll_wheelDeltaY>0){this._scroll_wheelDeltaY=Math.floor(this._scroll_wheelDeltaY*0.95);
this._scroll_wheelDeltaY=Math.max(this._scroll_wheelDeltaY,0);this.invokeLater(this._scroll_mouseWheel,10)
}else{if(SC.WHEEL_MOMENTUM&&this._scroll_wheelDeltaY<0){this._scroll_wheelDeltaY=Math.ceil(this._scroll_wheelDeltaY*0.95);
this._scroll_wheelDeltaY=Math.min(this._scroll_wheelDeltaY,0);this.invokeLater(this._scroll_mouseWheel,10)
}else{this._scroll_wheelDeltaY=0;this._scroll_wheelDeltaX=0}}},canScale:NO,_scale:1,scale:function(a,b){if(b!==undefined){this._scale=Math.min(Math.max(this.get("minimumScale"),b),this.get("maximumScale"))
}return this._scale}.property().cacheable(),minimumScale:0.25,maximumScale:2,autoScaleRange:NO,_scale_css:"",updateScale:function(b){var a=this.get("contentView");
if(!a){return}if(a.isScalable){this.get("contentView").applyScale(b);this._scale_css=""
}else{this._scale_css="scale3d("+b+", "+b+", 1)"}},acceptsMultitouch:YES,decelerationRate:SC.NORMAL_SCROLL_DECELERATION,alwaysBounceHorizontal:NO,alwaysBounceVertical:YES,delaysContentTouches:YES,_touchScrollDidChange:function(){if(this.get("contentView").touchScrollDidChange){this.get("contentView").touchScrollDidChange(this._scroll_horizontalScrollOffset,this._scroll_verticalScrollOffset)
}if(this.verticalScrollerView&&this.verticalScrollerView.touchScrollDidChange){this.verticalScrollerView.touchScrollDidChange(this._scroll_verticalScrollOffset)
}if(this.horizontalScrollerView&&this.horizontalScrollerView.touchScrollDidChange){this.horizontalScrollerView.touchScrollDidChange(this._scroll_horizontalScrollOffset)
}},_touchScrollDidStart:function(){if(this.get("contentView").touchScrollDidStart){this.get("contentView").touchScrollDidStart(this._scroll_horizontalScrollOffset,this._scroll_verticalScrollOffset)
}if(this.verticalScrollerView&&this.verticalScrollerView.touchScrollDidStart){this.verticalScrollerView.touchScrollDidStart(this._touch_verticalScrollOffset)
}if(this.horizontalScrollerView&&this.horizontalScrollerView.touchScrollDidStart){this.horizontalScrollerView.touchScrollDidStart(this._touch_horizontalScrollOffset)
}},_touchScrollDidEnd:function(){if(this.get("contentView").touchScrollDidEnd){this.get("contentView").touchScrollDidEnd(this._scroll_horizontalScrollOffset,this._scroll_verticalScrollOffset)
}if(this.verticalScrollerView&&this.verticalScrollerView.touchScrollDidEnd){this.verticalScrollerView.touchScrollDidEnd(this._touch_verticalScrollOffset)
}if(this.horizontalScrollerView&&this.horizontalScrollerView.touchScrollDidEnd){this.horizontalScrollerView.touchScrollDidEnd(this._touch_horizontalScrollOffset)
}},_applyCSSTransforms:function(b){var a="";this.updateScale(this._scale);a+="translate3d("+-this._scroll_horizontalScrollOffset+"px, "+-Math.round(this._scroll_verticalScrollOffset)+"px,0) ";
a+=this._scale_css;if(b){b.style.webkitTransform=a;b.style.webkitTransformOrigin="top left"
}},captureTouch:function(a){return YES},touchGeneration:0,touchStart:function(b){var a=++this.touchGeneration;
if(!this.tracking&&this.get("delaysContentTouches")){this.invokeLater(this.beginTouchesInContent,150,a)
}else{if(!this.tracking){this.invokeLater(this.beginTouchesInContent,1,a)}}this.beginTouchTracking(b,YES);
return YES},beginTouchesInContent:function(b){if(b!==this.touchGeneration){return
}var c=this.touch,a;if(c&&this.tracking&&!this.dragging&&!c.touch.scrollHasEnded){c.touch.captureTouch(this,YES);
if(!c.touch.touchResponder){c.touch.makeTouchResponder(this)}}},beginTouchTracking:function(d,m){var f=d.averagedTouchesForView(this,m);
var b=this._scroll_verticalScrollOffset||0,c=this._scroll_horizontalScrollOffset||0,h=c,g=b;
if(this.touch&&this.touch.timeout){clearTimeout(this.touch.timeout);this.touch.timeout=null;
h=this.touch.startClipOffset.x;g=this.touch.startClipOffset.y}var i=this.get("contentView");
var a=i?i.get("frame").width:0,k=i?i.get("frame").height:0;if(i.calculatedWidth&&i.calculatedWidth!==0){a=i.calculatedWidth
}if(i.calculatedHeight&&i.calculatedHeight!==0){k=i.calculatedHeight}var j=this.get("containerView").get("frame").width,o=this.get("containerView").get("frame").height;
var e=this.convertFrameToView(this.get("frame"),null),n=(c+(f.x-e.x))/this._scale,l=(b+(f.y-e.y))/this._scale;
this.touch={startTime:d.timeStamp,notCalculated:YES,enableScrolling:{x:a*this._scale>j||this.get("alwaysBounceHorizontal"),y:k*this._scale>o||this.get("alwaysBounceVertical")},scrolling:{x:NO,y:NO},enableBouncing:SC.platform.bounceOnScroll,startClipOffset:{x:h,y:g},lastScrollOffset:{x:c,y:b},startTouchOffset:{x:f.x,y:f.y},scrollVelocity:{x:0,y:0},startTouchOffsetInContent:{x:n,y:l},containerSize:{width:j,height:o},contentSize:{width:a,height:k},startScale:this._scale,startDistance:f.d,canScale:this.get("canScale")&&SC.platform.pinchToZoom,minimumScale:this.get("minimumScale"),maximumScale:this.get("maximumScale"),globalFrame:e,layer:this.get("contentView").get("layer"),resistanceCoefficient:0.998,resistanceAsymptote:320,decelerationFromEdge:0.05,accelerationToEdge:0.1,scrollTolerance:{x:15,y:15},scaleTolerance:5,secondaryScrollTolerance:30,scrollLock:500,decelerationRate:this.get("decelerationRate"),lastEventTime:d.timeStamp,touch:(m?d:(this.touch?this.touch.touch:null))};
if(!this.tracking){this.tracking=YES;this.dragging=NO}},_adjustForEdgeResistance:function(f,d,b,c,a){var e;
if(f<d){e=f-d}else{if(f>b){e=b-f}else{return f}}e=Math.pow(c,Math.abs(e))*a;if(f<d){e=e-a
}else{e=-e+a}return Math.min(Math.max(d,f),b)+e},touchesDragged:function(a,c){var b=a.averagedTouchesForView(this);
this.updateTouchScroll(b.x,b.y,b.d,a.timeStamp)},updateTouchScroll:function(j,i,d,g){var f=this.touch,a=j-f.globalFrame.x,k=i-f.globalFrame.y,s,l,t,m,z,x;
var c=((this._scroll_horizontalScrollOffset||0)+a)/this._scale,b=((this._scroll_verticalScrollOffset||0)+k)/this._scale;
var w=c-f.startTouchOffset.x,v=b-f.startTouchOffset.y;var h=f.dragging;if(!f.scrolling.x&&Math.abs(w)>f.scrollTolerance.x&&f.enableScrolling.x){h=YES;
f.scrolling.x=YES;f.scrollTolerance.y=f.secondaryScrollTolerance;f.startTouchOffset.x=j;
w=0}if(!f.scrolling.y&&Math.abs(v)>f.scrollTolerance.y&&f.enableScrolling.y){h=YES;
f.scrolling.y=YES;f.scrollTolerance.x=f.secondaryScrollTolerance;f.startTouchOffset.y=i;
v=0}if(h&&!f.dragging){f.dragging=YES;this.dragging=YES;this._touchScrollDidStart()
}if(!f.scrolling.x&&!f.scrolling.y&&!f.canScale){return}if(f.scrolling.x&&!f.scrolling.y){if(w>f.scrollLock&&!f.scrolling.y){f.enableScrolling.y=NO
}}if(f.scrolling.y&&!f.scrolling.x){if(v>f.scrollLock&&!f.scrolling.x){f.enableScrolling.x=NO
}}if(f.canScale){var o=f.startDistance,u=d-o;if(Math.abs(u)>f.scaleTolerance){f.scrolling.y=YES;
f.scrolling.x=YES;var y=f.startScale*(d/Math.max(o,50));var p=this._adjustForEdgeResistance(y,f.minimumScale,f.maximumScale,f.resistanceCoefficient,f.resistanceAsymptote);
this.dragging=YES;this._scale=p;var r=c*this._scale,q=b*this._scale}}z=this.minimumScrollOffset(f.contentSize.width*this._scale,f.containerSize.width,this.get("horizontalAlign"));
x=this.minimumScrollOffset(f.contentSize.height*this._scale,f.containerSize.height,this.get("verticalAlign"));
m=this.maximumScrollOffset(f.contentSize.width*this._scale,f.containerSize.width,this.get("horizontalAlign"));
l=this.maximumScrollOffset(f.contentSize.height*this._scale,f.containerSize.height,this.get("verticalAlign"));
t=f.startTouchOffsetInContent.x*this._scale-a;s=f.startTouchOffsetInContent.y*this._scale-k;
if(f.enableBouncing){t=this._adjustForEdgeResistance(t,z,m,f.resistanceCoefficient,f.resistanceAsymptote);
s=this._adjustForEdgeResistance(s,x,l,f.resistanceCoefficient,f.resistanceAsymptote)
}else{t=Math.max(z,Math.min(m,t));s=Math.max(x,Math.min(l,s))}if(f.scrolling.x){this._scroll_horizontalScrollOffset=t
}if(f.scrolling.y){this._scroll_verticalScrollOffset=s}this._applyCSSTransforms(f.layer);
this._touchScrollDidChange();if(g-f.lastEventTime>=1||f.notCalculated){f.notCalculated=NO;
var e=this._scroll_horizontalScrollOffset;var n=this._scroll_verticalScrollOffset;
f.scrollVelocity.x=((e-f.lastScrollOffset.x)/Math.max(1,g-f.lastEventTime));f.scrollVelocity.y=((n-f.lastScrollOffset.y)/Math.max(1,g-f.lastEventTime));
f.lastScrollOffset.x=e;f.lastScrollOffset.y=n;f.lastEventTime=g}},touchEnd:function(c){var a=this.touch,b=c.averagedTouchesForView(this);
c.scrollHasEnded=YES;if(b.touchCount>0){this.beginTouchTracking(c,NO)}else{if(this.dragging){a.dragging=NO;
a.lastEventTime=c.timeStamp;this.startDecelerationAnimation()}else{c.captureTouch(this,YES);
if(c.touchResponder&&c.touchResponder!==this){c.end()}if(!c.touchResponder||c.touchResponder===this){if(c.nextTouchResponder){c.makeTouchResponder(c.nextTouchResponder)
}}else{}}this.tracking=NO;this.dragging=NO}},touchCancelled:function(a){this.beginPropertyChanges();
this.set("scale",this._scale);this.set("verticalScrollOffset",this._scroll_verticalScrollOffset);
this.set("horizontalScrollOffset",this._scroll_horizontalScrollOffset);this.endPropertyChanges();
this.tracking=NO;if(this.dragging){this._touchScrollDidEnd()}this.dragging=NO;this.touch=null
},startDecelerationAnimation:function(a){var b=this.touch;b.decelerationVelocity={x:b.scrollVelocity.x*10,y:b.scrollVelocity.y*10};
this.decelerateAnimation()},bouncyBounce:function(c,e,d,f,g,b,a){if(e<d){if(c<0){c=c+((d-e)*g)
}else{c=Math.min((d-e)*b+a,d-e-0.01)}}else{if(e>f){if(c>0){c=c-((e-f)*g)}else{c=-Math.min((e-f)*b+a,e-f-0.01)
}}}return c},decelerateAnimation:function(){var b=this.touch,s=this._scale,r=this.minimumScrollOffset(b.contentSize.width*this._scale,b.containerSize.width,this.get("horizontalAlign")),q=this.minimumScrollOffset(b.contentSize.height*this._scale,b.containerSize.height,this.get("verticalAlign")),g=this.maximumScrollOffset(b.contentSize.width*this._scale,b.containerSize.width,this.get("horizontalAlign")),f=this.maximumScrollOffset(b.contentSize.height*this._scale,b.containerSize.height,this.get("verticalAlign")),a=Date.now(),d=Math.max(a-b.lastEventTime,1),n=this._scroll_horizontalScrollOffset+b.decelerationVelocity.x*(d/10),k=this._scroll_verticalScrollOffset+b.decelerationVelocity.y*(d/10);
var m=b.decelerationFromEdge,o=b.accelerationToEdge;var j=!b.enableBouncing,i=!b.enableBouncing;
if(n>=r&&n<=g){j=YES}if(k>=q&&k<=f){i=YES}n/=this._scale;k/=this._scale;var h=0;h=this.bouncyBounce(h,s,b.minimumScale,b.maximumScale,m,o,0);
this._scale=s=s+h;n*=this._scale;k*=this._scale;r=this.minimumScrollOffset(b.contentSize.width*this._scale,b.containerSize.width,this.get("horizontalAlign"));
q=this.minimumScrollOffset(b.contentSize.height*this._scale,b.containerSize.height,this.get("verticalAlign"));
g=this.maximumScrollOffset(b.contentSize.width*this._scale,b.containerSize.width,this.get("horizontalAlign"));
f=this.maximumScrollOffset(b.contentSize.height*this._scale,b.containerSize.height,this.get("verticalAlign"));
if(j&&(n<r||n>g)){n=Math.max(r,Math.min(n,g));b.decelerationVelocity.x=0}if(i&&(k<q||k>f)){k=Math.max(q,Math.min(k,f));
b.decelerationVelocity.y=0}this._scroll_horizontalScrollOffset=n;this._scroll_verticalScrollOffset=k;
this._applyCSSTransforms(b.layer);SC.RunLoop.begin();this._touchScrollDidChange();
SC.RunLoop.end();var p=b.decelerationRate;b.decelerationVelocity.y*=Math.pow(p,(d/10));
b.decelerationVelocity.x*=Math.pow(p,(d/10));b.decelerationVelocity.x=this.bouncyBounce(b.decelerationVelocity.x,n,r,g,m,o,0.3);
b.decelerationVelocity.y=this.bouncyBounce(b.decelerationVelocity.y,k,q,f,m,o,0.3);
var l=Math.abs(b.decelerationVelocity.x);var c=Math.abs(b.decelerationVelocity.y);
if(c<0.01&&l<0.01&&Math.abs(h)<0.01){b.timeout=null;this.touch=null;SC.RunLoop.begin();
this._touchScrollDidEnd();this.beginPropertyChanges();this.set("scale",this._scale);
this.set("verticalScrollOffset",this._scroll_verticalScrollOffset);this.set("horizontalScrollOffset",this._scroll_horizontalScrollOffset);
this.endPropertyChanges();SC.RunLoop.end();return}var e=this;b.lastEventTime=Date.now();
this.touch.timeout=setTimeout(function(){SC.RunLoop.begin();e.decelerateAnimation();
SC.RunLoop.end()},10)},createChildViews:function(){var b=[],a;if(SC.none(a=this.containerView)){a=SC.ContainerView
}b.push(this.containerView=this.createChildView(a,{contentView:this.contentView,isScrollContainer:YES}));
this.contentView=this.containerView.get("contentView");a=this.get("horizontalScrollerView");
if(a){if(this.get("hasHorizontalScroller")){a=this.horizontalScrollerView=this.createChildView(a,{layoutDirection:SC.LAYOUT_HORIZONTAL,valueBinding:"*owner.horizontalScrollOffset"});
b.push(a)}else{this.horizontalScrollerView=null}}a=this.get("verticalScrollerView");
if(a){if(this.get("hasVerticalScroller")){a=this.verticalScrollerView=this.createChildView(a,{layoutDirection:SC.LAYOUT_VERTICAL,valueBinding:"*owner.verticalScrollOffset"});
b.push(a)}else{this.verticalScrollerView=null}}this.childViews=b;this.contentViewDidChange();
this.tile()},init:function(){arguments.callee.base.apply(this,arguments);this._scroll_contentView=this.get("contentView");
var a=this._scroll_contentView;if(a){a.addObserver("frame",this,this.contentViewFrameDidChange)
}if(this.get("isVisibleInWindow")){this._scsv_registerAutoscroll()}},_scsv_registerAutoscroll:function(){if(this.get("isVisibleInWindow")){SC.Drag.addScrollableView(this)
}else{SC.Drag.removeScrollableView(this)}}.observes("isVisibleInWindow"),contentViewDidChange:function(){var d=this.get("contentView"),a=this._scroll_contentView,b=this.contentViewFrameDidChange,c=this.contentViewLayerDidChange;
if(d!==a){if(a){a.removeObserver("frame",this,b);a.removeObserver("layer",this,c)
}this._scroll_contentView=d;if(d){d.addObserver("frame",this,b);d.addObserver("layer",this,c)
}this.containerView.set("contentView",d);this.contentViewFrameDidChange()}}.observes("contentView"),render:function(a,b){this.invokeLast(this.adjustElementScroll);
if(b){a.push('<div class="corner"></div>')}return arguments.callee.base.apply(this,arguments)
},oldMaxHOffset:0,oldMaxVOffset:0,contentViewFrameDidChange:function(b){var n=this.get("contentView"),l=(n)?n.get("frame"):null,h=this._scale,c=(l)?l.width*h:0,p=(l)?l.height*h:0,j,i,m;
if(!b&&(c===this._scroll_contentWidth)&&(p===this._scroll_contentHeight)){return}this._scroll_contentWidth=c;
this._scroll_contentHeight=p;j=this.get("frame");i=j.width;m=j.height;if(this.get("hasHorizontalScroller")&&(n=this.get("horizontalScrollerView"))){if(this.get("autohidesHorizontalScroller")){this.set("isHorizontalScrollerVisible",c>i)
}n.setIfChanged("maximum",c-i);n.setIfChanged("proportion",i/c)}if(this.get("hasVerticalScroller")&&(n=this.get("verticalScrollerView"))){if(this.get("autohidesVerticalScroller")){this.set("isVerticalScrollerVisible",p>m)
}p-=this.get("verticalScrollerBottom");n.setIfChanged("maximum",p-m);n.setIfChanged("proportion",m/p)
}if(!this.get("isVerticalScrollerVisible")&&(this.get("verticalScrollOffset")!==0)&&this.get("autohidesVerticalScroller")){this.set("verticalScrollOffset",0)
}if(!this.get("isHorizontalScrollerVisible")&&(this.get("horizontalScrollOffset")!==0)&&this.get("autohidesHorizontalScroller")){this.set("horizontalScrollOffset",0)
}var o=this.get("maximumVerticalScrollOffset"),k=this.get("verticalScrollOffset"),g=this.get("maximumHorizontalScrollOffset"),a=this.get("horizontalScrollOffset"),e=o<k,d=g<a;
if(e||d){this.forceDimensionsRecalculation(d,e,k,a)}},frameDidChange:function(){this.contentViewFrameDidChange(YES)
}.observes("frame"),contentViewLayerDidChange:function(){if(this._verticalScrollOffset!==0){this._verticalScrollOffset=-1
}if(this._horizontalScrollOffset!==0){this._horizontalScrollOffset=-1}this.invokeLast(this.adjustElementScroll)
},_scroll_horizontalScrollOffsetDidChange:function(){this.invokeLast(this.adjustElementScroll)
}.observes("horizontalScrollOffset"),_scroll_verticalScrollOffsetDidChange:function(){this.invokeLast(this.adjustElementScroll)
}.observes("verticalScrollOffset"),adjustElementScroll:function(){var a=this.get("containerView"),d=this.get("contentView"),c=this.get("verticalScrollOffset"),b=this.get("horizontalScrollOffset");
if(d){SC.RunLoop.begin();d._viewFrameDidChange();SC.RunLoop.end();if(SC.platform.touch){this._applyCSSTransforms(d.get("layer"))
}}if(a&&!SC.platform.touch){a=a.$()[0];if(a){if(c!==this._verticalScrollOffset){a.scrollTop=c;
this._verticalScrollOffset=c}if(b!==this._horizontalScrollOffset){a.scrollLeft=b;
this._horizontalScrollOffset=b}}}},forceDimensionsRecalculation:function(b,c,e,a){var f=a;
var d=e;this.scrollTo(0,0);if(b&&c){this.scrollTo(this.get("maximumHorizontalScrollOffset"),this.get("maximumVerticalScrollOffset"))
}if(b&&!c){this.scrollTo(this.get("maximumHorizontalScrollOffset"),d)}if(!b&&c){this.scrollTo(f,this.get("maximumVerticalScrollOffset"))
}},_scroll_verticalScrollOffset:0,_scroll_horizontalScrollOffset:0});sc_require("views/scroll");
SC.MenuScrollerView=SC.ScrollerView.extend({classNames:["sc-menu-scroller-view"],scrollDown:NO,value:function(a,c){if(c!==undefined){this._value=c
}else{var b=this._value||0;return Math.min(b,this.get("maximum"))}}.property("maximum").cacheable(),maximum:0,isEnabled:YES,layoutDirection:SC.LAYOUT_VERTICAL,verticalLineScroll:20,ownerScrollValueKey:function(){return"verticalScrollOffset"
}.property("layoutDirection").cacheable(),init:function(){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:this.set("scrollerThickness",SC.MenuScrollerView.TINY_SCROLLER_THICKNESS);
break;case SC.SMALL_CONTROL_SIZE:this.set("scrollerThickness",SC.MenuScrollerView.SMALL_SCROLLER_THICKNESS);
break;case SC.REGULAR_CONTROL_SIZE:this.set("scrollerThickness",SC.MenuScrollerView.REGULAR_SCROLLER_THICKNESS);
break;case SC.LARGE_CONTROL_SIZE:this.set("scrollerThickness",SC.MenuScrollerView.LARGE_SCROLLER_THICKNESS);
break;case SC.HUGE_CONTROL_SIZE:this.set("scrollerThickness",SC.MenuScrollerView.HUGE_SCROLLER_THICKNESS);
break}return arguments.callee.base.apply(this,arguments)},render:function(a,c){a.addClass("sc-vertical");
a.addClass(this.get("controlSize"));if(c){var b=this.get("scrollDown")?"arrowDown":"arrowUp";
a.push('<span class="scrollArrow '+b+'">&nbsp;</span>')}a.setClass("disabled",!this.get("isEnabled"))
},didCreateLayer:function(){},willDestroyLayer:function(){var a=this._sc_scroller_scrollDidChange;
SC.Event.remove(this.$(),"scroll",this,a)},mouseEntered:function(a){this.set("isMouseOver",YES);
this._invokeScrollOnMouseOver()},mouseExited:function(a){this.set("isMouseOver",NO)
},_sc_scroller_valueDidChange:function(){}.observes("value"),_sc_scroller_armScrollTimer:function(){if(!this._sc_scrollTimer){SC.RunLoop.begin();
var a=this._sc_scroller_scrollDidChange;this._sc_scrollTimer=this.invokeLater(a,50);
SC.RunLoop.end()}},_sc_scroller_scrollDidChange:function(){var b=Date.now(),d=this._sc_lastScroll,c=this.get("layer"),a=0;
if(d&&(b-d)<50){return this._sc_scroller_armScrollTimer()}this._sc_scrollTimer=null;
this._sc_lastScroll=b;SC.RunLoop.begin();if(!this.get("isEnabled")){return}this._sc_scrollValue=a=c.scrollTop;
this.set("value",a);SC.RunLoop.end()},_scrollMenu:function(){var b=this.get("value"),a;
if(this.get("scrollDown")){a=b+this.verticalLineScroll;if(a<=this.get("maximum")){this.set("value",a)
}}else{a=b-this.verticalLineScroll;if(a>=0){this.set("value",a)}else{if(b<=this.verticalLineScroll&&b>0){this.set("value",0)
}}}return YES},_invokeScrollOnMouseOver:function(){this._scrollMenu();if(this.get("isMouseOver")){this.invokeLater(this._invokeScrollOnMouseOver,100)
}}});SC.MenuScrollerView.REGULAR_SCROLLER_THICKNESS=18;SC.MenuScrollerView.TINY_SCROLLER_THICKNESS=10;
SC.MenuScrollerView.SMALL_SCROLLER_THICKNESS=14;SC.MenuScrollerView.LARGE_SCROLLER_THICKNESS=23;
SC.MenuScrollerView.HUGE_SCROLLER_THICKNESS=26;SC.MenuScrollView=SC.ScrollView.extend({classNames:["sc-menu-scroll-view"],maximumHorizontalScrollOffset:0,hasHorizontalScroller:NO,horizontalScrollerView:SC.MenuScrollerView,isHorizontalScrollerVisible:NO,canScrollHorizontal:NO,autohidesHorizontalScroller:NO,hasVerticalScroller:YES,verticalScrollerView:SC.MenuScrollerView,verticalScrollerView2:SC.MenuScrollerView,isVerticalScrollerVisible:YES,canScrollVertical:YES,autohidesVerticalScroller:YES,verticalScrollerBottom:0,controlSize:SC.REGULAR_CONTROL_SIZE,containerView:SC.ContainerView,tile:function(){var g,s,h,b,q,i,c;
g=this.get("hasVerticalScroller");s=g?this.get("verticalScrollerView"):null;h=g?this.get("verticalScrollerView2"):null;
b=s&&this.get("isVerticalScrollerVisible");q=this.get("containerView");i={left:0,top:0};
if(b){c=0;var a=s.get("scrollerThickness")||h.get("scrollerThickness");var j=this.get("contentView"),o,p=(j)?j.get("frame"):null,k=(p)?p.height:0,r=this.containerView.$()[0],l=this.get("verticalScrollOffset"),e={height:0,top:0,right:0,left:0},n={height:a,top:0,right:0,left:0},d={height:a,bottom:0,right:0,left:0},m={height:0,bottom:0,right:0,left:0};
if(r){c=r.offsetHeight}if(l===0){i.top=0;i.bottom=a;s.set("layout",e);h.set("layout",d)
}else{if(l>=(k-c-a)){i.top=a;i.bottom=0;s.set("layout",n);h.set("layout",m)}else{i.top=a;
i.bottom=a;s.set("layout",n);h.set("layout",d)}}}if(s){s.set("isVisible",b);h.set("isVisible",b)
}q.set("layout",i)},scrollerVisibilityDidChange:function(){this.tile()}.observes("isVerticalScrollerVisible","isHorizontalScrollerVisible","verticalScrollOffset"),createChildViews:function(){var c=[],b,a,d=this.get("controlSize");
if(SC.none(b=this.containerView)){b=SC.ContainerView}c.push(this.containerView=this.createChildView(b,{contentView:this.contentView}));
this.contentView=this.containerView.get("contentView");if((b=this.verticalScrollerView)&&(a=this.verticalScrollerView2)){if(this.get("hasVerticalScroller")){b=this.verticalScrollerView=this.createChildView(b,{layout:{top:0,left:0,right:0},controlSize:d,valueBinding:"*owner.verticalScrollOffset"});
c.push(b);a=this.verticalScrollerView2=this.createChildView(a,{scrollDown:YES,layout:{bottom:0,left:0,right:0},controlSize:d,valueBinding:"*owner.verticalScrollOffset"});
c.push(a)}else{this.verticalScrollerView=null;this.verticalScrollerView2=null}}this.childViews=c;
this.contentViewFrameDidChange();this.tile()},init:function(){arguments.callee.base.apply(this,arguments);
this._scroll_contentView=this.get("contentView");var a=this._scroll_contentView;if(a){a.addObserver("frame",this,this.contentViewFrameDidChange)
}if(this.get("isVisibleInWindow")){this._scsv_registerAutoscroll()}},_scsv_registerAutoscroll:function(){if(this.get("isVisibleInWindow")){SC.Drag.addScrollableView(this)
}else{SC.Drag.removeScrollableView(this)}}.observes("isVisibleInWindow"),contentViewFrameDidChange:function(){var c=this.get("contentView"),b,h=(c)?c.get("frame"):null,e=(h)?h.width:0,a=(h)?h.height:0,i=this.get("frame"),d,g;
this._scroll_contentWidth=e;this._scroll_contentHeight=a;if(this.get("hasVerticalScroller")&&(c=this.get("verticalScrollerView"))&&(b=this.get("verticalScrollerView2"))){a-=1;
if(this.get("autohidesVerticalScroller")){this.set("isVerticalScrollerVisible",a>i.height)
}a-=this.get("verticalScrollerBottom");d=0;g=this.containerView.$()[0];if(g){d=g.offsetHeight
}a=a-d;c.setIfChanged("maximum",a);b.setIfChanged("maximum",a)}},_scroll_horizontalScrollOffsetDidChange:function(){},_scroll_verticalScrollOffsetDidChange:function(){var b=this.get("verticalScrollOffset");
var a=this.get("contentView");if(a){a.adjust("top",0-b)}}.observes("verticalScrollOffset")});
SC.TO_LEFT="TOLEFT";SC.TO_RIGHT="TORIGHT";sc_require("views/workspace");SC.NavigationView=SC.WorkspaceView.extend({_views:null,_current:null,navigationContentView:SC.View.extend(),init:function(){arguments.callee.base.apply(this,arguments);
this._views=[]},createChildViews:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("navigationContentView");if(a.isClass){a=this.createChildView(a)}this._defaultContent=this.navigationContentView=a;
this.contentView.appendChild(a)},changeNavigationContent:function(a){var c=null,b=null;
if(a){c=a.get("topToolbar");b=a.get("bottomToolbar")}if(c&&c.isClass){a.set("topToolbar",c=c.create())
}if(b&&b.isClass){a.set("bottomToolbar",b=b.create())}this.beginPropertyChanges();
this._current=a;this.set("navigationContentView",a?a:this._defaultContent);this.set("topToolbar",c);
this.set("bottomToolbar",b);this.endPropertyChanges()},push:function(a){this._currentDirection=this._current?SC.TO_LEFT:null;
if(this._current){this._views.push(this._current)}this.changeNavigationContent(a)
},pop:function(){this._currentDirection=SC.TO_RIGHT;var a=this._views.pop();this.changeNavigationContent(a)
},popToView:function(b){this._currentDirection=SC.TO_RIGHT;var d=this._views,a=d.length-1,c=d[a];
while(c&&c!==b){this._views.pop();a--;c=d[a]}this.changeNavigationContent(c)},topToolbarDidChange:function(){var b=this.activeTopToolbar,a=this.get("topToolbar");
if(b){if(this._currentDirection!==null){b.set("buildDirection",this._currentDirection);
this.buildOutChild(b)}else{this.removeChild(b)}}if(a){if(this._currentDirection!==null){a.set("buildDirection",this._currentDirection);
this.buildInChild(a)}else{this.appendChild(a)}}this.activeTopToolbar=a;this.invokeOnce("childDidChange")
}.observes("topToolbar"),bottomToolbarDidChange:function(){var b=this.activeBottomToolbar,a=this.get("bottomToolbar");
if(b){if(this._currentDirection!==null){b.set("buildDirection",this._currentDirection);
this.buildOutChild(b)}else{this.removeChild(b)}}if(a){if(this._currentDirection!==null){a.set("buildDirection",this._currentDirection);
this.buildInChild(a)}else{this.appendChild(a)}}this.activeBottomToolbar=a;this.invokeOnce("childDidChange")
}.observes("topToolbar"),contentViewDidChange:function(){var b=this.activeNavigationContentView,a=this.get("navigationContentView");
if(!a.isNavigationBuilder){a.mixin(SC.NavigationBuilder)}this._pendingBuildOut=b;
this._pendingBuildIn=a;this.activeNavigationContentView=a;this.invokeOnce("childDidChange")
}.observes("navigationContentView"),childDidChange:function(){var a=this._pendingBuildIn,b=this._pendingBuildOut;
if(b){if(this._currentDirection!==null){b.set("buildDirection",this._currentDirection);
this.contentView.buildOutChild(b)}else{this.contentView.removeChild(b)}}this._scws_tile();
if(a){if(this._currentDirection!==null){a.set("buildDirection",this._currentDirection);
this.contentView.buildInChild(a)}else{this.contentView.appendChild(a)}}}});sc_require("views/toolbar");
SC.NavigationBarView=SC.ToolbarView.extend(SC.Gesturable,{gestures:["swipeGesture"],swipeGesture:SC.SwipeGesture,init:function(){arguments.callee.base.apply(this,arguments);
if(!SC.Animatable){SC.Logger.error("NavigationBarView requires SC.Animatable. Please make your app or framework require the animation framework. CRASH.")
}},mixinAnimatable:function(){this.mixin(SC.Animatable);this.transitions=this.navigationTransitions
},navigationTransitions:{opacity:{duration:0.25,action:"didFinishTransition"}},style:{opacity:1},swipe:function(d,h,f){var e=(f===SC.SWIPE_LEFT)?"isSwipeLeft":"isSwipeRight",c=this.get("childViews"),g,b,a=c.get("length");
for(b=0;b<a;b++){g=c[b];if(g.get(e)){h.makeTouchResponder(g);h.end();return}}},resetBuild:function(){if(!this.isAnimatable){this.mixinAnimatable()
}},didFinishTransition:function(){if(this.isBuildingIn){this.buildInDidFinish()}else{if(this.isBuildingOut){this.buildOutDidFinish()
}}},preBuildIn:function(){this.disableAnimation();this.adjust("opacity",0).updateLayout();
this.enableAnimation();var c=this.get("childViews"),d,b,a=c.get("length");for(b=0;
b<a;b++){d=c[b];if(d.disableNavigationTransition){continue}if(!d._nv_mixedIn){this.mixinNavigationChild(d)
}d.disableAnimation();d.transform(this.buildDirection===SC.TO_LEFT?100:-100);d.enableAnimation()
}},buildIn:function(){this.preBuildIn();this.invokeLater("startBuildIn",10)},startBuildIn:function(){this.adjust("opacity",1);
var c=this.get("childViews"),d,b,a=c.get("length");for(b=0;b<a;b++){d=c[b];if(d.disableNavigationTransition){continue
}d.transform(0)}},buildOut:function(){this.adjust("opacity",0);var c=this.get("childViews"),d,b,a=c.get("length");
for(b=0;b<a;b++){d=c[b];if(d.disableNavigationTransition){continue}if(!d._nv_mixedIn){this.mixinNavigationChild(d)
}d.transform(this.buildDirection===SC.TO_LEFT?-100:100)}},mixinNavigationChild:function(a){if(a.isAnimatable){return
}a.mixin(SC.Animatable);a.mixin({transitions:{transform:{timing:SC.Animatable.TRANSITION_EASE_IN_OUT,duration:0.25}},naturalLayout:a.get("layout"),transform:function(b){if(SC.platform.supportsCSS3DTransforms){this.adjust("transform","translate3d("+b+"px,0px,0px)")
}else{this.adjust("transform","translate("+b+"px,0px)")}}});a._nv_mixedIn=YES}});
sc_require("views/button");SC.PopupButtonView=SC.ButtonView.extend({classNames:["sc-popup-button"],preferMatrix:null,menu:null,isActiveBinding:"*menu.isVisibleInWindow",action:function(a){var b=this.get("menu");
if(!b){SC.Logger.warn("SC.PopupButton - Unable to show menu because the menu property is set to %@.".fmt(b));
return NO}b.popup(this,this.get("preferMatrix"));return YES},mouseDown:function(a){if(!this.get("isEnabled")){return YES
}this._isMouseDown=YES;this._action();this.invokeLast(this._recordMouseDownTimestamp);
return YES},_recordMouseDownTimestamp:function(){this._menuRenderedTimestamp=new Date().getTime()
},mouseUp:function(b){var d=new Date().getTime(),c=this._menuRenderedTimestamp,e=this.get("menu"),f=SC.platform.touch,a;
if(e){a=e.getPath("rootMenu.targetMenuItem");if(a){if(!a.performAction()){e.remove()
}}else{if(!f&&(d-c>SC.ButtonView.CLICK_AND_HOLD_DELAY)){e.remove()}}}this._isMouseDown=NO;
arguments.callee.base.apply(this,arguments);return YES},mouseExited:function(a){return YES
},performKeyEquivalent:function(b,a){if(!this.get("isEnabled")){return NO}var c=this.get("menu");
return(!!c&&c.performKeyEquivalent(b,a))},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled")});SC.ProgressView=SC.View.extend(SC.Control,{value:0.5,valueBindingDefault:SC.Binding.single().notEmpty(),minimum:0,minimumBindingDefault:SC.Binding.single().notEmpty(),contentMinimumKey:null,maximum:1,maximumBindingDefault:SC.Binding.single().notEmpty(),offsetRange:24,contentMaximumKey:null,isIndeterminate:NO,isIndeterminateBindingDefault:SC.Binding.bool(),isRunning:NO,isRunningBindingDefault:SC.Binding.bool(),animatedBackgroundMatrix:[],contentIsIndeterminateKey:null,classNames:"sc-progress-view",_backgroundOffset:0,_currentBackground:1,_nextBackground:1,init:function(){arguments.callee.base.apply(this,arguments);
this.animateProgressBar()},animateProgressBar:function(){if(this.get("isRunning")&&this.get("isVisibleInWindow")){this._animateProgressBar(500)
}}.observes("isRunning","isVisibleInWindow"),_animateProgressBar:function(a){if(a===0){a=1000/30
}if(this.get("isRunning")&&this.get("isVisibleInWindow")){this.displayDidChange();
this.invokeLater(this._animateProgressBar,a,600)}},displayProperties:"value minimum maximum isIndeterminate".w(),render:function(c,b){var n,e,k,d,h,f=this.get("isIndeterminate"),m=this.get("isRunning"),j=this.get("isEnabled"),l=this.get("offsetRange"),g=(f&&m)?(Math.floor(Date.now()/75)%l-l):0;
if(!j){k="0%"}else{if(f){k="120%"}else{k=(this.get("_percentageNumeric")*100)+"%"
}}var a={"sc-indeterminate":f,"sc-empty":(k<=0),"sc-complete":(k>=100)};if(b){var i=this._createClassNameString(a);
c.push('<div class="sc-inner ',i,'" style="width: ',k,";left: ",g,'px;">','<div class="sc-inner-head">',"</div>",'<div class="sc-inner-tail"></div></div>','<div class="sc-outer-head"></div>','<div class="sc-outer-tail"></div>')
}else{c.setClass(a);n=this.$(".sc-inner");e=this.get("animatedBackgroundMatrix");
d="width: "+k+"; ";d=d+"left: "+g+"px; ";if(e.length===3){n.css("backgroundPosition","0px -"+(e[0]+e[1]*this._currentBackground)+"px");
if(this._currentBackground===e[2]-1||this._currentBackground===0){this._nextBackground*=-1
}this._currentBackground+=this._nextBackground;d=d+"backgroundPosition: "+h+"px; ";
n.attr("style",d)}else{n.attr("style",d)}}},contentPropertyDidChange:function(c,a){var b=this.get("content");
this.beginPropertyChanges().updatePropertyFromContent("value",a,"contentValueKey",b).updatePropertyFromContent("minimum",a,"contentMinimumKey",b).updatePropertyFromContent("maximum",a,"contentMaximumKey",b).updatePropertyFromContent("isIndeterminate",a,"contentIsIndeterminateKey",b).endPropertyChanges()
},_percentageNumeric:function(){var b=this.get("minimum")||0,c=this.get("maximum")||1,a=this.get("value")||0;
a=(a-b)/(c-b);if(a>1){a=1}if(isNaN(a)){a=0}if(a<b){a=0}if(a>c){a=1}return a}.property("value").cacheable(),_createClassNameString:function(c){var b=[],a;
for(a in c){if(!c.hasOwnProperty(a)){continue}if(c[a]){b.push(a)}}return b.join(" ")
}});SC.RadioView=SC.View.extend(SC.Control,{classNames:["sc-radio-view"],value:null,layoutDirection:SC.LAYOUT_VERTICAL,escapeHTML:YES,items:[],itemTitleKey:null,itemValueKey:null,itemIsEnabledKey:null,itemIconKey:null,itemsDidChange:function(){if(this._items){this._items.removeObserver("[]",this,this.itemContentDidChange)
}this._items=this.get("items");if(this._items){this._items.addObserver("[]",this,this.itemContentDidChange)
}this.itemContentDidChange()}.observes("items"),itemContentDidChange:function(){this._renderAsFirstTime=YES;
this.notifyPropertyChange("_displayItems")},displayProperties:["value","_displayItems"],render:function(e,a){var p,o,l,c,q,d,k,h,f,g,m,b,j=this.get("_displayItems"),n=this.get("value"),i=SC.isArray(n);
e.addClass(this.get("layoutDirection"));if(i&&n.length<=0){n=n[0];i=NO}if(this._renderAsFirstTime){a=YES;
this._renderAsFirstTime=NO}if(a){e.attr("role","radiogroup");c=SC.guidFor(this);q=j.length;
for(o=0;o<q;o++){p=j[o];l=p[3];if(l){d=(l.indexOf("/")>=0)?l:SC.BLANK_IMAGE_URL;k=(d===l)?"":l;
l='<img src="'+d+'" class="icon '+k+'" alt="" />'}else{l=""}if(p){f=(i)?(n.indexOf(p[1])>=0):(n===p[1])
}else{f=NO}b=this._getSelectionStateClassNames(p,f,n,i,false);g=this.escapeHTML?SC.RenderContext.escapeHTML(p[0]):p[0];
e.push('<div class="sc-radio-button ',b,'" ','aria-checked="',f?"true":"false",'" ','role="radio"',' index="',o,'">','<span class="button"></span>','<span class="sc-button-label">',l,g,"</span></div>")
}}else{this.$(".sc-radio-button").forEach(function(r){r=this.$(r);o=parseInt(r.attr("index"),0);
p=(o>=0)?j[o]:null;if(p){f=(i)?(n.indexOf(p[1])>=0):(n===p[1])}else{f=NO}m=this._getSelectionStateClassNames(p,f,n,i,true);
r.attr("aria-checked",f?"true":"false");r.setClass(m);o=m=null},this)}},_displayItems:function(){var e=this.get("items"),b=this.get("localize"),o=this.get("itemTitleKey"),n=this.get("itemValueKey"),c=this.get("itemIsEnabledKey"),l=this.get("itemIconKey"),d=[],g=(e)?e.get("length"):0,m,h,k,j,a,i,f;
for(j=0;j<g;j++){m=e.objectAt(j);if(SC.typeOf(m)===SC.T_ARRAY){h=m[0];k=m[1]}else{if(m){if(o){h=m.get?m.get(o):m[o]
}else{h=(m.toString)?m.toString():null}if(n){k=m.get?m.get(n):m[n]}else{k=m}if(c){i=m.get?m.get(c):m[c]
}else{i=YES}if(l){f=m.get?m.get(l):m[l]}else{f=null}}else{h=k=f=null;i=NO}}if(b){h=h.loc()
}d.push([h,k,i,f])}return d}.property("items","itemTitleKey","itemValueKey","itemIsEnabledKey","localize","itemIconKey").cacheable(),_getSelectionStateClassNames:function(d,f,e,a,b){var h,c;
h={sel:(f&&!a),mixed:(f&&a),disabled:(!d[2])};if(b){return h}else{var g=[];for(c in h){if(!h.hasOwnProperty(c)){continue
}if(h[c]){g.push(c)}}return g.join(" ")}},mouseDown:function(a){if(!this.get("isEnabled")){return YES
}var b=a.target;while(b){if(b.className&&b.className.indexOf("sc-radio-button")>-1){break
}b=b.parentNode}if(!b){return NO}b=this.$(b);if(b.hasClass("disabled")){return YES
}b.addClass("active");this._activeRadioButton=b;a.allowDefault();return YES},mouseUp:function(a){if(!this.get("isEnabled")){return YES
}var f=this._activeRadioButton,e=a.target,b=this.get("_displayItems"),c,d;if(f){f.removeClass("active");
this._activeRadioButton=null}else{return YES}while(e){if(e.className&&e.className.indexOf("sc-radio-button")>-1){break
}e=e.parentNode}e=this.$(e);if(e[0]!==f[0]||e.hasClass("disabled")){return YES}c=parseInt(e.attr("index"),0);
d=b[c];this.set("value",d[1])},touchStart:function(a){return this.mouseDown(a)},touchEnd:function(a){return this.mouseUp(a)
}});SC.SceneView=SC.ContainerView.extend({scenes:["master","detail"],nowShowing:null,transitionDuration:200,_state:"NO_VIEW",replaceContent:function(a){if(a&&this._state===this.READY){this.animateScene(a)
}else{this.replaceScene(a)}return this},replaceScene:function(c){var d=this._targetView,e=this.STANDARD_LAYOUT,b=this.get("scenes"),a=b?b.indexOf(this.get("nowShowing")):-1;
this._targetView=c;this._targetIndex=a;if(this._timer){this._timer.invalidate()}this._leftView=this._rightView=this._start=this._end=null;
this._timer=null;this.removeAllChildren();if(d){d.set("layout",e)}if(c){c.set("layout",e)
}if(c){this.appendChild(c)}this._state=c?this.READY:this.NO_VIEW},animateScene:function(b){var c=this._targetView,f=this._targetIndex,a=this.get("scenes"),e=a?a.indexOf(this.get("nowShowing")):-1,d;
if(f<0||e<0||f===e){return this.replaceScene(b)}this._targetView=b;this._targetIndex=e;
if(e>f){this._leftView=c;this._rightView=b;this._target=-1}else{this._leftView=b;
this._rightView=c;this._target=1}this.removeAllChildren();if(c){this.appendChild(c)
}if(b){this.appendChild(b)}this._start=Date.now();this._end=this._start+this.get("transitionDuration");
this._state=this.ANIMATING;this.tick()},tick:function(){this._timer=null;var a=Date.now(),d=(a-this._start)/(this._end-this._start),g=this._target,f=this._leftView,b=this._rightView,c,e;
if(d<0){d=0}if(!this.get("isVisibleInWindow")||(d>=1)){return this.replaceScene(this._targetView)
}c=SC.clone(this.get("frame"));e=Math.floor(c.width*d);if(g>0){c.left=0-(c.width-e);
f.set("layout",c);c=SC.clone(c);c.left=e;b.set("layout",c)}else{c.left=0-e;f.set("layout",c);
c=SC.clone(c);c.left=c.width-e;b.set("layout",c)}this._timer=this.invokeLater(this.tick,20);
return this},NO_VIEW:"NO_VIEW",ANIMATING:"ANIMATING",READY:"READY",STANDARD_LAYOUT:{top:0,left:0,bottom:0,right:0}});
SC.SegmentedView=SC.View.extend(SC.Control,{classNames:["sc-segmented-view"],controlStyle:"square",value:null,isEnabled:YES,allowsEmptySelection:NO,allowsMultipleSelection:NO,localize:YES,align:SC.ALIGN_CENTER,layoutDirection:SC.LAYOUT_HORIZONTAL,items:[],itemTitleKey:null,itemValueKey:null,itemIsEnabledKey:null,itemIconKey:null,itemWidthKey:null,itemActionKey:null,itemTargetKey:null,itemKeyEquivalentKey:null,itemKeys:"itemTitleKey itemValueKey itemIsEnabledKey itemIconKey itemWidthKey itemToolTipKey".w(),displayItems:function(){var f=this.get("items"),c=this.get("localize"),k=null,d,i,e=[],g=f.get("length"),h,j,b=SC._segmented_fetchKeys,a=SC._segmented_fetchItem;
for(h=0;h<g;h++){j=f.objectAt(h);if(SC.none(j)){continue}d=SC.typeOf(j);if(d===SC.T_STRING){i={title:j.humanize().titleize(),value:j,isEnabled:YES,icon:null,width:null,toolTip:null,index:h}
}else{if(d!==SC.T_ARRAY){if(k===null){k=this.itemKeys.map(b,this)}i=k.map(a,j);i={title:i[0],value:i[1],isEnabled:i[2],icon:i[3],width:i[4],toolTip:i[5],index:h};
if(!k[0]&&j.toString){i.title=j.toString()}if(!k[1]){i.value=j}if(!k[2]){i.isEnabled=YES
}}}if(c&&i.title){i.title=i.title.loc()}if(c&&i.toolTip&&SC.typeOf(i.toolTip)===SC.T_STRING){i.toolTip=i.toolTip.loc()
}e[e.length]=i}return e}.property("items","itemTitleKey","itemValueKey","itemIsEnabledKey","localize","itemIconKey","itemWidthKey","itemToolTipKey"),itemsDidChange:function(){if(this._items){this._items.removeObserver("[]",this,this.itemContentDidChange)
}this._items=this.get("items");if(this._items){this._items.addObserver("[]",this,this.itemContentDidChange)
}this.itemContentDidChange()}.observes("items"),itemContentDidChange:function(){this.set("renderLikeFirstTime",YES);
this.notifyPropertyChange("displayItems")},init:function(){var a=SC.clone(this.get("classNames"));
a.push(this.get("controlStyle"));this.set("classNames",a);arguments.callee.base.apply(this,arguments);
this.itemsDidChange()},displayProperties:["displayItems","value","activeIndex"],createRenderer:function(a){return a.segmented()
},updateRenderer:function(g){var e=this.get("displayItems"),h=this.get("value"),d=SC.isArray(h),c=this.get("activeIndex"),f;
for(var b=0,a=e.length;b<a;b++){f=e[b];if(c==b){f.isActive=YES}else{f.isActive=NO
}if(d?h.indexOf(f.value):h===f.value){f.isSelected=YES}else{f.isSelected=NO}}g.attr({segments:e,align:this.get("align"),layoutDirection:this.get("layoutDirection")})
},displayItemIndexForEvent:function(a){if(this.renderer){return this.renderer.indexForEvent(a)
}},keyDown:function(d){var f,g,e,a,h,c;if(d.which===9){var b=d.shiftKey?this.get("previousValidKeyView"):this.get("nextValidKeyView");
if(b){b.becomeFirstResponder()}else{d.allowDefault()}return YES}if(!this.get("allowsMultipleSelection")&&!this.get("allowsEmptySelection")){e=this.get("displayItems");
a=e.length;h=this.get("value");c=SC.isArray(h);if(d.which===39||d.which===40){for(f=0;
f<a-1;f++){g=e[f];if(c?(h.indexOf(g.value)>=0):(g.value===h)){this.triggerItemAtIndex(f+1)
}}return YES}else{if(d.which===37||d.which===38){for(f=1;f<a;f++){g=e[f];if(c?(h.indexOf(g.value)>=0):(g.value===h)){this.triggerItemAtIndex(f-1)
}}return YES}}}return YES},mouseDown:function(b){if(!this.get("isEnabled")){return YES
}var a=this.displayItemIndexForEvent(b);if(a>=0){this._isMouseDown=YES;this.set("activeIndex",a)
}return YES},mouseUp:function(b){var a=this.displayItemIndexForEvent(b);if(this._isMouseDown&&(a>=0)){this.triggerItemAtIndex(a)
}this._isMouseDown=NO;this.set("activeIndex",-1);return YES},mouseMoved:function(b){if(this._isMouseDown){var a=this.displayItemIndexForEvent(b);
this.set("activeIndex",a)}return YES},mouseExited:function(b){if(this._isMouseDown){var a=this.displayItemIndexForEvent(b);
this.set("activeIndex",a)}return YES},mouseEntered:function(b){if(this._isMouseDown){var a=this.displayItemIndexForEvent(b);
this.set("activeIndex",-1)}return YES},touchStart:function(b){if(!this.get("isEnabled")){return YES
}var a=this.displayItemIndexForEvent(b);if(a>=0){this._isTouching=YES;this.set("activeIndex",a)
}return YES},touchEnd:function(b){var a=this.displayItemIndexForEvent(b);if(this._isTouching&&(a>=0)){this.triggerItemAtIndex(a)
}this._isTouching=NO;this.set("activeIndex",-1);return YES},touchesDragged:function(b,c){var d=this.touchIsInBoundary(b);
if(d){if(!this._isTouching){this._touchDidEnter(b)}var a=this.displayItemIndexForEvent(b);
this.set("activeIndex",a)}else{if(this._isTouching){this._touchDidExit(b)}}this._isTouching=d;
return YES},_touchDidExit:function(b){var a=this.displayItemIndexForEvent(b);this.set("activeIndex",-1);
return YES},_touchDidEnter:function(b){var a=this.displayItemIndexForEvent(b);this.set("activeIndex",a);
return YES},triggerItemAtIndex:function(k){var i=this.get("displayItems"),l=i.objectAt(k),b,j,c,g,f;
if(!l.isEnabled){return this}g=this.get("allowsEmptySelection");f=this.get("allowsMultipleSelection");
b=l.value;j=c=this.get("value");if(!SC.isArray(j)){j=[j]}if(!f){if(g&&(j.get("length")===1)&&(j.objectAt(0)===b)){j=[]
}else{j=[b]}}else{if(j.indexOf(b)>=0){if(j.get("length")>1||(j.objectAt(0)!==b)||g){j=j.without(b)
}}else{j=j.concat([b])}}switch(j.get("length")){case 0:j=null;break;case 1:j=j.objectAt(0);
break;default:break}var m=this.get("itemActionKey"),a=this.get("itemTargetKey"),e,h=null,d=this.getPath("pane.rootResponder");
if(m&&(l=this.get("items").objectAt(l.index))){e=l.get?l.get(m):l[m];if(a){h=l.get?l.get(a):l[a]
}if(d){d.sendAction(e,h,this,this.get("pane"))}}if(!e&&c!==undefined){this.set("value",j)
}e=this.get("action");if(e&&d){d.sendAction(e,this.get("target"),this,this.get("pane"))
}},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled"),willBecomeKeyResponderFrom:function(a){if(!this._isFocused){this._isFocused=YES;
this.becomeFirstResponder();if(this.get("isVisibleInWindow")){this.$()[0].focus()
}}},willLoseKeyResponderTo:function(a){if(this._isFocused){this._isFocused=NO}}});
SC._segmented_fetchKeys=function(a){return this.get(a)};SC._segmented_fetchItem=function(a){if(!a){return null
}return this.get?this.get(a):this[a]};sc_require("views/button");SC.SelectView=SC.ButtonView.extend({items:[],itemsBindingDefault:SC.Binding.multiple(),itemTitleKey:null,itemSortKey:null,itemValueKey:null,itemIconKey:null,itemSeparatorKey:"separator",itemIsEnabledKey:"isEnabled",localize:YES,disableSort:YES,classNames:["sc-select-view"],menu:null,_itemList:[],_itemIdx:null,value:null,checkboxEnabled:YES,showCheckbox:YES,_defaultVal:null,_defaultTitle:null,_defaultIcon:null,controlStyle:"popup",displayProperties:["icon","value","controlSize","items"],preferMatrix:null,CUSTOM_MENU_ITEM_HEIGHT:20,isActiveBinding:"*menu.isVisibleInWindow",isDefaultPosition:NO,lastMenuWidth:null,exampleView:null,customViewMenuOffsetWidth:0,needsEllipsis:YES,menuPaneHeightPadding:0,menuItemPadding:35,supportFocusRing:YES,leftAlign:function(){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:return SC.SelectView.TINY_OFFSET_X;
case SC.SMALL_CONTROL_SIZE:return SC.SelectView.SMALL_OFFSET_X;case SC.REGULAR_CONTROL_SIZE:return SC.SelectView.REGULAR_OFFSET_X;
case SC.LARGE_CONTROL_SIZE:return SC.SelectView.LARGE_OFFSET_X;case SC.HUGE_CONTROL_SIZE:return SC.SelectView.HUGE_OFFSET_X
}return 0}.property("controlSize"),sortObjects:function(b){if(!this.get("disableSort")){var a=this.get("itemSortKey")||this.get("itemTitleKey");
b=b.sort(function(d,c){if(a){d=d.get?d.get(a):d[a];c=c.get?c.get(a):c[a]}return(d<c)?-1:((d>c)?1:0)
})}return b},render:function(b,f){arguments.callee.base.apply(this,arguments);var c,k,p,r,u,g,e,t,h,n,a,m,d,j,v,q,o,s,l,i;
k=this.get("items");k=this.sortObjects(k);p=k.length;r=this.get("itemTitleKey");u=this.get("itemIconKey");
g=this.get("itemValueKey");e=this.get("itemSeparatorKey");t=this.get("showCheckbox");
i=this.get("isEnabledKey");h=this.get("value");n=this.get("localize");m=[];d=YES;
j=0;k.forEach(function(w){if(w){v=r?(w.get?w.get(r):w[r]):w.toString();v=n?v.loc():v;
q=u?(w.get?w.get(u):w[u]):null;if(SC.none(w[u])){q=null}o=(g)?(w.get?w.get(g):w[g]):w;
if(!SC.none(h)&&!SC.none(o)){if(h===o){this.set("title",v);this.set("icon",q)}}if(o===this.get("value")){this.set("_itemIdx",j);
d=!t?NO:YES}else{d=NO}l=(w.get?w.get(i):w[i]);if(NO!==l){l=YES}a=e?(w.get?w.get(e):w[e]):NO;
if(j===0){this._defaultVal=o;this._defaultTitle=v;this._defaultIcon=q}var x=SC.Object.create({separator:a,title:v,icon:q,value:o,isEnabled:l,checkbox:d,target:this,action:this.displaySelectedItem});
m.push(x)}j+=1;this.set("_itemList",m)},this);if(f){this.invokeLast(function(){var w=this.get("value");
if(SC.none(w)){this.set("value",this._defaultVal);this.set("title",this._defaultTitle);
this.set("icon",this._defaultIcon)}})}this.changeSelectPreferMatrix(this.get("_itemIdx"))
},_action:function(l){var h,a,i,j,q,n,x,e,w,c,m,r,o,u,f,g,k,b,v;h=this.$(".sc-button-label")[0];
var y=SC.SelectView.MENU_WIDTH_OFFSET;if(!this.get("isDefaultPosition")){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:y+=SC.SelectView.TINY_POPUP_MENU_WIDTH_OFFSET;
break;case SC.SMALL_CONTROL_SIZE:y+=SC.SelectView.SMALL_POPUP_MENU_WIDTH_OFFSET;break;
case SC.REGULAR_CONTROL_SIZE:y+=SC.SelectView.REGULAR_POPUP_MENU_WIDTH_OFFSET;break;
case SC.LARGE_CONTROL_SIZE:y+=SC.SelectView.LARGE_POPUP_MENU_WIDTH_OFFSET;break;case SC.HUGE_CONTROL_SIZE:y+=SC.SelectView.HUGE_POPUP_MENU_WIDTH_OFFSET;
break}}a=this.get("layer").offsetWidth+y;a=this.get("layer").offsetWidth;i=h.scrollWidth;
j=this.get("lastMenuWidth");if(i){q=h.offsetWidth;if(i&&q){a=a+i-q}}if(!j||(a>j)){j=a
}n=this.get("_itemList");var s=this.get("customViewClassName");var p=this.get("customViewMenuOffsetWidth");
var d="sc-view sc-pane sc-panel sc-palette sc-picker sc-menu select-button sc-scroll-view sc-menu-scroll-view sc-container-view menuContainer sc-button-view sc-menu-item sc-regular-size";
d=s?(d+" "+s):d;SC.prepareStringMeasurement("",d);for(m=0,v=n.length;m<v;++m){w=n.objectAt(m);
x=SC.measureString(w.title).width;if(!e||(x>e)){e=x}}SC.teardownStringMeasurement();
j=(e+this.menuItemPadding>j)?e+this.menuItemPadding:j;var t=SC.RootResponder.responder.get("currentWindowSize").width;
if(j>t){j=(t-25)}this.set("lastMenuWidth",j);r=this.get("value");o=this.get("_itemList");
u=this.get("controlSize");f=this.get("menuPaneHeightPadding");g=this.get("exampleView");
k=g?g:SC.MenuItemView;b=SC.MenuPane.create({classNames:["select-button"],items:o,exampleView:k,isEnabled:YES,menuHeightPadding:f,preferType:SC.PICKER_MENU,itemHeightKey:"height",layout:{width:j},controlSize:u,itemWidth:j});
if(!b){return NO}b.popup(this,this.preferMatrix);this.set("menu",b);g=b.menuItemViewForContentIndex(this.get("_itemIdx"));
g.becomeFirstResponder();this.set("isActive",YES);return YES},displaySelectedItem:function(a){var b=a.get("selectedItem");
this.set("value",b.get("value"));this.set("title",b.get("title"));this.set("_itemIdx",b.get("contentIndex"))
},changeSelectPreferMatrix:function(){var c=0,g=0;switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:c=SC.SelectView.TINY_OFFSET_Y;
g=SC.MenuPane.TINY_MENU_ITEM_HEIGHT;break;case SC.SMALL_CONTROL_SIZE:c=SC.SelectView.SMALL_OFFSET_Y;
g=SC.MenuPane.SMALL_MENU_ITEM_HEIGHT;break;case SC.REGULAR_CONTROL_SIZE:c=SC.SelectView.REGULAR_OFFSET_Y;
g=SC.MenuPane.REGULAR_MENU_ITEM_HEIGHT;break;case SC.LARGE_CONTROL_SIZE:c=SC.SelectView.LARGE_OFFSET_Y;
g=SC.MenuPane.LARGE_MENU_ITEM_HEIGHT;break;case SC.HUGE_CONTROL_SIZE:c=SC.SelectView.HUGE_OFFSET_Y;
g=SC.MenuPane.HUGE_MENU_ITEM_HEIGHT;break}var e=c,b=this.get("_itemIdx"),a=this.get("leftAlign"),f,d;
if(this.get("isDefaultPosition")){f=[1,0,3];this.set("preferMatrix",f)}else{if(b){e=b*g+c
}d=[a,-e,2];this.set("preferMatrix",d)}},mouseDown:function(a){if(!this.get("isEnabled")){return YES
}this.set("isActive",YES);this._isMouseDown=YES;this.becomeFirstResponder();this._action();
return YES},mouseUp:function(b){var d=this.get("menu"),a,c;if(d){a=d.getPath("rootMenu.targetMenuItem");
if(a&&d.get("mouseHasEntered")){if(!a.performAction()){d.remove()}}else{if(b.timeStamp-this._mouseDownTimestamp>400){d.remove()
}}}this._isMouseDown=NO;this.set("isActive",NO);return YES},mouseExited:function(){return YES
},keyDown:function(a){if(this.interpretKeyEvents(a)){return YES}else{arguments.callee.base.apply(this,arguments)
}},interpretKeyEvents:function(a){if(a){if((a.keyCode===38||a.keyCode===40)){this._action()
}else{if(a.keyCode===27){this.resignFirstResponder()}}}return arguments.callee.base.apply(this,arguments)
},acceptsFirstResponder:function(){return this.get("isEnabled")}.property("isEnabled"),_button_isSelectedDidChange:function(){}.observes("isSelected")});
SC.SelectView.TINY_OFFSET_X=0;SC.SelectView.TINY_OFFSET_Y=0;SC.SelectView.TINY_POPUP_MENU_WIDTH_OFFSET=0;
SC.SelectView.SMALL_OFFSET_X=-18;SC.SelectView.SMALL_OFFSET_Y=3;SC.SelectView.SMALL_POPUP_MENU_WIDTH_OFFSET=7;
SC.SelectView.REGULAR_OFFSET_X=-17;SC.SelectView.REGULAR_OFFSET_Y=3;SC.SelectView.REGULAR_POPUP_MENU_WIDTH_OFFSET=4;
SC.SelectView.LARGE_OFFSET_X=-17;SC.SelectView.LARGE_OFFSET_Y=6;SC.SelectView.LARGE_POPUP_MENU_WIDTH_OFFSET=3;
SC.SelectView.HUGE_OFFSET_X=0;SC.SelectView.HUGE_OFFSET_Y=0;SC.SelectView.HUGE_POPUP_MENU_WIDTH_OFFSET=0;
SC.SelectView.MENU_WIDTH_OFFSET=-2;SC.SelectFieldView=SC.FieldView.extend({tagName:"select",classNames:["sc-select-field-view"],objects:[],objectsBindingDefault:SC.Binding.multiple(),nameKey:null,sortKey:null,valueKey:null,emptyName:null,localize:false,cpDidChange:YES,disableSort:NO,validateMenuItem:function(b,a){return true
},sortObjects:function(b){if(!this.get("disableSort")){var a=this.get("sortKey")||this.get("nameKey");
b=b.sortProperty(a)}return b},render:function(c,a){if(this.get("cpDidChange")){this.set("cpDidChange",NO);
var f=this.get("nameKey");var j=this.get("valueKey");var i=this.get("objects");var b=this.get("value");
var d,g;var h=this.get("localize");if(!j&&b){b=SC.guidFor(b)}if((b===null)||(b==="")){b="***"
}if(i){i=this.sortObjects(i);if(!a){g=this.$input()[0];g.innerHTML=""}var e=this.get("emptyName");
if(e){if(h){e=e.loc()}if(a){c.push('<option value="***">'+e+"</option>",'<option disabled="disabled"></option>')
}else{d=document.createElement("option");d.value="***";d.innerHTML=e;g.appendChild(d);
d=document.createElement("option");d.disabled="disabled";g.appendChild(d)}}i.forEach(function(n,m){if(n){var l=f?(n.get?n.get(f):n[f]):n.toString();
if(h){l=l.loc()}var o=(j)?(n.get?n.get(j):n[j]):n;if(!e&&m===0&&b==="***"){this.set("value",o)
}if(o){o=(SC.guidFor(o))?SC.guidFor(o):o.toString()}var k=(this.validateMenuItem&&this.validateMenuItem(o,l))?"":'disabled="disabled" ';
if(a){c.push("<option "+k+'value="'+o+'">'+l+"</option>")}else{d=document.createElement("option");
d.value=o;d.innerHTML=l;if(k.length>0){d.disable="disabled"}g.appendChild(d)}}else{if(a){c.push('<option disabled="disabled"></option>')
}else{d=document.createElement("option");d.disabled="disabled";g.appendChild(d)}}},this);
this.setFieldValue(b)}else{this.set("value",null)}}},displayProperties:["objects","nameKey","valueKey"],_objectsObserver:function(){this.set("cpDidChange",YES)
}.observes("objects"),_nameKeyObserver:function(){this.set("cpDidChange",YES)}.observes("nameKey"),_valueKeyObserver:function(){this.set("cpDidChange",YES)
}.observes("valueKey"),$input:function(){return this.$()},mouseDown:function(a){if(!this.get("isEnabled")){a.stop();
return YES}else{return arguments.callee.base.apply(this,arguments)}},getFieldValue:function(){var f=arguments.callee.base.apply(this,arguments);
var c=this.get("valueKey");var e=this.get("objects");var d,a;if(f=="***"){f=null}else{if(f&&e){var g=(SC.typeOf(e.length)===SC.T_FUNCTION)?e.length():e.length;
d=null;while(!d&&(--g>=0)){a=e.objectAt?e.objectAt(g):e[g];if(!a){continue}if(c){a=(a.get)?a.get(c):a[c]
}var b=(a)?(SC.guidFor(a)?SC.guidFor(a):a.toString()):null;if(f==b){d=a}}}}return(c||d)?d:f
},setFieldValue:function(a){if(SC.none(a)){a="***"}else{a=((a)?(SC.guidFor(a)?SC.guidFor(a):a.toString()):null)
}this.$input().val(a);return this},fieldDidFocus:function(){var a=this.get("isFocused");
if(!a){this.set("isFocused",true)}},fieldDidBlur:function(){var a=this.get("isFocused");
if(a){this.set("isFocused",false)}},_isFocusedObserver:function(){this.$().setClass("focus",this.get("isFocused"))
}.observes("isFocused"),didCreateLayer:function(){var a=this.$input();if(this.get("isEnabled")===false){this.$()[0].disabled=true
}SC.Event.add(a,"blur",this,this.fieldDidBlur);SC.Event.add(a,"focus",this,this.fieldDidFocus);
return arguments.callee.base.apply(this,arguments)},willDestroyLayer:function(){var a=this.$input();
SC.Event.remove(a,"focus",this,this.fieldDidFocus);SC.Event.remove(a,"blur",this,this.fieldDidBlur);
return arguments.callee.base.apply(this,arguments)}});SC.SliderView=SC.View.extend(SC.Control,{classNames:"sc-slider-view",value:0.5,valueBindingDefault:SC.Binding.single().notEmpty(),minimum:0,minimumBindingDefault:SC.Binding.single().notEmpty(),contentMinimumKey:null,maximum:1,maximumBindingDefault:SC.Binding.single().notEmpty(),contentMaximumKey:null,step:0.1,displayProperties:"value minimum maximum".w(),createRenderer:function(a){return a.slider()
},updateRenderer:function(d){var b=this.get("minimum"),a=this.get("maximum"),e=this.get("value"),c=this.get("step");
e=Math.min(Math.max(e,b),a);if(!SC.none(c)&&c!==0){e=Math.round(e/c)*c}if(e!==0){e=Math.floor((e-b)/(a-b)*100)
}d.attr({value:e})},_isMouseDown:NO,mouseDown:function(a){if(!this.get("isEnabled")){return YES
}this.set("isActive",YES);this._isMouseDown=YES;return this._triggerHandle(a,YES)
},mouseDragged:function(a){return this._isMouseDown?this._triggerHandle(a):YES},mouseUp:function(a){if(this._isMouseDown){this.set("isActive",NO)
}var b=this._isMouseDown?this._triggerHandle(a):YES;this._isMouseDown=NO;return b
},mouseWheel:function(b){if(!this.get("isEnabled")){return YES}var d=this.get("minimum"),a=this.get("maximum"),c=this.get("value")+((b.wheelDeltaX+b.wheelDeltaY)*0.01),e=this.get("step"),f=Math.round(c/e)*e;
if(c<d){this.setIfChanged("value",d)}else{if(c>a){this.setIfChanged("value",a)}else{this.setIfChanged("value",c)
}}return YES},touchStart:function(a){return this.mouseDown(a)},touchEnd:function(a){return this.mouseUp(a)
},touchesDragged:function(a){return this.mouseDragged(a)},_triggerHandle:function(i,e){var a=this.get("frame").width,c=this.get("minimum"),f=this.get("maximum"),b=this.get("step"),h=this.get("value"),d;
if(e){d=this.convertFrameFromView({x:i.pageX}).x;this._evtDiff=i.pageX-d}else{d=i.pageX-this._evtDiff
}d=Math.max(0,Math.min(d/a,1));if(e){var g=this.get("value");g=(g-c)/(f-c);if(Math.abs(g*a-d*a)<16){this._offset=g-d
}else{this._offset=0}}d=d+this._offset;d=c+((f-c)*d);if(b!==0){d=Math.round(d/b)*b
}if(Math.abs(h-d)>=0.01){this.set("value",d)}return YES},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled"),willBecomeKeyResponderFrom:function(a){if(!this._isFocused){this._isFocused=YES;
this.becomeFirstResponder();if(this.get("isVisibleInWindow")){if(this.renderer){this.renderer.focus()
}}}},willLoseKeyResponderTo:function(a){if(this._isFocused){this._isFocused=NO}},keyDown:function(c){if(c.which===9){var b=c.shiftKey?this.get("previousValidKeyView"):this.get("nextValidKeyView");
if(b){b.becomeFirstResponder()}else{c.allowDefault()}return YES}if(c.which===37||c.which===38||c.which===39||c.which===40){var e=this.get("minimum"),a=this.get("maximum"),f=this.get("step"),d=a-e,h=0,g;
if(c.which===37||c.which===38){if(f===0){if(d<100){h=this.get("value")-1}else{g=Math.abs(d/100);
if(g<2){g=2}h=this.get("value")-Math.abs(d/100)}}else{h=this.get("value")-f}}if(c.which===39||c.which===40){if(f===0){if(d<100){h=this.get("value")+2
}else{g=Math.abs(d/100);if(g<2){g=2}h=this.get("value")+g}}else{h=this.get("value")+f
}}if(h>=e&&h<=a){this.set("value",h)}}SC.RunLoop.begin().end();return YES},contentPropertyDidChange:function(c,a){var b=this.get("content");
this.beginPropertyChanges().updatePropertyFromContent("value",a,"contentValueKey",b).updatePropertyFromContent("minimum",a,"contentMinimumKey",b).updatePropertyFromContent("maximum",a,"contentMaximumKey",b).updatePropertyFromContent("isIndeterminate",a,"contentIsIndeterminateKey",b).endPropertyChanges()
}});sc_require("mixins/collection_group");sc_require("views/disclosure");SC.SourceListGroupView=SC.View.extend(SC.Control,SC.CollectionGroup,{classNames:["sc-source-list-group"],content:null,isGroupVisible:YES,hasGroupTitle:YES,groupTitleKey:null,groupVisibleKey:null,render:function(a,b){a.push('<div role="button" class="sc-source-list-label sc-disclosure-view sc-button-view button disclosure no-disclosure">','<img src="'+SC.BLANK_IMAGE_URL+'" class="button" />','<span class="label"></span></div>')
},createChildViews:function(){},contentPropertyDidChange:function(f,c){var e=this.get("content");
var h=this.outlet("labelView");if(e===null){h.setIfChanged("isVisible",NO);this.setIfChanged("hasGroupTitle",NO);
return}else{h.setIfChanged("isVisible",YES);this.setIfChanged("hasGroupTitle",YES)
}var b=this.getDelegateProperty("groupTitleKey",this.displayDelegate);if((c=="*")||(b&&(c==b))){var g=(e&&e.get&&b)?e.get(b):e;
if(g!=this._title){this._title=g;if(g){g=g.capitalize()}h.set("title",g)}}var d=this.getDelegateProperty("groupVisibleKey",this.displayDelegate);
if((c=="*")||(d&&(c==d))){if(d){h.removeClassName("no-disclosure");var a=(e&&e.get)?!!e.get(d):YES;
if(a!=this.get("isGroupVisible")){this.set("isGroupVisible",a);h.set("value",a)}}else{h.addClassName("no-disclosure")
}}},disclosureValueDidChange:function(c){if(c==this.get("isGroupVisible")){return
}var b=this.get("content");var a=this.getDelegateProperty("groupVisibleKey",this.displayDelegate);
if(b&&b.set&&a){b.set(a,c)}this.set("isGroupVisible",c);if(this.owner&&this.owner.updateChildren){this.owner.updateChildren(true)
}},labelView:SC.DisclosureView.extend({value:YES,_valueObserver:function(){if(this.owner){this.owner.disclosureValueDidChange(this.get("value"))
}}.observes("value")})});sc_require("views/list");sc_require("views/source_list_group");
SC.BENCHMARK_SOURCE_LIST_VIEW=YES;SC.SourceListView=SC.ListView.extend({classNames:["sc-source-list"],rowHeight:32,selectOnMouseDown:NO,actOnSelect:YES});
sc_require("views/split");SC.SplitDividerView=SC.View.extend({classNames:["sc-split-divider-view"],prepareContext:function(a,c){var b=this.get("splitView");
if(b){this.set("cursor",b.get("thumbViewCursor"))}return arguments.callee.base.apply(this,arguments)
},mouseDown:function(a){var b=this.get("splitView");return(b)?b.mouseDownInThumbView(a,this):arguments.callee.base.apply(this,arguments)
},doubleClick:function(a){var b=this.get("splitView");return(b)?b.doubleClickInThumbView(a,this):arguments.callee.base.apply(this,arguments)
},touchStart:function(a){return this.mouseDown(a)}});sc_require("views/split_divider");
SC.RESIZE_BOTH="resize-both";SC.RESIZE_TOP_LEFT="resize-top-left";SC.RESIZE_BOTTOM_RIGHT="resize-bottom-right";
SC.SplitView=SC.View.extend({classNames:["sc-split-view"],displayProperties:["layoutDirection"],delegate:null,layoutDirection:SC.LAYOUT_HORIZONTAL,canCollapseViews:YES,autoresizeBehavior:SC.RESIZE_BOTTOM_RIGHT,defaultThickness:0.5,topLeftMinThickness:null,topLeftMaxThickness:null,bottomRightMinThickness:null,bottomRightMaxThickness:null,dividerThickness:null,isSplitView:YES,topLeftView:SC.View,dividerView:SC.SplitDividerView,bottomRightView:SC.View,topLeftThickness:function(){var a=this.get("topLeftView");
return a?this.thicknessForView(a):0}.property("topLeftView").cacheable(),bottomRightThickness:function(){var a=this.get("bottomRightView");
return a?this.thicknessForView(a):0}.property("bottomRightView").cacheable(),thumbViewCursor:null,canCollapseView:function(a){return this.invokeDelegateMethod(this.delegate,"splitViewCanCollapse",this,a)
},thicknessForView:function(a){var c=this.get("layoutDirection"),b=a.get("frame");
return(c===SC.LAYOUT_HORIZONTAL)?b.width:b.height},createChildViews:function(){var e=[],c=["topLeftView","dividerView","bottomRightView"],b=c.length,a,d;
for(d=0;d<b;++d){if(a=this.get(c[d])){a=this[c[d]]=this.createChildView(a,{layoutView:this,rootElementPath:[d]});
e.push(a)}}this.set("childViews",e);return this},updateChildLayout:function(){var b=this.get("topLeftView"),c=this.get("bottomRightView"),i=this.get("dividerView"),e=this.get("autoresizeBehavior"),j=this.get("layoutDirection"),a=this.get("frame"),d=this._desiredTopLeftThickness,k=this.get("dividerThickness"),h=(j===SC.LAYOUT_HORIZONTAL)?a.width:a.height,l=h-k-d,g,f;
k=(!SC.none(k))?k:7;f=b.get("isCollapsed")||NO;b.setIfChanged("isVisible",!f);g=SC.clone(b.get("layout"));
if(j===SC.LAYOUT_HORIZONTAL){g.top=0;g.left=0;g.bottom=0;switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";
case SC.RESIZE_TOP_LEFT:g.right=l+k;delete g.width;break;case SC.RESIZE_BOTTOM_RIGHT:delete g.right;
delete g.height;g.width=d;break}}else{g.top=0;g.left=0;g.right=0;switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";
case SC.RESIZE_TOP_LEFT:g.bottom=l+k;delete g.height;break;case SC.RESIZE_BOTTOM_RIGHT:g.height=d;
delete g.bottom;delete g.width;break}}b.set("layout",g);if(i){g=SC.clone(i.get("layout"));
if(j===SC.LAYOUT_HORIZONTAL){g.width=k;g.top=0;g.bottom=0;delete g.height;switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";
case SC.RESIZE_TOP_LEFT:g.right=l;delete g.left;delete g.centerX;delete g.centerY;
break;case SC.RESIZE_BOTTOM_RIGHT:g.left=d;delete g.right;delete g.centerX;delete g.centerY;
break}}else{g.height=k;g.left=0;g.right=0;delete g.width;switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";
case SC.RESIZE_TOP_LEFT:g.bottom=l;delete g.top;delete g.centerX;delete g.centerY;
break;case SC.RESIZE_BOTTOM_RIGHT:g.top=d;delete g.bottom;delete g.centerX;delete g.centerY;
break}}i.set("layout",g)}f=c.get("isCollapsed")||NO;c.setIfChanged("isVisible",!f);
g=SC.clone(c.get("layout"));if(j===SC.LAYOUT_HORIZONTAL){g.top=0;g.bottom=0;g.right=0;
switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";case SC.RESIZE_BOTTOM_RIGHT:g.left=d+k;
delete g.width;break;case SC.RESIZE_TOP_LEFT:g.width=l;delete g.left;break}}else{g.left=0;
g.right=0;g.bottom=0;switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";
case SC.RESIZE_BOTTOM_RIGHT:g.top=d+k;delete g.height;break;case SC.RESIZE_TOP_LEFT:delete g.top;
g.height=l;break}}c.set("layout",g);this.notifyPropertyChange("topLeftThickness").notifyPropertyChange("bottomRightThickness")
},renderLayout:function(b,a){if(a||this._recalculateDivider){var f=this.get("layoutDirection"),c=this.get("frame"),e=this.$(),i=this.get("defaultThickness"),d=this.get("autoresizeBehavior"),h=this.get("dividerThickness"),g;
if(!this.get("thumbViewCursor")){this.set("thumbViewCursor",SC.Cursor.create())}h=!SC.none(h)?h:7;
if(this._recalculateDivider===undefined&&i<1){this._recalculateDivider=YES}else{if(this._recalculateDivider){this._recalculateDivider=NO
}}if(e[0]){g=(f===SC.LAYOUT_HORIZONTAL)?e[0].offsetWidth:e[0].offsetHeight}else{g=(f===SC.LAYOUT_HORIZONTAL)?c.width:c.height
}if(SC.none(i)||(i>0&&i<1)){i=Math.floor((g-(h))*(i||0.5))}if(d===SC.RESIZE_BOTTOM_RIGHT){this._desiredTopLeftThickness=i
}else{this._desiredTopLeftThickness=g-h-i}this._topLeftView=this.get("topLeftView");
this._bottomRightView=this.get("bottomRightView");this._topLeftViewThickness=this.thicknessForView(this.get("topLeftView"));
this._bottomRightThickness=this.thicknessForView(this.get("bottomRightView"));this._dividerThickness=this.get("dividerThickness");
this._layoutDirection=this.get("layoutDirection");this._updateTopLeftThickness(0);
this._setCursorStyle();this.updateChildLayout()}arguments.callee.base.apply(this,arguments)
},render:function(a,b){arguments.callee.base.apply(this,arguments);if(this._inLiveResize){this._setCursorStyle()
}if(this.get("layoutDirection")===SC.LAYOUT_HORIZONTAL){a.addClass("sc-horizontal")
}else{a.addClass("sc-vertical")}},mouseDownInThumbView:function(a,c){var b=this.getPath("pane.rootResponder");
if(!b){return NO}b.dragDidStart(this);this._mouseDownX=a.pageX;this._mouseDownY=a.pageY;
this._thumbView=c;this._topLeftView=this.get("topLeftView");this._bottomRightView=this.get("bottomRightView");
this._topLeftViewThickness=this.thicknessForView(this.get("topLeftView"));this._bottomRightThickness=this.thicknessForView(this.get("bottomRightView"));
this._dividerThickness=this.get("dividerThickness");this._layoutDirection=this.get("layoutDirection");
this.beginLiveResize();this._inLiveResize=YES;return YES},mouseDragged:function(a){var b=(this._layoutDirection===SC.LAYOUT_HORIZONTAL)?a.pageX-this._mouseDownX:a.pageY-this._mouseDownY;
this._updateTopLeftThickness(b);return YES},mouseUp:function(a){if(this._inLiveResize===YES){this._thumbView=null;
this._inLiveResize=NO;this.endLiveResize();return YES}return NO},touchesDragged:function(a){return this.mouseDragged(a)
},touchEnd:function(a){return this.mouseUp(a)},doubleClickInThumbView:function(b,d){var a=this._topLeftView,c=a.get("isCollapsed")||NO;
if(!c&&!this.canCollapseView(a)){a=this._bottomRightView;c=a.get("isCollapsed")||NO;
if(!c&&!this.canCollapseView(a)){return NO}}if(!c){this._uncollapsedThickness=this.thicknessForView(a);
if(a===this._topLeftView){this._updateTopLeftThickness(this.topLeftThickness()*-1)
}else{this._updateBottomRightThickness(this.bottomRightThickness()*-1)}if(!a.get("isCollapsed")){this._uncollapsedThickness=null
}}else{if(a===this._topLeftView){this._updateTopLeftThickness(this._uncollapsedThickness)
}else{this._updateBottomRightThickness(this._uncollapsedThickness)}a._uncollapsedThickness=null
}this._setCursorStyle();return true},_updateTopLeftThickness:function(e){var a=this._topLeftView,c=this._bottomRightView,f=this.thicknessForView(a),g=this.thicknessForView(c),j=this._dividerThickness,i=0,b=this._topLeftViewThickness+e,m=this._layoutDirection,o=this.canCollapseView(c),l=b,k=this.get("topLeftMaxThickness"),d=this.get("topLeftMinThickness"),n,h,p;
if(!a.get("isCollapsed")){i+=f}if(!c.get("isCollapsed")){i+=g}if(!SC.none(k)){l=Math.min(k,l)
}if(!SC.none(d)){l=Math.max(d,l)}k=this.get("bottomRightMaxThickness");d=this.get("bottomRightMinThickness");
n=i-l;if(!SC.none(k)){n=Math.min(k,n)}if(!SC.none(d)){n=Math.max(d,n)}l=i-n;l=this.invokeDelegateMethod(this.delegate,"splitViewConstrainThickness",this,a,l);
l=Math.min(l,i);l=Math.max(0,l);h=a.get("collapseAtThickness");if(!h){h=0}p=c.get("collapseAtThickness");
p=SC.none(p)?i:(i-p);if((b<=h)&&this.canCollapseView(a)){k=c.get("maxThickness");
if(!k||(j+i)<=k){l=0}}else{if(b>=p&&this.canCollapseView(c)){k=a.get("maxThickness");
if(!k||(j+i)<=k){l=i}}}if(l!=this.thicknessForView(a)){this._desiredTopLeftThickness=l;
a.set("isCollapsed",l===0);c.set("isCollapsed",l>=i);this.updateChildLayout();this.displayDidChange()
}},_updateBottomRightThickness:function(e){var a=this._topLeftView,c=this._bottomRightView,f=this.thicknessForView(a),g=this.thicknessForView(c),j=this._dividerThickness,i=0,b=this._topLeftViewThickness+e,m=this._layoutDirection,o=this.canCollapseView(c),l=b,k=this.get("topLeftMaxThickness"),d=this.get("topLeftMinThickness"),n,h,p;
if(!a.get("isCollapsed")){i+=f}if(!c.get("isCollapsed")){i+=g}if(!SC.none(k)){l=Math.min(k,l)
}if(!SC.none(d)){l=Math.max(d,l)}k=this.get("bottomRightMaxThickness");d=this.get("bottomRightMinThickness");
n=i-l;if(!SC.none(k)){n=Math.min(k,n)}if(!SC.none(d)){n=Math.max(d,n)}l=i-n;l=this.invokeDelegateMethod(this.delegate,"splitViewConstrainThickness",this,a,l);
l=Math.min(l,i);l=Math.max(0,l);h=a.get("collapseAtThickness");if(!h){h=0}p=c.get("collapseAtThickness");
p=SC.none(p)?i:(i-p);if((b<=h)&&this.canCollapseView(a)){k=c.get("maxThickness");
if(!k||(j+i)<=k){l=0}}else{if(b>=p&&this.canCollapseView(c)){k=a.get("maxThickness");
if(!k||(j+i)<=k){l=i}}}if(l!=this.thicknessForView(a)){this._desiredTopLeftThickness=l;
a.set("isCollapsed",l===0);c.set("isCollapsed",l>=i);this.updateChildLayout();this.displayDidChange()
}},_setCursorStyle:function(){var d=this._topLeftView,e=this._bottomRightView,a=this.get("thumbViewCursor"),b=this.thicknessForView(d),c=this.thicknessForView(e);
this._layoutDirection=this.get("layoutDirection");if(d.get("isCollapsed")||b===this.get("topLeftMinThickness")||c==this.get("bottomRightMaxThickness")){a.set("cursorStyle",this._layoutDirection===SC.LAYOUT_HORIZONTAL?"e-resize":"s-resize")
}else{if(e.get("isCollapsed")||b===this.get("topLeftMaxThickness")||c==this.get("bottomRightMinThickness")){a.set("cursorStyle",this._layoutDirection===SC.LAYOUT_HORIZONTAL?"w-resize":"n-resize")
}else{if(SC.browser.msie){a.set("cursorStyle",this._layoutDirection===SC.LAYOUT_HORIZONTAL?"e-resize":"n-resize")
}else{a.set("cursorStyle",this._layoutDirection===SC.LAYOUT_HORIZONTAL?"ew-resize":"ns-resize")
}}}}.observes("layoutDirection"),splitViewCanCollapse:function(b,a){if(b.get("canCollapseViews")===NO){return NO
}if(a.get("canCollapse")===NO){return NO}return YES},splitViewConstrainThickness:function(c,a,b){return b
},_forceSplitCalculation:function(){this.updateLayout()}.observes("*pane.isPaneAttached"),viewDidResize:function(){arguments.callee.base.apply(this,arguments);
this.notifyPropertyChange("topLeftThickness").notifyPropertyChange("bottomRightThickness")
}.observes("layout")});sc_require("views/collection");SC.StackedView=SC.CollectionView.extend({classNames:["sc-stacked-view"],layout:{top:0,left:0,right:0,height:1},computeNowShowing:function(a){return this.get("allContentIndexes")
},updateHeight:function(a){if(a){this._updateHeight()}else{this.invokeLast(this._updateHeight)
}return this},_updateHeight:function(){var e=this.get("childViews"),b=e.get("length"),c,d,a;
if(b===0){a=1}else{c=e.objectAt(b-1);d=c?c.get("layer"):null;a=d?(d.offsetTop+d.offsetHeight):1;
d=null}this.adjust("height",a)},didReload:function(a){return this.updateHeight()},didCreateLayer:function(){return this.updateHeight()
}});SC.StaticContentView=SC.View.extend(SC.StaticLayout,{classNames:["sc-static-content-view"],displayProperties:["content"],content:null,contentLayoutDidChange:function(){this._viewFrameDidChange()
},useStaticLayout:YES,frame:function(){var a=this.get("layer"),b;if(!a){return{x:0,y:0,width:0,height:0}
}if(a.getBoundingClientRect){b=a.getBoundingClientRect();return{x:0,y:0,width:b.width,height:b.height}
}else{return{x:0,y:0,width:a.clientWidth,height:a.clientHeight}}}.property("content").cacheable(),parentViewDidResize:function(){this.contentLayoutDidChange()
},didUpdateLayer:function(){this.contentLayoutDidChange()},render:function(a,c){var b=this.get("content");
if(b){a.push(b||"")}}});sc_require("views/segmented");SC.TOP_LOCATION="top";SC.TOP_TOOLBAR_LOCATION="top-toolbar";
SC.BOTTOM_LOCATION="bottom";SC.TabView=SC.View.extend({classNames:["sc-tab-view"],displayProperties:["nowShowing"],nowShowing:null,items:[],isEnabled:YES,itemTitleKey:null,itemValueKey:null,itemIsEnabledKey:null,itemIconKey:null,itemWidthKey:null,itemToolTipKey:null,tabHeight:SC.REGULAR_BUTTON_HEIGHT,tabLocation:SC.TOP_LOCATION,userDefaultKey:null,_tab_nowShowingDidChange:function(){var a=this.get("nowShowing");
this.get("containerView").set("nowShowing",a);this.get("segmentedView").set("value",a);
return this}.observes("nowShowing"),_tab_saveUserDefault:function(){var a=this.get("nowShowing");
var b=this.get("userDefaultKey");if(b){SC.userDefaults.set([b,"nowShowing"].join(":"),a)
}}.observes("nowShowing"),_tab_itemsDidChange:function(){this.get("segmentedView").set("items",this.get("items"));
return this}.observes("items"),init:function(){arguments.callee.base.apply(this,arguments);
this._tab_nowShowingDidChange()._tab_itemsDidChange()},awake:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("userDefaultKey");if(a){a=[a,"nowShowing"].join(":");var b=SC.userDefaults.get(a);
if(!SC.none(b)){this.set("nowShowing",b)}}},createChildViews:function(){var f=[],a,e,d,c=this.get("tabLocation"),b=this.get("tabHeight");
d=(c===SC.TOP_LOCATION)?{top:b/2+1,left:0,right:0,bottom:0}:(c===SC.TOP_TOOLBAR_LOCATION)?{top:b+1,left:0,right:0,bottom:0}:{top:0,left:0,right:0,bottom:b-1};
e=this.containerView.extend(SC.Border,{layout:d,borderStyle:SC.BORDER_BLACK});a=this.containerView=this.createChildView(e);
f.push(a);d=(c===SC.TOP_LOCATION||c===SC.TOP_TOOLBAR_LOCATION)?{height:b,left:0,right:0,top:0}:{height:b,left:0,right:0,bottom:0};
this.segmentedView=this.get("segmentedView").extend({layout:d,_sc_tab_segmented_valueDidChange:function(){var g=this.get("parentView");
if(g){g.set("nowShowing",this.get("value"))}this.set("layerNeedsUpdate",YES);this.invokeOnce(this.updateLayerIfNeeded)
}.observes("value"),init:function(){var g=this.get("parentView");if(g){SC._TAB_ITEM_KEYS.forEach(function(h){this[h]=g.get(h)
},this)}return arguments.callee.base.apply(this,arguments)}});a=this.segmentedView=this.createChildView(this.segmentedView);
f.push(a);this.set("childViews",f);return this},containerView:SC.ContainerView,segmentedView:SC.SegmentedView});
SC._TAB_ITEM_KEYS="itemTitleKey itemValueKey itemIsEnabledKey itemIconKey itemWidthKey itemToolTipKey itemActionKey itemTargetKey".w();
SC.ThumbView=SC.View.extend({classNames:["sc-thumb-view"],isEnabled:YES,isEnabledBindingDefault:SC.Binding.bool(),prepareContext:function(a,c){var b=this.get("splitView");
if(b){this.set("cursor",b.get("thumbViewCursor"))}return arguments.callee.base.apply(this,arguments)
},mouseDown:function(a){if(!this.get("isEnabled")){return NO}var b=this.get("splitView");
return(b)?b.mouseDownInThumbView(a,this):arguments.callee.base.apply(this,arguments)
},touchStart:function(a){return this.mouseDown(a)}});SC.WebView=SC.View.extend(SC.Control,{classNames:"sc-web-view",displayProperties:["value","shouldAutoResize"],shouldAutoResize:NO,render:function(a,d){var c=this.get("value");
if(d){a.push('<iframe src="'+c+'" style="position: absolute; width: 100%; height: 100%; border: 0px; margin: 0px; padding: 0px;"></iframe>')
}else{var b=this.$("iframe");b.attr("src","javascript:;");b.attr("src",c)}},didCreateLayer:function(){var a=this.$("iframe");
SC.Event.add(a,"load",this,this.iframeDidLoad)},iframeDidLoad:function(){if(this.get("shouldAutoResize")===YES){var a;
var c=this.$("iframe")[0];if(c&&c.contentWindow){a=c.contentWindow;if(a&&a.document&&a.document.documentElement){var b=a.document.documentElement;
if(!SC.browser.isIE){this.$().width(b.scrollWidth);this.$().height(b.scrollHeight)
}else{this.$().width(b.scrollWidth+12);this.$().height(b.scrollHeight+5)}}}}}});SC.WELL_CONTAINER_PADDING=15;
SC.WellView=SC.ContainerView.extend({classNames:"sc-well-view",contentLayout:{top:SC.WELL_CONTAINER_PADDING,bottom:SC.WELL_CONTAINER_PADDING,left:SC.WELL_CONTAINER_PADDING,right:SC.WELL_CONTAINER_PADDING},createChildViews:function(){var a=this.get("contentView");
if(a){a=this.contentView=this.createChildView(a);a.set("layout",this.contentLayout);
this.childViews=[a]}},render:function(a,b){if(b){a.push("<div class='top-left-edge'></div>","<div class='top-edge'></div>","<div class='top-right-edge'></div>","<div class='right-edge'></div>","<div class='bottom-right-edge'></div>","<div class='bottom-edge'></div>","<div class='bottom-left-edge'></div>","<div class='left-edge'></div>","<div class='content-background'></div>")
}arguments.callee.base.apply(this,arguments)},contentViewDidChange:function(){var a=this.get("contentView");
a.set("layout",this.contentLayout);this.replaceContent(a)}.observes("contentView")});
if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/desktop")
}SC.Animatable={isAnimatable:YES,transitions:{},concatenatedProperties:["transitions"],style:{},_cssTransitionFor:{left:"left",top:"top",right:"right",bottom:"bottom",width:"width",height:"height",opacity:"opacity",transform:(SC.platform.supportsCSSTransforms?"-"+SC.platform.cssPrefix+"-transform":"transform")},_styleProperties:["opacity","display","transform"],_layoutStyles:"width height top bottom marginLeft marginTop left right zIndex minWidth maxWidth minHeight maxHeight centerX centerY".w(),_animationsToStart:{},_animationOrder:["top","left","bottom","right","width","height","centerX","centerY","opacity","display","transform"],initMixin:function(){this._animatable_original_didCreateLayer=this.didCreateLayer||function(){};
this.didCreateLayer=this._animatable_didCreateLayer;this._animatable_original_willDestroyLayer=this.willDestroyLayer||function(){};
this.willDestroyLayer=this._animatable_willDestroyLayer;this._animatable_original_willRemoveFromParent=this.willRemoveFromParent||function(){};
this.willRemoveFromParent=this._animatable_will_remove_from_parent;this._animatable_original_hasAcceleratedLayer=this.hasAcceleratedLayer||function(){};
this.hasAcceleratedLayer=this._animatable_hasAcceleratedLayer;this._animatable_original_animate=this.animate||function(){};
this.animate=this._animatable_animate;this.addObserver("style",this,"styleDidChange");
this._animateTickPixel.displayName="animate-tick";var b;if(SC.isArray(this.transitions)){var a={};
for(b=0;b<this.transitions.length;b++){SC.mixin(a,this.transitions[b])}this.transitions=a
}for(b in this.transitions){if(typeof this.transitions[b]=="number"){this.transitions[b]={duration:this.transitions[b]}
}}this._animatableCurrentStyle=null;this._animators={};this._animatableSetCSS="";
this._last_transition_css="";if(this._disableAnimation===undefined){this._disableAnimation=0
}this._transitionCallbacks={};if(!SC.none(this.get("layer"))){var c=this._animatable_original_didCreateLayer;
this._animatable_original_didCreateLayer=function(){};this.didCreateLayer();this._animatable_original_didCreateLayer=c
}},_animatable_didCreateLayer:function(){this.resetAnimation();SC.Event.add(this.get("layer"),SC.platform.cssPrefix+"TransitionEnd",this,this.transitionEnd);
SC.Event.add(this.get("layer"),"transitionEnd",this,this.transitionEnd);return this._animatable_original_didCreateLayer()
},_animatable_willDestroyLayer:function(){SC.Event.remove(this.get("layer"),SC.platform.cssPrefix+"TransitionEnd",this,this.transitionEnd);
SC.Event.remove(this.get("layer"),"transitionEnd",this,this.transitionEnd);return this._animatable_original_willDestroyLayer()
},_animatable_will_remove_from_parent:function(){this.resetAnimation()},disableAnimation:function(){if(this._disableAnimation===undefined){this._disableAnimation=0
}this._disableAnimation++},enableAnimation:function(){this._disableAnimation--;if(this._disableAnimation<0){this._disableAnimation=0
}},adjust:function(k,l){if(!SC.none(l)){var m=k;k={};k[m]=l}else{k=SC.clone(k)}var a=SC.clone(this.get("style")),c=NO,g=SC.clone(this.get("layout")),b=NO;
var n=this._styleProperties;for(var e in k){var h=NO;var j=(n.indexOf(e)>=0)?a:g;
var d=j[e],f=k[e];if(f!==undefined&&d!==f){if(f===null){if(d!==undefined){h=YES}delete j[e]
}else{j[e]=f;h=YES}}if(h){if(j===a){c=YES}else{b=YES}}}if(c){this.set("style",a)}if(b){this.set("layout",g)
}return this},_animatable_animate:function(){this.disableAnimation();var a=this._animatable_original_animate.apply(this,arguments);
this.enableAnimation();return a},transitionEnd:function(a){SC.RunLoop.begin();var b=a.originalEvent.propertyName,c=this._transitionCallbacks[b];
if(c&&this._disableAnimation<=0){SC.Animatable.runCallback(c)}SC.RunLoop.end()},getCurrentJavaScriptStyles:function(){return this._animatableCurrentStyle
},resetAnimation:function(){this._animatableCurrentStyle=null;this._stopJavaScriptAnimations();
this.disableAnimation();this.updateStyle();this.enableAnimation();this.updateStyle()
},_stopJavaScriptAnimations:function(){for(var a in this._animators){if(this._animators[a]&&this._animators[a].isQueued){SC.Animatable.removeTimer(this._animators[a])
}}},_getStartStyleHash:function(h,g){var e=this.layout;this.layout=h;var d=this.computeParentDimensions();
var c=this.computeFrameWithParentFrame(d);this.layout=e;var a={};for(var b in g){if(c){if(b=="left"){a[b]=c.x;
continue}else{if(b=="top"){a[b]=c.y;continue}else{if(b=="right"){a[b]=d.width-c.x-c.width;
continue}else{if(b=="bottom"){a[b]=d.height-c.y-c.height;continue}else{if(b=="width"){a[b]=c.width;
continue}else{if(b=="height"){a[b]=c.height;continue}else{if(b=="centerX"){a[b]=c.x+(c.width/2)-(d.width/2);
continue}else{if(b=="centerY"){a[b]=c.y+(c.height/2)-(d.height/2);continue}}}}}}}}}if(SC.none(a[b])){if(!SC.none(h[b])){a[b]=h[b]
}else{a[b]=g[b]}}}return a},_TMP_CSS_TRANSITIONS:[],cssTimingStringFor:function(c){var b="linear";
if(c.timing||SC.Animatable.defaultTimingFunction){var a=c.timing||SC.Animatable.defaultTimingFunction;
if(SC.typeOf(a)!=SC.T_STRING){b="cubic-bezier("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"
}else{b=a}}return b},styleDidChange:function(){this.invokeLast("updateStyle")},_animatable_hasAcceleratedLayer:function(){var b=this.transitions.left&&this.transitions.left.duration,a=this.transitions.top&&this.transitions.top.duration;
if(b!==a){return NO}else{if((a||b)&&!SC.platform.supportsCSSTransitions){return NO
}else{return this._animatable_original_hasAcceleratedLayer()}}}.property("wantsAcceleratedLayer","transitions"),updateStyle:function(){var F=this.get("layer");
var r=this.get("style");var n=NO,f="";if(this.get("hasAcceleratedLayer")){var u=r.top,b=r.bottom,B=r.height,A=r.left,w=r.right,p=r.width;
if((SC.empty(u)||(!SC.isPercentage(u)&&!SC.empty(B)))&&(SC.empty(A)||(!SC.isPercentage(A)&&!SC.empty(p)))){n=YES;
this._useSpecialCaseTransform=YES}else{this._useSpecialCaseTransform=NO}}var z;if(!this._animatableCurrentStyle||this._disableAnimation>0||!F){this._animatableSetCSS="";
this._animatableCurrentStyle={};for(z in r){if(z[0]!="_"){this._animatableCurrentStyle[z]=r[z]
}}if(F){this._animatableApplyStyles(F,r)}return this}if(!F){return}var q=true;for(z in r){if(z[0]=="_"){continue
}if(r[z]!=this._animatableCurrentStyle[z]){q=false;break}}if(q){return this}var e=this._getStartStyleHash(this._animatableCurrentStyle,r);
var g={};var s;var h=this._TMP_CSS_TRANSITIONS;if(SC.platform.supportsCSSTransitions){var m;
if(n){var E=this.transitions.left||this.transitions.top;m=this.cssTimingStringFor(E);
h.push("-"+SC.platform.cssPrefix+"-transform "+E.duration+"s "+m)}for(z in this.transitions){if(!this._cssTransitionFor[z]){continue
}if(n&&(z=="left"||z=="top")){if(this.transitions.left.action){this._transitionCallbacks["-"+SC.platform.cssPrefix+"-transform"]={source:this,target:(this.transitions.left.target||this),action:this.transitions.left.action}
}if(this.transitions.top.action){this._transitionCallbacks["-"+SC.platform.cssPrefix+"-transform"]={source:this,target:(this.transitions.top.target||this),action:this.transitions.top.action}
}continue}m=this.cssTimingStringFor(this.transitions[z]);h.push(this._cssTransitionFor[z]+" "+this.transitions[z].duration+"s "+m)
}}for(z in r){if(z[0]=="_"){continue}var d=!this.transitions[z]||r[z]==e[z];if(z=="display"&&r[z]!="none"){d=true
}if(d){e[z]=r[z];var D=this._animators[z];if(D){D.endValue=r[z];D.end=0}continue}if(SC.platform.supportsCSSTransitions&&this._cssTransitionFor[z]){g[z]=r[z];
if(this.transitions[z].action){this._transitionCallbacks[this._cssTransitionFor[z]]={source:this,target:(this.transitions[z].target||this),action:this.transitions[z].action}
}continue}var y=this._animateTickPixel,c=z,o=e[z],k=r[z];if(c=="centerX"||c=="centerY"){y=this._animateTickCenter
}else{if(c=="opacity"){y=this._animateTickNumber}else{if(c=="display"){y=this._animateTickDisplay
}}}if(!this._animators[z]){this._animators[z]={}}var C=this._animators[z];C.start=null;
C.duration=Math.floor(this.transitions[z].duration*1000);C.startValue=o;C.endValue=k;
C.layer=F;C.property=c;C.action=y;C.style=F.style;C.holder=this;if(this.transitions[z].action){C.callback={source:this,target:(this.transitions[z].target||this),action:this.transitions[z].action}
}s=this.transitions[z].timing||SC.Animatable.defaultTimingFunction;if(s&&SC.typeOf(s)!=SC.T_STRING){C.timingFunction=s
}if(!C.going){this._animationsToStart[z]=C}}var t=this._animationOrder,v=this._animationOrder.length;
for(z=0;z<v;z++){var x=t[z];if(this._animationsToStart[x]){SC.Animatable.addTimer(this._animationsToStart[x]);
delete this._animationsToStart[x]}}var j=h.join(",");h.length="";this._animatableSetCSS=j;
this._animatableApplyStyles(F,e,g);return this},_style_opacity_helper:function(c,a,b){c.opacity=b.opacity;
c.mozOpacity=b.opacity},_animatableApplyStyles:function(b,c,a){if(!b){return}var e=NO;
if(c.display&&b.style.display!==c.display){b.style.display=c.display;e=YES}if(this._animatableSetCSS!=this._last_transition_css){b.style[SC.platform.domCSSPrefix+"Transition"]=this._animatableSetCSS;
this._last_transition_css=this._animatableSetCSS;e=YES}if(!this._animators["display-styles"]){this._animators["display-styles"]={}
}var d=this._animators["display-styles"];d.holder=this;d.action=this._animatableApplyNonDisplayStylesFromTimer;
d.inLoopAction=this._animatableApplyNonDisplayStyles;d.layer=b;d.styles=c;d.delayed=a;
this._animatableCurrentStyle=c;if(this._disableAnimation>0){d.inLoopAction()}else{SC.Animatable.addTimer(d)
}},_animatableApplyNonDisplayStylesFromTimer:function(){SC.RunLoop.begin();this.inLoopAction();
SC.RunLoop.end()},_animatableApplyNonDisplayStyles:function(){var g=this.layer,k=this.holder._animatableCurrentStyle;
var d={opacity:this.holder._style_opacity_helper};var h={},l=NO,a=g.style;var b="";
for(var f in k){if(f=="display"){continue}if(this.holder._layoutStyles.indexOf(f)>=0){h[f]=k[f];
l=YES;continue}else{if(f=="transform"){b+=" "+k[f]}else{if(d[f]){d[f](a,f,k)}else{a[f]=k[f]
}}}}if(!SC.empty(b)){a[SC.platform.cssPrefix+"Transform"]=b}if(l){var c=this.holder.layout;
this.holder.layout=h;this.holder.notifyPropertyChange("layoutStyle");var e=this.holder.get("layoutStyle");
for(var j in e){if(SC.none(e[j])){a[j]=""}else{if(a[j]!=e[j]){a[j]=e[j]}}}this.holder.layout=c
}if(this.delayed){SC.mixin(this.holder._animatableCurrentStyle,this.delayed);this.styles=this.delayed;
this.delayed=undefined;if(this._disableAnimation>0){this.inLoopAction()}else{SC.Animatable.addTimer(this)
}}},updateLayout:function(c,a){var b=SC.clone(this.get("style"));var g=this.get("layout");
var d=0,e=this._layoutStyles,h=e.length,f=NO;for(d=0;d<h;d++){var j=e[d];if(b[j]!==g[j]){if(SC.none(g[j])){b[j]=undefined
}else{b[j]=g[j]}f=YES}}if(f){this.style=b;this.updateStyle()}return this},_solveBezierForT:function(b,p,m,l,f,d,n,e){var o=1/(200*e);
var k,j,h,c,a,g;for(h=n,g=0;g<8;g++){c=((b*h+m)*h+f)*h-n;if(Math.abs(c)<o){return h
}a=(3*b*h+2*m)*h+f;if(Math.abs(a)<Math.pow(10,-6)){break}h=h-c/a}k=0;j=1;h=n;if(h<k){return k
}if(h>j){return j}while(k<j){c=((b*h+m)*h+f)*h;if(Math.abs(c-n)<o){return h}if(n>c){k=h
}else{j=h}h=(j-k)*0.5+k}return h},_solveBezier:function(c,b,j,i,k,e){var f=3*c;var h=3*(j-c)-f;
var a=1-f-h;var d=3*b;var g=3*(i-b)-d;var m=1-d-g;var l=this._solveBezierForT(a,m,h,g,f,d,k,e);
return((m*l+g)*l+d)*l},_animateTickPixel:function(m){if(SC.none(this.start)){this.start=m;
this.end=this.start+this.duration}var n=this.start,g=this.end;var l=this.startValue,j=this.endValue;
var h=g-n;var b=j-l;var i=m-n;var f=Math.min(i/h,1);if(this.timingFunction){var a=this.timingFunction;
f=this.holder._solveBezier(a[0],a[1],a[2],a[3],f,h)}var k=Math.floor(l+(b*f));this.holder._animatableCurrentStyle[this.property]=k;
this.style[this.property]=k+"px";if(m<g){SC.Animatable.addTimer(this)}else{this.going=false;
if(this.callback){SC.Animatable.runCallback(this.callback)}this.styles=null;this.layer=null
}},_animateTickDisplay:function(a){if(SC.none(this.start)){this.start=a;this.end=this.start+this.duration
}var b=this.end;if(a<b){SC.Animatable.addTimer(this);return}this.holder._animatableCurrentStyle[this.property]=this.endValue;
this.style[this.property]=this.endValue;this.going=false;if(this.callback){SC.Animatable.runCallback(this.callback)
}this.styles=null;this.layer=null},_animateTickNumber:function(m){if(SC.none(this.start)){this.start=m;
this.end=this.start+this.duration}var n=this.start,g=this.end;var l=this.startValue,j=this.endValue;
var h=g-n;var b=j-l;var i=m-n;var f=Math.min(i/h,1);if(this.timingFunction){var a=this.timingFunction;
f=this.holder._solveBezier(a[0],a[1],a[2],a[3],f,h)}var k=Math.round((l+(b*f))*100)/100;
this.holder._animatableCurrentStyle[this.property]=k;this.style[this.property]=k;
if(this.property=="opacity"){this.style.zoom=1}if(m<g){SC.Animatable.addTimer(this)
}else{this.going=false;if(this.callback){SC.Animatable.runCallback(this.callback)
}this.styles=null;this.layer=null}},_animateTickCenter:function(o){if(SC.none(this.start)){this.start=o;
this.end=this.start+this.duration}var p=this.start,h=this.end;var n=this.startValue,k=this.endValue;
var i=h-p;var f=k-n;var j=o-p;var g=Math.min(j/i,1);if(this.timingFunction){var b=this.timingFunction;
g=this.holder._solveBezier(b[0],b[1],b[2],b[3],g,i)}var m=n+(f*g);this.holder._animatableCurrentStyle[this.property]=m;
var l,a;if(this.property=="centerX"){l="width";a="marginLeft"}else{l="height";a="marginTop"
}this.style[a]=Math.round(m-(this.holder._animatableCurrentStyle[l]/2))+"px";if(o<h){SC.Animatable.addTimer(this)
}else{this.going=false;if(this.callback){SC.Animatable.runCallback(this.callback)
}this.styles=null;this.layer=null}}};SC.mixin(SC.Animatable,{NAMESPACE:"SC.Animatable",VERSION:"0.1.0",TRANSITION_NONE:"linear",TRANSITION_CSS_EASE:"ease",TRANSITION_CSS_EASE_IN:"ease-in",TRANSITION_CSS_EASE_OUT:"ease-out",TRANSITION_CSS_EASE_IN_OUT:"ease-in-out",TRANSITION_EASE:[0.25,0.1,0.25,1],TRANSITION_LINEAR:[0,0,1,1],TRANSITION_EASE_IN:[0.42,0,1,1],TRANSITION_EASE_OUT:[0,0,0.58,1],TRANSITION_EASE_IN_OUT:[0.42,0,0.58,1],defaultTimingFunction:null,baseTimer:{next:null},going:false,_ticks:0,_timer_start_time:null,interval:10,currentTime:new Date().getTime(),stats:SC.Object.create({lastFPS:0}),addTimer:function(a){if(a.isQueued){return
}a.prev=SC.Animatable.baseTimer;a.next=SC.Animatable.baseTimer.next;if(SC.Animatable.baseTimer.next){SC.Animatable.baseTimer.next.prev=a
}SC.Animatable.baseTimer.next=a;a.isQueued=true;if(!SC.Animatable.going){SC.Animatable.start()
}},removeTimer:function(a){if(!a.isQueued){return}if(a.next){a.next.prev=a.prev}a.prev.next=a.next;
a.isQueued=false},start:function(){SC.Animatable._ticks=0;SC.Animatable._timer_start_time=new Date().getTime();
SC.Animatable.going=true;setTimeout(function(){SC.Animatable.timeout()},SC.Animatable.interval)
},timeout:function(){SC.Animatable.currentTime=new Date().getTime();var h=SC.Animatable.currentTime;
var f=SC.Animatable.baseTimer.next;SC.Animatable.baseTimer.next=null;var e=0;while(f){var d=f.next;
f.isQueued=false;f.next=null;f.prev=null;f.action.call(f,h);f=d;e++}if(SC.Animatable._ticks<1000000){SC.Animatable._ticks++
}var c=new Date().getTime();var b=c-h;if(SC.Animatable.baseTimer.next){setTimeout(function(){SC.Animatable.timeout()
},Math.max(0,SC.Animatable.interval-b))}else{SC.Animatable.going=false;var g=c-SC.Animatable._timer_start_time;
var a=SC.RunLoop.begin();SC.Animatable.stats.set("lastFPS",SC.Animatable._ticks/(g/1000));
a.end()}},runCallback:function(f){var a=SC.typeOf(f.action);if(a==SC.T_FUNCTION){f.action.call(f.target,f.source)
}else{if(a===SC.T_STRING){if(f.action.indexOf(".")>=0){var e=f.action.split(".");
var c=e.pop();var d=SC.objectForPropertyPath(e,window);var b=d.get?d.get(c):d[c];
if(b&&SC.typeOf(b)==SC.T_FUNCTION){b.call(d,f.source)}else{throw"SC.Animator could not find a function at %@".fmt(f.action)
}}else{SC.RootResponder.responder.sendAction(f.action,f.target,f.source,f.source.get("pane"),null,f.source)
}}}}});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/animation")
}if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/documentation")
};