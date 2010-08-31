SC.Designer=SC.Object.extend({});SC.ObjectCoder=SC.Object.extend({className:"SC.Object",extendMethodName:"extend",encodeMethodName:"encode",attributes:null,transform:function(b,a){if(SC.typeOf(b)===SC.T_ARRAY){b=b.map(function(c){return this.transform(c,a)
},this);b="["+b+"]"}else{b=a.call(this,b)}return b},js:function(b,c,a){if(c===undefined){c=b;
b=undefined}c=this.transform(c,function(d){return(d===null)?"null":a?a.call(this,d):d
});if(b!==undefined&&(c!==undefined)){this.attributes[b]=c;return this}else{return c
}},string:function(a,b){return this.js(a,b,function(c){return'"'+c.replace(/"/g,'\\"')+'"'
})},number:function(a,b){return this.js(a,b,function(c){return c.toString()})},bool:function(a,b){return this.js(a,b,function(c){return c?"YES":"NO"
})},encode:function(a,c,b){if(b===undefined&&c instanceof Function){b=c;c=a;a=undefined
}return this.js(a,c,function(d){if(b){d=b.call(this,d,null,null)}switch(SC.typeOf(d)){case SC.T_STRING:d=this.string(d);
break;case SC.T_NUMBER:d=this.number(d);break;case SC.T_BOOL:d=this.bool(d);break;
case SC.T_ARRAY:d=this.array(d,b);break;case SC.T_HASH:d=this.hash(d,b);break;default:d=d?this.object(d):this.js(d)
}return d})},hash:function(a,c,b){if(b===undefined&&c instanceof Function){b=c;c=a;
a=undefined}return this.js(a,c,function(d){var e=[];for(var f in d){if(!d.hasOwnProperty(f)){continue
}e.push("%@: %@".fmt(this.encode(f),this.encode(d[f],b)))}return"{%@}".fmt(e.join(","))
})},array:function(a,c,b){if(b===undefined&&c instanceof Function){b=c;c=a;a=undefined
}c=c.map(function(d){return this.encode(d,b)},this);c="[%@]".fmt(c.join(","));return this.js(a,c)
},object:function(a,b){return this.js(a,b,function(c){return this.constructor.encode(c,this)
})},spaces:function(){var a=this.context?this.context.get("spaces"):"";a=a+"  ";return a
}.property().cacheable(),emit:function(){if(this.invalid){return undefined}var d=[],c=this.attributes,e;
var b=this.get("extendMethodName");var a=this.get("spaces");for(e in c){if(!c.hasOwnProperty(e)){continue
}d.push("%@: %@".fmt(e,c[e]))}if(d.length<=0){return"%@1%@2.%@3({})".fmt(a,this.className,b)
}else{d=d.join(",");return"%@2.%@3({%@4})".fmt(a,this.className,b,d)}},begin:function(c){var a=this.get("encodeMethodName");
if(SC.typeOf(c[a])!==SC.T_FUNCTION){throw SC.$error("Cannot encode %@ because it does not respond to %@()".fmt(c,a))
}this.set("className",SC._object_className(c.constructor));var b=c[a](this);this.invalid=b===NO;
return this},init:function(){arguments.callee.base.apply(this,arguments);this.set("attributes",{})
},destroy:function(){arguments.callee.base.apply(this,arguments);this.context=this.className=this.attributes=null
}});SC.ObjectCoder.encode=function(c,d){var b=this.create({context:d});var a=b.begin(c).emit();
b.destroy();return a};sc_require("coders/object");SC.DesignCoder=SC.ObjectCoder.extend({extendMethodName:"design",encodeMethodName:"encodeDesign"});
sc_require("coders/object");SC.LocalizationCoder=SC.ObjectCoder.extend({extendMethodName:"localization",encodeMethodName:"encodeLoc"});
SC.controllersController=SC.ArrayController.create({});SC.designController=SC.ObjectController.create({contentBinding:"SC.designsController.selection",contentBindingDefault:SC.Binding.single(),viewSelected:function(){var e=this.get("content"),d,b,a;
if(e){d=e.get("view");if(d.kindOf&&d.kindOf(SC.View)){a=SC.designsController.getPath("page.designController");
b=d.get("designer");if(a&&b){b.set("designIsEnabled",NO);a.makeRootDesigner(b)}}else{if(SC._Greenhouse){SC._Greenhouse.designController.set("content",d.get("designer"));
SC._Greenhouse.sendAction("floatInspector")}}}}});SC.designsController=SC.ArrayController.create(SC.CollectionViewDelegate,{setDesigns:function(c,b){var d=[];
for(var a in c){if(c.hasOwnProperty(a)){if(c[a]&&c[a].kindOf){if(c[a].kindOf(b.SC.Pane)){d.push(SC.Object.create({type:"pane",view:c.get(a),name:a}))
}else{if(c[a].kindOf(b.SC.View)){d.push(SC.Object.create({type:"view",view:c.get(a),name:a}))
}else{if(c[a].kindOf(b.SC.Page)){d.push(SC.Object.create({type:"page",view:c.get(a),name:a}))
}else{if(c[a].kindOf(b.SC.Controller)){d.push(SC.Object.create({type:"controller",name:a,view:c.get(a)}))
}else{if(c[a].kindOf(b.SC.Object)&&!c[a].isPageDesignController){d.push(SC.Object.create({type:"controller",name:a,view:c.get(a)}))
}}}}}}}}this.set("content",d);this.set("page",c)},collectionViewComputeDragOperations:function(a,b,c){return SC.DRAG_ANY
},collectionViewValidateDragOperation:function(b,d,f,c,a){var e=d.dataForType("SC.Object");
if(e){return SC.DRAG_ANY}else{return(a&SC.DROP_ON)?SC.DRAG_NONE:f}},collectionViewPerformDragOperation:function(view,drag,op,proposedInsertionIndex,proposedDropOperation){var data=drag.dataForType("SC.Object"),page=this.get("page"),scClass,that=this;
if(data){var actionObj=SC.Object.create({data:data,addItemToPage:function(name){scClass=eval(this.getPath("data.scClass"));
var type=SC.kindOf(scClass,SC.View)?"view":"controller";page[name]=scClass.design().create({page:page});
that.pushObject(SC.Object.create({type:type,view:page.get(name),name:name}))}});SC._Greenhouse.sendAction("newPageElement",actionObj);
return SC.DRAG_ANY}return SC.DRAG_NONE}});SC.PageDesignController=SC.Object.extend({isPageDesignController:YES,selection:null,select:function(b,c){var a=this.get("selection");
if(!a||!c||!a.contains(b)){a=(!c||!a)?SC.CoreSet.create():a.copy();a.add(b);this.set("selection",a.freeze());
SC.designPage.getPath("designMainPane.container").becomeFirstResponder()}return this
},deselect:function(b){var a=this.get("selection");if(a&&a.contains(b)){a=a.copy();
a.remove(b);this.set("selection",a.freeze())}return this},selectionDidChange:function(){var b=this.get("selection"),a=this._selection;
this._selection=b;if(b){b.setEach("designIsSelected",YES)}if(a){a.forEach(function(c){if(!b||!b.contains(c)){c.set("designIsSelected",NO)
}},this)}}.observes("selection"),repositionSelection:function(a,c){var b=this.get("selection");
if(b){b.invoke("mouseReposition",a,c)}},prepareReposition:function(b){var a=this.get("selection");
if(a){a.invoke("prepareReposition",b)}},deleteSelection:function(){var b=this.get("selection"),c,a;
if(b&&b.get("length")>0){c=b.firstObject();this.deselect(c);c=c.get("view");a=c.get("parentView");
c.removeFromParent();if(parent.displayDidChange){parent.displayDidChange()}c=null
}},designers:null,registerDesigner:function(a){this.get("designers").add(a)},rootDesigner:null,makeRootDesigner:function(a){var b=this.get("rootDesigner");
if(b){b.set("isRootDesigner",NO)}this.deselect(a);a.set("isRootDesigner",YES);a.set("prevRootDesigner",b);
this.set("rootDesigner",a)},init:function(){this.designers=SC.Set.create();this.sel=[];
arguments.callee.base.apply(this,arguments)}});SC.pageFilesController=SC.ArrayController.create({});
SC.pageFilesController.mixin({pages:[],register:function(a){SC.pageFilesController.pages.pushObject(a)
}});SC.CSSStyle=SC.Object.extend({style:"",rule:null});sc_require("css/css_style");
SC.CSSRule=SC.Object.extend({});sc_require("css/css_rule");SC.CSSStyleSheet=SC.Object.extend({init:function(){arguments.callee.base.apply(this,arguments);
var c=this.styleSheet;if(!c){c=this.styleSheet=document.createElement("style");c.type="text/css";
var b=document.getElementsByTagName("head")[0];if(!b){b=document.documentElement}b.appendChild(c)
}var a=this.constructor.styleSheets;if(!a){a=this.constructor.styleSheets={}}a[SC.guidFor(c)];
var d=c.rules||SC.EMPTY_ARRAY;var e=SC.SparseArray.create(d.length);e.delegate=this;
this.rules=e;return this},isEnabled:function(a,b){if(b!==undefined){this.styleSheet.disabled=!b
}return !this.styleSheet.disabled}.property(),isEnabledBindingDefault:SC.Binding.bool(),styleSheet:null,href:function(a,b){if(b!==undefined){this.styleSheet.href=b
}else{return this.styleSheet.href}}.property(),title:function(a,b){if(b!==undefined){this.styleSheet.title=b
}else{return this.styleSheet.title}}.property(),rules:null,insertRule:function(a){var b=this.get("rules")
},deleteRule:function(a){var b=this.get("rules");b.removeObject(a)},sparseArrayDidRequestIndex:function(d,a){var c=this.styleSheet.rules||SC.EMPTY_ARRAY;
var b=c[a];if(b){d.provideContentAtIndex(a,SC.CSSRule.create({rule:b,styleSheet:this}))
}},sparseArrayDidReplace:function(e,a,d,c){var b=c.collect(function(f){return f.rule
});this.styleSheet.rules.replace(a,d,b)}});SC.mixin(SC.CSSStyleSheet,{find:function(f){var i=f?f.indexOf("/")>=0:NO;
if(!f){return null}if(!i&&f.indexOf(".css")==-1){f=f+".css"}var c=this.styleSheets;
if(!c){c=this.styleSheets={}}var h=document.styleSheets;var j,d,a,e;for(var g=0,b=h.length;
g<b;++g){j=h[g];if(i){if(j.href===f){e=SC.guidFor(j);a=c[e];if(!a){a=c[e]=this.create({styleSheet:j})
}return a}}else{if(d=j.href){d=d.split("/");d=d[d.length-1];if(d==f){e=SC.guidFor(j);
a=c[e];if(!a){a=c[e]=this.create({styleSheet:j})}return a}}}}return null},styleSheets:null});
SC.RootDesignerHighLightView=SC.View.extend({designer:null,classNames:"high-light",render:function(a,c){var b=this.get("targetFrame");
a.begin("div").classNames(["top","cover"]).addStyle({top:0,height:b.y,left:0,right:0}).end().begin("div").classNames(["bottom","cover"]).addStyle({top:b.y+b.height,bottom:0,left:0,right:0}).end().begin("div").classNames(["left","cover"]).addStyle({left:0,width:b.x,top:b.y,height:b.height}).end().begin("div").classNames(["right","cover"]).addStyle({left:b.x+b.width,right:0,top:b.y,height:b.height}).end()
}});sc_require("views/high_light");SC.ViewDesigner=SC.Object.extend({view:null,viewClass:null,designIsSelected:NO,designIsEnabled:YES,page:function(){var a=this.get("view");
return(a)?a.get("page"):null}.property("view").cacheable(),designController:function(){var a=this.get("page");
return(a)?a.get("designController"):null}.property("page").cacheable(),encodeChildViews:YES,concatenatedProperties:["designProperties","localizedProperties","excludeProperties"],canResizeHorizontal:YES,canResizeVertical:YES,canReposition:YES,minWidth:10,minHeight:10,maxWidth:100000000,maxHeight:100000000,layout:function(b,c){var a=this.get("view");
if(!a){return null}if(c!==undefined){a.set("layout",c)}return a.get("layout")}.property("view").cacheable(),anchorLocation:function(j,i){var d=this.get("layout"),f=SC.ViewDesigner,b,k,a,g,l,c,e;
if(!d){return null}if(i!==undefined){e={};g=this.get("view");a=g.get("frame");l=g.get("parentView");
c=l?l.get("frame"):null;if(!c){c=SC.RootResponder.responder.computeWindowSize()}if(i&f.ANCHOR_LEFT){e.left=a.x;
e.width=a.width}else{if(i&f.ANCHOR_RIGHT){e.right=(c.width-SC.maxX(a));e.width=a.width
}else{if(i&f.ANCHOR_CENTERX){e.centerX=Math.round(SC.midX(a)-(c.width/2));e.width=a.width
}else{if(i&f.ANCHOR_WIDTH){e.left=a.x;e.right=(c.width-SC.maxX(a))}}}}if(i&f.ANCHOR_TOP){e.top=a.y;
e.height=a.height}else{if(i&f.ANCHOR_BOTTOM){e.bottom=(c.height-SC.maxY(a));e.height=a.height
}else{if(i&f.ANCHOR_CENTERY){e.centerY=Math.round(SC.midY(a)-(c.height/2));e.height=a.height
}else{if(i&f.ANCHOR_HEIGHT){e.top=a.y;e.bottom=(c.height-SC.maxY(a))}}}}this.set("layout",e);
d=e}if(!SC.none(d.left)){b=SC.none(d.width)?f.ANCHOR_WIDTH:f.ANCHOR_LEFT}else{if(!SC.none(d.right)){b=f.ANCHOR_RIGHT
}else{if(!SC.none(d.centerX)){b=f.ANCHOR_CENTERX}else{b=0}}}if(!SC.none(d.top)){k=SC.none(d.height)?f.ANCHOR_HEIGHT:f.ANCHOR_TOP
}else{if(!SC.none(d.bottom)){k=f.ANCHOR_BOTTOM}else{if(!SC.none(d.centerY)){k=f.ANCHOR_CENTERY
}else{k=0}}}return k|b}.property("layout").cacheable(),_layoutProperty:function(a,c){var b=this.get("layout");
if(!b){return null}if(!SC.none(b)&&(c!==undefined)){b=SC.copy(b);b[a]=c;this.set("layout",b)
}return b[a]},layoutTop:function(a,b){return this._layoutProperty("top",b)}.property("layout").cacheable(),layoutBottom:function(a,b){return this._layoutProperty("bottom",b)
}.property("layout").cacheable(),layoutCenterY:function(a,b){return this._layoutProperty("centerY",b)
}.property("layout").cacheable(),layoutHeight:function(a,b){return this._layoutProperty("height",b)
}.property("layout").cacheable(),layoutTop:function(a,b){return this._layoutProperty("top",b)
}.property("layout").cacheable(),layoutLeft:function(a,b){return this._layoutProperty("left",b)
}.property("layout").cacheable(),layoutRight:function(a,b){return this._layoutProperty("right",b)
}.property("layout").cacheable(),layoutCenterX:function(a,b){return this._layoutProperty("centerX",b)
}.property("layout").cacheable(),layoutWidth:function(a,b){return this._layoutProperty("width",b)
}.property("layout").cacheable(),encodeSimpleProperties:function(c,b){var a=this.get("view"),d=this.get("viewClass").prototype;
c.forEach(function(f){var e=a[f];if(e!==undefined&&(e!==d[f])){b.encode(f,e)}},this)
},designProperties:"layout isVisible isEnabled styleClass".w(),excludeProperties:"layout childViews".w(),editableProperties:function(){var b=this.get("designAttrs"),a=this.get("view"),c=[],f=this.get("designProperties"),e=this.get("excludeProperties");
if(b){b=b[0]}for(var d in b){if(b.hasOwnProperty(d)&&e.indexOf(d)<0){if(!SC.none(a[d])){c.pushObject(SC.Object.create({value:a[d],key:d,view:a}))
}}}f.forEach(function(g){if(e.indexOf(g)<0){c.pushObject(SC.Object.create({value:a[g],key:g,view:a}))
}});return c}.property("designProperties").cacheable(),encodeDesign:function(a){a.set("className",SC._object_className(this.get("viewClass")));
this.encodeDesignProperties(a);this.encodeChildViewsDesign(a);return YES},encodeDesignProperties:function(a){return this.encodeSimpleProperties(this.get("designProperties"),a)
},encodeDesignAttributeProperties:function(b){var d=this.get("designProperties"),c=this.get("designAttrs"),e=[];
if(c){c=c[0]}for(var a in c){if(c.hasOwnProperty(a)&&d.indexOf(a)<0&&a!=="childViews"){e.push(a)
}}return this.encodeSimpleProperties(e,b)},encodeChildViewsDesign:function(b){if(!this.get("encodeChildViews")){return
}var a=this.view,c=a.get("childViews");if(c.length>0){b.object("childViews",c)}},localizedProperties:[],encodeLoc:function(a){a.set("className",SC._object_className(this.get("viewClass")));
this.encodeLocalizedProperties(a);this.encodeChildViewsLoc(a);return YES},encodeLocalizedProperties:function(a){return this.encodeSimpleProperties(this.get("localizedProperties"),a)
},encodeChildViewsLoc:function(b){if(!this.get("encodeChildViews")){return}var a=this.view,c=a.childViews;
if(c.length>0){b.object("childViews",c)}},awakeDesign:function(){},addView:function(a){this.view.appendChild(a)
},viewDidChange:function(){var b=this.get("view"),a=this._designer_view;if(b===a){return
}var c=this.viewPropertyDidChange;if(a){a.removeObserver("*",this,c)}this._designer_view=b;
if(b){b.addObserver("*",this,c)}this.viewPropertyDidChange(b,"*",null,null)}.observes("view"),viewPropertyDidChange:function(a,b){if(b==="*"){this.allPropertiesDidChange()
}else{if(this[b]===undefined){this.notifyPropertyChange(b)}}if((b==="*")||(b==="layout")){if(this.get("designIsSelected")&&this._handles){this._handles.set("layout",SC.clone(a.get("layout")))
}}},unknownProperty:function(a,b){if(b!==undefined){this.view.set(a,b);return b}else{return this.view.get(a)
}},init:function(){this.awakeDesign();arguments.callee.base.apply(this,arguments);
this.viewDidChange();var a=this.get("designController");if(a){a.registerDesigner(this)
}},destroy:function(){arguments.callee.base.apply(this,arguments);this.set("view",null)
},designIsSelectedDidChange:function(){if(SC.kindOf(this.view,SC.Pane)){return this
}var a=this.get("designIsSelected");var b=this._handles;if(a){if(!b){b=this._handles=SC.SelectionHandlesView.create({designer:this})
}var c=this.view.get("parentView");if(!b.get("parentView")!==c){c.appendChild(b)}b.set("layout",this.view.get("layout"))
}else{if(b){if(b.get("parentView")){b.removeFromParent()}}}}.observes("designIsSelected"),tryToPerform:function(c,d,b){var e=this.view?this.view.get("page"):null;
var a=e?e.get("needsDesigner")||e.get("isDesignMode"):NO;if(a){return arguments.callee.base.apply(this,arguments)
}else{return SC.Object.prototype.tryToPerform.apply(this.view,arguments)}},didCreateLayer:function(){},didUpdateLayer:function(){},willDestroyLayer:function(){},parentDesignerIsRoot:function(){var b=this.get("designController"),a=this.get("view");
return b.get("rootDesigner")===a.getPath("parentView.designer")}.property(),acceptRootDesigner:NO,isRootDesigner:NO,isRootDesignerDidChange:function(){var a=this.get("isRootDesigner"),c=this._highLight;
if(a&&this.get("designIsEnabled")){if(!c){c=this._highLight=SC.RootDesignerHighLightView.create({designer:this})
}var b=this.view.get("parentView");c.set("targetFrame",this.view.get("frame"));if(!c.get("parentView")!==b){b.insertBefore(c,this.view)
}}else{if(c){if(c.get("parentView")){c.removeFromParent()}}}}.observes("isRootDesigner"),resignRootDesigner:function(){var b=this.get("prevRootDesigner");
if(this.get("isRootDesigner")&&b){var a=this.get("designController");if(a){a.makeRootDesigner(b)
}}},shouldReleaseRootDesigner:function(a){var b=this.view.get("frame");if(this.get("isRootDesigner")&&!SC.pointInRect({x:a.pageX,y:a.pageY},b)){this.resignRootDesigner();
return YES}return NO},HANDLE_MARGIN:10,mouseDown:function(i){this.shouldReleaseRootDesigner(i);
if(!this.get("designIsEnabled")||!this.get("parentDesignerIsRoot")){return NO}var g=this.get("view"),b,f,j,e,a,k,d,h,c;
if(!g){return NO}this._mouseDownInfo=b={layout:SC.copy(g.get("layout")),selected:this.get("designIsSelected"),dragged:NO,metaKey:i.metaKey||i.shiftKey,source:this,x:i.pageX,y:i.pageY};
b.hanchor=b.vanchor=b.reposition=NO;e=this.get("canReposition");j=f=NO;if(b.selected){a=g.get("frame");
k=g.get("parentView");if(a&&k){a=k.convertFrameToView(a,null)}d=this.HANDLE_MARGIN;
if(a){if(Math.abs(b.x-SC.minX(a))<=d){j="left"}else{if(Math.abs(b.x-SC.maxX(a))<=d){j="right"
}}if(Math.abs(b.y-SC.minY(a))<=d){f="top"}else{if(Math.abs(b.y-SC.maxY(a))<=d){f="bottom"
}}}h=this.get("canResizeHorizontal");c=this.get("canResizeVertical");if(h&&c){if(!f||!j){f=j=NO
}}else{if(h){f=NO;if(Math.abs(b.y-SC.midY(a))>d){j=NO}}else{if(c){j=NO;if(Math.abs(b.x-SC.midX(a))>d){f=NO
}}else{j=f=NO}}}}if(j){b.hanchor=j}if(f){b.vanchor=f}if(!j&&!f&&e){b.reposition=YES
}if(!b.selected){this.get("designController").select(this,b.metaKey)}if(b.reposition){this.get("designController").prepareReposition(b)
}return YES},prepareReposition:function(c){var a=this.get("view"),b=a?SC.copy(a.get("layout")):{};
c[SC.keyFor("layout",SC.guidFor(this))]=b;return this},mouseDragged:function(d){if(!this.get("designIsEnabled")||!this.get("parentDesignerIsRoot")){return NO
}var g=this._mouseDownInfo,c=this.get("view"),e,b,a;if(d.altKey&&SC._Greenhouse){b=d.pageX;
a=d.pageY;var f=SC.DrawingView.create({layout:{left:0,top:0,right:0,bottom:0},startPoint:{x:b,y:a},endPoint:{x:b,y:a},_pointsDidChange:function(){var k=this.get("startPoint"),h=this.get("endPoint"),l,j,i;
l=Math.abs(k.x-h.x);j=Math.abs(k.y-h.y);if(l>5||j>5){i={};i.shape=SC.LINE;i.start={x:k.x,y:k.y};
i.end={x:h.x,y:h.y};i.style={color:"green",width:3};this.setIfChanged("shapes",[i])
}}.observes("startPoint","endPoint")});SC.designPage.get("designMainPane").appendChild(f);
SC.Drag.start({event:d,source:this,dragLink:f,dragView:SC.View.create({layout:{left:0,top:0,width:0,height:0}}),ghost:NO,slideBack:YES,dataSource:this,anchorView:c})
}else{if(c&&(g.hanchor||g.vanchor)){e=SC.copy(this.get("layout"));if(g.hanchor){this._mouseResize(d,g,this.HKEYS,e)
}if(g.vanchor){this._mouseResize(d,g,this.VKEYS,e)}this.set("layout",e)}else{if(g.reposition){this.get("designController").repositionSelection(d,g)
}}}},dragDataTypes:["SC.Binding"],dragDataForType:function(b,a){return a==="SC.Binding"?this.get("view"):null
},mouseUp:function(d){if(!this.get("designIsEnabled")||!this.get("parentDesignerIsRoot")){return NO
}var f=this._mouseDownInfo;if(f.selected&&!f.dragged){var c=this.get("view"),g=c?c.get("frame"):null,e=c.get("parentView");
if(g&&e){g=e.convertFrameToView(g,null)}if(!g||SC.pointInRect({x:d.pageX,y:d.pageY},g)){var b=this.get("designController");
if(f.metaKey){b.deselect(this)}else{b.select(this,NO)}}}if(SC._Greenhouse&&d.clickCount===2){var a=this.get("designController");
if(this.acceptRootDesigner&&a){a.makeRootDesigner(this)}else{SC._Greenhouse.sendAction("openInspector",c)
}}this._mouseDownInfo=null;return YES},mouseReposition:function(a,c){var b=SC.copy(this.get("layout"));
this._mouseReposition(a,c,this.HKEYS,b);this._mouseReposition(a,c,this.VKEYS,b);this.set("layout",b);
return this},HKEYS:{evtPoint:"pageX",point:"x",min:"minWidth",max:"maxWidth",head:"left",tail:"right",center:"centerX",size:"width",anchor:"hanchor"},VKEYS:{evtPoint:"pageY",point:"y",min:"minHeight",max:"maxHeight",head:"top",tail:"bottom",center:"centerY",size:"height",anchor:"vanchor"},_mouseResize:function(j,o,i,r){var q=j[i.evtPoint]-o[i.point],p=o.layout,g=this.get("view"),l=this.get(i.min),m=this.get(i.max),b=i.head,h=i.tail,n=i.center,k=i.size,a=!SC.none(p[i.head]),c=!SC.none(p[i.tail]),e=!SC.none(p[i.center]),d=!SC.none(p[i.size]),f;
if(o[i.anchor]===b){if(a){if(d){f=p[k];r[k]=Math.min(m,Math.max(l,Math.floor(p[k]-q)));
l=(p[b]+f)-l;m=(p[b]+f)-m;r[b]=Math.max(m,Math.min(l,Math.floor(p[b]+q)))}else{r[b]=Math.floor(p[b]+q)
}}else{if(c||e){if(e){q*=2}r[k]=Math.max(l,Math.min(m,Math.floor((p[k]||0)-q)))}else{r[b]=Math.floor((p[b]||0)+q)
}}}else{if(o[i.anchor]===h){if(c){if(d){f=p[k];r[k]=Math.min(m,Math.max(l,Math.floor(p[k]+q)));
l=(p[h]+f)-l;m=(p[h]+f)-m;r[h]=Math.max(m,Math.min(l,Math.floor(p[h]-q)))}else{r[h]=Math.floor(p[h]-q)
}}else{if(e){q*=2}r[k]=Math.max(l,Math.min(m,Math.floor((p[k]||0)+q)))}}}return this
},_mouseReposition:function(o,c,p,j){var n=o[p.evtPoint]-c[p.point],h=c[SC.keyFor("layout",SC.guidFor(this))],k=this.get("view"),m=p.head,f=p.tail,e=p.center,g=p.size,d=!SC.none(h[m]),b=!SC.none(h[f]),a=!SC.none(h[e]),i=!SC.none(h[g]),l;
if(d&&b&&!i){return NO}if(d){j[m]=h[m]+n}else{if(b){j[f]=h[f]-n}else{if(a){j[e]=h[e]+n
}else{j[m]=(h[m]||0)+n}}}return YES},dragSourceOperationMaskFor:function(a,b){return SC.DRAG_LINK
},dragDidBegin:function(a,b){},dragDidMove:function(b,h){var f=b.dragLink;var e,a,d,g,c;
if(f){d=f.get("parentView");g=f.get("frame");c=d?d.convertFrameToView(g,null):g;if(c){e=h.x-c.x;
a=h.y-c.y;f.set("endPoint",{x:e,y:a})}}},dragDidEnd:function(a,c,d){var b=a.dragLink;
if(b){b.destroy()}}});if(!SC.View.Designer){SC.View.Designer=SC.ViewDesigner}SC.ViewDesigner.mixin({ANCHOR_LEFT:1,ANCHOR_RIGHT:2,ANCHOR_CENTERX:4,ANCHOR_WIDTH:16,ANCHOR_TOP:256,ANCHOR_BOTTOM:512,ANCHOR_CENTERY:1024,ANCHOR_HEIGHT:4096,didLoadDesign:function(b,a,c){b.isDesign=YES;
b.designAttrs=c;b.sourceView=a},didLoadLocalization:function(a,b){},didCreateView:function(b,d){var e=b.get("page"),c=b.constructor;
if(c.isDesign&&e&&e.get("needsDesigner")){var g=c,a=c;while(g&&!g.Designer){g=g.superclass
}var f=(g)?g.Designer:SC.View.Designer;while(c&&c.isDesign){c=c.superclass}if(!c){c=SC.View
}b.designer=f.create({view:b,viewClass:c,designAttrs:a.designAttrs,sourceView:a.sourceView})
}}});SC.View.prototype._orig_respondsTo=SC.View.prototype.respondsTo;SC.View.prototype._orig_tryToPerform=SC.View.prototype.tryToPerform;
SC.View.prototype._orig_createLayer=SC.View.prototype.createLayer;SC.View.prototype._orig_updateLayer=SC.View.prototype.updateLayer;
SC.View.prototype._orig_destroyLayer=SC.View.prototype.destroyLayer;SC.View.prototype.respondsTo=function(a){if(this.designer){var b=!!(SC.typeOf(this[a])===SC.T_FUNCTION);
b=b||this.designer.respondsTo(a);return b}else{return this._orig_respondsTo(a)}};
SC.View.prototype.tryToPerform=function(b,c,a){if(this.designer){return this.designer.tryToPerform(b,c,a)
}else{return this._orig_tryToPerform(b,c,a)}};SC.View.prototype.createLayer=function(){var a=this._orig_createLayer.apply(this,arguments);
if(this.designer){this.designer.didCreateLayer()}return a};SC.View.prototype.updateLayer=function(){var a=this._orig_updateLayer.apply(this,arguments);
if(this.designer){this.designer.didUpdateLayer()}return a};SC.View.prototype.destroyLayer=function(){if(this.designer){this.designer.willDestroyLayer()
}return this._orig_destroyLayer.apply(this,arguments)};SC.Button.Designer={designProperties:"title".w()};
sc_require("designers/view_designer");sc_require("mixins/button");SC.ButtonView.Designer=SC.ViewDesigner.extend(SC.Button.Designer,{encodeChildViews:NO,designProperties:"theme buttonBehavior href isDefault".w(),canResizeVertical:NO,canResizeHorizontal:YES});
sc_require("designers/view_designer");SC.LabelView.Designer=SC.ViewDesigner.extend({encodeChildViews:NO,designProperties:"value escapeHTML".w()});
SC.ObjectDesigner=SC.Object.extend({object:null,objectClass:null,designIsSelected:NO,designIsEnabled:YES,page:function(){var a=this.get("object");
return(a)?a.get("page"):null}.property("object").cacheable(),designController:function(){var a=this.get("page");
return(a)?a.get("designController"):null}.property("page").cacheable(),concatenatedProperties:["designProperties","localizedProperties","excludeProperties"],encodeSimpleProperties:function(c,b){var a=this.get("object"),d=this.get("objectClass").prototype;
c.forEach(function(f){var e=a[f];if(e!==undefined&&(e!==d[f])){b.encode(f,e)}},this)
},designProperties:[],excludeProperties:[],editableProperties:function(){var a=this.get("designAttrs"),f=this.get("object"),b=[],e=this.get("designProperties"),d=this.get("excludeProperties");
if(a){a=a[0]}for(var c in a){if(a.hasOwnProperty(c)&&d.indexOf(c)<0){if(!SC.none(f[c])){b.pushObject(SC.Object.create({value:f[c],key:c,view:f}))
}}}e.forEach(function(g){if(d.indexOf(g)<0){b.pushObject(SC.Object.create({value:f[g],key:g,view:f}))
}});return b}.property("designProperties").cacheable(),encodeDesign:function(a){a.set("className",SC._object_className(this.get("objectClass")));
this.encodeDesignProperties(a);return YES},encodeDesignProperties:function(a){return this.encodeSimpleProperties(this.get("designProperties"),a)
},localizedProperties:[],encodeLoc:function(a){a.set("className",SC._object_className(this.get("objectClass")));
this.encodeLocalizedProperties(a);return YES},encodeLocalizedProperties:function(a){return this.encodeSimpleProperties(this.get("localizedProperties"),a)
},awakeDesign:function(){},unknownProperty:function(a,b){if(b!==undefined){this.object.set(a,b);
return b}else{return this.object.get(a)}},init:function(){this.awakeDesign();arguments.callee.base.apply(this,arguments);
var a=this.get("designController");if(a){a.registerDesigner(this)}},destroy:function(){arguments.callee.base.apply(this,arguments);
this.set("object",null)},tryToPerform:function(c,d,b){var e=this.object?this.object.get("page"):null;
var a=e?e.get("needsDesigner")||e.get("isDesignMode"):NO;if(a){return arguments.callee.base.apply(this,arguments)
}else{return SC.Object.prototype.tryToPerform.apply(this.object,arguments)}}});if(!SC.Object.Designer){SC.Object.Designer=SC.ObjectDesigner
}SC.ObjectDesigner.mixin({didLoadDesign:function(b,c,a){b.isDesign=YES;b.designAttrs=a;
b.sourceObject=c},didLoadLocalization:function(b,a){},didCreateObject:function(d,c){var e=d.get("page"),b=d.constructor;
if(b.isDesign&&e&&e.get("needsDesigner")){var g=b,a=b;while(g&&!g.Designer){g=g.superclass
}var f=(g)?g.Designer:SC.Object.Designer;while(b&&b.isDesign){b=b.superclass}if(!b){b=SC.Object
}d.designer=f.create({object:d,objectClass:b,designAttrs:a.designAttrs,sourceObject:a.sourceObject})
}}});sc_require("designers/view_designer");SC.TabView.Designer=SC.ViewDesigner.extend({encodeChildViews:NO,acceptRootDesigner:YES,designProperties:"nowShowing items itemTitleKey itemValueKey itemIsEnabledKey itemIconKey itemWidthKey tabLocation userDefaultKey".w()});
sc_require("designers/view_designer");SC.TextFieldView.Designer=SC.ViewDesigner.extend({encodeChildViews:NO,designProperties:"isPassword isTextArea hint".w()});
SC.Object.prototype.emitDesign=function(){var a=SC.DesignCoder.encode(this);return a
};SC.Object.prototype.encodeDesign=function(a){return this.designer?this.designer.encodeDesign(a):NO
};SC.Page.prototype.emitDesign=function(){this.awake();var a=this.get("pageName");
var b=SC.DesignCoder.encode(this);b=["// SproutCore ViewBuilder Design Format v1.0","// WARNING: This file is automatically generated.  DO NOT EDIT.  Changes you","// make to this file will be lost.","","%@ = %@;".fmt(a,b),""].join("\n");
return b};SC.Page.prototype.designController=function(){if(!this._designController){this._designController=SC.PageDesignController.create({page:this})
}return this._designController}.property().cacheable();SC.Page.prototype.emitLocalization=function(c){this.awake();
var a=this.get("pageName");var b=SC.LocalizationCoder.encode(this);b=["// SproutCore ViewBuilder Localization Format v1.0","// WARNING: This file is automatically generated.  DO NOT EDIT.  Changes you","// make to this file will be lost.","","%@.loc(%@);".fmt(a,b),""].join("\n");
return b};SC.Page.prototype.encodeDesign=function(d){for(var b in this){var a=this[b];
if(a instanceof SC.View||a instanceof SC.Controller||a instanceof SC.Object){d.js(b,a.emitDesign())
}}d.string("pageName",this.get("pageName"))};SC.Page.prototype.encodeLoc=function(d){for(var b in this){var a=this[b];
if(a instanceof SC.View){d.js(b,a.emitLocalization())}}};SC.View.prototype.emitDesign=function(){var a=SC.DesignCoder.encode(this);
return a};SC.View.prototype.emitLocalization=function(design){var ret=SC.LocalizationCoder.encode(this);
if(!design){design=this.emitDesign()}var views=eval(design).loc(eval(ret)).create();
var emptyElement=views.computeEmptyElement().replace(/\'/g,"'");views.destroy();ret=ret.replace(/\)$/,", '%@')".fmt(emptyElement));
return ret};SC.View.prototype.encodeDesign=function(a){return this.designer?this.designer.encodeDesign(a):NO
};SC.View.prototype.encodeLoc=function(a){return this.designer?this.designer.encodeLoc(a):NO
};SC.LINE="line";SC.RECT="rect";SC.CIRCLE="circle";SC.POLY="poly";SC.FILL="fill";
SC.STROKE="stroke";SC.DrawingView=SC.View.extend({classNames:"scui-drawing-view",shapes:[],_drawingManager:{},shapesDidChange:function(){this.set("layerNeedsUpdate",YES);
this.updateLayerIfNeeded()}.observes("*shapes.[]"),init:function(){arguments.callee.base.apply(this,arguments);
this.registerShapeDrawing(SC.LINE,function(a,b){if(b.style){if(b.style.width){a.lineWidth=b.style.width
}if(b.style.color){a.strokeStyle=b.style.color}if(b.style.transparency){a.globalAlpha=b.style.transparency
}}a.beginPath();a.moveTo(b.start.x,b.start.y);a.lineTo(b.end.x,b.end.y);a.stroke()
});this.registerShapeDrawing(SC.RECT,function(a,b){if(b.style){if(b.style.width){a.lineWidth=b.style.width
}if(b.style.color){a.fillStyle=a.strokeStyle=b.style.color}if(b.style.transparency){a.globalAlpha=b.style.transparency
}}switch(b.type){case SC.FILL:a.fillRect(b.start.x,b.start.y,b.size.width,b.size.height);
break;case SC.STROKE:a.strokeRect(b.start.x,b.start.y,b.size.width,b.size.height);
break;default:a.clearRect(b.start.x,b.start.y,b.size.width,b.size.height);break}});
this.registerShapeDrawing(SC.CIRCLE,function(a,b){if(b.style){if(b.style.width){a.lineWidth=b.style.width
}if(b.style.color){a.fillStyle=a.strokeStyle=b.style.color}if(b.style.transparency){a.globalAlpha=b.style.transparency
}}a.beginPath();a.arc(b.center.x,b.center.y,b.radius,0,Math.PI*2,true);if(b.type===SC.FILL){a.fill()
}else{a.stroke()}});this.registerShapeDrawing(SC.POLY,function(b,f){if(f.style){if(f.style.width){b.lineWidth=f.style.width
}if(f.style.color){b.fillStyle=b.strokeStyle=f.style.color}if(f.style.transparency){b.globalAlpha=f.style.transparency
}}b.beginPath();var a=f.path?f.path.length:0;if(a<2){return}var e=f.path,d;b.moveTo(e[0].x,e[0].y);
for(var c=1;c<a;c++){d=e[c];b.lineTo(d.x,d.y)}b.lineTo(e[0].x,e[0].y);if(f.type===SC.FILL){b.fill()
}else{b.stroke()}})},render:function(c,e){var d=this.get("frame");if(e){if(!SC.browser.msie){c.push('<canvas class="base-layer" width="%@" height="%@">You can\'t use canvas tags</canvas>'.fmt(d.width,d.height))
}}else{var b=this.$("canvas.base-layer");if(b){b.attr("width",d.width);b.attr("height",d.height);
if(b.length>0){var a=b[0].getContext("2d");if(a){a.clearRect(0,0,d.width,d.height);
this._drawShapes(a)}else{console.error("SC.DrawingView.render(): Canvas object context is not accessible.")
}}else{console.error("SC.DrawingView.render(): Canvas element array length is zero.")
}}else{console.error("SC.DrawingView.render(): Canvas element is not accessible.")
}}return arguments.callee.base.apply(this,arguments)},registerShapeDrawing:function(b,a){if(!b){console.error("Can't register this drawing paradigm because name is null");
return NO}this._drawingManager[b]=a;this.set("layerNeedsUpdate",YES);this.updateLayerIfNeeded();
return YES},_drawShapes:function(c){var f;var b=this.get("shapes");var d;for(var e=0,a=b.length;
e<a;e++){f=b[e];d=this._drawingManager[f.shape];if(d){d(c,f)}}}});sc_require("views/drawing");
SC.SNAP_ZONE=2;SC.SNAP_LINE={shape:SC.LINE,start:{x:0,y:0},end:{x:0,y:0},style:{width:0.5,color:"#00c6ff"}};
SC.SnapLines={hasSnapLines:YES,setupData:function(n){if(!n){n=[]}this.removeLines();
this._xPositions={};this._yPositions={};var m=this._xPositions,g=this._yPositions,d=this.get("childViews"),h=this,o,c,f,k,b,e,j,a,i=(SC.SNAP_ZONE*2);
var l=function(t,s,p,w,q){var v=t,u=s,r=p;t=Math.floor(t/i);s=Math.floor(s/i);p=Math.floor(p/i);
if(q[t]){q[t].push({value:v,child:w})}else{q[t]=[{value:v,child:w}]}if(q[s]){q[s].push({value:u,child:w})
}else{q[s]=[{value:u,child:w}]}if(q[p]){q[p].push({value:r,child:w})}else{q[p]=[{value:r,child:w}]
}};parent=this;d.forEach(function(p){if(n.indexOf(p)<0){c=parent?parent.convertFrameToView(p.get("frame"),null):p.get("frame");
f=c.x;k=SC.midX(c);b=c.x+c.width;l(f,k,b,p,m);e=c.y;j=SC.midY(c);a=c.y+c.height;l(e,j,a,p,g)
}});parent=this.get("parentView");c=parent?parent.convertFrameToView(this.get("frame"),null):this.get("frame");
this._globalFrame=c;f=c.x;k=SC.midX(c);b=c.x+c.width;l(f,k,b,this,m);e=c.y;j=SC.midY(c);
a=c.y+c.height;l(e,j,a,this,g)},drawLines:function(r,x,w,z,y){if(!this._drawingView){this._drawingView=this.createChildView(SC.DrawingView.design({shapes:[]}));
this.appendChild(this._drawingView)}var u=(SC.SNAP_ZONE*2),v=[],s,f,t,l,p,d,o,n,b,m,c,C,i,h,a,k,E,e,A=this._dragDirection(x,w,z,y),B,g,j=this,F,q,D;
l=r.get("parentView");t=l?l.convertFrameToView(r.get("frame"),null):r.get("frame");
p=SC.minX(t);d=SC.midX(t);o=SC.maxX(t);n=SC.minY(t);b=SC.midY(t);m=SC.maxY(t);c=Math.floor(p/u);
C=Math.floor(d/u);i=Math.floor(o/u);h=Math.floor(n/u);a=Math.floor(b/u);k=Math.floor(m/u);
B=A.UP?[{mod:c,val:0},{mod:C,val:t.width/2},{mod:i,val:t.width}]:[{mod:i,val:t.width},{mod:C,val:t.width/2},{mod:c,val:0}];
B.forEach(function(G){if(j._xPositions[G.mod]){F=G;E=j._xPositions[G.mod][0].value-j._globalFrame.x;
return}});if(!SC.none(E)){s=SC.copy(SC.SNAP_LINE);s.start={x:E,y:0};s.end={x:E,y:this._globalFrame.height};
v.push(s)}g=A.LEFT?[{mod:h,val:0},{mod:a,val:t.height/2},{mod:k,val:t.height}]:[{mod:k,val:t.height},{mod:a,val:t.height/2},{mod:h,val:0}];
g.forEach(function(G){if(j._yPositions[G.mod]){q=G;e=j._yPositions[G.mod][0].value-j._globalFrame.y;
return}});if(!SC.none(e)){f=SC.copy(SC.SNAP_LINE);f.start={y:e,x:0};f.end={y:e,x:this._globalFrame.width};
v.push(f)}this._drawingView.set("shapes",v);D={pageX:E+this._globalFrame.x,pageY:e+this._globalFrame.y,frameX:E,frameY:e};
if(F){D.pageX-=F.val;D.frameX-=F.val}if(q){D.pageY-=q.val;D.frameY-=q.val}return D
},removeLines:function(){this._xPositions=null;this._yPositions=null;this._globalFrame=null;
if(this._drawingView){this.removeChild(this._drawingView);this._drawingView=null}},_dragDirection:function(g,f,d,c){var b=g-d,a=f-c,e={};
e.UP=b>0?NO:YES;e.DOWN=b>0?YES:NO;e.LEFT=a>0?NO:YES;e.RIGHT=a>0?YES:NO;return e}};
SC.DesignerDropTarget=SC.ContainerView.extend({acceptsFirstResponder:YES,keyDown:function(a){return this.interpretKeyEvents(a)
},keyUp:function(a){return YES},deleteForward:function(a){var b=SC.designsController.getPath("page.designController");
if(b){b.deleteSelection()}return YES},deleteBackward:function(a){var b=SC.designsController.getPath("page.designController");
if(b){b.deleteSelection()}return YES},moveLeft:function(b,a){return YES},moveRight:function(b,a){return YES
},moveUp:function(b,a){return YES},moveDown:function(b,a){return YES},isDropTarget:YES,targetIsInIFrame:YES,dragStarted:function(b,a){},dragEntered:function(b,a){},dragUpdated:function(b,a){},dragExited:function(b,a){},dragEnded:function(b,a){},computeDragOperations:function(b,a){return SC.DRAG_ANY
},acceptDragOperation:function(drag,op){var data=drag.dataForType("SC.Object"),scClass=eval(data.get("scClass"));
return scClass.kindOf(SC.View)},performDragOperation:function(drag,op){var data=drag.dataForType("SC.Object"),cv=this.get("contentView"),loc=drag.get("location"),frame=drag.iframeFrame,design,size,newView,defaults,layout;
var page=cv.get("page");var designController=page.get("designController"),rootDesigner=designController.get("rootDesigner");
var rootDesignerFrame=rootDesigner.get("frame");size=data.get("size");loc.x=loc.x-frame.x-rootDesignerFrame.x;
loc.y=loc.y-frame.y-rootDesignerFrame.y;design=eval(data.get("scClass"));defaults=data.get("defaults")||{};
layout=defaults.layout||{};layout=SC.merge(layout,{top:loc.y,left:loc.x});defaults.layout=layout;
design=design.design(defaults);newView=design.create({page:page});if(rootDesigner&&newView){rootDesigner.addView(newView)
}page.get("designController").select(newView.get("designer"));return SC.DRAG_ANY}});
SC.pageItemView=SC.ListItemView.extend({isDropTarget:YES,dragEntered:function(b,a){this.$().addClass("highlight")
},dragExited:function(b,a){this.$().removeClass("highlight")},dragEnded:function(b,a){this.$().removeClass("highlight")
},computeDragOperations:function(b,a){if(b.hasDataType("SC.Binding")){return SC.DRAG_LINK
}return SC.DRAG_NONE},acceptDragOperation:function(a,b){return YES},performDragOperation:function(b,e){var d=b.dataForType("SC.Binding"),c=this;
if(d&&SC._Greenhouse){var a=SC.Object.create({type:"Binding",source:d,target:c.get("content"),addItem:function(k,j,h){var f=this.getPath("source");
var i=c._propertyPathForProp(this.getPath("target.view.page"),this.getPath("target.view"));
f[k+"Binding"]=h[k+"Binding"]=i+"."+j;f.propertyDidChange(k+"Binding");var g=f.get("designer");
if(g){g.designProperties.pushObject(k+"Binding");g.propertyDidChange("editableProperties")
}if(f.displayDidChange){f.displayDidChange()}}});SC._Greenhouse.sendAction("newBindingPopup",a);
return SC.DRAG_LINK}else{return SC.DRAG_NONE}},_propertyPathForProp:function(b,c){for(var a in b){if(b.hasOwnProperty(a)){if(b[a]===c){return b.get("pageName")+"."+a.toString()
}}}}});SC.SelectionHandlesView=SC.View.extend({designer:null,classNames:"handles",render:function(e,f){var d=this.get("designer"),b=d?d.get("canResizeVertical"):NO,a=d?d.get("canResizeHorizontal"):NO,c;
if(f||(b!==this._vertical)||(a===this._horizontal)){this._vertical=b;this._horizontal=a;
if(b&&a){c=["top left","top right","bottom left","bottom right"]}else{if(b){c="top bottom".w()
}else{if(a){c="left right".w()}else{c=[]}}}c.forEach(function(g){e.begin("span").classNames(g.w()).addClass("handle").end()
},this)}},mouseDown:function(a){var b=this.designer;return(b&&b.mouseDown)?b.mouseDown(a):null
},mouseUp:function(a){var b=this.designer;return(b&&b.mouseUp)?b.mouseUp(a):null},mouseMoved:function(a){var b=this.designer;
return(b&&b.mouseMoved)?b.mouseMoved(a):null},mouseDragged:function(a){var b=this.designer;
return(b&&b.mouseDragged)?b.mouseDragged(a):null}});require("views/designer_drop_target");
require("views/page_item_view");SC.designPage=SC.Page.create({designMainPane:SC.MainPane.design({classNames:["workspace"],childViews:"rotated container viewList".w(),container:SC.DesignerDropTarget.design({layout:{top:20,left:20,right:20,bottom:83},classNames:["design"],contentViewBinding:SC.Binding.transform(function(a,b){return a&&a.kindOf&&a.kindOf(SC.View)?a:null
}).from("SC.designController.view")}),rotated:SC.View.design({layout:{top:20,left:20,right:20,bottom:83},classNames:["rotated-page"]}),viewList:SC.ScrollView.design({layout:{left:0,right:0,bottom:0,height:63},classNames:["dock"],hasBorder:NO,hasVerticalScroller:NO,contentView:SC.GridView.design({contentIconKey:"type",exampleView:SC.pageItemView,rowHeight:63,columnWidth:100,hasContentIcon:YES,delegate:SC.designsController,selectionBinding:"SC.designsController.selection",contentValueKey:"name",isDropTarget:YES,canEditContent:YES,canReorderContent:YES,canDeleteContent:YES,actOnSelect:YES,targetIsInIFrame:YES,target:"SC.designController",action:"viewSelected"})})})});
if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/designer")
};