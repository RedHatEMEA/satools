Ext.define("Juno.view.SlideZoomView", {
    alias: "widget.slidezoom",
    extend: "Ext.window.Window",

    modal: true,
    layout: "anchor",
    resizable: false,

    constructor: function() {
	this.callParent(arguments);
	this.populate();
	return this;
    },

    populate: function() {
	var win = this;

	this.add([{
	    anchor: "100%",
	    xtype: "image",
	    id: "myimage",
	    src: this.png,
	    listeners: {
		click: {
		    element: "el",
		    fn: function() {
			win.close();
		    }
		},
		afterrender: function(ths, opt) {
		    var vp = Ext.getCmp("myviewport");
		    var picaspect = 4 / 3;
		    var sz = 0.75; // 75% of viewport
		    var vph = vp.getHeight();
		    var vpw = vp.getWidth();
		    var h, w;
		    if(vpw / vph >= picaspect) {
			//screen letterbox, h is constraining factor;
			w = vph * picaspect * sz;
		    } else {
			w = vpw * sz;
		    }
		    h = w / picaspect + 25;

		    this.setWidth(w);
		    this.setHeight(h);
		}
	    }
	}]);
    }
});
