Ext.define("Juno.view.FilesystemFolderMenuView", {
    alias: "widget.filesystemfoldermenu",
    extend: "Ext.menu.Menu",
    plain: true,

    constructor: function() {
	this.callParent(arguments);
	this.populate();
	return this;
    },

    populate: function() {
	this.add([{
	    text: "Search in \"" + this.data.text + "\"",
	    itemid: "ffmv_searchin"
	}, {
	    text: "Search in \"" + this.data.text + "\" and subfolders",
	    itemid: "ffmv_searchunder"
	}, "-", {
	    text: "Create subfolder...",
	    disabled: !this.data.can_write,
	    itemid: "ffmv_create"
	}, {
	    text: "Delete folder",
	    disabled: !this.data.can_write_parent,
	    itemid: "ffmv_delete"
	}, {
	    text: "Upload presentation to \"" + this.data.text + "\"...",
	    disabled: !this.data.can_write,
	    itemid: "ffmv_upload"
	}, "-", {
	    text: "Expand subfolders",
	    itemid: "ffmv_expand"
	}, {
	    text: "Collapse subfolders",
	    itemid: "ffmv_collapse"
	}]);
    }
});
