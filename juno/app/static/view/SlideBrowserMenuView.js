Ext.define("Juno.view.SlideBrowserMenuView", {
    alias: "widget.slidebrowsermenu",
    extend: "Ext.menu.Menu",
    plain: true,

    constructor: function() {
	this.callParent(arguments);
	this.populate();
	return this;
    },

    populate: function() {
	this.add([{
	    text: "Select all",
	    itemid: "sbmv_selectall"
	}, {
	    text: "Zoom slide...",
	    itemid: "sbmv_zoom"
	}, {
	    text: "Find slide in filesystem",
	    itemid: "sbmv_find"
	}]);
    }
});
