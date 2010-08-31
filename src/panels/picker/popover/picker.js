require("src/panels/picker/popover/popover");

SC.SlickTheme.Popover.renderers.Picker = SC.EmptyTheme.renderers.Picker.extend({
  render: function(context) {
    if (this.contentProvider) this.contentProvider.renderContent(context);
    context.addClass(this.pointerPos);
  },
  
  update: function() {
    this.$().addClass(this.pointerPos);
  }
});

SC.SlickTheme.Popover.renderers.picker = SC.SlickTheme.Popover.renderers.Picker.create();