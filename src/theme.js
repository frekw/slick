// var Slick = SC.AceTheme.extend({
//   "classNames": ["slick", "normal"]
// });

SC.SlickTheme = SC.BaseTheme.extend({
  name: "Slick",
  description: "A bright, Ace-inspired theme",
  version: 'v0.1 alpha',
  classNames: ["slick"]
});


SC.Theme.register("sc-slick", SC.SlickTheme);
SC.SlickTheme.Dark = SC.SlickTheme.subtheme("dark", "dark");

SC.Pane.prototype.baseTheme = "sc-slick";

// Hack for rightclick in test_controls
SC.CONTEXT_MENU_ENABLED = YES;
