SC.SlickTheme=SC.BaseTheme.extend({name:"Slick",description:"A bright, Ace-inspired theme",version:"v0.1 alpha",classNames:["slick"]});
SC.Theme.register("sc-slick",SC.SlickTheme);SC.SlickTheme.Dark=SC.SlickTheme.subtheme("dark","dark");
SC.Pane.prototype.baseTheme="sc-slick";SC.CONTEXT_MENU_ENABLED=YES;require("src/theme");
SC.SlickTheme.PointLeft=SC.SlickTheme.subtheme("point-left","point-left");SC.SlickTheme.PointRight=SC.SlickTheme.subtheme("point-right","point-right");
SC.SlickTheme.PointRight=SC.SlickTheme.subtheme("capsule","capsule");SC.SlickTheme.renderers.Button=SC.BaseTheme.renderers.Button.extend({renderContents:function(a){a.push("<span class='button-left'></span>");
a.push("<span class='button-middle'>");a=a.begin("label").addClass("sc-button-label");
this._titleRenderer.render(a);a=a.end();a.push("</span>");a.push("<span class='button-right'></span>")
}});SC.SlickTheme.renderers.button=SC.SlickTheme.renderers.Button.create();SC.SlickTheme.renderers.Slider=SC.BaseTheme.renderers.Slider.extend({renderSlider:function(b){var a=SC.BLANK_IMAGE_URL;
b.push('<span class="sc-track">','<span class="sc-left"></span>','<span class="sc-middle"></span>','<span class="sc-right"></span>',"</span>",'<img src="',a,'" class="sc-handle" style="left: ',this.value,'%" />')
}});SC.SlickTheme.renderers.slider=SC.SlickTheme.renderers.Slider.create();SC.SlickTheme.Dark.PointLeft=SC.SlickTheme.Dark.subtheme("point-left","point-left");
SC.SlickTheme.Dark.PointRight=SC.SlickTheme.Dark.subtheme("point-right","point-right");
SC.SlickTheme.Dark.PointRight=SC.SlickTheme.Dark.subtheme("capsule","capsule");SC.SlickTheme.Popover=SC.SlickTheme.Dark.subtheme("popover","popover");
SC.SlickTheme.register("popover",SC.SlickTheme.Popover);SC.SlickTheme.SolidPopover=SC.SlickTheme.Popover.subtheme("solid","solid");
SC.SlickTheme.register("solid-popover",SC.SlickTheme.SolidPopover);require("src/panels/picker/popover/popover");
SC.SlickTheme.Popover.renderers.Picker=SC.BaseTheme.renderers.Picker.extend({render:function(a){if(this.contentProvider){this.contentProvider.renderContent(a)
}a.addClass(this.pointerPos)},update:function(){this.$().addClass(this.pointerPos)
}});SC.SlickTheme.Popover.renderers.picker=SC.SlickTheme.Popover.renderers.Picker.create();
require("src/panels/picker/popover/popover");var theme=SC.SlickTheme.Popover;SC.SlickTheme.Popover.renderers.Workspace=SC.BaseTheme.renderers.Workspace.extend({computeClassNames:function(){var a=this._TMP_CLASS_NAMES||{};
a["top-toolbar"]=this.hasTopToolbar;a["bottom-toolbar"]=this.hasBottomToolbar;this._TMP_CLASS_NAMES=a;
return a},render:function(a){a.setClass(this.computeClassNames());a.push("<div class='sc-workspace-overlay'>","<div class='middle'></div>","<div class='top-left-edge'></div>","<div class='top-edge'></div>","<div class='top-right-edge'></div>","<div class='right-edge'></div>","<div class='bottom-right-edge'></div>","<div class='bottom-edge'></div>","<div class='bottom-left-edge'></div>","<div class='left-edge'></div>","<div class='sc-pointer'></div>","</div>");
if(this.contentProvider){this.contentProvider.renderContent(a)}},update:function(){this.$().setClass(this.computeClassNames())
}});SC.SlickTheme.Popover.renderers.workspace=SC.SlickTheme.Popover.renderers.Workspace.create();