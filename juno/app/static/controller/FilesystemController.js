Ext.define("Juno.controller.FilesystemController", {
    extend: "Ext.app.Controller",

    stores: [
	"NodesStore"
    ],

    views: [
	"FilesystemView",
	"FilesystemFolderMenuView",
	"FilesystemPresentationMenuView"
    ],

    refs: [{
	ref: "treepanel",
	selector: "treepanel"
    }, {
	ref: "treeview",
	selector: "treeview"
    }],

    init: function() {
        this.control({
            "filesystem": {
		itemclick: this.tv_click,
		itemcontextmenu: this.tv_rclick
            },
	    "treeview": {
		render: this.tv_render
	    },
	    "menuitem[itemid = 'fpmv_show']": {
		click: this.fpmv_show
	    },
	    "menuitem[itemid = 'fpmv_download']": {
		click: this.fpmv_download
	    },
	    "menuitem[itemid = 'fpmv_rm']": {
		click: this.fpmv_rm
	    },
	    "menuitem[itemid = 'ffmv_searchin']": {
		click: this.ffmv_searchin
	    },
	    "menuitem[itemid = 'ffmv_searchunder']": {
		click: this.ffmv_searchunder
	    },
	    "menuitem[itemid = 'ffmv_mkdir']": {
		click: this.ffmv_mkdir
	    },
	    "menuitem[itemid = 'ffmv_rmdir']": {
		click: this.ffmv_rmdir
	    },
	    "menuitem[itemid = 'ffmv_upload']": {
		click: this.ffmv_upload
	    },
	    "menuitem[itemid = 'ffmv_expand']": {
		click: this.ffmv_expand
	    },
	    "menuitem[itemid = 'ffmv_collapse']": {
		click: this.ffmv_collapse
	    }
        });
    },

    tv_render: function() {
	var tv = this.getTreeview();

	tv.tip = Ext.create("Ext.tip.ToolTip", {
            target: tv.el,
            delegate: tv.itemSelector,
            maxWidth: 500,
            listeners: {
		beforeshow: function() {
		    var s = tv.getRecord(tv.tip.triggerElement).get("text");
		    s = s.replace(/ /g, "&nbsp;");
                    tv.tip.update(s);
		}
            }
	});
    },

    tv_rclick: function(tv, rec, item, index, e) {
	var menu = Ext.ComponentManager.create({
	    xtype: rec.isLeaf() ? "filesystempresentationmenu" : "filesystemfoldermenu",
	    data: rec.data
	});

	menu.showAt(e.getXY());
	e.stopEvent();
    },
    
    tv_click: function(tv, rec, item, index, e, options) {
	if(rec.isLeaf())
	    this.fpmv_show();
	else
	    tv.expand(rec);
    },

    fpmv_download:function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];

	window.open("dl/" + rec.data.id, "_blank");
    },

    do_search: function(verb) {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];

	this.getController("SearchController").search(verb + ":\"" + rec.data.id + "\"");
    },

    fpmv_show: function() {
	this.do_search("is");
    },

    ffmv_searchin: function() {
	this.do_search("in");
    },

    ffmv_searchunder: function() {
	this.do_search("under");
    },

    ffmv_mkdir: function() {
	var tp = this.getTreepanel();
	var rec = tp.getSelectionModel().getSelection()[0];
	var store = tp.getStore();
	var tv = this.getTreeview();

	Ext.Msg.prompt(_["title"], "Subfolder name:", function(btn, text) {
	    if(btn == "ok") {
		Ext.Ajax.request({
		    url: "mkdir" + rec.data.id + "/" + text,
		    method: "POST",
		    callback: function(options, success, response) {
			if(!success)
			    Ext.Msg.alert(_["title"],
					  "Unable to create subfolder");
			store.load({
			    node: rec,
			    callback: function(records, operation, success) {
				tp.selectPath("/root" + rec.data.id + "/" + text, "text");
			    }
			});
		    }
		});
	    }
	});

    },

    fpmv_rm: function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];
	var store = this.getTreepanel().getStore();

	Ext.Msg.show({
	    title: _["title"],
	    msg: "This will delete the presentation you have selected. Are you sure?",
	    buttons: Ext.Msg.YESNOCANCEL,
	    icon: Ext.Msg.WARNING,
	    scope: this,
	    fn: function(buttonId) {
		if(buttonId == "yes") {
		    Ext.Ajax.request({
			url: "rm" + rec.data.id,
			method: "POST",
			callback: function(options, success, response) {
			    if(success)
				rec.remove();
			    else
				Ext.Msg.alert(_["title"],
					      "Unable to delete presentation");
			}
		    });
		}
	    }
	});
    },

    ffmv_rmdir: function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];
	var store = this.getTreepanel().getStore();

	Ext.Msg.show({
	    title: _["title"],
	    msg: "This will delete the folder you have selected. Are you sure?",
	    buttons: Ext.Msg.YESNOCANCEL,
	    icon: Ext.Msg.WARNING,
	    scope: this,
	    fn: function(buttonId) {
		if(buttonId == "yes") {
		    Ext.Ajax.request({
			url: "rmdir" + rec.data.id,
			method: "POST",
			callback: function(options, success, response) {
			    if(success)
				rec.remove();
			    else
				Ext.Msg.alert(_["title"],
					      "Unable to delete subfolder");
			}
		    });
		}
	    }
	});
    },

    ffmv_upload: function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];

	Ext.ComponentManager.create({
	    xtype: "fileupload",
	    rec: rec
	}).show();
    },

    ffmv_expand: function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];
	this.getTreeview().expand(rec, true);
    },

    ffmv_collapse: function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];
	this.getTreeview().collapse(rec, true);
    }
});
