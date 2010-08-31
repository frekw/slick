require("src/theme");

SC.SlickTheme.PointLeft = SC.SlickTheme.subtheme("point-left", "point-left");
SC.SlickTheme.PointRight = SC.SlickTheme.subtheme("point-right", "point-right");
SC.SlickTheme.PointRight = SC.SlickTheme.subtheme("capsule", "capsule");

SC.SlickTheme.renderers.Button = SC.BaseTheme.renderers.Button.extend({
  renderContents: function(context) {
    // render background slices
    context.push("<span class='button-left'></span>");
    // render inner html
    context.push("<span class='button-middle'>");
    
    context = context.begin("label").addClass("sc-button-label");
    this._titleRenderer.render(context);
    context = context.end();
    
    context.push('</span>');
    context.push("<span class='button-right'></span>");
  }
});

SC.SlickTheme.renderers.button = SC.SlickTheme.renderers.Button.create();