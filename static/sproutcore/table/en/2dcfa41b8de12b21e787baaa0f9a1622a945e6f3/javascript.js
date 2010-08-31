SC.TableDelegate={isTableDelegate:YES,tableShouldResizeColumnTo:function(e,d,b){var c=d.get("minWidth")||0,a=d.get("maxWidth")||b;
b=Math.max(c,b);b=Math.min(a,b);return b},tableShouldResizeWidthTo:function(d,b){var c=d.get("minWidth")||0,a=d.get("maxWidth")||b;
b=Math.max(c,b);b=Math.min(a,b);return b}};SC.SORT_ASCENDING="ascending";SC.SORT_DESCENDING="descending";
SC.TableColumn=SC.Object.extend({key:null,title:null,width:100,minWidth:16,maxWidth:700,escapeHTML:NO,formatter:null,isVisible:YES,isFlexible:NO,isReorderable:YES,isSortable:YES,icon:null,tableHeader:null,sortState:null,tableContent:null});
sc_require("views/list");SC.TableRowView=SC.View.extend({classNames:["sc-table-row"],cells:[],acceptsFirstResponder:YES,tableView:null,init:function(){this._sctrv_handleChildren()
},columns:function(){return this.get("tableView").get("columns")}.property(),prepareContext:function(a,b){arguments.callee.base.apply(this,arguments);
a.setClass("sel",this.get("isSelected"))},render:function(b,c){var a=[];a.push((this.get("contentIndex")%2===0)?"even":"odd");
b.addClass(a);arguments.callee.base.apply(this,arguments)},renderChildViews:function(d,e){var c=this.get("cells"),b,a;
for(a=0;a<c.get("length");a++){b=c.objectAt(a);d=d.begin(b.get("tagName"));b.prepareContext(d,e);
d=d.end()}return d},layoutChildViews:function(){var c=this.get("cells"),d=this.get("columns"),b,f,a;
var h=0,e,g=this.get("tableView").get("rowHeight");for(a=0;a<c.get("length");a++){b=c.objectAt(a);
f=d.objectAt(a);e=f.get("width");b.adjust({left:h,width:e,height:g});h+=e;b.updateLayout()
}},_sctrv_layoutForChildAtColumnIndex:function(b){var c=this.get("columns"),e=this.get("tableView").get("rowHeight"),d={},f=0,a;
for(a=0;a<b;a++){f+=c.objectAt(a).get("width")}return{left:f,width:c.objectAt(b).get("width"),height:e}
},_sctrv_createTableCell:function(b,c){var a=SC.TableCellView.create({column:b,content:c});
return a},_sctrv_handleSelection:function(){this.displayDidChange()}.observes("isSelected"),_sctrv_handleChildren:function(){var g=this.get("content"),e=this.get("columns");
this.removeAllChildren();var f,d,h,c=[],b,a;for(a=0;a<e.get("length");a++){f=e.objectAt(a);
d=f.get("key");h=g?g.getPath(d):"";b=this._sctrv_createTableCell(f,h);c.push(b);this.appendChild(b)
}this.set("cells",c)}});sc_require("views/table");SC.TableHeaderView=SC.View.extend({classNames:["sc-table-header"],displayProperties:["sortState","isInDragMode"],acceptsFirstResponder:YES,isInDragMode:NO,hasHorizontalScroller:NO,hasVerticalScroller:NO,childViews:["dragModeView"],dragModeView:SC.ListView.design({isVisible:NO,layout:{left:0,right:0,bottom:0},init:function(){var a=this.get("parentView");
if(a){a.addObserver("isInDragMode",this,"_scthv_dragModeDidChange")}},_scthv_dragModeDidChange:function(){}}),column:null,render:function(b,f){var e=this.get("column"),d=e.get("icon"),a;
var c=b.begin("span");if(d){a='<img src="%@" class="icon" />'.fmt(d);c.push(a)}else{c.push(this.get("label"))
}c.end()},init:function(){var a=this.get("column");a.addObserver("width",this,"_scthv_layoutDidChange");
a.addObserver("maxWidth",this,"_scthv_layoutDidChange");a.addObserver("minWidth",this,"_scthv_layoutDidChange");
a.addObserver("sortState",this,"_scthv_sortStateDidChange");a.addObserver("tableContent",this,"_scthv_tableContentDidChange");
return arguments.callee.base.apply(this,arguments)},sortState:function(){return this.get("column").get("sortState")
}.property(),mouseDown:function(b){var a=this.get("tableView");return a?a.mouseDownInTableHeaderView(b,this):arguments.callee.base.apply(this,arguments)
},mouseUp:function(b){var a=this.get("tableView");return a?a.mouseUpInTableHeaderView(b,this):arguments.callee.base.apply(this,arguments)
},mouseDragged:function(b){var a=this.get("tableView");return a?a.mouseDraggedInTableHeaderView(b,this):arguments.callee.base.apply(this,arguments)
},_scthv_dragViewForHeader:function(){var b=this.get("layer").cloneNode(true);var a=SC.View.create({layer:b,parentView:this});
SC.$(b).css("backgroundColor","transparent").css("border","none").css("top",0).css("left",0);
return a},_scthv_enterDragMode:function(){this.set("isInDragMode",YES)},_scthv_exitDragMode:function(){this.set("isInDragMode",NO)
},_scthv_dragModeViewDidChange:function(){var a=this.get("dragModeView");if(a&&a.set){a.set("tableHeadView",this);
a.set("tableView",this.get("tableView"))}}.observes("dragModeView"),_scthv_layoutDidChange:function(c,b,f,a){var e=this.get("parentView");
e.invokeOnce(e.layoutChildViews);var d=this.get("layout")},_scthv_tableContentDidChange:function(){var b=this.get("column").get("tableContent");
var a=this.get("parentView")._scthv_columnContentFromTableContent(b,this.get("columnIndex"));
this.set("content",a)},_scthv_sortStateDidChange:function(){SC.RunLoop.begin();var a=this.get("column").get("sortState");
var b=this.get("classNames");b.removeObject("sc-table-header-sort-asc");b.removeObject("sc-table-header-sort-desc");
b.removeObject("sc-table-header-sort-active");if(a!==null){b.push("sc-table-header-sort-active")
}if(a===SC.SORT_ASCENDING){b.push("sc-table-header-sort-asc")}if(a===SC.SORT_DESCENDING){b.push("sc-table-header-sort-desc")
}this.displayDidChange();this.invokeOnce("updateLayer");SC.RunLoop.end()}});sc_require("views/table");
sc_require("views/table_header");SC.TableHeadView=SC.View.extend({layout:{height:18,left:0,right:0,top:0},classNames:["sc-table-head"],cells:[],acceptsFirstResponder:YES,dragOrder:null,init:function(){this._scthv_handleChildren()
},columns:function(){return this.get("parentView").get("columns")}.property(),renderChildViews:function(d,e){var c=this.get("cells"),b,a;
for(a=0;a<c.get("length");a++){b=c.objectAt(a);d=d.begin(b.get("tagName"));b.prepareContext(d,e);
d=d.end()}return d},layoutChildViews:function(){var c=this.get("cells"),b,a;for(a=0;
a<c.get("length");a++){b=c.objectAt(a);b.adjust(this._scthv_layoutForHeaderAtColumnIndex(a));
b.updateLayout()}},_scthv_enterDragMode:function(){var b=[],c=this.get("columns"),a;
for(a=0;a<c.get("length");a++){b.push(c.objectAt(a).get("key"))}this.set("dragOrder",b)
},_scthv_changeDragOrder:function(c,d){var b=this.get("dragOrder"),a=b.objectAt(c);
b.removeAt(idx);b.insertAt(d,a)},_scthv_reorderDragColumnViews:function(){}.observes("dragOrder"),_scthv_columnContentFromTableContent:function(d,g){var f=this.get("columns").objectAt(g),e=f.get("key"),c=[],b;
if(!d){return c}var a=this.get("parentView"),h=d.get("length");for(b=0;b<h;b++){c.push(d.objectAt(b).get(e))
}return c},_scthv_layoutForHeaderAtColumnIndex:function(b){var c=this.get("columns"),e=this.get("parentView").get("rowHeight"),d={},f=0,a;
for(a=0;a<b;a++){f+=c.objectAt(a).get("width")}return{left:f,width:c.objectAt(b).get("width"),height:e}
},_scthv_handleChildren:function(){var b=this.get("columns");var d=this.get("parentView");
var c=d.get("content");var a,j,f,e,k=[],h,g;for(g=0;g<b.get("length");g++){a=b.objectAt(g);
j=a.get("key");f=a.get("label");e=this._scthv_columnContentFromTableContent(c,g);
h=this._scthv_createTableHeader(a,f,e,g);k.push(h)}this.set("cells",k);if(k.length>0){this.replaceAllChildren(k)
}},_scthv_createTableHeader:function(e,d,f,c){var b=this.get("parentView");var a=SC.TableHeaderView.create({column:e,label:d,content:f,tableView:b,columnIndex:c});
return a}});sc_require("views/list");sc_require("views/table_row");sc_require("views/table_head");
sc_require("mixins/table_delegate");SC.TableView=SC.ListView.extend(SC.TableDelegate,{classNames:["sc-table-view"],childViews:"tableHeadView scrollView".w(),scrollView:SC.ScrollView.design({isVisible:YES,layout:{left:-1,right:0,bottom:0,top:19},hasHorizontalScroller:NO,borderStyle:SC.BORDER_NONE,contentView:SC.View.design({}),_sv_offsetDidChange:function(){this.get("parentView")._sctv_scrollOffsetDidChange()
}.observes("verticalScrollOffset","horizontalScrollOffset")}),hasHorizontalScroller:NO,hasVerticalScroller:NO,selectOnMouseDown:NO,containerView:function(){var a=this.get("scrollView");
return(a&&a.get)?a.get("contentView"):null}.property("scrollView"),layout:{left:0,right:0,top:0,bottom:0},init:function(){window.table=this;
return arguments.callee.base.apply(this,arguments)},canReorderContent:NO,isInDragMode:NO,mouseDownInTableHeaderView:function(a,c){var b=c.get("column");
if(!b.get("isReorderable")&&!b.get("isSortable")){return NO}this._mouseDownEvent=a;
this._mouseDownTimer=SC.Timer.schedule({target:this,action:"_scthv_enterDragMode",interval:300});
return YES},mouseUpInTableHeaderView:function(b,f){var d=this.get("isInDragMode");
if(!d){var c=f.get("column");this.set("sortedColumn",c);var a=c.get("sortState");
var e=a===SC.SORT_ASCENDING?SC.SORT_DESCENDING:SC.SORT_ASCENDING;c.set("sortState",e)
}this._dragging=false;if(this._mouseDownTimer){this._mouseDownTimer.invalidate()}},mouseDraggedInTableHeaderView:function(a,c){SC.RunLoop.begin();
var b=this.get("isInDragMode");if(!b){return NO}if(!this._dragging){SC.Drag.start({event:this._mouseDownEvent,source:c,dragView:this._scthv_dragViewForHeader(),ghost:YES});
this._dragging=true}return arguments.callee.base.apply(this,arguments);SC.RunLoop.end()
},columns:[],flexibleColumn:null,sortedColumn:null,hasTableHead:YES,tableHeadView:SC.TableHeadView.design({layout:{top:0,left:0,right:0}}),tableHeadHeight:18,hasUniformRowHeights:YES,rowHeight:18,exampleView:SC.TableRowView,isInColumnDragMode:NO,filterKey:null,rowOffsetForContentIndex:function(c){var b=0,a;
if(this.get("hasUniformRowHeights")){return b+(this.get("rowHeight")*c)}else{for(a=0;
a<c;i++){b+=this.rowHeightForContentIndex(a)}return b}},rowHeightForContentIndex:function(a){if(this.get("hasUniformRowHeights")){return this.get("rowHeight")
}else{}},layoutForContentIndex:function(a){return{top:this.rowOffsetForContentIndex(a),height:this.rowHeightForContentIndex(a),left:0,right:0}
},createItemView:function(c,a,b){b.tableView=this;return c.create(b)},clippingFrame:function(){var b=this.get("containerView"),a=this.get("scrollView"),c=this.get("frame");
if(!a.get){return c}return{height:c.height,width:c.width,x:a.get("horizontalScrollOffset"),y:a.get("verticalScrollOffset")}
}.property("frame","content").cacheable(),_sctv_scrollOffsetDidChange:function(){this.notifyPropertyChange("clippingFrame")
},computeLayout:function(){var b=arguments.callee.base.apply(this,arguments),a=this.get("containerView"),d=this.get("frame");
var c=b.minHeight;delete b.minHeight;a.adjust("minHeight",c);a.layoutDidChange();
this.notifyPropertyChange("clippingFrame");return b},_sctv_columnsDidChange:function(){var b=this.get("columns"),c=this.get("content"),a;
for(a=0;a<b.get("length");a++){b.objectAt(a).set("tableContent",c)}this.get("tableHeadView")._scthv_handleChildren();
this.reload()}.observes("columns"),_sctv_adjustColumnWidthsOnResize:function(){var f=this.get("frame").width;
var g=this.get("content"),c=this.delegateFor("isTableDelegate",this.delegate,g);if(this.get("columns").length==0){return
}f=c.tableShouldResizeWidthTo(this,f);var e=this.get("columns"),h=0,a;for(var a=0;
a<e.length;a++){h+=e.objectAt(a).get("width")}if(f===0){f=h}var b=this.get("flexibleColumn")||this.get("columns").objectAt(this.get("columns").length-1);
var d=b.get("width")+(f-h);b.set("width",d)}.observes("frame"),_sctv_sortContent:function(){var b=this.get("sortedColumn");
var a=b.get("key");this.set("orderBy",a)},_sctv_sortedColumnDidChange:function(){var b=this.get("columns"),d=this.get("sortedColumn"),c,a;
for(a=0;a<b.get("length");a++){c=b.objectAt(a);if(c!==d){c.set("sortState",null)}}this.invokeOnce("_sctv_sortContent")
}.observes("sortedColumn")});sc_require("views/table_row");SC.TableCellView=SC.View.extend({classNames:["sc-table-cell"],column:null,escapeHTMLBinding:SC.Binding.oneWay(".column.escapeHTML"),formatter:SC.Binding.oneWay(".column.formatter"),displayValue:function(){var f=this.get("content");
var d=this.get("column").get("formatter");if(d){var e=(SC.typeOf(d)===SC.T_FUNCTION)?d(f,this):d.fieldValueForObject(f,this);
if(!SC.none(e)){f=e}}if(SC.typeOf(f)===SC.T_ARRAY){var c=[];for(var b=0;b<f.get("length");
b++){var a=f.objectAt(b);if(!SC.none(a)&&a.toString){a=a.toString()}c.push(a)}f=c.join(",")
}if(!SC.none(f)&&f.toString){f=f.toString()}if(this.get("escapeHTML")){f=SC.RenderContext.escapeHTML(f)
}return f}.property("content","escapeHTML","formatter").cacheable(),render:function(a,b){a.push(this.get("displayValue"))
},init:function(){var a=this.get("column");a.addObserver("width",this,"_sctcv_layoutDidChange");
a.addObserver("maxWidth",this,"_sctcv_layoutDidChange");a.addObserver("minWidth",this,"_sctcv_layoutDidChange")
},_sctcv_layoutDidChange:function(c,b,e,a){var d=this.get("parentView");SC.run(function(){d.layoutChildViews()
})}});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/table")
};