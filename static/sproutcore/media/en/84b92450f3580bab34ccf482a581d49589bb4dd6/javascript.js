SC.mediaSlider=SC.SliderView.extend({mediaView:null,leftHandleInsetBinding:"*owner.leftHandleInset",rightHandleInsetBinding:"*owner.rightHandleInset",handleWidthBinding:"*owner.handleWidth",loadedRangesSelector:"span.sc-loaded-ranges",_defaults:{leftHandleInset:-1,rightHandleInset:-8,handleWidth:16},render:function(d,a){arguments.callee.base.base.apply(this,arguments);
var j=this.get("minimum"),n=this.get("maximum"),o=this.get("value"),f=this.get("step"),c=this.get("frame").width,g,m,e,h,k,b=SC.BLANK_IMAGE_URL;
if(!this._defaultsEnsured){this._defaultsEnsured=YES;for(k in this._defaults){if(SC.none(this.get(k))){this.set(k,this._defaults[k])
}}}o=Math.min(Math.max(o,j),n);if(!SC.none(f)&&f!==0){o=Math.round(o/f)*f}if(!a){var l=this.handleElement||(this.handleElement=this.$(this.get("handleSelector"))[0]);
if(!this.handleWidth){this.handleWidth=this.handleElement.offsetWidth||this.handleWidth
}}h=c-this.handleWidth/2-this.rightHandleInset;e=this.handleWidth/2+this.leftHandleInset;
if(j==n){m=e}else{m=(o-j)/(n-j)*(h-e)+e}g=m+this.leftHandleInset-this.handleWidth/2;
if(!a){l.style.left=g+"px"}else{d.push('<span class="sc-inner">','<span class="sc-leftcap"></span>','<span class="sc-rightcap"></span>','<span class="sc-track"></span>','<span class="sc-loaded-ranges"></span>','<img src="',b,'" class="sc-handle" style="left: ',g,'px" />',"</span>")
}this.renderLoadedTimeRanges()},renderLoadedTimeRanges:function(){var g=this.get("maximum"),d=this.get("minimum"),c=this.get("frame").width,e;
var j=this.get("mediaView");if(!j){return}var a=j.get("loadedTimeRanges");if(!a){return
}if(!this.loadedRangesElement){this.loadedRangesElement=this.$(this.get("loadedRangesSelector"))[0]
}if(!this.loadedBGTemplate){this.loadedBGTemplate=document.createElement("span");
this.loadedBGTemplate.className="sc-loaded-range";this.loadedBGTemplate.innerHTML=['<span class="sc-loaded-range-inner">','<span class="sc-leftcap loaded"></span>','<span class="sc-rightcap loaded"></span>','<span class="sc-track loaded"></span>',"</span>"].join("")
}if(!this.loadedRangeElements){this.loadedRangeElements=[]}for(e=0;e<a.length/2;e++){var f=this.loadedRangeElements[e]||(this.loadedRangeElements[e]=this.loadedBGTemplate.cloneNode(true));
var b=Math.round(((a[2*e]+d)/g)*c);var h=Math.round(((a[2*e+1]+d)/g)*c);f.style.left=b+"px";
f.style.width=h-b+"px";f.firstChild.style.left=0-b+"px";f.firstChild.style.width=c+"px";
if(!f.parentNode){this.loadedRangesElement.appendChild(f)}}for(e=a.length/2;e<this.loadedRangeElements.length;
e++){if(this.loadedRangeElements[e].parentNode){this.loadedRangeElements[e].parentNode.removeChild(this.loadedRangeElements[e])
}}}.observes("*mediaView.loadedTimeRanges"),_triggerHandle:function(k,h){var a=this.get("frame").width,e=this.get("minimum"),i=this.get("maximum"),c=this.get("step"),j=this.get("value"),g,d,b,f=this.handleElement||(this.handleElement=this.$(this.get("handleSelector"))[0]);
if(!this.handleWidth){this.handleWidth=this.handleElement.offsetWidth||this.handleWidth
}if(h){g=this.convertFrameFromView({x:k.pageX}).x;this._evtDiff=k.pageX-g}else{g=k.pageX-this._evtDiff
}d=a-this.handleWidth/2-this.rightHandleInset;b=this.handleWidth/2+this.leftHandleInset;
g=Math.max(Math.min(g,d),b);g=(g-b)/(d-b);g=e+((i-e)*g);if(c!==0){g=Math.round(g/c)*c
}if(Math.abs(j-g)>=0.01){this.set("value",g)}return YES},mouseDown:function(a){var b=this.get("mediaView");
if(b){b.startSeek()}return arguments.callee.base.apply(this,arguments)},mouseUp:function(a){var b=this.get("mediaView");
if(b){b.endSeek()}return arguments.callee.base.apply(this,arguments)},mouseWheel:function(){var b,a;
SC.RunLoop.begin();b=this.get("mediaView");if(b){b.startSeek()}a=arguments.callee.base.apply(this,arguments);
SC.RunLoop.end();SC.RunLoop.begin();if(b){b.endSeek()}SC.RunLoop.end();return a}});
sc_require("views/mediaSlider");SC.MediaControlsView=SC.View.extend({target:null,childViews:"playButton progressView timeView minusLabelView volumeView plusLabelView theaterButton".w(),classNames:"sc-media-controls",leftHandleInset:null,rightHandleInset:null,handleWidth:null,playObserver:function(){if(this.getPath("target.paused")){this.get("playButton").set("icon","play")
}else{this.get("playButton").set("icon","stop")}}.observes("*target.paused"),playButton:SC.ButtonView.design({title:"",titleMinWidth:35,icon:"play",noStyle:YES,layout:{top:0,left:0,width:20,height:20},action:"playPause",targetBinding:"*owner.target",renderStyle:"renderImage",controlStyle:""}),progressView:SC.mediaSlider.design({layout:{top:0,left:20,right:220,height:20},value:0,minimum:0,step:0.1,valueBinding:"*owner.target.currentTime",maximumBinding:"*owner.target.duration",mediaViewBinding:"*owner.target"}),timeView:SC.LabelView.design({layout:{top:0,right:160,width:60,height:20},classNames:"time",textAlign:SC.ALIGN_CENTER,valueBinding:"*owner.target.time"}),theaterButton:SC.ButtonView.design({title:"",icon:"theater",renderStyle:"renderImage",controlStyle:"",titleMinWidth:35,layout:{top:0,right:140,width:20,height:20},action:"fullScreen",targetBinding:"*owner.target"}),minusLabelView:SC.LabelView.design({layout:{top:0,right:120,width:20,height:20},value:"",icon:"minus"}),volumeView:SC.mediaSlider.design({layout:{top:0,right:20,width:100,height:20},value:0,valueBinding:"*owner.target.volume",minimum:0,maximum:1,step:0.01}),plusLabelView:SC.LabelView.design({layout:{top:0,right:0,width:20,height:20},value:"",icon:"plus"})});
sc_require("views/mediaSlider");SC.MiniMediaControlsView=SC.View.extend({target:null,childViews:"playButton timeView minusLabelView volumeView".w(),classNames:"sc-media-controls",playObserver:function(){if(this.getPath("target.paused")){this.get("playButton").set("icon","play")
}else{this.get("playButton").set("icon","stop")}}.observes("*target.paused"),playButton:SC.ButtonView.design({title:"",titleMinWidth:35,icon:"play",noStyle:YES,layout:{top:0,left:0,width:20,height:20},action:"playPause",targetBinding:"*owner.target",renderStyle:"renderImage",controlStyle:""}),timeView:SC.LabelView.design({layout:{top:0,left:20,width:60,height:20},classNames:"time",textAlign:SC.ALIGN_CENTER,valueBinding:"*owner.target.time"}),minusLabelView:SC.LabelView.design({layout:{top:0,left:80,width:20,height:20},value:"",icon:"minus"}),volumeView:SC.SliderView.design({layout:{top:0,left:100,width:100,height:20},value:0,valueBinding:"*owner.target.volume",minimum:0,maximum:1,step:0.01})});
sc_require("views/controls");sc_require("views/miniControls");SC.AudioView=SC.View.extend({classNames:"sc-audio-view",displayProperties:["value","shouldAutoResize"],audioObject:null,degradeList:["html5","quicktime","flash"],currentTime:0,duration:0,volume:0,paused:YES,loaded:NO,ended:NO,canPlay:NO,loadedTimeRanges:[],time:function(){var c=this.get("currentTime"),a=this.get("duration");
var b=this._addZeros(Math.floor(c/60))+":"+this._addZeros(Math.floor(c%60))+"/"+this._addZeros(Math.floor(a/60))+":"+this._addZeros(Math.floor(a%60));
return b}.property("currentTime","duration").cacheable(),render:function(c,a){var f,e,d,h,b=SC.guidFor(this);
if(a){for(f=0,d=this.degradeList.length;f<d;f++){switch(this.degradeList[f]){case"html5":if(SC.browser.safari){c.push('<audio src="'+this.get("value")+'"');
if(this.poster){c.push(' poster="'+this.poster+'"')}c.push("/>");this.loaded="html5";
return}break;case"quicktime":if(SC.browser.msie){c.push('<object id="qt_event_source" classid="clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598" codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"> </object> ')
}c.push('<object width="100%" height="100%"');if(SC.browser.msie){c.push('style="behavior:url(#qt_event_source);"')
}c.push('classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" id="qt_'+b+'" codebase="http://www.apple.com/qtactivex/qtplugin.cab"><param name="src" value="'+this.get("value")+'"/><param name="autoplay" value="false"/><param name="loop" value="false"/><param name="controller" value="false"/><param name="postdomevents" value="true"/><param name="kioskmode" value="true"/><param name="bgcolor" value="000000"/><param name="scale" value="aspect"/><embed width="100%" height="100%" name="qt_'+b+'" src="'+this.get("value")+'" autostart="false" EnableJavaScript="true" postdomevents="true" kioskmode="true" controller="false" bgcolor="000000"scale="aspect" pluginspage="www.apple.com/quicktime/download"></embed></object></object>');
this.loaded="quicktime";return;case"flash":var g="/slick/static/sproutcore/media/en/84b92450f3580bab34ccf482a581d49589bb4dd6/resources/videoCanvas.swf";
var k=this.get("value");if(k.indexOf("http:")==-1){k=location.protocol+"//"+location.host+k
}if(k.indexOf("?")!=-1){k=k.substring(0,k.indexOf("?"))}k=encodeURI(k);c.push('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="100%" height="100%" id="flash_'+b+'" align="middle"><param name="allowScriptAccess" value="sameDomain" /><param name="allowFullScreen" value="true" /><param name="movie" value="'+g+"&src="+k+"&scid="+b+'" /><param name="quality" value="autohigh" /><param name="scale" value="default" /><param name="wmode" value="transparent" /><param name="menu" value="false" /><param name="bgcolor" value="#000000" />	<embed src="'+g+"&src="+k+"&scid="+b+'" quality="autohigh" scale="default" wmode="transparent" bgcolor="#000000" width="100%" height="100%" name="flash_'+b+'" align="middle" allowScriptAccess="sameDomain" allowFullScreen="true" menu="false" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" /></object>');
this.loaded="flash";SC.AudioView.addToAudioFlashViews(this);return;default:c.push("audio is not supported by your browser");
return}}}},valueObserver:function(){this.set("currentTime",0);this.set("duration",0);
this.set("volume",0);this.set("paused",YES);this.set("loaded",NO);this.set("ended",NO);
this.set("canPlay",NO);this.set("loadedTimeRanges",[]);this.replaceLayer()}.observes("value"),didCreateLayer:function(){if(this.loaded==="html5"){this.addAudioDOMEvents()
}if(this.loaded==="quicktime"){this.addQTDOMEvents()}},didAppendToDocument:function(){if(this.loaded==="quicktime"){this.addQTDOMEvents()
}},addAudioDOMEvents:function(){var b,a=this;b=this.$("audio")[0];this.set("audioObject",b);
SC.Event.add(b,"durationchange",this,function(){SC.RunLoop.begin();console.log("durationchange");
a.set("duration",b.duration);SC.RunLoop.end()});SC.Event.add(b,"timeupdate",this,function(){SC.RunLoop.begin();
console.log("currenttime");a.set("currentTime",b.currentTime);SC.RunLoop.end()});
SC.Event.add(b,"loadstart",this,function(){SC.RunLoop.begin();console.log("volume");
a.set("volume",b.volume);SC.RunLoop.end()});SC.Event.add(b,"play",this,function(){SC.RunLoop.begin();
a.set("paused",NO);SC.RunLoop.end()});SC.Event.add(b,"pause",this,function(){SC.RunLoop.begin();
a.set("paused",YES);SC.RunLoop.end()});SC.Event.add(b,"loadedmetadata",this,function(){SC.RunLoop.begin();
SC.RunLoop.end()});SC.Event.add(b,"canplay",this,function(){SC.RunLoop.begin();console.log("canplay");
a.set("canPlay",YES);SC.RunLoop.end()});SC.Event.add(b,"ended",this,function(){SC.RunLoop.begin();
a.set("ended",YES);SC.RunLoop.end()});SC.Event.add(b,"progress",this,function(l){SC.RunLoop.begin();
this.loadedTimeRanges=[];for(var d=0,k=b.seekable.length;d<k;d++){this.loadedTimeRanges.push(b.seekable.start(d));
this.loadedTimeRanges.push(b.seekable.end(d))}try{var c=a.GetTrackCount(),g;for(g=1;
g<=c;g++){if("Closed Caption"===this.GetTrackType(g)){a._closedCaptionTrackIndex=g
}}}catch(h){}SC.RunLoop.end()})},addQTDOMEvents:function(){var f=this._getAudioObject(),b=this.$()[0],a=this,c;
try{f.GetVolume()}catch(d){console.log("loaded fail trying later");this.invokeLater(this.didAppendToDocument,100);
return}this.set("audioObject",f);a.set("duration",f.GetDuration()/f.GetTimeScale());
a.set("volume",f.GetVolume()/256);SC.Event.add(b,"qt_durationchange",this,function(){SC.RunLoop.begin();
console.log("qtdurationchange");a.set("duration",f.GetDuration()/f.GetTimeScale());
SC.RunLoop.end()});SC.Event.add(b,"qt_begin",this,function(){SC.RunLoop.begin();console.log("qtbegin");
a.set("volume",f.GetVolume()/256);SC.RunLoop.end()});SC.Event.add(b,"qt_loadedmetadata",this,function(){SC.RunLoop.begin();
console.log("qtloadedmetadata");a.set("duration",f.GetDuration()/f.GetTimeScale());
SC.RunLoop.end()});SC.Event.add(b,"qt_canplay",this,function(){SC.RunLoop.begin();
console.log("qtcanplay");a.set("canPlay",YES);SC.RunLoop.end()});SC.Event.add(b,"qt_ended",this,function(){console.log("qtended");
a.set("ended",YES)});SC.Event.add(b,"qt_pause",this,function(){SC.RunLoop.begin();
a.set("currentTime",f.GetTime()/f.GetTimeScale());a.set("paused",YES)});SC.Event.add(b,"qt_play",this,function(){SC.RunLoop.begin();
a.set("currentTime",f.GetTime()/f.GetTimeScale());a.set("paused",NO)})},_qtTimer:function(){if(this.loaded==="quicktime"&&!this.get("paused")){this.incrementProperty("currentTime");
this.invokeLater(this._qtTimer,1000)}}.observes("paused"),seek:function(){var d,a,b,c=this._getAudioObject();
if(this.loaded==="html5"){if(this.get("paused")){c.currentTime=this.get("currentTime")
}}if(this.loaded==="quicktime"){if(this.get("paused")){c.SetTime(this.get("currentTime")*c.GetTimeScale())
}}if(this.loaded==="flash"){if(this.get("paused")){c.setTime(this.get("currentTime"))
}}}.observes("currentTime"),startSeek:function(){if(!this.get("paused")){console.log("startseetk");
this.stop();this._wasPlaying=true}},endSeek:function(){if(this._wasPlaying){console.log("startseetk");
this.play();this._wasPlaying=false}},setVolume:function(){var a=this._getAudioObject();
if(this.loaded==="html5"){a.volume=this.get("volume")}if(this.loaded==="quicktime"){a.SetVolume(this.get("volume")*256)
}if(this.loaded==="flash"){a.setVolume(this.get("volume"))}}.observes("volume"),play:function(){var a=this._getAudioObject();
if(this.loaded==="html5"){a.play()}if(this.loaded==="quicktime"){a.Play()}if(this.loaded==="flash"){a.playVideo()
}this.set("paused",NO)},stop:function(){var a=this._getAudioObject();if(this.loaded==="html5"){a.pause()
}if(this.loaded==="quicktime"){a.Stop()}if(this.loaded==="flash"){a.pauseVideo()}this.set("paused",YES)
},playPause:function(){if(this.get("paused")){this.play()}else{this.stop()}},closedCaption:function(){if(this.loaded==="html5"){try{if(this.get("captionsEnabled")){if(this._closedCaptionTrackIndex){this.SetTrackEnabled(this._closedCaptionTrackIndex,true);
this.set("captionsEnabled",YES)}}else{this.SetTrackEnabled(this._closedCaptionTrackIndex,false);
this.set("captionsEnabled",NO)}}catch(b){}}return},_getAudioObject:function(){if(this.loaded==="html5"){return this.get("audioObject")
}if(this.loaded==="quicktime"){return document["qt_"+SC.guidFor(this)]}if(this.loaded==="flash"){var a="flash_"+SC.guidFor(this);
if(window.document[a]){return window.document[a]}if(navigator.appName.indexOf("Microsoft Internet")==-1){if(document.embeds&&document.embeds[a]){return document.embeds[a]
}}else{return document.getElementById(a)}}},_addZeros:function(a){if(a.toString().length<2){return"0"+a
}return a}});SC.AudioView.flashViews={};SC.AudioView.addToAudioFlashViews=function(a){SC.AudioView.flashViews[SC.guidFor(a)]=a
};SC.AudioView.updateProperty=function(b,d,c){var a=SC.AudioView.flashViews[b];if(a){SC.RunLoop.begin();
a.set(d,c);SC.RunLoop.end()}};SC.AudioView.logFlash=function(a){console.log("FLASHLOG: "+a)
};SC.AudioPlayerView=SC.View.extend({classNames:"sc-audio-view",childViews:"audioView mini".w(),value:null,degradeList:null,audioView:SC.AudioView.design({layout:{top:0,left:0,width:100,height:100},degradeListBinding:"*parentView.degradeList",valueBinding:"*parentView.value"}),mini:SC.MiniMediaControlsView.design({layout:{bottom:0,left:0,right:0,height:20},targetBinding:"*parentView.audioView"})});
sc_require("views/mediaSlider");SC.SimpleMediaControlsView=SC.View.extend({target:null,childViews:"playButton progressView".w(),classNames:"sc-media-controls",leftHandleInset:null,rightHandleInset:null,handleWidth:null,playObserver:function(){if(this.getPath("target.paused")){this.get("playButton").set("icon","play")
}else{this.get("playButton").set("icon","stop")}}.observes("*target.paused"),playButton:SC.ButtonView.design({title:"",titleMinWidth:35,icon:"play",noStyle:YES,layout:{top:0,left:0,width:20,height:20},action:"playPause",targetBinding:"*owner.target",renderStyle:"renderImage",theme:""}),progressView:SC.mediaSlider.design({layout:{top:0,left:25,right:0,height:20},value:0,minimum:0,step:0.1,valueBinding:"*owner.target.currentTime",maximumBinding:"*owner.target.duration",mediaViewBinding:"*owner.target"})});
sc_require("views/controls");sc_require("views/miniControls");SC.VideoView=SC.View.extend({classNames:"sc-video-view",displayProperties:["value","shouldAutoResize"],videoObject:null,degradeList:["html5","quicktime","flash"],currentTime:0,duration:0,volume:0,paused:YES,loaded:NO,ended:NO,canPlay:NO,videoWidth:0,videoHeight:0,captionsEnabled:NO,loadedTimeRanges:[],poster:null,time:function(){var c=this.get("currentTime"),a=this.get("duration");
var b=this._addZeros(Math.floor(c/60))+":"+this._addZeros(Math.floor(c%60))+"/"+this._addZeros(Math.floor(a/60))+":"+this._addZeros(Math.floor(a%60));
return b}.property("currentTime","duration").cacheable(),render:function(c,a){var f,e,d,h,b=SC.guidFor(this);
if(a){for(f=0,d=this.degradeList.length;f<d;f++){switch(this.degradeList[f]){case"html5":if(SC.browser.safari){c.push('<video src="'+this.get("value")+'"');
if(this.poster){c.push(' poster="'+this.poster+'"')}c.push("/>");this.loaded="html5";
return}break;case"quicktime":if(SC.browser.msie){c.push('<object id="qt_event_source" classid="clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598" codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"> </object> ')
}c.push('<object width="100%" height="100%"');if(SC.browser.msie){c.push('style="position: absolute; top:0px; left:0px; behavior:url(#qt_event_source);"')
}c.push('classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" id="qt_'+b+'" codebase="http://www.apple.com/qtactivex/qtplugin.cab"><param name="src" value="'+this.get("value")+'"/><param name="autoplay" value="false"/><param name="loop" value="false"/><param name="controller" value="false"/><param name="postdomevents" value="true"/><param name="kioskmode" value="true"/><param name="bgcolor" value="000000"/><param name="scale" value="aspect"/><embed width="100%" height="100%" name="qt_'+b+'" src="'+this.get("value")+'" autostart="false" EnableJavaScript="true" postdomevents="true" kioskmode="true" controller="false" bgcolor="000000"scale="aspect" pluginspage="www.apple.com/quicktime/download"></embed></object></object>');
this.loaded="quicktime";return;case"flash":var g="/slick/static/sproutcore/media/en/84b92450f3580bab34ccf482a581d49589bb4dd6/resources/videoCanvas.swf";
var k=this.get("value");if(k.indexOf("http:")==-1){k=location.protocol+"//"+location.host+k
}if(k.indexOf("?")!=-1){k=k.substring(0,k.indexOf("?"))}k=encodeURI(k);c.push('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="100%" height="100%" id="flash_'+b+'" align="middle"><param name="allowScriptAccess" value="sameDomain" /><param name="allowFullScreen" value="true" /><param name="movie" value="'+g+"&src="+k+"&scid="+b+'" /><param name="quality" value="autohigh" /><param name="scale" value="default" /><param name="wmode" value="transparent" /><param name="menu" value="false" /><param name="bgcolor" value="#000000" />	<embed src="'+g+"&src="+k+"&scid="+b+'" quality="autohigh" scale="default" wmode="transparent" bgcolor="#000000" width="100%" height="100%" name="flash_'+b+'" align="middle" allowScriptAccess="sameDomain" allowFullScreen="true" menu="false" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" /></object>');
this.loaded="flash";SC.VideoView.addToVideoFlashViews(this);return;default:c.push("video is not supported by your browser");
return}}}},valueObserver:function(){this.set("currentTime",0);this.set("duration",0);
this.set("volume",0);this.set("paused",YES);this.set("loaded",NO);this.set("ended",NO);
this.set("canPlay",NO);this.set("loadedTimeRanges",[]);this.replaceLayer()}.observes("value"),frameDidChange:function(){if(this.loaded==="html5"){var a=this.get("frame"),b=this.$("video");
b.attr("width",a.width);b.attr("height",a.height)}}.observes("frame"),didCreateLayer:function(){if(this.loaded==="html5"){this.addVideoDOMEvents();
this.frameDidChange()}if(this.loaded==="quicktime"){this.addQTDOMEvents()}},didAppendToDocument:function(){if(this.loaded==="quicktime"){this.addQTDOMEvents()
}},addVideoDOMEvents:function(){var b,a=this;b=this.$("video")[0];this.set("videoObject",b);
SC.Event.add(b,"durationchange",this,function(){SC.RunLoop.begin();a.set("duration",b.duration);
SC.RunLoop.end()});SC.Event.add(b,"timeupdate",this,function(){SC.RunLoop.begin();
a.set("currentTime",b.currentTime);SC.RunLoop.end()});SC.Event.add(b,"loadstart",this,function(){SC.RunLoop.begin();
this.updateVideoElementLoadedTimeRanges(b);a.set("volume",b.volume);SC.RunLoop.end()
});SC.Event.add(b,"play",this,function(){SC.RunLoop.begin();a.set("paused",NO);SC.RunLoop.end()
});SC.Event.add(b,"pause",this,function(){SC.RunLoop.begin();a.set("paused",YES);
SC.RunLoop.end()});SC.Event.add(b,"loadedmetadata",this,function(){SC.RunLoop.begin();
a.set("videoWidth",b.videoWidth);a.set("videoHeight",b.videoHeight);SC.RunLoop.end()
});SC.Event.add(b,"canplay",this,function(){SC.RunLoop.begin();this.updateVideoElementLoadedTimeRanges(b);
a.set("canPlay",YES);SC.RunLoop.end()});SC.Event.add(b,"ended",this,function(){SC.RunLoop.begin();
a.set("ended",YES);SC.RunLoop.end()});SC.Event.add(b,"progress",this,function(h){SC.RunLoop.begin();
this.updateVideoElementLoadedTimeRanges(b);try{var c=a.GetTrackCount(),d;for(d=1;
d<=c;d++){if("Closed Caption"===this.GetTrackType(d)){a._closedCaptionTrackIndex=d
}}}catch(g){}SC.RunLoop.end()})},updateVideoElementLoadedTimeRanges:function(b){if(!b){b=this.$("video")[0]
}if(!this.loadedTimeRanges){this.loadedTimeRanges=[]}else{this.loadedTimeRanges.length=0
}for(var a=0,c=b.buffered.length;a<c;a++){this.loadedTimeRanges.push(b.buffered.start(a));
this.loadedTimeRanges.push(b.buffered.end(a))}this.notifyPropertyChange("loadedTimeRanges")
},addQTDOMEvents:function(){var a=this._getVideoObject(),d=this.$()[0],b=this,c;try{a.GetVolume()
}catch(f){console.log("loaded fail trying later");this.invokeLater(this.didAppendToDocument,100);
return}this.set("videoObject",a);this._setDurationFromQTVideoObject();this.set("volume",a.GetVolume()/256);
this._setDimensionsFromQTVideoObject();SC.Event.add(d,"qt_durationchange",this,function(){SC.RunLoop.begin();
this._setDurationFromQTVideoObject();SC.RunLoop.end()});SC.Event.add(d,"qt_begin",this,function(){SC.RunLoop.begin();
this.updateQTVideoObjectLoadedTimeRanges(a);b.set("volume",a.GetVolume()/256);SC.RunLoop.end()
});SC.Event.add(d,"qt_loadedmetadata",this,function(){SC.RunLoop.begin();this._setDurationFromQTVideoObject();
this.updateQTVideoObjectLoadedTimeRanges(a);var e=a.GetRectangle().split(",");b.set("videoWidth",e[2]);
b.set("videoHeight",e[3]);SC.RunLoop.end()});SC.Event.add(d,"qt_canplay",this,function(){SC.RunLoop.begin();
this.updateQTVideoObjectLoadedTimeRanges(a);b.set("canPlay",YES);SC.RunLoop.end()
});SC.Event.add(d,"qt_ended",this,function(){b.set("ended",YES)});SC.Event.add(d,"qt_pause",this,function(){SC.RunLoop.begin();
b.set("currentTime",a.GetTime()/a.GetTimeScale());b.set("paused",YES);SC.RunLoop.end()
});SC.Event.add(d,"qt_play",this,function(){SC.RunLoop.begin();b.set("currentTime",a.GetTime()/a.GetTimeScale());
b.set("paused",NO);SC.RunLoop.end()});SC.Event.add(d,"qt_load",this,function(){SC.RunLoop.begin();
this.updateQTVideoObjectLoadedTimeRanges(a);SC.RunLoop.end()});SC.Event.add(d,"qt_progress",this,function(){SC.RunLoop.begin();
this.updateQTVideoObjectLoadedTimeRanges(a);SC.RunLoop.end()})},updateQTVideoObjectLoadedTimeRanges:function(a){a=a||this._getVideoObject();
if(!this.loadedTimeRanges){this.loadedTimeRanges=[]}else{this.loadedTimeRanges.length=0
}this.loadedTimeRanges.push(0);this.loadedTimeRanges.push(a.GetMaxTimeLoaded()/a.GetTimeScale());
this.notifyPropertyChange("loadedTimeRanges")},_setDurationFromQTVideoObject:function(a){if(!a){a=this._getVideoObject()
}try{this.set("duration",a.GetDuration()/a.GetTimeScale())}catch(b){this.invokeLater("_setDurationFromQTVideoObject",100)
}},_setDimensionsFromQTVideoObject:function(a){if(!a){a=this._getVideoObject()}try{var b=a.GetRectangle().split(",");
this.set("videoWidth",b[2]);this.set("videoHeight",b[3])}catch(c){this.invokeLater("_setDimensionsFromQTVideoObject",100)
}},_qtTimer:function(){if(this.loaded==="quicktime"&&!this.get("paused")){this.incrementProperty("currentTime");
this.invokeLater(this._qtTimer,1000)}}.observes("paused"),seek:function(){var d,b,c,a=this._getVideoObject();
if(this.loaded==="html5"){if(this.get("paused")){a.currentTime=this.get("currentTime")
}}if(this.loaded==="quicktime"){if(this.get("paused")){a.SetTime(this.get("currentTime")*a.GetTimeScale())
}}if(this.loaded==="flash"){if(this.get("paused")){a.setTime(this.get("currentTime"))
}}}.observes("currentTime"),startSeek:function(){if(!this.get("paused")){console.log("startseetk");
this.stop();this._wasPlaying=true}},endSeek:function(){if(this._wasPlaying){console.log("startseetk");
this.play();this._wasPlaying=false}},setVolume:function(){var a=this._getVideoObject();
if(this.loaded==="html5"){a.volume=this.get("volume")}if(this.loaded==="quicktime"){a.SetVolume(this.get("volume")*256)
}if(this.loaded==="flash"){a.setVolume(this.get("volume"))}}.observes("volume"),play:function(){try{var a=this._getVideoObject();
if(this.loaded==="html5"){a.play()}if(this.loaded==="quicktime"){a.Play()}if(this.loaded==="flash"){a.playVideo()
}this.set("paused",NO)}catch(b){console.warn("The video cannot play!!!! It might still be loading the plugging")
}},stop:function(){var a=this._getVideoObject();if(this.loaded==="html5"){a.pause()
}if(this.loaded==="quicktime"){a.Stop()}if(this.loaded==="flash"){a.pauseVideo()}this.set("paused",YES)
},playPause:function(){if(this.get("paused")){this.play()}else{this.stop()}},fullScreen:function(){var a=this._getVideoObject();
if(this.loaded==="html5"){this.$("video")[0].webkitEnterFullScreen()}if(this.loaded==="flash"){a.fullScreen()
}return},closedCaption:function(){if(this.loaded==="html5"){try{if(this.get("captionsEnabled")){if(this._closedCaptionTrackIndex){this.SetTrackEnabled(this._closedCaptionTrackIndex,true);
this.set("captionsEnabled",YES)}}else{this.SetTrackEnabled(this._closedCaptionTrackIndex,false);
this.set("captionsEnabled",NO)}}catch(b){}}return},_getVideoObject:function(){if(this.loaded==="html5"){return this.get("videoObject")
}if(this.loaded==="quicktime"){return document["qt_"+SC.guidFor(this)]}if(this.loaded==="flash"){var a="flash_"+SC.guidFor(this);
if(window.document[a]){return window.document[a]}if(navigator.appName.indexOf("Microsoft Internet")==-1){if(document.embeds&&document.embeds[a]){return document.embeds[a]
}}else{return document.getElementById(a)}}},_addZeros:function(a){if(a.toString().length<2){return"0"+a
}return a}});SC.VideoView.flashViews={};SC.VideoView.addToVideoFlashViews=function(a){SC.VideoView.flashViews[SC.guidFor(a)]=a
};SC.VideoView.updateProperty=function(b,d,c){var a=SC.VideoView.flashViews[b];if(a){SC.RunLoop.begin();
a.set(d,c);SC.RunLoop.end()}};SC.VideoView.logFlash=function(a){console.log("FLASHLOG: "+a)
};SC.VideoPlayerView=SC.View.extend({classNames:"sc-video-player-view",childViews:"videoView regular".w(),value:null,degradeList:null,videoView:SC.VideoView.design({layout:{top:0,bottom:20,right:0,left:0},degradeListBinding:"*parentView.degradeList",valueBinding:"*parentView.value"}),regular:SC.MediaControlsView.design({layout:{bottom:0,left:0,right:0,height:20},targetBinding:"*parentView.videoView"}),mini:SC.MiniMediaControlsView.design({layout:{bottom:0,left:0,right:0,height:20},targetBinding:"*parentView.videoView"})});
if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/media")
};