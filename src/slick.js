var Slick = SC.AceTheme.extend({
  "classNames": ["slick", "normal"]
});
SC.Theme.register("slick", Slick);
SC.Pane.prototype.theme = "slick";

// Hack for rightclick in test_controls
SC.CONTEXT_MENU_ENABLED = YES;
