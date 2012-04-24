Ext.require("Ext.container.Viewport");
Ext.require("Ext.data.TreeStore");
Ext.require("Ext.form.Label");
Ext.require("Ext.form.Panel");
Ext.require("Ext.layout.container.Accordion");
Ext.require("Ext.layout.container.Border");
Ext.require("Ext.tree.Panel");
Ext.require("Ext.util.History");
Ext.require("Ext.Img");

Ext.require("Ext.grid.Scroller", function() {
    // http://www.sencha.com/forum/archive/index.php/t-142473.html
    
    Ext.override(Ext.grid.Scroller, {
	afterRender: function() {
	    var me = this;
	    me.callParent();
	    me.mon(me.scrollEl, "scroll", me.onElScroll, me);
	    Ext.cache[me.el.id].skipGarbageCollection = true;
	    Ext.EventManager.addListener(me.scrollEl, "scroll",
					 me.onElScrollCheck, me);
	    Ext.cache[me.scrollEl.id].skipGarbageCollection = true;
	},
	
	wasScrolled: false,
	
	onElScroll: function(event, target) {
	    this.wasScrolled = true;
	    this.fireEvent("bodyscroll", event, target);
	},
	
	onElScrollCheck: function(event, target, options) {
	    var me = this;
	    
	    if (!me.wasScrolled)
		me.mon(me.scrollEl, "scroll", me.onElScroll, me);
	    
	    me.wasScrolled = false;
	}
    });
});

var _ = { title: "SA tools presentation search" };

function not_implemented() {
    Ext.Msg.alert(_["title"], "Functionality not implemented yet");
}

Ext.application({
    name: "Juno",
    appFolder: "",

    controllers: [
	"SearchController",
	"SlidesController",
	"FileUploadController",
	"FilesystemController"
    ],

    launch: function() {
        Ext.create("Ext.container.Viewport", {
	    items: [{
		xtype: "filesystem",
		region: "west",
		title: "Filesystem",
		collapsible: true,
		split: true,
		width: "22%"
	    }, {
		items: [{
		    xtype: "search",
		    region: "center"
		}, {
		    items: [{
			xtype: "presobrowser"
		    }],
		    region: "south",
		    title: "Presentation",
		    autoScroll: true,
		    collapsible: true,
		    layout: "fit",
		    height: 252,
		    split: true
		}],
		layout: "border",
		region: "center",
		border: false
	    }],
	    layout: {
		padding: 5,
		type: "border"
	    },
	    id: "myviewport"
        });

	Ext.util.History.init();
	var sc = this.getController("SearchController");
	Ext.util.History.on('change', sc.historysearch, sc);
	sc.historysearch(Ext.util.History.getToken());
    }
});
