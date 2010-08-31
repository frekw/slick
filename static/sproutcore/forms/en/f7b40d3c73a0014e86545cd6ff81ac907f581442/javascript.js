SC.stringsFor("English",{});SC.FormsAutoHide={autoHide:NO,isEmpty:NO,emptinessDidChangeFor:function(a){this.invokeOnce("_calculateEmptiness")
},_calculateEmptiness:function(){var b=this.get("childViews"),a=b.length;var d=YES;
for(var c=0;c<a;c++){var e=b[c];if(!e.get("isEmpty")&&e.get("isVisible")){d=NO;break
}}this.setIfChanged("isEmpty",d)}.observes("_displayFields"),emptinessDidChange:function(){var a=this.get("parentView");
if(a&&a.emptinessDidChangeFor){a.emptinessDidChangeFor(this)}}.observes("isEmpty"),hiddenCouldChange:function(){var a=YES;
if(!this.get("isEditing")&&this.get("autoHide")&&this.get("isEmpty")){a=NO}if(a!==this.get("isVisible")){this.set("isVisible",a);
this.relayoutFields()}}.observes("autoHide","isEmpty")};SC.FormsEditMode={hasEditMode:YES,isEditing:NO,editModeDidChange:function(){this._propagateEditMode()
}.observes("isEditing"),_scfem_childViewsDidChange:function(){this._propagateEditMode()
}.observes("childViews"),_propagateEditMode:function(){var e=this.get("isEditing");
var d=this.get("childViews"),b,a=d.length,c;for(b=0;b<a;b++){c=d[b];if(SC.typeOf(c)===SC.T_STRING||c.isClass){return
}if(c.get("hasEditMode")){c.set("isEditing",e)}}}};SC.BaseTheme.renderers.Form=SC.Renderer.extend({formFlowSpacing:{left:5,top:5,bottom:5,right:5},render:function(a){if(this.contentProvider){this.contentProvider.renderContent(a)
}},update:function(){}});SC.BaseTheme.renderers.form=SC.BaseTheme.renderers.Form.create();
SC.BaseTheme.renderers.FormRow=SC.Renderer.extend({rowFlowSpacing:{right:15,left:0,top:0,bottom:0},rowFlowPadding:{left:0,right:0,bottom:0,top:0},render:function(a){if(this.contentProvider){this.contentProvider.renderContent(a)
}},update:function(){}});SC.BaseTheme.renderers.formRow=SC.BaseTheme.renderers.FormRow.create();
require("mixins/auto_hide");require("mixins/edit_mode");SC.FormRowView=SC.View.extend(SC.FlowedLayout,SC.FormsAutoHide,SC.FormsEditMode,{flowSize:{widthPercentage:1},rowFlowSpacing:SC.FROM_THEME,rowFlowSpacingDefault:{right:15,left:0,top:0,bottom:0},rowFlowPadding:SC.FROM_THEME,rowFlowPaddingDefault:{right:0,left:0,top:0,bottom:0},defaultFlowSpacing:function(){return this.themed("rowFlowSpacing")
}.property("rowFlowSpacing","theme"),flowPadding:function(){return this.themed("rowFlowPadding")
}.property("rowFlowPadding","theme"),classNames:["sc-form-row-view"],isFormRow:YES,label:"",rowLabelSize:0,rowLabelMeasuredSize:0,shouldMeasureLabel:YES,hasRowLabel:YES,labelView:null,layoutDirection:SC.LAYOUT_HORIZONTAL,createChildViews:function(){var d=SC.clone(this.get("childViews"));
if(this.labelView.isClass){this.labelView=this.createChildView(this.labelView,{value:this.get("label")});
this.labelView.addObserver("measuredSize",this,"labelSizeDidChange");this.labelView.bind("shouldMeasureSize",this,"shouldMeasureLabel");
this.get("childViews").unshift(this.labelView)}var f=this.get("content");arguments.callee.base.apply(this,arguments);
var b,a=d.length,e,c;for(b=0;b<a;b++){e=d[b];if(SC.typeOf(e)===SC.T_STRING){c=this.get(e);
if(c&&!c.isClass){if(!c.get("contentValueKey")){if(e==="_singleField"){c.set("contentValueKey",this.get("contentValueKey"))
}else{c.set("contentValueKey",e)}}if(!c.get("content")){c.bind("content",".owner.content")
}var g=c.get("contentValueKey");if(g&&!c.get("value")){c.bind("value",".content."+g)
}}}}},labelDidChange:function(){this.get("labelView").set("value",this.get("label"))
}.observes("label"),labelSizeDidChange:function(){var a=this.get("labelView").get("measuredSize");
this.set("rowLabelMeasuredSize",a.width);var b=this.get("parentView");if(b&&b.get("isRowDelegate")){b.rowLabelMeasuredSizeDidChange(this,a)
}},rowLabelSizeDidChange:function(){this.get("labelView").adjust({width:this.get("rowLabelSize")})
}.observes("rowLabelSize"),createRenderer:function(a){return a.formRow()},updateRenderer:function(a){}});
SC.FormRowView.mixin({row:function(b,a,c){if(b.isClass){c=a;a=b;b=null}if(!c){c={}
}c.label=b;c.childViews=["_singleField"];c._singleField=a;return c},LabelView:SC.LabelView.extend(SC.AutoResize,{shouldAutoResize:NO,layout:{left:0,top:0,width:0,height:18},fillHeight:YES,classNames:["sc-form-label"]})});
SC.FormRowView.prototype.labelView=SC.FormRowView.LabelView.design();require("mixins/auto_hide");
require("mixins/edit_mode");require("views/form_row");SC.FormView=SC.View.extend(SC.FlowedLayout,SC.FormsAutoHide,SC.FormsEditMode,{layoutDirection:SC.LAYOUT_HORIZONTAL,canWrap:YES,formFlowSpacing:SC.FROM_THEME,formFlowSpacingDefault:{left:5,top:5,bottom:5,right:5},defaultFlowSpacing:function(){return this.themed("formFlowSpacing")
}.property("formFlowSpacing","theme"),classNames:["sc-form-view"],editsByDefault:YES,firstKeyView:null,lastKeyView:null,content:null,exampleRow:SC.FormRowView.extend({labelView:SC.FormRowView.LabelView.extend({textAlign:SC.ALIGN_RIGHT})}),init:function(){if(this.get("editsByDefault")){this.set("isEditing",YES)
}arguments.callee.base.apply(this,arguments)},createChildViews:function(){var d=SC.clone(this.get("childViews"));
var b,a=d.length,e,c,g=this.get("exampleRow");for(b=0;b<a;b++){e=d[b];if(SC.typeOf(e)===SC.T_STRING){c=this.get(e);
if(c&&!c.isClass&&SC.typeOf(c)===SC.T_HASH){this[e]=g.extend(c)}}}for(b=0;b<a;b++){e=d[b];
if(SC.typeOf(e)===SC.T_STRING){c=this.get(e);if(!c.prototype.contentValueKey){c.prototype.contentValueKey=e
}}}var f=this.get("content");arguments.callee.base.apply(this,arguments);for(b=0;
b<a;b++){e=d[b];if(SC.typeOf(e)===SC.T_STRING){c=this.get(e);if(c&&!c.isClass){if(!c.get("content")){c.bind("content",".owner.content")
}if(this.get("labelWidth")!==null){c.set("shouldMeasureLabel",NO)}if(c.get("isFormRow")&&SC.none(c.get("label"))){c.set("label",e.humanize().titleize())
}}}}this._hasCreatedRows=YES;this.recalculateLabelWidth()},isRowDelegate:YES,labelWidth:null,recalculateLabelWidth:function(){if(!this._hasCreatedRows){return
}var c=this.get("labelWidth"),d=this.get("childViews"),b,a=d.length,e;if(c===null){c=0;
for(b=0;b<a;b++){e=d[b];if(e.get("rowLabelMeasuredSize")){c=Math.max(e.get("rowLabelMeasuredSize"),c)
}}}if(this._rowLabelSize!==c){this._rowLabelSize=c;for(b=0;b<a;b++){e=d[b];if(e.get("hasRowLabel")){e.set("rowLabelSize",c)
}}}},rowLabelMeasuredSizeDidChange:function(b,a){this.invokeOnce("recalculateLabelWidth")
},createRenderer:function(a){return a.form()},updateRenderer:function(a){}});SC.mixin(SC.FormView,{row:function(c,b,a){return SC.FormRowView.row(c,b,a)
},field:function(b,a){return SC.FormFieldView.field(b,a)}});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/forms")
};