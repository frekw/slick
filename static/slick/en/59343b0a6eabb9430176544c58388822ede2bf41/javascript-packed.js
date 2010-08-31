SC.SlickTheme=SC.BaseTheme.extend({name:"Slick",description:"A bright, Ace-inspired theme",classNames:["slick"]});
SC.Theme.register("sc-slick",SC.SlickTheme);SC.SlickTheme.Dark=SC.SlickTheme.subtheme("dark","dark");
SC.Pane.prototype.baseTheme="sc-slick";SC.CONTEXT_MENU_ENABLED=YES;require("src/theme");
SC.SlickTheme.PointLeft=SC.SlickTheme.subtheme("point-left","point-left");SC.SlickTheme.PointRight=SC.SlickTheme.subtheme("point-right","point-right");
SC.SlickTheme.PointRight=SC.SlickTheme.subtheme("capsule","capsule");SC.SlickTheme.renderers.Button=SC.BaseTheme.renderers.Button.extend({renderContents:function(a){a.push("<span class='button-left'></span>");
a.push("<span class='button-middle'>");a=a.begin("label").addClass("sc-button-label");
this._titleRenderer.render(a);a=a.end();a.push("</span>");a.push("<span class='button-right'></span>")
}});SC.SlickTheme.renderers.button=SC.SlickTheme.renderers.Button.create();SC.SlickTheme.renderers.Slider=SC.BaseTheme.renderers.Slider.extend({renderSlider:function(b){var a=SC.BLANK_IMAGE_URL;
b.push('<span class="sc-track">','<span class="sc-left"></span>','<span class="sc-middle"></span>','<span class="sc-right"></span>',"</span>",'<img src="',a,'" class="sc-handle" style="left: ',this.value,'%" />')
}});SC.SlickTheme.renderers.slider=SC.SlickTheme.renderers.Slider.create();