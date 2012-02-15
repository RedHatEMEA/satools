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
	    text: "Search in \"" + this.foo + "\""
	}, {
	    text: "Search in \"" + this.foo + "\" and subfolders"
	}, "-", {
	    text: "Create subfolder..."
	}, {
	    text: "Delete folder"
	}, {
	    text: "Upload presentation to \"" + this.foo + "\"..."
	}, "-", {
	    text: "Expand subfolders"
	}, {
	    text: "Collapse subfolders"
	}]);
    }
});
