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
		afteritemexpand: this.afteritemexpand,
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
	    "menuitem[itemid = 'ffmv_searchin']": {
		click: this.ffmv_searchin
	    },
	    "menuitem[itemid = 'ffmv_searchunder']": {
		click: this.ffmv_searchunder
	    },
	    "menuitem[itemid = 'ffmv_expand']": {
		click: this.ffmv_expand
	    },
	    "menuitem[itemid = 'ffmv_collapse']": {
		click: this.ffmv_collapse
	    }
        });
    },

    afteritemexpand: function(node, idx, item, options) {
	var tree = this.getTreepanel();
	var selNode = tree.getSelectionModel().selected.getAt(0);
	if(selNode && node.contains(selNode))
	    tree.getView().focusRow(selNode);
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

	window.open("dl" + rec.data.id.replace(/\t/g, "%09").replace(/#/g, "%23").replace(/\?/g, "%3F"), "_blank");
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

    ffmv_expand: function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];
	this.getTreeview().expand(rec, true);
    },

    ffmv_collapse: function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];
	this.getTreeview().collapse(rec, true);
    }
});
