Ext.define("Juno.controller.FilesystemController", {
    extend: "Ext.app.Controller",

    stores: [
	"NodesStore"
    ],

    views: [
	"FilesystemView",
	"FilesystemFileMenuView",
	"FilesystemFolderMenuView"
    ],

    refs: [{
	ref: "searchfield",
	selector: "#searchfield"
    }, {
	ref: "slidebrowser",
	selector: "slidebrowser"
    }, {
	ref: "filesystem",
	selector: "filesystem"
    }],

    init: function() {
        this.control({
            "filesystem": {
		itemclick: this.tv_click,
		itemcontextmenu: this.tv_rclick
            },
	    "menuitem[itemid = 'ffmv_show']": {
		click: this.ffmv_show
	    }
        });
    },

    tv_rclick: function(tv, rec, item, index, e) {
	var menu;
	if(rec.isLeaf())
	    menu = Ext.ComponentManager.create({
		xtype: "filesystemfilemenu",
	    });
	else
	    menu = Ext.ComponentManager.create({
		xtype: "filesystemfoldermenu",
		foo: rec.data.text
	    });

	menu.showAt(e.getXY());
	e.stopEvent();
    },
    
    tv_click: function(tv, rec, item, index, e, options) {
	if(rec.isLeaf())
	    this.ffmv_show();
	else
	    tv.expand(rec);
    },

    ffmv_show: function() {
	var rec = this.getFilesystem().getSelectionModel().getSelection()[0];
	var newurl = "../preso" + rec.data.id;

	var s = this.getSlidebrowser().getStore();
	if(s.getProxy().url != newurl) {
	    s.setProxy({
		type: "ajax",
		url: newurl
	    });
	    s.load();
	}

	if(rec.data.id.search(" ") == -1)
	    this.getSearchfield().setValue("is:" + rec.data.id);
	else
	    this.getSearchfield().setValue("is:\"" + rec.data.id + "\"");
    }
});