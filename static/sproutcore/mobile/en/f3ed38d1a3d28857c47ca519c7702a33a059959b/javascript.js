SC.RootResponder=SC.RootResponder.extend({platform:"mobile",});SC.ButtonView=SC.View.extend(SC.Control,SC.Button,{tagName:"a",classNames:["sc-button-view"],controlStyle:"square",href:"",action:null,target:null,triggerAction:function(a){if(!this.get("isEnabled")){return false
}this.set("isActive",YES);this._action(a);this.invokeLater("set",200,"isActive",NO);
return true},_TEMPORARY_CLASS_HASH:{},displayProperties:"href icon title value".w(),render:function(c,f){if(this.get("tagName")==="a"){var a=this.get("href");
if(!a||(a.length===0)){a="javascript:;"}c.attr("href",a)}var b=this._TEMPORARY_CLASS_HASH,d=this.get("icon");
b.def=this.get("isDefault");b.cancel=this.get("isCancel");b.icon=!!d;var e=this.get("theme");
if(e){b[e]=YES}c.attr("role","button").setClass(b);if(!this._isTouchActive){c=c.begin("span").addClass("sc-button-inner");
this.renderTitle(c,f);c=c.end()}},_isTouchActive:NO,touchStart:function(a){if(!this.get("isEnabled")){return YES
}this.set("isActive",YES);this._isTouchActive=YES;return YES},touchExited:function(a){if(this._isTouchActive){this.set("isActive",NO)
}return YES},touchEntered:function(a){this.set("isActive",this._isTouchActive);return YES
},touchEnd:function(b){if(this._isTouchActive){this.set("isActive",NO)}this._isTouchActive=false;
var a,c,d,e;if(b.changedTouches.length>0){e=b.changedTouches[0];c={x:e.pageX,y:e.pageY};
d=this.convertFrameToView(this.get("frame"),null);a=SC.pointInRect(c,d)}else{a=YES
}if(!b.cancel&&a&&this.get("isEnabled")){this._action(b)}return true},_action:function(a){console.log("action!");
var c=this.get("action");var d=this.get("target")||null;var e=this.get("pane");var b=e?e.get("rootResponder"):null;
if(b){b.sendAction(c,d,this,e)}}});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/mobile")
};