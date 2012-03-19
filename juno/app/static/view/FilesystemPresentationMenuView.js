Ext.define("Juno.view.FilesystemPresentationMenuView", {
    alias: "widget.filesystempresentationmenu",
    extend: "Ext.menu.Menu",
    plain: true,

    constructor: function() {
	this.callParent(arguments);
	this.populate();
	return this;
    },

    populate: function() {
	this.add([{
	    text: "Show presentation",
	    itemid: "fpmv_show"
	}, {
	    text: "Download presentation...",
	    itemid: "fpmv_download"
	}, {
	    text: "Delete presentation",
	    disabled: !this.data.can_write_parent,
	    itemid: "fpmv_rm"
	}]);
    }
});
